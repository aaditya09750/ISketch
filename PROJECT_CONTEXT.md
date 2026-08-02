# PROJECT_CONTEXT.md — ISketch Interiors Technical Context & Architecture

> **Repository Name:** `ISketch`  
> **Studio Name:** I Sketch Interiors  
> **Author & Full Stack Developer:** Aaditya Gunjal  
> **Framework:** Next.js 16.2.12 (App Router — Server Components by Default)  
> **UI Runtime:** React 19.2.8  
> **Language:** TypeScript 6.0.3 (`strict: true`)  
> **Styling Engine:** Tailwind CSS 4.3.3 (`@tailwindcss/postcss` v4 engine) + OKLCH Design Tokens  
> **Animation Engine:** Framer Motion 12.43.0  
> **Smooth Scroll Engine:** Lenis 1.3.25  
> **Package Manager:** pnpm

---

## 1. Executive Summary

**ISketch Interiors** is a production-grade, ultra-performance luxury marketing portfolio web application engineered for an elite interior design studio operating out of Thane West and Mumbai, Maharashtra. Built on Next.js 16 App Router, React 19, TypeScript 6, and Tailwind CSS v4, the project operates as a **statically-driven, content-first web platform**.

### Core Architecture & Business Goals:

- **Zero Server Overhead**: The site features no server-side API routes, no backend database, no user authentication, and no form submission server endpoints. Content is entirely pre-rendered at build time.
- **Cinematic Visual Excellence**: Integrates double-buffered HTML5 video crossfading, bespoke viewport-driven image-decode reveals, full-screen touch-enabled lightboxes, and smooth inertia scrolling.
- **Sub-Second LCP Performance Target**: Sub-second Largest Contentful Paint (LCP) enabled via AVIF/WebP image formats, 1-year immutable asset caching, pre-loaded WOFF2 Bitstream Iowan Old Style typography, and deduplicated viewport intersection observers.
- **Search Engine Dominance**: End-to-end JSON-LD structured data integration (`InteriorDesigner`, `LocalBusiness`, `WebSite`, `BreadcrumbList`, `Service`, `CreativeWork`) covering primary target demographics in Mumbai, Thane, Pune, Navi Mumbai, and international markets (UK, UAE, Monaco, Singapore).

---

## 2. Complete Workspace Directory Structure (100% Explicit — Zero Omissions)

```
ISketch/
├── .editorconfig                       # Formatting rules: 2 spaces, UTF-8, trim trailing whitespace
├── .env.example                        # Documentation template for environment variables (MAINTENANCE_MODE)
├── .env.local                          # Local environment variable overrides (gitignored)
├── .git/                               # Git repository metadata directory
├── .gitattributes                      # Git LFS & line ending normalization rules
feat(infra): upgrade project architecture to prod grade toolchain and SEO infrastructure...

├── .gitignore                          # Excludes node_modules, .next, .env.local, build caches
├── .husky/                             # Git pre-commit hook triggers (Husky v9)
├── .next/                              # Next.js build output, static chunks, and cache (gitignored)
├── .nvmrc                              # Explicit Node.js version requirement (.nvmrc: 22)
├── .prettierignore                     # File exclusions for Prettier code formatter
├── .prettierrc.json                    # Prettier formatting standards (no tabs, 2 spaces, semi: false/mixed)
├── AGENTS.md                           # Master single source of truth and guidelines for AI coding agents
├── ARCHITECTURE.md                     # Technical system design and architectural specifications
├── CHANGELOG.md                        # Version release notes and project iteration history
├── CLAUDE.md                           # Specific execution guidelines for Claude AI agent
├── CODE_OF_CONDUCT.md                  # Contributor code of conduct standards
├── CONTRIBUTING.md                     # Developer contribution guidelines and pull request instructions
├── LICENSE                             # MIT Open Source License agreement
├── README.md                           # Primary project summary, setup commands, and features guide
├── SECURITY.md                         # Security policy, vulnerability disclosures, and headers summary
├── commitlint.config.cjs               # Conventional commits message format configuration
├── components.json                     # shadcn/ui framework configuration (new-york style, RSC enabled)
├── eslint.config.js                    # ESLint flat config (TypeScript, React 19, Hooks, JSX A11y, Prettier)
├── lint-staged.config.cjs              # Pre-commit task execution pipeline configuration
├── next-env.d.ts                       # Next.js auto-generated TypeScript type declarations
├── next.config.mjs                     # Next.js configuration (AVIF/WebP, headers, 1-year cache TTL)
├── package.json                        # Dependency manifest, scripts, and package version locks
├── pnpm-lock.yaml                      # Committed pnpm lockfile for reproducible installations
├── pnpm-workspace.yaml                 # pnpm workspace structure file
├── postcss.config.mjs                  # PostCSS plugins configuration (@tailwindcss/postcss)
├── proxy.ts                            # Sitewide maintenance mode rewrite middleware proxy handler
├── tsconfig.json                       # TypeScript compiler options (strict: true, @/* path alias)
├── tsconfig.tsbuildinfo                # TypeScript build cache file
│
├── app/                                # Next.js 16 App Router application root
│   ├── globals.css                     # Global CSS entry (Tailwind v4, OKLCH color design tokens, keyframes)
│   ├── icon.svg                        # Site SVG favicon (I Sketch brand logomark)
│   ├── layout.tsx                      # Root layout (Iowan Old Style + Montserrat fonts, Metadata, Lenis, Schema)
│   ├── not-found.tsx                   # Custom 404 error page (renders <NotFoundContent />)
│   ├── robots.ts                       # Dynamic robots.txt generation script
│   ├── sitemap.ts                      # Dynamic XML sitemap generator (16 indexed URLs)
│   │
│   ├── _components/                    # Application utility page components
│   │   ├── maintenance-content.tsx     # Interactive client UI for maintenance mode state
│   │   └── not-found-content.tsx       # Animated client UI for 404 error page with navigation CTA
│   │
│   ├── maintenance/                    # Maintenance mode fallback route directory
│   │   └── page.tsx                    # Serves maintenance page content wrapper
│   │
│   ├── (marketing)/                    # Route group — public indexable business marketing pages
│   │   ├── page.tsx                    # Studio landing home page
│   │   ├── loading.tsx                 # Loading UI fallback boundary for marketing routes
│   │   ├── error.tsx                   # Client error boundary with retry handler
│   │   │
│   │   ├── _components/                # Home page private section components
│   │   │   ├── about-section.tsx       # Studio summary overview & statistical highlight counters
│   │   │   ├── contact-section.tsx     # Direct project inquiry contact details section
│   │   │   ├── featured-section.tsx    # Flagship featured interior project spotlight
│   │   │   ├── hero-section.tsx        # Double-buffered video crossfade hero banner component
│   │   │   ├── projects-section.tsx    # Portfolio highlights preview masonry grid
│   │   │   └── index.ts                # Marketing components barrel export
│   │   │
│   │   ├── about/                      # /about studio page route
│   │   │   ├── page.tsx                # Studio narrative, team, core values, & approach page
│   │   │   └── _components/            # About page private section components
│   │   │       ├── about-approach-section.tsx # Architectural design methodology & execution process
│   │   │       ├── about-hero.tsx            # Typography-driven hero header for about page
│   │   │       ├── about-story-section.tsx   # Studio foundation story & principal designer background
│   │   │       ├── about-team-section.tsx    # Team leadership & design project leads showcase
│   │   │       ├── about-values-section.tsx  # Grid of core studio design values
│   │   │       ├── latest-project-section.tsx # Spotlight on latest award-winning completion
│   │   │       └── index.ts                  # About components barrel export
│   │   │
│   │   ├── services/                   # /services studio page route
│   │   │   ├── page.tsx                # Service offerings, transparent fee breakdown, & 4-step workflow page
│   │   │   └── _components/            # Services page private section components
│   │   │       ├── service-hero.tsx          # Service section landing hero header
│   │   │       ├── service-image-carousel.tsx # Embla carousel displaying luxury interior renders
│   │   │       ├── services-detail-section.tsx # Detailed breakdown of 4 core service packages
│   │   │       ├── services-fees-section.tsx   # Investment guidelines & fee structure details
│   │   │       ├── services-intro-section.tsx  # Introduction to interior design philosophy
│   │   │       ├── services-process-section.tsx# 4-step interior design lifecycle (Discovery to Delivery)
│   │   │       └── index.ts                    # Services components barrel export
│   │   │
│   │   ├── portfolio/                  # /portfolio showcase grid & dynamic project detail pages
│   │   │   ├── page.tsx                # Portfolio overview grid with category filter tabs
│   │   │   ├── _components/            # Portfolio main page components
│   │   │   │   ├── portfolio-filter.tsx# Interactive category filter tabs (All, Residential, International, Kitchen)
│   │   │   │   ├── portfolio-grid.tsx  # Responsive masonry project card grid
│   │   │   │   └── index.ts
│   │   │   └── [slug]/                 # Dynamic project detail route (/portfolio/[slug])
│   │   │       ├── page.tsx            # Pre-rendered SSG project case study page (9 projects pre-built)
│   │   │       └── _components/        # Project detail private components
│   │   │           ├── project-gallery.tsx # Interactive image gallery grid with Lightbox modal trigger
│   │   │           └── index.ts
│   │   │
│   │   ├── projects/                   # /projects page route
│   │   │   ├── page.tsx                # Parallax scroll project showcase container page
│   │   │   └── _components/            # Projects page private components
│   │   │       └── projects-content.tsx# Fullscreen scroll-driven project showcase component
│   │   │
│   │   └── contact/                    # /contact page route
│   │       ├── page.tsx                # Studio contact info & project inquiry routing page
│   │       └── _components/            # Contact page private components
│   │           └── contact-content.tsx # NAP details, studio address, phone numbers, & direct WhatsApp link
│   │
│   └── (legal)/                        # Route group — noindex legal pages
│       ├── _components/                # Shared layout components for legal pages
│       │   ├── legal-page-layout.tsx   # Sidebar navigation & structured legal document body container
│       │   └── index.ts
│       ├── privacy-policy/             # /privacy-policy page route
│       │   └── page.tsx                # Privacy Policy document renderer
│       └── terms-conditions/           # /terms-conditions page route
│           └── page.tsx                # Terms & Conditions document renderer
│
├── components/                         # Reusable modular React component library
│   ├── layout/                         # Chrome & sitewide structural shell components
│   │   ├── footer.tsx                  # Global footer with studio NAP data, navigation links, copyright
│   │   ├── header.tsx                  # Translucent fixed navigation header & mobile slide-over menu drawer
│   │   ├── layout-shell.tsx            # Wraps Header, Footer, and Floating WhatsApp Button
│   │   ├── whatsapp-button.tsx         # Floating direct WhatsApp messaging CTA button
│   │   └── index.ts                    # Layout components barrel export
│   │
│   ├── providers/                      # React Context providers
│   │   ├── layout-context.tsx          # Controls layout chrome visibility (e.g., hiding header/footer on 404)
│   │   ├── smooth-scroll.tsx           # Lenis inertia scroll provider with prefers-reduced-motion check
│   │   └── index.ts
│   │
│   └── shared/                         # Reusable design system UI primitives
│       ├── container.tsx               # Centered max-width layout constraint wrapper
│       ├── cta-section.tsx             # Universal "Begin Your Project" call-to-action banner section
│       ├── fancy-button.tsx            # Animated primary interactive button component
│       ├── image-lightbox.tsx          # Fullscreen zoomable image lightbox modal with touch swipe
│       ├── isketch-logo.tsx            # Vector SVG brand logo component with smooth hover scale
│       ├── page-heading.tsx            # Standardized page title header banner with breadcrumb links
│       ├── project-card.tsx            # Interactive project preview card with wipe-reveal effect
│       ├── reveal-image.tsx            # Viewport-aware wipe-reveal image component
│       ├── section-heading.tsx         # Standardized section title header component
│       ├── structured-data.tsx         # Injects JSON-LD schema script tags into document head
│       └── index.ts                    # Shared components barrel export
│
├── data/                               # Typed static content layer (Central Content Engine)
│   ├── about.ts                        # Core values (3 items), awards (4 items), publications (6 items)
│   ├── contact.ts                      # Studio NAP details, phone numbers, address, email, social options
│   ├── index.ts                        # Central barrel export for all static content files
│   ├── legal.ts                        # Privacy Policy and Terms & Conditions structured content sections
│   ├── navigation.ts                   # Primary navigation links (6 routes), footer links, & social channel links
│   ├── projects.ts                     # 18 portfolio projects + complete case study data objects
│   └── services.ts                     # 4 core services & 4-step design process methodology metadata
│
├── hooks/                              # Custom React Hooks
│   ├── use-image-ready.ts              # IntersectionObserver + img.decode() + 3s fallback image reveal handler
│   └── use-intersection.ts             # Shared single-instance IntersectionObserver factory
│
├── lib/                                # Pure utilities & schema generators
│   ├── schema.ts                       # Pure functions generating JSON-LD schemas
│   └── utils.ts                        # Tailwind class merge utility helper (`cn()`)
│
├── public/                             # Static public web assets served at root
│   ├── ISketch Invoice.pdf             # Downloadable sample studio invoice reference PDF
│   ├── icon.svg                        # Primary vector brand logomark / favicon SVG
│   ├── llms.txt                        # AI agent & LLM crawler orientation documentation
│   ├── fonts/                          # Typography font assets
│   │   └── iowanoldst-bt/              # Bitstream Iowan Old Style WOFF2 font files (6 weights/styles)
│   ├── images/                         # WebP/AVIF optimized project gallery, hero, & profile imagery
│   ├── logos/                          # SVG brand logomarks
│   └── videos/                         # 4 HD hero showcase background videos (hero-1.mp4 ... hero-4.mp4)
│
└── types/                              # Shared TypeScript interfaces & types
    └── index.ts                        # Exported types (NavLink, ProjectSummary, ProjectDetail, Service, etc.)
```

---

## 3. Complete Technology & Dependency Matrix (Every Single Package Listed)

### Production Dependencies (`dependencies` in `package.json`):

1. **`next` (`16.2.12`)**: Next.js App Router framework providing static site generation (SSG), pre-rendering, and layout streaming.
2. **`react` (`19.2.8`)**: Core UI rendering engine supporting React Server Components (RSC).
3. **`react-dom` (`19.2.8`)**: DOM rendering bindings for React 19.
4. **`framer-motion` (`12.43.0`)**: Declarative animation engine used for scroll-driven reveals, tab switching, and page transitions.
5. **`lenis` (`1.3.25`)**: Lightweight smooth inertia scroll library integrated into `SmoothScroll` provider.
6. **`lucide-react` (`1.28.0`)**: Tree-shakeable icon library providing UI symbols (`MapPin`, `Phone`, `Mail`, `ArrowRight`, `X`, `Menu`, etc.).
7. **`react-icons` (`5.7.0`)**: Comprehensive brand and social icon set.
8. **`embla-carousel-react` (`8.6.0`)**: Touch-enabled, accessible carousel library used in services visual showcase.
9. **`class-variance-authority` (`^0.7.1`)**: Utility for creating type-safe component variants.
10. **`clsx` (`^2.1.1`)**: Utility for constructing conditional className strings.
11. **`tailwind-merge` (`3.6.0`)**: Utility for merging Tailwind CSS classes without style conflicts.
12. **`@vercel/analytics` (`2.0.1`)**: Real User Monitoring (RUM) analytics auto-injected in root layout.
13. **`@vercel/speed-insights` (`2.0.0`)**: Real-time Core Web Vitals monitoring auto-injected in root layout.

### Development Dependencies (`devDependencies` in `package.json`):

1. **`typescript` (`6.0.3`)**: Strict type-checker enforcing type safety across the entire codebase.
2. **`@types/node` (`26.1.2`)**: TypeScript type definitions for Node.js runtime environment.
3. **`@types/react` (`19.2.17`)**: TypeScript type definitions for React 19.
4. **`@types/react-dom` (`19.2.3`)**: TypeScript type definitions for React DOM.
5. **`tailwindcss` (`4.3.3`)**: Engine for Tailwind CSS v4.
6. **`@tailwindcss/postcss` (`4.3.3`)**: PostCSS plugin for Tailwind CSS v4 integration.
7. **`tw-animate-css` (`1.4.0`)**: Animation utilities for Tailwind CSS.
8. **`postcss` (`8.5.25`)**: CSS transformation tool.
9. **`autoprefixer`**: CSS vendor prefixing tool.
10. **`eslint` (`9.39.5`)**: JavaScript and TypeScript linting engine.
11. **`eslint-config-next` (`16.1.6`)**: Next.js core web vitals ESLint rules.
12. **`eslint-config-prettier` (`10.1.8`)**: Disables ESLint rules that conflict with Prettier.
13. **`eslint-plugin-import-x` (`4.17.1`)**: Validates import syntax and path aliases.
14. **`eslint-plugin-jsx-a11y` (`^6.10.2`)**: Enforces accessibility standards on JSX elements.
15. **`eslint-plugin-react` (`^7.37.4`)**: React-specific linting rules.
16. **`eslint-plugin-react-hooks` (`7.1.1`)**: Enforces Rules of Hooks.
17. **`typescript-eslint` (`^8.24.0`)**: TypeScript plugin for ESLint flat config.
18. **`globals` (`17.8.0`)**: Global variable definitions for ESLint.
19. **`prettier` (`3.9.6`)**: Code formatter.
20. **`husky` (`^9.1.7`)**: Git hooks manager enforcing linting and commit standards.
21. **`lint-staged` (`17.2.0`)**: Runs linters against staged git files.
22. **`@commitlint/cli` (`21.2.1`)**: CLI tool for checking conventional commit messages.
23. **`@commitlint/config-conventional` (`21.2.0`)**: Conventional commit rules preset.

---

## 4. Complete Configuration Specifications

### A. Next.js Configuration ([next.config.mjs](file:///c:/SharedData/Projects/Aaditya/ISketch/next.config.mjs))

- **Image Optimization**:
  - Formats: `["image/avif", "image/webp"]`
  - Device Sizes: `[640, 750, 828, 1080, 1200, 1920, 2048]`
  - Image Sizes: `[16, 32, 48, 64, 96, 128, 256, 384]`
  - Qualities: `[75, 90, 95]`
  - Minimum Cache TTL: `31536000` seconds (1 year)
- **Security Headers (Globally Applied to `/(.*)`)**:
  - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options`: `nosniff`
  - `X-Frame-Options`: `SAMEORIGIN`
  - `Referrer-Policy`: `strict-origin-when-cross-origin`
  - `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`
- **Asset Caching Headers**:
  - `/images/:path*`, `/fonts/:path*`, `/videos/:path*`: `Cache-Control: public, max-age=31536000, immutable`

### B. TypeScript Configuration ([tsconfig.json](file:///c:/SharedData/Projects/Aaditya/ISketch/tsconfig.json))

- **Target**: `ES6`
- **Module Resolution**: `bundler`
- **Strict Mode**: `strict: true` (Zero `any` allowed)
- **Path Alias**: `@/*` mapped to project root (`./*`)
- **No Emit**: `noEmit: true` (Next.js handles compilation)

### C. ESLint Configuration ([eslint.config.js](file:///c:/SharedData/Projects/Aaditya/ISketch/eslint.config.js))

- Uses ESLint 9 Flat Config format.
- Ignored Paths: `node_modules/**`, `.next/**`, `coverage/**`, `tsconfig.tsbuildinfo`.
- Rules: Enforces `react-hooks/rules-of-hooks: error`, `react-hooks/exhaustive-deps: warn`, turns off unnecessary React-in-JSX requirements for React 19.

### D. shadcn/ui Configuration ([components.json](file:///c:/SharedData/Projects/Aaditya/ISketch/components.json))

- Style: `new-york`
- React Server Components (RSC): `true`
- Icon Library: `lucide`
- Aliases: `@/components`, `@/lib/utils`, `@/components/shared`, `@/lib`, `@/hooks`

### E. Maintenance Mode Middleware Proxy ([proxy.ts](file:///c:/SharedData/Projects/Aaditya/ISketch/proxy.ts))

- Controls sitewide maintenance fallback behavior via `process.env.MAINTENANCE_MODE === "true"`.
- Performs URL rewrites to `/maintenance` with `Retry-After: 3600` and `Cache-Control: no-store, must-revalidate`.
- Exempts static assets (`.png`, `.jpg`, `.svg`, `.webp`, `.mp4`, `.woff2`), `/api/*`, `_next/*`, `robots.txt`, and `sitemap.xml`.

---

## 5. Design System & Styling Infrastructure

### A. Typography Specifications

- **Bitstream Iowan Old Style** (Editorial Serif Display Font):
  Loaded locally in [`app/layout.tsx`](file:///c:/SharedData/Projects/Aaditya/ISketch/app/layout.tsx) via `next/font/local` across 6 WOFF2 variants:
  1. Regular (`400`, Normal)
  2. Italic (`400`, Italic)
  3. Bold (`700`, Normal)
  4. Bold Italic (`700`, Italic)
  5. Black (`900`, Normal)
  6. Black Italic (`900`, Italic)
     CSS Variable: `--font-iowan` with `font-display: swap`.
- **Montserrat** (Modern Sans-Serif Body Font):
  Loaded via `next/font/google` in `app/layout.tsx` across weights `300`, `400`, `500`, `600`.
  CSS Variable: `--font-sans`.

### B. OKLCH & HSL Color Token System ([app/globals.css](file:///c:/SharedData/Projects/Aaditya/ISketch/app/globals.css))

#### Light Mode Tokens (`:root`):

- `--background`: `#ffffff` (Pure Crisp White)
- `--foreground`: `#3d211a` (Deep Luxury Charcoal Earth Brown)
- `--card` / `--popover`: `#faf8ee` (Warm Parchment Cream)
- `--primary`: `#3d211a` (Deep Studio Accent)
- `--primary-foreground`: `#f5f5dc` (Beige Text)
- `--secondary`: `#ede8d0` (Soft Warm Beige)
- `--muted`: `#e0d9c4`
- `--muted-foreground`: `#6f4d38` (Medium Earth Tone)
- `--accent`: `#6f4d38`
- `--border` / `--input`: `#cbb799` (Warm Sand Border)
- `--ring`: `#a07856` (Warm Bronze Focus Ring)

#### Dark Mode Tokens (`.dark`):

- `--background`: `#2a1810` (Deep Espresso Brown)
- `--foreground`: `#f5f5dc` (Soft Ivory White)
- `--card` / `--popover`: `#3d211a` (Elevated Earth Surface)
- `--primary`: `#f5f5dc`
- `--secondary`: `#3d211a`
- `--border` / `--input`: `#6f4d38`

### C. Performance & Animation CSS Extensions

- **Content Visibility**: `content-visibility: auto` applied to below-fold layout sections for instant FCP.
- **Custom Keyframes**:
  - `wipeSlide`: Horizontal mask reveal animation for images.
  - `gentleBounce`: Subdued floating indicator animation.
  - `fadeUp`: Smooth opacity and vertical transform entrance.
  - `marquee`: Continuous horizontal ticker loop.

---

## 6. Complete Data & Content Engine Manifest

### A. Portfolio Projects Data ([data/projects.ts](file:///c:/SharedData/Projects/Aaditya/ISketch/data/projects.ts))

#### 1. Flagship Projects (6 Main Case Studies):

1. **Asteria Courtyard** (`asteria-courtyard`) — Location: Thane | Category: Residential | Year: 2024 | Scope: Full Interior Architecture
2. **Nyati Chesterfield** (`nyati-chesterfield`) — Location: Pune | Category: Residential | Year: 2024 | Scope: Full Interior Design
3. **Revanta Residence** (`revanta-residence`) — Location: Mumbai | Category: Residential | Year: 2024 | Scope: Full Interior Architecture
4. **Rosehill Hiranandani Estate** (`rosehill-hiranandani`) — Location: Thane | Category: Residential | Year: 2024 | Scope: Full Estate Interior
5. **Rosemount 1601 Hiranandani** (`rosemount-1601`) — Location: Thane | Category: Residential | Year: 2024 | Scope: Luxury Residence Interior
6. **Rosemount 1801 Hiranandani** (`rosemount-1801`) — Location: Thane | Category: Residential | Year: 2024 | Scope: Duplex Interior Architecture

#### 2. Showcase Gallery Entries (12 Detailed Project Items):

7. **Asteria Entrance & Vestibule** (`asteria-courtyard-entry`) — Location: Thane | Category: Residential
8. **Luxury Living Suite** (`luxury-living-suite`) — Location: Mumbai | Category: Residential
9. **Grand Reception Hall** (`grand-reception-hall`) — Location: Mumbai | Category: Residential
10. **Asteria Courtyard Grounds** (`asteria-courtyard-grounds`) — Location: Thane | Category: Residential
11. **Penthouse Open Lounge** (`penthouse-lounge`) — Location: Mumbai | Category: Residential
12. **Rosemount Royal Residence** (`rosemount-royal-suite`) — Location: Thane | Category: Residential
13. **Chesterfield Master Suite** (`chesterfield-bedroom`) — Location: Pune | Category: Residential
14. **Revanta Dining Pavilion** (`revanta-dining`) — Location: Mumbai | Category: Residential
15. **Custom Architectural Joinery** (`bespoke-joinery`) — Location: Thane | Category: Residential
16. **Nyati Chesterfield Kitchen** (`chesterfield-kitchen`) — Location: Pune | Category: Kitchen
17. **Rosehill Estate Parlour** (`rosehill-penthouse`) — Location: Thane | Category: Residential
18. **Asteria Garden Lounge** (`asteria-garden-terrace`) — Location: Thane | Category: International
19. **Revanta Executive Archway** (`revanta-executive-study`) — Location: Mumbai | Category: Residential
20. **Hiranandani Sky Foyer** (`hiranandani-sky-villa`) — Location: Thane | Category: International
21. **Asteria Grand Heritage Suite** (`asteria-grand-heritage`) — Location: Thane | Category: Residential
22. **Nyati Royal Residency** (`nyati-royal-residency`) — Location: Pune | Category: International

### B. Studio Services Data ([data/services.ts](file:///c:/SharedData/Projects/Aaditya/ISketch/data/services.ts))

1. **01. Full Interior Design**: Concept Development, Space Planning, Material Selection, Furniture Design, Project Management.
2. **02. Consultation**: Design Direction, Colour Consultation, Furniture Selection, Lighting Advice, Shopping Service.
3. **03. Property Styling**: Rental Styling, Photography Styling, Accessory Curation.
4. **04. Bespoke Joinery**: Custom Cabinetry, Built-in Storage, Kitchen Design, Bathroom Vanities, Statement Pieces.

#### 4-Step Design Process (`designProcess`):

1. **01. Initial Consultation**: Vision, requirements, and lifestyle discussion.
2. **02. Concept Development**: Mood boards, floor plans, and preliminary material selections.
3. **03. Design Development**: Refined furniture specifications and lighting layouts.
4. **04. Implementation**: Contractor coordination and turnkey installation oversight.

### C. Studio About & Credentials Data ([data/about.ts](file:///c:/SharedData/Projects/Aaditya/ISketch/data/about.ts))

- **Core Values**:
  1. _Timeless Design_: Transcending fleeting trends with quality and proportion.
  2. _Bespoke Approach_: Customized solutions tailored to individual client aspirations.
  3. _Exceptional Quality_: Working with master craftsmen and sourcing premier materials.
- **Awards & Honors**:
  - 2025: Best Luxury Interior Design Studio
  - 2024: Excellence in Residential Design
  - 2023: International Design Award
  - 2022: Best Use of Materials
- **Press Publications**: Architectural Digest, House & Garden, Elle Decoration, Homes & Gardens, The Times, Tatler.

### D. Studio NAP & Contact Single Source of Truth ([data/contact.ts](file:///c:/SharedData/Projects/Aaditya/ISketch/data/contact.ts))

- **Email**: `studio@isketchinteriors.com`
- **Phone Numbers**: `+91 99673 12203`, `+91 98925 15655`
- **Physical Studio Address**:
  `The Courtyard, Asteria A/604, Pokhran road no. 2, Thane west, Maharashtra, India`

### E. Navigation Data ([data/navigation.ts](file:///c:/SharedData/Projects/Aaditya/ISketch/data/navigation.ts))

- **Navigation & Footer Routes**: `/` (Home), `/about` (About), `/projects` (Projects), `/services` (Services), `/portfolio` (Portfolio), `/contact` (Contact).
- **Social Media Channels**: Instagram, Facebook.

---

## 7. Shared Type Definitions ([types/index.ts](file:///c:/SharedData/Projects/Aaditya/ISketch/types/index.ts))

```typescript
export type NavLink = {
  label: string
  href: string
}

export type ProjectSummary = {
  id: string
  title: string
  location: string
  category: string
  image: string
  spanClass?: string
  aspectRatio?: string
}

export type ProjectDetail = {
  title: string
  location: string
  category: string
  year: string
  scope: string
  description: string
  challenge: string
  solution: string
  images: string[]
  details: { label: string; value: string }[]
  nextProject: { slug: string; title: string }
  prevProject: { slug: string; title: string }
}

export type Service = {
  number: string
  title: string
  description: string
  features: string[]
  images: string[]
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type Value = {
  title: string
  description: string
}

export type Award = {
  year: string
  award: string
}

export type SelectOption = {
  value: string
  label: string
}

export interface LegalSection {
  id: string
  title: string
  content: string[]
}
```

---

## 8. Key Engineering Modules & Architectural Patterns

### 1. Double-Buffered Video Crossfade Hero Header

- Implemented in [`app/(marketing)/_components/hero-section.tsx`](<file:///c:/SharedData/Projects/Aaditya/ISketch/app/(marketing)/_components/hero-section.tsx>).
- Maintains two parallel `<video>` DOM nodes (A and B) to eliminate black flashes during background video switches.
- Preloading of Video B is triggered only after Video A reaches 50% playback to optimize initial page load bandwidth.

### 2. High-Performance Image Reveal System

- Implemented in [`hooks/use-image-ready.ts`](file:///c:/SharedData/Projects/Aaditya/ISketch/hooks/use-image-ready.ts).
- Integrates viewport intersection detection with native browser `img.decode()` promise execution.
- Includes a 3000ms safety fallback timer ensuring image presentation even during delayed network responses.

### 3. Shared Deduplicated IntersectionObserver Singleton

- Implemented in [`hooks/use-intersection.ts`](file:///c:/SharedData/Projects/Aaditya/ISketch/hooks/use-intersection.ts).
- Consolidates ~20 individual component scroll observers into a single `IntersectionObserver` per threshold, drastically reducing CPU usage during scroll.

### 4. Dynamic Pre-rendered SSG Project Pages

- Implemented in [`app/(marketing)/portfolio/[slug]/page.tsx`](<file:///c:/SharedData/Projects/Aaditya/ISketch/app/(marketing)/portfolio/[slug]/page.tsx>).
- Employs Next.js `generateStaticParams()` to compile static HTML pages for all project case studies at build time.
- Uses `generateMetadata()` to generate custom OpenGraph and Twitter cards per project.

### 5. Automated JSON-LD Schema Infrastructure

- Implemented in [`lib/schema.ts`](file:///c:/SharedData/Projects/Aaditya/ISketch/lib/schema.ts) and [`components/shared/structured-data.tsx`](file:///c:/SharedData/Projects/Aaditya/ISketch/components/shared/structured-data.tsx).
- Generates structured schema payloads for `InteriorDesigner`, `LocalBusiness`, `WebSite`, `BreadcrumbList`, `Service`, and `CreativeWork`.

---

## 9. Developer Execution Commands

```bash
# 1. Install dependencies via pnpm (Lockfile: pnpm-lock.yaml)
pnpm install

# 2. Start development server with Turbopack compilation
pnpm dev:turbo

# 3. Start standard development server
pnpm dev

# 4. Perform production build compilation
pnpm build

# 5. Serve local production build preview
pnpm start

# 6. Execute ESLint code checks
pnpm lint

# 7. Execute strict TypeScript type verification without emitting files
pnpm typecheck

# 8. Format all workspace code via Prettier
pnpm format

# 9. Comprehensive pre-commit verification pipeline
pnpm check
```

---

## 10. Security & Performance Contract

1. **Security Headers**: Standardized in `next.config.mjs` including HSTS (`max-age=63072000`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and strict `Permissions-Policy`.
2. **Asset Optimization**: AVIF and WebP auto-negotiation via Next.js Image Optimization with 1-year immutable caching on static routes.
3. **Accessibility Standard**: Enforces full keyboard navigation, screen-reader ARIA landmarks, and animation deactivation under `prefers-reduced-motion: reduce`.
