"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface LayoutContextType {
  hideChrome: boolean
  setHideChrome: (value: boolean) => void
}

const LayoutContext = createContext<LayoutContextType>({
  hideChrome: false,
  setHideChrome: () => {},
})

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [hideChrome, setHideChrome] = useState(false)
  return (
    <LayoutContext.Provider value={{ hideChrome, setHideChrome }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayout() {
  return useContext(LayoutContext)
}
