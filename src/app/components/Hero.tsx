import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050B1A] bg-gradient-to-b from-[#050B1A] via-[#030519] to-[#010208]"
    >
      {/* Decorative responsive background blobs */}
      <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -left-20 -top-16 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-700/20 via-indigo-700/10 to-transparent rounded-full blur-3xl transform sm:-translate-x-8" />
        <div className="absolute right-[-40px] top-20 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-600/10 via-pink-600/6 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/1 via-transparent to-transparent opacity-5" />
      </div>
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050B1A]"
    >
      {/* Side labels */}
      <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 rotate-[-90deg] text-white/15 tracking-[0.4em] text-xs sm:text-sm">
        DESIGN
      </div>
      <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 rotate-90 text-white/15 tracking-[0.4em] text-xs sm:text-sm">
        SYSTEMS
      </div>

      {/* Contact micro-label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 right-4 sm:bottom-10 sm:right-6 rotate-90 origin-bottom-right text-white/40 text-[10px] sm:text-xs tracking-widest"
      >
        CONTACT US AT +91 7382674757
      </motion.div>

      {/* Massive background brand word */}
      <motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
>
  {/* Massive brand word */}
  <h1 className="text-[22vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-extrabold leading-none tracking-tight text-white/5">
    ZINSTACK
  </h1>

  {/* Contact info */}
  <span className="mt-2 text-[0.6rem] sm:text-[0.75rem] tracking-[0.35em] text-white/30 uppercase">
        <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-white/8 bg-gradient-to-b from-black/5">
  </span>
            className="flex whitespace-nowrap py-2 sm:py-4"
  <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-white/10">
  <motion.div
    className="flex whitespace-nowrap py-3 sm:py-4"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 30,
      repeat: Infinity,
            <span className="mx-6 sm:mx-8 text-white/40 text-xs sm:text-sm tracking-[0.25em] uppercase">
    }}
  >
    <span className="mx-8 text-white/40 text-sm tracking-[0.3em] uppercase">
      Building reliable digital systems — scalable • strategic • engineered for growth
    </span>
    <span className="mx-8 text-white/40 text-sm tracking-[0.3em] uppercase">
      Building reliable digital systems — scalable • strategic • engineered for growth
    </span>
    <span className="mx-8 text-white/40 text-sm tracking-[0.3em] uppercase">
      Building reliable digital systems — scalable • strategic • engineered for growth
    </span>
  </motion.div>
</div>
</motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-24 sm:py-32">
        {/* Brand title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-white font-extrabold text-[clamp(28px,6vw,96px)] sm:text-[clamp(48px,8vw,140px)] leading-[0.9]"
        >
          ZINSTACK
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 sm:mt-8 max-w-xl text-white/70 text-base sm:text-lg"
        >
          Strategic digital products and platforms for scalable businesses. We
          build reliable systems that you own.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#work"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-8 sm:mt-10 inline-flex items-center gap-4 text-white text-lg sm:text-2xl group"
        >
          <span className="border-b border-white/30 pb-1 hover:text-red-500 group-hover:border-white transition-colors py-3 px-3 rounded-md touch-manipulation">
            View work
          </span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
        </motion.a>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-12 sm:mt-16 text-white/50 text-sm max-w-md"
        >
          Over 90% of the world lives{" "}
          <span className="text-white font-semibold">online</span>. Just a click away.
        </motion.p>
      </div>
    </section>
    
  );
}
