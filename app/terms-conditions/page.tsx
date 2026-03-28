import { LegalPageLayout } from "@/components/ui/legal-page-layout"
import { termsConditionsSections } from "@/data/legal"

export const metadata = {
  title: "Terms & Conditions | I Sketch Interiors",
  description: "Read the terms and conditions governing the use of I Sketch Interiors website and services.",
}

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      label="Legal"
      title="Terms & Conditions"
      effectiveDate="29 March 2026"
      sections={termsConditionsSections}
    />
  )
}
