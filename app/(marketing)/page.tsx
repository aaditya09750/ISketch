import type { Metadata } from "next"
import { HeroSection } from "./_components/hero-section"
import { AboutSection } from "./_components/about-section"
import { ProjectsSection } from "./_components/projects-section"
// import { FeaturedSection } from "./_components/featured-section"
import { ContactSection } from "./_components/contact-section"
import { StructuredData } from "@/components/shared/structured-data"
import { getWebPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Luxury Interior Designer in Thane & Mumbai — I Sketch Interiors",
  description:
    "Award-winning luxury interior design studio based in Thane. I Sketch Interiors creates bespoke residential interiors across Mumbai, Pune, and internationally. 20+ years of experience, 125+ completed projects.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Luxury Interior Designer in Thane & Mumbai — I Sketch Interiors",
    description:
      "Award-winning luxury interior design studio in Thane and Mumbai. Bespoke residential interiors, custom joinery, and full-service design across India and internationally.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "I Sketch Interiors — Luxury Interior Design Studio in Thane & Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Designer in Thane & Mumbai — I Sketch Interiors",
    description:
      "Award-winning luxury interior design studio. Bespoke residential interiors across Mumbai, Pune, and internationally.",
    images: ["/images/hero.jpg"],
  },
}

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={getWebPageSchema({
          name: "I Sketch Interiors — Luxury Interior Design Studio in Thane & Mumbai",
          description:
            "Award-winning luxury interior design studio based in Thane. Bespoke residential interiors across Mumbai, Pune, and internationally. 20+ years of experience, 125+ completed projects.",
          url: "/",
          type: "WebPage",
        })}
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <FeaturedSection /> */}
      <ContactSection />
    </>
  )
}
