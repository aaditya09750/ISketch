"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Container } from "@/components/shared/container"
import IsketchLogo from "@/components/shared/isketch-logo"
import { useImageReady } from "@/hooks/use-image-ready"
import type { LightboxItem } from "@/components/shared/image-lightbox"

const ImageLightbox = dynamic(
  () => import("@/components/shared/image-lightbox").then((m) => m.ImageLightbox),
  { ssr: false },
)

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
      className={`project-card-reveal bg-surface-dark group/img cursor-pointer relative overflow-hidden ${
        shouldReveal ? "is-revealed" : ""
      } ${aspectClass && aspectClass !== "w-full h-auto" ? aspectClass : ""}`}
    >
      {aspectClass === "w-full h-auto" ? (
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes={sizes}
          className="w-full h-auto object-cover transition-transform duration-[800ms] ease-out lg:group-hover/img:scale-105"
        />
      ) : (
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[800ms] ease-out lg:group-hover/img:scale-105"
        />
      )}

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
/*  Project Gallery displaying ALL room images in project folder       */
/* ------------------------------------------------------------------ */
export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const galleryImages = images.slice(1)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const lightboxGallery: LightboxItem[] = galleryImages.map((src, i) => ({
    src,
    alt: `${title} — Photo ${i + 1}`,
    title,
    location: "",
  }))

  return (
    <>
      <section className="pb-20 lg:pb-32">
        <Container>
          {/* Section label */}
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <p className="label-uppercase text-accent tracking-[0.25em] mb-4">Project Gallery</p>
            <div className="h-px w-10 bg-accent-decorative/30" />
          </div>

          {/* All Gallery Images in 2-Column Responsive Masonry */}
          <div className="columns-1 md:columns-2 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
            {galleryImages.map((src, index) => (
              <div key={src} className="break-inside-avoid">
                <GalleryImage
                  src={src}
                  alt={`${title} - Photo ${index + 1}`}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  aspectClass="w-full h-auto"
                  onClick={() => setLightboxIndex(index)}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox — opens full resolution preview */}
      {lightboxIndex !== null && (
        <ImageLightbox
          gallery={lightboxGallery}
          currentIndex={lightboxIndex}
          onNavigate={setLightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
