import Link from "next/link"
import { Container } from "@/components/ui/container"
import { FancyButton } from "@/components/common/fancy-button"
import { contactCategories } from "@/data/contact"

export function ContactSection() {
  return (
    <section className="cv-auto py-16 md:py-20 lg:py-28 bg-background">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-14">
            <p className="label-uppercase text-accent mb-5 md:mb-6 lg:mb-8">
              Get In Touch
            </p>

            <h2 className="heading-section text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.35] mb-4 md:mb-5 lg:mb-6">
              We welcome the opportunity to collaborate with you on your next interior design project.
            </h2>

            <p className="font-sans text-sm md:text-base text-muted-foreground tracking-wide">
              Reach out to start the conversation
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-10 lg:mb-14">
            <div className="h-px w-12 md:w-16 bg-accent-decorative/40" />
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
            {contactCategories.map((category, index) => (
              <div
                key={category.title}
                className={`animate-fade-up text-center border border-border/50 py-8 md:py-10 px-5 md:px-6 lg:px-8 hover:border-accent-decorative/40 transition-colors duration-500 ${
                  index === 2 ? "md:col-span-2 md:max-w-sm md:mx-auto lg:col-span-1 lg:max-w-none" : ""
                }`}
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                <h3 className="label-uppercase text-foreground mb-4 md:mb-5 lg:mb-6">
                  {category.title}
                </h3>

                <Link
                  href={`mailto:${category.email}`}
                  className="footer-link inline-block font-sans text-xs sm:text-sm text-accent-decorative hover:text-foreground transition-colors duration-300 mb-2 md:mb-3 w-fit mx-auto"
                >
                  {category.email}
                </Link>

                {category.phone && (
                  <Link
                    href={`tel:${category.phone.replace(/\s/g, '')}`}
                    className="block font-sans text-xs sm:text-sm text-muted-foreground hover:text-accent-decorative transition-colors duration-300 mt-1.5 md:mt-2"
                  >
                    {category.phone}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <FancyButton href="/contact">
              Request a Consultation
            </FancyButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
