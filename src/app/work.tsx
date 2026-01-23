import React from "react";

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
    <main className="min-h-screen bg-[#050B1A] text-white py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">What we've built</h1>
          <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Systems built with performance and reliability in mind
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((src) => (
            <article key={src} className="rounded-xl overflow-hidden bg-black border border-white/6">
              <div className="relative w-full aspect-[16/9] bg-black">
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
  );
}
