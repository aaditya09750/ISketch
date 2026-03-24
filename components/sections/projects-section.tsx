"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/ui/project-card"
import { Container } from "@/components/ui/container"
import { FancyButton } from "@/components/common/fancy-button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ImageLightbox } from "@/components/ui/image-lightbox"
import { featuredProjects } from "@/data/projects"

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; title: string; location: string; href: string } | null>(null)

  return (
    <section className="cv-auto py-15 lg:py-25 bg-background">
      <Container>
        {/* Section Header */}
        <div className="mb-10 lg:mb-15">
          <SectionHeading label="Selected Work" heading="Latest Projects" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              image={project.image}
              href={project.href}
              variant="centered"
              index={i}
              onImageClick={(src, alt) => setLightbox({ src, alt, title: project.title, location: project.location, href: project.href })}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-15 lg:mt-20">
          <FancyButton href="/portfolio">
            View All Projects
          </FancyButton>
        </div>
      </Container>

      {/* Lightbox Modal */}
      <ImageLightbox
        src={lightbox?.src ?? ""}
        alt={lightbox?.alt ?? ""}
        title={lightbox?.title}
        location={lightbox?.location}
        href={lightbox?.href}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />
    </section>
  )
}
