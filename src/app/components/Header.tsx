import { motion, AnimatePresence } from "motion/react";
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

  // Lock background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 xs:px-3 sm:px-4">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative flex items-center justify-between px-3 sm:px-4 md:px-6 h-12 sm:h-14 md:h-16 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 transition-all duration-300"
          >
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-1.5 sm:gap-2 text-[#EDEFF2] hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-base font-medium"
            >
              <img src="/zslogo.svg" alt="ZS Logo" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain" />
              <span className="xs:block">ZIVSTACK</span>
            </a>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="mailto:contact@zivstack.in"
                className="hidden sm:flex items-center gap-2 px-3 h-10
                  rounded-full border border-white/20 bg-white/5
                  text-white text-sm hover:bg-white/10 transition"
              >
                <Mail size={16} />
                contact@zivstack.in
              </a>

              <a
                href="https://wa.me/917382674757"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 h-10
                  rounded-full border border-blue-500 text-blue-600 bg-blue-400/10
                  hover:shadow-[0_0_20px_rgba(59,130,246,0.45)] transition"
              >
                <span>Let’s talk</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition min-h-10 min-w-10"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Side Menu with Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-64 sm:w-72 md:w-80 bg-[#0B0F14] border-l border-white/10 shadow-xl z-50 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end m-3 sm:m-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition min-h-10 min-w-10"
              >
                <X size={20} />
              </button>

              {/* Nav Links */}
              <nav className="flex flex-col gap-2 sm:gap-3 px-4 sm:px-6 mt-4 sm:mt-6 flex-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#9AA4B2] hover:text-white text-sm sm:text-base transition px-3 py-2 rounded-lg hover:bg-white/5 min-h-10 flex items-center"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 p-4 sm:p-6 space-y-3">
                <a
                  href="mailto:contact@zivstack.in"
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg text-xs sm:text-sm text-white hover:bg-white/10 transition min-h-10"
                >
                  <Mail size={16} />
                  <span className="truncate">contact@zivstack.in</span>
                </a>
                <a
                  href="https://wa.me/917382674757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 rounded-lg text-xs sm:text-sm text-blue-400 hover:bg-blue-500/20 transition min-h-10"
                >
                  <ArrowUpRight size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}