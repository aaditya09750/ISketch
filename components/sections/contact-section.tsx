import Link from "next/link"
import { Container } from "@/components/ui/container"
import { contactCategories } from "@/data/contact"

export function ContactSection() {
  return (
    <section className="py-28 lg:py-40 bg-secondary">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-uppercase text-accent mb-8">
            Get In Touch
          </p>

          <h2 className="heading-section text-3xl lg:text-4xl xl:text-5xl text-foreground leading-[1.3] mb-10">
            We welcome the opportunity to collaborate with you on your next interior design project.
          </h2>

          <p className="body-text text-muted-foreground mb-12">
            Reach out to start the conversation
          </p>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center mb-14">
            {contactCategories.map((category) => (
              <div key={category.title}>
                <h3 className="label-uppercase text-foreground mb-4">
                  {category.title}
                </h3>
                <Link
                  href={`mailto:${category.email}`}
                  className="body-text text-muted-foreground hover:text-accent transition-colors block mb-2"
                >
                  {category.email}
                </Link>
                {category.phone && (
                  <p className="body-text text-muted-foreground">
                    {category.phone}
                  </p>
                )}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center label-uppercase text-foreground link-underline hover:text-accent transition-colors duration-300"
          >
            Request a Consultation
          </Link>
        </div>
      </Container>
    </section>
  )
}
