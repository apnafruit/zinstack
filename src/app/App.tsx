import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import ProblemSolution from '@/app/components/ProblemSolution';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import Process from '@/app/components/Process';
import TechStack from '@/app/components/TechStack';
import Testimonials from '@/app/components/Testimonials';
import FinalCTA from '@/app/components/FinalCTA';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import WhatsAppButton from '@/app/components/WhatsAppButton';

export default function App() {
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
        <Hero />
        <ProblemSolution />
        <section id="services">
          <Services />
        </section>
        <section id="work">
          <Portfolio />
        </section>
        <section id="process">
          <Process />
        </section>
        <TechStack />
        <Testimonials />
        <section id="contact">
          <FinalCTA />
        </section>
      </main>
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}