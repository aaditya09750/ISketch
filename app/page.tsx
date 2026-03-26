import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { FeaturedSection } from "@/components/sections/featured-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <>
      <link rel="preload" href="/videos/Isketch%20Video1.mp4" as="video" type="video/mp4" />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FeaturedSection />
      <ContactSection />
    </>
  )
}
