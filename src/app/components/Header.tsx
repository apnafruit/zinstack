import { motion } from "motion/react";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Floating Nav */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
  relative
  flex items-center justify-between
  px-4 sm:px-6
  h-16
  rounded-full
  bg-black/30
  backdrop-blur-xl
  border border-white/10
  transition-all duration-300
"

        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-[#EDEFF2] hover:text-blue-400 transition-colors"
          >
            <img
              src="/zslogo.svg"
              alt="ZS Logo"
              className="w-9 h-9 object-contain"
            />
            <span className="text-sm sm:text-base font-medium">
              ZIVSTACK
            </span>
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Email */}
            <a
              href="mailto:contact@zivstack.in"
              className="
                hidden sm:flex items-center gap-2
                px-3 h-10
                rounded-full
                border border-white/20
                bg-white/5
                text-white text-sm
                hover:bg-white/10
                transition
              "
            >
              <Mail size={16} />
              contact@zivstack.in
            </a>

            {/* Let's Talk */}
            <a
              href="https://wa.me/917382674757"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden sm:inline-flex items-center gap-2
                px-4 h-10
                rounded-full
                border border-blue-500
                text-blue-600 bg-blue-400/10
                hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]
                transition
              "
            >
              <span>Let’s talk</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                border border-white/20
                bg-white/5
                text-white
                hover:bg-white/10
                transition
              "
              aria-label="Open menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Dropdown Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                absolute
                top-full right-4
                mt-3
                w-56
                rounded-2xl
                bg-[#0B0F14]
                border border-white/10
                shadow-xl
                overflow-hidden
              "
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block px-5 py-3
                    text-sm text-[#9AA4B2]
                    hover:text-white hover:bg-white/5
                    transition
                  "
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </header>
  );
}
