import { PageHero } from "@/components/ui/page-hero"
import { CTASection } from "@/components/ui/cta-section"
import { Container } from "@/components/ui/container"
import { services, designProcess } from "@/data/services"

export const metadata = {
  title: "Services | I Sketch Interiors",
  description: "Discover our comprehensive interior design services, from concept development to project management.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/services-hero.jpg"
        alt="I Sketch Interior Design Services"
        title="Our Services"
        overlayOpacity="bg-surface-dark/40"
      />

      {/* Introduction */}
      <section className="py-24 lg:py-36">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-uppercase text-accent mb-6">
              What We Offer
            </p>
            <h2 className="heading-section text-3xl lg:text-4xl text-foreground mb-10">
              Tailored services to suit every project
            </h2>
            <p className="body-text text-muted-foreground">
              Whether you are undertaking a complete renovation or seeking guidance
              on a specific room, we offer a range of services designed to meet your
              needs. Each project receives our complete attention and dedication to
              achieving exceptional results.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="pb-24 lg:pb-36">
        <Container>
          <div className="space-y-24 lg:space-y-36">
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="font-serif text-6xl lg:text-8xl text-accent-decorative/20">
                    {service.number}
                  </span>
                  <h3 className="heading-section text-2xl lg:text-3xl text-foreground mt-4 mb-8">
                    {service.title}
                  </h3>
                  <p className="body-text text-muted-foreground mb-10">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4">
                        <span className="w-8 h-px bg-accent-decorative" />
                        <span className="font-sans text-sm text-foreground tracking-wide">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-muted h-80 lg:h-[500px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-serif text-9xl text-accent-decorative/10">
                      {service.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-36 bg-secondary">
        <Container>
          <div className="text-center mb-16 lg:mb-24">
            <p className="label-uppercase text-accent mb-6">
              How We Work
            </p>
            <h2 className="heading-section text-3xl lg:text-4xl text-foreground">
              Our Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {designProcess.map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-serif text-4xl text-accent-decorative mb-6 block">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl text-foreground mb-5">
                  {item.title}
                </h3>
                <p className="body-text text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fees Section */}
      <section className="py-24 lg:py-36">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-uppercase text-accent mb-6">
              Investment
            </p>
            <h2 className="heading-section text-3xl lg:text-4xl text-foreground mb-10">
              Fees & Pricing
            </h2>
            <p className="body-text text-muted-foreground mb-6">
              Our fees are structured to reflect the scope and complexity of each
              project. We offer transparent pricing and will provide a detailed
              proposal following our initial consultation. Full interior design
              projects are typically charged on a percentage basis, while
              consultations are offered at an hourly rate.
            </p>
            <p className="body-text text-muted-foreground">
              We are happy to discuss your requirements and provide a bespoke
              quotation tailored to your specific needs.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Ready to Begin?"
        description="Contact us to schedule an initial consultation and discover how we can transform your space into something extraordinary."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  )
}
