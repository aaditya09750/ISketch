"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { PageHeading } from "@/components/ui/page-heading"
import { Container } from "@/components/ui/container"
import { contactDetails, projectTypes, budgetRanges, type SelectOption } from "@/data/contact"
import { socialLinks } from "@/data/navigation"
import { ChevronDown } from "lucide-react"

/* ═══════════════════════════════════════════════════════════
   Custom Select — replaces native <select> with styled dropdown
   ═══════════════════════════════════════════════════════════ */

function CustomSelect({
  id,
  options,
  value,
  onChange,
  onOpen,
  onClose,
}: {
  id: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  onOpen?: () => void
  onClose?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const selectedLabel = options.find((o) => o.value === value)?.label
  const placeholder = options[0]?.label ?? ""

  const open = useCallback(() => {
    setIsOpen(true)
    onOpen?.()
  }, [onOpen])

  const close = useCallback(() => {
    setIsOpen(false)
    onClose?.()
  }, [onClose])

  const select = useCallback(
    (val: string) => {
      onChange(val)
      close()
    },
    [onChange, close]
  )

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [isOpen, close])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [isOpen, close])

  return (
    <div ref={containerRef} className="relative" style={{ zIndex: isOpen ? 50 : "auto" }}>
      {/* Trigger */}
      <button
        type="button"
        id={id}
        onClick={() => (isOpen ? close() : open())}
        className={`w-full text-left px-0 py-3.5 bg-transparent border-0 border-b font-sans text-sm leading-relaxed focus:outline-none transition-colors duration-500 cursor-pointer flex items-center justify-between ${
          isOpen ? "border-accent-decorative" : "border-border/50"
        }`}
      >
        <span className={value ? "text-foreground" : "text-muted-foreground/25"}>
          {value ? selectedLabel : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground/30 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 9999,
            left: 0,
            right: 0,
            top: "100%",
            marginTop: 4,
            backgroundColor: "#FFFFFF",
            border: "1px solid #CBB799",
            boxShadow: "0 10px 30px rgba(61, 33, 26, 0.12)",
            overflow: "hidden",
          }}
        >
          <div className="scrollbar-hide" style={{ maxHeight: 220, overflowY: "auto", backgroundColor: "#FFFFFF" }}>
            {options.map((opt, i) => {
              if (i === 0 && !opt.value) return null
              const isSelected = opt.value === value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => select(opt.value)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 20px",
                    fontSize: 14,
                    fontFamily: "var(--font-sans)",
                    border: "none",
                    cursor: "pointer",
                    color: isSelected ? "#A07856" : "#3D211A",
                    backgroundColor: isSelected ? "#F8F5F0" : "#FFFFFF",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F8F5F0" }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isSelected ? "#F8F5F0" : "#FFFFFF" }}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Contact Page
   ═══════════════════════════════════════════════════════════ */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  /* ── Scroll-triggered visibility ── */
  const infoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLElement>(null)
  const [infoVisible, setInfoVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [mapVisible, setMapVisible] = useState(false)

  useEffect(() => {
    const observe = (
      ref: React.RefObject<HTMLElement | null>,
      setter: (v: boolean) => void
    ) => {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setter(true); obs.disconnect() } },
        { threshold: 0.08 }
      )
      if (ref.current) obs.observe(ref.current)
      return obs
    }
    const o1 = observe(infoRef, setInfoVisible)
    const o2 = observe(formRef, setFormVisible)
    const o3 = observe(mapRef, setMapVisible)
    return () => { o1.disconnect(); o2.disconnect(); o3.disconnect() }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  /* ── Shared style tokens ── */
  const inputBase =
    "w-full px-0 py-3.5 bg-transparent border-0 border-b border-border/50 text-foreground font-sans text-sm leading-relaxed focus:outline-none focus:border-accent-decorative transition-colors duration-500 placeholder:text-muted-foreground/25"

  const labelBase = (field: string) =>
    `block label-uppercase text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] mb-3 transition-colors duration-400 ${
      focusedField === field ? "text-accent-decorative" : "text-foreground/50"
    }`

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

      {/* ═══ Contact Details & Form ═══ */}
      <section className="pb-20 sm:pb-28 lg:pb-36">
        <Container>
          <div className="grid lg:grid-cols-5 gap-14 lg:gap-20 xl:gap-28">

            {/* ─── Left column: Contact Info ─── */}
            <div ref={infoRef} className="lg:col-span-2">
              <h2
                className={`heading-section text-xl sm:text-2xl text-foreground mb-10 sm:mb-12 transition-all duration-700 ease-out ${animIn(infoVisible)}`}
                style={delay(100)}
              >
                Contact Information
              </h2>

              <div className="space-y-0">
                {contactDetails.map((detail, i) => (
                  <div
                    key={detail.title}
                    className={`group flex gap-5 py-7 border-b border-border/25 first:pt-0 last:border-b-0 transition-all duration-700 ease-out ${animIn(infoVisible)}`}
                    style={delay(200 + i * 120)}
                  >
                    <div className="w-9 h-9 rounded-full border border-border/30 flex items-center justify-center flex-shrink-0 group-hover:border-accent-decorative/50 transition-colors duration-500">
                      <detail.icon className="w-3.5 h-3.5 text-accent-decorative/60 group-hover:text-accent-decorative transition-colors duration-500" />
                    </div>
                    <div className="pt-1">
                      <h3 className="label-uppercase text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] text-foreground/70 mb-2.5">
                        {detail.title}
                      </h3>
                      <p className="body-text text-sm text-muted-foreground/65 whitespace-pre-line leading-relaxed">
                        {detail.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div
                className={`mt-10 pt-8 border-t border-border/25 transition-all duration-700 ease-out ${animIn(infoVisible)}`}
                style={delay(750)}
              >
                <h3 className="label-uppercase text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] text-foreground/70 mb-5">
                  Follow Us
                </h3>
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

            {/* ─── Right column: Enquiry Form ─── */}
            <div ref={formRef} className="lg:col-span-3">
              <h2
                className={`heading-section text-xl sm:text-2xl text-foreground mb-10 sm:mb-12 transition-all duration-700 ease-out ${animIn(formVisible)}`}
                style={delay(100)}
              >
                Enquiry Form
              </h2>

              <form onSubmit={handleSubmit}>
                {/* Row 1 — Name + Email */}
                <div
                  className={`grid md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 mb-8 transition-all duration-700 ease-out ${animIn(formVisible)}`}
                  style={delay(200)}
                >
                  <div>
                    <label htmlFor="name" className={labelBase("name")}>
                      Full Name <span className="text-accent-decorative/50">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={inputBase}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelBase("email")}>
                      Email Address <span className="text-accent-decorative/50">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={inputBase}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Row 2 — Phone + Project Type */}
                <div
                  className={`relative grid md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 mb-8 transition-all duration-700 ease-out ${animIn(formVisible)}`}
                  style={{ ...delay(350), zIndex: focusedField === "projectType" ? 40 : 1 }}
                >
                  <div>
                    <label htmlFor="phone" className={labelBase("phone")}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={inputBase}
                      placeholder="+44 (0)20 1234 5678"
                    />
                  </div>
                  <div>
                    <label className={labelBase("projectType")}>
                      Project Type
                    </label>
                    <CustomSelect
                      id="projectType"
                      options={projectTypes}
                      value={formData.projectType}
                      onChange={(val) => setFormData((p) => ({ ...p, projectType: val }))}
                      onOpen={() => setFocusedField("projectType")}
                      onClose={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Row 3 — Budget */}
                <div
                  className={`relative mb-8 transition-all duration-700 ease-out ${animIn(formVisible)}`}
                  style={{ ...delay(500), zIndex: focusedField === "budget" ? 40 : 1 }}
                >
                  <label className={labelBase("budget")}>
                    Approximate Budget
                  </label>
                  <CustomSelect
                    id="budget"
                    options={budgetRanges}
                    value={formData.budget}
                    onChange={(val) => setFormData((p) => ({ ...p, budget: val }))}
                    onOpen={() => setFocusedField("budget")}
                    onClose={() => setFocusedField(null)}
                  />
                </div>

                {/* Row 4 — Message */}
                <div
                  className={`mb-10 sm:mb-12 transition-all duration-700 ease-out ${animIn(formVisible)}`}
                  style={delay(650)}
                >
                  <label htmlFor="message" className={labelBase("message")}>
                    Project Details <span className="text-accent-decorative/50">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputBase} resize-none`}
                    placeholder="Tell us about your project, including location, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit */}
                <div
                  className={`transition-all duration-700 ease-out ${animIn(formVisible)}`}
                  style={delay(800)}
                >
                  <button
                    type="submit"
                    className="group relative label-uppercase tracking-[0.2em] text-[0.65rem] px-12 sm:px-14 py-4.5 sm:py-5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500 ease-out cursor-pointer"
                  >
                    Send Enquiry
                    <span className="absolute bottom-3.5 sm:bottom-4 left-1/2 -translate-x-1/2 h-px w-0 bg-background/30 transition-all duration-500 ease-out group-hover:w-[calc(100%-3rem)]" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </Container>
      </section>

      {/* ═══ Map Section ═══ */}
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
                <svg className="w-3 h-3 text-foreground/25 group-hover:text-accent-decorative group-hover:translate-x-0.5 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
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
