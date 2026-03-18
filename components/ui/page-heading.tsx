import { Container } from "@/components/ui/container"

interface PageHeadingProps {
  label: string
  title: string
  description?: string
}

export function PageHeading({ label, title, description }: PageHeadingProps) {
  return (
    <section className="pt-36 lg:pt-44 pb-16 lg:pb-20">
      <Container className="text-center">
        <p className="label-uppercase text-accent mb-6">
          {label}
        </p>
        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-[0.08em] uppercase">
          {title}
        </h1>
        {description && (
          <p className="body-text text-muted-foreground max-w-2xl mx-auto mt-10">
            {description}
          </p>
        )}
      </Container>
    </section>
  )
}
