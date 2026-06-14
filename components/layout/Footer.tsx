'use client'

import Link from 'next/link'
import { useLang } from '@/lib/language-context'
import Logo from '@/components/ui/Logo'
import { BRAND } from '@/lib/brand'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="mt-auto border-t border-border/40 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Mobile: centered stack | Desktop: row */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-start gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/">
              <Logo size="lg" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links — mobile: stacked centered; desktop: row */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground/70 mb-4">{t.footer.explore}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/deals" className="hover:text-[#2E6DA4] transition-colors">{t.footer.browseDeals}</Link></li>
                <li><Link href="/customers" className="hover:text-[#2E6DA4] transition-colors">{t.nav.customersLink}</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground/70 mb-4">{t.footer.restaurants}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/business" className="hover:text-[#2E6DA4] transition-colors">{t.nav.businessLink}</Link></li>
                <li><Link href="/list-your-restaurant" className="hover:text-[#2E6DA4] transition-colors">{t.footer.listRestaurant}</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground/70 mb-4">{t.footer.company}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-[#2E6DA4] transition-colors">{t.footer.privacy}</Link></li>
                <li><Link href="/terms" className="hover:text-[#2E6DA4] transition-colors">{t.footer.terms}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-xs text-muted-foreground text-center md:text-start">
          <p>© {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
