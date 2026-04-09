"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface PortfolioFilterProps {
  categories: string[]
  onFilterChange?: (category: string) => void
}

export function PortfolioFilter({ categories, onFilterChange }: PortfolioFilterProps) {
  const [active, setActive] = useState("All")

  // Desktop refs & indicator
  const desktopContainerRef = useRef<HTMLDivElement>(null)
  const desktopBtnRefs = useRef<Map<string, HTMLButtonElement>>(new Map())
  const [desktopIndicator, setDesktopIndicator] = useState({ left: 0, width: 0 })

  // Mobile refs & indicator
  const mobileContainerRef = useRef<HTMLDivElement>(null)
  const mobileBtnRefs = useRef<Map<string, HTMLButtonElement>>(new Map())
  const [mobileIndicator, setMobileIndicator] = useState({ left: 0, width: 0 })

  const [ready, setReady] = useState(false)

  const updateIndicators = useCallback(() => {
    // Desktop
    const dBtn = desktopBtnRefs.current.get(active)
    const dContainer = desktopContainerRef.current
    if (dBtn && dContainer) {
      const cr = dContainer.getBoundingClientRect()
      const br = dBtn.getBoundingClientRect()
      setDesktopIndicator({ left: br.left - cr.left, width: br.width })
    }

    // Mobile
    const mBtn = mobileBtnRefs.current.get(active)
    const mContainer = mobileContainerRef.current
    if (mBtn && mContainer) {
      const cr = mContainer.getBoundingClientRect()
      const br = mBtn.getBoundingClientRect()
      setMobileIndicator({ left: br.left - cr.left, width: br.width })
    }

    if (!ready) setReady(true)
  }, [active, ready])

  useEffect(() => {
    updateIndicators()
  }, [updateIndicators])

  useEffect(() => {
    window.addEventListener("resize", updateIndicators)
    return () => window.removeEventListener("resize", updateIndicators)
  }, [updateIndicators])

  const handleClick = (category: string) => {
    setActive(category)
    onFilterChange?.(category)
  }

  return (
    <>
      {/* ─── Mobile (< md): underline tabs ─── */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div
          ref={mobileContainerRef}
          className="relative flex items-center justify-center min-w-max mx-auto px-4 sm:px-6"
        >
          {categories.map((category) => {
            const isActive = active === category
            return (
              <button
                key={`m-${category}`}
                ref={(el) => {
                  if (el) mobileBtnRefs.current.set(category, el)
                }}
                type="button"
                onClick={() => handleClick(category)}
                className={cn(
                  "px-4 sm:px-6 py-3.5 text-[0.6rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 select-none text-center whitespace-nowrap",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground/50"
                )}
              >
                {category}
              </button>
            )
          })}

          {/* Full-width bottom rule */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-border/30" />

          {/* Sliding underline — DOM-measured */}
          <div
            className={cn(
              "absolute bottom-0 h-0.5 bg-foreground rounded-full",
              ready
                ? "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                : "opacity-0"
            )}
            style={{
              left: mobileIndicator.left,
              width: mobileIndicator.width,
            }}
          />
        </div>
      </div>

      {/* ─── Desktop (md+): centered pill ─── */}
      <div className="hidden md:flex justify-center w-full">
        <div
          ref={desktopContainerRef}
          className="relative inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-background p-1.5"
        >
          {/* Sliding pill */}
          <div
            className={cn(
              "absolute top-1.5 bottom-1.5 rounded-full bg-foreground shadow-sm",
              ready
                ? "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                : "opacity-0"
            )}
            style={{
              left: desktopIndicator.left,
              width: desktopIndicator.width,
            }}
          />

          {categories.map((category) => {
            const isActive = active === category
            return (
              <button
                key={`d-${category}`}
                ref={(el) => {
                  if (el) desktopBtnRefs.current.set(category, el)
                }}
                type="button"
                onClick={() => handleClick(category)}
                className={cn(
                  "relative z-10 whitespace-nowrap px-6 lg:px-8 py-2.5 rounded-full text-[0.6875rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 select-none",
                  isActive
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
