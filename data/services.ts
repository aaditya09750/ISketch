import type { Service, ProcessStep } from "@/types"

export type { Service, ProcessStep }

export const services: Service[] = [
  {
    number: "01",
    title: "Full Interior Design",
    description:
      "A comprehensive service encompassing every aspect of your project, from initial concept through to final installation. We manage all elements including space planning, material selection, custom furniture design, and coordination with contractors.",
    features: [
      "Concept Development",
      "Space Planning",
      "Material Selection",
      "Furniture Design",
      "Project Management",
    ],
    images: ["/images/project-1.jpg", "/images/project-2.jpg", "/images/project-3.jpg"],
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "For clients seeking expert guidance on specific aspects of their project. Our consultation service provides professional advice on colour schemes, furniture layouts, lighting design, and material choices.",
    features: [
      "Design Direction",
      "Colour Consultation",
      "Furniture Selection",
      "Lighting Advice",
      "Shopping Service",
    ],
    images: ["/images/project-4.jpg", "/images/project-5.jpg", "/images/project-6.jpg"],
  },
  {
    number: "03",
    title: "Property Styling",
    description:
      "Transform your property for sale or rental with our expert styling service. We curate furnishings and accessories to showcase your space at its finest, maximising appeal to potential buyers or tenants.",
    features: ["Rental Styling", "Photography Styling", "Accessory Curation"],
    images: ["/images/p1.jpg", "/images/p2.jpg", "/images/p3.jpg"],
  },
  {
    number: "04",
    title: "Bespoke Joinery",
    description:
      "Custom-designed and crafted joinery tailored to your exact specifications. From built-in wardrobes to statement kitchen cabinetry, we work with master craftsmen to create pieces of exceptional quality.",
    features: [
      "Custom Cabinetry",
      "Built-in Storage",
      "Kitchen Design",
      "Bathroom Vanities",
      "Statement Pieces",
    ],
    images: ["/images/project-1.jpg", "/images/project-3.jpg", "/images/project-5.jpg"],
  },
]

export const designProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a detailed discussion of your vision, requirements, and budget. This allows us to understand your lifestyle and aesthetic preferences.",
  },
  {
    step: "02",
    title: "Concept Development",
    description:
      "Our team develops comprehensive design concepts, including mood boards, floor plans, and preliminary material selections for your review.",
  },
  {
    step: "03",
    title: "Design Development",
    description:
      "Once the concept is approved, we refine every detail, from furniture specifications to lighting plans, creating a complete design package.",
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "We oversee every aspect of the installation, coordinating with contractors and suppliers to ensure flawless execution of the design.",
  },
]
