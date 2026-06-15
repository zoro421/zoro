import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat, Amiri } from 'next/font/google'
import ReactDOM from 'react-dom'
import { BRAND } from '@/lib/brand'
import { Toaster } from '@/components/ui/sonner'
import { Providers } from '@/components/providers'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { CookieBanner } from '@/components/layout/CookieBanner'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['latin'], weight: ['700'], display: 'swap' })
const amiri = Amiri({ variable: '--font-amiri', subsets: ['arabic', 'latin'], weight: ['400', '700'], display: 'swap' })

export const metadata: Metadata = {
  title: `${BRAND.name} — Walk-in Deals & Offers in UAE`,
  description:
    'Discover the best walk-in deals, discounts, and exclusive offers across Dubai, Abu Dhabi, and the UAE. Updated daily.',
  keywords: `deals UAE, offers Dubai, walk-in discounts, Abu Dhabi deals, ${BRAND.name}`,
  metadataBase: BRAND.url ? new URL(BRAND.url) : undefined,
  alternates: {
    canonical: BRAND.url,
  },
  openGraph: {
    title: `${BRAND.name} — Walk-in Deals & Offers in UAE`,
    description: 'Discover the best walk-in deals across the UAE.',
    type: 'website',
    url: BRAND.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  ReactDOM.preconnect('https://images.unsplash.com')
  ReactDOM.prefetchDNS('https://images.unsplash.com')
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${amiri.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background">
        <Providers>
          {children}
          <Toaster richColors position="top-right" />
          <CookieBanner />
          <GoogleAnalytics />
        </Providers>
      </body>
    </html>
  )
}
