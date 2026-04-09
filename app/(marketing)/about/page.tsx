import { AboutHero } from "./_components/about-hero"
import { AboutStorySection } from "./_components/about-story-section"
import { AboutTeamSection } from "./_components/about-team-section"
import { AboutApproachSection } from "./_components/about-approach-section"
import { AboutValuesSection } from "./_components/about-values-section"
import { LatestProjectSection } from "./_components/latest-project-section"
import { CTASection } from "@/components/shared/cta-section"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema } from "@/lib/schema"

export const metadata = {
  title: "About",
  description: "Discover I Sketch Interiors — a luxury interior design studio in Thane with 20+ years of experience crafting bespoke residential interiors across Mumbai, Pune, and internationally.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
}

export default function AboutPage() {
  return (
    <>
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
