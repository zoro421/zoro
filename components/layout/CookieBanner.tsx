'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('ga-consent')) setVisible(true)

    const handler = () => {
      if (!localStorage.getItem('ga-consent')) setVisible(true)
    }
    window.addEventListener('show-cookie-preferences', handler)
    return () => window.removeEventListener('show-cookie-preferences', handler)
  }, [])

  function accept() {
    localStorage.setItem('ga-consent', 'accepted')
    window.dispatchEvent(new Event('ga-consent-change'))
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('ga-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
          We use cookies to understand how visitors use our site — no personal data is collected.{' '}
          <Link href="/privacy" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={decline}>Decline</Button>
          <Button size="sm" onClick={accept}>Accept Analytics</Button>
        </div>
      </div>
    </div>
  )
}
