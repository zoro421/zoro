'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import OfferBadge from './OfferBadge'
import ShareButton from './ShareButton'
import { useLang } from '@/lib/language-context'
import type { Restaurant } from '@/lib/types'

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { t } = useLang()
  const activeOffers = restaurant.offers?.filter((o) => o.is_active && o.is_approved) ?? []
  const topOffer = activeOffers[0]

  return (
    <article className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border/60">
      {/* Image — tall, portrait */}
      <div className="relative h-72 shrink-0 overflow-hidden bg-muted">
        {restaurant.cover_image_url ? (
          restaurant.cover_image_url.match(/\.(mp4|mov|webm)$/i) ? (
            <video
              src={restaurant.cover_image_url}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
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
              className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
              sizes="(max-width: 640px) 280px, 300px"
            />
          )
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/[0.06] to-muted/60 flex items-center justify-center">
            <span className="text-8xl font-black text-primary/20 select-none uppercase">
              {restaurant.name[0]}
            </span>
          </div>
        )}

        {/* Offer badge — top left */}
        {topOffer && (
          <div className="absolute top-3 left-3 z-[2]">
            <OfferBadge offer={topOffer} size="md" />
          </div>
        )}

        {/* Share — top right */}
        <div className="absolute top-2.5 right-2.5 z-[2]">
          <ShareButton
            restaurantName={restaurant.name}
            slug={restaurant.slug}
            className="bg-white/90 backdrop-blur-sm text-neutral-800 hover:bg-white hover:text-neutral-900 shadow-sm"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 p-4 flex-1">
        {/* Stretched-link title — makes entire card clickable */}
        <Link
          href={`/restaurants/${restaurant.slug}`}
          className="font-bold text-[15px] leading-snug line-clamp-1 after:absolute after:inset-0 after:z-[1]"
        >
          {restaurant.name}
        </Link>

        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground uppercase tracking-[0.07em]">
          {restaurant.cuisine_type && <span>{restaurant.cuisine_type}</span>}
          {restaurant.cuisine_type && restaurant.emirate && (
            <span className="text-border">·</span>
          )}
          {restaurant.emirate && (
            <span className="flex items-center gap-0.5">
              <MapPin className="h-2.5 w-2.5 shrink-0" />
              {restaurant.emirate}
            </span>
          )}
        </div>

        {topOffer && (
          <p className="text-[13px] text-muted-foreground line-clamp-1 mt-0.5">
            {topOffer.title}
          </p>
        )}

        {/* VIEW DEAL button */}
        <div className="mt-auto pt-4">
          <Link
            href={`/restaurants/${restaurant.slug}`}
            className="relative z-[2] flex items-center justify-center w-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.14em] py-3.5 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-150"
          >
            {t.card.viewDeal}
          </Link>
        </div>
      </div>
    </article>
  )
}
