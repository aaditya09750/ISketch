"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { footerLinks, socialLinks } from "@/data/navigation"
import IsketchLogo from "@/components/shared/isketch-logo"

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative bg-surface-dark text-surface-dark-foreground overflow-hidden"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-accent-decorative/30 to-transparent" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 pt-14 md:pt-18 lg:pt-22 pb-8 md:pb-10">
        {/* ── Main: Logo left, Nav right ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20 pb-12 md:pb-16 lg:pb-18">
          {/* Brand */}
          <div className="shrink-0">
            <IsketchLogo className="h-14 md:h-18 lg:h-22 w-auto" />
            <p
              className={`${isVisible ? "animate-fade-up" : "opacity-0"} font-serif text-xs md:text-sm tracking-[0.03em] text-surface-dark-foreground/80 mt-4 max-w-50`}
            >
              Crafting timeless interiors with intention
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8 sm:gap-x-12 lg:gap-x-16">
            {/* Explore */}
            <div>
              <h3 className="label-uppercase select-none text-surface-dark-foreground/90 font-medium mb-4 md:mb-5">
                Explore
              </h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="footer-link font-sans text-[13px] text-surface-dark-foreground/80 font-medium hover:text-accent-light w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3 className="label-uppercase select-none text-surface-dark-foreground/90 font-medium mb-4 md:mb-5">
                Connect
              </h3>
              <nav className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link font-sans text-[13px] text-surface-dark-foreground/80 font-medium hover:text-accent-light w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="label-uppercase select-none text-surface-dark-foreground/90 font-medium mb-4 md:mb-5">
                Contact
              </h3>
              <address className="font-sans text-[13px] text-surface-dark-foreground/85 font-medium not-italic flex flex-col gap-2">
                <p className="leading-relaxed">
                  The Courtyard, Asteria A/604,
                  <br />
                  Pokhran road no. 2, Thane west
                  <br />
                  Maharashtra, India.
                </p>
                <Link
                  href="tel:+919967312203"
                  className="footer-link text-surface-dark-foreground/85 hover:text-accent-light w-fit"
                >
                  +91 99673 12203
                </Link>
                <Link
                  href="tel:+919892515655"
                  className="footer-link text-surface-dark-foreground/85 hover:text-accent-light w-fit"
                >
                  +91 98925 15655
                </Link>
              </address>
            </div>
          </div>
        </div>

        {/* ── Bottom ── */}
        <div className="border-t border-surface-dark-foreground/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-sans text-[11px] text-surface-dark-foreground/50 tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} I Sketch Interiors. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="footer-link font-sans text-[11px] text-surface-dark-foreground/50 hover:text-surface-dark-foreground/75 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="footer-link font-sans text-[11px] text-surface-dark-foreground/50 hover:text-surface-dark-foreground/75 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="hidden sm:inline text-surface-dark-foreground/25 text-xs">•</span>
            <a
              href="https://aadityag975pf.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[9px] tracking-[0.15em] text-surface-dark-foreground/50 uppercase select-none hover:text-surface-dark-foreground/80 transition-colors"
            >
              Developed by Aaditya Gunjal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
