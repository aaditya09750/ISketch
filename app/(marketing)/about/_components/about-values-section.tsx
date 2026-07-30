"use client"

import { useEffect, useRef, useState } from "react"
import { values } from "@/data/about"

export function AboutValuesSection() {
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
    <section ref={sectionRef} className="py-15 lg:py-25 bg-surface-warm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p
            className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-4 transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Our Values
          </p>
          <h2
            className={`heading-display text-3xl sm:text-4xl lg:text-[2.5rem] text-foreground leading-[1.2] transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            What Guides Us
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`relative text-center px-6 md:px-8 lg:px-12 py-10 md:py-0 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${index < values.length - 1 ? "border-b md:border-b-0 md:border-r border-accent-decorative/20" : ""}`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Decorative number */}
              <span className="font-serif select-none text-5xl lg:text-6xl text-accent-decorative/15 block mb-4">
                0{index + 1}
              </span>

              {/* Separator */}
              <div className="w-8 h-px bg-accent-decorative/40 mx-auto mb-6" />

              <h3 className="font-serif text-lg lg:text-xl text-foreground mb-4 tracking-wide">
                {value.title}
              </h3>

              <p className="body-text text-sm text-muted-foreground leading-[1.8] max-w-xs mx-auto">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
