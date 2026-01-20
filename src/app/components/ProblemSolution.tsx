import { motion } from "motion/react";

export default function ProblemSolution() {
  return (
    <section className="py-0 w-full">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full overflow-hidden"
      >
        {/* Banner Image */}
        <img
          src="/ban2.png"
          alt="Strategy, design and clean code banner"
          className="
            w-full
            h-[380px] md:h-[440px] lg:h-[520px]
            object-cover
            object-center
            block
          "
          loading="eager"
          decoding="async"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white max-w-3xl">
            Strategy • Design • Clean Code
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#D1D5DB] max-w-2xl">
            We build fast, conversion-focused websites backed by data-driven
            strategy and meticulous execution.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
