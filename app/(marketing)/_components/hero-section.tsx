"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROTATING_WORDS = ["Interiors", "Elegance", "Spaces", "Luxury"];

const HERO_VIDEOS = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
  "/videos/hero-4.mp4",
];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePlayer, setActivePlayer] = useState<"A" | "B">("A");

  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);
  const activeRef = useRef<"A" | "B">("A");
  const transitioningRef = useRef(false);
  const [wordIndex, setWordIndex] = useState(0);

  const getPlayer = useCallback(
    (which: "A" | "B") =>
      which === "A" ? videoARef.current : videoBRef.current,
    [],
  );

  const handleFirstCanPlay = useCallback(() => setIsLoaded(true), []);

  const handleEnded = useCallback(() => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;

    const current = activeRef.current;
    const next: "A" | "B" = current === "A" ? "B" : "A";
    const nextPlayer = getPlayer(next);
    if (!nextPlayer) {
      transitioningRef.current = false;
      return;
    }

    const advanceIndex = (indexRef.current + 1) % HERO_VIDEOS.length;
    indexRef.current = advanceIndex;

    // The next player already has the correct clip preloaded.
    // Start playing it while it's still invisible (opacity-0).
    // Once it renders a real frame we crossfade.
    const onPlaying = () => {
      nextPlayer.removeEventListener("playing", onPlaying);

      // One extra rAF so the compositor has the decoded frame ready
      requestAnimationFrame(() => {
        // NOW swap visibility — CSS transition handles the crossfade
        activeRef.current = next;
        setActivePlayer(next);

        // After crossfade (1.2s), preload the NEXT clip on the now-idle player
        setTimeout(() => {
          const idle = getPlayer(current);
          const prepareIndex = (indexRef.current + 1) % HERO_VIDEOS.length;
          if (idle) {
            idle.src = HERO_VIDEOS[prepareIndex];
            idle.load();
          }
          transitioningRef.current = false;
        }, 1300);
      });
    };

    nextPlayer.addEventListener("playing", onPlaying);
    nextPlayer.play().catch(() => {
      nextPlayer.removeEventListener("playing", onPlaying);
      transitioningRef.current = false;
    });
  }, [getPlayer]);

  // Rotate tagline word every 3s (only after hero fade-in)
  useEffect(() => {
    if (!isLoaded) return;
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length),
      3000,
    );
    return () => clearInterval(id);
  }, [isLoaded]);

  // On mount: A plays first clip, B preloads second clip
  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (a) {
      a.src = HERO_VIDEOS[0];
      a.load();
      a.play().catch(() => {});
    }
    if (b) {
      b.src = HERO_VIDEOS[1];
      b.load();
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Videos — double-buffered */}
      <div className="absolute inset-0 bg-white">
        <video
          ref={videoARef}
          muted
          playsInline
          preload="auto"
          // @ts-expect-error -- fetchPriority not yet in React types
          fetchPriority="high"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1200 ease-in-out ${
            activePlayer === "A" ? "opacity-100" : "opacity-0"
          }`}
          onCanPlay={isLoaded ? undefined : handleFirstCanPlay}
          onEnded={handleEnded}
        />
        <video
          ref={videoBRef}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1200 ease-in-out ${
            activePlayer === "B" ? "opacity-100" : "opacity-0"
          }`}
          onEnded={handleEnded}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col bg-black/10 justify-end pb-24 sm:pb-28 lg:pb-30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <h1
              className={`heading-display select-none text-3xl sm:text-5xl lg:text-6xl text-white transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              I SKETCH Your Space
            </h1>
            <p
              className={`label-uppercase select-none text-white/80 mt-2 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Creating Timeless{" "}
              <span className="relative inline-flex items-center overflow-hidden h-[1em]">
                {/* Invisible sizer — widest word sets container width */}
                <span
                  className="invisible whitespace-nowrap"
                  aria-hidden="true"
                >
                  {ROTATING_WORDS.reduce((a, b) =>
                    a.length > b.length ? a : b,
                  )}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-0 whitespace-nowrap"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ transitionDelay: "10ms" }}
      >
        <span className="label-uppercase select-none text-[8px]! text-white/80">
          Scroll
        </span>
        <div className="w-0.5 rounded-full mr-1 h-4 bg-white/25 animate-gentle-bounce" />
      </div>
    </section>
  );
}
