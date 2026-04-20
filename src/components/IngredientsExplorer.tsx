import { motion } from "framer-motion";
import { useState } from "react";

const ingredients = [
  {
    name: "Mathura Paneer",
    emoji: "🧀",
    category: "Protein",
    origin: "Local Mathura Dairies",
    benefits: ["High Protein", "Calcium Rich", "Fresh Daily"],
    nutrition: { protein: "18g", fat: "20g", carbs: "3g" },
    description: "Freshly prepared paneer from Mathura's famous local dairies, known for their pure milk.",
  },
  {
    name: "Chickpeas",
    emoji: "🫛",
    category: "Protein",
    origin: "Uttar Pradesh Farms",
    benefits: ["Fiber Rich", "Plant Protein", "Low GI"],
    nutrition: { protein: "15g", fat: "4g", carbs: "45g" },
    description: "Locally sourced chickpeas, a staple in UP cuisine, slow-cooked to perfection.",
  },
  {
    name: "Baby Spinach",
    emoji: "🥬",
    category: "Greens",
    origin: "Organic Farms, Agra",
    benefits: ["Iron Rich", "Vitamins A, C, K", "Antioxidants"],
    nutrition: { protein: "3g", fat: "0.4g", carbs: "4g" },
    description: "Tender baby spinach leaves from organic farms near Agra, picked fresh every morning.",
  },
  {
    name: "Fresh Mint",
    emoji: "🌿",
    category: "Herbs",
    origin: "Vrindavan Gardens",
    benefits: ["Digestive Aid", "Cooling Effect", "Fresh Breath"],
    nutrition: { protein: "0.5g", fat: "0.1g", carbs: "1g" },
    description: "Aromatic mint from the gardens of Vrindavan, adding a refreshing touch to every salad.",
  },
  {
    name: "Pomegranate",
    emoji: "🔴",
    category: "Fruits",
    origin: "Maharashtra Import",
    benefits: ["Antioxidants", "Heart Health", "Anti-inflammatory"],
    nutrition: { protein: "2g", fat: "1g", carbs: "19g" },
    description: "Ruby-red pomegranate seeds that add a burst of sweetness and crunch.",
  },
  {
    name: "Mixed Sprouts",
    emoji: "🌱",
    category: "Superfoods",
    origin: "In-house Grown",
    benefits: ["Enzyme Rich", "Easy Digestion", "Complete Nutrition"],
    nutrition: { protein: "8g", fat: "1g", carbs: "12g" },
    description: "Freshly sprouted moong, chana, and mixed beans, grown in our Mathura kitchen.",
  },
  {
    name: "Almonds & Seeds",
    emoji: "🥜",
    category: "Superfoods",
    origin: "Kashmir & Rajasthan",
    benefits: ["Healthy Fats", "Brain Health", "Energy Boost"],
    nutrition: { protein: "6g", fat: "14g", carbs: "6g" },
    description: "Premium almonds and pumpkin seeds for that satisfying crunch and nutrition.",
  },
  {
    name: "Desi Ghee Drizzle",
    emoji: "✨",
    category: "Dressing",
    origin: "Mathura Gaushalas",
    benefits: ["Ayurvedic", "Healthy Fats", "Traditional"],
    nutrition: { protein: "0g", fat: "12g", carbs: "0g" },
    description: "A light drizzle of pure Mathura ghee, sourced from local gaushalas.",
  },
];

const IngredientsExplorer = () => {
  const [activeIngredient, setActiveIngredient] = useState<number | null>(null);

  return (
    <section id="ingredients" className="relative section-padding scroll-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 inline-block">🌾</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4">
            Farm to <span className="text-gradient-leaf">Bowl</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Premium local ingredients sourced from Mathura & nearby regions
          </p>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onHoverStart={() => setActiveIngredient(index)}
              onHoverEnd={() => setActiveIngredient(null)}
            >
              <motion.div
                className="bg-card/40 border-2 border-border p-6 text-center cursor-pointer h-full relative overflow-hidden group hover:border-lettuce/50 transition-colors"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-lettuce/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIngredient === index ? 1 : 0 }}
                />

                {/* Default View - only emoji visible, name/category hidden on hover */}
                <motion.div
                  className="relative z-10"
                  animate={{ opacity: activeIngredient === index ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Emoji */}
                  <motion.span
                    className="text-5xl md:text-6xl inline-block mb-4"
                    animate={{
                      scale: activeIngredient === index ? 1.2 : 1,
                      rotate: activeIngredient === index ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.emoji}
                  </motion.span>

                  {/* Name */}
                  <h3 className="font-heading font-semibold text-cream text-lg mb-1">
                    {item.name}
                  </h3>

                  {/* Category */}
                  <span className="text-xs text-lettuce mb-3 block">
                    {item.category}
                  </span>

                  {/* Origin */}
                  <p className="text-xs text-muted-foreground">
                    📍 {item.origin}
                  </p>
                </motion.div>

                {/* Hover Details - full info without icon/name duplication */}
                <motion.div
                  className="absolute inset-0 bg-spinach-deep/95 backdrop-blur-sm p-4 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIngredient === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ pointerEvents: activeIngredient === index ? "auto" : "none" }}
                >
                  <h4 className="font-heading font-semibold text-cream text-lg mb-2">
                    {item.name}
                  </h4>
                  <p className="text-cream/90 text-xs mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    {item.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="bg-lettuce/20 text-lettuce px-2 py-0.5 text-[10px]"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Nutrition */}
                  <div className="flex justify-center gap-3 text-[10px]">
                    <span className="text-saffron">P: {item.nutrition.protein}</span>
                    <span className="text-muted-foreground">F: {item.nutrition.fat}</span>
                    <span className="text-muted-foreground">C: {item.nutrition.carbs}</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Local Sourcing Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            🌿 All ingredients are sourced within 100km of Mathura, supporting local farmers and ensuring maximum freshness. We believe in <span className="text-lettuce">farm-to-bowl within 24 hours</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IngredientsExplorer;
