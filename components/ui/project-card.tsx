"use client"

import Image from "next/image"
import Link from "next/link"
import { useImageReady } from "@/hooks/use-image-ready"

interface ProjectCardProps {
  title: string
  location: string
  image: string
  href: string
  category?: string
  aspectRatio?: string
  variant?: "centered" | "default"
  index?: number
}

export function ProjectCard({
  title,
  location,
  image,
  category,
  aspectRatio = "aspect-[4/5]",
  variant = "default",
  index = 0,
}: ProjectCardProps) {
  const { imageRef, containerRef, shouldReveal } = useImageReady(image)
  const delay = `${300 + index * 250}ms`

  return (
    <Link href="/#" className="group block">
      {/* Image with wipe reveal */}
      <div
        ref={containerRef}
        className={`project-card-reveal relative overflow-hidden transition-shadow duration-700 group-hover:shadow-earthy-lg ${
          shouldReveal ? "is-revealed" : ""
        } ${variant === "centered" ? "mb-5 sm:mb-6" : ""} ${aspectRatio}`}
        style={{ animationDelay: shouldReveal ? delay : "0ms" }}
      >
        <Image
          ref={imageRef}
          src={image}
          alt={`${title} - ${location}`}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out lg:group-hover:scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-500" />
        {/* Inner border frame */}
        <div className="absolute inset-4 sm:inset-5 lg:inset-6 border border-white/0 group-hover:border-white/40 transition-all duration-500" />
        {/* View Project label */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="label-uppercase text-[10px] sm:text-[11px] tracking-[0.25em] text-white/90">
            View Project
          </span>
        </div>
      </div>

      {/* Text with fade-in */}
      <div
        className={`transition-opacity duration-700 ease-out ${
          shouldReveal ? "opacity-100" : "opacity-0"
        } ${variant === "centered" ? "text-center" : "mt-6"}`}
        style={{ transitionDelay: shouldReveal ? delay : "0ms" }}
      >
        {variant === "centered" ? (
          <>
            <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-foreground mb-1.5 sm:mb-2 group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="label-uppercase text-[9px] sm:text-[10px] tracking-[0.2em] text-muted-foreground/70">
              {location}
            </p>
          </>
        ) : (
          <>
            <p className="label-uppercase text-[9px] sm:text-[10px] tracking-[0.2em] text-accent mb-3">
              {location}
              {category ? ` | ${category}` : ""}
            </p>
            <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
          </>
        )}
      </div>
    </Link>
  )
}
