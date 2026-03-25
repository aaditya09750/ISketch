"use client"

import { useEffect, useRef, useState } from "react"
import { RevealImage } from "@/components/ui/reveal-image"

export function FounderSection() {
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
    <section ref={sectionRef} className="py-10 lg:py-30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Image column — 5 of 12 */}
          <div className="lg:col-span-5">
            <RevealImage
              src="/images/team.jpg"
              alt="I Sketch Interiors Founder"
              sizes="(max-width: 1023px) 100vw, 42vw"
              containerClassName="relative aspect-[3/4] overflow-hidden"
            />
          </div>

          {/* Content column — 7 of 12 */}
          <div className="lg:col-span-7 lg:pl-4">
            {/* Label */}
            <p
              className={`label-uppercase text-accent tracking-[0.25em] mb-5 lg:mb-6 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              The Founder
            </p>

            {/* Heading */}
            <h2
              className={`heading-section text-[1.625rem] sm:text-3xl md:text-[2.125rem] lg:text-[2.5rem] text-foreground leading-[1.25] mb-8 lg:mb-10 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              A Passion for
              <br className="hidden md:block" />
              {" "}Design Excellence
            </h2>

            {/* Separator */}
            <div
              className={`h-px bg-accent-decorative/30 max-w-[60px] mb-8 lg:mb-10 transition-all duration-[1s] ease-out ${
                isVisible ? "w-[60px] opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "450ms" }}
            />

            {/* Body paragraphs */}
            <div className="space-y-5 max-w-lg">
              <p
                className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "550ms" }}
              >
                With over fifteen years of experience in luxury residential design,
                our founder established I Sketch Interiors with a singular vision:
                to create homes that are as functional as they are beautiful.
              </p>
              <p
                className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                Having trained at some of the most prestigious design houses in London
                and abroad, our approach combines rigorous attention to detail with
                an intuitive understanding of how people live. We believe that the
                best interiors are those that enhance daily life while expressing
                the unique character of their inhabitants.
              </p>
              <p
                className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "850ms" }}
              >
                Today, I Sketch Interiors works on projects throughout the United Kingdom
                and internationally, bringing the same level of dedication and artistry
                to each commission, regardless of scale.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
