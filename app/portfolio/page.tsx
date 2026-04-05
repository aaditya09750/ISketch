import { PageHeading } from "@/components/ui/page-heading"
import { CTASection } from "@/components/ui/cta-section"
import { PortfolioGrid } from "@/components/sections/portfolio-grid"
import { portfolioProjects } from "@/data/projects"

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

      {/* Breathing space between heading and grid */}
      <div className="pb-6 sm:pb-8 lg:pb-10" />

      <PortfolioGrid projects={portfolioProjects} />

      <CTASection
        heading="Start Your Project"
        description="Ready to transform your space? We would love to discuss your vision and explore how we can bring it to life."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  )
}
