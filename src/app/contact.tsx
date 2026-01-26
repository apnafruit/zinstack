import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';
import FinalCTA from './components/FinalCTA';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:contact@zivstack.in?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <main className="pt-14 sm:pt-16 lg:pt-20">
    <section className="relative text-white overflow-x-hidden bg-[#050B1A]">
      {/* Optional ultra-premium radial gradient softness */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.02),_transparent_70%)]"
      />

      {/* Background gradient flow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_#050B1A_0%,_#050B1A_65%,_#030711_85%,_#000000_100%)]"
      />

      {/* Slow subtle gradient overlay to black */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(0,0,0,0.08)_40%,_#000000_100%)]"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Banner */}
        <div 
          className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cban.jpg')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 text-center py-12 sm:py-0">
            <div className="inline-flex items-center justify-center px-5 sm:px-8 py-4 sm:py-5 md:py-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <span className="text-[clamp(24px,5vw,56px)] font-extrabold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-white/90">
                Let's&nbsp;Connect
              </span>
            </div>
          </div>
        </div>

        <div className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-16 md:mb-24">
            {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Email */}
            <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-2xl p-4 sm:p-6 hover:border-white/20 transition min-h-fit">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-sm sm:text-lg">Email</h3>
              </div>
              <a
                href="mailto:contact@zivstack.in"
                className="text-white/70 hover:text-white transition text-xs sm:text-sm md:text-base inline-flex items-center gap-1 break-all"
              >
                contact@zivstack.in
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-2xl p-4 sm:p-6 hover:border-white/20 transition min-h-fit">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-sm sm:text-lg">Phone</h3>
              </div>
              <a
                href="https://wa.me/917382674757"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition text-xs sm:text-sm md:text-base inline-block"
              >
                +91 73826 74757
              </a>
              <p className="text-xs text-white/50 mt-1.5 sm:mt-2">WhatsApp available</p>
            </div>

            {/* Hours */}
            <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-2xl p-4 sm:p-6 hover:border-white/20 transition min-h-fit">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-sm sm:text-lg">Hours</h3>
              </div>
              <p className="text-white/70 text-xs sm:text-sm md:text-base">Monday – Friday</p>
              <p className="text-white/70 text-xs sm:text-sm md:text-base">9:00 AM – 6:00 PM IST</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white/8 via-white/4 to-transparent border border-white/10 rounded-lg sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-white/90">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-500/50 focus:outline-none transition text-xs sm:text-sm md:text-base min-h-10"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-white/90">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-500/50 focus:outline-none transition text-xs sm:text-sm md:text-base min-h-10"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-white/90">Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-500/50 focus:outline-none transition text-xs sm:text-sm md:text-base min-h-10"
                    placeholder="Your Company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-white/90">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-500/50 focus:outline-none transition resize-none text-xs sm:text-sm md:text-base min-h-24 sm:min-h-28"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition duration-300 min-h-10 text-xs sm:text-sm md:text-base"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 flex-shrink-0" />
                </button>
              </form>
            </div>
          </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-lg sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center mt-10 sm:mt-16 md:mt-24"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 px-2">What to Expect</h3>
              <p className="text-white/70 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
                We'll get back to you within 24 hours with initial thoughts on your project. Whether you need a quick consultation or a full partnership, we're ready to discuss what's possible.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <FinalCTA />
    </main>
  );
}
