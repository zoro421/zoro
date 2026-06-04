import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'List Your Place — Ozwati',
  description: 'Get your business and walk-in deals in front of thousands of visitors across the UAE.',
}

export default function ListYourRestaurantPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="space-y-8 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">List Your Place</h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Get your walk-in deals in front of thousands of visitors across the UAE.
          </p>
        </div>

        <div className="rounded-xl border border-border p-8 space-y-5">
          <div className="space-y-2">
            <p className="font-medium">Ready to get started?</p>
            <p className="text-sm text-muted-foreground">
              Email us your business name, location, and current offer. We'll review your listing and get back to you within 24 hours.
            </p>
          </div>
          <Link
            href="mailto:info@ozwati.com"
            className={buttonVariants({ size: 'lg' })}
          >
            <Mail className="h-4 w-4 mr-2" />
            info@ozwati.com
          </Link>
        </div>
      </div>
    </div>
  )
}
