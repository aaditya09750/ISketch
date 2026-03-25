"use client"

import { useEffect, useRef, useState } from "react"
import { RevealImage } from "@/components/ui/reveal-image"

export function AboutTeamSection() {
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
    <section ref={sectionRef} className="py-15 lg:py-25 bg-surface-warm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">

          {/* Image column — left */}
          <div className="lg:col-span-6">
            <RevealImage
              src="/images/team2.jpg"
              alt="I Sketch Interiors — Our Team"
              sizes="(max-width: 1023px) 100vw, 50vw"
              containerClassName="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
            />
          </div>

          {/* Content column — right */}
          <div className="lg:col-span-6">
            {/* Label */}
            <p
              className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-4 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Wealth of Expertise
            </p>

            {/* Heading */}
            <h2
              className={`heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-7 lg:mb-9 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              Our Team
            </h2>

            {/* Separator */}
            <div
              className={`h-px bg-accent-decorative/30 mb-7 lg:mb-9 transition-all duration-[1s] ease-out ${
                isVisible ? "w-12 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />

            {/* Body */}
            <div className="space-y-5 max-w-lg">
              <p
                className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                Passion for design starts from collaboration with a team whose expertise
                and experience align seamlessly with your vision. Our team is dedicated
                to delivering interior design services that inspire and elevate, ensuring
                that every project is an extraordinary experience.
              </p>
              <p
                className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                Comprising a handpicked group of interior and furniture designers, along
                with expert textile and colour consultants, we offer a full-service approach
                that allows us to deliver cohesive, high-end interiors globally. Our network
                of trusted artisans, craftsmen, and suppliers ensures every product is
                executed to the highest standard with meticulous attention to detail.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
