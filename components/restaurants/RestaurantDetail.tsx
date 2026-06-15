'use client'

import Image from 'next/image'
import { MapPin, Phone, AtSign, ExternalLink, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import OfferBadge from './OfferBadge'
import PhotoGallery from './PhotoGallery'
import ShareButton from './ShareButton'
import BackButton from './BackButton'
import { useLang } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import type { GalleryItem } from '@/lib/types'

interface Offer {
  id: string
  title: string
  description: string | null
  image_url: string | null
  deal_type: string
  discount_percentage: number | null
  valid_from: string | null
  valid_until: string | null
  terms: string | null
  is_active: boolean
}

interface RestaurantDetailProps {
  restaurant: {
    id: string
    name: string
    slug: string
    description: string | null
    cuisine_type: string | null
    emirate: string | null
    address: string | null
    google_maps_url: string | null
    phone: string | null
    instagram: string | null
    cover_image_url: string | null
    dining_type: string[] | null
    gallery_items: GalleryItem[] | null
    gallery_urls: string[] | null
  }
  activeOffers: Offer[]
  galleryPhotos: { url: string; caption?: string; price_before?: number; price_after?: number }[]
}

export default function RestaurantDetail({ restaurant, activeOffers, galleryPhotos }: RestaurantDetailProps) {
  const { t } = useLang()

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <BackButton />

      {/* Cover image */}
      {restaurant.cover_image_url && (
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-muted">
          {restaurant.cover_image_url.match(/\.(mp4|mov|webm)$/i) ? (
            <video
              src={restaurant.cover_image_url}
              className="absolute inset-0 w-full h-full object-cover"
              muted loop autoPlay playsInline
            />
          ) : (
            <Image
              src={restaurant.cover_image_url.replace('w=400', 'w=900')}
              alt={restaurant.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      )}

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{restaurant.name}</h1>
            <div className="flex flex-wrap items-center gap-2">
              {restaurant.cuisine_type && (
                <Badge variant="secondary">{restaurant.cuisine_type}</Badge>
              )}
              {restaurant.emirate && (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {restaurant.emirate}
                </span>
              )}
              {restaurant.dining_type?.map((type) => (
                <Badge key={type} variant="outline" className="text-xs">{type}</Badge>
              ))}
            </div>
          </div>
        </div>

        {restaurant.description && (
          <p className="text-muted-foreground text-base leading-relaxed">{restaurant.description}</p>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2.5">
          <ShareButton restaurantName={restaurant.name} slug={restaurant.slug} variant="full" />
          {restaurant.google_maps_url && (
            <a
              href={restaurant.google_maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5')}
            >
              <MapPin className="h-3.5 w-3.5" />
              {t.restaurant.directions}
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {restaurant.address && !restaurant.google_maps_url && (
            <span className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5 cursor-default')}>
              <MapPin className="h-3.5 w-3.5" />
              {restaurant.address}
            </span>
          )}
          {restaurant.phone && (
            <a
              href={`tel:${restaurant.phone}`}
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5')}
            >
              <Phone className="h-3.5 w-3.5" />
              {restaurant.phone}
            </a>
          )}
          {restaurant.instagram && (
            <a
              href={`https://instagram.com/${restaurant.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-1.5')}
            >
              <AtSign className="h-3.5 w-3.5" />
              {restaurant.instagram.replace('@', '')}
            </a>
          )}
        </div>
      </div>

      <div className="space-y-10">
        {/* Gallery */}
        {galleryPhotos.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t.restaurant.whatsOnDeal}</h2>
            <PhotoGallery photos={galleryPhotos} />
          </section>
        )}

        {/* Offers */}
        {activeOffers.length > 0 ? (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">{t.restaurant.offerDetails}</h2>
            <div className="space-y-3">
              {activeOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors"
                >
                  {/* Coloured top strip */}
                  <div className="h-1 bg-primary" />
                  <div className="p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <h3 className="font-semibold text-base">{offer.title}</h3>
                      <OfferBadge
                        offer={{
                          deal_type: offer.deal_type as Parameters<typeof OfferBadge>[0]['offer']['deal_type'],
                          discount_percentage: offer.discount_percentage,
                        }}
                        size="sm"
                      />
                    </div>

                    {offer.description && (
                      <p className="text-muted-foreground text-sm">{offer.description}</p>
                    )}

                    {(offer.valid_from || offer.valid_until) && (
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 shrink-0" />
                        {offer.valid_from && offer.valid_until ? (
                          <span>
                            {new Date(offer.valid_from).toLocaleDateString('en-AE', { day: 'numeric', month: 'short' })}
                            {' – '}
                            {new Date(offer.valid_until).toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                        ) : offer.valid_until ? (
                          <span>
                            {t.restaurant.until}{' '}
                            {new Date(offer.valid_until).toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                        ) : null}
                      </div>
                    )}

                    {offer.terms && (
                      <p className="text-xs text-muted-foreground border-t border-border pt-2.5">
                        <span className="font-medium">{t.restaurant.tcLabel} </span>{offer.terms}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <p className="text-muted-foreground">{t.restaurant.noActiveOffers}</p>
        )}
      </div>
    </div>
  )
}
