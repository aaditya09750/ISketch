import { ProjectsContent } from "./_components/projects-content"

export const metadata = {
  title: "Projects",
  description: "Explore our completed luxury interior design projects — from Belgravia townhouses to Dubai penthouses. 20+ years of crafting bespoke residential spaces.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
