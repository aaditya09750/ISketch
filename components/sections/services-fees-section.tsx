"use client"

import { useEffect, useRef, useState } from "react"
import { FancyButton } from "@/components/common/fancy-button"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const feeItems = [
  {
    number: "01",
    label: "Full Interior Design",
    pricing: "Percentage-based",
    detail:
      "A comprehensive service covering every stage of your project  from initial concept through to final installation reflecting the scope and complexity of your vision.",
    includes: ["Concept to completion", "Material sourcing", "Project oversight"],
  },
  {
    number: "02",
    label: "Consultation",
    pricing: "Hourly rate",
    detail:
      "Expert guidance on specific areas of your interior, from space planning and layout optimisation to colour palettes and material selections.",
    includes: ["Space planning advice", "Colour & material guidance", "Layout review"],
  },
  {
    number: "03",
    label: "Property Styling",
    pricing: "Fixed fee",
    detail:
      "Tailored staging solutions for pre-sale or rental properties, curating furniture and accessories to present your space at its most compelling.",
    includes: ["Pre-sale staging", "Furniture curation", "Accessory placement"],
  },
  {
    number: "04",
    label: "Bespoke Joinery",
    pricing: "Per project quote",
    detail:
      "Custom cabinetry and built-in solutions designed to your exact specifications, crafted by our network of trusted workers following a thorough site assessment.",
    includes: ["Custom cabinetry", "Built-in solutions", "Artisan finishing"],
  },
]

/* ------------------------------------------------------------------ */
/*  Single fee row                                                     */
/* ------------------------------------------------------------------ */
function FeeRow({
  item,
  index,
  isVisible,
}: {
  item: (typeof feeItems)[number]
  index: number
  isVisible: boolean
}) {
  const delay = 450 + index * 150

  return (
    <div
      className={`group transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 py-12 sm:py-14 lg:py-16">
        {/* Number + Title column */}
        <div className="lg:col-span-4 xl:col-span-3">
          <div className="flex items-start gap-5 lg:gap-6">
            {/* Large number */}
            <span className="heading-display text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[0.85] text-accent-decorative/[0.1] select-none shrink-0 transition-colors duration-700 group-hover:text-accent-decorative/[0.25]">
              {item.number}
            </span>

            <div className="pt-2 sm:pt-3 lg:pt-4">
              <h3 className="heading-section text-[1.25rem] sm:text-[1.4rem] lg:text-2xl text-foreground leading-tight mb-2.5">
                {item.label}
              </h3>
              <span className="label-uppercase text-[0.58rem] tracking-[0.22em] text-accent-decorative/50">
                {item.pricing}
              </span>
            </div>
          </div>
        </div>

        {/* Description column */}
        <div className="lg:col-span-5 xl:col-span-5 xl:col-start-5 lg:pt-3">
          <p className="body-text text-muted-foreground leading-[1.85]">
            {item.detail}
          </p>
        </div>

        {/* Includes column */}
        <div className="lg:col-span-3 xl:col-span-3 lg:pt-3">
          <p className="label-uppercase text-[0.55rem] tracking-[0.22em] text-accent-decorative/40 mb-4 lg:mb-5">
            Includes
          </p>
          <ul className="space-y-3">
            {item.includes.map((feature, i) => (
              <li
                key={feature}
                className={`flex items-center gap-3 transition-all duration-[700ms] ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-3"
                }`}
                style={{ transitionDelay: `${delay + 200 + i * 80}ms` }}
              >
                <span className="w-4 h-px bg-accent-decorative/30 shrink-0 transition-all duration-500 group-hover:w-6 group-hover:bg-accent-decorative/55" />
                <span className="body-text text-[0.8rem] text-foreground/60 tracking-wide transition-colors duration-500 group-hover:text-foreground/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Separator line */}
      <div className="h-px w-full bg-border/12 transition-colors duration-700 group-hover:bg-accent-decorative/15" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* ── Centered header ── */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-24 lg:mb-28">
          <p
            className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-5 transition-all duration-[900ms] ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Investment
          </p>
          <h2
            className={`heading-display text-[2rem] sm:text-4xl lg:text-[2.75rem] text-foreground leading-[1.15] mb-7 transition-all duration-[900ms] ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            Fees &amp; Pricing
          </h2>
          <div
            className={`h-px bg-accent-decorative/30 mx-auto mb-8 transition-all duration-[1.2s] ease-out ${
              isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          />
          <p
            className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            Our fees are structured to reflect the scope and complexity of each project. We offer transparent pricing and will provide a detailed proposal following our initial consultation.
          </p>
        </div>

        {/* ── Fee rows ── */}
        <div className="border-t border-border/12">
          {feeItems.map((item, i) => (
            <FeeRow
              key={item.number}
              item={item}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className={`mt-24 sm:mt-28 lg:mt-32 text-center max-w-xl mx-auto transition-all duration-[900ms] ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "1150ms" }}
        >
          <div
            className={`mx-auto h-px bg-accent-decorative/30 mb-14 sm:mb-16 transition-all duration-[1s] ease-out ${
              isVisible ? "w-12 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "1100ms" }}
          />

          <h3 className="heading-display text-2xl sm:text-3xl lg:text-[2.25rem] text-foreground leading-[1.2] mb-5 sm:mb-6">
            Ready to Begin?
          </h3>

          <p className="body-text text-muted-foreground leading-[1.85] mb-10 sm:mb-12">
            Every project is unique — contact us to schedule a consultation
            and discover how we can transform your space into something
            extraordinary.
          </p>

          <FancyButton href="/contact">Get in Touch</FancyButton>
        </div>
      </div>
    </section>
  )
}
