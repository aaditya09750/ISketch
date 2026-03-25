"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

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
    <section ref={sectionRef} className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/project-1.jpg"
        alt="Latest project by I Sketch Interiors"
        fill
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          {/* Label */}
          <p
            className={`label-uppercase text-white/70 tracking-[0.3em] mb-6 lg:mb-8 transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Latest Project
          </p>

          {/* Button */}
          <div
            className={`transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-4 text-white"
            >
              <span className="w-8 h-px bg-white/50 transition-all duration-500 group-hover:w-12 group-hover:bg-white" />
              <span className="label-uppercase tracking-[0.2em] text-white text-xs sm:text-sm transition-colors duration-300 group-hover:text-white/80">
                Take a Look
              </span>
              <span className="w-8 h-px bg-white/50 transition-all duration-500 group-hover:w-12 group-hover:bg-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
