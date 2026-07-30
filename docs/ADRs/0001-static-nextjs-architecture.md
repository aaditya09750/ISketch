# ADR 0001: Keep ISketch Static and Content-Driven

## Status

Accepted

## Context

ISketch is a luxury interior design marketing site. The existing repository already ships as a Next.js App Router site with static content modules, static assets, and SEO-first rendering. The business does not require live user accounts, editable CMS content, or transactional backend flows for the current scope.

## Decision

Keep the application static and content-driven:

- Store canonical content in `data/*.ts`.
- Render routes through the App Router.
- Generate metadata, sitemap entries, and JSON-LD from the same content source.
- Avoid introducing a database, auth system, or API layer for the current scope.

## Consequences

### Positive

- Fast initial loads.
- Small attack surface.
- Straightforward deployment.
- Type-safe content updates.

### Negative

- Content updates require code changes.
- No live editing interface.
- No built-in lead capture backend.

### Follow-up Paths

- If content editing becomes frequent, introduce a CMS adapter.
- If lead capture becomes necessary, add a small server-side form workflow.
- If multi-language expansion becomes necessary, add locale-aware content modules.