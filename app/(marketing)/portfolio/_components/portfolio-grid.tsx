"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Container } from "@/components/shared/container"
import { ProjectCard } from "@/components/shared/project-card"
import type { ProjectSummary } from "@/data/projects"

const ImageLightbox = dynamic(
  () => import("@/components/shared/image-lightbox").then((m) => m.ImageLightbox),
  { ssr: false },
)

interface PortfolioGridProps {
  projects: ProjectSummary[]
  categories?: string[]
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; title: string; location: string; category: string } | null>(null)

  return (
    <>
      {/* Projects Grid */}
      <section>
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {projects.map((project, index) => (
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
                  aspectRatio={index % 3 === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}
                  onImageClick={(src, alt) => setLightbox({ src, alt, title: project.title, location: project.location, category: project.category })}
                />
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <p className="text-center text-muted-foreground font-serif text-lg py-20">
              No projects found.
            </p>
          )}
        </Container>
      </section>

      {/* Lightbox Modal — chunk only loads once the user opens an image */}
      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          title={lightbox.title}
          location={lightbox.location}
          category={lightbox.category}
          isOpen={true}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
