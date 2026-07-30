import type { Metadata } from "next"
import { ProjectsContent } from "./_components/projects-content"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Recent Interior Design Projects in Mumbai & Thane — I Sketch Interiors",
  description:
    "Browse recent luxury interior design projects by I Sketch Interiors across Thane, Mumbai, Pune, and internationally. Residential interiors, bespoke joinery, and property styling.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Recent Interior Design Projects — I Sketch Interiors",
    description:
      "125+ completed luxury interior design projects across Thane, Mumbai, Pune, and internationally — residential interiors, bespoke joinery, and property styling.",
    images: [
      {
        url: "/images/project-2.jpg",
        width: 1200,
        height: 630,
        alt: "Recent Interior Design Projects by I Sketch Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recent Interior Design Projects — I Sketch Interiors",
    description:
      "125+ completed luxury interior design projects across Thane, Mumbai, Pune, and internationally.",
    images: ["/images/project-2.jpg"],
  },
}

export default function ProjectsPage() {
  return (
    <>
      <StructuredData
        data={getWebPageSchema({
          name: "Recent Interior Design Projects — I Sketch Interiors",
          description:
            "Browse recent luxury interior design projects by I Sketch Interiors across Thane, Mumbai, Pune, and internationally.",
          url: "/projects",
          type: "CollectionPage",
        })}
      />
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ])}
      />
      <ProjectsContent />
    </>
  )
}
