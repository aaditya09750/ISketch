import Link from "next/link"
import { footerLinks, socialLinks } from "@/data/navigation"

export function Footer() {
  return (
    <footer className="relative bg-surface-dark text-surface-dark-foreground overflow-hidden">
      {/* Subtle top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-decorative/30 to-transparent" />

      {/* Main Content */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 pt-14 md:pt-18 lg:pt-23 pb-8 md:pb-16 lg:pb-10">

        {/* Top: Brand + Nav Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-12 lg:mb-13">

          {/* Brand Column — full width on mobile/tablet, then col-span-3 */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-2xl md:text-3xl tracking-[0.12em] text-surface-dark-foreground mb-1.5">
              ISketch
            </h3>
            <p className="animate-fade-up font-serif text-xs lg:text-sm tracking-[0.03em] text-surface-dark-foreground/70">
              Crafting timeless interiors with intention
            </p>
          </div>

          {/* Nav Sections — 3-col row on tablet, integrated into 12-col on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:contents">

            {/* Quick Links */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="label-uppercase text-surface-dark-foreground/80 mb-5 md:mb-6 lg:mb-8">
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
              <h3 className="label-uppercase text-surface-dark-foreground/80 mb-5 md:mb-6 lg:mb-8">
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
              <h3 className="label-uppercase text-surface-dark-foreground/80 mb-5 md:mb-6 lg:mb-8">
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
          {/* Row 1: Legal links — justified to edges */}
          <div className="flex justify-between w-full">
            <Link href="#" className="footer-link font-sans text-[10px] md:text-xs text-surface-dark-foreground/45 hover:text-surface-dark-foreground/65 w-fit">
              Privacy Policy
            </Link>
            <Link href="#" className="footer-link font-sans text-[10px] md:text-xs text-surface-dark-foreground/45 hover:text-surface-dark-foreground/65 w-fit">
              Terms & Conditions
            </Link>
          </div>

          {/* Row 2: Copyright + Developer credit */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
            <p className="font-sans text-[10px] md:text-xs text-surface-dark-foreground/45 tracking-wide">
              &copy; {new Date().getFullYear()} I Sketch Interiors. All rights reserved.
            </p>
            <p className="font-sans text-[9px] tracking-[0.15em] text-surface-dark-foreground/45 uppercase select-none">
              Developed by Aaditya Gunjal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
