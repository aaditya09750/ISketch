"use client"

import { useEffect, useRef, useState } from "react"
import { RevealImage } from "@/components/ui/reveal-image"

export function AboutStorySection() {
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
              Estd 2008
            </p>

            {/* Heading */}
            <h2
              className={`heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-7 lg:mb-9 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              Our Story
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
                Established in 2008 by visionary founder, I Sketch Interiors has evolved
                into a leading name in luxury interior design. Based in London &amp; Surrey,
                the studio has earned a reputation for crafting bespoke residences and
                commercial spaces with impeccable attention to detail.
              </p>
              <p
                className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                Over the last 16 years, the firm has earned a reputation for
                delivering refined, timeless interiors that resonate with the lifestyles
                of discerning clients worldwide. Our philosophy is simple: &ldquo;the best
                interiors are those that feel natural, that immediately understand
                their inhabitants.&rdquo;
              </p>
            </div>
          </div>

          {/* Image column — right */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <RevealImage
              src="/images/team.jpg"
              alt="I Sketch Interiors — Our Story"
              sizes="(max-width: 1023px) 100vw, 50vw"
              containerClassName="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
