import { LegalPageLayout } from "../_components/legal-page-layout"
import { privacyPolicySections } from "@/data/legal"

export const metadata = {
  title: "Privacy Policy | I Sketch Interiors",
  description: "Learn how I Sketch Interiors collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      label="Legal"
      title="Privacy Policy"
      effectiveDate="29 March 2026"
      sections={privacyPolicySections}
    />
  )
}
