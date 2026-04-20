import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi%20SaladVerse%20Mathura%20%F0%9F%91%8B%20I%20want%20to%20order%20salads.%20My%20location%20is%3A",
      "_blank"
    );
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-colors px-4 py-3 md:px-5 md:py-4"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Order on WhatsApp"
    >
      {/* Pulse Ring */}
      <motion.div
        className="absolute inset-0 bg-[#25D366]"
        animate={{
          scale: [1, 1.3, 1.3],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      
      {/* Icon */}
      <MessageCircle className="h-6 w-6 fill-white relative z-10" />
      
      {/* Text - Hidden on small screens */}
      <span className="hidden md:inline font-heading font-medium relative z-10">
        Order Now
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;
