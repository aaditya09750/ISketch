import type { Metadata } from "next"
import { LegalPageLayout } from "../_components/legal-page-layout"
import { privacyPolicySections } from "@/data/legal"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how I Sketch Interiors collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
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
