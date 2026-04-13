import type { Metadata } from "next"
import { AboutHero } from "./_components/about-hero"
import { AboutStorySection } from "./_components/about-story-section"
import { AboutTeamSection } from "./_components/about-team-section"
import { AboutApproachSection } from "./_components/about-approach-section"
import { AboutValuesSection } from "./_components/about-values-section"
import { LatestProjectSection } from "./_components/latest-project-section"
import { CTASection } from "@/components/shared/cta-section"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "About I Sketch Interiors — Luxury Interior Designers in Thane & Mumbai",
  description:
    "Meet I Sketch Interiors — a Thane-based luxury interior design studio with 20+ years crafting bespoke residential interiors across Mumbai, Pune, and internationally. 125+ completed projects.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About I Sketch Interiors — Luxury Interior Designers",
    description: "Thane-based luxury interior design studio with 20+ years crafting bespoke residential interiors across Mumbai, Pune, and internationally.",
    images: [{ url: "/images/about-hero.jpg", width: 1200, height: 630, alt: "About I Sketch Interiors — Luxury Interior Design Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About I Sketch Interiors — Luxury Interior Designers",
    description: "20+ years crafting bespoke residential interiors across Mumbai, Pune, and internationally. 125+ completed projects.",
    images: ["/images/about-hero.jpg"],
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData data={getWebPageSchema({
        name: "About I Sketch Interiors — Luxury Interior Designers",
        description: "Thane-based luxury interior design studio with 20+ years crafting bespoke residential interiors across Mumbai, Pune, and internationally.",
        url: "/about",
        type: "AboutPage",
      })} />
      <StructuredData data={getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])} />
      <AboutHero />

      <AboutStorySection />

      <AboutTeamSection />

      <AboutApproachSection />

      <AboutValuesSection />

      <LatestProjectSection />

      <CTASection
        heading="Begin Your Journey"
        description="We would love to hear about your project. Contact us to arrange a consultation and discover how we can transform your space."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  )
}
