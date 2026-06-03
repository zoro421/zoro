'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import OfferBadge from './OfferBadge'
import ShareButton from './ShareButton'
import { useLang } from '@/lib/language-context'
import type { Restaurant } from '@/lib/types'

function formatValidUntil(date: string | null | undefined) {
  if (!date) return null
  const d = new Date(date)
  const now = new Date()
  const diff = Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  if (diff < 0) return 'Expired'
  if (diff === 0) return 'Ends today'
  if (diff === 1) return 'Ends tomorrow'
  if (diff <= 7) return `${diff} days left`
  return `Until ${d.toLocaleDateString('en-AE', { day: 'numeric', month: 'short' })}`
}

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { t } = useLang()
  const activeOffers = restaurant.offers?.filter((o) => o.is_active && o.is_approved) ?? []
  const topOffer = activeOffers[0]
  const validUntil = topOffer?.valid_until ? formatValidUntil(topOffer.valid_until) : null
  const isExpiringSoon = validUntil && ['Ends today', 'Ends tomorrow', '2 days left', '3 days left'].includes(validUntil)

  return (
    <article className="group relative flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(226,75,74,0.14),0_2px_8px_rgba(0,0,0,0.08)] transition-[border-color,box-shadow] duration-200">
      {/* Image */}
      <Link href={`/restaurants/${restaurant.slug}`} className="block relative h-52 overflow-hidden">
        {restaurant.cover_image_url ? (
          restaurant.cover_image_url.match(/\.(mp4|mov|webm)$/i) ? (
            <video
              src={restaurant.cover_image_url}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              muted
              loop
              autoPlay
              playsInline
            />
          ) : (
            <Image
              src={restaurant.cover_image_url}
              alt={restaurant.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted to-muted/80 flex items-center justify-center">
            <span className="text-7xl font-black text-primary/15 select-none uppercase">
              {restaurant.name[0]}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {topOffer && (
          <div className="absolute top-3 left-3 z-10">
            <OfferBadge offer={topOffer} size="md" />
          </div>
        )}

        {isExpiringSoon && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-primary text-primary-foreground font-bold border-0 rounded-md text-sm px-2.5 py-1">
              {validUntil}
            </Badge>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-2.5 p-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/restaurants/${restaurant.slug}`} className="flex-1 min-w-0">
            <h3 className="font-semibold text-base leading-tight line-clamp-1 group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
          </Link>
          <div className="shrink-0 -mr-1 -mt-0.5">
            <ShareButton restaurantName={restaurant.name} slug={restaurant.slug} />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground">
          {restaurant.cuisine_type && (
            <Badge variant="secondary" className="text-xs font-normal px-2 py-0.5">
              {restaurant.cuisine_type}
            </Badge>
          )}
          {restaurant.emirate && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 shrink-0" />
              {restaurant.emirate}
            </span>
          )}
        </div>

        {topOffer && (
          <p className="text-sm text-foreground font-medium line-clamp-1">{topOffer.title}</p>
        )}

        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="text-xs text-muted-foreground">
            {validUntil && !isExpiringSoon ? (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 shrink-0" />
                {validUntil}
              </span>
            ) : activeOffers.length > 1 ? (
              <span className="text-primary font-medium">
                +{activeOffers.length - 1} {activeOffers.length > 2 ? t.card.moreOffers : t.card.moreOffer}
              </span>
            ) : null}
          </div>

          <Link
            href={`/restaurants/${restaurant.slug}`}
            className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            {t.card.viewDeal} <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
