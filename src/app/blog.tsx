import React from 'react';
import FinalCTA from './components/FinalCTA';

export default function Blog() {
  const posts = [
    { id: 1, title: 'Shipping Reliable Products', excerpt: 'How we design for reliability and maintainability.' },
    { id: 2, title: 'Scaling with Serverless', excerpt: 'Patterns and trade-offs when adopting serverless architectures.' },
    { id: 3, title: 'Designing for Performance', excerpt: 'Practical steps to improve web performance and UX.' }
  ];

  return (
    <section>
    <section id="blog" className="min-h-screen text-white py-12 sm:py-16 md:py-20 lg:py-32 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 bg-[linear-gradient(180deg,_#050B1A_0%,_#050B1A_65%,_#030711_85%,_#000000_100%)]">

      <div className="max-w-7xl mx-auto">
        <header className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-center">
          <div className="inline-block mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/50">Blog</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight px-2">
            Insights & Articles
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-white/70 text-xs sm:text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed px-2">
            Articles about engineering, product, design and scaling digital platforms.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {posts.map(post => (
            <article key={post.id} className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white/3 rounded-lg sm:rounded-2xl border border-white/6 hover:border-white/10 transition-all duration-300 min-h-fit">
              <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 leading-snug">{post.title}</h3>
              <p className="text-white/70 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm md:text-base transition-colors font-medium inline-flex items-center gap-1">
                Read more <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
    <FinalCTA />
    </section>
  );
}
