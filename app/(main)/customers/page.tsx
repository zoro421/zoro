import type { Metadata } from 'next'
import CustomersContent from '@/components/restaurants/CustomersContent'
import { BRAND } from '@/lib/brand'

export const metadata: Metadata = {
  title: `Customers — ${BRAND.name}`,
  description: 'Discover walk-in deals across the UAE for free. No app, no registration, no vouchers needed.',
}

export default function CustomersPage() {
  return <CustomersContent />
}
