import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Users, Zap, TrendingUp, Star, CheckCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'For Businesses — Tashkelah',
  description: 'List your restaurant on Tashkelah and get discovered by thousands of UAE diners looking for walk-in deals.',
}

const benefits = [
  {
    Icon: Star,
    title: 'Zero cost to start',
    desc: 'No upfront fees, no contracts, no commitment. List your restaurant and start driving walk-in traffic today.',
  },
  {
    Icon: Users,
    title: 'Thousands of daily visitors',
    desc: 'UAE diners actively searching for places to eat — your deals appear exactly when they\'re ready to walk in.',
  },
  {
    Icon: Zap,
    title: 'Same-day listings',
    desc: 'Submit your details and go live fast. We review and publish listings within 24 hours.',
  },
  {
    Icon: TrendingUp,
    title: 'Track your visibility',
    desc: 'See how many people viewed your restaurant so you know what\'s working.',
  },
]

const steps = [
  {
    title: 'Send us your details',
    desc: 'Email your restaurant name, location, phone number, and current walk-in offer to info@atayyeb.ae.',
  },
  {
    title: 'We review & set up',
    desc: 'Our team reviews your listing and publishes it — typically within 24 hours, often much faster.',
  },
  {
    title: 'Start getting walk-ins',
    desc: 'Your restaurant and deals appear to thousands of UAE diners actively looking for somewhere to eat.',
  },
]

export default function BusinessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,hsl(var(--primary)/0.18),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,hsl(var(--background)))]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border-[48px] border-primary/[0.08] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/[0.09] text-xs font-semibold text-primary uppercase tracking-wider animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            For Restaurants &amp; Businesses
          </div>
          <h1 className="animate-fade-up [animation-delay:80ms] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            Be discovered by thousands<br className="hidden sm:block" /> of UAE diners
          </h1>
          <p className="animate-fade-up [animation-delay:160ms] text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Our goal is to spotlight the potential of local UAE businesses — connecting them with hungry diners who are ready to walk in, right now.
          </p>
          <div className="animate-fade-up [animation-delay:240ms]">
            <Link href="mailto:info@atayyeb.ae" className={buttonVariants({ size: 'lg' })}>
              <Mail className="h-4 w-4 me-2" />
              Get listed — info@atayyeb.ae
            </Link>
          </div>
        </div>
      </section>

      {/* Mission + Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary shrink-0" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                Built to spotlight local businesses
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Tashkelah was built with one belief: great local restaurants deserve to be found. Not just the big chains — the neighbourhood gem, the family-run spot, the place doing something nobody else does.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                We built a platform that makes it effortless for UAE diners to discover local restaurants and walk straight in. No apps. No vouchers. No friction — just great meals happening every day.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors">
                  <b.Icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-sm leading-snug">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to get listed */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How to get listed</h2>
            <p className="text-muted-foreground text-base">Three steps. Done in minutes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {steps.map((step, i) => (
              <div key={step.title} className="relative p-8 sm:p-10 overflow-hidden group hover:bg-primary/[0.03] transition-colors">
                <span className="absolute -top-3 -right-1 text-[120px] font-black text-primary/[0.055] leading-none select-none pointer-events-none group-hover:text-primary/[0.09] transition-colors duration-300">
                  {i + 1}
                </span>
                <div className="relative">
                  <CheckCircle className="h-6 w-6 text-primary mb-5" />
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1C1410] dark:bg-[#120E09] px-8 py-14 sm:px-14 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_80%_at_50%_0%,rgba(226,75,74,0.28),transparent)]" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span style={{
                fontFamily: 'var(--font-cairo), sans-serif',
                fontSize: 220,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.025)',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}>تشكيلة</span>
            </div>
            <div className="relative space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Ready to be discovered?</h2>
              <p className="text-white/55 text-base max-w-xl mx-auto leading-relaxed">
                Email us your restaurant name, location, and current offer. We&apos;ll get you listed within 24 hours.
              </p>
              <div className="pt-2">
                <Link href="mailto:info@atayyeb.ae" className={buttonVariants({ size: 'lg' })}>
                  <Mail className="h-4 w-4 me-2" />
                  info@atayyeb.ae
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
