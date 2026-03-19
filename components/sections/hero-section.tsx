"use client"

import { memo, useEffect, useState } from "react"

/**
 * Isolated video component — memo prevents re-renders from parent state changes.
 * Loads eagerly for instant playback. Poster image covers any brief decode time.
 */
const HeroVideo = memo(function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/hero2.webp"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero.webm" type="video/webm" />
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  )
})

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <HeroVideo />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col bg-surface-dark/10 justify-end pb-24 sm:pb-28 lg:pb-30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <p
              className={`label-uppercase select-none pl-0.5 lg:pl-2 text-white/80 mb-2 lg:mb-4 transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Luxury Interior Design
            </p>
            <h2
              className={`heading-display select-none text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              Creating timeless
              <br />
              interiors
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ transitionDelay: "10ms" }}
      >
        <span className="label-uppercase select-none text-[6px] text-white/80">Scroll</span>
        <div className="w-px h-6 bg-white/25 animate-gentle-bounce" />
      </div>
    </section>
  )
}
