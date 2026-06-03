import AnnouncementBar from './AnnouncementBar'
import { announcements } from '@/lib/data'

export default function AnnouncementBanner() {
  if (!announcements.length) return null
  return <AnnouncementBar announcements={announcements} />
}
