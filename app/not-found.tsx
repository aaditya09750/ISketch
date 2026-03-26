"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import IsketchLogo from "@/components/common/isketch-logo"
import { useLayout } from "@/components/providers/layout-context"

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { setHideChrome } = useLayout()

  useEffect(() => {
    setHideChrome(true)
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => {
      setHideChrome(false)
      clearTimeout(timer)
    }
  }, [setHideChrome])

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <section className="relative h-screen flex flex-col items-center justify-between overflow-hidden py-8 sm:py-10 lg:py-12">

      {/* ─── Top: Logo ─── */}
      <div
        className={`relative z-20 flex-shrink-0 transition-all duration-[1.2s] ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
        style={{ transitionDelay: "50ms" }}
      >
        <Link href="/" aria-label="Return to home">
          <IsketchLogo className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-foreground/70 hover:text-foreground transition-colors duration-500" />
        </Link>
      </div>

      {/* ─── Center: Main content ─── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-8 w-full max-w-md sm:max-w-lg lg:max-w-xl">

        {/* 404 watermark — positioned absolutely behind content */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] pointer-events-none select-none transition-all duration-[1.8s] ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "80ms" }}
          aria-hidden="true"
        >
          <span className="heading-display text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] leading-none text-foreground/[0.035]">
            404
          </span>
        </div>

        {/* Foreground content */}
        <div className="relative">
          {/* Label */}
          <p
            className={`label-uppercase text-accent-decorative tracking-[0.3em] text-[0.6rem] sm:text-[0.65rem] md:text-xs mb-5 sm:mb-6 lg:mb-7 transition-all duration-[1s] ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Page Not Found
          </p>

          {/* Heading */}
          <h1
            className={`heading-display text-2xl sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] text-foreground leading-[1.2] mb-4 sm:mb-5 lg:mb-6 transition-all duration-[1s] ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            This space doesn&rsquo;t exist yet
          </h1>

          {/* Separator */}
          <div
            className={`h-px bg-accent-decorative/25 mx-auto mb-4 sm:mb-5 lg:mb-6 transition-all duration-[1.4s] ease-out ${
              isLoaded ? "w-8 sm:w-10 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "550ms" }}
          />

          {/* Description */}
          <p
            className={`body-text text-muted-foreground/60 leading-[1.8] text-[0.8125rem] sm:text-sm md:text-[0.9375rem] mb-8 sm:mb-9 lg:mb-10 max-w-[17rem] sm:max-w-xs md:max-w-sm mx-auto transition-all duration-[1s] ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            The page you are looking for may have been moved or no
            longer exists. Let us guide you back to a beautifully
            designed space.
          </p>

          {/* CTA */}
          <div
            className={`transition-all duration-[1s] ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link
              href="/"
              className="group relative inline-flex items-center gap-3 sm:gap-3.5"
            >
              <span className="h-px w-5 sm:w-7 bg-accent-decorative/30 transition-all duration-500 ease-out group-hover:w-8 sm:group-hover:w-10 group-hover:bg-accent-decorative/70" />
              <span className="label-uppercase tracking-[0.25em] text-[0.6rem] sm:text-[0.65rem] text-foreground/50 transition-colors duration-500 group-hover:text-foreground">
                Return Home
              </span>
              <span className="h-px w-5 sm:w-7 bg-accent-decorative/30 transition-all duration-500 ease-out group-hover:w-8 sm:group-hover:w-10 group-hover:bg-accent-decorative/70" />
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Bottom: Navigation ─── */}
      <div
        className={`relative z-10 flex-shrink-0 transition-all duration-[1s] ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        <nav className="flex items-center justify-center gap-5 sm:gap-7 md:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative label-uppercase text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] tracking-[0.18em] text-muted-foreground/35 hover:text-accent-decorative transition-colors duration-500"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-decorative/40 transition-all duration-400 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>

    </section>
  )
}
