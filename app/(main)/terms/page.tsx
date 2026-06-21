import type { Metadata } from 'next'
import { BRAND } from '@/lib/brand'
import TermsContent from './content'

export const metadata: Metadata = {
  title: `Terms of Service — ${BRAND.name}`,
}

export default function TermsPage() {
  return <TermsContent />
}
