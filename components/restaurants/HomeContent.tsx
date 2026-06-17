'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import RestaurantCard from './RestaurantCard'
import { ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '@/lib/language-context'
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
  const { lang } = useLang()
  const isRtl = lang === 'ar'
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
        className={`absolute left-0 inset-y-0 w-10 bg-gradient-to-r from-background to-transparent z-10 flex items-center transition-opacity duration-200 pointer-events-none ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="ms-4 h-11 w-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-colors pointer-events-auto"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-8 pb-3"
        dir={isRtl ? 'rtl' : 'ltr'}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
      >
        {restaurants.map((r, i) => (
          <div key={r.id} className="snap-start shrink-0 w-[272px] sm:w-[296px]">
            <RestaurantCard restaurant={r} priority={i < 2} />
          </div>
        ))}
        <div className="shrink-0 w-8" aria-hidden="true" />
      </div>

      {/* Right fade + arrow */}
      <div
        className={`absolute right-0 inset-y-0 w-10 bg-gradient-to-l from-background to-transparent z-10 flex items-center justify-end transition-opacity duration-200 pointer-events-none ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="me-4 h-11 w-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-colors pointer-events-auto"
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
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
        <Search className="h-7 w-7 text-muted-foreground/50" />
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
  const allDeals = [...vip, ...featured, ...basicRestaurants]

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border/40">
        <AnimatedHero />
      </section>

      {/* Empty state */}
      {allDeals.length === 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <EmptyDeals title={t.deals.emptyTitle} subtitle={t.deals.emptySubtitle} />
          </div>
        </section>
      )}

      {/* Premium Deals (VIP) */}
      {vip.length > 0 && (
        <section className="py-20 overflow-hidden bg-muted/50">
          <div className="px-4 sm:px-6 lg:px-8 mb-10">
            <SectionHeader
              title={t.deals.premiumTitle}
              subtitle={t.deals.premiumSubtitle}
              action={
                <Link href="/deals" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                  {t.deals.seeAll} <ArrowRight className="ms-1.5 h-3.5 w-3.5" />
                </Link>
              }
            />
          </div>
          <CardCarousel restaurants={vip} />
        </section>
      )}

      {/* All Deals */}
      {allDeals.length > 0 && (
        <section className="py-20 overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 mb-10">
            <SectionHeader
              title={t.deals.allDealsTitle}
              subtitle={t.deals.allDealsSubtitle}
              action={
                <Link href="/deals" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                  {t.deals.seeAll} <ArrowRight className="ms-1.5 h-3.5 w-3.5" />
                </Link>
              }
            />
          </div>
          <CardCarousel restaurants={allDeals} />
        </section>
      )}
    </div>
  )
}
