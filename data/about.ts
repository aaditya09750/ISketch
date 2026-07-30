import type { Value, Award } from "@/types"

export type { Value, Award }

export const values: Value[] = [
  {
    title: "Timeless Design",
    description:
      "We create interiors that transcend fleeting trends, focusing on quality, proportion, and enduring elegance that will remain beautiful for generations.",
  },
  {
    title: "Bespoke Approach",
    description:
      "Every project is unique. We tailor our designs to reflect your individual style, needs, and aspirations, ensuring spaces that feel authentically yours.",
  },
  {
    title: "Exceptional Quality",
    description:
      "From concept to completion, we maintain the highest standards, working with master craftsmen and sourcing the finest materials.",
  },
]

export const awards: Award[] = [
  { year: "2025", award: "Best Luxury Interior Design Studio" },
  { year: "2024", award: "Excellence in Residential Design" },
  { year: "2023", award: "International Design Award" },
  { year: "2022", award: "Best Use of Materials" },
]

export const publications = [
  "Architectural Digest",
  "House & Garden",
  "Elle Decoration",
  "Homes & Gardens",
  "The Times",
  "Tatler",
]
