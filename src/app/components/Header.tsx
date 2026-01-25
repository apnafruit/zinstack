import { motion } from "motion/react";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F14]/95 border-[#9AA4B2]/20 shadow-lg"
          : "bg-[#0B0F14]/80 border-[#9AA4B2]/10"
      }`}
    >
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
              className="flex items-center gap-2 text-sm sm:text-base text-[#EDEFF2] hover:text-[#3B82F6] transition-colors"
            >
              <img src="/zslogo.svg" alt="ZS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <span className="truncate">ZIVSTACK</span>
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
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#3B82F6] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Email (icon → reveal text on hover) */}
            <motion.a
              href="mailto:contact@zivstack.in"
              className="
                group
                flex items-center
                h-10
                min-h-[44px] min-w-[44px]
                px-3
                rounded-full
                border border-white/20
                bg-white/5
                hover:bg-white/10
                text-white
                overflow-hidden
                transition-all duration-300
                hover:px-4
              "
            >
              <Mail size={18} className="flex-shrink-0" />

              <span
                className="
                  ml-2
                  whitespace-nowrap
                  text-sm
                  opacity-0
                  max-w-0
                  group-hover:opacity-100
                  group-hover:max-w-[220px]
                  transition-all duration-300
                "
              >
                contact@zivstack.in
              </span>
            </motion.a>

            {/* WhatsApp CTA */}
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
            >
              <span>Let's talk</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-700 text-white">
                <ArrowUpRight size={18} />
              </span>
            </motion.a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#EDEFF2] p-3 rounded-md min-h-[44px] min-w-[44px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-6 pb-4 space-y-4"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-[#9AA4B2] hover:text-[#EDEFF2] py-3 px-4 text-base rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Email (always visible) */}
            <a
              href="mailto:contact@zivstack.in"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 text-white"
            >
              <Mail size={18} />
              contact@zivstack.in
            </a>

            {/* Mobile WhatsApp */}
            <motion.a
              href="https://wa.me/917382674757"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center gap-3
                px-6 py-3
                rounded-full
                border border-blue-500
                text-blue-400
                bg-[radial-gradient(circle_at_top_left,#2563eb33,transparent_60%)]
              "
            >
              <span>Let's talk</span>
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
