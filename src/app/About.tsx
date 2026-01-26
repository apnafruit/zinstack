import React, { useEffect, useRef, useState } from 'react';
import FinalCTA from './components/FinalCTA';

export default function About() {
  const [activeStep, setActiveStep] = useState(0);
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.process-step');
            const stepIndex = Math.floor(entry.intersectionRatio * steps.length);
            setActiveStep(Math.min(stepIndex, steps.length - 1));
          }
        });
      },
      {
        threshold: Array.from({ length: 10 }, (_, i) => i * 0.1),
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discover & Strategy",
      description: "Deep dive into business goals, user needs, and technical constraints. We analyze market positioning, competitive landscape, and operational requirements to build a comprehensive strategy that aligns technology with business objectives."
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Create simple, testable APIs and intuitive UX flows. We focus on building scalable architectures with clear boundaries, ensuring maintainability and extensibility from day one."
    },
    {
      number: "03",
      title: "Development & Delivery",
      description: "Ship in small iterations with clear ownership and documentation. Our incremental approach ensures continuous delivery of value while maintaining high code quality and system reliability."
    },
    {
      number: "04",
      title: "Launch & Scale",
      description: "Measure, observe, and iterate based on real-world usage data. We implement comprehensive monitoring and analytics to support data-driven decisions for continuous improvement."
    }
  ];

  return (
    <section id="about" className="bg-[#050B1A] text-white overflow-x-hidden">
      {/* Hero Banner */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-blue-900/10 via-[#050B1A] to-[#050B1A] overflow-hidden">
  {/* Ambient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
    <div className="inline-flex items-center justify-center px-8 py-5 sm:px-12 sm:py-6
      bg-white/5 backdrop-blur-md
      rounded-full
      border border-white/10
      shadow-[0_0_40px_rgba(59,130,246,0.15)]
    ">
      <span
        className="
          text-[clamp(28px,6vw,64px)]
          font-extrabold
          tracking-[0.25em]
          uppercase
          text-white/90
        "
      >
        About&nbsp;ZIVSTACK
      </span>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        {/* Founder Details - Full Width Container */}
        <div className="mb-16 sm:mb-24 bg-gradient-to-br from-white/3 via-blue-500/3 to-transparent rounded-3xl border border-white/6 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/10 to-blue-500/10 border border-white/10 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
                KN
              </div>
              
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">K. Niklesh</h3>
              <p className="mt-2 text-base sm:text-lg md:text-xl text-white/70">Founder & Chief Architect</p>
              
              <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium">Available for consulting</span>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                K. Niklesh founded ZIVSTACK to help teams ship dependable, maintainable platforms that scale. 
                With decades of product and engineering experience across multiple industries, Niklesh focuses 
                on product strategy, system architecture, and building elite teams that deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl mb-4 text-white">Core Philosophy</h4>
                  <ul className="space-y-4 text-white/70">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Product-first engineering approach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Composable systems with clear boundaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Simplicity over cleverness</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl mb-4 text-white">Location & Focus</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        <span className="text-lg">🌍</span>
                      </div>
                      <div>
                        <div className="font-medium">Remote First</div>
                        <div className="text-sm text-white/60">Global team collaboration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        <span className="text-lg">🏢</span>
                      </div>
                      <div>
                        <div className="font-medium">Enterprise Scale</div>
                        <div className="text-sm text-white/60">Growth-focused solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 sm:mb-20">
          {/* Our Mission */}
          <div className="bg-gradient-to-br from-white/3 via-blue-500/3 to-transparent rounded-3xl border border-white/6 p-8 sm:p-12">
            <div className="inline-block px-4 py-2 bg-white/5 rounded-full mb-8">
              <span className="text-sm font-medium tracking-wider">OUR MISSION</span>
            </div>
            
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">Building Digital Foundations</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg sm:text-xl mb-3 text-white">Strategic Approach</h4>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Every project begins with understanding business objectives, user needs, and technical 
                  constraints before writing a single line of code. We prioritize long-term value over 
                  short-term gains.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-3 text-white">Long-term Vision</h4>
                <p className="text-white/70 leading-relaxed">
                  We build systems that evolve gracefully, avoiding technical debt and ensuring 
                  maintainability for years to come. Our focus is on creating sustainable solutions 
                  that grow with your business.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-3 text-white">Reliability First</h4>
                <p className="text-white/70 leading-relaxed">
                  Dependable systems form the backbone of successful digital transformation. 
                  We engineer for reliability, scalability, and performance from the ground up.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-br from-white/3 via-purple-500/3 to-transparent rounded-3xl border border-white/6 p-8 sm:p-12">
            <div className="inline-block px-4 py-2 bg-white/5 rounded-full mb-8">
              <span className="text-sm font-medium tracking-wider">CORE VALUES</span>
            </div>
            
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">Principles That Guide Us</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg sm:text-xl mb-3 text-white">Engineering Craft</h4>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Clear UX, robust code, and exceptional attention to detail in every aspect of our work. 
                  We believe in building with care and precision.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-3 text-white">Scalable Architecture</h4>
                <p className="text-white/70 leading-relaxed">
                  Systems that grow gracefully with your business, handling increased load without 
                  compromising performance. Future-proof design is at our core.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-3 text-white">End-to-End Ownership</h4>
                <p className="text-white/70 leading-relaxed">
                  Complete responsibility from ideation to deployment, maintenance, and continuous 
                  improvement. We stand by our work and ensure its success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section with Vertical Progress */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/5 rounded-full mb-6">
              <span className="text-sm font-medium tracking-wider">OUR PROCESS</span>
            </div>
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">How We Build Excellence</h3>
          </div>

          <div ref={processRef} className="relative">
            {/* Vertical Glowing Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                <div className="relative w-full h-full">
                {/* Background line */}
                <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                {/* Animated glow */}
                <div 
                  className="absolute top-0 w-full rounded-full transition-all duration-300"
                  style={{
                    height: `${(activeStep + 1) * 25}%`,
                    background: `linear-gradient(to bottom, 
                      ${activeStep >= 0 ? '#3B82F6' : '#ffffff20'}, 
                      ${activeStep >= 1 ? '#8B5CF6' : '#ffffff20'}, 
                      ${activeStep >= 2 ? '#10B981' : '#ffffff20'}, 
                      ${activeStep >= 3 ? '#F59E0B' : '#ffffff20'})`,
                    boxShadow: `0 0 20px ${activeStep === 0 ? '#3B82F640' : 
                                activeStep === 1 ? '#8B5CF640' : 
                                activeStep === 2 ? '#10B98140' : 
                                '#F59E0B40'}`
                  }}
                ></div>
              </div>
            </div>

            {/* Process Steps Container */}
            <div className="bg-gradient-to-br from-white/3 to-transparent rounded-3xl border border-white/6 p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Current Step Display */}
                <div className="lg:sticky lg:top-24 h-fit">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-white/6 border border-white/10 text-white/20 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                      <span className="text-xl sm:text-2xl lg:text-4xl font-black">{steps[activeStep].number}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Step Indicators */}
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`process-step p-6 rounded-2xl transition-all duration-300 ${
                        index === activeStep 
                          ? 'bg-white/10 border border-white/20' 
                          : 'bg-white/5 border border-white/6 hover:bg-white/7'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 sm:w-16 lg:w-24 aspect-square rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold leading-none transition-all duration-300 ${
                            index === activeStep 
                              ? index === 0 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                index === 1 ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                                index === 2 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                              : 'bg-white/5 text-white/40'
                          }`}
                        >
                          {step.number}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg sm:text-xl mb-2">{step.title}</h4>
                          <p className="text-white/60 text-sm sm:text-sm leading-relaxed">{step.description.substring(0, 100)}...</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#050B1A] via-[#0A1430] to-[#050B1A] p-6 sm:p-10 lg:p-16">
  {/* Background accents */}
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
  
  <div className="relative max-w-4xl mx-auto px-4">
    {/* Header with accent */}
    <div className="flex flex-col items-center mb-10">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        <span className="text-sm font-medium tracking-wider">LET'S CONNECT</span>
      </div>
      
      <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-6">
        Build With Confidence
      </h3>
      
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
    </div>

    {/* Main content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
      {/* Left side - Statement */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">Strategic Partnership</h4>
            <p className="text-white/70">
              From concept to scale, we're your dedicated technology partner.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">Proven Process</h4>
            <p className="text-white/70">
              Structured approach ensuring quality, reliability, and timely delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Contact info */}
      <div className="bg-white/3 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
        <h4 className="font-bold text-xl sm:text-2xl mb-6 text-center">Get in Touch</h4>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/5 rounded-xl border border-white/10 min-h-[44px] min-w-[44px]">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@zivstack.in" className="text-base sm:text-lg font-medium hover:text-blue-300 transition-colors duration-300 inline-flex items-center">contact@zivstack.in</a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/5 rounded-xl border border-white/10 min-h-[44px]">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg font-medium">+91 73826 74757</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer note */}
    <div className="mt-12 pt-8 border-t border-white/10 text-center">
      <p className="text-white/50 text-sm">
        Response within 24 hours • Initial consultation at no cost • Flexible engagement models
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}