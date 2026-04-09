import { ContactContent } from "./_components/contact-content"

export const metadata = {
  title: "Contact",
  description: "Get in touch with I Sketch Interiors for a luxury interior design consultation. Visit our Thane studio or call +91 99673 12203.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
}

export default function ContactPage() {
  return <ContactContent />
}
