import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Development & Design",
      result: "150% increase in conversions",
      video: "/sunrise.mp4"
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      result: "40% faster user onboarding",
      video: "/site3.mp4"
    },
    {
      title: "Fintech Startup",
      category: "Full Stack Development",
      result: "Raised $2M post-launch",
      video: "/site.mp4"
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-4 lg:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
            20+ websites built for growing brands.
          </h2>
          <p className="text-lg text-[#9AA4B2] max-w-2xl">
            Real products. Real businesses. Real results.
          </p>
        </motion.div>

        {/* Grid - force desktop columns on all sizes */}
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl
                ${index === 0 ? "col-span-2 row-span-2" : ""}
                ${index === 3 ? "col-span-2" : ""}
              `}
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                {/* VIDEO */}
                {project.video && (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover responsive-media"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/85 via-[#0B0F14]/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[clamp(10px,2.2vw,12px)] text-[#3B82F6] uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                      <ArrowUpRight role="img" aria-label={`${project.category} link`} className="icon-glow w-4 h-4" />
                    </div>

                    <h3 className="text-[clamp(14px,3.2vw,24px)] font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-[clamp(10px,2.0vw,14px)] text-[#9AA4B2]">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#3B82F6]/30 rounded-xl transition-colors pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
