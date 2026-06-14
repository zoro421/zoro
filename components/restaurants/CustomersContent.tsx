'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Mail, Search, MapPin, DoorOpen } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BRAND } from '@/lib/brand'
import { useLang } from '@/lib/language-context'

const stepIcons = [Search, MapPin, DoorOpen]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-medium text-base hover:text-[#2E6DA4] transition-colors cursor-pointer"
      >
        <span>{q}</span>
        <ChevronDown className={cn(
          'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
          open && 'rotate-180'
        )} />
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed -mt-1">{a}</p>
      )}
    </div>
  )
}

export default function CustomersContent() {
  const { t } = useLang()
  const c = t.customers

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,hsl(var(--primary)/0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,hsl(var(--background)))]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-8">
          <h1 className="animate-fade-up text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            {c.heroTitle}
          </h1>
          <p className="animate-fade-up [animation-delay:80ms] text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            {c.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {c.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-card p-8 space-y-3 hover:border-[#2E6DA4]/30 transition-colors">
                <h3 className="font-bold text-xl">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{c.howItWorksTitle}</h2>
            <p className="text-muted-foreground text-base">{c.howItWorksSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {c.steps.map(({ title, desc }, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={title} className="relative p-8 sm:p-10 overflow-hidden group hover:bg-muted/40 transition-colors">
                  <span className="absolute -top-3 -end-1 text-[120px] font-black text-foreground/[0.04] leading-none select-none pointer-events-none group-hover:text-foreground/[0.07] transition-colors duration-300">
                    {i + 1}
                  </span>
                  <div className="relative">
                    <Icon className="h-6 w-6 text-foreground mb-5" />
                    <h3 className="font-bold text-xl mb-3">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{c.faqTitle}</h2>
            <p className="text-muted-foreground text-base">{c.faqSubtitle}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-6 sm:px-8">
            {c.faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl font-bold">{c.stillQuestionsTitle}</h2>
          <p className="text-muted-foreground text-base">{c.stillQuestionsSubtitle}</p>
          <Link href={`mailto:${BRAND.email}`} className={buttonVariants({ size: 'lg' })} style={{ background: '#1a1a1a', borderColor: '#1a1a1a' }}>
            <Mail className="h-4 w-4 me-2" />
            {BRAND.email}
          </Link>
        </div>
      </section>
    </div>
  )
}
