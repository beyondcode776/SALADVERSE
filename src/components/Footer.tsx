import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi%20SaladVerse%20Mathura!",
      "_blank"
    );
  };

  return (
    <footer className="relative py-16 px-6 md:px-12 lg:px-24 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-spinach-deep/50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🥗</span>
              <span className="font-heading font-bold text-2xl text-gradient-leaf">
                SaladVerse
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              मथुरा का पहला Premium Salad Subscription Service। Fresh, healthy, और 100% vegetarian।
            </p>
            <p className="text-cream font-heading">
              Eat Clean. Think Green. Live Indian.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-cream mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-2 text-muted-foreground hover:text-lettuce transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 98765 43210 (WhatsApp)
              </button>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  SaladVerse Kitchen<br />
                  Dampier Nagar, Mathura<br />
                  Uttar Pradesh 281001
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                Delivery: 9 AM - 12 PM daily
              </div>
            </div>
          </motion.div>

          {/* Delivery Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-cream mb-4">Delivery Areas</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Dampier Nagar",
                "Krishna Nagar", 
                "Civil Lines",
                "Vrindavan",
                "Goverdhan",
                "Bhuteshwar",
                "Refinery Nagar",
                "Highway Road",
              ].map((area) => (
                <span
                  key={area}
                  className="bg-muted/20 text-muted-foreground px-3 py-1 text-xs"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>© 2024 SaladVerse Mathura. All rights reserved.</span>
          <span>Made with 💚 in Mathura, Uttar Pradesh</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
