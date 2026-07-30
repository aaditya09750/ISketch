import Link from "next/link"
import { cn } from "@/lib/utils"

interface FancyButtonProps {
  children: React.ReactNode
  href: string
  className?: string
}

export function FancyButton({ children, href, className }: FancyButtonProps) {
  return (
    <Link href={href} className={cn("fancy-button", className)}>
      <span className="fancy-button__top-key" />
      <span className="fancy-button__text label-uppercase">{children}</span>
      <span className="fancy-button__bottom-key-1" />
      <span className="fancy-button__bottom-key-2" />
    </Link>
  )
}
