"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Container } from "@/components/shared/container"
import { ProjectCard } from "@/components/shared/project-card"
import type { ProjectSummary } from "@/data/projects"
import type { LightboxItem } from "@/components/shared/image-lightbox"

const ImageLightbox = dynamic(
  () => import("@/components/shared/image-lightbox").then((m) => m.ImageLightbox),
  { ssr: false },
)

interface PortfolioGridProps {
  projects: ProjectSummary[]
  categories?: string[]
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Build complete gallery list for prev/next lightbox navigation
  const lightboxGallery: LightboxItem[] = projects.map((project) => ({
    src: project.image,
    alt: `${project.title} — ${project.location}`,
    title: project.title,
    location: project.location,
    category: project.category,
    href: `/portfolio/${project.id}`,
  }))

  // Pair each project with its original index for accurate navigation mapping
  const indexedProjects = projects.map((project, index) => ({ project, index }))

  // Interleave items between Left and Right columns to guarantee perfectly balanced bottom baseline
  const leftColumn = indexedProjects.filter((_, i) => i % 2 === 0)
  const rightColumn = indexedProjects.filter((_, i) => i % 2 === 1)

  return (
    <>
      {/* Projects Grid — Balanced 2-Column Layout */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left Column */}
            <div className="space-y-10 lg:space-y-14">
              {leftColumn.map(({ project, index }) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <ProjectCard
                    title={project.title}
                    location={project.location}
                    category={project.category}
                    image={project.image}
                    href={`/portfolio/${project.id}`}
                    aspectRatio={project.aspectRatio || "aspect-[4/5]"}
                    onImageClick={() => setLightboxIndex(index)}
                  />
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-10 lg:space-y-14">
              {rightColumn.map(({ project, index }) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 80}ms` }}
                >
                  <ProjectCard
                    title={project.title}
                    location={project.location}
                    category={project.category}
                    image={project.image}
                    href={`/portfolio/${project.id}`}
                    aspectRatio={project.aspectRatio || "aspect-[4/5]"}
                    onImageClick={() => setLightboxIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {projects.length === 0 && (
            <p className="text-center text-muted-foreground font-serif text-lg py-20">
              No projects found.
            </p>
          )}
        </Container>
      </section>

      {/* Lightbox Modal — enables prev/next arrows, counter, keyboard & swipe gestures */}
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
