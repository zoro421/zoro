import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnnouncementBanner from '@/components/layout/AnnouncementBanner'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <AnnouncementBanner />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
