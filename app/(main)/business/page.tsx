import type { Metadata } from 'next'
import { BRAND } from '@/lib/brand'
import BusinessContent from '@/components/restaurants/BusinessContent'

export const metadata: Metadata = {
  title: `For Businesses — ${BRAND.name}`,
  description: `List your place on ${BRAND.name} and get discovered by thousands of UAE visitors looking for walk-in deals.`,
}

export default function BusinessPage() {
  return <BusinessContent />
}
