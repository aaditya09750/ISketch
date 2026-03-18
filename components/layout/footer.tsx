import Link from "next/link"
import { footerLinks, socialLinks } from "@/data/navigation"

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 bg-[#2c2c2c] text-[#f8f6f3]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.15em] font-semibold mb-3">
              iSketch
            </h3>
            <p className="label-uppercase text-[10px] text-[#f8f6f3]/50">
              Interiors
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-uppercase text-[#f8f6f3]/70 mb-6">
              Explore
            </h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-[#f8f6f3]/60 hover:text-[#f8f6f3] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="label-uppercase text-[#f8f6f3]/70 mb-6">
              Connect
            </h4>
            <nav className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-[#f8f6f3]/60 hover:text-[#f8f6f3] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-uppercase text-[#f8f6f3]/70 mb-6">
              Contact
            </h4>
            <address className="font-sans text-sm text-[#f8f6f3]/60 not-italic leading-relaxed">
              London & Surrey<br />
              United Kingdom<br />
              <Link href="tel:+442071234567" className="hover:text-[#f8f6f3] transition-colors">
                +44 (0)20 7123 4567
              </Link>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f8f6f3]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-[#f8f6f3]/40">
            &copy; {new Date().getFullYear()} I Sketch Interiors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-sans text-xs text-[#f8f6f3]/40 hover:text-[#f8f6f3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-sans text-xs text-[#f8f6f3]/40 hover:text-[#f8f6f3] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
