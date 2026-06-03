import { Badge } from '@/components/ui/badge'
import { DEAL_TYPE_LABELS } from '@/lib/constants'
import type { Offer } from '@/lib/types'
import { cn } from '@/lib/utils'

interface OfferBadgeProps {
  offer: Pick<Offer, 'deal_type' | 'discount_percentage'>
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function OfferBadge({ offer, size = 'md', className }: OfferBadgeProps) {
  const label =
    offer.deal_type === 'percentage' && offer.discount_percentage
      ? `${offer.discount_percentage}% OFF`
      : DEAL_TYPE_LABELS[offer.deal_type] ?? 'Special Offer'

  return (
    <Badge
      className={cn(
        'bg-primary text-primary-foreground font-bold border-0 rounded-md',
        size === 'sm' && 'text-xs px-2 py-0.5',
        size === 'md' && 'text-sm px-2.5 py-1',
        size === 'lg' && 'text-base px-3 py-1.5',
        className
      )}
    >
      {label}
    </Badge>
  )
}
