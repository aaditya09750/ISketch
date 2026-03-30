"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { PageHeading } from "@/components/ui/page-heading"
import { Container } from "@/components/ui/container"
import { contactDetails, contactCategories } from "@/data/contact"
import { socialLinks } from "@/data/navigation"

export default function ContactPage() {
  /* ── Scroll-triggered visibility ── */
  const detailsRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLElement>(null)
  const mapRef = useRef<HTMLElement>(null)
  const [detailsVisible, setDetailsVisible] = useState(false)
  const [categoriesVisible, setCategoriesVisible] = useState(false)
  const [mapVisible, setMapVisible] = useState(false)

  useEffect(() => {
    const observe = (
      ref: React.RefObject<HTMLElement | null>,
      setter: (v: boolean) => void,
    ) => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setter(true)
            obs.disconnect()
          }
        },
        { threshold: 0.08 },
      )
      if (ref.current) obs.observe(ref.current)
      return obs
    }
    const o1 = observe(detailsRef, setDetailsVisible)
    const o2 = observe(categoriesRef, setCategoriesVisible)
    const o3 = observe(mapRef, setMapVisible)
    return () => {
      o1.disconnect()
      o2.disconnect()
      o3.disconnect()
    }
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
          Contact Details
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-20 sm:pb-28 lg:pb-36">
        <Container>
          <div
            ref={detailsRef}
            className="grid lg:grid-cols-12 gap-14 lg:gap-20 xl:gap-28"
          >
            {/* ── Left: Heading + Intro + Social ── */}
            <div className="lg:col-span-5">
              <p
                className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-5 transition-all duration-[900ms] ease-out ${animIn(detailsVisible)}`}
                style={delay(100)}
              >
                Our Studio
              </p>

              <h2
                className={`heading-display text-[1.75rem] sm:text-3xl lg:text-[2.25rem] text-foreground leading-[1.2] mb-8 lg:mb-10 transition-all duration-[900ms] ease-out ${animIn(detailsVisible)}`}
                style={delay(250)}
              >
                We&rsquo;d love to hear
                <br className="hidden sm:block" /> about your project
              </h2>

              <div
                className={`h-px bg-accent-decorative/30 mb-8 lg:mb-10 transition-all duration-[1.2s] ease-out ${
                  detailsVisible ? "w-16 opacity-100" : "w-0 opacity-0"
                }`}
                style={delay(400)}
              />

              <p
                className={`body-text text-muted-foreground leading-[1.85] max-w-md mb-12 lg:mb-14 transition-all duration-[900ms] ease-out ${animIn(detailsVisible)}`}
                style={delay(500)}
              >
                Whether you have a project in mind or simply wish to explore
                possibilities, our team is here to guide you. Reach out through
                any of the channels below and we will respond within 24 hours.
              </p>

              {/* Social links */}
              <div
                className={`transition-all duration-[900ms] ease-out ${animIn(detailsVisible)}`}
                style={delay(650)}
              >
                <p className="label-uppercase text-[0.55rem] tracking-[0.22em] text-accent-decorative/40 mb-5">
                  Follow Us
                </p>
                <div className="flex gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group relative label-uppercase text-[0.6rem] tracking-[0.15em] text-muted-foreground/40 hover:text-accent-decorative transition-colors duration-500"
                    >
                      {social.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-decorative/40 transition-all duration-400 ease-out group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Contact Details ── */}
            <div className="lg:col-span-7 lg:pt-2">
              <div className="grid sm:grid-cols-2 gap-0">
                {contactDetails.map((detail, i) => (
                  <div
                    key={detail.title}
                    className={`group relative py-8 sm:py-10 lg:py-12 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${animIn(detailsVisible)} ${
                      i < contactDetails.length - 1
                        ? "border-b border-border/15"
                        : ""
                    } ${
                      i === 2 ? "sm:border-b-0" : ""
                    } ${
                      i % 2 === 0
                        ? "sm:pr-8 lg:pr-12 sm:border-r sm:border-border/15"
                        : "sm:pl-8 lg:pl-12"
                    }`}
                    style={delay(300 + i * 130)}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full border border-accent-decorative/15 flex items-center justify-center mb-5 transition-all duration-500 group-hover:border-accent-decorative/40 group-hover:shadow-[0_2px_12px_rgba(160,120,86,0.06)]">
                      <detail.icon className="w-4 h-4 text-accent-decorative/50 group-hover:text-accent-decorative transition-colors duration-500" />
                    </div>

                    {/* Label */}
                    <h3 className="label-uppercase text-[0.58rem] tracking-[0.22em] text-foreground/60 mb-3">
                      {detail.title}
                    </h3>

                    {/* Accent line */}
                    <div className="h-px w-6 bg-accent-decorative/20 mb-4 transition-all duration-500 group-hover:w-10 group-hover:bg-accent-decorative/40" />

                    {/* Content */}
                    {detail.title === "Email" ? (
                      <a
                        href={`mailto:${detail.content}`}
                        className="footer-link body-text text-xs sm:text-sm text-muted-foreground/70 hover:text-accent-decorative transition-colors duration-500 inline-block py-1 break-all sm:break-normal"
                      >
                        {detail.content}
                      </a>
                    ) : detail.title === "Telephone" ? (
                      <a
                        href={`tel:${detail.content.replace(/\s/g, "")}`}
                        className="body-text text-sm text-muted-foreground/70 hover:text-accent-decorative transition-colors duration-500 inline-block py-1"
                      >
                        {detail.content}
                      </a>
                    ) : (
                      <p className="body-text text-sm text-muted-foreground/70 whitespace-pre-line leading-relaxed">
                        {detail.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          Contact Categories
          ═══════════════════════════════════════════════════════ */}
      <section
        ref={categoriesRef}
        className="py-20 sm:py-24 lg:py-32 bg-surface-warm"
      >
        <Container>
          {/* Section header */}
          <div className="text-center mb-14 sm:mb-18 lg:mb-20">
            <p
              className={`label-uppercase text-accent-decorative tracking-[0.25em] mb-5 transition-all duration-[900ms] ease-out ${animIn(categoriesVisible)}`}
              style={delay(100)}
            >
              Enquiries
            </p>
            <h2
              className={`heading-display text-[1.65rem] sm:text-3xl lg:text-[2.25rem] text-foreground leading-[1.2] mb-7 transition-all duration-[900ms] ease-out ${animIn(categoriesVisible)}`}
              style={delay(250)}
            >
              How Can We Help?
            </h2>
            <div
              className={`h-px bg-accent-decorative/30 mx-auto transition-all duration-[1.2s] ease-out ${
                categoriesVisible ? "w-14 opacity-100" : "w-0 opacity-0"
              }`}
              style={delay(400)}
            />
          </div>

          {/* Category cards */}
          <div className="grid lg:grid-cols-3 gap-0">
            {contactCategories.map((category, i) => (
              <div
                key={category.title}
                className={`group relative text-center px-6 sm:px-8 lg:px-12 py-12 md:py-14 lg:py-16 transition-all duration-[900ms] ease-out ${animIn(categoriesVisible)} ${
                  i < contactCategories.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-accent-decorative/15"
                    : ""
                }`}
                style={delay(450 + i * 150)}
              >
                {/* Decorative number */}
                <span className="heading-display text-5xl lg:text-6xl text-accent-decorative/[0.08] leading-none select-none block mb-5 transition-colors duration-700 group-hover:text-accent-decorative/[0.16]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Separator */}
                <div className="w-8 h-px bg-accent-decorative/25 mx-auto mb-6 transition-all duration-500 group-hover:w-12 group-hover:bg-accent-decorative/45" />

                {/* Title */}
                <h3 className="heading-section text-lg lg:text-xl text-foreground mb-5 tracking-wide">
                  {category.title}
                </h3>

                {/* Email */}
                <Link
                  href={`mailto:${category.email}`}
                  className="footer-link inline-block body-text text-xs sm:text-sm text-accent-decorative/70 hover:text-accent-decorative transition-colors duration-500 mb-3 break-all sm:break-normal"
                >
                  {category.email}
                </Link>

                {/* Phone */}
                {category.phone && (
                  <Link
                    href={`tel:${category.phone.replace(/\s/g, "")}`}
                    className="block body-text text-sm text-muted-foreground/50 hover:text-accent-decorative transition-colors duration-500 mt-1.5 py-1"
                  >
                    {category.phone}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          Map Section (unchanged)
          ═══════════════════════════════════════════════════════ */}
      <section ref={mapRef}>
        {/* Label bar above map */}
        <div className="border-t border-border/15 py-6 sm:py-8 md:py-10 lg:py-12">
          <Container>
            <div
              className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 transition-all duration-700 ease-out ${animIn(mapVisible)}`}
              style={delay(100)}
            >
              <div>
                <p className="label-uppercase text-[0.55rem] sm:text-[0.6rem] tracking-[0.25em] text-accent-decorative mb-1.5 sm:mb-2">
                  Visit Our Studio
                </p>
                <p className="heading-display text-lg sm:text-xl md:text-[1.375rem] lg:text-2xl text-foreground">
                  Thane, Maharashtra
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Thane,+Maharashtra/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 sm:gap-2.5 self-start sm:self-auto sm:pb-0.5"
              >
                <span className="h-px w-4 sm:w-5 bg-accent-decorative/30 transition-all duration-500 group-hover:w-7 sm:group-hover:w-8 group-hover:bg-accent-decorative/60" />
                <span className="label-uppercase text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-foreground/40 group-hover:text-accent-decorative transition-colors duration-500">
                  Get Directions
                </span>
                <svg
                  className="w-3 h-3 text-foreground/25 group-hover:text-accent-decorative group-hover:translate-x-0.5 transition-all duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            </div>
          </Container>
        </div>

        {/* Map embed */}
        <div
          className={`relative h-[240px] sm:h-[320px] md:h-[380px] lg:h-[440px] transition-all duration-1000 ease-out ${
            mapVisible ? "opacity-100" : "opacity-0"
          }`}
          style={delay(300)}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120561.14496345288!2d72.9947325!3d19.21546785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0xcf367d85f7c50283!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1774546520652!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Studio Location — Thane, Maharashtra"
          />
        </div>
      </section>
    </>
  )
}
