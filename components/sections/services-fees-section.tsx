"use client"

import { useEffect, useRef, useState } from "react"
import { Container } from "@/components/ui/container"
import { FancyButton } from "@/components/common/fancy-button"

const feeItems = [
  {
    label: "Full Interior Design",
    detail: "Percentage-based, reflecting scope & complexity",
  },
  {
    label: "Consultation",
    detail: "Hourly rate for expert guidance on specific areas",
  },
  {
    label: "Property Styling",
    detail: "Fixed fee tailored to property size & requirements",
  },
  {
    label: "Bespoke Joinery",
    detail: "Quoted per project following site assessment",
  },
]

export function ServicesFeesSection() {
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

  const animIn = (visible: boolean) =>
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"

  return (
    <section ref={sectionRef} className="py-24 lg:py-36">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12">

          {/* Left — heading */}
          <div className="lg:col-span-4 xl:col-span-3">
            <p
              className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-5 transition-all duration-[900ms] ease-out ${animIn(isVisible)}`}
              style={{ transitionDelay: "100ms" }}
            >
              Investment
            </p>
            <h2
              className={`heading-section text-3xl lg:text-4xl text-foreground mb-6 transition-all duration-[900ms] ease-out ${animIn(isVisible)}`}
              style={{ transitionDelay: "250ms" }}
            >
              Fees &amp; Pricing
            </h2>
            <div
              className={`h-px bg-accent-decorative/30 transition-all duration-[1.2s] ease-out ${
                isVisible ? "w-12 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />
          </div>

          {/* Right — content */}
          <div className="lg:col-span-8 xl:col-span-8 xl:col-start-5">
            <p
              className={`body-text text-muted-foreground leading-[1.85] mb-10 sm:mb-12 transition-all duration-[900ms] ease-out ${animIn(isVisible)}`}
              style={{ transitionDelay: "400ms" }}
            >
              Our fees are structured to reflect the scope and complexity of each
              project. We offer transparent pricing and will provide a detailed
              proposal following our initial consultation.
            </p>

            {/* Fee structure list */}
            <div className="mb-10 sm:mb-12">
              {feeItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-4 border-b border-border/15 transition-all duration-[700ms] ease-out ${animIn(isVisible)}`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <span className="heading-section text-sm sm:text-base text-foreground mb-1 sm:mb-0">
                    {item.label}
                  </span>
                  <span className="font-sans text-[0.8rem] sm:text-sm text-muted-foreground/60">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom note + CTA */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-[900ms] ease-out ${animIn(isVisible)}`}
              style={{ transitionDelay: "900ms" }}
            >
              <p className="body-text text-sm text-muted-foreground/60 leading-relaxed max-w-sm">
                Every project is unique — we provide a bespoke quotation
                tailored to your specific needs.
              </p>
              <FancyButton href="/contact">
                Request a Quote
              </FancyButton>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
