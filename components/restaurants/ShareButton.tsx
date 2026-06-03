'use client'

import { Share2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ShareButtonProps {
  restaurantName: string
  slug: string
  className?: string
  variant?: 'icon' | 'full'
}

export default function ShareButton({ restaurantName, slug, className, variant = 'icon' }: ShareButtonProps) {
  const handleShare = () => {
    const url = `${window.location.origin}/restaurants/${slug}`
    const text = `Check out this deal at ${restaurantName} on Tashkelah!\n${url}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={handleShare}
        className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'flex items-center gap-1.5', className)}
      >
        <Share2 className="h-3.5 w-3.5" />
        Share on WhatsApp
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share on WhatsApp"
      className={cn(
        'h-8 w-8 flex items-center justify-center rounded-full',
        'text-muted-foreground hover:text-foreground hover:bg-muted transition-colors',
        className
      )}
    >
      <Share2 className="h-3.5 w-3.5" />
    </button>
  )
}
