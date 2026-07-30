# Setup

## Local Development

### Prerequisites

- Node.js 22+
- pnpm

### Install

```bash
pnpm install
```

### Run

```bash
pnpm dev
```

Open `http://localhost:3000`.

### Verify

```bash
pnpm lint
npx tsc --noEmit
pnpm build
```

## Deployment

The site is designed for a static deployment target such as Vercel.

No extra services are required for the current codebase.

## Screenshots

<!-- TODO: screenshot -->

## Notes

- Content lives in TypeScript files under `data/`.
- Update routes in `app/` and `app/sitemap.ts` together.
- Legal pages remain noindex.