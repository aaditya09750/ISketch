"use client"

import { useEffect, useRef, useState } from "react"

const pillars = [
  {
    number: "01",
    title: "Understand",
    text: "We take the time to deeply understand the spaces that form the backdrop to our clients’ lives, ensuring every detail reflects their unique identity.",
  },
  {
    number: "02",
    title: "Create",
    text: "Our curated approach means we take on a select number of projects each year, dedicating focused attention and care to every commission.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "From the first meeting to the final reveal, we are committed to delivering graceful luxury where every space feels elegant, comfortable, and distinctly personal.",
  },
]

export function AboutApproachSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Top section — heading left, body right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-16 lg:mb-24">
          <div className="lg:col-span-7 lg:flex lg:items-end lg:justify-end order-2 lg:order-1">
            <div className="lg:text-right">
              <div
                className={`h-px bg-accent-decorative/30 mb-8 lg:ml-auto transition-all duration-[1.2s] ease-out ${
                  isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              />
              <p
                className={`body-text text-muted-foreground leading-[1.85] max-w-xl transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "550ms" }}
              >
               At I Sketch, our approach is grounded in the belief that every interior should be a true reflection of the client’s unique identity. With a refined understanding that comes from dedicating ourselves to our craft, we transform spaces into living expressions of personal style.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <p
              className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-5 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Timeless Elegance
            </p>

            <h2
              className={`heading-display text-4xl sm:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              Our Approach
            </h2>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`relative py-10 lg:py-14 px-6 lg:px-10 border-t border-border/30 md:border-t-0 md:border-l first:border-l-0 first:border-t-0 last:pr-0 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${700 + i * 150}ms` }}
            >
              <span className="heading-display text-6xl lg:text-7xl text-accent-decorative/10 leading-none select-none">
                {pillar.number}
              </span>

              <h3 className="heading-section text-xl lg:text-2xl text-foreground mt-4 mb-4">
                {pillar.title}
              </h3>

              <div className="h-px w-8 bg-accent-decorative/30 mb-5" />

              <p className="body-text text-muted-foreground leading-[1.85] text-sm">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
