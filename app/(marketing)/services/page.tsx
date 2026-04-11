import { ServiceHero } from "./_components/service-hero"
import { ServicesIntroSection } from "./_components/services-intro-section"
import { ServicesDetailSection } from "./_components/services-detail-section"
import { ServicesProcessSection } from "./_components/services-process-section"
import { ServicesFeesSection } from "./_components/services-fees-section"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema"
import { services } from "@/data/services"

export const metadata = {
  title: "Interior Design Services in Thane & Mumbai — Full Design, Consultation, Joinery",
  description:
    "Luxury interior design services in Thane and Mumbai. Full interior design, expert consultation, property styling, and bespoke joinery. From concept through installation — 125+ projects delivered by I Sketch Interiors.",
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
