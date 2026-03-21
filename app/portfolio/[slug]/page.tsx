import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { RevealImage } from "@/components/ui/reveal-image"
import { projectDetails } from "@/data/projects"

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectDetails[slug]

  if (!project) {
    return { title: "Project Not Found | I Sketch Interiors" }
  }

  return {
    title: `${project.title} | I Sketch Interiors`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectDetails[slug]

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[70vh] lg:h-[85vh] mt-20 lg:mt-24">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          preload
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/80 mb-4">
              {project.location}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.1em]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Details */}
            <div className="lg:col-span-1">
              <div className="space-y-6 lg:sticky lg:top-32">
                <div className="grid grid-cols-2 gap-6">
                  {project.details.map((detail) => (
                    <div key={detail.label}>
                      <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                        {detail.label}
                      </p>
                      <p className="font-serif text-lg text-foreground">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                    Year
                  </p>
                  <p className="font-serif text-lg text-foreground">
                    {project.year}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                    Scope
                  </p>
                  <p className="font-serif text-lg text-foreground">
                    {project.scope}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-2">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-6">
                About the Project
              </p>
              <p className="font-serif text-2xl lg:text-3xl text-foreground leading-relaxed mb-12">
                {project.description}
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-4">
                    The Challenge
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-4">
                    Our Solution
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="pb-20 lg:pb-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {project.images.slice(1).map((image, index) => (
              <RevealImage
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 2}`}
                sizes={index === 0 ? "100vw" : "(max-width: 767px) 100vw, 50vw"}
                containerClassName={`relative overflow-hidden ${
                  index === 0 ? 'aspect-[4/3] md:col-span-2' : 'aspect-[4/5]'
                }`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Project Navigation */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2">
            <Link
              href={`/portfolio/${project.prevProject.slug}`}
              className="group flex items-center justify-between p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border hover:bg-secondary transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="text-right">
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Previous Project
                </p>
                <p className="font-serif text-lg text-foreground">
                  {project.prevProject.title}
                </p>
              </div>
            </Link>
            <Link
              href={`/portfolio/${project.nextProject.slug}`}
              className="group flex items-center justify-between p-8 lg:p-12 hover:bg-secondary transition-colors duration-300"
            >
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Next Project
                </p>
                <p className="font-serif text-lg text-foreground">
                  {project.nextProject.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <Container className="text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            Interested in Working Together?
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-2xl mx-auto mb-10">
            We would love to hear about your project and discuss how we can help
            create your dream space.
          </p>
          <a
            href="/contact"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Start a Conversation
          </a>
        </Container>
      </section>
    </>
  )
}
