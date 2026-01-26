import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#0B0F14] py-16 sm:py-20 lg:py-32 bg-black">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center"
        >
          {/* LEFT */}
          <div>
            <p
              className="text-sm tracking-widest text-[#9AA4B2] mb-4"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              HAVE AN IDEA?
            </p>

                        <a
                          href="https://wa.me/917382674757"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-block"
                        >
                          <h2
                            className="flex items-center gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none group"
                            style={{ fontFamily: "var(--font-manrope)" }}
                          >
                            LET&apos;S TALK

                            <img
                              src="/a3.svg"
                              alt="Arrow"
                              className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 bg-white rounded-lg p-2 group-hover:translate-x-2"
                            />
                          </h2>

                          <div className="mt-4 h-1 w-48 sm:w-64 bg-[#3B82F6] transition-all duration-300 group-hover:w-80" />
                        </a>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 text-sm">
            {/* MENU */}
            <div>
              <p className="text-[#3B82F6] mb-4 uppercase tracking-widest" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                Menu
              </p>
                <ul className="space-y-3" style={{ fontFamily: 'var(--font-jakarta)' }}>
                <li>
                  <a href="#hero" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Home</a>
                </li>
                <li>
                  <a href="/services" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Services</a>
                </li>
                <li>
                  <a href="#work" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Work</a>
                </li>
                <li>
                  <a href="/blog" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#process" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Process</a>
                </li>
                <li>
                  <a href="#contact" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Contact</a>
                </li>
                <li>
                  <a href="/about" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">About</a>
                </li>
              </ul>
            </div>

            {/* SOCIALS */}
            <div>
              <p className="text-[#3B82F6] mb-4 uppercase tracking-widest" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                Socials
              </p>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-jakarta)' }}>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
