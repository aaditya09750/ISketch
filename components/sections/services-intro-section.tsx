"use client"

import { useEffect, useRef, useState } from "react"

/* ------------------------------------------------------------------ */
/*  Highlights data                                                    */
/* ------------------------------------------------------------------ */
const highlights = [
  {
    number: "16+",
    label: "Years of Experience",
    text: "Crafting luxury interiors across the UK and internationally since 2008.",
  },
  {
    number: "100+",
    label: "Projects Delivered",
    text: "Residential and commercial spaces transformed with meticulous attention to detail.",
  },
  {
    number: "4",
    label: "Core Services",
    text: "A complete design offering from consultation through to bespoke joinery.",
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-surface-warm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* ── Top: split header ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-16 lg:mb-24">
          {/* Left — label & heading */}
          <div className="lg:col-span-5">
            <p
              className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-5 transition-all duration-[900ms] ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              What We Offer
            </p>

            <h2
              className={`heading-display text-3xl sm:text-4xl lg:text-[2.8rem] text-foreground leading-[1.15] mb-8 lg:mb-10 transition-all duration-[900ms] ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              Tailored services
              <br className="hidden sm:block" />
              {" "}to suit every project
            </h2>

            <div
              className={`h-px bg-accent-decorative/30 mb-8 lg:mb-10 transition-all duration-[1.2s] ease-out ${
                isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />

            <p
              className={`body-text text-muted-foreground leading-[1.85] max-w-md transition-all duration-[900ms] ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "550ms" }}
            >
              Whether you are undertaking a complete renovation or seeking guidance
              on a specific room, we offer a range of services designed to meet your
              needs. Each project receives our complete attention and dedication to
              achieving exceptional results.
            </p>
          </div>

          {/* Right — secondary content */}
          <div className="lg:col-span-7 lg:pt-2">
            <div
              className={`lg:flex lg:items-end lg:justify-end lg:h-full transition-all duration-[900ms] ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "650ms" }}
            >
              <div className="lg:text-right max-w-xl lg:ml-auto">
                <p className="body-text text-muted-foreground leading-[1.85]">
                  From initial concept through to the final reveal, our experienced team
                  of interior and architectural designers provides a personalised service
                  to create detail-driven, luxury interiors that perfectly suit their
                  context and stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom: highlights ── */}
        <div className="grid md:grid-cols-3 gap-0">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`relative py-10 lg:py-14 px-0 md:px-6 lg:px-10 first:pl-0 last:pr-0 transition-all duration-[900ms] ease-out ${
                i < highlights.length - 1
                  ? "border-b md:border-b-0 md:border-r border-accent-decorative/20"
                  : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${700 + i * 150}ms` }}
            >
              {/* Number */}
              <span className="heading-display text-5xl lg:text-6xl text-accent-decorative/15 leading-none select-none block mb-4">
                {item.number}
              </span>

              {/* Separator */}
              <div className="w-8 h-px bg-accent-decorative/30 mb-5" />

              {/* Label */}
              <h3 className="heading-section text-lg lg:text-xl text-foreground mb-3 tracking-wide">
                {item.label}
              </h3>

              {/* Text */}
              <p className="body-text text-sm text-muted-foreground leading-[1.8] max-w-xs">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
