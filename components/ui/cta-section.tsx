"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { FancyButton } from "@/components/common/fancy-button"

interface CTASectionProps {
  heading: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: "default" | "secondary" | "dark" | "warm"
}

const variantStyles = {
  default: {
    section: "",
    heading: "text-foreground",
    description: "text-muted-foreground",
    decorative: "bg-accent-decorative/40",
  },
  secondary: {
    section: "bg-secondary",
    heading: "text-foreground",
    description: "text-muted-foreground",
    decorative: "bg-accent-decorative/40",
  },
  dark: {
    section: "bg-surface-dark",
    heading: "text-surface-dark-foreground",
    description: "text-surface-dark-foreground/70",
    decorative: "bg-surface-dark-foreground/20",
  },
  warm: {
    section: "bg-surface-warm",
    heading: "text-foreground",
    description: "text-muted-foreground",
    decorative: "bg-accent-decorative/40",
  },
}

export function CTASection({
  heading,
  description,
  buttonText,
  buttonHref,
  variant = "default",
}: CTASectionProps) {
  const styles = variantStyles[variant]
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
      className={cn(
        "py-20 sm:py-28 md:py-15 lg:py-20 overflow-hidden",
        styles.section
      )}
    >
      <div className="mx-auto max-w-2xl lg:max-w-3xl px-6 sm:px-8 md:px-10 text-center">
        {/* Decorative accent line */}
        <div
          className={cn(
            "mx-auto h-px w-10 sm:w-12 md:w-16 mb-8 sm:mb-10 md:mb-14 lg:mb-16 transition-all duration-1000 ease-out",
            styles.decorative,
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          )}
        />

        {/* Heading */}
        <h2
          className={cn(
            "heading-section text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] mb-4 sm:mb-5 md:mb-6 lg:mb-8 transition-all duration-700 ease-out",
            styles.heading,
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          )}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {heading}
        </h2>

        {/* Description */}
        <p
          className={cn(
            "body-text text-sm sm:text-base lg:text-lg max-w-md sm:max-w-lg md:max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-14 transition-all duration-700 ease-out",
            styles.description,
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          )}
          style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
        >
          {description}
        </p>

        {/* CTA Button */}
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          )}
          style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
        >
          <FancyButton href={buttonHref}>
            {buttonText}
          </FancyButton>
        </div>
      </div>
    </section>
  )
}
