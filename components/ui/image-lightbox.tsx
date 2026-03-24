"use client"

import { useEffect, useState, useCallback } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageLightboxProps {
  src: string
  alt: string
  title?: string
  location?: string
  category?: string
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ src, alt, title, location, category, isOpen, onClose }: ImageLightboxProps) {
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Reset loaded state when src changes
  useEffect(() => {
    if (isOpen) setLoaded(false)
  }, [isOpen, src])

  // Open: mount → animate in
  useEffect(() => {
    if (isOpen) {
      setAnimating(true)
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
      onClose()
    }, 350)
  }, [onClose])

  // Esc key
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, handleClose])

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
      window.__lenis?.stop()
    }
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      window.__lenis?.start()
    }
  }, [isOpen])

  if (!isOpen && !animating) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-16"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-foreground/80 backdrop-blur-sm transition-opacity duration-350 ease-out",
          visible ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      />

      {/* Close button */}
      <button
        onClick={handleClose}
        className={cn(
          "absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-20 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300",
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
        style={{ transitionDelay: visible ? "200ms" : "0ms" }}
        aria-label="Close"
      >
        <X size={18} strokeWidth={1.5} />
      </button>

      {/* Image + info wrapper */}
      <div
        className={cn(
          "relative z-10 flex flex-col items-center transition-all duration-350 ease-out",
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.97] translate-y-3"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={cn(
            "rounded-sm sm:rounded max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-5xl max-h-[65vh] sm:max-h-[70vh] md:max-h-[72vh] w-auto h-auto object-contain transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Project info */}
        {title && (
          <div
            className={cn(
              "mt-4 sm:mt-5 text-center transition-all duration-300",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
            style={{ transitionDelay: visible ? "300ms" : "0ms" }}
          >
            <p className="label-uppercase text-[9px] sm:text-[10px] tracking-[0.2em] text-white/40 mb-1.5 sm:mb-2">
              {location}
              {category ? ` | ${category}` : ""}
            </p>
            <h3 className="font-serif text-base sm:text-lg md:text-xl text-white/90">
              {title}
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}
