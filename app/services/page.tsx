import { ServiceHero } from "@/components/ui/service-hero"
import { ServicesIntroSection } from "@/components/sections/services-intro-section"
import { ServicesDetailSection } from "@/components/sections/services-detail-section"
import { ServicesProcessSection } from "@/components/sections/services-process-section"
import { ServicesFeesSection } from "@/components/sections/services-fees-section"
import { CTASection } from "@/components/ui/cta-section"

export const metadata = {
  title: "Services | I Sketch Interiors",
  description: "Discover our comprehensive interior design services, from concept development to project management.",
}

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />

      <ServicesIntroSection />

      <ServicesDetailSection />

      <ServicesProcessSection />

      <ServicesFeesSection />

      <CTASection
        heading="Ready to Begin?"
        description="Contact us to schedule an initial consultation and discover how we can transform your space into something extraordinary."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  )
}
