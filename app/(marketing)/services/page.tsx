import type { Metadata } from "next"
import { ServiceHero } from "./_components/service-hero"
import { ServicesIntroSection } from "./_components/services-intro-section"
import { ServicesDetailSection } from "./_components/services-detail-section"
import { ServicesProcessSection } from "./_components/services-process-section"
import { ServicesFeesSection } from "./_components/services-fees-section"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema, getServiceSchema, getWebPageSchema } from "@/lib/schema"
import { services } from "@/data/services"

export const metadata: Metadata = {
  title: "Interior Design Services in Thane & Mumbai — Full Design, Consultation, Joinery",
  description:
    "Luxury interior design services in Thane and Mumbai. Full interior design, expert consultation, property styling, and bespoke joinery. From concept through installation — 125+ projects delivered by I Sketch Interiors.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Interior Design Services — I Sketch Interiors",
    description:
      "Luxury interior design services in Thane and Mumbai. Full interior design, expert consultation, property styling, and bespoke joinery.",
    images: [
      {
        url: "/images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Services by I Sketch Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services — I Sketch Interiors",
    description:
      "Full interior design, expert consultation, property styling, and bespoke joinery. 125+ projects delivered.",
    images: ["/images/services-hero.jpg"],
  },
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={getWebPageSchema({
          name: "Interior Design Services — I Sketch Interiors",
          description:
            "Luxury interior design services in Thane and Mumbai. Full interior design, expert consultation, property styling, and bespoke joinery.",
          url: "/services",
          type: "WebPage",
        })}
      />
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
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
