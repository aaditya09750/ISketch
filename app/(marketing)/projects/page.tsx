import { ProjectsContent } from "./_components/projects-content"
import { StructuredData } from "@/components/shared/structured-data"
import { getBreadcrumbSchema } from "@/lib/schema"

export const metadata = {
  title: "Recent Interior Design Projects in Mumbai & Thane — I Sketch Interiors",
  description:
    "Browse recent luxury interior design projects by I Sketch Interiors across Thane, Mumbai, Pune, and internationally. Residential interiors, bespoke joinery, and property styling.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Recent Interior Design Projects — I Sketch Interiors",
    description:
      "125+ completed luxury interior design projects across Thane, Mumbai, Pune, and internationally — residential interiors, bespoke joinery, and property styling.",
  },
}

export default function ProjectsPage() {
  return (
    <>
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
