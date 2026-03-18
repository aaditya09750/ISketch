import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type ContactDetail = {
  icon: LucideIcon
  title: string
  content: string
}

export type SelectOption = {
  value: string
  label: string
}

export type ContactCategory = {
  title: string
  email: string
  phone?: string
}

export const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Studio Address",
    content: "123 Design Street\nKensington\nLondon, SW7 1AB",
  },
  {
    icon: Phone,
    title: "Telephone",
    content: "+44 (0)20 7123 4567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "studio@isketchinteriors.com",
  },
  {
    icon: Clock,
    title: "Studio Hours",
    content: "Monday \u2013 Friday: 9:00 \u2013 18:00\nWeekends: By appointment only",
  },
]

export const projectTypes: SelectOption[] = [
  { value: "", label: "Select project type" },
  { value: "full-design", label: "Full Interior Design" },
  { value: "consultation", label: "Consultation" },
  { value: "property-styling", label: "Property Styling" },
  { value: "bespoke-joinery", label: "Bespoke Joinery" },
  { value: "other", label: "Other" },
]

export const budgetRanges: SelectOption[] = [
  { value: "", label: "Select budget range" },
  { value: "under-50k", label: "Under \u00a350,000" },
  { value: "50k-100k", label: "\u00a350,000 \u2013 \u00a3100,000" },
  { value: "100k-250k", label: "\u00a3100,000 \u2013 \u00a3250,000" },
  { value: "250k-500k", label: "\u00a3250,000 \u2013 \u00a3500,000" },
  { value: "over-500k", label: "Over \u00a3500,000" },
]

export const contactCategories: ContactCategory[] = [
  {
    title: "New Projects",
    email: "enquiries@isketchinteriors.com",
    phone: "+44 (0)20 7123 4567",
  },
  {
    title: "General Enquiries",
    email: "info@isketchinteriors.com",
    phone: "+44 (0)20 7123 4567",
  },
  {
    title: "Press Enquiries",
    email: "press@isketchinteriors.com",
  },
]
