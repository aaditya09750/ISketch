"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { footerLinks, socialLinks } from "@/data/navigation"
import IsketchLogo from "@/components/common/isketch-logo"

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
      { threshold: 0.1 }
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="relative bg-surface-dark text-surface-dark-foreground overflow-hidden">
      {/* Subtle top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-decorative/30 to-transparent" />

      {/* Main Content */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 pt-14 md:pt-18 lg:pt-23 pb-8 md:pb-16 lg:pb-10">

        {/* Top: Brand + Nav Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-12 lg:mb-13">

          {/* Brand Column — full width on mobile/tablet, then col-span-3 */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 lg:gap-5 text-surface-dark-foreground">
              <div className="h-10 sm:h-12 lg:h-14 flex items-center overflow-visible shrink-0">
                <IsketchLogo className="h-15 lg:h-20 xl:h-25 w-auto" />
              </div>
              <p className={`${isVisible ? "animate-fade-up" : "opacity-0"} font-serif text-xs lg:text-base tracking-[0.03em] text-surface-dark-foreground/70`}>
                Crafting timeless interiors with intention
              </p>
            </div>
          </div>

          {/* Nav Sections — 3-col row on tablet, integrated into 12-col on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:contents">

            {/* Quick Links */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="label-uppercase select-none text-surface-dark-foreground/80 mb-5 md:mb-6 lg:mb-8">
                Explore
              </h3>
              <nav className="flex flex-col gap-2.5 md:gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="footer-link font-sans text-sm text-surface-dark-foreground/60 hover:text-accent-light w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="lg:col-span-2">
              <h3 className="label-uppercase select-none text-surface-dark-foreground/80 mb-5 md:mb-6 lg:mb-8">
                Connect
              </h3>
              <nav className="flex flex-col gap-2.5 md:gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="footer-link font-sans text-sm text-surface-dark-foreground/60 hover:text-accent-light w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <h3 className="label-uppercase select-none text-surface-dark-foreground/80 mb-5 md:mb-6 lg:mb-8">
                Contact
              </h3>
              <address className="font-sans text-sm text-surface-dark-foreground/60 not-italic space-y-1.5">
                <p>Thane, 321301, Maharashtra, India.</p>
                <Link
                  href="tel:+918433509521"
                  className="footer-link inline-block text-surface-dark-foreground/60 hover:text-accent-light mt-2 w-fit"
                >
                  +91 84335 09521
                </Link>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-dark-foreground/10 pt-5 md:pt-5 flex flex-col gap-4">
          {/* Row 1: Copyright (left) + Legal links (right) */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
            <p className="font-sans text-[10px] md:text-xs text-surface-dark-foreground/45 tracking-wide">
              &copy; {new Date().getFullYear()} I Sketch Interiors. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="#" className="footer-link font-sans text-[10px] md:text-xs text-surface-dark-foreground/45 hover:text-surface-dark-foreground/65">
                Privacy Policy
              </Link>
              <Link href="#" className="footer-link font-sans text-[10px] md:text-xs text-surface-dark-foreground/45 hover:text-surface-dark-foreground/65">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Row 2: Developer credits */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
            <a href="https://digitalmarketing1722501367.website3.me/" target="_blank" rel="noopener noreferrer" className="font-sans text-[9px] tracking-[0.15em] text-surface-dark-foreground/45 uppercase select-none hover:text-surface-dark-foreground/70 transition-colors">
              Start with Digital
            </a>
            <a href="https://aadityag975pf.netlify.app/" target="_blank" rel="noopener noreferrer" className="font-sans text-[9px] tracking-[0.15em] text-surface-dark-foreground/45 uppercase select-none hover:text-surface-dark-foreground/70 transition-colors">
              Developed by Aaditya Gunjal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
