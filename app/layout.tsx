import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cairo, Montserrat } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { Providers } from '@/components/providers'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const cairo = Cairo({ variable: '--font-cairo', subsets: ['arabic', 'latin'], weight: ['700'], display: 'swap' })
const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['latin'], weight: ['700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Tashkelah — Restaurant Walk-in Offers in UAE',
  description:
    'Discover the best restaurant walk-in deals, discounts, and dining offers across Dubai, Abu Dhabi, and the UAE. Updated daily.',
  keywords: 'restaurant deals UAE, dining offers Dubai, walk-in discounts, food deals Abu Dhabi',
  openGraph: {
    title: 'Tashkelah — Restaurant Walk-in Offers in UAE',
    description: 'Discover the best restaurant deals across the UAE.',
    type: 'website',
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
        </Providers>
      </body>
    </html>
  )
}
