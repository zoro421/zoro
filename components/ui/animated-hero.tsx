'use client'

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLang } from "@/lib/language-context"
import { OutlineText } from "@/components/ui/outline-text"

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

      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-15%] right-[-8%] w-[700px] h-[700px] rounded-full bg-[#2E6DA4]/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-8%] w-[600px] h-[600px] rounded-full bg-[#C94040]/8 blur-[120px]" />
        <div className="absolute top-[35%] left-[25%] w-[400px] h-[400px] rounded-full bg-[#2E6DA4]/5 blur-[100px]" />
      </div>

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
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-bold tracking-[-0.03em] leading-[1.05]"
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
              <motion.span
                key={index}
                className="absolute font-bold"
                initial={{ opacity: 0, y: -100 }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>

          <OutlineText className="text-[3.8rem] sm:text-[5.5rem] lg:text-[7rem]">
            {t.hero.heroLine3}
          </OutlineText>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-[580px]"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center gap-4"
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
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-6 text-sm text-muted-foreground pt-2"
        >
          <span>{t.hero.statDeals}</span>
          <span className="w-px h-4 bg-border" />
          <span>{t.hero.statCuisines}</span>
          <span className="w-px h-4 bg-border" />
          <span>{t.hero.statUpdated}</span>
        </motion.div>

      </div>
    </div>
  )
}
