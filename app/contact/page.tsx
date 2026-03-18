"use client"

import { useState } from "react"
import { PageHeading } from "@/components/ui/page-heading"
import { Container } from "@/components/ui/container"
import { contactDetails, projectTypes, budgetRanges } from "@/data/contact"
import { socialLinks } from "@/data/navigation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <PageHeading
        label="Get in Touch"
        title="Contact"
        description="We would love to hear about your project. Please get in touch to arrange an initial consultation and discover how we can help bring your vision to life."
      />

      {/* Contact Details & Form */}
      <section className="pb-24 lg:pb-36">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="heading-section text-2xl text-foreground mb-10">
                Contact Information
              </h2>

              <div className="space-y-10">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex gap-5">
                    <detail.icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="label-uppercase text-foreground mb-3">
                        {detail.title}
                      </h3>
                      <p className="body-text text-muted-foreground whitespace-pre-line">
                        {detail.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-10 border-t border-border">
                <h3 className="label-uppercase text-foreground mb-5">
                  Follow Us
                </h3>
                <div className="flex gap-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="label-uppercase text-[10px] text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="heading-section text-2xl text-foreground mb-10">
                Enquiry Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block label-uppercase text-foreground mb-4">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-transparent border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block label-uppercase text-foreground mb-4">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-transparent border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block label-uppercase text-foreground mb-4">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-transparent border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="+44 (0)20 1234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block label-uppercase text-foreground mb-4">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-transparent border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                    >
                      {projectTypes.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block label-uppercase text-foreground mb-4">
                    Approximate Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-transparent border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                  >
                    {budgetRanges.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block label-uppercase text-foreground mb-4">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-transparent border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project, including location, timeline, and any specific requirements..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="label-uppercase px-14 py-5 bg-foreground text-background hover:bg-accent transition-colors duration-300"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="h-[400px] lg:h-[500px] bg-muted">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-2xl text-foreground/70">
              Studio Location
            </p>
            <p className="label-uppercase text-muted-foreground mt-3">
              Kensington, London
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
