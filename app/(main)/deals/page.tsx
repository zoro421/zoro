'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import FilterBar from '@/components/filters/FilterBar'
import SearchBar from '@/components/filters/SearchBar'
import DealsContent from '@/components/restaurants/DealsContent'
import { restaurants } from '@/lib/data'

const PAGE_SIZE = 12

function DealsPageInner() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') ?? ''
  const emirate = searchParams.get('emirate') ?? ''
  const cuisine = searchParams.get('cuisine') ?? ''
  const dining = searchParams.get('dining') ?? ''
  const discount = searchParams.get('discount') ?? ''
  const page = searchParams.get('page') ?? '1'

  const currentPage = Math.max(1, parseInt(page, 10))

  let filtered = restaurants.filter((r) => r.is_approved && r.is_active)

  if (q) {
    const lower = q.toLowerCase()
    filtered = filtered.filter(
      (r) =>
        r.name.toLowerCase().includes(lower) ||
        (r.cuisine_type ?? '').toLowerCase().includes(lower) ||
        (r.emirate ?? '').toLowerCase().includes(lower) ||
        (r.address ?? '').toLowerCase().includes(lower)
    )
  }
  if (emirate) filtered = filtered.filter((r) => r.emirate === emirate)
  if (cuisine) filtered = filtered.filter((r) => r.cuisine_type === cuisine)
  if (dining) filtered = filtered.filter((r) => r.dining_type?.includes(dining))
  if (discount) {
    const minDiscount = parseInt(discount, 10)
    filtered = filtered.filter((r) =>
      r.offers?.some(
        (o) => o.is_active && o.deal_type === 'percentage' && (o.discount_percentage ?? 0) >= minDiscount
      )
    )
  }

  const withOffers = filtered.filter((r) => r.offers?.some((o) => o.is_active))
  const total = withOffers.length
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const safePage = Math.min(currentPage, totalPages)
  const paginated = withOffers.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
  const hasActiveFilters = !!(q || emirate || cuisine || dining || discount)

  return (
    <div>
      <div className="sticky top-16 z-40 border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-2.5">
          <SearchBar />
          <FilterBar />
        </div>
      </div>

      <DealsContent
        restaurants={paginated}
        total={total}
        currentPage={safePage}
        totalPages={totalPages}
        hasActiveFilters={hasActiveFilters}
      />
    </div>
  )
}

export default function DealsPage() {
  return (
    <Suspense>
      <DealsPageInner />
    </Suspense>
  )
}
