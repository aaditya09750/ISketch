import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Luxury interior design living room"
          fill
          className="object-cover"
          priority
        />
        {/* Refined overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/60 via-[#2c2c2c]/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col bg-black/10 justify-end pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <p className="label-uppercase text-white/90">
              Luxury Interior Design
            </p>
            <h2 className="heading-display text-4xl lg:text-6xl xl:text-7xl text-white">
              Creating timeless
              <br />
              interiors
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="label-uppercase text-[10px] text-white/70">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  )
}
