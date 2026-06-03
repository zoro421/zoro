import type { Restaurant } from './types'
import restaurantsJson from './data/restaurants.json'
import announcementsJson from './data/announcements.json'

export const restaurants = restaurantsJson as Restaurant[]

export const announcements = announcementsJson as {
  id: string
  message: string
  link_url: string | null
  link_label: string | null
  is_active: boolean
  sort_order: number
}[]
