"use client"

import { useEffect, useRef, useState } from "react"

const FALLBACK_TIMEOUT = 3000

export function useImageReady(src: string, threshold = 0.15) {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [isImageReady, setIsImageReady] = useState(false)

  // Track when the container enters the viewport
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  // Track when the image is decoded and ready to paint
  useEffect(() => {
    let cancelled = false

    const check = () => {
      const img = imageRef.current
      if (!img) return

      // Fast path: image already cached/decoded
      if (img.complete && img.naturalWidth > 0) {
        if (!cancelled) setIsImageReady(true)
        return
      }

      // Async path: wait for decode
      img
        .decode()
        .then(() => {
          if (!cancelled) setIsImageReady(true)
        })
        .catch(() => {
          // Broken image fallback — don't block animation forever
          if (!cancelled) setIsImageReady(true)
        })
    }

    // The ref may not be attached yet on first render, so defer check
    const frame = requestAnimationFrame(check)

    // Absolute fallback timeout
    const timer = setTimeout(() => {
      if (!cancelled) setIsImageReady(true)
    }, FALLBACK_TIMEOUT)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    }
  }, [src])

  const shouldReveal = isInView && isImageReady

  return { imageRef, containerRef, shouldReveal, isInView }
}
