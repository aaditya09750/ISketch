import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

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
    button: "inline-block label-uppercase px-12 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:shadow-earthy-sm",
  },
  secondary: {
    section: "bg-secondary",
    heading: "heading-section text-3xl lg:text-4xl text-foreground mb-8",
    description: "body-text text-muted-foreground max-w-2xl mx-auto mb-12",
    button: "inline-block label-uppercase px-12 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:shadow-earthy-sm",
  },
  dark: {
    section: "bg-surface-dark",
    heading: "heading-section text-3xl lg:text-4xl text-surface-dark-foreground mb-8",
    description: "body-text text-surface-dark-foreground/70 max-w-2xl mx-auto mb-12",
    button: "inline-block label-uppercase px-12 py-4 border border-surface-dark-foreground text-surface-dark-foreground hover:bg-surface-dark-foreground hover:text-surface-dark transition-all duration-300 hover:shadow-earthy-sm",
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
        <a href={buttonHref} className={styles.button}>
          {buttonText}
        </a>
      </Container>
    </section>
  )
}
