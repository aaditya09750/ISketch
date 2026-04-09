"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import IsketchLogo from "@/components/shared/isketch-logo"

export function LatestProjectSection() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden group cursor-pointer"
    >
      {/* Responsive height with comfortable touch targets on mobile */}
      <div className="relative h-[45vh] min-h-[280px] sm:h-[50vh] sm:min-h-[340px] md:h-[60vh] lg:h-[70vh] lg:min-h-[480px]">

        {/* Background image */}
        <Image
          src="/images/p2.jpg"
          alt="Latest project by I Sketch Interiors"
          fill
          className="object-cover transition-transform duration-[800ms] ease-out lg:group-hover:scale-[1.03]"
          sizes="100vw"
          quality={85}
          priority={false}
        />

        {/* Overlay — darker on mobile for readability, subtle hover shift on desktop */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/50 transition-all duration-600 group-hover:bg-black/60" />

        {/* Logo watermark */}
        <div
          className={`absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 lg:top-8 lg:right-8 z-10 pointer-events-none transition-all duration-[900ms] ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <IsketchLogo className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white/60 drop-shadow-md transition-opacity duration-500 group-hover:text-white/80" />
        </div>

        {/* Inner border frame — responsive inset */}
        <div className="absolute inset-3 sm:inset-4 md:inset-5 lg:inset-6 border border-white/0 group-hover:border-white/30 lg:group-hover:border-white/40 transition-all duration-600 pointer-events-none" />

        {/* Full-card clickable link */}
        <Link
          href="/portfolio"
          className="absolute inset-0 z-20"
          aria-label="View latest project in portfolio"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center px-6 sm:px-8">

            {/* Text with lines */}
            <div
              className={`transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="inline-flex items-center gap-3 sm:gap-4 lg:gap-5 text-white">
                {/* Left line */}
                <span className="w-6 sm:w-8 lg:w-10 h-px bg-white/40 transition-all duration-500 group-hover:w-10 sm:group-hover:w-12 lg:group-hover:w-16 group-hover:bg-white/80" />

                {/* Text swap container */}
                <span className="relative overflow-hidden h-[1.2em]">
                  <span className="label-uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white text-[0.65rem] sm:text-xs md:text-sm block transition-transform duration-400 ease-out group-hover:-translate-y-full">
                    Latest Project
                  </span>
                  <span className="label-uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 text-[0.65rem] sm:text-xs md:text-sm block transition-transform duration-400 ease-out group-hover:-translate-y-full">
                    Take a Look
                  </span>
                </span>

                {/* Right line */}
                <span className="w-6 sm:w-8 lg:w-10 h-px bg-white/40 transition-all duration-500 group-hover:w-10 sm:group-hover:w-12 lg:group-hover:w-16 group-hover:bg-white/80" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
