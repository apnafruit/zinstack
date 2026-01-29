import React from 'react';
import FinalCTA from './components/FinalCTA';
import { motion } from 'motion/react';

export default function CareersPage() {
  const jobs = [
    {
      title: "Post-Sale Executive",
      type: "Commission-Based",
      description: "We're looking for a motivated Post-Sale Executive to join our growing team. You'll be responsible for managing client relationships, making strategic calls, and bringing in new payment opportunities.",
      responsibilities: [
        "Make strategic outbound calls to prospective clients",
        "Identify and nurture sales opportunities",
        "Build and maintain long-term client relationships",
        "Convert leads into paying customers",
        "Meet and exceed commission-based targets"
      ],
      requirements: [
        "Excellent communication and persuasion skills",
        "Self-motivated and results-driven",
        "Experience in sales or client management (preferred)",
        "Strong negotiation abilities",
        "Willingness to work on a commission-based model"
      ]
    }
  ];

  return (
    <main className="pt-14 sm:pt-16 lg:pt-20">
      <section id="careers" className="relative text-white overflow-x-hidden bg-[#050B1A]">
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
              backgroundImage: "url('/c.jpg')",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 text-center py-12 sm:py-0 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center justify-center px-5 sm:px-8 py-4 sm:py-5 md:py-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                <span className="text-[clamp(24px,5vw,56px)] font-extrabold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-white/90">
                  Join&nbsp;Our&nbsp;Team
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-white">
                  Career Opportunities at Zivstack
                </h2>
                <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
                  Be part of a dynamic team building innovative digital solutions. We're looking for talented individuals ready to grow with us.
                </p>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="relative z-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-[1440px] mx-auto">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 sm:mb-12"
                >
                  <div className="bg-gradient-to-br from-[#0B0F14]/50 to-[#0B0F14]/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 hover:border-white/20 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                        <div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                            {job.title}
                          </h3>
                          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium">
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-8 sm:mb-10">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex gap-3 text-white/70 text-sm sm:text-base">
                              <span className="text-blue-400 flex-shrink-0 mt-1">→</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          Requirements
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex gap-3 text-white/70 text-sm sm:text-base">
                              <span className="text-blue-400 flex-shrink-0 mt-1">→</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Section */}
                    <div className="pt-6 sm:pt-8 border-t border-white/10">
                      <p className="text-white/70 text-sm sm:text-base mb-4">
                        Interested in this opportunity?
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <p className="text-white font-medium">
                          Send your resume to
                        </p>
                        <a
                          href="mailto:contact@zivstack.in"
                          className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-300 hover:text-blue-200 hover:bg-blue-500/30 hover:border-blue-500/60 transition-all duration-300 text-sm sm:text-base font-medium"
                        >
                          careers@zivstack.in
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
