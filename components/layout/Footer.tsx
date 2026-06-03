'use client'

import Link from 'next/link'
import { useLang } from '@/lib/language-context'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="mt-auto border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/">
              <Logo size="lg" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-sm font-semibold mb-3">{t.footer.explore}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/deals" className="hover:text-primary transition-colors">{t.footer.browseDeals}</Link></li>
                <li><Link href="/customers" className="hover:text-primary transition-colors">{t.nav.customersLink}</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-3">{t.footer.restaurants}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/business" className="hover:text-primary transition-colors">{t.nav.businessLink}</Link></li>
                <li><Link href="/list-your-restaurant" className="hover:text-primary transition-colors">{t.footer.listRestaurant}</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-3">{t.footer.company}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">{t.footer.terms}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/40 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Tashkelah. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
