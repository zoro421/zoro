import HomeContent from '@/components/restaurants/HomeContent'
import { restaurants } from '@/lib/data'

export default function HomePage() {
  const active = restaurants.filter((r) => r.is_approved && r.is_active)

  const byViewCount = (a: { view_count?: number | null }, b: { view_count?: number | null }) =>
    (b.view_count ?? 0) - (a.view_count ?? 0)

  const vip = active.filter((r) => r.listing_package === 'vip').sort(byViewCount)

  const featured = active.filter((r) => r.listing_package === 'premium').sort(byViewCount)

  const basicRestaurants = active.filter((r) => r.listing_package === 'basic')

  return <HomeContent vip={vip} featured={featured} basicRestaurants={basicRestaurants} />
}
