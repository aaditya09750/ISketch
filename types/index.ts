// Shared type definitions extracted from data files

export type NavLink = {
  label: string;
  href: string;
};

export type ProjectSummary = {
  id: string
  title: string
  location: string
  category: string
  image: string
}

export type ProjectDetail = {
  title: string
  location: string
  category: string
  year: string
  scope: string
  description: string
  challenge: string
  solution: string
  images: string[]
  details: { label: string; value: string }[]
  nextProject: { slug: string; title: string }
  prevProject: { slug: string; title: string }
}

export type Service = {
  number: string
  title: string
  description: string
  features: string[]
  images: string[]
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type Value = {
  title: string
  description: string
}

export type Award = {
  year: string
  award: string
}

export type SelectOption = {
  value: string
  label: string
}

export interface LegalSection {
  id: string
  title: string
  content: string[]
}
