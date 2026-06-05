'use client'

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLang } from "@/lib/language-context"

export function AnimatedHero() {
  const { t } = useLang()
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["top", "finest", "exclusive", "curated", "hidden"], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="flex flex-col items-center text-center max-w-4xl px-4 gap-8">
      <h1 className="font-bold tracking-[-0.02em] leading-[1.1] text-5xl sm:text-6xl lg:text-7xl text-foreground">
        Walk-in deals from UAE&apos;s
        <span className="relative flex w-full justify-center overflow-hidden text-[#C94040] md:pb-4 md:pt-1">
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
        places
      </h1>

      <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-[600px]">
        {t.hero.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/deals"
          className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          style={{ background: "#1a1a1a", borderColor: "#1a1a1a" }}
        >
          {t.hero.browseDeals}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/business" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2")}>
          {t.hero.listRestaurant}
        </Link>
      </div>

      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row -space-x-2">
          {["11", "22", "33", "44"].map((n) => (
            <img
              key={n}
              src={`https://i.pravatar.cc/150?img=${n}`}
              alt="User"
              className="rounded-full border-2 border-background"
              style={{ width: 40, height: 40, objectFit: "cover" as const }}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          Trusted by thousands across the UAE
        </span>
      </div>
    </div>
  )
}
