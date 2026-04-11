import type { MetadataRoute } from "next"
import { projectDetails } from "@/data/projects"

const BASE_URL = "https://isketch.in"

/**
 * Dynamic sitemap. Rebuilt at every `next build`.
 *
 * - Static routes use deploy time for lastModified.
 * - Portfolio detail routes derive lastModified from the project year
 *   so Google re-crawls pages whose content genuinely changed.
 * - Image entries feed Google Image Search, which is a primary discovery
 *   surface for interior-design queries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${BASE_URL}/images/hero.jpg`],
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${BASE_URL}/images/about-hero.jpg`],
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${BASE_URL}/images/services-hero.jpg`],
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = Object.entries(projectDetails).map(
    ([slug, project]) => {
      const yearNumber = Number.parseInt(project.year, 10)
      const projectDate =
        Number.isFinite(yearNumber) && yearNumber > 1990
          ? new Date(yearNumber, 11, 31)
          : now

      return {
        url: `${BASE_URL}/portfolio/${slug}`,
        lastModified: projectDate,
        changeFrequency: "monthly",
        priority: 0.8,
        images: project.images
          .slice(0, 5)
          .map((img) => (img.startsWith("http") ? img : `${BASE_URL}${img}`)),
      }
    },
  )

  return [...staticRoutes, ...projectRoutes]
}
