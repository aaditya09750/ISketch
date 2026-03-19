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

export const featuredProjects = [
  {
    id: 1,
    title: "Belgravia Townhouse",
    location: "London",
    image: "/images/p1.webp",
    href: "/portfolio/belgravia-townhouse",
  },
  {
    id: 2,
    title: "Surrey Country Estate",
    location: "Surrey",
    image: "/images/p2.webp",
    href: "/portfolio/surrey-country-estate",
  },
  {
    id: 3,
    title: "Dubai Penthouse",
    location: "Middle East",
    image: "/images/p3.webp",
    href: "/portfolio/dubai-penthouse",
  },
]

export const portfolioProjects: ProjectSummary[] = [
  {
    id: "belgravia-townhouse",
    title: "Belgravia Townhouse",
    location: "London",
    category: "Residential",
    image: "/images/project-1.jpg",
  },
  {
    id: "surrey-country-estate",
    title: "Surrey Country Estate",
    location: "Surrey",
    category: "Residential",
    image: "/images/project-2.jpg",
  },
  {
    id: "dubai-penthouse",
    title: "Dubai Penthouse",
    location: "Dubai",
    category: "International",
    image: "/images/project-3.jpg",
  },
  {
    id: "chelsea-apartment",
    title: "Chelsea Apartment",
    location: "London",
    category: "Residential",
    image: "/images/project-4.jpg",
  },
  {
    id: "kensington-kitchen",
    title: "Kensington Kitchen",
    location: "London",
    category: "Kitchen",
    image: "/images/project-5.jpg",
  },
  {
    id: "notting-hill-dining",
    title: "Notting Hill Residence",
    location: "London",
    category: "Residential",
    image: "/images/project-6.jpg",
  },
]

export const portfolioCategories = ["All", "Residential", "International", "Kitchen"]

export const projectDetails: Record<string, ProjectDetail> = {
  "belgravia-townhouse": {
    title: "Belgravia Townhouse",
    location: "London, United Kingdom",
    category: "Residential",
    year: "2024",
    scope: "Full Interior Design",
    description: "A comprehensive renovation of this elegant Georgian townhouse, transforming it into a sophisticated family residence that honours its architectural heritage while embracing contemporary living.",
    challenge: "The client sought to create a home that balanced the formal elegance befitting a Grade II listed property with the practical needs of a young family. Every detail needed to respect the building's historic character whilst introducing modern comfort and functionality.",
    solution: "We developed a refined palette of soft neutrals and warm accents, complemented by bespoke joinery and carefully curated antiques. The result is a series of spaces that flow seamlessly, each room offering its own distinct character whilst maintaining a cohesive narrative throughout.",
    images: ["/images/project-1.jpg", "/images/hero.jpg", "/images/project-4.jpg"],
    details: [
      { label: "Size", value: "6,500 sq ft" },
      { label: "Duration", value: "18 months" },
      { label: "Bedrooms", value: "6" },
      { label: "Style", value: "Contemporary Classic" },
    ],
    nextProject: { slug: "surrey-country-estate", title: "Surrey Country Estate" },
    prevProject: { slug: "notting-hill-dining", title: "Notting Hill Residence" },
  },
  "surrey-country-estate": {
    title: "Surrey Country Estate",
    location: "Surrey, United Kingdom",
    category: "Residential",
    year: "2023",
    scope: "Full Interior Design",
    description: "A grand country estate reimagined for modern family living, blending traditional English elegance with contemporary comfort across formal reception rooms, intimate family spaces, and luxurious bedroom suites.",
    challenge: "This substantial property required a cohesive design approach that would unify its many rooms whilst allowing each space to have its own distinct personality and purpose.",
    solution: "Drawing inspiration from the surrounding countryside, we created interiors that embrace natural materials and a muted colour palette. Bespoke furniture and carefully selected antiques sit alongside contemporary pieces, creating rooms that feel both timeless and lived-in.",
    images: ["/images/project-2.jpg", "/images/about.jpg", "/images/project-6.jpg"],
    details: [
      { label: "Size", value: "12,000 sq ft" },
      { label: "Duration", value: "24 months" },
      { label: "Bedrooms", value: "8" },
      { label: "Style", value: "English Country" },
    ],
    nextProject: { slug: "dubai-penthouse", title: "Dubai Penthouse" },
    prevProject: { slug: "belgravia-townhouse", title: "Belgravia Townhouse" },
  },
  "dubai-penthouse": {
    title: "Dubai Penthouse",
    location: "Dubai, UAE",
    category: "International",
    year: "2023",
    scope: "Full Interior Design",
    description: "A spectacular penthouse apartment offering panoramic views of the Dubai skyline, designed to provide a serene sanctuary that balances metropolitan sophistication with understated luxury.",
    challenge: "Creating an interior that would complement the dramatic architecture and views whilst providing a calm, restful environment away from the energy of the city below.",
    solution: "We employed a palette of warm neutrals and soft metallics, with custom furniture designed to frame the extraordinary views. Natural materials including stone, silk, and hand-finished plaster create texture and warmth throughout.",
    images: ["/images/project-3.jpg", "/images/project-5.jpg", "/images/hero.jpg"],
    details: [
      { label: "Size", value: "8,000 sq ft" },
      { label: "Duration", value: "14 months" },
      { label: "Bedrooms", value: "4" },
      { label: "Style", value: "Contemporary Luxury" },
    ],
    nextProject: { slug: "chelsea-apartment", title: "Chelsea Apartment" },
    prevProject: { slug: "surrey-country-estate", title: "Surrey Country Estate" },
  },
  "chelsea-apartment": {
    title: "Chelsea Apartment",
    location: "London, United Kingdom",
    category: "Residential",
    year: "2024",
    scope: "Full Interior Design",
    description: "A sophisticated pied-\u00e0-terre in the heart of Chelsea, designed for a discerning client who sought a refined retreat for their London visits.",
    challenge: "Maximising the sense of space and light in a relatively compact footprint whilst maintaining the level of luxury and attention to detail expected in a premium Chelsea address.",
    solution: "Thoughtful space planning and a light, airy palette create the illusion of greater space. Custom built-in storage and multi-functional furniture ensure practicality without compromising on style.",
    images: ["/images/project-4.jpg", "/images/project-1.jpg", "/images/about.jpg"],
    details: [
      { label: "Size", value: "2,200 sq ft" },
      { label: "Duration", value: "8 months" },
      { label: "Bedrooms", value: "2" },
      { label: "Style", value: "Modern Elegant" },
    ],
    nextProject: { slug: "kensington-kitchen", title: "Kensington Kitchen" },
    prevProject: { slug: "dubai-penthouse", title: "Dubai Penthouse" },
  },
  "kensington-kitchen": {
    title: "Kensington Kitchen",
    location: "London, United Kingdom",
    category: "Kitchen",
    year: "2024",
    scope: "Kitchen Design",
    description: "A stunning kitchen renovation that transformed a dated space into the heart of this Kensington family home, combining professional-grade functionality with timeless design.",
    challenge: "Creating a kitchen that would satisfy a passionate home cook whilst maintaining the elegant aesthetic of the surrounding period property.",
    solution: "Bespoke cabinetry in a soft sage green provides ample storage whilst complementing the home's heritage. Professional appliances are seamlessly integrated, and a generous island provides space for cooking, dining, and gathering.",
    images: ["/images/project-5.jpg", "/images/project-6.jpg", "/images/project-4.jpg"],
    details: [
      { label: "Size", value: "450 sq ft" },
      { label: "Duration", value: "4 months" },
      { label: "Features", value: "Bespoke Cabinetry" },
      { label: "Style", value: "Classic Contemporary" },
    ],
    nextProject: { slug: "notting-hill-dining", title: "Notting Hill Residence" },
    prevProject: { slug: "chelsea-apartment", title: "Chelsea Apartment" },
  },
  "notting-hill-dining": {
    title: "Notting Hill Residence",
    location: "London, United Kingdom",
    category: "Residential",
    year: "2023",
    scope: "Full Interior Design",
    description: "A complete transformation of this Notting Hill townhouse, creating elegant entertaining spaces and comfortable family areas across four floors.",
    challenge: "Balancing the client's love of entertaining with the practical needs of family life, all within a vertical townhouse layout.",
    solution: "We designed distinct zones for formal entertaining and relaxed family time, connected by a consistent design language. Statement lighting and carefully placed art create focal points throughout.",
    images: ["/images/project-6.jpg", "/images/project-2.jpg", "/images/hero.jpg"],
    details: [
      { label: "Size", value: "4,800 sq ft" },
      { label: "Duration", value: "16 months" },
      { label: "Bedrooms", value: "5" },
      { label: "Style", value: "Eclectic Elegant" },
    ],
    nextProject: { slug: "belgravia-townhouse", title: "Belgravia Townhouse" },
    prevProject: { slug: "kensington-kitchen", title: "Kensington Kitchen" },
  },
}
