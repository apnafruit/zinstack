import { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton({
  phone = "917382674757",
}: {
  phone?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const normalized = phone.replace(/\D/g, "");
  const waLink = `https://wa.me/${normalized}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
        flex items-center gap-2
        h-12 sm:h-14
        px-4
        bg-[#25D366]
        text-black
        rounded-full
        shadow-lg
        hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]
        transition-all duration-300 ease-out
        min-w-[44px] min-h-[44px]
      "
    >
      {/* Icon */}
      <div className="flex items-center justify-center">
        {!imgError ? (
          <img
            src="/wa.svg"
            alt="WhatsApp"
            className="w-6 h-6 sm:w-7 sm:h-7"
            onError={() => setImgError(true)}
          />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </div>

      {/* Text – always visible */}
      <span className="whitespace-nowrap text-white text-sm font-semibold">
        WhatsApp us
      </span>
    </motion.a>
  );
}
