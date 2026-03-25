"use client"

import { useEffect, useRef, useState } from "react"
import { RevealImage } from "@/components/ui/reveal-image"

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
    <section ref={sectionRef} className="py-15 lg:py-25">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">

          {/* Content column — left */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            {/* Label */}
            <p
              className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-4 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Timeless Elegance
            </p>

            {/* Heading */}
            <h2
              className={`heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-7 lg:mb-9 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              Our Approach
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
                At I Sketch Interiors, our approach is grounded in the belief that every
                interior should be a true reflection of the client&rsquo;s unique identity.
                We take the time to deeply understand the spaces that form the backdrop
                to our clients&rsquo; lives, creating timeless interiors that are as
                beautiful as they are functional.
              </p>
              <p
                className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                With a refined understanding that comes from dedicating ourselves
                to our craft and from understanding the client&rsquo;s aspirations,
                we take on a curated number of projects each year. This ensures each
                client receives the highest level of personal attention and service.
                From the first meeting to the final reveal, we are committed to delivering
                graceful luxury, where every space feels elegant, comfortable, and
                distinctly personal.
              </p>
            </div>
          </div>

          {/* Image column — right */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <RevealImage
              src="/images/about.jpg"
              alt="I Sketch Interiors — Our Approach"
              sizes="(max-width: 1023px) 100vw, 50vw"
              containerClassName="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
