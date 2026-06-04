import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cairo, Montserrat } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { Providers } from '@/components/providers'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { CookieBanner } from '@/components/layout/CookieBanner'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const cairo = Cairo({ variable: '--font-cairo', subsets: ['arabic', 'latin'], weight: ['700'], display: 'swap' })
const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['latin'], weight: ['700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Ozwati — Walk-in Deals & Offers in UAE',
  description:
    'Discover the best walk-in deals, discounts, and exclusive offers across Dubai, Abu Dhabi, and the UAE. Updated daily.',
  keywords: 'deals UAE, offers Dubai, walk-in discounts, Abu Dhabi deals, Ozwati',
  metadataBase: new URL('https://www.ozwati.com'),
  alternates: {
    canonical: 'https://www.ozwati.com',
  },
  openGraph: {
    title: 'Ozwati — Walk-in Deals & Offers in UAE',
    description: 'Discover the best walk-in deals across the UAE.',
    type: 'website',
    url: 'https://www.ozwati.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${montserrat.variable} h-full antialiased`} suppressHydrationWarning>
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
