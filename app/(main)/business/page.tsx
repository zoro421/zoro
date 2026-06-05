import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Users, Zap, TrendingUp, CheckCircle, MessageSquare } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { BRAND } from '@/lib/brand'

export const metadata: Metadata = {
  title: `For Businesses — ${BRAND.name}`,
  description: `List your place on ${BRAND.name} and get discovered by thousands of UAE visitors looking for walk-in deals.`,
}

const benefits = [
  {
    Icon: Users,
    title: 'Thousands of daily visitors',
    desc: 'UAE visitors actively searching for places to go — your deals appear exactly when they\'re ready to walk in.',
  },
  {
    Icon: Zap,
    title: 'Same-day listings',
    desc: 'Submit your details and go live fast. We review and publish listings within 24 hours.',
  },
  {
    Icon: TrendingUp,
    title: 'Track your visibility',
    desc: 'See how many people viewed your listing so you know what\'s working.',
  },
  {
    Icon: MessageSquare,
    title: 'Direct walk-ins, not clicks',
    desc: 'Every visitor we send your way arrives at your door — real footfall, same day. No referral links, no complicated funnels.',
  },
]

const steps = [
  {
    title: 'Send us your details',
    desc: `Email your business name, location, phone number, and current walk-in offer to ${BRAND.email}.`,
  },
  {
    title: 'We review & set up',
    desc: 'Our team reviews your listing and publishes it — typically within 24 hours, often much faster.',
  },
  {
    title: 'Start getting walk-ins',
    desc: 'Your listing and deals appear to thousands of UAE visitors actively looking for somewhere to go.',
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
          <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            Be discovered by thousands<br className="hidden sm:block" /> of UAE visitors
          </h1>
          <p className="animate-fade-up [animation-delay:80ms] text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Our goal is to spotlight the potential of local UAE businesses — connecting them with visitors who are ready to walk in, right now.
          </p>
          <div className="animate-fade-up [animation-delay:160ms]">
            <Link
              href={`mailto:${BRAND.email}`}
              className={buttonVariants({ size: 'lg' })}
              style={{ background: '#1a1a1a', borderColor: '#1a1a1a' }}
            >
              <Mail className="h-4 w-4 me-2" />
              Get listed — {BRAND.email}
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
                {BRAND.name} was built with one belief: great local businesses deserve to be found. Not just the big chains — the neighbourhood gem, the family-run spot, the place doing something nobody else does.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                We built a platform that makes it effortless for UAE visitors to discover local spots and walk straight in. No apps. No vouchers. No friction — just great experiences happening every day.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-border hover:bg-muted/40 transition-colors">
                  <b.Icon className="h-5 w-5 text-foreground" />
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
              <div key={step.title} className="relative p-8 sm:p-10 overflow-hidden group hover:bg-muted/40 transition-colors">
                <span className="absolute -top-3 -right-1 text-[120px] font-black text-foreground/[0.04] leading-none select-none pointer-events-none group-hover:text-foreground/[0.07] transition-colors duration-300">
                  {i + 1}
                </span>
                <div className="relative">
                  <CheckCircle className="h-6 w-6 text-foreground mb-5" />
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
          <div className="relative overflow-hidden rounded-3xl bg-white border border-border px-8 py-14 sm:px-14 text-center">
            <div className="relative space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a1a1a]">Ready to be discovered?</h2>
              <p className="text-[#4a5568] text-base max-w-xl mx-auto leading-relaxed">
                Email us your business name, location, and current offer at {BRAND.email}. We&apos;ll get you listed within 24 hours.
              </p>
              <div className="pt-2">
                <Link href={`mailto:${BRAND.email}`} className={buttonVariants({ size: 'lg', variant: 'outline' })}>
                  <Mail className="h-4 w-4 me-2" />
                  {BRAND.email}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
