import { MapPin, Phone, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { SelectOption } from "@/types"

export type ContactDetail = {
  icon: LucideIcon
  title: string
  content: string
}

export type { SelectOption }

export const studioContact = {
  email: "studio@isketchinteriors.com",
  phones: ["+91 99673 12203", "+91 98925 15655"],
}

export const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Our Address",
    content: "The Courtyard, Asteria A/604, \nPokhran road no. 2, Thane west\nMaharashtra, India",
  },
  {
    icon: Phone,
    title: "Telephone",
    content: "+91 99673 12203 \n+91 98925 15655",
  },
  {
    icon: Mail,
    title: "Email",
    content: "studio@isketchinteriors.com",
  },
]
