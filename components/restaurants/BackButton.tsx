'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { useLang } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export default function BackButton() {
  const router = useRouter()
  const { t } = useLang()

  return (
    <button
      onClick={() => router.back()}
      className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), '-ms-2 text-muted-foreground')}
    >
      <ChevronLeft className="h-4 w-4 me-1" />
      {t.restaurant.backToDeals}
    </button>
  )
}
