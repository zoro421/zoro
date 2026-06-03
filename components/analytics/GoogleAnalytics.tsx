'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { GA_MEASUREMENT_ID } from '@/lib/analytics-config'

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('ga-consent')
    if (stored === 'accepted') setHasConsent(true)

    const handler = () => {
      setHasConsent(localStorage.getItem('ga-consent') === 'accepted')
    }
    window.addEventListener('ga-consent-change', handler)
    return () => window.removeEventListener('ga-consent-change', handler)
  }, [])

  if (!hasConsent || !GA_MEASUREMENT_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false
        });
      `}</Script>
    </>
  )
}
