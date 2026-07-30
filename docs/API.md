# API Reference

The current ISketch repository does not expose live HTTP API routes.

The public surface is rendered from the Next.js App Router and static content in `data/*.ts`.

## Available Routes

- `GET /` — Home page
- `GET /about` — Studio story and values
- `GET /services` — Service catalog
- `GET /portfolio` — Portfolio grid
- `GET /portfolio/[slug]` — Portfolio detail page
- `GET /projects` — Featured project showcase
- `GET /contact` — Contact page
- `GET /privacy-policy` — Privacy policy
- `GET /terms-conditions` — Terms and conditions

## Example Navigation Request

There is no JSON API to call. To inspect a route, open it directly in the browser:

```bash
http://localhost:3000/portfolio
```

## Notes

- Portfolio detail pages are statically generated from `data/projects.ts`.
- Contact actions are external links or browser navigation, not form submissions.