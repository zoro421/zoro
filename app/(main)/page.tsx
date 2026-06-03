import HomeContent from '@/components/restaurants/HomeContent'
import { restaurants } from '@/lib/data'

export default function HomePage() {
  const featured = restaurants.filter(
    (r) => r.listing_package === 'premium' && r.offers?.some((o) => o.is_active)
  ).sort((a, b) => (b.view_count ?? 0) - (a.view_count ?? 0))

  const basicRestaurants = restaurants.filter(
    (r) => r.listing_package === 'basic' && r.offers?.some((o) => o.is_active)
  )

  const totalRestaurants = restaurants.length
  const totalDeals = restaurants.reduce((acc, r) => acc + (r.offers?.filter((o) => o.is_active).length ?? 0), 0)

  return (
    <HomeContent
      featured={featured}
      basicRestaurants={basicRestaurants}
      totalRestaurants={totalRestaurants}
      totalDeals={totalDeals}
    />
  )
}
