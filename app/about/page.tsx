import Image from "next/image"
import { PageHero } from "@/components/ui/page-hero"
import { SectionHeading } from "@/components/ui/section-heading"
import { CTASection } from "@/components/ui/cta-section"
import { Container } from "@/components/ui/container"
import { values, awards } from "@/data/about"

export const metadata = {
  title: "About | I Sketch Interiors",
  description: "Learn about I Sketch Interiors, a luxury interior design studio based in London and Surrey.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/about-hero.jpg"
        alt="I Sketch Interiors Studio"
        title="The Studio"
      />

      {/* Introduction */}
      <section className="py-24 lg:py-36">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-uppercase text-accent mb-6">
              Our Philosophy
            </p>
            <h2 className="heading-section text-3xl lg:text-4xl text-foreground mb-10">
              Creating timeless interiors that reflect the unique personality and lifestyle of each client
            </h2>
            <p className="body-text text-muted-foreground">
              At I Sketch Interiors, we believe that exceptional design begins with understanding.
              Our approach combines classical elegance with contemporary sophistication,
              creating spaces that are both beautiful and deeply personal. Every project is
              a collaboration, where your vision meets our expertise to craft interiors that
              transcend trends and stand the test of time.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-24 lg:py-36 bg-secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="I Sketch Interiors Founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <p className="label-uppercase text-accent mb-6">
                The Founder
              </p>
              <h2 className="heading-section text-3xl lg:text-4xl text-foreground mb-10">
                A Passion for Design Excellence
              </h2>
              <div className="space-y-6">
                <p className="body-text text-muted-foreground">
                  With over fifteen years of experience in luxury residential design,
                  our founder established I Sketch Interiors with a singular vision:
                  to create homes that are as functional as they are beautiful.
                </p>
                <p className="body-text text-muted-foreground">
                  Having trained at some of the most prestigious design houses in London
                  and abroad, our approach combines rigorous attention to detail with
                  an intuitive understanding of how people live. We believe that the
                  best interiors are those that enhance daily life while expressing
                  the unique character of their inhabitants.
                </p>
                <p className="body-text text-muted-foreground">
                  Today, I Sketch Interiors works on projects throughout the United Kingdom
                  and internationally, bringing the same level of dedication and artistry
                  to each commission, regardless of scale.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-36">
        <Container>
          <div className="text-center mb-16 lg:mb-20">
            <SectionHeading label="Our Values" heading="What Guides Us" />
          </div>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-px h-12 bg-accent mx-auto mb-8" />
                <h3 className="font-serif text-xl text-foreground mb-5">
                  {value.title}
                </h3>
                <p className="body-text text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 lg:py-36 bg-secondary">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading label="Recognition" heading="Awards & Accolades" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((item, index) => (
              <div key={index} className="text-center py-8 border-t border-border">
                <p className="font-serif text-3xl text-accent mb-3">{item.year}</p>
                <p className="body-text text-foreground">{item.award}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Begin Your Journey"
        description="We would love to hear about your project. Contact us to arrange a consultation and discover how we can transform your space."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  )
}
