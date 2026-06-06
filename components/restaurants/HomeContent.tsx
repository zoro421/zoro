'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import RestaurantCard from './RestaurantCard'
import { ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react'
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

function CardCarousel({ restaurants }: { restaurants: Restaurant[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(restaurants.length > 3)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -336 : 336, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Left fade + arrow */}
      <div
        className={`absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-background to-transparent z-10 flex items-center transition-opacity duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="ms-4 h-9 w-9 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-8 pb-3"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
      >
        {restaurants.map((r) => (
          <div key={r.id} className="snap-start shrink-0 w-[272px] sm:w-[296px]">
            <RestaurantCard restaurant={r} />
          </div>
        ))}
        {/* Trailing spacer — no snap-start so it never becomes a snap target */}
        <div className="shrink-0 w-4 sm:w-6 lg:w-8" aria-hidden="true" />
      </div>

      {/* Right fade + arrow */}
      <div
        className={`absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-background to-transparent z-10 flex items-center justify-end transition-opacity duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="me-4 h-9 w-9 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function EmptyDeals({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Search className="h-7 w-7 text-primary/60" />
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
        <section className="py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
            <SectionHeader
              title={t.deals.featuredTitle}
              subtitle={t.deals.featuredSubtitle}
              action={
                <Link href="/deals" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                  {t.deals.seeAll} <ArrowRight className="ms-1.5 h-3.5 w-3.5" />
                </Link>
              }
            />
          </div>
          <CardCarousel restaurants={featured} />
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
