'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import RestaurantCard from './RestaurantCard'
import { ArrowRight, Star, UtensilsCrossed } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import type { Restaurant } from '@/lib/types'

interface HomeContentProps {
  featured: Restaurant[]
  basicRestaurants: Restaurant[]
  totalRestaurants: number
  totalDeals: number
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
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
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

export default function HomeContent({ featured, basicRestaurants, totalRestaurants, totalDeals }: HomeContentProps) {
  const { t } = useLang()
  const noDeals = featured.length === 0 && basicRestaurants.length === 0

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32 border-b border-border/40">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,hsl(var(--primary)/0.2),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,hsl(var(--background)))]" />
        {/* Rings */}
        <div className="absolute -top-28 -right-28 w-[560px] h-[560px] rounded-full border-[52px] border-primary/[0.09] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-[32px] border-primary/[0.07] pointer-events-none" />
        {/* Glow blob */}
        <div className="absolute top-1/3 right-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.07] blur-3xl pointer-events-none" />
        {/* Accent dots */}
        <div className="absolute top-24 left-[22%] w-2.5 h-2.5 rounded-full bg-primary/25 pointer-events-none" />
        <div className="absolute bottom-32 right-[30%] w-1.5 h-1.5 rounded-full bg-primary/20 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — text (second on mobile, left on desktop) */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-7 order-last lg:order-none">

              {/* Pill badge */}
              <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/[0.09] text-xs font-semibold text-primary uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                UAE · Walk-in Dining Deals
              </div>

              <h1 className="animate-fade-up [animation-delay:80ms] text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
                {t.hero.title1}<br />
                <span className="text-primary">{t.hero.title2}</span>{' '}{t.hero.title3}
              </h1>

              <p className="animate-fade-up [animation-delay:160ms] text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>

              <div className="animate-fade-up [animation-delay:240ms] flex flex-col sm:flex-row gap-3 w-full justify-center lg:justify-start">
                <Link href="/deals" className={buttonVariants({ size: 'lg' })}>
                  {t.hero.browseDeals} <ArrowRight className="ms-2 h-4 w-4" />
                </Link>
                <Link href="/business" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                  {t.hero.listRestaurant}
                </Link>
              </div>

              {/* Stats */}
              {(totalRestaurants > 0 || totalDeals > 0) && (
                <div className="animate-fade-up [animation-delay:320ms] flex items-center gap-6 pt-1">
                  {totalRestaurants > 0 && (
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-2xl font-bold text-foreground leading-none">{totalRestaurants}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Restaurants</span>
                    </div>
                  )}
                  {totalRestaurants > 0 && totalDeals > 0 && (
                    <div className="w-px h-10 bg-border" />
                  )}
                  {totalDeals > 0 && (
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-2xl font-bold text-primary leading-none">{totalDeals}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Active Deals</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right — wordmark (first on mobile, right on desktop) */}
            <div className="flex justify-center lg:justify-end items-center pb-2 lg:pb-0 order-first lg:order-none animate-fade-in [animation-delay:180ms]">
              <div className="relative flex flex-col items-center lg:items-end leading-none select-none">
                <div className="absolute inset-[-40px] bg-primary/[0.08] blur-3xl rounded-full pointer-events-none" />
                <span
                  style={{
                    fontFamily: 'var(--font-cairo), sans-serif',
                    fontSize: 'clamp(56px, 14vw, 100px)',
                    fontWeight: 700,
                    color: '#E24B4A',
                    lineHeight: 1,
                    position: 'relative',
                  }}
                >
                  تشكيلة
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
                  className="text-[#1C1410] dark:text-[#EF9F27]"
                >
                  TASHKELAH
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

      {/* Premium featured section */}
      {featured.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeader
              eyebrow={
                <>
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{t.deals.featuredLabel}</span>
                </>
              }
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
