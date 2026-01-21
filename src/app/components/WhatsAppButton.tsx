import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton({ phone = '1234567890' }: { phone?: string }) {
  const [imgError, setImgError] = useState(false);
  const normalized = phone.replace(/\D/g, '');
  const waLink = `https://wa.me/917382674757`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-black p-2 sm:p-3 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-shadow flex items-center justify-center min-w-[44px] min-h-[44px]"
      whileHover={{ scale: 1.05 }}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      {!imgError ? (
        <img
          src="/wa.svg"
          alt="WhatsApp"
          className="w-8 h-8 sm:w-12 sm:h-12"
          onError={() => setImgError(true)}
        />
      ) : (
        <MessageSquare className="w-6 h-6" />
      )}
    </motion.a>
  );
}
