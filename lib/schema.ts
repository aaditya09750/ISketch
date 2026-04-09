const BASE_URL = "https://isketch.in"

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "@id": `${BASE_URL}/#organization`,
    name: "I Sketch Interiors",
    alternateName: "ISketch Interiors",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    image: `${BASE_URL}/images/hero.jpg`,
    description:
      "I Sketch Interiors is a luxury interior design studio based in Thane, Maharashtra, specialising in bespoke residential interiors across Mumbai, Pune, and internationally.",
    telephone: ["+919967312203", "+919892515655"],
    email: "studio@isketchinteriors.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Courtyard, Asteria A/604, Pokhran Road No. 2",
      addressLocality: "Thane West",
      addressRegion: "Maharashtra",
      postalCode: "400601",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.2183,
      longitude: 72.9781,
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Pune" },
    ],
    priceRange: "$$$$",
    knowsAbout: [
      "Interior Design",
      "Luxury Residential Interiors",
      "Bespoke Joinery",
      "Property Styling",
      "Design Consultation",
    ],
  }
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "I Sketch Interiors",
    url: BASE_URL,
    publisher: { "@id": `${BASE_URL}/#organization` },
  }
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

export function getServiceSchema(service: {
  title: string
  description: string
  features: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${BASE_URL}/#organization` },
    serviceType: "Interior Design",
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Thane" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f },
      })),
    },
  }
}

export function getProjectSchema(
  project: {
    title: string
    description: string
    images: string[]
    location: string
    year: string
    category: string
  },
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${BASE_URL}/portfolio/${slug}`,
    image: project.images.map((img) =>
      img.startsWith("http") ? img : `${BASE_URL}${img}`
    ),
    dateCreated: project.year,
    locationCreated: { "@type": "Place", name: project.location },
    creator: { "@id": `${BASE_URL}/#organization` },
    keywords: ["interior design", project.category.toLowerCase()],
  }
}
