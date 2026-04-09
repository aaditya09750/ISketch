"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <p className="label-uppercase text-accent mb-4">Something went wrong</p>
        <h2 className="heading-section text-2xl sm:text-3xl text-foreground mb-6">
          An unexpected error occurred
        </h2>
        <button
          onClick={reset}
          className="label-uppercase text-xs tracking-[0.2em] px-8 py-3 border border-accent-decorative/30 text-foreground hover:bg-accent-decorative/10 transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
