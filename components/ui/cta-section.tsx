import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { FancyButton } from "@/components/common/fancy-button"

interface CTASectionProps {
  heading: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: "default" | "secondary" | "dark"
}

const variantStyles = {
  default: {
    section: "",
    heading: "heading-section text-3xl lg:text-4xl text-foreground mb-8",
    description: "body-text text-muted-foreground max-w-2xl mx-auto mb-12",
  },
  secondary: {
    section: "bg-secondary",
    heading: "heading-section text-3xl lg:text-4xl text-foreground mb-8",
    description: "body-text text-muted-foreground max-w-2xl mx-auto mb-12",
  },
  dark: {
    section: "bg-surface-dark",
    heading: "heading-section text-3xl lg:text-4xl text-surface-dark-foreground mb-8",
    description: "body-text text-surface-dark-foreground/70 max-w-2xl mx-auto mb-12",
  },
}

export function CTASection({
  heading,
  description,
  buttonText,
  buttonHref,
  variant = "default",
}: CTASectionProps) {
  const styles = variantStyles[variant]

  return (
    <section className={cn("py-24 lg:py-36", styles.section)}>
      <Container className="text-center">
        <h2 className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.description}>
          {description}
        </p>
        <FancyButton href={buttonHref}>
          {buttonText}
        </FancyButton>
      </Container>
    </section>
  )
}
