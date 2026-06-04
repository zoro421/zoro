import HomeContent from '@/components/restaurants/HomeContent'
import { restaurants } from '@/lib/data'

export default function HomePage() {
  const active = restaurants.filter((r) => r.is_approved && r.is_active)

  const vip = active
    .filter((r) => r.listing_package === 'vip')
    .sort((a, b) => (b.view_count ?? 0) - (a.view_count ?? 0))

  const featured = active
    .filter((r) => r.listing_package === 'premium')
    .sort((a, b) => (b.view_count ?? 0) - (a.view_count ?? 0))

  const basicRestaurants = active.filter((r) => r.listing_package === 'basic')

  return <HomeContent vip={vip} featured={featured} basicRestaurants={basicRestaurants} />
}
