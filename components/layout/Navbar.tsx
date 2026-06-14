'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, Sun, Moon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Logo from '@/components/ui/Logo'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/language-context'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { lang, t, toggleLang } = useLang()

  useEffect(() => setMounted(true), [])

  const navLinks = [
    { href: '/', label: t.nav.browseDeals },
    { href: '/deals', label: t.nav.dealsLink },
    { href: '/business', label: t.nav.businessLink },
    { href: '/customers', label: t.nav.customersLink },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-16 items-center justify-between" style={{ height: 'clamp(4rem, 5vw, 4rem)' }}>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative pb-0.5 text-sm font-medium transition-colors hover:text-[#2E6DA4]',
                  pathname === link.href ? 'text-[#2E6DA4]' : 'text-muted-foreground'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-[1px] inset-x-0 h-[2px] rounded-full bg-[#2E6DA4]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'text-muted-foreground hover:text-foreground font-medium w-10 px-0')}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'ع' : 'EN'}
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'text-muted-foreground hover:text-foreground')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>

          {/* Mobile menu trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger aria-label="Open menu" className="md:hidden cursor-pointer flex items-center justify-center rounded-lg hover:bg-muted transition-colors" style={{ width: 48, height: 48 }}>
              <Menu className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 flex flex-col p-0">
              {/* Header — logo row, then controls row */}
              <div className="px-5 pt-5 pb-4 border-b border-border/40 flex flex-col gap-4">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Logo size="sm" />
                </Link>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleLang}
                    className="flex-1 h-9 flex items-center justify-center rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label="Toggle language"
                  >
                    {lang === 'en' ? 'العربية' : 'English'}
                  </button>
                  {mounted && (
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="h-9 w-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      aria-label="Toggle theme"
                    >
                      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col gap-1 px-3 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center px-3 py-2.5 rounded-xl text-base font-medium transition-colors',
                      pathname === link.href
                        ? 'bg-[#2E6DA4]/10 text-[#2E6DA4]'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  )
}
