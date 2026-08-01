"use client"

import { useEffect, useRef, useState } from "react"
import { RevealImage } from "@/components/shared/reveal-image"

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
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-15 lg:py-25">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Image column — left */}
          <div className="lg:col-span-6">
            <RevealImage
              src="/images/about-studio.png"
              alt="I Sketch Interiors — Our Story"
              sizes="(max-width: 1023px) 100vw, 50vw"
              containerClassName="relative aspect-[4/5] overflow-hidden"
            />
          </div>

          {/* Content column — right */}
          <div className="lg:col-span-6">
            {/* Label */}
            <p
              className={`label-uppercase text-sm! text-accent-decorative tracking-[0.25em] mb-2 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Estd 2000
            </p>

            {/* Heading */}
            <h2
              className={`heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-7 transition-all duration-[900ms] ease-out ${
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
                Established in 2000, I Sketch Interiors has evolved into a leading name in luxury
                interior design. Based in Thane, Mumbai and Pune the Company has earned a reputation
                for crafting bespoke residences with impeccable attention to detail. Over the last
                25 years, the firm has earned a reputation for delivering refined, timeless
                interiors that resonate with the lifestyles of discerning clients.
              </p>
              <p
                className={`body-text text-muted-foreground leading-[1.85] transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                Passion for design starts from collaboration with a team whose expertise and
                experience align seamlessly with your vision. Our team is dedicated to delivering
                interior design services that inspire and elevate, ensuring that every project is an
                extraordinary experience. Comprising a handpicked group of interior and furniture
                designers, along with expert textile and colour consultants, we offer a full-service
                approach that allows us to deliver cohesive, high-end interiors. Our network of
                trusted workers and suppliers ensures every product is executed to the highest
                standard with meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
