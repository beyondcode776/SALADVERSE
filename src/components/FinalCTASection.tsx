import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";

const FinalCTASection = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi%20SaladVerse%20Mathura%20%F0%9F%91%8B%20I%20want%20to%20start%20the%20weekly%20plan.%20My%20address%20in%20Mathura%20is%3A",
      "_blank"
    );
  };

  return (
    <section className="relative section-padding scroll-section overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lettuce/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-saffron/5 rounded-full blur-[80px]" />
      </motion.div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating Emojis */}
          <div className="flex justify-center gap-4 mb-8">
            {["🥬", "🥗", "🌿"].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-5xl md:text-6xl"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
            <span className="text-gradient-leaf">SaladVerse</span> से जुड़ें
            <br />
            <span className="text-cream/80">स्वस्थ जीवन की शुरुआत करें</span>
          </h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            मथुरा और वृन्दावन में Free Home Delivery
          </motion.p>

          {/* Delivery Areas */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {["Dampier Nagar", "Krishna Nagar", "Civil Lines", "Vrindavan", "Goverdhan"].map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1 bg-muted/30 text-cream/70 px-3 py-1 text-sm"
              >
                <MapPin className="h-3 w-3" />
                {area}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="hero" size="xl" onClick={openWhatsApp}>
              Subscribe ₹1500/Week
            </Button>
            <Button variant="whatsapp" size="lg" onClick={openWhatsApp}>
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp करें
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            ✅ Cancel anytime • ✅ 100% Vegetarian • ✅ Local Mathura ingredients
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
