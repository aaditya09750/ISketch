import type { Metadata } from "next"
import { PageHeading } from "@/components/shared/page-heading"
import { CTASection } from "@/components/shared/cta-section"
import { PortfolioGrid } from "./_components/portfolio-grid"
import { portfolioProjects } from "@/data/projects"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Luxury Interior Design Portfolio — Residential Projects in Mumbai, Thane & Beyond",
  description:
    "Explore the I Sketch Interiors portfolio — curated case studies of luxury residential interior design, bespoke joinery, and international projects from Mumbai townhouses to London residences.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    url: "/portfolio",
    title: "Luxury Interior Design Portfolio — I Sketch Interiors",
    description:
      "Curated case studies of luxury residential interior design, bespoke joinery, and international projects.",
    images: [
      {
        url: "/images/project-1.jpg",
        width: 1200,
        height: 630,
        alt: "I Sketch Interiors — Luxury Interior Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Design Portfolio — I Sketch Interiors",
    description:
      "Curated case studies of luxury residential interior design, bespoke joinery, and international projects.",
    images: ["/images/project-1.jpg"],
  },
}

export default function PortfolioPage() {
  return (
    <>
      <StructuredData
        data={getWebPageSchema({
          name: "Luxury Interior Design Portfolio — I Sketch Interiors",
          description:
            "Curated case studies of luxury residential interior design, bespoke joinery, and international projects.",
          url: "/portfolio",
          type: "CollectionPage",
        })}
      />
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ])}
      />
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
