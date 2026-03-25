"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function ServiceHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-[70vh] md:h-[85vh] lg:h-screen w-full overflow-hidden bg-surface-dark">
      {/* Background Image */}
      <Image
        src="/images/services-hero.jpg"
        alt="I Sketch Interior Design Services"
        fill
        className={`object-cover transition-transform duration-[2s] ease-out ${
          isLoaded ? "scale-100" : "scale-105"
        }`}
        priority
        sizes="100vw"
        quality={90}
      />

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          {/* Subtle label */}
          <p
            className={`label-uppercase text-white/70 mb-5 lg:mb-6 tracking-[0.3em] transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            What We Offer
          </p>

          {/* Main heading */}
          <h1
            className={`heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.08em] uppercase transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Our Services
          </h1>

          {/* Decorative line */}
          <div
            className={`mx-auto mt-7 lg:mt-8 h-px bg-white/50 transition-all duration-1000 ease-out ${
              isLoaded ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ transitionDelay: "1200ms" }}
      >
        <span className="label-uppercase select-none text-[6px] tracking-[0.3em] text-white/60">
          Scroll
        </span>
        <div className="w-px h-7 bg-white/25 animate-gentle-bounce" />
      </div>
    </section>
  )
}
