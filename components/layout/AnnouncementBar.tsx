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
    }, 300)
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

  const slideOut = direction === 'left' ? '-translate-x-4' : 'translate-x-4'

  return (
    <div className="w-full bg-primary text-primary-foreground text-xl select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-11 flex items-center gap-3">
        {multiple && (
          <button
            onClick={prev}
            aria-label="Previous announcement"
            className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div className="flex-1 overflow-hidden">
          <div
            className={`text-center transition-all duration-300 ${
              animating
                ? `opacity-0 ${slideOut}`
                : 'opacity-100 translate-x-0'
            }`}
          >
            <span className="font-medium">{ann.message}</span>
            {ann.link_url && ann.link_label && (
              <>
                <span className="opacity-60 mx-2">·</span>
                <Link
                  href={ann.link_url}
                  className="font-semibold underline underline-offset-2 hover:no-underline"
                >
                  {ann.link_label}
                </Link>
              </>
            )}
          </div>
        </div>

        {multiple && (
          <button
            onClick={next}
            aria-label="Next announcement"
            className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {multiple && (
        <div className="flex justify-center gap-1.5 pb-1.5 -mt-0.5">
          {announcements.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'left' : 'right')}
              aria-label={`Go to announcement ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-4 bg-primary-foreground'
                  : 'w-1 bg-primary-foreground/40 hover:bg-primary-foreground/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
