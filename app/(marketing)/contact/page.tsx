import { ContactContent } from "./_components/contact-content"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema } from "@/lib/schema"

export const metadata = {
  title: "Contact I Sketch Interiors — Book a Luxury Interior Design Consultation",
  description:
    "Book an interior design consultation with I Sketch Interiors. Visit our Thane studio at The Courtyard, Pokhran Road, or call +91 99673 12203. Serving Mumbai, Thane, Navi Mumbai, and Pune.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
}

export default function ContactPage() {
  return (
    <>
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
