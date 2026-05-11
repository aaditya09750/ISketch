import type { Metadata } from "next"
import { MaintenanceContent } from "../_components/maintenance-content"

export const metadata: Metadata = {
  title: "Under Maintenance",
  description: "I Sketch Interiors is undergoing scheduled maintenance. We will be back shortly.",
  alternates: { canonical: "/maintenance" },
  robots: { index: false, follow: false },
}

export default function MaintenancePage() {
  return <MaintenanceContent />
}
