import { restaurants } from '@/lib/data'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tashkelah.com'

  const restaurantUrls = restaurants
    .filter((r) => r.is_approved && r.is_active)
    .map((r) => ({
      url: `${baseUrl}/restaurants/${r.slug}`,
      lastModified: new Date(r.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/deals`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/business`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/customers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/list-your-restaurant`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...restaurantUrls,
  ]
}
