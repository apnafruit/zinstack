import React from 'react';
import Services from './components/Services';
import FinalCTA from './components/FinalCTA';

export default function ServicesPage() {
  return (
    <main className="pt-14 sm:pt-16 lg:pt-20">
      <section id="services" className="relative text-white overflow-x-hidden bg-[#050B1A]">
        {/* Optional ultra-premium radial gradient softness */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.02),_transparent_70%)]"
        />

        {/* Background gradient flow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_#050B1A_0%,_#050B1A_65%,_#030711_85%,_#000000_100%)]"
        />

        {/* Slow subtle gradient overlay to black */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(0,0,0,0.08)_40%,_#000000_100%)]"
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Hero Banner */}
          <div 
            className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/sban.jpg')",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 text-center py-12 sm:py-0">
              <div className="inline-flex items-center justify-center px-5 sm:px-8 py-4 sm:py-5 md:py-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                <span className="text-[clamp(24px,5vw,56px)] font-extrabold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-white/90">
                  Our&nbsp;Services
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Services />
          </div>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
