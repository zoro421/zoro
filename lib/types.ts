export type UserRole = 'user' | 'admin'

export type DealType = 'percentage' | 'fixed' | 'bogo' | 'set_menu' | 'other'

export type SubscriptionStatus = 'active' | 'expired' | 'cancelled'

export interface Profile {
  id: string
  full_name: string | null
  avatar_url: string | null
  role: UserRole
  phone: string | null
  gender: 'male' | 'female' | 'prefer_not_to_say' | null
  date_of_birth: string | null
  created_at: string
}

export interface GalleryItem {
  url: string
  caption?: string | null
  price_before?: number | null
  price_after?: number | null
}

export interface Restaurant {
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
  logo_url: string | null
  gallery_urls: string[] | null
  gallery_items: GalleryItem[] | null
  dining_type: string[] | null
  listing_package: 'basic' | 'premium'
  is_approved: boolean
  is_active: boolean
  view_count: number
  owner_id: string | null
  created_at: string
  updated_at: string
  offers?: Offer[]
}

export interface Offer {
  id: string
  restaurant_id: string
  title: string
  description: string | null
  deal_type: DealType
  discount_percentage: number | null
  valid_from: string | null
  valid_until: string | null
  image_url: string | null
  terms: string | null
  is_approved: boolean
  is_active: boolean
  created_at: string
  updated_at: string
  restaurant?: Restaurant
}

export interface ListingSubscription {
  id: string
  restaurant_id: string
  amount_aed: number
  starts_at: string
  ends_at: string
  status: SubscriptionStatus
  payment_ref: string | null
  created_at: string
}

export interface FilterState {
  emirate: string
  cuisine: string
  dining_type: string
  min_discount: string
  search: string
}
