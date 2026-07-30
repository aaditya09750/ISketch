"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { PageHeading } from "@/components/shared/page-heading"
import { Container } from "@/components/shared/container"
import { CTASection } from "@/components/shared/cta-section"
import { ProjectCard } from "@/components/shared/project-card"
import IsketchLogo from "@/components/shared/isketch-logo"
import { portfolioProjects } from "@/data/projects"
import { projectDetails } from "@/data/projects"

/* ------------------------------------------------------------------ */
/*  Enrich portfolio data with descriptions from projectDetails        */
/* ------------------------------------------------------------------ */
const allProjects = portfolioProjects.map((p, i) => {
  const details = projectDetails[p.id]
  return {
    ...p,
    number: String(i + 1).padStart(2, "0"),
    year: details?.year ?? "2024",
    scope: details?.scope ?? "Interior Design",
    description: details?.description ?? "",
    href: `/portfolio/${p.id}`,
  }
})

/* Split: first 3 featured (large), rest as compact grid */
const featured = allProjects.slice(0, 3)
const remaining = allProjects.slice(3)

/* ------------------------------------------------------------------ */
/*  Full-bleed project section (featured)                              */
/* ------------------------------------------------------------------ */
function FeaturedProject({
  project,
  index,
}: {
  project: (typeof allProjects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  /* Parallax scroll — image moves slower than the section */
  useEffect(() => {
    const el = ref.current
    const img = imgRef.current
    if (!el || !img) return

    let rafId: number | null = null

    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        /* progress: 0 when section enters bottom, 1 when it leaves top */
        const progress = 1 - rect.bottom / (vh + rect.height)
        /* translate image by ±80px based on scroll position */
        const offset = (progress - 0.5) * 160
        img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.25)`
        rafId = null
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="group">
      <div
        ref={ref}
        className="relative h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] w-full overflow-hidden"
      >
        {/* Image with parallax */}
        <Image
          ref={imgRef}
          src={project.image}
          alt={`${project.title} — ${project.location}`}
          fill
          className="object-cover will-change-transform transition-none"
          style={{ transform: "translate3d(0, 0, 0) scale(1.25)" }}
          sizes="100vw"
          quality={85}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Inner border frame — always visible */}
        <div className="absolute inset-4 sm:inset-5 lg:inset-8 border border-white/10 transition-colors duration-700 group-hover:border-white/25 pointer-events-none" />

        {/* Logo watermark — positioned inside the border frame */}
        <div className="absolute top-7 right-7 sm:top-9 sm:right-9 lg:top-12 lg:right-12 z-10 pointer-events-none">
          <IsketchLogo className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white/50 drop-shadow-lg transition-colors duration-500 group-hover:text-white/70" />
        </div>

        {/* Scroll hint — first card only */}
        {index === 0 && (
          <div
            className="absolute top-6 sm:top-8 lg:top-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="label-uppercase select-none text-[6px] tracking-[0.3em] text-white/50">
              Scroll
            </span>
            <div className="w-px h-6 bg-white/20 animate-gentle-bounce" />
          </div>
        )}

        {/* Content — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-2xl">
              {/* Number */}
              <span
                className={`heading-display text-5xl sm:text-6xl lg:text-7xl text-white/[0.08] leading-none select-none block mb-3 sm:mb-4 transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                {project.number}
              </span>

              {/* Category + Year */}
              <div
                className={`flex items-center gap-3 mb-3 sm:mb-4 transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <span className="label-uppercase text-[0.55rem] sm:text-[0.6rem] tracking-[0.22em] text-white/60">
                  {project.category}
                </span>
                <span className="w-4 h-px bg-white/25" />
                <span className="label-uppercase text-[0.55rem] sm:text-[0.6rem] tracking-[0.22em] text-white/40">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h2
                className={`heading-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight mb-2 sm:mb-3 transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {project.title}
              </h2>

              {/* Location */}
              <p
                className={`label-uppercase text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-white/45 mb-5 sm:mb-6 transition-all duration-[900ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {project.location}
              </p>

              {/* View button */}
              <Link
                href={project.href}
                className={`group/btn inline-flex items-center gap-2.5 relative z-10 label-uppercase text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] px-7 sm:px-9 py-3.5 sm:py-4 border border-white/25 text-white/70 hover:bg-white hover:text-foreground hover:border-white transition-all duration-150 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                View Project
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-500 group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export function ProjectsContent() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          obs.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    if (gridRef.current) obs.observe(gridRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <PageHeading
        label="Our Completed"
        title="Projects"
        description="A curated selection of our finest projects, showcasing our commitment to creating exceptional interiors that combine timeless elegance with contemporary sophistication."
      />

      {/* ── Featured projects — full-bleed cinematic sections ── */}
      <section>
        {featured.map((project, i) => (
          <FeaturedProject key={project.id} project={project} index={i} />
        ))}
      </section>

      {/* ── Divider ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="text-center">
            <div className="h-px w-12 bg-accent-decorative/25 mx-auto mb-8" />
            <p className="label-uppercase text-accent-decorative/50 tracking-[0.25em] text-[0.6rem]">
              More Projects
            </p>
          </div>
        </Container>
      </section>

      {/* ── Remaining projects — compact grid ── */}
      <section className="pb-10">
        <Container>
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10 lg:gap-12"
          >
            {remaining.map((project, i) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                location={project.location}
                category={project.category}
                image={project.image}
                href={project.href}
                variant="centered"
                index={i}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Ready to Transform Your Space?"
        description="We would love to discuss your vision and explore how we can bring it to life with our commitment to timeless, detail-driven design."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  )
}
