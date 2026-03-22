"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { navigationLinks, socialLinks } from "@/data/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const [menuHeight, setMenuHeight] = useState(0)

  useEffect(() => {
    if (navRef.current) {
      setMenuHeight(navRef.current.scrollHeight)
    }
  }, [isMenuOpen])

  // Lock body scroll and stop Lenis when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
      window.__lenis?.stop()
    } else {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      window.__lenis?.start()
    }
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      window.__lenis?.start()
    }
  }, [isMenuOpen])

  const navItemCount = navigationLinks.length
  const contactBaseDelay = 150 + navItemCount * 50

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm">
      {/* Desktop: lg and above — editorial layout */}
      <div className="hidden lg:block">
        <div className="max-w-350 mx-auto px-12 pt-6">
          {/* Decorative line above content — extends beyond padding */}
          <div className="h-px bg-border -mx-8" />

          <div className="grid grid-cols-12 items-end pt-5 pb-6">
            {/* Logo — left */}
            <div className="col-span-3">
              <Link href="/" className="inline-block">
                <h1 className="font-serif text-xl lg:text-2xl text-foreground leading-none">
                  ISketch
                </h1>
              </Link>
            </div>

            {/* Navigation — right, aligned to baseline */}
            <nav className="col-span-9 flex items-center justify-end gap-8 xl:gap-10">
              {navigationLinks.map((link) => (
                <Link
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  className="nav-link-hover label-uppercase text-[0.625rem] xl:text-[0.6875rem] tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet: below lg */}
      <div className="lg:hidden border-b border-border/50">
        <div className="max-w-350 mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <h1 className="font-serif text-xl font-semibold tracking-[0.15em] text-foreground">
                ISketch
              </h1>
            </Link>

            {/* Mobile Menu Button — animated hamburger/cross */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-foreground w-10 h-10"
              aria-label="Toggle menu"
            >
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-6 h-6"
              >
                {/* Top bar */}
                <span
                  className="absolute h-0.5 w-5 bg-current transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]"
                  style={{
                    transform: isMenuOpen
                      ? "translateY(0) rotate(45deg)"
                      : "translateY(-4px) rotate(0deg)",
                  }}
                />
                {/* Middle bar */}
                <span
                  className="absolute h-0.5 w-5 bg-current transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]"
                  style={{
                    opacity: isMenuOpen ? 0 : 1,
                    transform: isMenuOpen ? "scaleX(0)" : "scaleX(1)",
                  }}
                />
                {/* Bottom bar */}
                <span
                  className="absolute h-0.5 w-5 bg-current transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]"
                  style={{
                    transform: isMenuOpen
                      ? "translateY(0) rotate(-45deg)"
                      : "translateY(4px) rotate(0deg)",
                  }}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation — smooth height animation */}
        <div
          ref={navRef}
          className="bg-background overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]"
          style={{
            height: isMenuOpen ? menuHeight : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <div className="px-6 py-8 border-t border-border">
            {/* Navigation links — stacked on mobile */}
            <nav className="flex flex-col gap-6 md:hidden">
              {navigationLinks.map((link, index) => (
                <Link
                  key={`mobile-${link.label}-${link.href}`}
                  href={link.href}
                  className="label-uppercase text-sm text-foreground hover:text-accent transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)]"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "translateY(0px)"
                      : "translateY(12px)",
                    transitionDelay: isMenuOpen ? `${150 + index * 50}ms` : "0ms",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Tablet (md to lg): nav links in a horizontal row */}
            <nav className="hidden md:flex flex-wrap gap-x-8 gap-y-4">
              {navigationLinks.map((link, index) => (
                <Link
                  key={`tablet-${link.label}-${link.href}`}
                  href={link.href}
                  className="label-uppercase text-sm text-foreground hover:text-accent transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)]"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "translateY(0px)"
                      : "translateY(12px)",
                    transitionDelay: isMenuOpen ? `${150 + index * 50}ms` : "0ms",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact & Connect — below lg */}
            <div
              className="mt-8 pt-6 border-t border-border/50"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0px)" : "translateY(12px)",
                transitionDelay: isMenuOpen ? `${contactBaseDelay}ms` : "0ms",
                transition: "all 400ms cubic-bezier(0.77, 0, 0.18, 1)",
              }}
            >
              <div className="grid grid-cols-2 gap-8">
                {/* Contact */}
                <div>
                  <h4 className="label-uppercase text-foreground/50 mb-4 text-[0.625rem] tracking-[0.2em]">
                    Contact
                  </h4>
                  <address className="font-sans text-sm text-foreground/60 not-italic space-y-1.5">
                    <p>Thane, 321301,</p>
                    <p>Maharashtra, India.</p>
                    <Link
                      href="tel:+918433509521"
                      className="inline-block text-foreground/60 hover:text-accent mt-2 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      +91 84335 09521
                    </Link>
                  </address>
                </div>

                {/* Connect */}
                <div>
                  <h4 className="label-uppercase text-foreground/50 mb-4 text-[0.625rem] tracking-[0.2em]">
                    Connect
                  </h4>
                  <nav className="flex items-center gap-4">
                    <Link
                      href={socialLinks.find((l) => l.label === "Instagram")?.href ?? "#"}
                      className="text-foreground/60 hover:text-accent transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Instagram"
                    >
                      <Instagram size={20} strokeWidth={1.5} />
                    </Link>
                    <Link
                      href={socialLinks.find((l) => l.label === "Facebook")?.href ?? "#"}
                      className="text-foreground/60 hover:text-accent transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Facebook"
                    >
                      <Facebook size={20} strokeWidth={1.5} />
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>

    {/* Backdrop overlay — blur background content */}
    <div
      className="fixed inset-0 bg-background/2 backdrop-blur-xl z-40 lg:hidden transition-opacity duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]"
      style={{
        opacity: isMenuOpen ? 1 : 0,
        pointerEvents: isMenuOpen ? "auto" : "none",
      }}
      onClick={() => setIsMenuOpen(false)}
    />
    </>
  )
}
