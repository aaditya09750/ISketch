# ISketch Interiors

Luxury interior design studio portfolio website.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS v4, Radix UI, shadcn/ui (new-york style)
- **Animation**: Framer Motion, Lenis (smooth scroll), CSS transitions
- **Forms**: React Hook Form + Zod
- **Package Manager**: pnpm

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

- **Route groups**: `(marketing)` for business pages, `(legal)` for legal pages
- **Colocation**: Page-specific components live in `_components/` next to their page
- **Shared components**: `components/shared/` for cross-page components
- **Layout**: `components/layout/` (header, footer, layout-shell, whatsapp-button)
- **Providers**: `components/providers/` (layout context, smooth scroll)
- **Data**: `data/` directory with typed static data files
- **Types**: `types/index.ts` for shared type definitions

## Key Patterns

- Server Components by default, `"use client"` only where needed
- `useImageReady` hook for viewport-aware image decode + reveal animations
- IntersectionObserver for scroll-triggered animations
- Double-buffered video switching in hero section
- CSS custom properties (oklch) for theming with dark mode support
- `@/*` path alias maps to project root
