# ISketch - Luxury Interior Design Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.2.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38-FF0050?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Responsive](https://img.shields.io/badge/Design-Responsive-22C55E?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-Optimized-FF6B00?style=for-the-badge)

A production-grade, fully responsive luxury interior design studio portfolio built with Next.js 16 App Router, React 19 Server Components, Tailwind CSS v4, and Framer Motion — featuring cinematic hero video transitions, scroll-driven animations, full SEO with structured data, and a performance-first architecture.

**Author:** Aaditya Gunjal (Full Stack Developer)

---

## Core Features

- **Cinematic Hero Section:** Double-buffered video switching with seamless crossfade between four hero videos, rotating tagline animation via Framer Motion AnimatePresence, and a staggered fade-in content reveal.
- **Smooth Scrolling:** Lenis-powered smooth scroll with custom exponential easing, 1.2s duration, and touch multiplier — automatically disabled for `prefers-reduced-motion`.
- **Portfolio Showcase:** Nine luxury interior design projects with individual detail pages, challenge/solution narratives, staggered image galleries with lightbox viewer, and prev/next project navigation.
- **Image Reveal Animations:** Custom `useImageReady` hook combining IntersectionObserver viewport detection with `img.decode()` for buttery-smooth wipe-reveal transitions — no content flash.
- **Full-Screen Image Lightbox:** Touch/swipe support (vertical dismiss, horizontal navigate), keyboard navigation (Esc, Arrow keys), gallery dots, loading skeleton, and logo watermark overlay.
- **Scroll-Aware Header:** Auto-hides on scroll down (beyond 80px), reappears on scroll up, with RAF-throttled scroll handler and lightbox-aware visibility toggling.
- **Responsive Navigation:** Desktop editorial nav with hover underlines, mobile/tablet hamburger menu with animated icon morph (bars → X), staggered menu item entrance, and Lenis pause on menu open.
- **Structured Data (JSON-LD):** InteriorDesigner organization schema, WebSite schema, BreadcrumbList on subpages, Service schema (×4), and CreativeWork schema (×6) for rich search results.
- **Dynamic SEO:** Per-page metadata with `generateMetadata`, canonical URLs, Open Graph images, Twitter Cards, dynamic sitemap with 16 URLs, and robots.txt — all via Next.js Metadata API.
- **Services Process Section:** Scroll-driven horizontal carousel on desktop with Framer Motion `useScroll`/`useTransform`, vertical timeline with animated line fill on mobile.
- **Legal Pages:** Privacy Policy (8 sections) and Terms & Conditions (10 sections) with dual layout — desktop sticky sidebar TOC with active section tracking, mobile collapsible accordion.
- **Performance Optimized:** WOFF2 fonts, AVIF/WebP images, `content-visibility: auto` on below-fold sections, shared IntersectionObserver singleton, deferred video preloading, and 1-year immutable caching.
- **Dark Mode Ready:** CSS custom properties in oklch color space with full dark mode variable set.
- **Floating WhatsApp CTA:** Delayed-appearance WhatsApp button for instant client communication.
- **AI Search Ready:** `llms.txt` file for AI crawler guidance with structured business and service information.
- **Security Headers:** HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Permissions-Policy configured on all routes.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` across all animations — Lenis disabled, CSS animations suppressed.
- **Zero CMS Dependency:** All project, service, and contact data stored in typed static data files — update content by editing TypeScript, no database required.

---

## Technology Stack

### Core Framework & Runtime

| Technology | Version | Purpose |
| ---------- | ------- | ------- |
| Next.js | 16.1.6 | App Router, SSR/SSG, Image Optimization, Metadata API |
| React | 19.2.4 | UI Library with Server Components |
| TypeScript | 5.7.3 | Type Safety (strict mode) |
| Node.js | 22+ | Runtime |

### Styling & Animation

| Technology | Version | Purpose |
| ---------- | ------- | ------- |
| Tailwind CSS | 4.2.0 | Utility-first CSS (v4 engine with @tailwindcss/postcss) |
| Framer Motion | 12.38.0 | Declarative animations, AnimatePresence, scroll-driven motion |
| Lenis | 1.3.19 | Premium smooth scrolling with reduced-motion awareness |
| tw-animate-css | 1.3.3 | Animation utility classes |
| class-variance-authority | 0.7.1 | Component variant management |
| clsx | 2.1.1 | Conditional class composition |
| tailwind-merge | 3.3.1 | Intelligent Tailwind class merging |

### UI Components & Icons

| Technology | Version | Purpose |
| ---------- | ------- | ------- |
| shadcn/ui | Latest | Component system (new-york style, RSC enabled) |
| Lucide React | 0.564.0 | Icon library |
| Embla Carousel | 8.6.0 | Touch-friendly carousel for service images |

### Analytics & Monitoring

| Technology | Version | Purpose |
| ---------- | ------- | ------- |
| @vercel/analytics | 1.6.1 | Page view analytics |
| @vercel/speed-insights | 2.0.0 | Core Web Vitals monitoring |

### Package Manager

- **pnpm** (lockfile: `pnpm-lock.yaml`)

---

## Project Structure

```text
ISketch/
├── app/
│   ├── layout.tsx                          # Root layout — fonts, metadata, providers, JSON-LD
│   ├── globals.css                         # Tailwind v4 config, CSS variables, custom animations
│   ├── sitemap.ts                          # Dynamic XML sitemap (16 URLs)
│   ├── robots.ts                           # robots.txt configuration
│   ├── not-found.tsx                       # Custom 404 page with animations
│   │
│   ├── (marketing)/                        # Route group — main business pages
│   │   ├── page.tsx                        # Home — hero, about preview, projects, contact
│   │   ├── loading.tsx                     # Loading state for marketing pages
│   │   ├── error.tsx                       # Error boundary with retry
│   │   ├── _components/                    # Home-specific sections
│   │   │   ├── hero-section.tsx            # Double-buffered video hero + rotating tagline
│   │   │   ├── about-section.tsx           # Studio intro with image reveal
│   │   │   ├── projects-section.tsx        # Featured projects grid (server component)
│   │   │   ├── contact-section.tsx         # Email/phone CTA (server component)
│   │   │   └── featured-section.tsx        # Publications marquee
│   │   │
│   │   ├── about/
│   │   │   ├── page.tsx                    # About — story, team, approach, values
│   │   │   └── _components/               # 6 about-specific sections
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx                    # Services — hero, intro, details, process, fees
│   │   │   └── _components/               # 6 service-specific sections + carousel
│   │   │
│   │   ├── portfolio/
│   │   │   ├── page.tsx                    # Portfolio grid with lightbox
│   │   │   ├── _components/               # Grid + filter components
│   │   │   └── [slug]/
│   │   │       ├── page.tsx               # Dynamic project detail — SSG with generateStaticParams
│   │   │       └── _components/           # Project gallery
│   │   │
│   │   ├── projects/
│   │   │   ├── page.tsx                    # Projects — featured parallax + compact grid
│   │   │   └── _components/               # Projects content (client component)
│   │   │
│   │   └── contact/
│   │       ├── page.tsx                    # Contact — 4 info cards with staggered animations
│   │       └── _components/               # Contact content (client component)
│   │
│   └── (legal)/                            # Route group — legal pages (noindex)
│       ├── _components/                    # Shared legal page layout
│       ├── privacy-policy/page.tsx         # Privacy Policy — 8 sections
│       └── terms-conditions/page.tsx       # Terms & Conditions — 10 sections
│
├── components/
│   ├── shared/                             # Cross-page reusable components
│   │   ├── container.tsx                   # Max-width wrapper (1400px)
│   │   ├── fancy-button.tsx                # Decorative CTA button
│   │   ├── isketch-logo.tsx                # Inline SVG lettermark logo
│   │   ├── cta-section.tsx                 # Call-to-action (4 variants)
│   │   ├── page-heading.tsx                # Page hero heading with animations
│   │   ├── section-heading.tsx             # Section label + heading
│   │   ├── project-card.tsx                # Portfolio card with wipe-reveal
│   │   ├── image-lightbox.tsx              # Full-screen gallery viewer
│   │   ├── reveal-image.tsx                # Viewport-aware image reveal
│   │   └── structured-data.tsx             # JSON-LD script renderer
│   │
│   ├── layout/                             # App shell components
│   │   ├── layout-shell.tsx                # Root wrapper (Header + Footer + WhatsApp)
│   │   ├── header.tsx                      # Scroll-aware sticky header + mobile menu
│   │   ├── footer.tsx                      # Multi-column footer with animations
│   │   └── whatsapp-button.tsx             # Floating WhatsApp FAB
│   │
│   └── providers/                          # React context providers
│       ├── layout-context.tsx              # Header/Footer visibility context
│       └── smooth-scroll.tsx               # Lenis smooth scroll provider
│
├── hooks/
│   ├── use-image-ready.ts                  # IntersectionObserver + img.decode() + fallback
│   └── use-intersection.ts                 # Shared observer singleton (one per threshold)
│
├── lib/
│   ├── utils.ts                            # cn() — clsx + tailwind-merge
│   └── schema.ts                           # JSON-LD schema generators
│
├── types/
│   └── index.ts                            # Shared TypeScript type definitions
│
├── data/
│   ├── projects.ts                         # 9 portfolio projects with full detail objects
│   ├── services.ts                         # 4 services + 4-step design process
│   ├── about.ts                            # Values, awards, publications
│   ├── contact.ts                          # Studio contact info (NAP)
│   ├── navigation.ts                       # Nav links + social links
│   ├── legal.ts                            # Privacy policy + terms sections
│   └── index.ts                            # Barrel exports
│
├── public/
│   ├── images/                             # 15+ optimized project/hero/team images
│   ├── videos/                             # 4 hero videos + 4 reference videos
│   ├── fonts/                              # Iowan Old Style (WOFF2 + TTF, 6 variants)
│   ├── logos/                              # 15 brand logo variants (PNG, SVG, PDF)
│   ├── icon.svg                            # Favicon
│   └── llms.txt                            # AI search crawler guidance
│
├── package.json                            # Dependencies & scripts
├── tsconfig.json                           # TypeScript config (strict, @/* alias)
├── next.config.mjs                         # Image optimization, headers, caching
├── postcss.config.mjs                      # @tailwindcss/postcss plugin
├── components.json                         # shadcn/ui configuration
├── CLAUDE.md                               # AI development context
├── .env.example                            # Environment variable documentation
└── .gitignore                              # Git ignore rules
```

---

## Quick Start

### Prerequisites

- Node.js 22 or higher
- pnpm (recommended) or npm
- A modern web browser (Chrome, Edge, Firefox, Safari)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/isketch.git
   cd isketch
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open the app**

   ```text
   http://localhost:3000
   ```

### Production Build

```bash
pnpm build
pnpm start
```

### Available Scripts

| Script | Command | Purpose |
| ------ | ------- | ------- |
| `dev` | `pnpm dev` | Start development server with hot reload |
| `build` | `pnpm build` | Create optimized production build |
| `start` | `pnpm start` | Serve production build locally |
| `lint` | `pnpm lint` | Run ESLint checks |

---

## Site Routes

| Route | URL | Description |
| ----- | --- | ----------- |
| Home | `/` | Hero video, studio intro, featured projects, contact CTA |
| About | `/about` | Studio story, team, design approach, core values |
| Services | `/services` | 4 service offerings, design process, pricing framework |
| Portfolio | `/portfolio` | 9-project filterable grid with lightbox gallery |
| Project Detail | `/portfolio/[slug]` | Individual project page with challenge/solution narrative |
| Projects | `/projects` | Cinematic parallax showcase + compact grid |
| Contact | `/contact` | Address, phone, email, social links |
| Privacy Policy | `/privacy-policy` | 8-section privacy policy |
| Terms & Conditions | `/terms-conditions` | 10-section terms document |

**Dynamic Project Pages (SSG):**

| Project | Slug | Location | Category |
| ------- | ---- | -------- | -------- |
| Belgravia Townhouse | `belgravia-townhouse` | London | Residential |
| Surrey Country Estate | `surrey-country-estate` | Surrey | Residential |
| Dubai Penthouse | `dubai-penthouse` | Dubai, UAE | International |
| Chelsea Apartment | `chelsea-apartment` | London | Residential |
| Kensington Kitchen | `kensington-kitchen` | London | Kitchen |
| Notting Hill Residence | `notting-hill-dining` | London | Residential |
| Monaco Cliffside Villa | `monaco-villa` | Monaco | International |
| Mayfair Chef's Kitchen | `mayfair-kitchen` | London | Kitchen |
| Singapore Sky Loft | `singapore-loft` | Singapore | International |

---

## UI & Design

- Built with **Tailwind CSS v4** — utility-first with oklch color variables and dark mode support
- **Iowan Old Style** serif font (6 WOFF2 variants) for headings + **Montserrat** sans-serif for body text
- Warm luxury palette: deep brown `#3D211A` primary, cream `#EDE8D0` secondary, tan `#A07856` accent
- Gradient mesh backgrounds using layered `radial-gradient` values
- Glass-card aesthetic with soft shadows (`.shadow-earthy-sm/md/lg`)
- Custom CSS animations: `wipeSlide` (card reveal), `gentleBounce` (scroll indicator), `fadeUp` (content entrance), `marquee` (publication scroll)
- Project cards with wipe-reveal animation triggered by viewport intersection + image decode
- `FancyButton` component with keyboard-key-inspired decorative elements
- Inner border frame + logo watermark overlay on project images
- Fully responsive via Tailwind `sm:`, `md:`, `lg:` breakpoints
- `prefers-reduced-motion` friendly — all animations respect accessibility preferences
- Semantic HTML with proper heading hierarchy, ARIA labels, and role attributes

---

## Architecture & Patterns

### Component Model

- **Server Components** by default — `container`, `section-heading`, `projects-section`, `contact-section`, `fancy-button`, `isketch-logo`, `structured-data`
- **Client Components** (`"use client"`) — only where needed for interactivity: header (scroll events), hero (video playback), lightbox (touch gestures), smooth scroll (Lenis), all IntersectionObserver-driven animations

### Data Flow

- Static typed data files in `/data/` — no database, no API routes, no CMS
- `generateStaticParams()` for portfolio/[slug] SSG at build time
- `generateMetadata()` for dynamic per-page SEO
- React Context (`LayoutProvider`) for header/footer chrome visibility (404 page hides chrome)

### Performance Architecture

- **Shared IntersectionObserver** — one observer per threshold value across entire app (vs. 15-20 individual instances)
- **Double-buffered video** — two `<video>` elements alternate for seamless crossfade
- **Deferred video loading** — Video B only preloads when Video A reaches 50% playback
- **RAF-throttled scroll** — header visibility batched to requestAnimationFrame
- **`content-visibility: auto`** — browser skips rendering below-fold sections
- **Image optimization** — AVIF/WebP formats, responsive `sizes`, 1-year immutable cache
- **WOFF2 fonts** — 45% smaller than TTF, `font-display: swap`

### SEO Architecture

- `metadataBase` enables canonical URLs site-wide
- `title.template` — consistent `%s | I Sketch Interiors` format
- Open Graph + Twitter Card defaults inherited by all pages
- JSON-LD structured data: `InteriorDesigner`, `WebSite`, `BreadcrumbList`, `Service` (×4), `CreativeWork` (×6)
- Dynamic sitemap with 16 URLs + robots.txt
- Legal pages set to `noindex` to avoid competing with business pages

---

## SEO & Structured Data

| Schema Type | Location | Purpose |
| ----------- | -------- | ------- |
| InteriorDesigner | Root layout (all pages) | Local Pack, Knowledge Panel |
| WebSite | Root layout (all pages) | Sitelinks |
| BreadcrumbList | About, Services, Portfolio, Portfolio/[slug] | Breadcrumb rich results |
| Service (×4) | Services page | Semantic service clarity |
| CreativeWork (×6) | Portfolio/[slug] pages | Image search, semantic |

**Metadata Features:**
- Canonical URLs on every page
- Open Graph images (1200×630) with per-project images on portfolio detail pages
- Twitter `summary_large_image` cards
- Googlebot directives: `max-image-preview: large`, `max-snippet: -1`
- AI-ready `llms.txt` for ChatGPT, Perplexity, and other AI crawlers

---

## Security

- **HTTPS enforced** — Strict-Transport-Security with 2-year max-age, includeSubDomains, preload
- **XSS prevention** — X-Content-Type-Options: nosniff
- **Clickjacking protection** — X-Frame-Options: SAMEORIGIN
- **Referrer control** — Referrer-Policy: strict-origin-when-cross-origin
- **Permission restrictions** — camera, microphone, and geolocation disabled via Permissions-Policy
- **No API routes** — purely static site, no server-side attack surface
- **No user input** — no forms, no database, no file uploads

---

## Performance

### Caching Strategy

| Asset Type | Cache Duration | Strategy |
| ---------- | -------------- | -------- |
| Images | 1 year | `immutable` — versioned by Next.js |
| Videos | 1 year | `immutable` — static hero content |
| Fonts | 1 year | `immutable` — WOFF2 with swap |
| JS/CSS chunks | Hashed | Automatic cache busting by Next.js |

### Optimization Techniques

- AVIF + WebP image formats with quality levels 75/90
- WOFF2 fonts (45% smaller than TTF originals)
- Source images pre-compressed with mozjpeg (39% reduction)
- `content-visibility: auto` on below-fold sections
- Shared IntersectionObserver singleton (15-20 → 1 observer)
- Video B deferred until Video A is 50% played (halves initial fetch)
- `will-change` applied only during animation, reset after completion
- `font-display: swap` — text visible immediately, font loads in background
- Preconnect hint for Vercel analytics domain

---

## Files Overview

### `app/layout.tsx`

Root layout configuring Iowan Old Style (6 WOFF2 variants) + Montserrat (4 weights) fonts, comprehensive metadata with `metadataBase`, Open Graph/Twitter defaults, robots directives, Vercel Analytics/SpeedInsights, and JSON-LD organization + website schemas.

### `app/(marketing)/page.tsx`

Home page composing four server/client section components — HeroSection (cinematic video with rotating tagline), AboutSection (studio intro with image reveal), ProjectsSection (3-column featured grid), and ContactSection (email/phone CTA).

### `app/(marketing)/_components/hero-section.tsx`

The most complex client component — manages double-buffered video playback (A/B players), seamless crossfade transitions with CSS opacity, Framer Motion AnimatePresence for rotating tagline words (Interiors → Elegance → Spaces → Luxury), deferred Video B preloading, and staggered content entrance animations.

### `hooks/use-image-ready.ts`

Custom hook combining shared IntersectionObserver (viewport detection) with native `img.decode()` (image readiness) and a 3-second fallback timeout. Returns `shouldReveal` boolean — true only when both in viewport AND image decoded, preventing content flash.

### `lib/schema.ts`

JSON-LD schema generator functions — `getOrganizationSchema()` (InteriorDesigner with full NAP), `getWebSiteSchema()`, `getBreadcrumbSchema()`, `getServiceSchema()`, `getProjectSchema()` (CreativeWork). Pure data functions, no React dependency.

---

## Customization

### Change Studio Contact Info

Edit `data/contact.ts`:

```typescript
export const studioContact = {
  email: "your-email@example.com",
  phones: ["+91 XXXXX XXXXX"],
}
```

### Add a New Portfolio Project

1. Add image to `public/images/`
2. Add entry to `portfolioProjects` array in `data/projects.ts`
3. Add detail entry to `projectDetails` object in `data/projects.ts`
4. The sitemap, SSG, and portfolio grid auto-update — no other changes needed

### Change the Color Palette

Edit CSS custom properties in `app/globals.css`:

```css
/* from */
--primary: oklch(0.28 0.08 30);
/* to */
--primary: oklch(0.30 0.10 200);
```

### Add a New Service

Add entry to `services` array in `data/services.ts`:

```typescript
{
  number: "05",
  title: "Your New Service",
  description: "Service description...",
  features: ["Feature 1", "Feature 2"],
  images: ["/images/your-image.jpg"],
}
```

### Update Social Links

Edit `data/navigation.ts` — replace `"#"` placeholders with actual URLs:

```typescript
export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "https://instagram.com/your-handle" },
  { label: "Facebook", href: "https://facebook.com/your-page" },
]
```

---

## Troubleshooting

**Build fails with TypeScript errors**

- The project has `ignoreBuildErrors: true` in `next.config.mjs` — TypeScript errors are bypassed during build
- Run `npx tsc --noEmit` to check for type errors independently

**Fonts not rendering correctly**

- Verify WOFF2 files exist in `public/fonts/iowanoldst-bt/`
- Check browser console for 404 errors on font requests
- Ensure `font-display: swap` is configured (already set in layout.tsx)

**Hero videos not playing**

- Verify video files exist in `public/videos/hero-1.mp4` through `hero-4.mp4`
- Check browser autoplay policies — videos are muted + playsInline (required for autoplay)
- On slow connections, Video B defers loading until Video A is 50% played

**Smooth scrolling not working**

- Lenis is disabled when `prefers-reduced-motion: reduce` is set in OS/browser settings
- Check browser console for Lenis initialization errors
- Verify `window.__lenis` exists in the console

**404 page shows header/footer**

- The not-found page uses `LayoutContext` to set `hideChrome: true`
- If header/footer appear, check that `LayoutProvider` wraps `LayoutInner` in `layout-shell.tsx`

**Images appear blurry or low quality**

- Next.js serves optimized images at quality 75 or 90 (configured in `next.config.mjs`)
- For hero/featured images, add `quality={90}` prop to the `<Image>` component
- Source images in `public/images/` should be at least 1920px wide for full-screen sections

**Structured data validation errors**

- Check that `lib/schema.ts` generates valid JSON-LD
- Verify organization address, phone, and email are accurate

---

## Roadmap

- Add client testimonials section with AggregateRating schema
- Integrate a contact form with server actions or API route
- Add blog/journal section for design insights and SEO content
- Wire real Instagram/Facebook URLs into social links and `sameAs` schema
- Add Google Business Profile integration and map embed on contact page
- Implement `opengraph-image.tsx` for auto-generated OG images per route
- Add IndexNow integration for Bing/Yandex instant indexing
- Set up Google Search Console verification meta tag
- Consider CMS integration (Sanity/Contentful) for non-developer content updates
- Add web manifest for PWA installability

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push your branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## Contact & Support

- **Developer:** aadigunjal0975@gmail.com
- **WhatsApp:** +91 84335 09521
- **Issues:** File an issue in the repository tracker

---

## Acknowledgments

- [Next.js](https://nextjs.org) by Vercel for the React framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first styling system
- [Framer Motion](https://www.framer.com/motion) for declarative animations
- [Lenis](https://lenis.darkroom.engineering) by darkroom.engineering for smooth scrolling
- [Lucide](https://lucide.dev) for the icon library
- [Embla Carousel](https://www.embla-carousel.com) for the touch-friendly carousel
- [shadcn/ui](https://ui.shadcn.com) for the component system foundation
- [Google Fonts](https://fonts.google.com) for Montserrat typeface
- The open-source React, Next.js, and web development communities

---

## License

This project is licensed under the [MIT License](LICENSE).
