import { motion } from 'motion/react';
import { Code2, Palette, Gauge, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description: "Custom-built websites using modern frameworks. Scalable, maintainable, and built for growth.",
      outcomes: ["React & Next.js", "Responsive design", "SEO optimized"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-first interfaces that guide visitors toward action. Beautiful, intuitive, and conversion-focused.",
      outcomes: ["Wireframing", "Prototyping", "User testing"]
    },
    {
      icon: Gauge,
      title: "Performance & SEO",
      description: "Lightning-fast load times and search engine visibility. Built for speed and discoverability.",
      outcomes: ["Core Web Vitals", "Technical SEO", "Page speed optimization"]
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Continuous maintenance, updates, and improvements. Your success is our priority.",
      outcomes: ["24/7 monitoring", "Regular updates", "Priority support"]
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
      <img src="/ban3.png" alt="What we do background" className="absolute inset-0 w-full h-full object-cover block" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p 
            className="text-3xl text-white text-bold"
            style={{ fontFamily: "'sora', sans-serif" }}
          >
            End-to-end solutions for modern web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1A1F2C]/50 border border-[#9AA4B2]/10 rounded-xl p-8 space-y-6 transition-all hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#3B82F6]" />
                </div>
                
                <div className="space-y-3">
                  <h3 
                    className="text-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-[#9AA4B2] text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li 
                      key={i}
                      className="text-sm text-[#9AA4B2] flex items-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
