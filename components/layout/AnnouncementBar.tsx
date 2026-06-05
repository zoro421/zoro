'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Announcement {
  id: string
  message: string
  link_url: string | null
  link_label: string | null
}

export default function AnnouncementBar({ announcements }: { announcements: Announcement[] }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('left')

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 320)
  }, [animating])

  const next = useCallback(() => {
    goTo((current + 1) % announcements.length, 'left')
  }, [current, announcements.length, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + announcements.length) % announcements.length, 'right')
  }, [current, announcements.length, goTo])

  useEffect(() => {
    if (announcements.length <= 1) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [announcements.length, next])

  const ann = announcements[current]
  const multiple = announcements.length > 1
  const translateDir = direction === 'left' ? '-translate-x-2' : 'translate-x-2'
  const slideOut = `${translateDir} opacity-0`

  return (
    <div
      className="relative w-full select-none overflow-hidden"
      style={{
        background: 'linear-gradient(110deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
      }}
    >
      {/* Shimmer sweep */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
          animation: 'ann-shimmer 5s ease-in-out infinite',
        }}
      />

      {/* Noise grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '120px',
        }}
      />


<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3 min-h-[44px]">

        {/* Prev */}
        {multiple && (
          <button
            onClick={prev}
            aria-label="Previous announcement"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full hover:bg-white/15 active:bg-white/25 transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5 text-white/75" />
          </button>
        )}

        {/* Message */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <p
            className={`text-center text-white leading-snug transition-all duration-300 ${
              animating ? slideOut : 'translate-x-0 opacity-100'
            }`}
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: '12.5px',
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}
          >
            {ann.message}
            {ann.link_url && ann.link_label && (
              <>
                <span className="text-white/35 mx-2">·</span>
                <Link
                  href={ann.link_url}
                  className="underline underline-offset-2 hover:no-underline hover:text-white/80 transition-colors"
                >
                  {ann.link_label}
                </Link>
              </>
            )}
          </p>
        </div>

        {/* Next */}
        {multiple && (
          <button
            onClick={next}
            aria-label="Next announcement"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full hover:bg-white/15 active:bg-white/25 transition-colors"
          >
            <ChevronRight className="h-3.5 w-3.5 text-white/75" />
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {multiple && (
        <div className="flex justify-center items-center gap-1.5 pb-2 -mt-0.5">
          {announcements.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'left' : 'right')}
              aria-label={`Go to announcement ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 h-[3px] bg-white'
                  : 'w-[3px] h-[3px] bg-white/35 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
