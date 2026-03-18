import { Container } from "@/components/ui/container"
import { publications } from "@/data/about"

export function FeaturedSection() {
  return (
    <section className="py-20 lg:py-28 bg-background border-y border-border">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="label-uppercase text-muted-foreground">
            As Featured In
          </p>
        </div>

        {/* Publications */}
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
          {publications.map((publication) => (
            <div
              key={publication}
              className="text-center"
            >
              <span className="font-serif text-lg lg:text-xl text-foreground/50 italic tracking-wide">
                {publication}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
