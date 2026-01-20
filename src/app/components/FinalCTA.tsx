import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#0B0F14] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
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
  className="flex items-center gap-4 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none group"
  style={{ fontFamily: "var(--font-manrope)" }}
>
  LET&apos;S TALK

 <img
  src="/a3.svg"
  alt="Arrow"
  className="
    w-12 h-12 md:w-16 md:h-16 
    transition-all duration-300
    bg-white rounded-lg p-2
    group-hover:translate-x-2
  "
/>

</h2>


              {/* Animated underline */}
              <div className="mt-4 h-1 w-64 bg-[#3B82F6] transition-all duration-300 group-hover:w-94" />
            </a>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-12 text-sm">
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
                  <a href="#services" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Services</a>
                </li>
                <li>
                  <a href="#work" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Work</a>
                </li>
                <li>
                  <a href="#process" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Process</a>
                </li>
                <li>
                  <a href="#contact" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">Contact</a>
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
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#EDEFF2] transition-colors">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
