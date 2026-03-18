"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { navigationLinks } from "@/data/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-serif text-xl lg:text-2xl font-semibold tracking-[0.15em] text-foreground">
              iSketch
            </h1>
            <p className="label-uppercase text-[9px] text-muted-foreground mt-0.5">
              Interiors
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigationLinks.map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="label-uppercase text-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
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
    </header>
  )
}
