import type { Metadata } from 'next'
import { BRAND } from '@/lib/brand'

export const metadata: Metadata = {
  title: `Browse Deals — ${BRAND.name}`,
  description: `Browse all walk-in deals and exclusive offers across Dubai, Abu Dhabi, and the UAE. Filter by emirate, cuisine, and discount.`,
  alternates: {
    canonical: `${BRAND.url}/deals`,
  },
}

export default function DealsLayout({ children }: { children: React.ReactNode }) {
  return children
}
