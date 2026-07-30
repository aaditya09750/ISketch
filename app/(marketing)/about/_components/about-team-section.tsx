"use client"

import { useEffect, useRef, useState } from "react"

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
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-surface-warm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column — heading & intro */}
          <div className="lg:col-span-5">
            <p
              className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-5 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Wealth of Expertise
            </p>

            <h2
              className={`heading-display text-4xl sm:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] mb-8 lg:mb-10 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              I Sketch
            </h2>

            <div
              className={`h-px bg-accent-decorative/30 mb-8 lg:mb-10 transition-all duration-[1.2s] ease-out ${
                isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />

            <p
              className={`body-text text-muted-foreground leading-[1.85] max-w-md transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "550ms" }}
            >
              Passion for design starts from collaboration with a team whose expertise and
              experience align seamlessly with your vision. Our team is dedicated to delivering
              interior design services that inspire and elevate, ensuring that every project is an
              extraordinary experience.
            </p>
          </div>

          {/* Right column — detailed content with disciplines */}
          <div className="lg:col-span-7 lg:pt-2">
            <div
              className={`mb-10 lg:mb-14 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "650ms" }}
            >
              <p className="body-text text-muted-foreground leading-[1.85] max-w-xl">
                Comprising a handpicked group of interior and furniture designers, along with expert
                textile and colour consultants, we offer a full-service approach that allows us to
                deliver cohesive, high-end interiors globally. Our network of trusted artisans,
                craftsmen, and suppliers ensures every product is executed to the highest standard
                with meticulous attention to detail.
              </p>
            </div>

            {/* Discipline list */}
            <div
              className={`border-t border-border/40 pt-8 lg:pt-10 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <p className="label-uppercase text-accent-decorative/70 tracking-[0.25em] mb-6 text-[0.625rem]">
                Our Disciplines
              </p>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {[
                  "Interior Design",
                  "Furniture Design",
                  "Textile Consulting",
                  "Colour Consulting",
                  "Bespoke Joinery",
                ].map((discipline, i) => (
                  <div
                    key={discipline}
                    className={`flex items-center gap-3 py-2 border-b border-border/20 transition-all duration-[700ms] ease-out ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                    }`}
                    style={{ transitionDelay: `${900 + i * 80}ms` }}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-decorative/50 shrink-0" />
                    <span className="body-text text-foreground/70 text-sm">{discipline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
