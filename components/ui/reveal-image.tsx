"use client"

import Image from "next/image"
import { useImageReady } from "@/hooks/use-image-ready"

interface RevealImageProps {
  src: string
  alt: string
  sizes: string
  className?: string
  containerClassName?: string
  quality?: number
  preload?: boolean
}

export function RevealImage({
  src,
  alt,
  sizes,
  className = "object-cover",
  containerClassName = "relative aspect-[4/5] overflow-hidden",
  quality,
  preload,
}: RevealImageProps) {
  const { imageRef, containerRef, shouldReveal } = useImageReady(src)

  return (
    <div
      ref={containerRef}
      className={`project-card-reveal bg-surface-dark ${containerClassName} ${shouldReveal ? "is-revealed" : ""}`}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        quality={quality}
        preload={preload}
      />
    </div>
  )
}
