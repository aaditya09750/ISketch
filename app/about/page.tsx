import { AboutHero } from "@/components/ui/about-hero"
import { AboutStorySection } from "@/components/sections/about-story-section"
import { AboutTeamSection } from "@/components/sections/about-team-section"
import { AboutApproachSection } from "@/components/sections/about-approach-section"
import { AboutValuesSection } from "@/components/sections/about-values-section"
import { LatestProjectSection } from "@/components/sections/latest-project-section"
import { CTASection } from "@/components/ui/cta-section"

export const metadata = {
  title: "About | I Sketch Interiors",
  description: "Learn about I Sketch Interiors, a luxury interior design studio based in London and Surrey.",
}

export default function AboutPage() {
  return (
    <>
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
