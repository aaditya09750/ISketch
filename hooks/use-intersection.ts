"use client"

import { useEffect, useRef, useCallback } from "react"

// Shared observers keyed by threshold value
const observers = new Map<number, IntersectionObserver>()
const callbacks = new WeakMap<Element, (entry: IntersectionObserverEntry) => void>()

function getObserver(threshold: number): IntersectionObserver {
  let observer = observers.get(threshold)
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = callbacks.get(entry.target)
          if (cb) cb(entry)
        })
      },
      { threshold },
    )
    observers.set(threshold, observer)
  }
  return observer
}

/**
 * Shared IntersectionObserver hook — all elements with the same threshold
 * share a single observer instance instead of creating one per component.
 */
export function useIntersection(
  ref: React.RefObject<Element | null>,
  onIntersect: () => void,
  options: { threshold?: number; once?: boolean } = {},
) {
  const { threshold = 0.1, once = true } = options
  const onIntersectRef = useRef(onIntersect)
  onIntersectRef.current = onIntersect

  const stableCallback = useCallback(() => {
    onIntersectRef.current()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = getObserver(threshold)

    callbacks.set(el, (entry) => {
      if (entry.isIntersecting) {
        stableCallback()
        if (once) {
          observer.unobserve(el)
          callbacks.delete(el)
        }
      }
    })

    observer.observe(el)

    return () => {
      observer.unobserve(el)
      callbacks.delete(el)
    }
  }, [ref, threshold, once, stableCallback])
}
