"use client"

import { type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { LayoutProvider, useLayout } from "@/components/providers/layout-context"

// Routes that must never render the chrome (header/footer/whatsapp).
// Determined synchronously from the pathname so there is no useEffect flash.
const CHROMELESS_ROUTES = new Set(["/maintenance"])

function LayoutInner({ children }: { children: ReactNode }) {
  const { hideChrome } = useLayout()
  const pathname = usePathname()
  const isChromelessRoute = CHROMELESS_ROUTES.has(pathname)
  const shouldHideChrome = hideChrome || isChromelessRoute

  return (
    <>
      {!shouldHideChrome && <Header />}
      {children}
      {!shouldHideChrome && <Footer />}
      {!isChromelessRoute && <WhatsAppButton />}
    </>
  )
}

export function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <LayoutProvider>
      <LayoutInner>{children}</LayoutInner>
    </LayoutProvider>
  )
}
