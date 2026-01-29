import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#0B0F14] py-12 sm:py-16 md:py-20 lg:py-32 bg-black px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start lg:items-center"
        >
          {/* LEFT */}
          <div>
            <p
              className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-widest text-[#9AA4B2] mb-3 sm:mb-4"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              HAVE AN IDEA?
            </p>

            <a
              href="https://wa.me/917382674757"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block w-full sm:w-auto"
            >
              <h2
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight group"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                LET&apos;S TALK

                <img
                  src="/a3.svg"
                  alt="Arrow"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 bg-white rounded-lg p-1.5 sm:p-2 group-hover:translate-x-2 flex-shrink-0"
                />
              </h2>

              <div className="mt-3 sm:mt-4 h-0.5 sm:h-1 w-32 sm:w-48 md:w-64 bg-[#3B82F6] transition-all duration-300 group-hover:w-40 sm:group-hover:w-64 md:group-hover:w-80" />
            </a>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 text-xs sm:text-sm md:text-base">
            {/* MENU */}
            <div>
              <p className="text-[#3B82F6] mb-3 sm:mb-4 uppercase tracking-[0.15em] sm:tracking-widest font-medium" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                Menu
              </p>
              <ul className="space-y-2 sm:space-y-3" style={{ fontFamily: 'var(--font-jakarta)' }}>
                <li>
                  <a href="#hero" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Home</a>
                </li>
                <li>
                  <a href="/services" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Services</a>
                </li>
                <li>
                  <a href="#work" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Work</a>
                </li>
                <li>
                  <a href="/blog" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Blog</a>
                </li>
                <li>
                  <a href="#process" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Process</a>
                </li>
                <li>
                  <a href="/careers" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Careers</a>
                </li>
                <li>
                  <a href="/contact" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Contact</a>
                </li>
                <li>
                  <a href="/about" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">About</a>
                </li>
              </ul>
            </div>

            {/* SOCIALS */}
            <div>
              <p className="text-[#3B82F6] mb-3 sm:mb-4 uppercase tracking-[0.15em] sm:tracking-widest font-medium" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                Socials
              </p>
              <ul className="space-y-2 sm:space-y-3" style={{ fontFamily: 'var(--font-jakarta)' }}>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Instagram</a>
                </li>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors text-xs sm:text-sm md:text-base">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
