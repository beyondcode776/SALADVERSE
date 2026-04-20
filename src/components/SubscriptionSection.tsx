import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Daily Plan",
    price: "₹250",
    period: "per day",
    features: [
      "1 fresh salad daily",
      "Authentic Indian flavors",
      "Customize your spice level",
      "Morning delivery before 11 AM",
      "Cancel anytime, no commitment",
    ],
    badge: "",
    icon: Zap,
    popular: false,
  },
  {
    name: "Weekly Plan",
    price: "₹1500",
    period: "per week",
    features: [
      "7 fresh salads weekly",
      "Authentic Indian flavors",
      "Customize your spice level",
      "Morning delivery before 11 AM",
      "Cancel anytime, no commitment",
    ],
    badge: "Most Loved Plan",
    icon: Sparkles,
    popular: true,
  },
  {
    name: "Monthly Plan",
    price: "₹5500",
    period: "per month",
    features: [
      "30 fresh salads monthly",
      "Authentic Indian flavors",
      "Customize your spice level",
      "Morning delivery before 11 AM",
      "Cancel anytime, no commitment",
    ],
    badge: "Best Value",
    icon: Crown,
    popular: false,
  },
];

const SubscriptionSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const openWhatsApp = (planName: string) => {
    window.open(
      `https://wa.me/919876543210?text=Hi%20SaladVerse%20%F0%9F%91%8B%20I%20want%20to%20start%20the%20${encodeURIComponent(planName)}.`,
      "_blank"
    );
  };

  return (
    <section id="subscription" className="relative section-padding scroll-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl mb-4 inline-block">🌱</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4">
            Join the <span className="text-gradient-leaf">SaladVerse</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose the plan that fits your lifestyle
          </p>
        </motion.div>

        {/* Subscription Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Glow Effect for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-lettuce/20 via-lettuce-glow/30 to-lettuce/20 blur-3xl" />
              )}

              {/* Card */}
              <motion.div
                className={`relative h-full p-6 md:p-8 text-center cursor-pointer transition-all border-2 ${
                  selectedPlan === index
                    ? "border-lettuce bg-card/80 shadow-glow"
                    : "border-border bg-card/40 hover:border-lettuce/50"
                } ${plan.popular ? "scale-105 md:scale-110" : ""}`}
                onClick={() => setSelectedPlan(index)}
                whileHover={{ y: -5 }}
              >
                {/* Badge */}
                {plan.badge && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-saffron-glow text-spinach-deep px-4 py-1.5 font-heading font-semibold text-xs shadow-saffron whitespace-nowrap">

                      {plan.badge}
                    </span>
                  </motion.div>
                )}

                {/* Plan Name */}
                <div className="mt-4 mb-4">
                  <plan.icon className={`h-8 w-8 mx-auto mb-3 ${plan.popular ? "text-lettuce" : "text-muted-foreground"}`} />
                  <h3 className="font-heading font-bold text-xl text-cream">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl md:text-5xl font-heading font-bold ${plan.popular ? "text-gradient-leaf" : "text-cream"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 text-left"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-lettuce/20 flex items-center justify-center">
                        <Check className="h-3 w-3 text-lettuce" />
                      </div>
                      <span className="text-cream/80 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    size="lg" 
                    onClick={() => openWhatsApp(plan.name)} 
                    className="w-full"
                  >
                    {plan.popular ? "Start My Journey 🥗" : "Choose Plan"}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
