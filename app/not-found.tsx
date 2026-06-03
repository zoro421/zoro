'use client'

import Link from 'next/link'
import { useLang } from '@/lib/language-context'

export default function NotFound() {
  const { t } = useLang()

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-24 gap-6">
      <p className="text-8xl font-black text-primary select-none">404</p>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{t.notFound.title}</h1>
        <p className="text-muted-foreground max-w-xs">{t.notFound.subtitle}</p>
      </div>
      <Link
        href="/deals"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
      >
        {t.notFound.back}
      </Link>
    </div>
  )
}
