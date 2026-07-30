# API Reference

The current ISketch repository does not expose live HTTP API routes.

The public surface is rendered from the Next.js App Router and static content in `data/*.ts`.

## Route Inventory

| Method | Path                | Purpose                   | Source of Truth                             |
| ------ | ------------------- | ------------------------- | ------------------------------------------- |
| `GET`  | `/`                 | Home page                 | `app/(marketing)/page.tsx`                  |
| `GET`  | `/about`            | Studio story and values   | `app/(marketing)/about/page.tsx`            |
| `GET`  | `/services`         | Service catalog           | `app/(marketing)/services/page.tsx`         |
| `GET`  | `/portfolio`        | Portfolio grid            | `app/(marketing)/portfolio/page.tsx`        |
| `GET`  | `/portfolio/[slug]` | Portfolio detail page     | `app/(marketing)/portfolio/[slug]/page.tsx` |
| `GET`  | `/projects`         | Featured project showcase | `app/(marketing)/projects/page.tsx`         |
| `GET`  | `/contact`          | Contact page              | `app/(marketing)/contact/page.tsx`          |
| `GET`  | `/privacy-policy`   | Privacy policy            | `app/(legal)/privacy-policy/page.tsx`       |
| `GET`  | `/terms-conditions` | Terms and conditions      | `app/(legal)/terms-conditions/page.tsx`     |

## Response Model

These routes render HTML, CSS, and client-side interactivity. There is no JSON response contract because there is no API layer.

## Content Flow

| Content       | File                 |
| ------------- | -------------------- |
| Projects      | `data/projects.ts`   |
| Services      | `data/services.ts`   |
| About content | `data/about.ts`      |
| Contact/NAP   | `data/contact.ts`    |
| Navigation    | `data/navigation.ts` |
| Legal copy    | `data/legal.ts`      |

## Example Inspection

Open a route directly in the browser:

```text
http://localhost:3000/portfolio
```

## Important Notes

- Portfolio detail pages are statically generated from `data/projects.ts`.
- Contact actions are browser navigation or external links, not form submissions.
- `README.md` is the high-level map; this file is the route inventory.
