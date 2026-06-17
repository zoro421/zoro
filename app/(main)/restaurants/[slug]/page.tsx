import { notFound } from 'next/navigation'
import RestaurantDetail from '@/components/restaurants/RestaurantDetail'
import { restaurants } from '@/lib/data'
import type { Metadata } from 'next'
import type { GalleryItem } from '@/lib/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  const slugs = restaurants.map((r) => ({ slug: r.slug }))
  return slugs.length > 0 ? slugs : [{ slug: '_' }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const restaurant = restaurants.find((r) => r.slug === slug)

  if (!restaurant) return { title: 'Restaurant not found' }

  return {
    title: `${restaurant.name} Deals — Tashkelah UAE`,
    description: restaurant.description ?? `Discover walk-in offers at ${restaurant.name} in ${restaurant.emirate ?? 'UAE'}.`,
    openGraph: {
      title: `${restaurant.name} — Walk-in Deals`,
      description: restaurant.description ?? `Exclusive walk-in offers at ${restaurant.name}.`,
      ...(restaurant.cover_image_url ? { images: [{ url: restaurant.cover_image_url }] } : {}),
    },
  }
}

export default async function RestaurantPage({ params }: PageProps) {
  const { slug } = await params
  const restaurant = restaurants.find((r) => r.slug === slug && r.is_approved && r.is_active)

  if (!restaurant) notFound()

  const activeOffers = (restaurant.offers ?? []).filter((o) => o.is_active)

  const galleryPhotos = [
    ...(restaurant.gallery_items ?? []).map((item: GalleryItem) => ({
      url: item.url,
      caption: item.caption ?? undefined,
      price_before: item.price_before ?? undefined,
      price_after: item.price_after ?? undefined,
    })),
    ...(restaurant.gallery_items?.length
      ? []
      : (restaurant.gallery_urls ?? []).map((url: string) => ({ url }))),
    ...activeOffers
      .filter((o) => o.image_url)
      .map((o) => ({ url: o.image_url!, caption: o.title })),
  ]

  return (
    <RestaurantDetail
      restaurant={restaurant}
      activeOffers={activeOffers}
      galleryPhotos={galleryPhotos}
    />
  )
}
