"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import IsketchLogo from "@/components/common/isketch-logo"

export interface LightboxItem {
  src: string
  alt: string
  title: string
  location: string
  category?: string
  href?: string
}

interface ImageLightboxProps {
  /** Gallery items for prev/next navigation */
  gallery?: LightboxItem[]
  /** Current index in the gallery */
  currentIndex?: number
  /** Called when navigating to a different image */
  onNavigate?: (index: number) => void
  /** Legacy single-image props (used when gallery is not provided) */
  src?: string
  alt?: string
  title?: string
  location?: string
  category?: string
  href?: string
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({
  gallery,
  currentIndex = 0,
  onNavigate,
  src: legacySrc,
  alt: legacyAlt,
  title: legacyTitle,
  location: legacyLocation,
  category: legacyCategory,
  href: legacyHref,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)

  // Resolve current item from gallery or legacy props
  const currentItem: LightboxItem | null = gallery
    ? gallery[currentIndex] ?? null
    : legacySrc
    ? { src: legacySrc, alt: legacyAlt ?? "", title: legacyTitle ?? "", location: legacyLocation ?? "", category: legacyCategory, href: legacyHref }
    : null

  const hasGallery = gallery && gallery.length > 1
  const canGoPrev = hasGallery && currentIndex > 0
  const canGoNext = hasGallery && currentIndex < gallery.length - 1

  // Touch/swipe state
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null)
  const swipeOffsetRef = useRef(0)
  const [swipeOffset, setSwipeOffset] = useState(0)
  const [horizontalSwipe, setHorizontalSwipe] = useState(0)
  const swipeAxisRef = useRef<"horizontal" | "vertical" | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Reset loaded state when image changes
  useEffect(() => {
    if (isOpen) setLoaded(false)
  }, [isOpen, currentItem?.src])

  // Open: mount → animate in
  useEffect(() => {
    if (isOpen) {
      setAnimating(true)
      setSwipeOffset(0)
      setHorizontalSwipe(0)
      swipeOffsetRef.current = 0
      swipeAxisRef.current = null
      setSlideDirection(null)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true)
        })
      })
    }
  }, [isOpen])

  // Close: animate out → unmount
  const handleClose = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setAnimating(false)
      setSwipeOffset(0)
      setHorizontalSwipe(0)
      swipeOffsetRef.current = 0
      swipeAxisRef.current = null
      onClose()
    }, 350)
  }, [onClose])

  // Navigate to prev/next
  const goToPrev = useCallback(() => {
    if (!canGoPrev || !onNavigate) return
    setSlideDirection("right")
    setLoaded(false)
    onNavigate(currentIndex - 1)
    setTimeout(() => setSlideDirection(null), 50)
  }, [canGoPrev, onNavigate, currentIndex])

  const goToNext = useCallback(() => {
    if (!canGoNext || !onNavigate) return
    setSlideDirection("left")
    setLoaded(false)
    onNavigate(currentIndex + 1)
    setTimeout(() => setSlideDirection(null), 50)
  }, [canGoNext, onNavigate, currentIndex])

  // Keyboard: Esc, Left, Right
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowLeft") goToPrev()
      if (e.key === "ArrowRight") goToNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, handleClose, goToPrev, goToNext])

  // Lock scroll & notify header
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
      window.__lenis?.stop()
      window.dispatchEvent(new Event("lightbox-open"))
    }
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      window.__lenis?.start()
      window.dispatchEvent(new Event("lightbox-close"))
    }
  }, [isOpen])

  // Touch handlers for swipe-to-dismiss (vertical) and swipe-to-navigate (horizontal)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() }
    swipeAxisRef.current = null
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return
    const touch = e.touches[0]
    const dx = touch.clientX - touchStartRef.current.x
    const dy = touch.clientY - touchStartRef.current.y

    // Determine axis on first significant movement
    if (!swipeAxisRef.current) {
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
        swipeAxisRef.current = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical"
      } else {
        return
      }
    }

    if (swipeAxisRef.current === "vertical" && dy > 0) {
      swipeOffsetRef.current = dy
      setSwipeOffset(dy)
    } else if (swipeAxisRef.current === "horizontal" && hasGallery) {
      // Limit horizontal swipe with resistance at edges
      let clampedDx = dx
      if (dx > 0 && !canGoPrev) clampedDx = dx * 0.2
      if (dx < 0 && !canGoNext) clampedDx = dx * 0.2
      setHorizontalSwipe(clampedDx)
    }
  }, [hasGallery, canGoPrev, canGoNext])

  const handleTouchEnd = useCallback(() => {
    if (!touchStartRef.current) return
    const elapsed = Date.now() - touchStartRef.current.time

    if (swipeAxisRef.current === "vertical") {
      const offset = swipeOffsetRef.current
      if (offset > 120 || (offset > 40 && elapsed < 250)) {
        handleClose()
      } else {
        setSwipeOffset(0)
        swipeOffsetRef.current = 0
      }
    } else if (swipeAxisRef.current === "horizontal") {
      const dx = horizontalSwipe
      const fast = elapsed < 300
      if ((dx < -60 || (dx < -30 && fast)) && canGoNext) {
        goToNext()
      } else if ((dx > 60 || (dx > 30 && fast)) && canGoPrev) {
        goToPrev()
      }
      setHorizontalSwipe(0)
    }

    touchStartRef.current = null
    swipeAxisRef.current = null
  }, [handleClose, horizontalSwipe, canGoNext, canGoPrev, goToNext, goToPrev])

  // Compute swipe-driven opacity and transform
  const swipeDismissProgress = Math.min(swipeOffset / 300, 1)
  const backdropOpacity = 1 - swipeDismissProgress * 0.6
  const contentScale = 1 - swipeDismissProgress * 0.08

  if (!isOpen && !animating) return null
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={currentItem?.alt ?? "Image lightbox"}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-foreground/90 backdrop-blur-md transition-opacity duration-350 ease-out",
          visible ? "opacity-100" : "opacity-0"
        )}
        style={{ opacity: visible ? backdropOpacity : 0 }}
        onClick={handleClose}
      />

      {/* Close button */}
      <button
        onClick={handleClose}
        className={cn(
          "absolute top-3 right-3 sm:top-5 sm:right-5 lg:top-7 lg:right-7 z-30 flex items-center justify-center",
          "w-11 h-11 sm:w-11 sm:h-11 rounded-full",
          "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white",
          "active:scale-95 transition-all duration-300",
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
        style={{ transitionDelay: visible ? "200ms" : "0ms" }}
        aria-label="Close lightbox"
      >
        <X size={20} strokeWidth={1.5} />
      </button>

      {/* Gallery counter */}
      {hasGallery && (
        <div
          className={cn(
            "absolute top-3.5 left-3 sm:top-5.5 sm:left-5 lg:top-7.5 lg:left-7 z-30 transition-all duration-300",
            visible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: visible ? "250ms" : "0ms" }}
        >
          <span className="label-uppercase text-[9px] sm:text-[10px] tracking-[0.2em] text-white/40">
            {currentIndex + 1} / {gallery.length}
          </span>
        </div>
      )}

      {/* Prev/Next navigation buttons — desktop */}
      {hasGallery && (
        <>
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={cn(
              "hidden sm:flex absolute left-3 sm:left-5 lg:left-7 top-1/2 -translate-y-1/2 z-30",
              "items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full",
              "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white",
              "active:scale-95 transition-all duration-300",
              canGoPrev ? "opacity-100" : "opacity-0 pointer-events-none",
              visible ? "scale-100" : "scale-90 opacity-0"
            )}
            style={{ transitionDelay: visible ? "300ms" : "0ms" }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={cn(
              "hidden sm:flex absolute right-3 sm:right-5 lg:right-7 top-1/2 -translate-y-1/2 z-30",
              "items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full",
              "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white",
              "active:scale-95 transition-all duration-300",
              canGoNext ? "opacity-100" : "opacity-0 pointer-events-none",
              visible ? "scale-100" : "scale-90 opacity-0"
            )}
            style={{ transitionDelay: visible ? "300ms" : "0ms" }}
            aria-label="Next image"
          >
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* Swipe indicator for mobile — subtle pull bar */}
      <div
        className={cn(
          "absolute top-2 left-1/2 -translate-x-1/2 z-20 w-8 h-1 rounded-full bg-white/30 sm:hidden transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: visible ? "400ms" : "0ms" }}
      />

      {/* Image + info wrapper */}
      <div
        ref={contentRef}
        className={cn(
          "relative z-10 flex flex-col items-center w-full px-4 sm:px-16 md:px-20 lg:px-24",
          "transition-all ease-out",
          swipeOffset > 0 || horizontalSwipe !== 0 ? "duration-0" : "duration-350",
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.97] translate-y-3"
        )}
        style={{
          transform: visible
            ? `translateX(${horizontalSwipe}px) translateY(${swipeOffset}px) scale(${contentScale})`
            : undefined,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image + logo container */}
        <div className="relative inline-block">
          {/* Loading skeleton */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center min-h-[200px] min-w-[200px]">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
            </div>
          )}

          {/* Main image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentItem?.src ?? ""}
            alt={currentItem?.alt ?? ""}
            onLoad={() => setLoaded(true)}
            draggable={false}
            className={cn(
              "rounded sm:rounded-md shadow-2xl select-none",
              "max-w-full sm:max-w-[85vw] md:max-w-[78vw] lg:max-w-4xl",
              "max-h-[55vh] sm:max-h-[65vh] md:max-h-[72vh] lg:max-h-[78vh]",
              "w-auto h-auto object-contain",
              "transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Logo watermark on image */}
          <div
            className={cn(
              "absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 pointer-events-none transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: loaded ? "200ms" : "0ms" }}
          >
            <IsketchLogo className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white/50 drop-shadow-lg" />
          </div>
        </div>

        {/* Project info */}
        {currentItem?.title && (
          <div
            className={cn(
              "mt-4 sm:mt-5 md:mt-6 text-center transition-all duration-500 w-full max-w-lg px-4",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
            style={{ transitionDelay: visible ? "300ms" : "0ms" }}
          >
            <p className="label-uppercase text-[9px] sm:text-[10px] tracking-[0.2em] text-white/40 mb-1.5 sm:mb-2">
              {currentItem.location}
              {currentItem.category ? ` | ${currentItem.category}` : ""}
            </p>
            <h3 className="font-serif text-base sm:text-lg md:text-xl text-white/90 leading-snug">
              {currentItem.title}
            </h3>
            {currentItem.href && (
              <Link
                href={currentItem.href}
                className={cn(
                  "inline-flex items-center gap-1.5 mt-3 sm:mt-4",
                  "label-uppercase text-[9px] sm:text-[10px] tracking-[0.2em] text-white/50 hover:text-white/90",
                  "transition-all duration-300 group/link"
                )}
              >
                View Project
                <ArrowRight size={12} className="transition-transform duration-300 group-hover/link:translate-x-0.5" />
              </Link>
            )}
          </div>
        )}

        {/* Gallery dots — mobile */}
        {hasGallery && gallery.length <= 12 && (
          <div
            className={cn(
              "flex items-center justify-center gap-1.5 mt-4 sm:mt-5 transition-all duration-500",
              visible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: visible ? "400ms" : "0ms" }}
          >
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (onNavigate) {
                    setSlideDirection(i > currentIndex ? "left" : "right")
                    setLoaded(false)
                    onNavigate(i)
                    setTimeout(() => setSlideDirection(null), 50)
                  }
                }}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === currentIndex
                    ? "w-2 h-2 bg-white/80"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
