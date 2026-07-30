import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label: string
  heading?: string
  centered?: boolean
  labelClassName?: string
  headingClassName?: string
}

export function SectionHeading({
  label,
  heading,
  centered = true,
  labelClassName,
  headingClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center")}>
      <p className={cn("label-uppercase text-accent mb-2 lg:mb-4", labelClassName)}>{label}</p>
      {heading && (
        <h2
          className={cn("heading-section text-3xl lg:text-4xl text-foreground", headingClassName)}
        >
          {heading}
        </h2>
      )}
    </div>
  )
}
