import { motion } from "motion/react";
import {
  Code,
  Zap,
  Feather,
  Database,
  Cloud,
  Layers,
  Palette,
  Cpu,
  Server,
} from "lucide-react";

export default function TechStack() {
  const technologies = [
    { name: "Next.js", icon: Code },
    { name: "React", icon: Zap },
    { name: "Tailwind CSS", icon: Feather },
    { name: "TypeScript", icon: Code },
    { name: "PostgreSQL", icon: Database },
    { name: "Vercel", icon: Cloud },
    { name: "GSAP", icon: Layers },
    { name: "Figma", icon: Palette },
    { name: "Infrastructure", icon: Server },
    { name: "Performance", icon: Cpu },
  ];

  const loopedTech = [...technologies, ...technologies];

  return (
    <section className="py-8 sm:py-12 overflow-hidden bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-16"
      >
        <p
          className="text-xl sm:text-2xl text-gray-600 text-center"
          style={{ fontFamily: "'sora', sans-serif" }}
        >
          Powered by a Modern Tech Stack
        </p>
      </motion.div>

      {/* Scrolling tech row */}
      <motion.div
        className="flex gap-6 w-max px-4 sm:px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopedTech.map((tech, index) => (
          <div
            key={index}
            className="
              min-w-[110px] sm:min-w-[140px]
              h-[80px] sm:h-[100px]
              flex items-center justify-center
              bg-[#1A1F2C]/5
              border border-black/10
              rounded-xl
              hover:border-black/20
              hover:bg-[#1A1F2C]/10
              transition-all
              cursor-pointer
            "
          >
            <tech.icon
              role="img"
              aria-label={tech.name}
              className="h-6 md:h-10 text-black"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
