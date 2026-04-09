"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Container } from "@/components/shared/container"
import { cn } from "@/lib/utils"
import type { LegalSection } from "@/data/legal"

/* ------------------------------------------------------------------ */
/*  Collapsible section for mobile                                     */
/* ------------------------------------------------------------------ */
function MobileSection({
  section,
  index,
  isVisible,
}: {
  section: LegalSection
  index: number
  isVisible: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "border-b border-border/20 transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
      style={{ transitionDelay: `${150 + index * 80}ms` }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 sm:py-6 text-left cursor-pointer group"
      >
        <span className="heading-section text-base sm:text-lg text-foreground pr-4 group-hover:text-accent-decorative transition-colors duration-300">
          {section.title}
        </span>
        <span
          className={cn(
            "shrink-0 w-8 h-8 rounded-full border border-border/30 flex items-center justify-center transition-all duration-400 ease-out",
            isOpen
              ? "bg-accent-decorative/10 border-accent-decorative/30 rotate-180"
              : "group-hover:border-accent-decorative/40"
          )}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-accent-decorative/60"
          >
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 sm:pb-8 space-y-4">
            {section.content.map((paragraph, i) => (
              <p
                key={i}
                className="body-text text-sm text-muted-foreground leading-[1.85]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Desktop section with scroll-triggered animation                    */
/* ------------------------------------------------------------------ */
function DesktopSection({
  section,
  index,
}: {
  section: LegalSection
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={section.id}
      className="scroll-mt-32"
    >
      {/* Section number + title */}
      <div
        className={cn(
          "flex items-center gap-4 mb-6 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "100ms" }}
      >
        <span className="heading-display text-3xl lg:text-4xl text-accent-decorative/15 leading-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="heading-section text-xl lg:text-2xl text-foreground">
          {section.title}
        </h2>
      </div>

      {/* Decorative line */}
      <div
        className={cn(
          "h-px bg-accent-decorative/25 mb-6 transition-all duration-1000 ease-out",
          isVisible ? "w-10 opacity-100" : "w-0 opacity-0"
        )}
        style={{ transitionDelay: "250ms" }}
      />

      {/* Content paragraphs */}
      <div className="space-y-4">
        {section.content.map((paragraph, i) => (
          <p
            key={i}
            className={cn(
              "body-text text-[0.9375rem] text-muted-foreground leading-[1.85] transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: `${350 + i * 100}ms` }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Sticky Table of Contents (desktop sidebar)                         */
/* ------------------------------------------------------------------ */
function TableOfContents({
  sections,
  activeId,
}: {
  sections: LegalSection[]
  activeId: string
}) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="space-y-1">
      <p className="label-uppercase text-[0.6rem] tracking-[0.22em] text-accent-decorative/50 mb-5">
        Contents
      </p>
      {sections.map((section, i) => {
        const isActive = activeId === section.id
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => handleClick(section.id)}
            className={cn(
              "flex items-center gap-3 w-full text-left py-2 transition-all duration-300 cursor-pointer group"
            )}
          >
            <span
              className={cn(
                "h-px transition-all duration-400 ease-out",
                isActive
                  ? "w-5 bg-accent-decorative"
                  : "w-2.5 bg-accent-decorative/20 group-hover:w-4 group-hover:bg-accent-decorative/40"
              )}
            />
            <span
              className={cn(
                "font-sans text-[0.8rem] tracking-wide transition-colors duration-300",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground/50 group-hover:text-muted-foreground/80"
              )}
            >
              {section.title}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Legal Page Layout                                             */
/* ------------------------------------------------------------------ */
export function LegalPageLayout({
  label,
  title,
  effectiveDate,
  sections,
}: {
  label: string
  title: string
  effectiveDate: string
  sections: LegalSection[]
}) {
  const heroRef = useRef<HTMLElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const [mobileVisible, setMobileVisible] = useState(false)
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "")

  /* ── Hero animation ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  /* ── Mobile sections animation ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMobileVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (mobileRef.current) observer.observe(mobileRef.current)
    return () => observer.disconnect()
  }, [])

  /* ── Active section tracking for TOC (desktop) ── */
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

      if (visible.length > 0) {
        setActiveId(visible[0].target.id)
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    })

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <>
      {/* ── Page Hero ── */}
      <section
        ref={heroRef}
        className="pt-28 sm:pt-32 md:pt-36 lg:pt-44 pb-12 sm:pb-14 md:pb-16 lg:pb-20"
      >
        <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 text-center">
          <p
            className={cn(
              "label-uppercase text-accent mb-4 sm:mb-5 md:mb-6 transition-all duration-600 ease-out",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: heroVisible ? "100ms" : "0ms" }}
          >
            {label}
          </p>

          <h1
            className={cn(
              "heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-[0.08em] uppercase transition-all duration-700 ease-out",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
            style={{ transitionDelay: heroVisible ? "250ms" : "0ms" }}
          >
            {title}
          </h1>

          <div
            className={cn(
              "mx-auto h-px w-10 sm:w-12 md:w-14 bg-accent-decorative/40 mt-6 sm:mt-8 md:mt-10 transition-all duration-1000 ease-out",
              heroVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            )}
            style={{ transitionDelay: heroVisible ? "450ms" : "0ms" }}
          />

          <p
            className={cn(
              "font-sans text-xs sm:text-sm text-muted-foreground/50 tracking-wide mt-5 sm:mt-6 transition-all duration-700 ease-out",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: heroVisible ? "600ms" : "0ms" }}
          >
            Effective: {effectiveDate}
          </p>
        </div>
      </section>

      {/* ── Desktop: TOC sidebar + content ── */}
      <section className="hidden lg:block pb-24 lg:pb-36">
        <Container>
          <div className="grid grid-cols-12 gap-12 xl:gap-16">
            {/* Sticky sidebar */}
            <aside className="col-span-3 xl:col-span-3">
              <div className="sticky top-32">
                <TableOfContents sections={sections} activeId={activeId} />
              </div>
            </aside>

            {/* Main content */}
            <div className="col-span-9 xl:col-span-8 xl:col-start-5 space-y-16">
              {sections.map((section, i) => (
                <DesktopSection key={section.id} section={section} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Mobile / Tablet: collapsible accordion ── */}
      <section className="lg:hidden pb-16 sm:pb-20" ref={mobileRef}>
        <Container>
          <div className="max-w-2xl mx-auto">
            {sections.map((section, i) => (
              <MobileSection
                key={section.id}
                section={section}
                index={i}
                isVisible={mobileVisible}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
