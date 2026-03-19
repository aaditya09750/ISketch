"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { navigationLinks } from "@/data/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-xs">
      {/* Desktop: lg and above — editorial layout */}
      <div className="hidden lg:block">
        {/* Top decorative line */}
        {/* <div className="max-w-[1400px] mx-auto px-12">
          <div className="h-px bg-border/60" />
        </div> */}

        <div className="max-w-[1400px] mx-auto px-12 pt-6">
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

      {/* Mobile / Tablet: below lg — unchanged */}
      <div className="lg:hidden border-b border-border/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="font-serif text-xl font-semibold tracking-[0.15em] text-foreground">
                ISketch
              </h1>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-background border-t border-border">
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={`mobile-${link.label}-${link.href}`}
                  href={link.href}
                  className="label-uppercase text-sm text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
