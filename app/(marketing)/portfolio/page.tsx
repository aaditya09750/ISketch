import { PageHeading } from "@/components/shared/page-heading"
import { CTASection } from "@/components/shared/cta-section"
import { PortfolioGrid } from "./_components/portfolio-grid"
import { portfolioProjects } from "@/data/projects"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema } from "@/lib/schema"

export const metadata = {
  title: "Luxury Interior Design Portfolio — Residential Projects in Mumbai, Thane & Beyond",
  description:
    "Explore the I Sketch Interiors portfolio — curated case studies of luxury residential interior design, bespoke joinery, and international projects from Mumbai townhouses to London residences.",
  alternates: { canonical: "/portfolio" },
  openGraph: { url: "/portfolio" },
}

export default function PortfolioPage() {
  return (
    <>
      <StructuredData data={getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Portfolio", url: "/portfolio" }])} />
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
