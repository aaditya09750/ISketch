import { ProjectCard } from "@/components/ui/project-card"
import { Container } from "@/components/ui/container"
import { FancyButton } from "@/components/common/fancy-button"
import { SectionHeading } from "@/components/ui/section-heading"
import { featuredProjects } from "@/data/projects"

export function ProjectsSection() {
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
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-15 lg:mt-20">
          <FancyButton href="/projects">
            View All Projects
          </FancyButton>
        </div>
      </Container>
    </section>
  )
}
