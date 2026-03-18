import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  location: string
  image: string
  href: string
  category?: string
  aspectRatio?: string
  variant?: "centered" | "default"
}

export function ProjectCard({
  title,
  location,
  image,
  href,
  category,
  aspectRatio = "aspect-[4/5]",
  variant = "default",
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className={`relative overflow-hidden ${variant === "centered" ? "mb-6" : ""} ${aspectRatio}`}>
        <Image
          src={image}
          alt={`${title} - ${location}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      </div>
      <div className={variant === "centered" ? "text-center" : "mt-6"}>
        {variant === "centered" ? (
          <>
            <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="label-uppercase text-[10px] text-muted-foreground">
              {location}
            </p>
          </>
        ) : (
          <>
            <p className="label-uppercase text-[10px] text-accent mb-3">
              {location}{category ? ` | ${category}` : ""}
            </p>
            <h3 className="font-serif text-xl lg:text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
          </>
        )}
      </div>
    </Link>
  )
}
