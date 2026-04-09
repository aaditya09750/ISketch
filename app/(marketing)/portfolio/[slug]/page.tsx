import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Container } from "@/components/shared/container"
import { ProjectGallery } from "./_components/project-gallery"
import IsketchLogo from "@/components/shared/isketch-logo"
import { projectDetails } from "@/data/projects"
import { CTASection } from "@/components/shared/cta-section"

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
      <section className="relative h-[70vh] lg:h-[87vh] mt-16 md:mt-20 lg:mt-24 bg-surface-dark">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

        {/* Logo watermark */}
        <div className="absolute top-5 right-5 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-10 pointer-events-none">
          <IsketchLogo className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white/50 drop-shadow-lg" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-[1400px] mx-auto">
            <p className="label-uppercase text-[10px] sm:text-[11px] tracking-[0.25em] text-white/80 mb-4">
              {project.location}
            </p>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.08em]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">

            {/* Left — Sticky details sidebar */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-32 space-y-0">
                {/* Project details as a clean list */}
                {[
                  ...project.details,
                  { label: "Year", value: project.year },
                  { label: "Scope", value: project.scope },
                ].map((detail, i) => (
                  <div
                    key={detail.label}
                    className={`flex items-baseline justify-between py-4 ${
                      i > 0 ? "border-t border-border/20" : ""
                    }`}
                  >
                    <span className="label-uppercase text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-accent-decorative/50">
                      {detail.label}
                    </span>
                    <span className="heading-section text-sm sm:text-base text-foreground text-right">
                      {detail.value}
                    </span>
                  </div>
                ))}

                {/* Decorative line */}
                <div className="pt-6">
                  <div className="h-px w-8 bg-accent-decorative/25" />
                </div>
              </div>
            </div>

            {/* Right — Content */}
            <div className="lg:col-span-8 xl:col-span-8 xl:col-start-5">
              {/* About label */}
              <p className="label-uppercase text-accent tracking-[0.25em] mb-4 sm:mb-5">
                About the Project
              </p>

              {/* Description */}
              <p className="heading-section text-xl sm:text-2xl lg:text-[1.75rem] xl:text-3xl text-foreground leading-[1.45] mb-12 sm:mb-14 lg:mb-16">
                {project.description}
              </p>

              {/* Challenge & Solution — side by side on xl, stacked below */}
              <div className="grid xl:grid-cols-2 gap-10 xl:gap-14">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-5 bg-accent-decorative/30" />
                    <h3 className="label-uppercase text-[0.6rem] tracking-[0.2em] text-foreground/70">
                      The Challenge
                    </h3>
                  </div>
                  <p className="body-text text-sm sm:text-[0.9375rem] text-muted-foreground leading-[1.85]">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-5 bg-accent-decorative/30" />
                    <h3 className="label-uppercase text-[0.6rem] tracking-[0.2em] text-foreground/70">
                      Our Solution
                    </h3>
                  </div>
                  <p className="body-text text-sm sm:text-[0.9375rem] text-muted-foreground leading-[1.85]">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Gallery */}
      <ProjectGallery images={project.images} title={project.title} />

      {/* Project Navigation + CTA */}
      <section>
        {/* Navigation */}
        <div className=" bg-secondary border-t border-border/30">
          <Container>
            {/* Section label */}
            <div className="pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-12 lg:pb-14 text-center">
              <p className="label-uppercase text-accent-decorative/50 tracking-[0.25em] text-[0.6rem]">
                Continue Exploring
              </p>
            </div>

            {/* Nav cards — compact horizontal on mobile, tall cards on md+ */}
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 pb-16 sm:pb-20 lg:pb-28">

              {/* Previous */}
              <Link
                href={`/portfolio/${project.prevProject.slug}`}
                className="group relative overflow-hidden bg-card border border-border/20 hover:border-accent-decorative/25 transition-all duration-500 flex md:flex-col"
              >
                {/* Thumbnail */}
                <div className="relative w-28 sm:w-36 shrink-0 md:w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                  <Image
                    src={projectDetails[project.prevProject.slug]?.images[0] ?? "/images/hero.jpg"}
                    alt={project.prevProject.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 767px) 150px, 50vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-500" />
                  <div className="absolute inset-3 sm:inset-4 border border-white/0 group-hover:border-white/40 transition-all duration-500 hidden md:block" />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 z-10 pointer-events-none">
                    <IsketchLogo className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/70 drop-shadow-md" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
                    <span className="label-uppercase text-[10px] sm:text-[11px] tracking-[0.25em] text-white/90">View Project</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 items-center justify-between p-4 sm:p-5 md:p-5 lg:p-7">
                  <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                    <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-border/30 group-hover:border-accent-decorative/40 transition-colors duration-400">
                      <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground/60 group-hover:text-accent-decorative transition-colors duration-300" />
                    </span>
                    <span className="label-uppercase text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground/50 hidden sm:inline">
                      Previous
                    </span>
                  </div>
                  <p className="heading-section text-sm sm:text-base md:text-lg text-foreground text-right">
                    {project.prevProject.title}
                  </p>
                </div>
              </Link>

              {/* Next */}
              <Link
                href={`/portfolio/${project.nextProject.slug}`}
                className="group relative overflow-hidden bg-card border border-border/20 hover:border-accent-decorative/25 transition-all duration-500 flex flex-row-reverse md:flex-col"
              >
                {/* Thumbnail */}
                <div className="relative w-28 sm:w-36 shrink-0 md:w-full aspect-square sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                  <Image
                    src={projectDetails[project.nextProject.slug]?.images[0] ?? "/images/hero.jpg"}
                    alt={project.nextProject.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 767px) 150px, 50vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-500" />
                  <div className="absolute inset-3 sm:inset-4 border border-white/0 group-hover:border-white/40 transition-all duration-500 hidden md:block" />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 z-10 pointer-events-none">
                    <IsketchLogo className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/70 drop-shadow-md" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
                    <span className="label-uppercase text-[10px] sm:text-[11px] tracking-[0.25em] text-white/90">View Project</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 items-center justify-between p-4 sm:p-5 md:p-5 lg:p-7">
                  <p className="heading-section text-sm sm:text-base md:text-lg text-foreground">
                    {project.nextProject.title}
                  </p>
                  <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                    <span className="label-uppercase text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground/50 hidden sm:inline">
                      Next
                    </span>
                    <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-border/30 group-hover:border-accent-decorative/40 transition-colors duration-400">
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground/60 group-hover:text-accent-decorative transition-colors duration-300" />
                    </span>
                  </div>
                </div>
              </Link>

            </div>
          </Container>
        </div>

      </section>

      {/* CTA */}
      <CTASection
        heading="Start Your Project"
        description="Ready to transform your space? We would love to discuss your vision and bring it to life."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  )
}
