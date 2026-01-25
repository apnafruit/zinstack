import React from 'react';
import FinalCTA from './components/FinalCTA';

export default function Blog() {
  const posts = [
    { id: 1, title: 'Shipping Reliable Products', excerpt: 'How we design for reliability and maintainability.' },
    { id: 2, title: 'Scaling with Serverless', excerpt: 'Patterns and trade-offs when adopting serverless architectures.' },
    { id: 3, title: 'Designing for Performance', excerpt: 'Practical steps to improve web performance and UX.' }
  ];

  return (
    <section id="blog" className="min-h-screen bg-[#050B1A] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <header className="mb-12 sm:mb-16 text-center">
          <div className="inline-block mb-4 sm:mb-8">
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/50">Blog</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
            Insights & Articles
          </h2>
          <p className="mt-4 sm:mt-8 text-white/70 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Articles about engineering, product, design and scaling digital platforms.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="p-6 bg-white/3 rounded-2xl border border-white/6">
              <h3 className="font-bold text-xl mb-2">{post.title}</h3>
              <p className="text-white/70 mb-4">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="text-blue-400 hover:underline">Read more →</a>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <FinalCTA />
        </div>
      </div>
    </section>
  );
}
