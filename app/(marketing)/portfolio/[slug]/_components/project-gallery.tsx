"use client"

import { useState } from "react"
import Image from "next/image"
import { Container } from "@/components/shared/container"
import { ImageLightbox } from "@/components/shared/image-lightbox"
import IsketchLogo from "@/components/shared/isketch-logo"
import { useImageReady } from "@/hooks/use-image-ready"
import type { LightboxItem } from "@/components/shared/image-lightbox"

/* ------------------------------------------------------------------ */
/*  Single gallery image with reveal, watermark, and hover overlay     */
/* ------------------------------------------------------------------ */
function GalleryImage({
  src,
  alt,
  sizes,
  aspectClass,
  onClick,
}: {
  src: string
  alt: string
  sizes: string
  aspectClass: string
  onClick: () => void
}) {
  const { imageRef, containerRef, shouldReveal } = useImageReady(src)

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`project-card-reveal bg-surface-dark group/img cursor-pointer ${aspectClass} relative overflow-hidden ${
        shouldReveal ? "is-revealed" : ""
      }`}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[800ms] ease-out lg:group-hover/img:scale-105"
      />

      {/* Logo watermark */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-10 pointer-events-none">
        <IsketchLogo className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white/70 drop-shadow-md" />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover/img:bg-foreground/15 transition-colors duration-500" />

      {/* Inner border frame */}
      <div className="absolute inset-4 sm:inset-5 lg:inset-6 border border-white/0 group-hover/img:border-white/40 transition-all duration-500" />

      {/* View label */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
        <span className="label-uppercase text-[10px] sm:text-[11px] tracking-[0.25em] text-white/90">
          View Image
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Project Gallery with staggered layout + lightbox                   */
/* ------------------------------------------------------------------ */
export function ProjectGallery({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const galleryImages = images.slice(1)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const lightboxGallery: LightboxItem[] = galleryImages.map((src, i) => ({
    src,
    alt: `${title} — ${i + 1}`,
    title,
    location: "",
  }))

  return (
    <>
      <section className="pb-20 lg:pb-32">
        <Container>
          {/* Section label */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <p className="label-uppercase text-accent tracking-[0.25em] mb-4">
              Gallery
            </p>
            <div className="h-px w-10 bg-accent-decorative/30" />
          </div>

          {/* Staggered offset layout */}
          <div className="grid md:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start">
            {/* Left — larger image */}
            {galleryImages[0] && (
              <div className="md:col-span-7">
                <GalleryImage
                  src={galleryImages[0]}
                  alt={`${title} - Image 2`}
                  sizes="(max-width: 767px) 100vw, 58vw"
                  aspectClass="aspect-[3/4]"
                  onClick={() => setLightboxIndex(0)}
                />
              </div>
            )}

            {/* Right — smaller image offset downward */}
            {galleryImages[1] && (
              <div className="md:col-span-5 md:mt-24 lg:mt-32">
                <GalleryImage
                  src={galleryImages[1]}
                  alt={`${title} - Image 3`}
                  sizes="(max-width: 767px) 100vw, 42vw"
                  aspectClass="aspect-[4/5]"
                  onClick={() => setLightboxIndex(1)}
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        gallery={lightboxGallery}
        currentIndex={lightboxIndex ?? 0}
        onNavigate={setLightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  )
}
