'use client'

import { Share } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BRAND } from '@/lib/brand'

interface ShareButtonProps {
  restaurantName: string
  slug: string
  className?: string
  variant?: 'icon' | 'full'
}

export default function ShareButton({ restaurantName, slug, className, variant = 'icon' }: ShareButtonProps) {
  const handleShare = () => {
    const url = `${window.location.origin}/restaurants/${slug}`
    const text = `Check out this deal at ${restaurantName} on ${BRAND.name}!`

    if (navigator.share) {
      navigator.share({ title: restaurantName, text, url }).catch(() => {})
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`, '_blank', 'noopener,noreferrer')
    }
  }

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={handleShare}
        className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'flex items-center gap-1.5', className)}
      >
        <Share className="h-3.5 w-3.5" />
        Share
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share"
      className={cn(
        'h-8 w-8 flex items-center justify-center rounded-full cursor-pointer',
        'text-muted-foreground hover:text-foreground hover:bg-muted transition-colors',
        className
      )}
    >
      <Share className="h-3.5 w-3.5" />
    </button>
  )
}
