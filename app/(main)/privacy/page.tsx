import type { Metadata } from 'next'
import { BRAND } from '@/lib/brand'
import PrivacyContent from './content'

export const metadata: Metadata = {
  title: `Privacy Policy — ${BRAND.name}`,
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
