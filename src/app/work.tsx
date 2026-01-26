import React from "react";
import FinalCTA from "./components/FinalCTA";

const videos = [
  "/sunrise.mp4",
  "/site3.mp4",
  "/site2.mp4",
  "/site.mp4",
  "/marketing.mp4",
  "/health.mp4",
];

export default function Work() {
  return (
    <section>
    <main className="min-h-screen text-white py-12 sm:py-16 md:py-20 lg:py-32 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 bg-[linear-gradient(180deg,_#050B1A_0%,_#050B1A_65%,_#030711_85%,_#000000_100%)]">

      <div className="max-w-7xl mx-auto">
        <header className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">What we've built</h1>
          <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto px-2">
            Systems built with performance and reliability in mind
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {videos.map((src) => (
            <article key={src} className="rounded-lg sm:rounded-xl overflow-hidden bg-black border border-white/6 hover:border-white/20 transition-all duration-300">
              <div className="relative w-full aspect-video bg-black">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
    <FinalCTA />
    </section>
  );
}
