import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LayoutShell } from "@/components/layout/layout-shell"
import { SmoothScroll } from "@/components/providers/smooth-scroll"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { StructuredData } from "@/components/shared/structured-data"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema"
import "./globals.css"

const iowanOldStyle = localFont({
  src: [
    {
      path: "../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-bt-586c36a8d7712.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-italic-bt-586c3740dc396.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-bold-bt-586c371d8d669.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-bold-italic-bt-586c37701cb62.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-black-bt-586c36e930225.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-black-italic-bt-586c378f12ca1.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-iowan",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://isketch.in"),
  title: {
    default: "I Sketch Interiors — Luxury Interior Design Studio in Thane & Mumbai",
    template: "%s | I Sketch Interiors",
  },
  description:
    "I Sketch Interiors is an award-winning luxury interior design studio in Thane and Mumbai. Bespoke residential interiors, custom joinery, and full-service design across Mumbai, Pune, and internationally. 20+ years, 125+ completed projects.",
  generator: "Aaditya Gunjal",
  icons: {
    icon: { url: "/icon.svg", type: "image/svg+xml" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "I Sketch Interiors",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "I Sketch Interiors — Luxury Interior Design Studio in Thane & Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://isketch.in",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#2a1810" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${iowanOldStyle.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <main className="min-h-screen bg-background">
            <LayoutShell>{children}</LayoutShell>
          </main>
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebSiteSchema()} />
      </body>
    </html>
  )
}
