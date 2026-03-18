import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'I Sketch Interiors | Luxury Interior Design | London | Surrey',
  description: 'I Sketch Interiors is a London and Surrey-based design studio specialising in luxury residential interiors throughout the UK and overseas.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <main className="min-h-screen bg-background">
          <Header />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
