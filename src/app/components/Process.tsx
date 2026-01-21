import { motion } from 'motion/react';
import { Search, Palette, Code, Rocket, Headphones } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description: "Deep dive into your business, audience, and goals. We align on strategy before touching design."
    },
    {
      icon: Palette,
      number: "02",
      title: "Design",
      description: "Wireframes to high-fidelity prototypes. Every pixel serves a purpose, every interaction is intentional."
    },
    {
      icon: Code,
      number: "03",
      title: "Build",
      description: "Clean, scalable code built with modern frameworks. Performance and accessibility are non-negotiable."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch",
      description: "Rigorous testing, seamless deployment. We ensure everything works perfectly before going live."
    },
    {
      icon: Headphones,
      number: "05",
      title: "Support",
      description: "Ongoing maintenance, updates, and optimization. We're partners in your long-term success."
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
      <img src="/ban4.jpg" alt="Process background" className="absolute inset-0 w-full h-full object-cover block" />
      <div className="absolute inset-0 bg-black/30" />
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
            A proven framework for delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3B82F6]/30 to-transparent" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 md:hidden">
                        <div className="w-12 h-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#3B82F6]" />
                        </div>
                        <span 
                          className="text-5xl text-[#9AA4B2]/20"
                          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                        >
                          {step.number}
                        </span>
                      </div>
                      
                      <h3 
                        className="text-2xl md:text-3xl"
                        style={{ fontFamily: "'sora', sans-serif", fontWeight: 600 }}
                      >
                        {step.title}
                      </h3>
                      
                      <p 
                        className="text-[#9AA4B2] leading-relaxed"
                        style={{ fontFamily: "'sora', sans-serif" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon and Number - Desktop */}
                  <div className={`hidden md:block ${isEven ? 'md:col-start-2 md:pl-8' : 'md:col-start-1 md:pr-8'}`}>
                    <div className="flex items-center gap-6">
                      {!isEven && (
                        <span 
                          className="text-6xl lg:text-7xl text-[#9AA4B2]/20"
                          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                        >
                          {step.number}
                        </span>
                      )}
                      <div className="w-16 h-16 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center border border-[#3B82F6]/20">
                        <Icon className="w-8 h-8 text-[#3B82F6]" />
                      </div>
                      {isEven && (
                        <span 
                          className="text-6xl lg:text-7xl text-[#9AA4B2]/20"
                          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                        >
                          {step.number}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
