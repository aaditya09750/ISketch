"use client"

import { useEffect, useRef, useState } from "react"
import { Container } from "@/components/ui/container"

export function ServicesIntroSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-36">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-6 transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            What We Offer
          </p>
          <h2
            className={`heading-section text-3xl lg:text-4xl text-foreground mb-10 transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            Tailored services to suit every project
          </h2>

          {/* Separator */}
          <div
            className={`h-px bg-accent-decorative/30 mx-auto mb-10 transition-all duration-[1.2s] ease-out ${
              isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          />

          <p
            className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "550ms" }}
          >
            Whether you are undertaking a complete renovation or seeking guidance
            on a specific room, we offer a range of services designed to meet your
            needs. Each project receives our complete attention and dedication to
            achieving exceptional results.
          </p>
        </div>
      </Container>
    </section>
  )
}
