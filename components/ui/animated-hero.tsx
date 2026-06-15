'use client'

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLang } from "@/lib/language-context"
import { OutlineText } from "@/components/ui/outline-text"

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
    <div className="relative w-full min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">

      {/* Noise texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" aria-hidden>
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center px-4 gap-6 max-w-5xl w-full">

        {/* Headline */}
        <h1
          className="font-bold tracking-[-0.03em] leading-[1.05]"
          style={fadeUp(0.1, 0.65)}
        >
          <OutlineText className="text-[3.8rem] sm:text-[5.5rem] lg:text-[7rem]">
            {t.hero.heroLine1}
          </OutlineText>

          <span
            className="relative flex w-full justify-center overflow-hidden text-[#2E6DA4] py-1"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
          >
            &nbsp;
            {titles.map((title, index) => (
              <span
                key={index}
                className="absolute font-bold"
                style={{
                  opacity: titleNumber === index ? 1 : 0,
                  transform: `translateY(${titleNumber === index ? 0 : titleNumber > index ? -60 : 60}px)`,
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                  willChange: 'opacity, transform',
                }}
              >
                {title}
              </span>
            ))}
          </span>

          <OutlineText className="text-[3.8rem] sm:text-[5.5rem] lg:text-[7rem]">
            {t.hero.heroLine3}
          </OutlineText>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-[580px]"
          style={fadeUp(0.25)}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4"
          style={fadeUp(0.35)}
        >
          <Link
            href="/deals"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 shadow-lg shadow-black/20")}
            style={{ background: "#1a1a1a", borderColor: "#1a1a1a" }}
          >
            {t.hero.browseDeals}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/business" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2 backdrop-blur-sm")}>
            {t.hero.listRestaurant}
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center gap-6 text-sm text-muted-foreground pt-2"
          style={fadeIn(0.5)}
        >
          <span>{t.hero.statDeals}</span>
          <span className="w-px h-4 bg-border" />
          <span>{t.hero.statUpdated}</span>
        </div>

      </div>
    </div>
  )
}
