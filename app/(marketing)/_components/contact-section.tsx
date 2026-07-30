import Link from "next/link"
import { Container } from "@/components/shared/container"
import { FancyButton } from "@/components/shared/fancy-button"
import { studioContact } from "@/data/contact"

export function ContactSection() {
  return (
    <section className="cv-auto py-16 md:py-20 lg:py-28 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div
            className="text-center mb-10 lg:mb-14 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="label-uppercase text-accent mb-5 md:mb-6 lg:mb-8">Get In Touch</p>

            <h2 className="heading-section text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.35] mb-4 md:mb-5 lg:mb-6">
              We welcome the opportunity to collaborate with you on your next interior design
              project.
            </h2>

            <p className="font-sans text-sm md:text-base text-muted-foreground tracking-wide">
              Reach out to start the conversation
            </p>
          </div>

          {/* Decorative divider */}
          <div
            className="flex items-center justify-center mb-10 lg:mb-14 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-px w-12 md:w-16 bg-accent-decorative/40" />
          </div>

          {/* Contact Pair */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 mb-14 md:mb-18 lg:mb-20 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Email */}
            <div className="group text-center">
              <p className="label-uppercase text-[0.55rem] tracking-[0.22em] text-foreground/60 mb-3">
                Email
              </p>
              <div className="h-px w-6 bg-accent-decorative/20 mx-auto mb-4 transition-all duration-500 group-hover:w-10 group-hover:bg-accent-decorative/40" />
              <Link
                href={`mailto:${studioContact.email}`}
                className="footer-link inline-block body-text text-xs sm:text-sm text-accent-decorative/70 hover:text-accent-decorative transition-colors duration-500 break-all sm:break-normal"
              >
                {studioContact.email}
              </Link>
            </div>

            {/* Separator */}
            <div className="hidden sm:block w-px h-16 bg-accent-decorative/15" />
            <div className="sm:hidden h-px w-16 bg-accent-decorative/15" />

            {/* Phone */}
            <div className="group text-center">
              <p className="label-uppercase text-[0.55rem] tracking-[0.22em] text-foreground/60 mb-3">
                Telephone
              </p>
              <div className="h-px w-6 bg-accent-decorative/20 mx-auto mb-4 transition-all duration-500 group-hover:w-10 group-hover:bg-accent-decorative/40" />
              <div className="flex flex-col items-center gap-1">
                {studioContact.phones.map((phone) => (
                  <Link
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="body-text text-sm text-muted-foreground/70 hover:text-accent-decorative transition-colors duration-500"
                  >
                    {phone}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <FancyButton href="/contact">Request a Consultation</FancyButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
