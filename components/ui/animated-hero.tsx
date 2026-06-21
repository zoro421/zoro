'use client'

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLang } from "@/lib/language-context"

const fadeUp = (delay: number, duration = 0.5) => ({
  opacity: 0,
  animation: `fade-up ${duration}s ease forwards`,
  animationDelay: `${delay}s`,
})

const fadeIn = (delay: number) => ({
  opacity: 0,
  animation: `fade-in 0.6s ease forwards`,
  animationDelay: `${delay}s`,
})

const HERO_IMAGE = "https://images.unsplash.com/photo-1624317937315-0ced8736c9e9?w=1600&q=80&fm=webp&auto=format&fit=crop"

export function AnimatedHero() {
  const { t } = useLang()
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => t.hero.rotatingWords, [t])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="relative w-full">

      {/* Full-width hero image */}
      <div className="relative w-full overflow-hidden" style={{ height: '52vw', maxHeight: 480, minHeight: 200 }}>
        <Image
          src={HERO_IMAGE}
          alt="Walk-in restaurant deals in UAE"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/40" />
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

        {/* Left — headline + subtitle + buttons */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-start gap-5">

          <h1
            className="font-normal tracking-[-0.02em] leading-[1.1]"
            style={fadeUp(0.05, 0.65)}
          >
            <span className="block text-[2.8rem] sm:text-[4.2rem] lg:text-[5.5rem] text-foreground">
              {t.hero.heroLine1}
            </span>

            <span
              className="relative flex justify-center lg:justify-start overflow-hidden text-[#2E6DA4] py-1"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)', minWidth: '8ch' }}
            >
              &nbsp;
              {titles.map((title, index) => (
                <span
                  key={index}
                  className="absolute"
                  style={{
                    opacity: titleNumber === index ? 1 : 0,
                    transform: `translateY(${titleNumber === index ? 0 : titleNumber > index ? -50 : 50}px)`,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    willChange: 'opacity, transform',
                  }}
                >
                  {title}
                </span>
              ))}
            </span>

            <span className="block text-[2.8rem] sm:text-[4.2rem] lg:text-[5.5rem] text-foreground">
              {t.hero.heroLine3}
            </span>
          </h1>

          <p
            className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[480px]"
            style={fadeUp(0.2)}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="flex flex-row items-center gap-3"
            style={fadeUp(0.3)}
          >
            <Link
              href="/deals"
              className={cn(buttonVariants({ size: "lg" }), "gap-2 shadow-lg shadow-black/20")}
              style={{ background: "#1a1a1a", borderColor: "#1a1a1a" }}
            >
              {t.hero.browseDeals}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/business" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2")}>
              {t.hero.listRestaurant}
            </Link>
          </div>

          {/* Stats — inline on mobile, hidden on desktop (shown in grid) */}
          <div
            className="flex lg:hidden items-center justify-center gap-4 text-xs text-muted-foreground pt-1 flex-wrap"
            style={fadeIn(0.4)}
          >
            <span className="font-semibold text-foreground">{t.hero.stat1Value}</span>
            <span className="w-px h-3 bg-border" />
            <span className="font-semibold text-foreground">{t.hero.mobileStatNoBooking}</span>
            <span className="w-px h-3 bg-border" />
            <span className="font-semibold text-foreground">{t.hero.mobileStatFree}</span>
          </div>
        </div>

        {/* Right — stats grid, desktop only */}
        <div
          className="hidden lg:grid lg:min-w-[280px] grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          style={fadeIn(0.45)}
        >
          {[
            { value: t.hero.stat1Value, label: t.hero.stat1Label },
            { value: t.hero.stat2Value, label: t.hero.stat2Label },
            { value: t.hero.stat3Value, label: t.hero.stat3Label },
            { value: t.hero.stat4Value, label: t.hero.stat4Label },
          ].map((stat) => (
            <div key={stat.value} className="bg-background px-8 py-7 flex flex-col gap-1">
              <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground leading-snug">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
