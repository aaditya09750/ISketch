import { PageHeading } from "@/components/ui/page-heading"
import { CTASection } from "@/components/ui/cta-section"
import { ProjectCard } from "@/components/ui/project-card"
import { Container } from "@/components/ui/container"
import { portfolioProjects, portfolioCategories } from "@/data/projects"

export const metadata = {
  title: "Portfolio | I Sketch Interiors",
  description: "Explore our portfolio of luxury interior design projects across London, Surrey, and internationally.",
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeading
        label="Our Work"
        title="Portfolio"
        description="A curated selection of our finest projects, showcasing our commitment to creating exceptional interiors that combine timeless elegance with contemporary sophistication."
      />

      {/* Filter Categories */}
      <section className="pb-12 lg:pb-16">
        <Container>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="label-uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 pb-2 border-b border-transparent hover:border-accent"
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-36">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {portfolioProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                location={project.location}
                category={project.category}
                image={project.image}
                href={`/portfolio/${project.id}`}
                aspectRatio={index % 3 === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Start Your Project"
        description="Ready to transform your space? We would love to discuss your vision and explore how we can bring it to life."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="secondary"
      />
    </>
  )
}
