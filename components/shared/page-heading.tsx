"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface PageHeadingProps {
  label: string
  title: string
  description?: string
}

export function PageHeading({ label, title, description }: PageHeadingProps) {
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
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-28 sm:pt-32 md:pt-36 lg:pt-44 pb-12 sm:pb-14 md:pb-16 lg:pb-20"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 text-center">
        {/* Label */}
        <p
          className={cn(
            "label-uppercase text-accent mb-4 sm:mb-5 md:mb-6 transition-all duration-600 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
          style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
        >
          {label}
        </p>

        {/* Title */}
        <h1
          className={cn(
            "heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-[0.08em] uppercase transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          )}
          style={{ transitionDelay: isVisible ? "250ms" : "0ms" }}
        >
          {title}
        </h1>

        {/* Decorative line */}
        <div
          className={cn(
            "mx-auto h-px w-10 sm:w-12 md:w-14 bg-accent-decorative/40 mt-6 sm:mt-8 md:mt-10 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
          )}
          style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
        />

        {/* Description */}
        {description && (
          <p
            className={cn(
              "body-text text-sm sm:text-base text-muted-foreground max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-10 leading-relaxed transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
            )}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
