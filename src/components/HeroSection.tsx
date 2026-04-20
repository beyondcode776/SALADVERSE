import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, MapPin } from "lucide-react";
import heroSalad from "@/assets/hero-salad.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi%20SaladVerse%20Mathura%20%F0%9F%91%8B%20I%20want%20to%20start%20the%20weekly%20salad%20subscription.",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-24"
    >
      {/* Background Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-spinach-deep/90 via-spinach/80 to-spinach-deep/95 z-10" />
        <motion.img
          src={heroSalad}
          alt="Fresh Indian Salad Bowl - SaladVerse Mathura"
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Location Badge */}
          <motion.div
            className="inline-flex items-center gap-2 whitespace-nowrap bg-saffron/20 text-saffron px-4 py-2 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="font-medium text-sm leading-none">
              Delivering in Mathura & Vrindavan
            </span>
          </motion.div>

          {/* Salad Icon BELOW location - NOW PROPERLY PLACED */}
          <motion.div
            className="mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="inline-block text-6xl">🥗</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-cream">Welcome to </span>
            <span className="text-gradient-leaf">SaladVerse</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-cream/80 mb-4 font-heading font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            मथुरा का पहला Premium Salad Subscription
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Daily fresh salads with local Mathura ingredients. Paneer from local dairies, fresh produce from Agra farms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToMenu}
              className="rounded-none"
            >
              Explore Menu
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={openWhatsApp}
              className="rounded-none"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Order
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span>✅ Free Delivery in Mathura</span>
            <span>✅ 100% Vegetarian</span>
            <span>✅ Fresh Daily</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;