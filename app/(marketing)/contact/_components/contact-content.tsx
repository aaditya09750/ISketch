"use client"

import { useRef, useEffect, useState } from "react"
import { PageHeading } from "@/components/shared/page-heading"
import { Container } from "@/components/shared/container"
import { contactDetails, studioContact } from "@/data/contact"
import { Mail, MapPin, Phone, Share2 } from "lucide-react"
import { FaFacebookF, FaInstagram } from "react-icons/fa6"
import { socialLinks } from "@/data/navigation"

export function ContactContent() {
  /* ── Scroll-triggered visibility ── */
  const detailsRef = useRef<HTMLDivElement>(null)
  const [detailsVisible, setDetailsVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDetailsVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    if (detailsRef.current) obs.observe(detailsRef.current)
    return () => obs.disconnect()
  }, [])

  const animIn = (visible: boolean) =>
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"

  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` })

  return (
    <>
      <PageHeading
        label="Get in Touch"
        title="Contact"
        description="We would love to hear about your project. Please get in touch to arrange an initial consultation and discover how we can help bring your vision to life."
      />

      {/* ═══════════════════════════════════════════════════════
          Contact Details — Unified Section
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-24 sm:pb-32 lg:pb-40">
        <Container>
          <div ref={detailsRef}>
            {/* ── Header ── */}
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
              <div className="lg:col-span-7">
                <p
                  className={`label-uppercase text-accent-decorative tracking-[0.3em] text-[0.6rem] mb-6 transition-all duration-[900ms] ease-out ${animIn(detailsVisible)}`}
                  style={delay(100)}
                >
                  Our Studio
                </p>
                <h2
                  className={`heading-display text-[1.85rem] sm:text-[2.25rem] lg:text-[2.75rem] text-foreground leading-[1.15] transition-all duration-[900ms] ease-out ${animIn(detailsVisible)}`}
                  style={delay(250)}
                >
                  We&rsquo;d love to hear
                  <br className="hidden sm:block" /> about your project
                </h2>
              </div>
              <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-end">
                <div
                  className={`h-px bg-accent-decorative/25 mb-6 lg:mb-7 transition-all duration-[1.4s] ease-out ${
                    detailsVisible ? "w-12 opacity-100" : "w-0 opacity-0"
                  }`}
                  style={delay(400)}
                />
                <p
                  className={`body-text text-muted-foreground/75 leading-[1.9] max-w-md transition-all duration-[900ms] ease-out ${animIn(detailsVisible)}`}
                  style={delay(500)}
                >
                  Whether you have a project in mind or simply wish to explore possibilities, we are
                  here to guide you. Reach out through any of the channels below .
                </p>
              </div>
            </div>

            {/* ── Contact Cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-accent-decorative/12">
              {/* Address */}
              <div
                className={`group relative py-10 sm:py-12 lg:py-14 pr-0 md:pr-10 lg:pr-8 border-b md:border-r border-accent-decorative/12 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${animIn(detailsVisible)}`}
                style={delay(600)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-full border border-accent-decorative/12 flex items-center justify-center transition-all duration-600 group-hover:border-accent-decorative/35 group-hover:shadow-[0_4px_20px_rgba(160,120,86,0.08)]">
                    <MapPin className="w-[18px] h-[18px] text-accent-decorative/45 group-hover:text-accent-decorative transition-colors duration-600" />
                  </div>
                  <h3 className="label-uppercase text-[0.6rem] tracking-[0.22em] text-foreground/55">
                    Address
                  </h3>
                </div>
                <div className="h-px w-8 bg-accent-decorative/15 mb-5 transition-all duration-600 group-hover:w-12 group-hover:bg-accent-decorative/30" />
                <p className="body-text text-[0.8125rem] text-muted-foreground/65 whitespace-pre-line leading-[1.85]">
                  {contactDetails[0].content}
                </p>
              </div>

              {/* Telephone */}
              <div
                className={`group relative py-10 sm:py-12 lg:py-14 pl-0 md:pl-10 lg:pl-8 lg:pr-8 border-b lg:border-r border-accent-decorative/12 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${animIn(detailsVisible)}`}
                style={delay(740)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-full border border-accent-decorative/12 flex items-center justify-center transition-all duration-600 group-hover:border-accent-decorative/35 group-hover:shadow-[0_4px_20px_rgba(160,120,86,0.08)]">
                    <Phone className="w-[18px] h-[18px] text-accent-decorative/45 group-hover:text-accent-decorative transition-colors duration-600" />
                  </div>
                  <h3 className="label-uppercase text-[0.6rem] tracking-[0.22em] text-foreground/55">
                    Telephone
                  </h3>
                </div>
                <div className="h-px w-8 bg-accent-decorative/15 mb-5 transition-all duration-600 group-hover:w-12 group-hover:bg-accent-decorative/30" />
                <div className="flex flex-col gap-1.5">
                  {studioContact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="footer-link body-text text-[0.8125rem] text-muted-foreground/65 hover:text-accent-decorative transition-colors duration-500 w-fit"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div
                className={`group relative py-10 sm:py-12 lg:py-14 pr-0 md:pr-10 lg:pr-8 lg:pl-8 md:border-r border-accent-decorative/12 border-b md:border-b-0 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${animIn(detailsVisible)}`}
                style={delay(880)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-full border border-accent-decorative/12 flex items-center justify-center transition-all duration-600 group-hover:border-accent-decorative/35 group-hover:shadow-[0_4px_20px_rgba(160,120,86,0.08)]">
                    <Mail className="w-[18px] h-[18px] text-accent-decorative/45 group-hover:text-accent-decorative transition-colors duration-600" />
                  </div>
                  <h3 className="label-uppercase text-[0.6rem] tracking-[0.22em] text-foreground/55">
                    Email
                  </h3>
                </div>
                <div className="h-px w-8 bg-accent-decorative/15 mb-5 transition-all duration-600 group-hover:w-12 group-hover:bg-accent-decorative/30" />
                <a
                  href={`mailto:${studioContact.email}`}
                  className="footer-link body-text text-[0.8125rem] text-muted-foreground/65 hover:text-accent-decorative transition-colors duration-500 inline-block break-all sm:break-normal"
                >
                  {studioContact.email}
                </a>
              </div>

              {/* Follow Us */}
              <div
                className={`group relative py-10 sm:py-12 lg:py-14 pl-0 md:pl-10 lg:pl-8 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${animIn(detailsVisible)}`}
                style={delay(1020)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-full border border-accent-decorative/12 flex items-center justify-center transition-all duration-600 group-hover:border-accent-decorative/35 group-hover:shadow-[0_4px_20px_rgba(160,120,86,0.08)]">
                    <Share2 className="w-[18px] h-[18px] text-accent-decorative/45 group-hover:text-accent-decorative transition-colors duration-600" />
                  </div>
                  <h3 className="label-uppercase text-[0.6rem] tracking-[0.22em] text-foreground/55">
                    Follow Us
                  </h3>
                </div>
                <div className="h-px w-8 bg-accent-decorative/15 mb-5 transition-all duration-600 group-hover:w-12 group-hover:bg-accent-decorative/30" />
                <div className="flex flex-col gap-2.5">
                  {socialLinks.map((social) => {
                    const Icon = social.label === "Instagram" ? FaInstagram : FaFacebookF
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link flex items-center gap-2.5 body-text text-[0.8125rem] text-muted-foreground/65 hover:text-accent-decorative transition-colors duration-500 w-fit"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {social.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
