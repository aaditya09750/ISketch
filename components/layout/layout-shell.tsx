"use client"

import { type ReactNode } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LayoutProvider, useLayout } from "@/components/providers/layout-context"

function LayoutInner({ children }: { children: ReactNode }) {
  const { hideChrome } = useLayout()

  return (
    <>
      {!hideChrome && <Header />}
      {children}
      {!hideChrome && <Footer />}
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
