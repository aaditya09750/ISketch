# Setup

## Local Development

### Prerequisites

- Node.js 22+
- pnpm
- Git

### Install Dependencies

```bash
pnpm install
```

### Start the App

```bash
pnpm dev
```

Open `http://localhost:3000`.

### Verify the Repo

```bash
pnpm lint
pnpm format:check
pnpm typecheck
pnpm build
```

## Third-Party Services

### Vercel Deployment

The site is designed for Vercel. No extra configuration is needed beyond the normal Next.js deployment flow.

### Analytics

Vercel Analytics and Speed Insights are already wired into the app layout. No API keys are required for the current setup.

### Fonts and Media

The project uses local font and media assets in `public/`. Keep those files in place when cloning or moving the repository.

### Maintenance Mode

Set `MAINTENANCE_MODE=true` to serve the maintenance page through `middleware.ts`.

## Operational Notes

- Content lives in TypeScript files under `data/`.
- Update routes in `app/` and `app/sitemap.ts` together.
- Keep legal pages `noindex`.

## Screenshots

<!-- TODO: screenshot -->

## Troubleshooting

- If fonts or media 404, confirm the `public/` assets were copied intact.
- If the maintenance page appears unexpectedly, check `MAINTENANCE_MODE`.
- If linting fails, confirm the repo dependencies were installed with pnpm.
