"use client"

import { useEffect, useRef, useState } from "react"
import { Container } from "@/components/shared/container"
import { ServiceImageCarousel } from "./service-image-carousel"
import { services } from "@/data/services"

function ServiceItem({ service, index }: { service: typeof services[number]; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null)
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

    if (itemRef.current) observer.observe(itemRef.current)
    return () => observer.disconnect()
  }, [])

  const isReversed = index % 2 === 1

  return (
    <div
      ref={itemRef}
      className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
    >
      {/* Content */}
      <div className={isReversed ? "lg:order-2" : ""}>
        <span
          className={`heading-display text-6xl lg:text-8xl text-accent-decorative/15 leading-none select-none block transition-all duration-[900ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          {service.number}
        </span>

        <h3
          className={`heading-section text-2xl lg:text-3xl text-foreground mt-4 mb-8 transition-all duration-[900ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          {service.title}
        </h3>

        <div
          className={`h-px bg-accent-decorative/30 mb-8 transition-all duration-[1.2s] ease-out ${
            isVisible ? "w-12 opacity-100" : "w-0 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        />

        <p
          className={`body-text text-muted-foreground leading-[1.85] mb-10 transition-all duration-[900ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {service.description}
        </p>

        <ul className="space-y-4">
          {service.features.map((feature, i) => (
            <li
              key={feature}
              className={`flex items-center gap-4 transition-all duration-[700ms] ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
              style={{ transitionDelay: `${600 + i * 80}ms` }}
            >
              <span className="w-8 h-px bg-accent-decorative/50" />
              <span className="body-text text-sm text-foreground/80 tracking-wide">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image carousel with watermark */}
      <div
        className={`relative transition-all duration-[900ms] ease-out ${
          isReversed ? "lg:order-1" : ""
        } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionDelay: "300ms" }}
      >
        <ServiceImageCarousel
          images={service.images}
          alt={`I Sketch Interiors — ${service.title}`}
        />
      </div>
    </div>
  )
}

export function ServicesDetailSection() {
  return (
    <section className="py-24 lg:py-36">
      <Container>
        <div className="space-y-24 lg:space-y-36">
          {services.map((service, index) => (
            <ServiceItem
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
