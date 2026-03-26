"use client"

import { useEffect, useRef, useState } from "react"
import { Container } from "@/components/ui/container"
import { designProcess } from "@/data/services"

export function ServicesProcessSection() {
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
    <section ref={sectionRef} className="py-15 lg:py-24 bg-secondary">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p
            className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-6 transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            How We Work
          </p>
          <h2
            className={`heading-section text-3xl lg:text-4xl text-foreground transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            Our Process
          </h2>

          {/* Separator */}
          <div
            className={`h-px bg-accent-decorative/30 mx-auto mt-8 transition-all duration-[1.2s] ease-out ${
              isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          />
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {designProcess.map((item, i) => (
            <div
              key={item.step}
              className={`text-center transition-all duration-[800ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${500 + i * 120}ms` }}
            >
              <span className="heading-display text-4xl text-accent-decorative/80 mb-6 block">
                {item.step}
              </span>
              <h3 className="heading-section text-xl text-foreground mb-5">
                {item.title}
              </h3>
              <div className="h-px w-6 bg-accent-decorative/25 mx-auto mb-5" />
              <p className="body-text text-sm text-muted-foreground leading-[1.75]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
