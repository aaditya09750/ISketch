"use client"

import Link from "next/link"
import { ProjectCard } from "@/components/ui/project-card"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { featuredProjects } from "@/data/projects"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-15 lg:py-25 bg-secondary">
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
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-15 lg:mt-20">
          <Link
            href="/#"
            className="inline-block label-uppercase px-8 md:px-10 py-3.5 md:py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:shadow-earthy-sm"
          >
            View All Projects
          </Link>
        </div>
      </Container>
    </section>
  )
}
