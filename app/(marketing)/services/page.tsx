import { ServiceHero } from "./_components/service-hero"
import { ServicesIntroSection } from "./_components/services-intro-section"
import { ServicesDetailSection } from "./_components/services-detail-section"
import { ServicesProcessSection } from "./_components/services-process-section"
import { ServicesFeesSection } from "./_components/services-fees-section"

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
    </>
  )
}
