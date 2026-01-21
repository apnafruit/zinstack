import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Website Development', 'UI/UX Design', 'Performance & SEO', 'Support'],
    Company: ['About', 'Work', 'Process', 'Contact'],
    Resources: ['FAQs', 'Privacy Policy']
  };

  return (
    <footer className="border-t border-[#9AA4B2]/10 bg-[#0B0F14]/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h2 
              className="text-xl text-[#EDEFF2]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              <img
    src="/zslogo.svg"
    alt="ZS Logo"
    className="w-20 h-20"
  />
              ZIVSTACK
            </h2>
            <p 
              className="text-[#9AA4B2] max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Building premium websites that drive results for ambitious brands and founders.
            </p>
            <div className="flex gap-4">
              {[Mail, Linkedin, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-lg bg-[#1A1F2C]/50 border border-[#9AA4B2]/10 flex items-center justify-center text-[#9AA4B2] hover:text-[#3B82F6] hover:border-[#3B82F6]/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h3 
                className="text-[#EDEFF2] mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => {
                  const linkHref = link === 'About'
                    ? '/about'
                    : link === 'Work'
                    ? '#work'
                    : link === 'Process'
                    ? '#process'
                    : link === 'Contact'
                    ? '#contact'
                    : '#';

                  return (
                    <li key={linkIndex}>
                      <a
                        href={linkHref}
                        className="text-[#9AA4B2] hover:text-[#EDEFF2] transition-colors text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#9AA4B2]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-sm text-[#9AA4B2]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {currentYear} ZIVSTACK. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[#9AA4B2] hover:text-[#EDEFF2] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-[#9AA4B2] hover:text-[#EDEFF2] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-[#9AA4B2] hover:text-[#EDEFF2] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
