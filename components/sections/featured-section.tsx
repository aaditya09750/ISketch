"use client"

import { publications } from "@/data/about"
import { useEffect, useRef, useState } from "react"

export function FeaturedSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="cv-auto py-16 sm:py-20 lg:py-25 bg-surface-warm overflow-hidden"
    >
      {/* Section Header */}
      <div
        className={`flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-16 lg:mb-20 px-6 sm:px-8 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="hidden sm:block h-px w-12 lg:w-20 bg-accent-decorative/30" />
        <p className="label-uppercase text-muted-foreground/80 tracking-[0.25em] text-[0.625rem] lg:text-[0.6875rem]">
          As Featured In
        </p>
        <span className="hidden sm:block h-px w-12 lg:w-20 bg-accent-decorative/30" />
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-48 bg-linear-to-r from-surface-warm to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-48 bg-linear-to-l from-surface-warm to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-featured">
          {/* First copy */}
          <div className="flex shrink-0 items-center">
            {publications.map((publication, i) => (
              <span
                key={publication}
                className={`featured-publication font-serif select-none text-base sm:text-lg lg:text-xl text-foreground/30 tracking-[0.05em] mx-8 sm:mx-14 lg:mx-20 whitespace-nowrap transition-all duration-500 ease-out cursor-default hover:text-foreground/60 hover:-translate-y-px ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: isVisible ? `${600 + i * 100}ms` : "0ms" }}
              >
                {publication}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center">
            {publications.map((publication) => (
              <span
                key={`dup-${publication}`}
                className="featured-publication font-serif select-none text-base sm:text-lg lg:text-xl text-foreground/30 tracking-[0.05em] mx-8 sm:mx-14 lg:mx-20 whitespace-nowrap transition-all duration-500 ease-out cursor-default hover:text-foreground/60 hover:-translate-y-px"
              >
                {publication}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
