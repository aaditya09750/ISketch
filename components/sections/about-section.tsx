import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"

export function AboutSection() {
  return (
    <section className="py-28 lg:py-40 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Interior designer in studio"
              fill
              className="object-cover image-hover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="label-uppercase text-accent mb-6">
              The Studio
            </p>

            <h2 className="heading-section text-3xl lg:text-4xl xl:text-5xl text-foreground mb-10">
              About the team
              <br />
              behind I Sketch
            </h2>

            <div className="space-y-6 body-text text-muted-foreground">
              <p>
                I Sketch Interiors is a London and Surrey-based design studio
                specialising in luxury residential interiors throughout the UK and
                overseas for both private clients and developers.
              </p>
              <p>
                Led by our experienced team of talented Interior & Architectural
                Designers, we provide a personalised design service to create detail-driven,
                luxury interiors that perfectly suit their context and the client&apos;s needs,
                standing the test of time.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center mt-12 label-uppercase text-foreground link-underline hover:text-accent transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
