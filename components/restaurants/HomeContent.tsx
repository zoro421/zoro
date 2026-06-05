'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import RestaurantCard from './RestaurantCard'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { PulseFitHero } from '@/components/ui/pulse-fit-hero'
import { AnimatedHero } from '@/components/ui/animated-hero'
import type { Restaurant } from '@/lib/types'

interface HomeContentProps {
  vip: Restaurant[]
  featured: Restaurant[]
  basicRestaurants: Restaurant[]
}

function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="space-y-1">
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

  const vipPrograms = vip.map((r) => ({
    image: r.cover_image_url ?? `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80`,
    category: r.cuisine_type ?? 'Restaurant',
    title: r.name,
  }))

  return (
    <div>
      {/* Hero with VIP carousel */}
      <PulseFitHero
        showHeader={false}
        programs={vipPrograms}
        className="pt-14 border-b border-border/40"
      >
        <AnimatedHero />
      </PulseFitHero>

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
