'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Mail, Users, Zap, TrendingUp, MessageSquare, CheckCircle, ChevronDown } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BRAND } from '@/lib/brand'
import { useLang } from '@/lib/language-context'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-medium text-base hover:text-[#2E6DA4] transition-colors cursor-pointer"
      >
        <span>{q}</span>
        <ChevronDown className={cn('h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200', open && 'rotate-180')} />
      </button>
      {open && <p className="pb-5 text-sm text-muted-foreground leading-relaxed -mt-1">{a}</p>}
    </div>
  )
}

const benefitIcons = [Users, Zap, TrendingUp, MessageSquare]

export default function BusinessContent() {
  const { t } = useLang()
  const b = t.business

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,hsl(var(--primary)/0.18),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,hsl(var(--background)))]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            {b.heroTitle}
          </h1>
          <p className="animate-fade-up [animation-delay:80ms] text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {b.heroSubtitle}
          </p>
          <div className="animate-fade-up [animation-delay:160ms]">
            <Link
              href={`mailto:${BRAND.email}`}
              className={buttonVariants({ size: 'lg' })}
              style={{ background: '#1a1a1a', borderColor: '#1a1a1a' }}
            >
              <Mail className="h-4 w-4 me-2" />
              {b.getListedBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission + Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] border-b-2 border-foreground pb-0.5">{b.missionLabel}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">{b.missionTitle}</h2>
              <p className="text-muted-foreground text-base leading-relaxed">{b.missionP1}</p>
              <p className="text-muted-foreground text-base leading-relaxed">{b.missionP2}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {b.benefits.map(({ title, desc }, i) => {
                const Icon = benefitIcons[i]
                return (
                  <div key={title} className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-border hover:bg-muted/40 transition-colors">
                    <Icon className="h-5 w-5 text-foreground" />
                    <h3 className="font-semibold text-sm leading-snug">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How to get listed */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{b.howToListTitle}</h2>
            <p className="text-muted-foreground text-base">{b.howToListSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {b.steps.map(({ title, desc }, i) => (
              <div key={title} className="relative p-8 sm:p-10 overflow-hidden group hover:bg-muted/40 transition-colors">
                <span className="absolute -top-3 -end-1 text-[120px] font-black text-foreground/[0.04] leading-none select-none pointer-events-none group-hover:text-foreground/[0.07] transition-colors duration-300">
                  {i + 1}
                </span>
                <div className="relative">
                  <CheckCircle className="h-6 w-6 text-foreground mb-5" />
                  <h3 className="font-bold text-xl mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{b.faqTitle}</h2>
            <p className="text-muted-foreground text-base">{b.faqSubtitle}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-6 sm:px-8">
            {b.faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{b.ctaTitle}</h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">{b.ctaSubtitle}</p>
            <div className="pt-2">
              <Link href={`mailto:${BRAND.email}`} className={buttonVariants({ size: 'lg' })} style={{ background: '#1a1a1a', borderColor: '#1a1a1a' }}>
                <Mail className="h-4 w-4 me-2" />
                {BRAND.email}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
