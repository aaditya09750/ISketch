import Image from "next/image"

interface PageHeroProps {
  image: string
  alt: string
  title: string
  overlayOpacity?: string
}

export function PageHero({
  image,
  alt,
  title,
  overlayOpacity = "bg-black/30",
}: PageHeroProps) {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] mt-20 lg:mt-24 bg-surface-dark">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        preload
        sizes="100vw"
        quality={90}
      />
      <div className={`absolute inset-0 ${overlayOpacity}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.1em] uppercase">
            {title}
          </h1>
          <div className="w-16 h-px bg-white/60 mx-auto mt-6" />
        </div>
      </div>
    </section>
  )
}
