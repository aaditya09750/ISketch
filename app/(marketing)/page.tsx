import { HeroSection } from "./_components/hero-section"
import { AboutSection } from "./_components/about-section"
import { ProjectsSection } from "./_components/projects-section"
// import { FeaturedSection } from "./_components/featured-section"
import { ContactSection } from "./_components/contact-section"

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
