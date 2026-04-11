import type { MetadataRoute } from "next"

const BASE_URL = "https://isketch.in"

/**
 * robots.txt rule set.
 *
 * - Default (`*`): allow everything except build internals and API routes.
 * - Googlebot / Googlebot-Image: explicit allow (belt-and-suspenders for
 *   image search, which is a primary discovery surface for interiors).
 * - Google-Extended: opt in to Google AI Overviews / Gemini grounding.
 * - AI search crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.): explicit
 *   allow so the brand appears in ChatGPT / Perplexity / Claude answers.
 */
export default function robots(): MetadataRoute.Robots {
  const commonDisallow = ["/api/", "/_next/", "/_vercel/", "/*.json$"]

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/portfolio/", "/about", "/services"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: commonDisallow,
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: commonDisallow,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
