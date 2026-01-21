import React from 'react';
import FinalCTA from './components/FinalCTA';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#050B1A] text-white py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Hero Header */}
        <header className="mb-20 text-center">
          <div className="inline-block mb-8">
            <span className="text-sm tracking-[0.3em] uppercase text-white/50">About</span>
          </div>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
            ZINSTACK
          </h2>
          <p className="mt-8 text-white/70 text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
            We build strategic digital products and platforms for scalable
            businesses — reliable systems you own and grow with.
          </p>
        </header>

        <div>
          {/* Founder card - Larger */}
          <article className="lg:col-span-5 bg-gradient-to-br from-white/3 via-blue-500/3 to-transparent p-10 rounded-2xl border border-white/6">
            <div className="flex items-start gap-8 mb-12">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-blue-500/10 border border-white/10 flex-shrink-0 flex items-center justify-center text-3xl font-bold">
                KN
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-3xl">K. Niklesh</h3>
                <p className="mt-2 text-lg text-white/70">Founder & Chief Architect</p>
                <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm">Available for consulting</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed mb-10">
              K. Niklesh founded ZINSTACK to help teams ship dependable,
              maintainable platforms that scale. With decades of product and
              engineering experience across multiple industries, Niklesh focuses
              on product strategy, system architecture, and building elite teams
              that deliver exceptional results.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-xl mb-4 text-white">Core Philosophy</h4>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Product-first engineering approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Composable systems with clear boundaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Simplicity over cleverness</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-xl mb-4 text-white">Location & Focus</h4>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <span className="text-sm">🌍</span>
                    </div>
                    <div>
                      <div className="font-medium">Remote First</div>
                      <div className="text-sm text-white/60">Global team</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <span className="text-sm">🏢</span>
                    </div>
                    <div>
                      <div className="font-medium">Enterprise</div>
                      <div className="text-sm text-white/60">Scale-focused</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Mission & Values - Larger */}
          <div className="lg:col-span-7 space-y-12">
            {/* Mission Section */}
            <section className="bg-white/3 p-12 rounded-2xl border border-white/6">
              <div className="mb-10">
                <div className="inline-block px-4 py-2 bg-white/5 rounded-full mb-6">
                  <span className="text-sm font-medium">Our Mission</span>
                </div>
                <h4 className="font-bold text-4xl mb-6">Building Digital Foundations</h4>
                <p className="text-xl text-white/80 leading-relaxed">
                  We help companies design, build and operate digital platforms
                  that grow with their users. We care about long-term reliability
                  and clear ownership — not temporary hacks. Our work blends
                  product thinking with engineering discipline so teams can move
                  faster with confidence.
                </p>
              </div>

              <div>
                <div>
                  <h5 className="font-semibold text-xl mb-4">Strategic Approach</h5>
                  <p className="text-white/70">
                    Every project begins with understanding business objectives,
                    user needs, and technical constraints before writing a single
                    line of code.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-xl mb-4">Long-term Vision</h5>
                  <p className="text-white/70">
                    We build systems that evolve gracefully, avoiding technical
                    debt and ensuring maintainability for years to come.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Values Grid */}
            <section>
              <h4 className="font-bold text-3xl mb-8">Core Values</h4>
              <div>
                <div className="p-8 bg-gradient-to-br from-white/2 to-transparent rounded-xl border border-white/6">
                  <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h5 className="font-bold text-2xl mb-3">Craft</h5>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Clear UX, robust code, and exceptional attention to detail
                    in every aspect of our work.
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-white/2 to-transparent rounded-xl border border-white/6">
                  <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h5 className="font-bold text-2xl mb-3">Scale</h5>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Systems that grow gracefully with your business, handling
                    increased load without compromising performance.
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-white/2 to-transparent rounded-xl border border-white/6">
                  <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                    <span className="text-2xl">🔑</span>
                  </div>
                  <h5 className="font-bold text-2xl mb-3">Ownership</h5>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Complete end-to-end responsibility — from ideation to
                    deployment, maintenance, and continuous improvement.
                  </p>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="p-12 rounded-2xl border border-white/6 bg-gradient-to-br from-white/2 to-transparent">
              <h4 className="font-bold text-3xl mb-8">Our Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-xl font-bold">1</div>
                  <h5 className="font-semibold text-xl">Discover</h5>
                  <p className="text-white/70">
                    Deep dive into business goals, user needs, and technical constraints
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-xl font-bold">2</div>
                  <h5 className="font-semibold text-xl">Design</h5>
                  <p className="text-white/70">
                    Create simple, testable APIs and intuitive UX flows
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-xl font-bold">3</div>
                  <h5 className="font-semibold text-xl">Deliver</h5>
                  <p className="text-white/70">
                    Ship in small iterations with clear ownership and documentation
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-xl font-bold">4</div>
                  <h5 className="font-semibold text-xl">Evolve</h5>
                  <p className="text-white/70">
                    Measure, observe, and iterate based on real-world usage data
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-white/70 text-lg">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-white/70 text-lg">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-white/70 text-lg">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70 text-lg">System Monitoring</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 p-12 rounded-2xl bg-gradient-to-r from-white/3 via-blue-500/3 to-transparent border border-white/6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-4xl mb-6">Ready to Build Something Great?</h3>
            <p className="text-xl text-white/70 mb-10">
              Whether you're starting from scratch or scaling an existing platform,
              we're here to help you build systems that last.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

              <div className="text-center sm:text-left">
                <p className="text-white/60 text-lg">
                  contact us at{' '}
                  <a className="text-blue-400 hover:text-blue-300 font-medium" href="mailto:hello@zinstack.example">
                    +91 73826 74757
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}