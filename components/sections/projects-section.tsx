import Link from "next/link"
import { ProjectCard } from "@/components/ui/project-card"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { featuredProjects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section className="py-28 lg:py-40 bg-secondary">
      <Container>
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <SectionHeading label="Selected Work" heading="Latest Projects" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              image={project.image}
              href={project.href}
              variant="centered"
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16 lg:mt-24">
          <Link
            href="/portfolio"
            className="inline-flex items-center label-uppercase text-foreground link-underline hover:text-accent transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </Container>
    </section>
  )
}
