import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import ProblemSolution from '@/app/components/ProblemSolution';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import Industries from '@/app/components/Industries';
import Products from '@/app/components/Products';
import TechStack from '@/app/components/TechStack';
import Testimonials from '@/app/components/Testimonials';
import FinalCTA from '@/app/components/FinalCTA';
import ScrollToTop from '@/app/components/ScrollToTop';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import About from '@/app/About';
import Work from '@/app/work';
import Blog from '@/app/blog';
import ServicesPage from '@/app/services';
import { useEffect, useState } from 'react';

export default function App() {
  const [route, setRoute] = useState<string>(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = (target.closest && target.closest('a')) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      // Only handle same-origin absolute paths like /about
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin === window.location.origin && url.pathname.startsWith('/')) {
          e.preventDefault();
          if (window.location.pathname !== url.pathname) {
            window.history.pushState({}, '', url.pathname + url.search + url.hash);
            setRoute(url.pathname);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      } catch (err) {
        // ignore invalid URLs
      }
    };

    window.addEventListener('popstate', onPop);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#EDEFF2] antialiased relative">
      {/* Subtle grain texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
      <Header />
      <main className="pt-16">
        {route === '/about' ? (
          <About />
        ) : route === '/work' ? (
          <Work />
        ) : route === '/blog' ? (
          <Blog />
        ) : route === '/services' ? (
          <ServicesPage />
        ) : (
          <>
            <Hero />
            <ProblemSolution />
            <section id="services">
              <Services />
            </section>
            <section id="work">
              <Portfolio />
            </section>
            <section id="industries">
              <Industries />
            </section>
            <section id="products">
              <Products />
            </section>
            <TechStack />
            <Testimonials />
            <section id="contact">
              <FinalCTA />
            </section>
          </>
        )}
      </main>
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}