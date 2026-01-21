import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowRight, Quote, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

export default function PremiumTestimonials() {
  const testimonials = [
    {
      quote: "ZIVSTACK transformed our online presence. The new site is fast, beautiful, and has doubled our conversion rate. Best investment we've made.",
      author: "Sarah Chen",
      position: "CEO, TechFlow",
      rating: 5
    },
    {
      quote: "Professional, strategic, and incredibly talented. They didn't just build a website—they built a growth engine for our business.",
      author: "Michael Rodriguez",
      position: "Founder, GrowthLabs",
      rating: 5
    },
    {
      quote: "The attention to detail is unmatched. Every interaction was smooth, and the final product exceeded our expectations. Highly recommend.",
      author: "Emily Watson",
      position: "CMO, Venture Studio",
      rating: 5
    },
    {
      quote: "A partnership that delivered beyond metrics. Our brand perception improved by 300% after launching the new platform.",
      author: "James Wilson",
      position: "Director, Nova Corp",
      rating: 5
    }
  ];

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setIndex((i) => (i + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, testimonials.length]);

  const handleNext = () => {
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  // Show up to 4 cards in stack for depth effect
  const visible = [...testimonials.slice(index), ...testimonials.slice(0, index)].slice(0, 4);

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
      {/* Premium Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#0D0F1A] to-[#0A0A0F]" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 overflow-hidden">
        </div>
      </div>
 
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Enhanced Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Real results from
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  real clients
                </span>
              </h2>
              <p className="text-lg text-white/70 mt-4 max-w-lg">
                Discover how top industry leaders achieved exceptional growth through strategic digital transformation
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-white/60 mt-1">Client Satisfaction</div>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">2.4x</div>
                <div className="text-sm text-white/60 mt-1">Avg. Growth Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Card Stack */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative w-full h-[500px] lg:h-[520px] select-none">
              <AnimatePresence mode="popLayout">
                {visible.map((testimonial, i) => {
                  const depthScale = 1 - i * 0.04;
                  const depthY = i * 18;
                  const depthOpacity = 1 - i * 0.08;
                  const zIndex = 40 - i;

                  return (
                    <motion.div
                      key={`${testimonial.author}-${index + i}`}
                      initial={{ 
                        scale: 0.92 + i * 0.02, 
                        y: depthY + 6, 
                        opacity: depthOpacity - 0.06,
                        rotateX: 5 
                      }}
                      animate={{ 
                        scale: depthScale, 
                        y: depthY, 
                        opacity: i === 0 ? 1 : depthOpacity, 
                        rotateX: 0,
                        zIndex: zIndex 
                      }}
                      exit={{ 
                        x: 220, 
                        y: -120, 
                        rotate: 8, 
                        opacity: 0.18,
                        transition: { duration: 0.7, ease: [0.22,1,0.36,1] } 
                      }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 260, 
                        damping: 28,
                        mass: 0.8 
                      }}
                      className={`absolute inset-x-0 rounded-2xl p-8 lg:p-10 bg-gradient-to-b from-[#0B0F14] to-[#071021] border border-white/6 shadow-2xl`}
                      aria-hidden={i !== 0}
                      role="article"
                      style={{
                        boxShadow: i === 0 
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                          : '0 10px 30px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Card glow effect for top card */}
                      {i === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none"
                        />
                      )}

                      {/* Quote icon for top card */}
                      {i === 0 && (
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <Quote className="w-5 h-5 text-white" />
                        </div>
                      )}

                      <div className="flex items-start justify-between">
                        <div className="flex gap-2" aria-hidden>
                          {[...Array(testimonial.rating)].map((_, j) => (
                            <Star 
                              key={j} 
                              className={`w-5 h-5 ${i === 0 ? 'fill-[#3B82F6] text-[#3B82F6]' : 'fill-[#2D3748] text-[#2D3748]'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-[#EDEFF2] leading-relaxed mt-4 lg:mt-6 text-lg lg:text-xl font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                        "{testimonial.quote}"
                      </p>

                      <div className="pt-6 border-t border-white/6 mt-6">
                        <p className="text-[#EDEFF2] font-semibold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {testimonial.author}
                        </p>
                        <p className="text-sm lg:text-base text-[#9AA4B2] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {testimonial.position}
                        </p>
                      </div>
                      
                      {/* Navigation Controls - Desktop */}
                      <div className="hidden lg:flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                        <button
                          onClick={handlePrev}
                          className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="w-4 h-4 text-white group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 text-white group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === index 
                        ? 'bg-white w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-500/30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}