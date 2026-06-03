'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface GalleryPhoto {
  url: string
  caption?: string
  price_before?: number | null
  price_after?: number | null
}

interface Props {
  photos: GalleryPhoto[]
}

export default function PhotoGallery({ photos }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() =>
    setSelected(i => i === null ? null : (i - 1 + photos.length) % photos.length),
    [photos.length]
  )

  const next = useCallback(() =>
    setSelected(i => i === null ? null : (i + 1) % photos.length),
    [photos.length]
  )

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, prev, next, close])

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) delta > 0 ? prev() : next()
    touchStartX.current = null
  }

  if (photos.length === 0) return null

  return (
    <>
      {/* Grid */}
      <div className={`grid gap-3 ${
        photos.length === 1 ? 'grid-cols-1' :
        photos.length === 2 ? 'grid-cols-2' :
        'grid-cols-2 sm:grid-cols-3'
      }`}>
        {photos.map((photo, i) => {
          const hasPrice = photo.price_before || photo.price_after
          return (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i)}
              className="relative aspect-square rounded-2xl overflow-hidden group bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={photo.url}
                alt={photo.caption ?? `Photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 896px) 33vw, 280px"
              />

              {/* Bottom overlay — shown when there's a caption or price */}
              {(hasPrice || photo.caption) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                {photo.caption && (
                  <p className="text-white text-xs font-medium line-clamp-1 leading-snug text-left mb-0.5">
                    {photo.caption}
                  </p>
                )}
                {hasPrice && (
                  <div className="flex items-baseline gap-1.5 text-left">
                    {photo.price_before && (
                      <span className="text-white/55 text-xs line-through">
                        AED {photo.price_before}
                      </span>
                    )}
                    {photo.price_after && (
                      <span className="text-green-400 font-bold text-sm">
                        AED {photo.price_after}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/40 rounded-full p-2">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums select-none">
            {selected + 1} / {photos.length}
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full max-w-4xl px-16 py-20 sm:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selected].url}
              alt={photos[selected].caption ?? `Photo ${selected + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          {/* Caption + prices */}
          {(photos[selected].caption || photos[selected].price_before || photos[selected].price_after) && (
            <div
              className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 bg-gradient-to-t from-black/80 to-transparent text-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              {photos[selected].caption && (
                <p className="text-white text-lg font-bold leading-tight mb-1">{photos[selected].caption}</p>
              )}
              {(photos[selected].price_before || photos[selected].price_after) && (
                <div className="flex items-baseline justify-center gap-3">
                  {photos[selected].price_before && (
                    <span className="text-white/45 text-base line-through">
                      AED {photos[selected].price_before}
                    </span>
                  )}
                  {photos[selected].price_after && (
                    <span className="text-green-400 text-2xl font-bold">
                      AED {photos[selected].price_after}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}
