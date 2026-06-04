import type { Metadata } from 'next'
import CustomersContent from '@/components/restaurants/CustomersContent'

export const metadata: Metadata = {
  title: 'Customers — Ozwati',
  description: 'Discover walk-in deals across the UAE for free. No app, no registration, no vouchers needed.',
}

export default function CustomersPage() {
  return <CustomersContent />
}
