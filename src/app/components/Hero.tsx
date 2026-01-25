import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#050B1A] via-[#030519] to-[#010208]"
    >
      {/* Background blobs */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 w-72 h-72 sm:w-96 sm:h-96 bg-blue-700/20 rounded-full blur-3xl" />
        <div className="absolute right-[-60px] top-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Huge background brand */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-extrabold tracking-tight text-white/5 text-[40vw] sm:text-[28vw] md:text-[18vw] lg:text-[12vw] leading-none">
          ZIVSTACK
        </span>
      </div>

      {/* Side labels */}
      <span className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-white/15 tracking-[0.35em] text-sm">
        DESIGN
      </span>
      <span className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-white/15 tracking-[0.35em] text-sm">
        SYSTEMS
      </span>

      {/* Marquee */}
      <div className="hidden sm:block border-t border-b border-white/5 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-white/40 tracking-[0.3em] uppercase text-sm"
            >
              Building reliable digital systems — scalable • strategic • engineered for growth
            </span>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-white leading-tight
            text-[clamp(36px,8vw,96px)]
            max-w-3xl"
        >
          ZIVSTACK
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-xl text-white/70 text-[clamp(15px,2.5vw,18px)]"
        >
          Strategic digital products and platforms for scalable businesses.
          We build reliable systems that you own.
        </motion.p>

        {/* 🔢 Stats Container */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="
            mt-10
            inline-flex flex-wrap items-center gap-6
            px-6 py-4
            rounded-xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur
          "
        >
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">30+</span>
            <span className="text-sm text-white/60">Projects</span>
          </div>

          <div className="w-px h-6 bg-white/10 hidden sm:block" />

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">60+</span>
            <span className="text-sm text-white/60">Members</span>
          </div>

          <div className="w-px h-6 bg-white/10 hidden sm:block" />

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">2+</span>
            <span className="text-sm text-white/60">Years</span>
          </div>
        </motion.div>

        {/* Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 max-w-2xl font-semibold leading-tight text-white text-sm"
        >
          Over <span className="text-blue-400">90%</span> of the world lives online.
          Your audience is one click away.
        </motion.p>
      </div>
    </section>
  );
}
