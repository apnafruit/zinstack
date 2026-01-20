import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-[#050506] overflow-hidden">
      {/* Cityscape Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D0F1A] to-[#0A0A0F]" />
        
        {/* City silhouette layer 1 (farthest) - subtle slow forward motion */}
        <motion.div className="absolute bottom-0 left-0 right-0 h-1/3" initial={{ y: 6, scale: 1 }} animate={{ y: -6, scale: 1.005 }} transition={{ duration: 20, ease: [0.2,0.8,0.2,1] }}>
          <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
            <path d="M0,400 L0,300 C100,280 200,260 300,250 C400,240 500,230 600,240 C700,250 800,280 900,290 C1000,300 1100,290 1200,270 C1300,250 1340,260 1440,270 L1440,400 L0,400 Z" 
                  fill="#0B1220" opacity="0.4" />
          </svg>
        </motion.div>

        {/* City silhouette layer 2 (middle distance) - medium parallax */}
        <motion.div className="absolute bottom-0 left-0 right-0 h-2/5" initial={{ y: 10, scale: 1 }} animate={{ y: -12, scale: 1.01 }} transition={{ duration: 16, ease: [0.2,0.8,0.2,1] }}>
          <svg viewBox="0 0 1440 500" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
            <g fill="#0F1720">
              <rect x="0" y="200" width="80" height="300" rx="2" />
              <rect x="100" y="150" width="60" height="350" rx="3" />
              <rect x="180" y="180" width="90" height="320" rx="4" />
              <rect x="290" y="120" width="70" height="380" rx="3" />
              <rect x="380" y="160" width="120" height="340" rx="6" />
              <rect x="520" y="100" width="100" height="400" rx="5" />
              <rect x="640" y="140" width="80" height="360" rx="3" />
              <rect x="740" y="180" width="110" height="320" rx="4" />
              <rect x="870" y="130" width="90" height="370" rx="4" />
              <rect x="980" y="160" width="140" height="340" rx="7" />
              <rect x="1140" y="100" width="80" height="400" rx="3" />
              <rect x="1240" y="150" width="90" height="350" rx="4" />
              <rect x="1350" y="200" width="90" height="300" rx="3" />
              <rect x="385" y="120" width="30" height="40" rx="1" fill="#071021" />
              <rect x="985" y="100" width="40" height="60" rx="2" fill="#071021" />
              <rect x="525" y="80" width="20" height="20" rx="1" fill="#3B82F6" opacity="0.3" />
            </g>
          </svg>
        </motion.div>

        {/* City silhouette layer 3 (foreground) - fastest parallax */}
        <motion.div className="absolute bottom-0 left-0 right-0 h-1/2" initial={{ y: 14, scale: 1 }} animate={{ y: -20, scale: 1.02 }} transition={{ duration: 12, ease: [0.2,0.8,0.2,1] }}>
          <svg viewBox="0 0 1440 600" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
            <g fill="#071021">
              <rect x="0" y="300" width="140" height="300" rx="4" />
              <rect x="10" y="280" width="30" height="20" rx="1" fill="#0B1220" />
              <rect x="50" y="260" width="20" height="40" rx="1" fill="#0B1220" />
              <rect x="160" y="250" width="100" height="350" rx="3" />
              <rect x="280" y="220" width="180" height="380" rx="6" />
              <rect x="290" y="200" width="40" height="20" rx="1" fill="#0F1720" />
              <rect x="480" y="180" width="120" height="420" rx="5" />
              <rect x="500" y="160" width="30" height="20" rx="1" fill="#0F1720" />
              <rect x="550" y="140" width="20" height="40" rx="1" fill="#0B1220" />
              <rect x="620" y="280" width="90" height="320" rx="3" />
              <rect x="730" y="240" width="110" height="360" rx="4" />
              <rect x="860" y="200" width="140" height="400" rx="6" />
              <rect x="1020" y="260" width="80" height="340" rx="3" />
              <rect x="1120" y="220" width="120" height="380" rx="4" />
              <rect x="1260" y="300" width="100" height="300" rx="3" />
              <rect x="1380" y="280" width="60" height="320" rx="2" />
            </g>
            <g fill="#000000" opacity="0.1">
              {[...Array(8)].map((_, i) => (
                <rect key={`left-${i}`} x={20 + (i % 4) * 30} y={320 + Math.floor(i / 4) * 40} width="12" height="20" rx="1" />
              ))}
              {[...Array(12)].map((_, i) => (
                <rect key={`center-${i}`} x={300 + (i % 6) * 25} y={240 + Math.floor(i / 6) * 35} width="8" height="15" rx="1" />
              ))}
              {[...Array(16)].map((_, i) => (
                <rect key={`right-${i}`} x={500 + (i % 4) * 25} y={200 + Math.floor(i / 4) * 30} width="10" height="18" rx="1" />
              ))}
            </g>
          </svg>
        </motion.div>
        
        {/* Grid overlay for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        
        {/* Subtle fog/mist effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
        
        {/* Animated glows from windows */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Blue glows */}
          {[240, 380, 520, 680, 820, 980, 1120, 1260].map((x, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-2 h-2 bg-blue-500/20 rounded-full blur-sm"
              style={{ left: `${x}px` }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Cyan glows */}
          {[180, 320, 460, 600, 740, 880, 1020, 1180].map((x, i) => (
            <motion.div
              key={`cyan-${i}`}
              className="absolute bottom-0 w-1.5 h-1.5 bg-cyan-400/15 rounded-full blur-sm"
              style={{ left: `${x}px` }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4 + i * 0.6,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="relative">
          {/* Abstract industrial silhouettes (flat shapes) */}
          <svg className="absolute -left-8 top-6 w-[44%] h-[52%] opacity-30" viewBox="0 0 800 600" fill="none" aria-hidden>
            <g fill="#0F1720">
              <rect x="40" y="160" width="140" height="340" rx="6" fill="#0a4180" />
              <rect x="200" y="220" width="100" height="280" rx="4" fill="#032246" />
              <rect x="320" y="120" width="220" height="380" rx="6" fill="#0F1720" />
              <rect x="560" y="260" width="120" height="240" rx="4" fill="#0F1720" />
              {/* crane arm */}
              <rect x="520" y="80" width="240" height="16" rx="2" transform="rotate(-12 520 80)" fill="#0F1720" />
              <rect x="680" y="88" width="8" height="64" rx="2" transform="rotate(-12 680 88)" fill="#0F1720" />
            </g>
            <g transform="translate(0,0)" fill="#919cb2">
              <rect x="120" y="120" width="40" height="20" rx="2" />
            </g>
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="lg:w-3/5">
              <motion.h1
                initial={{ x: -80, y: 6, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.2,0.8,0.2,1] }}
                className="w-full text-[clamp(48px,10vw,160px)] leading-[0.85] font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif' }}
              >
                ZINSTACK
              </motion.h1>

              <motion.p
                initial={{ x: -56, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.28, ease: [0.2,0.8,0.2,1] }}
                className="mt-6 text-lg text-[#9AA4B2] max-w-2xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Strategic digital products and platforms for scalable businesses. We build reliable systems, not toys.
              </motion.p>

              <motion.a
                href="#work"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.2,0.8,0.2,1] }}
                className="mt-8 inline-flex items-center gap-4 text-2xl text-[#EDEFF2] hover:text-red-600 transition-colors group"
              >
                <span>View work</span>

                <ArrowRight
                  className="w-6 h-6 text-[#3B82F6] transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

            </div>

            <motion.div className="hidden lg:block lg:w-2/5 relative" initial={{ scale: 0.88, filter: 'blur(10px)', opacity: 0.6 }} animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.2,0.8,0.2,1] }}>
              {/* Accent vertical composition to balance the large wordmark */}
              <svg viewBox="0 0 300 420" className="w-full h-auto" aria-hidden>
                <g fill="#ffffff" opacity="0.9">
                  <rect x="20" y="40" width="60" height="260" rx="4" />
                  <rect x="100" y="120" width="40" height="160" rx="3" />
                  <rect x="160" y="20" width="80" height="360" rx="6" />
                  <rect x="250" y="200" width="24" height="120" rx="2" />
                </g>
                {/* subtle accent line */}
                <line x1="10" y1="380" x2="290" y2="380" stroke="#3B82F6" strokeWidth="1" opacity="0.08" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}