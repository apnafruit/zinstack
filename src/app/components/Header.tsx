import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ArrowUpRight } from "lucide-react";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F14]/95 border-[#9AA4B2]/20 shadow-lg' 
        : 'bg-[#0B0F14]/80 border-[#9AA4B2]/10'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
  href="#"
  className="flex items-center gap-2 text-xl text-[#EDEFF2] hover:text-[#3B82F6] transition-colors"
  style={{ fontFamily: "'marope', sans-serif", fontWeight: 500 }}
>
  <img
    src="/zslogo.svg"
    alt="ZS Logo"
    className="w-12 h-12"
  />
  <span>ZIVSTACK</span>
</a>

          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#9AA4B2] hover:text-[#EDEFF2] transition-colors relative group"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#3B82F6] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.a
  href="https://wa.me/917382674757"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="
    inline-flex items-center gap-3
    px-6 py-2
    rounded-full
    border border-blue-500
    text-blue-400
    bg-[radial-gradient(circle_at_top_left,#2563eb33,transparent_60%)]
    hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]
    transition-all duration-300
  "
  style={{ fontFamily: "'sora', sans-serif", fontWeight: 1000 }}
>
  <span>Let's talk</span>

  <span className="
    flex items-center justify-center
    w-7 h-7
    rounded-full
    bg-gray-700
    text-white
  ">
    <ArrowUpRight size={26} />
  </span>
</motion.a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#EDEFF2] p-2 rounded-md touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
          {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-6 pb-4 space-y-4"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-[#9AA4B2] hover:text-[#EDEFF2] transition-colors py-3 px-2 min-h-[44px] touch-manipulation"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <motion.a
  href="https://wa.me/917382674757"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="
    inline-flex items-center gap-3
    px-6 py-2
    rounded-full
    border border-blue-500
    text-blue-400
    bg-[radial-gradient(circle_at_top_left,#2563eb33,transparent_60%)]
    hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]
    transition-all duration-300
  "
  style={{ fontFamily: "'sora', sans-serif", fontWeight: 1000 }}
>
  <span>Let's talk</span>

  <span className="
    flex items-center justify-center
    w-7 h-7
    rounded-full
    bg-gray-700
    text-white
  ">
    <ArrowUpRight size={26} />
  </span>
</motion.a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}