import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '@/lib/analytics-config'

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      {/* Must run before gtag.js loads: set denied defaults, grant if already accepted */}
      <Script id="ga-consent-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          wait_for_update: 500
        });
        if (localStorage.getItem('ga-consent') === 'accepted') {
          gtag('consent', 'update', { analytics_storage: 'granted' });
        }
      `}</Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">{`
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `}</Script>
    </>
  )
}
