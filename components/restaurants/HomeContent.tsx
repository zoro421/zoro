'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import RestaurantCard from './RestaurantCard'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import type { Restaurant } from '@/lib/types'

interface HomeContentProps {
  vip: Restaurant[]
  featured: Restaurant[]
  basicRestaurants: Restaurant[]
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: React.ReactNode
  title: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="space-y-1">
        {eyebrow && <div className="flex items-center gap-2 mb-2">{eyebrow}</div>}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em]">{title}</h2>
        {subtitle && <p className="text-muted-foreground text-base mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

function EmptyDeals({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <UtensilsCrossed className="h-7 w-7 text-primary/60" />
      </div>
      <div className="space-y-2 max-w-sm">
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-base text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}

export default function HomeContent({ vip, featured, basicRestaurants }: HomeContentProps) {
  const { t } = useLang()
  const noDeals = vip.length === 0 && featured.length === 0 && basicRestaurants.length === 0

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32 border-b border-border/40">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,var(--background))]" />
        {/* Dot-grid texture */}
        <div className="absolute inset-0 opacity-[0.045] pointer-events-none [background-image:radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:22px_22px]" />
        {/* Rings */}
        <div className="absolute -top-28 -right-28 w-[560px] h-[560px] rounded-full border-[52px] border-primary/[0.14] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-[32px] border-primary/[0.11] pointer-events-none" />
        {/* Glow blobs */}
        <div className="absolute top-1/3 right-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.12] blur-3xl pointer-events-none" />
        <div className="absolute -top-10 left-[8%] w-72 h-72 rounded-full bg-primary/[0.08] blur-3xl pointer-events-none" />
        {/* Accent dots */}
        <div className="absolute top-24 left-[22%] w-2.5 h-2.5 rounded-full bg-primary/25 pointer-events-none" />
        <div className="absolute bottom-32 right-[30%] w-1.5 h-1.5 rounded-full bg-primary/20 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — text (second on mobile, left on desktop) */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-7 order-last lg:order-none">

              <h1 className="animate-fade-up text-5xl sm:text-6xl font-bold tracking-[-0.04em] leading-[1.05]">
                {t.hero.title1}<br />
                <span className="text-primary">{t.hero.title2}</span>{' '}{t.hero.title3}
              </h1>

              <p className="animate-fade-up [animation-delay:80ms] text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>

              <div className="animate-fade-up [animation-delay:160ms] flex flex-col sm:flex-row gap-3 w-full justify-center lg:justify-start">
                <Link href="/deals" className={buttonVariants({ size: 'lg' })}>
                  {t.hero.browseDeals} <ArrowRight className="ms-2 h-4 w-4" />
                </Link>
                <Link href="/business" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                  {t.hero.listRestaurant}
                </Link>
              </div>

            </div>

            {/* Right — brand lockup (first on mobile, right on desktop) */}
            <div className="flex justify-center lg:justify-end items-center pb-2 lg:pb-0 order-first lg:order-none animate-fade-in [animation-delay:180ms]">
              <div className="relative flex flex-col items-center lg:items-end leading-none select-none">
                <div className="absolute inset-[-40px] bg-primary/[0.08] blur-3xl rounded-full pointer-events-none" />
                <span
                  style={{
                    fontFamily: 'var(--font-cairo), sans-serif',
                    fontSize: 'clamp(56px, 14vw, 100px)',
                    fontWeight: 700,
                    color: '#C94040',
                    lineHeight: 1.25,
                    paddingBottom: '0.05em',
                    position: 'relative',
                  }}
                >
                  عزوتي
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-montserrat), sans-serif',
                    fontSize: 'clamp(42px, 10vw, 74px)',
                    fontWeight: 700,
                    letterSpacing: '6px',
                    lineHeight: 1.2,
                    position: 'relative',
                  }}
                  className="text-[#1C1410] dark:text-[#EAA030]"
                >
                  OZWATI
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Empty state */}
      {noDeals && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <EmptyDeals title={t.deals.emptyTitle} subtitle={t.deals.emptySubtitle} />
          </div>
        </section>
      )}

      {/* VIP section */}
      {vip.length > 0 && (
        <section className="py-20 border-b border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeader
              title="Exclusive picks"
              subtitle="Handpicked top-tier experiences."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {vip.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
            </div>
          </div>
        </section>
      )}

      {/* Premium featured section */}
      {featured.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeader
              title={t.deals.featuredTitle}
              subtitle={t.deals.featuredSubtitle}
              action={
                <Link href="/deals" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                  {t.deals.seeAll} <ArrowRight className="ms-1.5 h-3.5 w-3.5" />
                </Link>
              }
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featured.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
            </div>
          </div>
        </section>
      )}

      {/* Basic deals section */}
      {basicRestaurants.length > 0 && (
        <section className="py-20 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeader
              title={featured.length > 0 ? t.deals.moreDealsTitle : t.deals.activeDealsTitle}
              subtitle={t.deals.dealsSubtitle}
              action={
                <Link href="/deals" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                  {t.deals.browseAll} <ArrowRight className="ms-1.5 h-3.5 w-3.5" />
                </Link>
              }
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {basicRestaurants.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
