"use client"

import { useEffect, useRef, useState } from "react"

export function PhilosophySection() {
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
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-start">

          {/* Left column — label + decorative */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <p
              className={`label-uppercase text-accent tracking-[0.25em] transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Our Philosophy
            </p>

            {/* Decorative line */}
            <div
              className={`mt-6 h-px bg-accent-decorative/40 mx-auto lg:mx-0 transition-all duration-[1s] ease-out ${
                isVisible ? "w-10 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            />
          </div>

          {/* Right column — heading + body */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <h2
              className={`heading-section text-[1.625rem] sm:text-3xl md:text-[2.125rem] lg:text-[2.5rem] text-foreground leading-[1.3] lg:leading-[1.25] transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Creating timeless interiors that reflect
              <br className="hidden lg:block" />
              {" "}the unique personality and lifestyle
              <br className="hidden lg:block" />
              {" "}of each client
            </h2>

            {/* Separator between heading & body */}
            <div
              className={`my-5 lg:my-8 h-px bg-border/60 max-w-xs mx-auto lg:mx-0 transition-all duration-[1s] ease-out ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              } origin-left`}
              style={{ transitionDelay: "550ms" }}
            />

            <p
              className={`body-text text-muted-foreground leading-[1.9] max-w-lg mx-auto lg:mx-0 transition-all duration-[900ms] ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              At I Sketch Interiors, we believe that exceptional design begins with
              understanding. Our approach combines classical elegance with contemporary
              sophistication, creating spaces that are both beautiful and deeply personal.
              Every project is a collaboration, where your vision meets our expertise to
              craft interiors that transcend trends and stand the test of time.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
