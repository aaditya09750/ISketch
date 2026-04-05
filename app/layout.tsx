import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LayoutShell } from '@/components/layout/layout-shell'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { SpeedInsights } from "@vercel/speed-insights/next"
// @ts-expect-error -- Next.js handles global CSS side-effect imports at build time
import './globals.css'

const iowanOldStyle = localFont({
  src: [
    { path: '../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-bt-586c36a8d7712.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-italic-bt-586c3740dc396.ttf', weight: '400', style: 'italic' },
    { path: '../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-bold-bt-586c371d8d669.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-bold-italic-bt-586c37701cb62.ttf', weight: '700', style: 'italic' },
    { path: '../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-black-bt-586c36e930225.ttf', weight: '900', style: 'normal' },
    { path: '../public/fonts/iowanoldst-bt/bitstream-iowan-old-style-black-italic-bt-586c378f12ca1.ttf', weight: '900', style: 'italic' },
  ],
  variable: '--font-iowan',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'I Sketch Interiors | Luxury Interior Design',
  description: 'I Sketch Interiors is a Surrey-based design studio specialising in luxury residential interiors throughout the Mumbai and overseas.',
  generator: 'Aaditya Gunjal',
  icons: {
    icon: {
      url: '/icon.svg',
      type: 'image/svg+xml',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${iowanOldStyle.variable} ${montserrat.variable}`}>
      <head />
      <body className="font-sans antialiased">
        <SmoothScroll>
          <main className="min-h-screen bg-background">
            <LayoutShell>
              {children}
            </LayoutShell>
          </main>
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
