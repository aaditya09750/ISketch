import { ServiceHero } from "./_components/service-hero"
import { ServicesIntroSection } from "./_components/services-intro-section"
import { ServicesDetailSection } from "./_components/services-detail-section"
import { ServicesProcessSection } from "./_components/services-process-section"
import { ServicesFeesSection } from "./_components/services-fees-section"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema"
import { services } from "@/data/services"

export const metadata = {
  title: "Interior Design Services",
  description: "Full interior design, consultation, property styling, and bespoke joinery services by I Sketch Interiors. From concept development to project management — 125+ projects delivered.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }])} />
      {services.map((s) => (
        <StructuredData key={s.title} data={getServiceSchema(s)} />
      ))}
      <ServiceHero />

      <ServicesIntroSection />

      <ServicesDetailSection />

      <ServicesProcessSection />

      <ServicesFeesSection />
    </>
  )
}
