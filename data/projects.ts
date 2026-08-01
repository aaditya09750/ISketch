import type { ProjectSummary, ProjectDetail } from "@/types"

export type { ProjectSummary, ProjectDetail }

export const studioProjects: ProjectSummary[] = [
  {
    id: "asteria-courtyard",
    title: "Asteria Courtyard",
    location: "Thane",
    category: "Residential",
    image: "/images/projects/asteria-courtyard/cover.jpg",
    aspectRatio: "auto",
  },
  {
    id: "nyati-chesterfield",
    title: "Nyati Chesterfield",
    location: "Pune",
    category: "Residential",
    image: "/images/projects/nyati-chesterfield/cover.jpg",
    aspectRatio: "auto",
  },
  {
    id: "revanta-residence",
    title: "Revanta Residence",
    location: "Mumbai",
    category: "Residential",
    image: "/images/projects/revanta-residence/cover.png",
    aspectRatio: "auto",
  },
  {
    id: "rosehill-hiranandani",
    title: "Rosehill Hiranandani Estate",
    location: "Thane",
    category: "Residential",
    image: "/images/projects/rosehill-hiranandani/cover.jpg",
    aspectRatio: "auto",
  },
  {
    id: "rosemount-1601",
    title: "Rosemount 1601 Hiranandani",
    location: "Thane",
    category: "Residential",
    image: "/images/projects/rosemount-1601/cover.png",
    aspectRatio: "auto",
  },
  {
    id: "rosemount-1801",
    title: "Rosemount 1801 Hiranandani",
    location: "Thane",
    category: "Residential",
    image: "/images/projects/rosemount-1801/cover.jpg",
    aspectRatio: "auto",
  },
]

export const featuredProjects = studioProjects.slice(0, 3).map((p, idx) => ({
  id: idx + 1,
  title: p.title,
  location: p.location,
  image: p.image,
  href: `/portfolio/${p.id}`,
}))

export const portfolioProjects: ProjectSummary[] = [
  {
    id: "asteria-courtyard-entry",
    title: "Asteria Entrance & Vestibule",
    location: "Thane",
    category: "Residential",
    image: "/images/gallery/gallery-01.jpg",
    aspectRatio: "auto",
  },
  {
    id: "luxury-living-suite",
    title: "Luxury Living Suite",
    location: "Mumbai",
    category: "Residential",
    image: "/images/gallery/gallery-02.jpg",
    aspectRatio: "auto",
  },
  {
    id: "grand-reception-hall",
    title: "Grand Reception Hall",
    location: "Mumbai",
    category: "Residential",
    image: "/images/gallery/gallery-03.jpg",
    aspectRatio: "auto",
  },
  {
    id: "asteria-courtyard-grounds",
    title: "Asteria Courtyard Grounds",
    location: "Thane",
    category: "Residential",
    image: "/images/gallery/gallery-04.jpg",
    aspectRatio: "auto",
  },
  {
    id: "penthouse-lounge",
    title: "Penthouse Open Lounge",
    location: "Mumbai",
    category: "Residential",
    image: "/images/gallery/gallery-05.jpg",
    aspectRatio: "auto",
  },
  {
    id: "rosemount-royal-suite",
    title: "Rosemount Royal Residence",
    location: "Thane",
    category: "Residential",
    image: "/images/gallery/gallery-09.png",
    aspectRatio: "auto",
  },
  {
    id: "chesterfield-bedroom",
    title: "Chesterfield Master Suite",
    location: "Pune",
    category: "Residential",
    image: "/images/gallery/gallery-06.jpg",
    aspectRatio: "auto",
  },
  {
    id: "revanta-dining",
    title: "Revanta Dining Pavilion",
    location: "Mumbai",
    category: "Residential",
    image: "/images/gallery/gallery-07.jpg",
    aspectRatio: "auto",
  },
  {
    id: "bespoke-joinery",
    title: "Custom Architectural Joinery",
    location: "Thane",
    category: "Residential",
    image: "/images/gallery/gallery-08.jpg",
    aspectRatio: "auto",
  },
  {
    id: "chesterfield-kitchen",
    title: "Nyati Chesterfield Kitchen",
    location: "Pune",
    category: "Kitchen",
    image: "/images/gallery/gallery-11.png",
    aspectRatio: "auto",
  },
  {
    id: "rosehill-penthouse",
    title: "Rosehill Estate Parlour",
    location: "Thane",
    category: "Residential",
    image: "/images/gallery/gallery-10.png",
    aspectRatio: "auto",
  },
  {
    id: "asteria-garden-terrace",
    title: "Asteria Garden Lounge",
    location: "Thane",
    category: "International",
    image: "/images/gallery/gallery-12.png",
    aspectRatio: "auto",
  },
  {
    id: "revanta-executive-study",
    title: "Revanta Executive Archway",
    location: "Mumbai",
    category: "Residential",
    image: "/images/gallery/gallery-13.png",
    aspectRatio: "auto",
  },
  {
    id: "hiranandani-sky-villa",
    title: "Hiranandani Sky Foyer",
    location: "Thane",
    category: "International",
    image: "/images/gallery/gallery-14.png",
    aspectRatio: "auto",
  },
  {
    id: "asteria-grand-heritage",
    title: "Asteria Grand Heritage Suite",
    location: "Thane",
    category: "Residential",
    image: "/images/gallery/gallery-15.jpg",
    aspectRatio: "auto",
  },
  {
    id: "nyati-royal-residency",
    title: "Nyati Royal Residency",
    location: "Pune",
    category: "International",
    image: "/images/gallery/gallery-16.jpg",
    aspectRatio: "auto",
  },
]

export const portfolioCategories = ["All", "Residential", "International", "Kitchen"]

export const projectDetails: Record<string, ProjectDetail> = {
  "asteria-courtyard": {
    title: "Asteria Courtyard",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Full Interior Architecture",
    description:
      "A landmark residential sanctuary featuring intricate glass art doors, custom architectural joinery, and warm ambient light flow.",
    challenge:
      "Creating an opulent entrance statement that balances privacy, security, and open light flow into the private foyer.",
    solution:
      "Custom laser-etched glass panels framed in rich mahogany and antique brass hardware.",
    images: [
      "/images/projects/asteria-courtyard/hero.jpg",
      "/images/projects/asteria-courtyard/01.jpg",
      "/images/projects/asteria-courtyard/02.jpg",
      "/images/projects/asteria-courtyard/03.jpg",
      "/images/projects/asteria-courtyard/04.jpg",
      "/images/projects/asteria-courtyard/05.jpg",
      "/images/projects/asteria-courtyard/06.jpg",
      "/images/projects/asteria-courtyard/07.jpg",
      "/images/projects/asteria-courtyard/08.jpg",
      "/images/projects/asteria-courtyard/09.jpg",
    ],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Classic Luxury" },
    ],
    nextProject: { slug: "nyati-chesterfield", title: "Nyati Chesterfield" },
    prevProject: { slug: "rosemount-1801", title: "Rosemount 1801 Hiranandani" },
  },
  "nyati-chesterfield": {
    title: "Nyati Chesterfield",
    location: "Pune, India",
    category: "Residential",
    year: "2024",
    scope: "Full Interior Design",
    description:
      "A master suite and culinary living space featuring hand-upholstered wall paneling, muted earthy hues, and soft warm lighting.",
    challenge: "Creating a peaceful retreat that filters urban noise while maximizing daylight.",
    solution: "Double-glazed acoustic drapery and warm ambient perimeter LED cove bays.",
    images: [
      "/images/projects/nyati-chesterfield/hero.jpg",
      "/images/projects/nyati-chesterfield/01.jpg",
      "/images/projects/nyati-chesterfield/02.jpg",
      "/images/projects/nyati-chesterfield/03.jpg",
      "/images/projects/nyati-chesterfield/04.jpg",
      "/images/projects/nyati-chesterfield/05.jpg",
      "/images/projects/nyati-chesterfield/06.jpg",
    ],
    details: [
      { label: "Location", value: "Pune, India" },
      { label: "Style", value: "Earthy Warmth" },
    ],
    nextProject: { slug: "revanta-residence", title: "Revanta Residence" },
    prevProject: { slug: "asteria-courtyard", title: "Asteria Courtyard" },
  },
  "revanta-residence": {
    title: "Revanta Residence",
    location: "Mumbai, India",
    category: "Residential",
    year: "2024",
    scope: "Full Interior Architecture",
    description:
      "An open penthouse living and dining suite framed by custom mirror paneling, statement radial chandeliers, and plush seating.",
    challenge:
      "Harmonizing multi-zone living, dining, and executive study space within a single open layout.",
    solution:
      "Sculpted partition screens and directional ceiling light bays defining distinct spatial zones.",
    images: [
      "/images/projects/revanta-residence/hero.png",
      "/images/projects/revanta-residence/01.png",
      "/images/projects/revanta-residence/02.png",
      "/images/projects/revanta-residence/03.png",
      "/images/projects/revanta-residence/04.png",
      "/images/projects/revanta-residence/05.png",
      "/images/projects/revanta-residence/06.png",
    ],
    details: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Style", value: "Contemporary Luxury" },
    ],
    nextProject: { slug: "rosehill-hiranandani", title: "Rosehill Hiranandani Estate" },
    prevProject: { slug: "nyati-chesterfield", title: "Nyati Chesterfield" },
  },
  "rosehill-hiranandani": {
    title: "Rosehill Hiranandani Estate",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Full Estate Interior",
    description:
      "A grand estate interior featuring organic wood textures, soft neutral upholstery, and sculpted art decor.",
    challenge:
      "Balancing formal host seating with informal family lounging options across multiple levels.",
    solution: "Modular curved seating layout centered around dual-tiered marble tables.",
    images: [
      "/images/projects/rosehill-hiranandani/hero.png",
      "/images/projects/rosehill-hiranandani/02.jpg",
      "/images/projects/rosehill-hiranandani/03.jpg",
      "/images/projects/rosehill-hiranandani/08.jpg",
      "/images/projects/rosehill-hiranandani/09.jpg",
      "/images/projects/rosehill-hiranandani/10.jpg",
      "/images/projects/rosehill-hiranandani/11.jpg",
      "/images/projects/rosehill-hiranandani/12.jpg",
      "/images/projects/rosehill-hiranandani/13.jpg",
      "/images/projects/rosehill-hiranandani/14.jpg",
      "/images/projects/rosehill-hiranandani/15.jpg",
      "/images/projects/rosehill-hiranandani/16.jpg",
      "/images/projects/rosehill-hiranandani/17.jpg",
      "/images/projects/rosehill-hiranandani/18.jpg",
      "/images/projects/rosehill-hiranandani/19.png",
    ],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Modern Classic" },
    ],
    nextProject: { slug: "rosemount-1601", title: "Rosemount 1601 Hiranandani" },
    prevProject: { slug: "revanta-residence", title: "Revanta Residence" },
  },
  "rosemount-1601": {
    title: "Rosemount 1601 Hiranandani",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Luxury Residence Interior",
    description:
      "An extraordinary high-rise residence showcasing custom crown mouldings, coffered ceilings, and crystal pendant lighting.",
    challenge: "Delivering a regal heritage aesthetic in a modern high-rise residential structure.",
    solution:
      "Intricate crown moulding and layered velvet drapes that soften modern window apertures.",
    images: [
      "/images/projects/rosemount-1601/hero.png",
      "/images/projects/rosemount-1601/01.png",
      "/images/projects/rosemount-1601/02.png",
      "/images/projects/rosemount-1601/03.png",
      "/images/projects/rosemount-1601/04.png",
      "/images/projects/rosemount-1601/05.png",
      "/images/projects/rosemount-1601/06.png",
      "/images/projects/rosemount-1601/07.png",
    ],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Royal Heritage" },
    ],
    nextProject: { slug: "rosemount-1801", title: "Rosemount 1801 Hiranandani" },
    prevProject: { slug: "rosehill-hiranandani", title: "Rosehill Hiranandani Estate" },
  },
  "rosemount-1801": {
    title: "Rosemount 1801 Hiranandani",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Duplex Interior Architecture",
    description:
      "A penthouse sky suite featuring custom Italian marble flooring, floating glass staircase, and sweeping city vistas.",
    challenge: "Managing solar glare while preserving panoramic skyline vistas.",
    solution:
      "Automated dual-roller sheer and blackout motorized shading integrated into ceiling pockets.",
    images: [
      "/images/projects/rosemount-1801/hero.jpg",
      "/images/projects/rosemount-1801/01.jpg",
      "/images/projects/rosemount-1801/02.jpg",
      "/images/projects/rosemount-1801/03.jpg",
      "/images/projects/rosemount-1801/04.jpg",
      "/images/projects/rosemount-1801/05.jpg",
      "/images/projects/rosemount-1801/06.jpg",
    ],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Sky Architecture" },
    ],
    nextProject: { slug: "asteria-courtyard", title: "Asteria Courtyard" },
    prevProject: { slug: "rosemount-1601", title: "Rosemount 1601 Hiranandani" },
  },
  "asteria-courtyard-entry": {
    title: "Asteria Entrance & Vestibule",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Foyer Design",
    description:
      "A sanctuary entry featuring intricate laser-cut art panels, mahogany trim, and ambient warm light.",
    challenge: "Creating an opulent entrance statement that balances privacy and open light flow.",
    solution: "Custom etched glass panels framed in mahogany and antique brass hardware.",
    images: ["/images/gallery/gallery-01.jpg", "/images/gallery/gallery-04.jpg"],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Classic Luxury" },
    ],
    nextProject: { slug: "luxury-living-suite", title: "Luxury Living Suite" },
    prevProject: { slug: "rosemount-1801", title: "Rosemount 1801 Hiranandani" },
  },
  "luxury-living-suite": {
    title: "Luxury Living Suite",
    location: "Mumbai, India",
    category: "Residential",
    year: "2024",
    scope: "Full Interior Design",
    description:
      "An open-plan living room featuring customized Italian leather seating, warm indirect ceiling troffers, and bespoke marble flooring.",
    challenge:
      "Integrating entertainment media effortlessly into the living area without disrupting the formal architectural aesthetic.",
    solution:
      "A flush-mounted marble accent TV wall with hidden storage cabinetry and ambient linear cove lighting.",
    images: ["/images/gallery/gallery-02.jpg", "/images/gallery/gallery-05.jpg"],
    details: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Style", value: "Modern Sophistication" },
    ],
    nextProject: { slug: "grand-reception-hall", title: "Grand Reception Hall" },
    prevProject: { slug: "asteria-courtyard-entry", title: "Asteria Entrance & Vestibule" },
  },
  "grand-reception-hall": {
    title: "Grand Reception Hall",
    location: "Mumbai, India",
    category: "Residential",
    year: "2024",
    scope: "Architectural Decor",
    description:
      "An opulent formal lounge designed for entertaining, illuminated by statement chandeliers and accented with sculpted ceiling mouldings.",
    challenge:
      "Highlighting vertical height and ceiling craft while maintaining acoustic comfort in a high-ceiling hall.",
    solution:
      "Layered ceiling acoustic plaster finished with custom gold leafing and plush velvet wall acoustic panels.",
    images: ["/images/gallery/gallery-03.jpg", "/images/gallery/gallery-02.jpg"],
    details: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Style", value: "Contemporary Classic" },
    ],
    nextProject: { slug: "asteria-courtyard-grounds", title: "Asteria Courtyard Grounds" },
    prevProject: { slug: "luxury-living-suite", title: "Luxury Living Suite" },
  },
  "asteria-courtyard-grounds": {
    title: "Asteria Courtyard Grounds",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Exterior & Foyer Design",
    description:
      "A landmark architectural portico featuring towering Greek Corinthian columns, carved metal entrance gates, and lush landscaped surroundings.",
    challenge:
      "Unifying grand classical stone architecture with modern security perimeter integration.",
    solution:
      "Subtle ground-up uplighting and concealed automated access gates integrated directly within the stone pillars.",
    images: ["/images/gallery/gallery-04.jpg", "/images/gallery/gallery-01.jpg"],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Neoclassical Architecture" },
    ],
    nextProject: { slug: "penthouse-lounge", title: "Penthouse Open Lounge" },
    prevProject: { slug: "grand-reception-hall", title: "Grand Reception Hall" },
  },
  "penthouse-lounge": {
    title: "Penthouse Open Lounge",
    location: "Mumbai, India",
    category: "Residential",
    year: "2024",
    scope: "Full Interior Architecture",
    description:
      "Sprawling open penthouse living space illuminated by custom radial chandeliers, plush sectional seating, and wall-to-wall marble.",
    challenge:
      "Harmonizing multi-zone living, dining, and mandir space within a single open layout.",
    solution:
      "Sculpted partition screens and directional ceiling light bays defining distinct spatial zones.",
    images: ["/images/gallery/gallery-05.jpg", "/images/gallery/gallery-02.jpg"],
    details: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Style", value: "Contemporary Luxury" },
    ],
    nextProject: { slug: "rosemount-royal-suite", title: "Rosemount Royal Residence" },
    prevProject: { slug: "asteria-courtyard-grounds", title: "Asteria Courtyard Grounds" },
  },
  "rosemount-royal-suite": {
    title: "Rosemount Royal Residence",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Full Interior Design",
    description:
      "An extraordinary luxury apartment featuring rich velvet furnishings, coffered ceilings, and crystal chandeliers.",
    challenge: "Delivering a regal heritage aesthetic in a modern high-rise residential structure.",
    solution:
      "Intricate crown moulding and layered velvet drapes that soften modern window apertures.",
    images: ["/images/gallery/gallery-09.png", "/images/gallery/gallery-10.png"],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Royal Heritage" },
    ],
    nextProject: { slug: "chesterfield-bedroom", title: "Chesterfield Master Suite" },
    prevProject: { slug: "penthouse-lounge", title: "Penthouse Open Lounge" },
  },
  "chesterfield-bedroom": {
    title: "Chesterfield Master Suite",
    location: "Pune, India",
    category: "Residential",
    year: "2023",
    scope: "Suite Renovation",
    description:
      "A serene master bedroom suite boasting hand-upholstered headboard paneling, muted earthy hues, and soft warm lighting.",
    challenge: "Creating a peaceful retreat that filters urban noise while maximizing daylight.",
    solution: "Double-glazed acoustic drapery and warm ambient perimeter LED cove bays.",
    images: ["/images/gallery/gallery-06.jpg", "/images/gallery/gallery-11.png"],
    details: [
      { label: "Location", value: "Pune, India" },
      { label: "Style", value: "Earthy Warmth" },
    ],
    nextProject: { slug: "revanta-dining", title: "Revanta Dining Pavilion" },
    prevProject: { slug: "rosemount-royal-suite", title: "Rosemount Royal Residence" },
  },
  "revanta-dining": {
    title: "Revanta Dining Pavilion",
    location: "Mumbai, India",
    category: "Residential",
    year: "2023",
    scope: "Dining Room Design",
    description:
      "An intimate dining setting framed by custom mirror paneling, statement pendant lights, and bespoke dining chairs.",
    challenge: "Enhancing natural light reflection in an internal dining space.",
    solution:
      "Beveled antique mirror wall inserts that multiply ambient light and create an expansive feel.",
    images: ["/images/gallery/gallery-07.jpg", "/images/gallery/gallery-13.png"],
    details: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Style", value: "Refined Luxury" },
    ],
    nextProject: { slug: "bespoke-joinery", title: "Custom Architectural Joinery" },
    prevProject: { slug: "chesterfield-bedroom", title: "Chesterfield Master Suite" },
  },
  "bespoke-joinery": {
    title: "Custom Architectural Joinery",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Millwork & Joinery",
    description:
      "Precision woodworking featuring laser-cut metal mesh inserts, soft-touch cabinetry, and concealed storage.",
    challenge: "Fusing traditional artisanal woodworking with modern minimalist hardware.",
    solution: "Concealed magnetic push-latches paired with hand-stained veneer paneling.",
    images: ["/images/gallery/gallery-08.jpg", "/images/gallery/gallery-01.jpg"],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Bespoke Millwork" },
    ],
    nextProject: { slug: "chesterfield-kitchen", title: "Nyati Chesterfield Kitchen" },
    prevProject: { slug: "revanta-dining", title: "Revanta Dining Pavilion" },
  },
  "chesterfield-kitchen": {
    title: "Nyati Chesterfield Kitchen",
    location: "Pune, India",
    category: "Kitchen",
    year: "2023",
    scope: "Kitchen & Pantry Design",
    description:
      "A chef-grade culinary kitchen featuring seamless quartz countertops, integrated appliances, and warm accent lighting.",
    challenge: "Maximizing counter workspace while accommodating heavy cooking equipment.",
    solution:
      "A central preparation island with waterfall quartz edges and overhead task pendants.",
    images: ["/images/gallery/gallery-11.png", "/images/gallery/gallery-06.jpg"],
    details: [
      { label: "Location", value: "Pune, India" },
      { label: "Style", value: "Culinary Luxury" },
    ],
    nextProject: { slug: "rosehill-penthouse", title: "Rosehill Estate Parlour" },
    prevProject: { slug: "bespoke-joinery", title: "Custom Architectural Joinery" },
  },
  "rosehill-penthouse": {
    title: "Rosehill Estate Parlour",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Formal Lounge Design",
    description:
      "A serene parlour space crafted with organic wood textures, soft neutral upholstery, and sculptural art pieces.",
    challenge: "Balancing formal host seating with informal family lounging options.",
    solution: "Modular curved seating layout centered around a dual-tiered marble coffee table.",
    images: ["/images/gallery/gallery-10.png", "/images/gallery/gallery-09.png"],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Modern Classic" },
    ],
    nextProject: { slug: "asteria-garden-terrace", title: "Asteria Garden Lounge" },
    prevProject: { slug: "chesterfield-kitchen", title: "Nyati Chesterfield Kitchen" },
  },
  "asteria-garden-terrace": {
    title: "Asteria Garden Lounge",
    location: "Thane, India",
    category: "International",
    year: "2024",
    scope: "Landscape & Outdoor Lounge",
    description:
      "An outdoor sanctuary featuring weather-resistant teak seating, ambient uplighting, and lush vertical greenery.",
    challenge:
      "Selecting materials resilient against tropical weather conditions while maintaining luxury finishes.",
    solution:
      "Marine-grade stainless steel fixtures combined with natural teak and outdoor performance fabrics.",
    images: ["/images/gallery/gallery-12.png", "/images/gallery/gallery-04.jpg"],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Outdoor Haven" },
    ],
    nextProject: { slug: "revanta-executive-study", title: "Revanta Executive Archway" },
    prevProject: { slug: "rosehill-penthouse", title: "Rosehill Estate Parlour" },
  },
  "revanta-executive-study": {
    title: "Revanta Executive Archway",
    location: "Mumbai, India",
    category: "Residential",
    year: "2024",
    scope: "Executive Office & Lounge",
    description:
      "A sophisticated home study featuring dark walnut paneling, leather writing desk, and integrated display library.",
    challenge:
      "Creating an acoustically isolated home office suitable for video calls and focused work.",
    solution:
      "Concealed acoustic wall insulation behind walnut timber slats and felt-lined shelving.",
    images: ["/images/gallery/gallery-13.png", "/images/gallery/gallery-07.jpg"],
    details: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Style", value: "Executive Sophistication" },
    ],
    nextProject: { slug: "hiranandani-sky-villa", title: "Hiranandani Sky Foyer" },
    prevProject: { slug: "asteria-garden-terrace", title: "Asteria Garden Lounge" },
  },
  "hiranandani-sky-villa": {
    title: "Hiranandani Sky Foyer",
    location: "Thane, India",
    category: "International",
    year: "2024",
    scope: "Duplex Interior Architecture",
    description:
      "A grand double-height duplex sky villa showcasing floor-to-ceiling glass, floating glass staircase, and sweeping views.",
    challenge: "Managing solar glare while preserving panoramic skyline vistas.",
    solution:
      "Automated dual-roller sheer and blackout motorized shading integrated into ceiling pockets.",
    images: ["/images/gallery/gallery-14.png", "/images/gallery/gallery-09.png"],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Sky Architecture" },
    ],
    nextProject: { slug: "asteria-grand-heritage", title: "Asteria Grand Heritage Suite" },
    prevProject: { slug: "revanta-executive-study", title: "Revanta Executive Archway" },
  },
  "asteria-grand-heritage": {
    title: "Asteria Grand Heritage Suite",
    location: "Thane, India",
    category: "Residential",
    year: "2024",
    scope: "Heritage Suite Interior",
    description:
      "A flagship luxury suite featuring custom marble flooring, handcrafted wall moldings, and warm architectural uplighting.",
    challenge: "Fusing classic royal heritage aesthetic with modern smart home automation.",
    solution:
      "Concealed linear HVAC diffusers and recessed smart lighting controls integrated into decorative wall paneling.",
    images: ["/images/gallery/gallery-15.jpg", "/images/gallery/gallery-04.jpg"],
    details: [
      { label: "Location", value: "Thane, India" },
      { label: "Style", value: "Grand Heritage" },
    ],
    nextProject: { slug: "nyati-royal-residency", title: "Nyati Royal Residency" },
    prevProject: { slug: "hiranandani-sky-villa", title: "Hiranandani Sky Foyer" },
  },
  "nyati-royal-residency": {
    title: "Nyati Royal Residency",
    location: "Pune, India",
    category: "International",
    year: "2024",
    scope: "Full Villa Interior Architecture",
    description:
      "An expansive luxury estate featuring custom Italian marble accents, bespoke chandeliers, and open garden vistas.",
    challenge:
      "Seamlessly connecting indoor formal living spaces with expansive outdoor landscape views.",
    solution:
      "Motorized floor-to-ceiling slimline glass sliders and continuous interior-to-exterior marble flooring.",
    images: ["/images/gallery/gallery-16.jpg", "/images/gallery/gallery-06.jpg"],
    details: [
      { label: "Location", value: "Pune, India" },
      { label: "Style", value: "Royal Contemporary" },
    ],
    nextProject: { slug: "asteria-courtyard", title: "Asteria Courtyard" },
    prevProject: { slug: "asteria-grand-heritage", title: "Asteria Grand Heritage Suite" },
  },
}
