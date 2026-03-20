"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { useEffect, useRef, useState } from "react"
import { useImageReady } from "@/hooks/use-image-ready"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { imageRef, containerRef, shouldReveal: shouldRevealImage } = useImageReady("/images/team2.webp")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-28 lg:py-40 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Image with wipe reveal */}
          <div
            ref={containerRef}
            className={`project-card-reveal relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/4] overflow-hidden ${
              shouldRevealImage ? "is-revealed" : ""
            }`}
            style={{ animationDelay: shouldRevealImage ? "200ms" : "0ms" }}
          >
            <Image
              ref={imageRef}
              src="/images/team2.webp"
              alt="Interior designer in studio"
              fill
              className="object-cover image-hover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8 xl:pl-12">
            <p
              className={`label-uppercase text-accent tracking-[0.2em] mb-5 sm:mb-6 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              The Studio
            </p>

            <h2
              className={`heading-section text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-8 sm:mb-10 leading-[1.15] transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "550ms" : "0ms" }}
            >
              About the team
              <br />
              behind I Sketch
            </h2>

            <div
              className={`space-y-5 sm:space-y-6 body-text text-muted-foreground transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
            >
              <p>
                I Sketch Interiors is a London and Surrey-based design studio
                specialising in luxury residential interiors throughout the UK and
                overseas for both private clients and developers.
              </p>
              <p>
                Led by our experienced team of talented Interior & Architectural
                Designers, we provide a personalised design service to create detail-driven,
                luxury interiors that perfectly suit their context and the client&apos;s needs,
                standing the test of time.
              </p>
            </div>

            <div
              className={`mt-10 sm:mt-12 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "850ms" : "0ms" }}
            >
              <Link
                href="/#"
                className="inline-block label-uppercase px-8 md:px-10 py-3.5 md:py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:shadow-earthy-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
