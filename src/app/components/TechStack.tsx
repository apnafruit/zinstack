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
  // Replace image logos with Lucide icons to match the color palette
  const technologies = [
    { name: "Next.js", icon: Code, color: "#111827" },
    { name: "React", icon: Zap, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: Feather, color: "#38BDF8" },
    { name: "TypeScript", icon: Code, color: "#3178C6" },
    { name: "PostgreSQL", icon: Database, color: "#336791" },
    { name: "Vercel", icon: Cloud, color: "#000000" },
    { name: "GSAP", icon: Layers, color: "#7C3AED" },
    { name: "Figma", icon: Palette, color: "#F24E1E" },
    { name: "Infrastructure", icon: Server, color: "#60A5FA" },
    { name: "Performance", icon: Cpu, color: "#F97316" },
  ];

  const loopedTech = [...technologies, ...technologies];

  return (
    <section className="py-16 overflow-hidden">
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex justify-center mb-16"
>
  <p 
    className="text-3xl text-white font-bold text-center"
    style={{ fontFamily: "'sora', sans-serif" }}
  >
    Our Cutting-Edge Tech Stack
  </p>
</motion.div>

      <motion.div
        className="flex gap-8 w-max px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {loopedTech.map((tech, index) => (
          <div
            key={index}
            className={`
              min-w-[140px] h-[100px]
              flex items-center justify-center
              bg-[#1A1F2C]/40
              border border-[#9AA4B2]/10
              rounded-xl
              hover:border-[#3B82F6]/30
              hover:bg-[#1A1F2C]/60
              transition-all
              cursor-pointer
            `}
          >
            <tech.icon role="img" aria-label={tech.name} className="icon-glow h-8 md:h-10" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
