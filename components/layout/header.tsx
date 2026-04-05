"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { navigationLinks, socialLinks } from "@/data/navigation"
import IsketchLogo from "@/components/common/isketch-logo"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const [menuHeight, setMenuHeight] = useState(0)

  // Scroll-aware header: hide on scroll down, show on scroll up
  const [headerVisible, setHeaderVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const lastScrollY = useRef(0)
  const scrollThreshold = 8

  // Hide header when lightbox is open
  useEffect(() => {
    const onOpen = () => setLightboxOpen(true)
    const onClose = () => setLightboxOpen(false)
    window.addEventListener("lightbox-open", onOpen)
    window.addEventListener("lightbox-close", onClose)
    return () => {
      window.removeEventListener("lightbox-open", onOpen)
      window.removeEventListener("lightbox-close", onClose)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current

      setScrolled(currentY > 20)

      // Don't hide when menu is open
      if (!isMenuOpen) {
        if (delta > scrollThreshold && currentY > 80) {
          setHeaderVisible(false)
        } else if (delta < -scrollThreshold || currentY < 80) {
          setHeaderVisible(true)
        }
      }

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActiveLink = useCallback(
    (href: string) => {
      if (href === "/" || href === "/#") return pathname === "/"
      return pathname.startsWith(href.replace("/#", "").replace("#", ""))
    },
    [pathname]
  )

  const navItemCount = navigationLinks.length
  const contactBaseDelay = 150 + navItemCount * 50

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]",
          headerVisible && !lightboxOpen ? "translate-y-0" : "-translate-y-full",
          scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
        )}
      >
        {/* Desktop: lg and above — editorial layout */}
        <div className="hidden lg:block">
          <div className="max-w-350 mx-auto px-12 pt-6">
            {/* Decorative line above content — extends beyond padding */}
            <div className="h-px bg-border -mx-8" />

            <div className="grid grid-cols-12 items-center h-14">
              {/* Logo — left */}
              <div className="col-span-3 overflow-hidden h-full flex items-center">
                <Link href="/" className="inline-block text-foreground">
                  <IsketchLogo className="h-15 lg:h-10 w-auto" />
                </Link>
              </div>

              {/* Navigation — right, aligned to baseline */}
              <nav className="col-span-9 flex items-center justify-end gap-8 xl:gap-10">
                {navigationLinks.map((link) => (
                  <Link
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    className={cn(
                      "group relative label-uppercase text-[0.625rem] xl:text-[0.6875rem] tracking-[0.2em] transition-colors duration-300 pb-1",
                      isActiveLink(link.href)
                        ? "text-accent"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-[calc(100%+12px)] bg-current opacity-0 scale-x-0 group-hover:opacity-30 group-hover:scale-x-100 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] origin-center" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: below lg */}
        <div className="lg:hidden border-b border-border/50">
          <div className="max-w-350 mx-auto px-6">
            <div className="flex items-center justify-between h-16 sm:h-20 overflow-hidden">
              {/* Logo */}
              <Link href="/" className="shrink-0 text-foreground h-full flex items-center">
                <IsketchLogo className="h-10 sm:h-12 w-auto" />
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
                    className={cn(
                      "label-uppercase text-sm transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)]",
                      isActiveLink(link.href)
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    )}
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
                    className={cn(
                      "label-uppercase text-sm transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)]",
                      isActiveLink(link.href)
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    )}
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
                      <p className="leading-relaxed">
                        The Courtyard, Asteria A/604,
                        <br />
                        Pokhran road no. 2, Thane west
                        <br />
                        Maharashtra, India.
                      </p>
                      <Link
                        href="tel:+919967312203"
                        className="inline-block text-foreground/60 hover:text-accent mt-2 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        +91 99673 12203
                      </Link>
                      <Link
                        href="tel:+919892515655"
                        className="inline-block text-foreground/60 hover:text-accent transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        +91 98925 15655
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
