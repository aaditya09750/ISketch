"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import IsketchLogo from "@/components/common/isketch-logo"

interface ServiceImageCarouselProps {
  images: string[]
  alt: string
}

export function ServiceImageCarousel({ images, alt }: ServiceImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-slide — pause on hover
  useEffect(() => {
    if (!emblaApi || isHovered) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi, isHovered])

  return (
    <div
      className="relative group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Aspect ratio container */}
      <div className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden bg-surface-warm">

        {/* Embla viewport — absolute fill so it inherits concrete pixel dimensions */}
        <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
          <div className="flex h-full touch-pan-y">
            {images.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex-[0_0_100%] min-w-0 h-full"
              >
                {/* Native img — avoids Next.js Image fill sizing issues inside flex */}
                <img
                  src={src}
                  alt={`${alt} — ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Logo watermark */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 lg:top-6 lg:right-6 z-10 pointer-events-none">
          <IsketchLogo className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white/60 drop-shadow-md" />
        </div>

        {/* Navigation arrows — visible on hover */}
        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-4 sm:left-5 lg:left-6 top-1/2 -translate-y-1/2 z-10
            text-white/60 hover:text-white
            opacity-0 group-hover/carousel:opacity-100
            transition-all duration-400 ease-out
            cursor-pointer drop-shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-12 lg:h-12" strokeWidth={1} />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-4 sm:right-5 lg:right-6 top-1/2 -translate-y-1/2 z-10
            text-white/60 hover:text-white
            opacity-0 group-hover/carousel:opacity-100
            transition-all duration-400 ease-out
            cursor-pointer drop-shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-12 lg:h-12" strokeWidth={1} />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`transition-all duration-400 ease-out cursor-pointer ${
                i === selectedIndex
                  ? "w-5 sm:w-6 h-px bg-white/90"
                  : "w-2 sm:w-3 h-px bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
