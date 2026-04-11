import type { Metadata } from "next"
import { HeroSection } from "./_components/hero-section"
import { AboutSection } from "./_components/about-section"
import { ProjectsSection } from "./_components/projects-section"
// import { FeaturedSection } from "./_components/featured-section"
import { ContactSection } from "./_components/contact-section"

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
  },
}

export default function HomePage() {
  return (
    <>
      <link rel="preload" href="/videos/hero-1.mp4" as="video" type="video/mp4" />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <FeaturedSection /> */}
      <ContactSection />
    </>
  )
}
