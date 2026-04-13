import type { Metadata } from "next"
import { ContactContent } from "./_components/contact-content"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Contact I Sketch Interiors — Book a Luxury Interior Design Consultation",
  description:
    "Book an interior design consultation with I Sketch Interiors. Visit our Thane studio at The Courtyard, Pokhran Road, or call +91 99673 12203. Serving Mumbai, Thane, Navi Mumbai, and Pune.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact I Sketch Interiors — Book a Consultation",
    description: "Book an interior design consultation with I Sketch Interiors. Visit our Thane studio or call +91 99673 12203.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Contact I Sketch Interiors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact I Sketch Interiors — Book a Consultation",
    description: "Book an interior design consultation. Visit our Thane studio or call +91 99673 12203. Serving Mumbai, Thane, Navi Mumbai, and Pune.",
    images: ["/images/hero.jpg"],
  },
}

export default function ContactPage() {
  return (
    <>
      <StructuredData data={getWebPageSchema({
        name: "Contact I Sketch Interiors",
        description: "Book an interior design consultation with I Sketch Interiors. Visit our Thane studio or call +91 99673 12203.",
        url: "/contact",
        type: "ContactPage",
      })} />
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <ContactContent />
    </>
  )
}
