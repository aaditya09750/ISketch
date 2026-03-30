"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion"
import { Container } from "@/components/ui/container"
import { designProcess } from "@/data/services"

/* ------------------------------------------------------------------ */
/*  Icons (32px for desktop cards)                                     */
/* ------------------------------------------------------------------ */
const stepIcons = [
  <svg key="consult" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  <svg key="concept" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>,
  <svg key="design" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" /><path d="m8 6 2-2" /><path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" /><path d="m18 16 2-2" /><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" /></svg>,
  <svg key="implement" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>,
]

const stepIconsSmall = [
  <svg key="consult-sm" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  <svg key="concept-sm" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>,
  <svg key="design-sm" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" /><path d="m8 6 2-2" /><path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" /><path d="m18 16 2-2" /><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" /></svg>,
  <svg key="implement-sm" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>,
]

const STEP_COUNT = designProcess.length

/* ------------------------------------------------------------------ */
/*  Scroll stops — 4 steps, 6 keyframes                               */
/*  [hold1, start, step2, step3, stop, hold4]                          */
/* ------------------------------------------------------------------ */
const desktopStops = [0, 0.08, 0.35, 0.65, 0.92, 1]

/* ------------------------------------------------------------------ */
/*  Desktop step card                                                  */
/* ------------------------------------------------------------------ */
function DesktopStepCard({
  item,
  index,
  opacity,
  scale,
}: {
  item: (typeof designProcess)[number]
  index: number
  opacity: MotionValue<number>
  scale: MotionValue<number>
}) {
  return (
    <motion.div
      data-step-card
      style={{ opacity, scale }}
      className="flex shrink-0 flex-col items-center text-center"
    >
      {/* Circular card */}
      <div className="relative w-[clamp(20rem,24vw,24rem)] aspect-square rounded-full bg-card border border-accent-decorative/10 shadow-none flex flex-col items-center justify-center px-12">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full border border-accent-decorative/15 bg-secondary/60 flex items-center justify-center mb-5">
          <span className="text-accent-decorative">{stepIcons[index]}</span>
        </div>

        {/* Step label */}
        <span className="label-uppercase text-[0.62rem] tracking-[0.22em] text-accent-decorative/45 mb-2.5 block">
          Step {item.step}
        </span>

        {/* Title */}
        <h3 className="heading-section text-[1.25rem] text-foreground mb-3 leading-[1.25]">
          {item.title}
        </h3>

        {/* Decorative separator */}
        <div className="h-px w-8 bg-accent-decorative/20 mx-auto mb-3" />

        {/* Description */}
        <p className="body-text2 text-muted-foreground leading-[1.7] max-w-[13rem]">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Decorative arrow connector between cards                           */
/* ------------------------------------------------------------------ */
function StepConnector() {
  return (
    <div className="relative flex items-center w-full h-8">
      {/* Line */}
      <div className="flex-1 h-px bg-gradient-to-r from-accent-decorative/8 via-accent-decorative/20 to-accent-decorative/8" />
      {/* Arrow tip */}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="shrink-0 ml-1 text-accent-decorative/25"
      >
        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Desktop: Framer-Motion scroll-driven horizontal storytelling       */
/* ------------------------------------------------------------------ */
function DesktopProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [trackOffsets, setTrackOffsets] = useState({
    pos1: "45%",
    pos2: "15%",
    pos3: "-15%",
    pos4: "-45%",
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  })

  // Measure card centers → compute pixel offsets to center each in viewport
  const measureOffsets = useCallback(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return

    const viewportEl = viewportRef.current
    const trackEl = trackRef.current
    if (!viewportEl || !trackEl) return
    if (viewportEl.clientWidth === 0 || trackEl.scrollWidth === 0) return

    const viewportCenter = viewportEl.clientWidth / 2
    const stepCards = trackEl.querySelectorAll<HTMLElement>("[data-step-card]")
    if (stepCards.length < STEP_COUNT) return

    const offsets: string[] = []
    stepCards.forEach((card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      offsets.push(`${viewportCenter - cardCenter}px`)
    })

    const next = {
      pos1: offsets[0],
      pos2: offsets[1],
      pos3: offsets[2],
      pos4: offsets[3],
    }

    setTrackOffsets((prev) => {
      if (
        prev.pos1 === next.pos1 &&
        prev.pos2 === next.pos2 &&
        prev.pos3 === next.pos3 &&
        prev.pos4 === next.pos4
      )
        return prev
      return next
    })
  }, [])

  useEffect(() => {
    let frameId: number | null = null
    const schedule = () => {
      if (frameId !== null) cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        measureOffsets()
        frameId = null
      })
    }

    schedule()

    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null
    if (observer && viewportRef.current) observer.observe(viewportRef.current)
    if (observer && trackRef.current) observer.observe(trackRef.current)
    window.addEventListener("resize", schedule)

    return () => {
      window.removeEventListener("resize", schedule)
      observer?.disconnect()
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [measureOffsets])

  // Horizontal translation
  const trackX = useTransform(smoothProgress, desktopStops, [
    trackOffsets.pos1,
    trackOffsets.pos1,
    trackOffsets.pos2,
    trackOffsets.pos3,
    trackOffsets.pos4,
    trackOffsets.pos4,
  ])

  // Per-step opacity — sharper contrast between active and inactive
  const stepOpacities = [
    useTransform(smoothProgress, desktopStops, [1, 1, 0.3, 0.15, 0.15, 0.15]),
    useTransform(smoothProgress, desktopStops, [0.3, 0.3, 1, 0.3, 0.15, 0.15]),
    useTransform(smoothProgress, desktopStops, [0.15, 0.15, 0.3, 1, 0.3, 0.3]),
    useTransform(smoothProgress, desktopStops, [0.15, 0.15, 0.15, 0.3, 1, 1]),
  ]

  // Per-step scale — active card is notably larger
  const stepScales = [
    useTransform(smoothProgress, desktopStops, [1.12, 1.12, 0.85, 0.78, 0.78, 0.78]),
    useTransform(smoothProgress, desktopStops, [0.85, 0.85, 1.12, 0.85, 0.78, 0.78]),
    useTransform(smoothProgress, desktopStops, [0.78, 0.78, 0.85, 1.12, 0.85, 0.85]),
    useTransform(smoothProgress, desktopStops, [0.78, 0.78, 0.78, 0.85, 1.12, 1.12]),
  ]

  // Progress bar
  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"])
  const hintOpacity = useTransform(smoothProgress, [0, 0.06], [0.5, 0])

  // Per-step dot width (active = pill, inactive = small dot)
  const dotWidths = [
    useTransform(smoothProgress, desktopStops, [24, 24, 6, 6, 6, 6]),
    useTransform(smoothProgress, desktopStops, [6, 6, 24, 6, 6, 6]),
    useTransform(smoothProgress, desktopStops, [6, 6, 6, 24, 6, 6]),
    useTransform(smoothProgress, desktopStops, [6, 6, 6, 6, 24, 24]),
  ]

  const dotOpacities = [
    useTransform(smoothProgress, desktopStops, [1, 1, 0.3, 0.3, 0.3, 0.3]),
    useTransform(smoothProgress, desktopStops, [0.3, 0.3, 1, 0.3, 0.3, 0.3]),
    useTransform(smoothProgress, desktopStops, [0.3, 0.3, 0.3, 1, 0.3, 0.3]),
    useTransform(smoothProgress, desktopStops, [0.3, 0.3, 0.3, 0.3, 1, 1]),
  ]

  return (
    <div
      ref={containerRef}
      className="hidden lg:block relative h-[280vh]"
    >
      <div className="sticky top-0">
        <div className="relative mx-auto h-screen w-full overflow-hidden bg-surface-dark">
          <div className="relative flex h-full flex-col">

            {/* ── Header ── */}
            <div className="flex-shrink-0 pt-16 pb-2">
              <Container>
                <div className="text-center">
                  <motion.p
                    className="label-uppercase text-accent-decorative tracking-[0.25em] mb-5"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    How We Work
                  </motion.p>
                  <motion.h2
                    className="heading-section text-3xl lg:text-4xl text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    Our Process
                  </motion.h2>
                  <motion.div
                    className="h-px bg-accent-decorative/30 mx-auto mt-6"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 64, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </Container>
            </div>

            {/* ── Horizontal track area ── */}
            <div className="flex-1 flex flex-col justify-center min-h-0">
              <div
                ref={viewportRef}
                className="relative flex-1 overflow-hidden"
              >
                <motion.div
                  ref={trackRef}
                  style={{ x: trackX }}
                  className="absolute top-1/2 -translate-y-1/2 flex items-center w-max"
                >
                  {designProcess.map((item, i) => (
                    <React.Fragment key={item.step}>
                      <DesktopStepCard
                        item={item}
                        index={i}
                        opacity={stepOpacities[i]}
                        scale={stepScales[i]}
                      />

                      {/* Connector between cards */}
                      {i < STEP_COUNT - 1 && (
                        <div className="flex w-[clamp(2.5rem,6vw,5rem)] shrink-0 items-center px-1">
                          <StepConnector />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>

              {/* ── Progress indicator ── */}
              <div className="flex-shrink-0 pb-10">
                <Container>
                  <div className="flex items-center justify-center gap-2 pt-6">
                    {designProcess.map((item, i) => (
                      <motion.div
                        key={item.step}
                        className="rounded-full bg-accent-decorative"
                        style={{
                          width: dotWidths[i],
                          height: 6,
                          opacity: dotOpacities[i],
                        }}
                      />
                    ))}
                  </div>
                </Container>
              </div>
            </div>

            {/* ── Scroll hint ── */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
              style={{ opacity: hintOpacity }}
            >
              <svg
                className="animate-gentle-bounce text-muted-foreground/50"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Mobile / Tablet: vertical timeline (below lg) — unchanged         */
/* ------------------------------------------------------------------ */
function MobileProcess() {
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
    <section ref={sectionRef} className="lg:hidden py-15 bg-surface-dark overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-6 transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            How We Work
          </p>
          <h2
            className={`heading-section text-3xl text-foreground transition-all duration-[900ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            Our Process
          </h2>
          <div
            className={`h-px bg-accent-decorative/30 mx-auto mt-8 transition-all duration-[1.2s] ease-out ${
              isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          />
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-md mx-auto">
          <div className="absolute left-[30px] top-[40px] bottom-[40px] w-px bg-accent-decorative/15">
            <div
              className={`w-full bg-accent-decorative/30 transition-all duration-[2s] ease-out origin-top ${
                isVisible ? "h-full" : "h-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {designProcess.map((item, i) => (
              <div
                key={item.step}
                className={`flex gap-6 items-start transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${500 + i * 140}ms` }}
              >
                <div
                  className={`relative shrink-0 w-[60px] h-[60px] rounded-full border border-accent-decorative/30 flex items-center justify-center transition-all duration-[600ms] ease-out ${
                    isVisible
                      ? "bg-background shadow-[0_2px_12px_rgba(160,120,86,0.1)]"
                      : "bg-transparent"
                  }`}
                  style={{ transitionDelay: `${650 + i * 140}ms` }}
                >
                  <span className="text-accent-decorative scale-[0.85]">{stepIconsSmall[i]}</span>
                </div>

                <div className="pt-1">
                  <span className="heading-display text-[0.7rem] tracking-[0.15em] text-accent-decorative/60 mb-1.5 block">
                    Step {item.step}
                  </span>
                  <h3 className="heading-section text-lg text-foreground mb-2.5">
                    {item.title}
                  </h3>
                  <div
                    className={`h-px bg-accent-decorative/25 mb-3 transition-all duration-[800ms] ease-out ${
                      isVisible ? "w-6 opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{ transitionDelay: `${800 + i * 140}ms` }}
                  />
                  <p className="body-text text-sm text-muted-foreground leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Export                                                             */
/* ------------------------------------------------------------------ */
export function ServicesProcessSection() {
  return (
    <>
      <DesktopProcess />
      <MobileProcess />
    </>
  )
}
