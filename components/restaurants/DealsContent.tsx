'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { UtensilsCrossed, ChevronLeft, ChevronRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import RestaurantCard from './RestaurantCard'
import { useLang } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import type { Restaurant } from '@/lib/types'

interface DealsContentProps {
  restaurants: Restaurant[]
  total: number
  currentPage: number
  totalPages: number
  hasActiveFilters: boolean
}

function buildPageUrl(searchParams: URLSearchParams, page: number) {
  const params = new URLSearchParams(searchParams.toString())
  if (page === 1) params.delete('page')
  else params.set('page', page.toString())
  const str = params.toString()
  return `/deals${str ? `?${str}` : ''}`
}

export default function DealsContent({
  restaurants,
  total,
  currentPage,
  totalPages,
  hasActiveFilters,
}: DealsContentProps) {
  const { t } = useLang()
  const searchParams = useSearchParams()

  const countLabel = hasActiveFilters
    ? `${total} ${total === 1 ? t.dealsPage.result : t.dealsPage.results}`
    : `${total} ${total === 1 ? t.dealsPage.activeDeal : t.dealsPage.activeDeals}`

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      <p className="text-sm text-muted-foreground font-medium">{countLabel}</p>

      {restaurants.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
            <UtensilsCrossed className="h-7 w-7 text-muted-foreground/50" />
          </div>
          <div className="space-y-1.5">
            <p className="text-xl font-semibold">{t.dealsPage.noDealsTitle}</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              {hasActiveFilters ? t.dealsPage.noDealsFiltered : t.dealsPage.noDealsEmpty}
            </p>
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-4">
          {currentPage > 1 ? (
            <Link
              href={buildPageUrl(searchParams, currentPage - 1)}
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5')}
            >
              <ChevronLeft className="h-4 w-4" /> {t.dealsPage.prev}
            </Link>
          ) : (
            <div className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5 opacity-40 pointer-events-none')}>
              <ChevronLeft className="h-4 w-4" /> {t.dealsPage.prev}
            </div>
          )}

          <span className="text-sm text-muted-foreground tabular-nums">
            {t.dealsPage.page} {currentPage} {t.dealsPage.of} {totalPages}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={buildPageUrl(searchParams, currentPage + 1)}
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5')}
            >
              {t.dealsPage.next} <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <div className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5 opacity-40 pointer-events-none')}>
              {t.dealsPage.next} <ChevronRight className="h-4 w-4" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
