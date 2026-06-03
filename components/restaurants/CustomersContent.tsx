'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Mail, Search, MapPin, Utensils } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const highlights = [
  {
    title: 'Completely Free',
    desc: 'No subscription. No hidden fees. Browsing deals on Tashkelah is free — and always will be.',
  },
  {
    title: 'No App Needed',
    desc: 'Tashkelah works in any browser on your phone, tablet, or computer. Nothing to download or install.',
  },
  {
    title: 'No Account Required',
    desc: 'Browse all restaurants and deals without creating an account. Just open and explore.',
  },
]

const howToUse = [
  {
    Icon: Search,
    title: 'Browse deals',
    desc: 'Filter by emirate, cuisine type, or discount percentage. Find exactly what you\'re in the mood for.',
  },
  {
    Icon: MapPin,
    title: 'Pick a spot',
    desc: 'View deal details, browse photos, check the address, and get directions — all on one page.',
  },
  {
    Icon: Utensils,
    title: 'Walk in & enjoy',
    desc: 'Head to the restaurant and mention you found the offer on Tashkelah. No voucher, no booking, no code.',
  },
]

const faqs = [
  {
    q: 'Is Tashkelah free for customers?',
    a: 'Yes — 100% free. There is no subscription, no credits, and no hidden fees. Browsing and using deals on Tashkelah costs nothing.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No app needed. Tashkelah runs entirely in your browser. Open it on any device — phone, tablet, or desktop — and start browsing immediately. Nothing to install.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. You can view all restaurants and active deals without signing up. An account is optional.',
  },
  {
    q: 'How do I use a deal?',
    a: 'Browse, find a restaurant you like, then simply walk in and tell the staff you found the deal on Tashkelah. No voucher, no QR code, no booking required.',
  },
  {
    q: 'How often are deals updated?',
    a: 'Deals are updated daily. Each listing shows an expiry date so you always know what\'s still valid. Expired deals are automatically removed.',
  },
  {
    q: 'Which areas of the UAE are covered?',
    a: 'We cover Dubai, Abu Dhabi, Sharjah, Ajman, and other emirates. New restaurants and locations are added regularly.',
  },
  {
    q: 'Is the app available in Arabic?',
    a: 'Yes. Tap the language toggle in the navigation bar to switch the entire interface to Arabic.',
  },
  {
    q: 'What types of deals are available?',
    a: 'You\'ll find percentage discounts (e.g. 30% OFF), fixed discounts, buy-one-get-one deals, set menus, and other special walk-in offers.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-medium text-base hover:text-primary transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={cn(
          'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
          open && 'rotate-180'
        )} />
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed -mt-1">
          {a}
        </p>
      )}
    </div>
  )
}

export default function CustomersContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,hsl(var(--primary)/0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,hsl(var(--background)))]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-8">
          <div className="animate-fade-up flex flex-wrap items-center justify-center gap-2">
            {['100% Free', 'No App', 'No Registration'].map((label) => (
              <span key={label} className="px-3 py-1.5 rounded-full border border-primary/25 bg-primary/[0.09] text-xs font-semibold text-primary uppercase tracking-wider">
                {label}
              </span>
            ))}
          </div>
          <h1 className="animate-fade-up [animation-delay:80ms] text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Everything you need<br /> to know
          </h1>
          <p className="animate-fade-up [animation-delay:160ms] text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Tashkelah is the simplest way to discover and walk into the best restaurants across the UAE — with zero cost and zero friction.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-card p-8 space-y-3 hover:border-primary/40 transition-colors">
                <h3 className="font-bold text-xl">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How to use Tashkelah</h2>
            <p className="text-muted-foreground text-base">Three steps. No friction.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {howToUse.map(({ Icon, title, desc }, i) => (
              <div key={title} className="relative p-8 sm:p-10 overflow-hidden group hover:bg-primary/[0.03] transition-colors">
                <span className="absolute -top-3 -right-1 text-[120px] font-black text-primary/[0.055] leading-none select-none pointer-events-none group-hover:text-primary/[0.09] transition-colors duration-300">
                  {i + 1}
                </span>
                <div className="relative">
                  <Icon className="h-6 w-6 text-primary mb-5" />
                  <h3 className="font-bold text-xl mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
            <p className="text-muted-foreground text-base">Quick answers to common questions.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-6 sm:px-8">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-muted/40">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="text-muted-foreground text-base">We&apos;re happy to help. Reach out and we&apos;ll get back to you quickly.</p>
          <Link href="mailto:info@atayyeb.ae" className={buttonVariants({ size: 'lg', variant: 'outline' })}>
            <Mail className="h-4 w-4 me-2" />
            info@atayyeb.ae
          </Link>
        </div>
      </section>
    </div>
  )
}
