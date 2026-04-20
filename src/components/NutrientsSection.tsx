import { motion } from "framer-motion";
import { useState } from "react";

const nutrients = [
  { 
    name: "Protein", 
    emoji: "💪", 
    percentage: 85, 
    color: "from-saffron to-saffron-glow",
    description: "Paneer, chickpeas & sprouts"
  },
  { 
    name: "Fiber", 
    emoji: "🌾", 
    percentage: 92, 
    color: "from-lettuce to-lettuce-glow",
    description: "Greens, vegetables & legumes"
  },
  { 
    name: "Vitamins", 
    emoji: "✨", 
    percentage: 88, 
    color: "from-mint to-cucumber",
    description: "Fresh herbs & seasonal produce"
  },
  { 
    name: "Superfoods", 
    emoji: "🌟", 
    percentage: 78, 
    color: "from-saffron/80 to-lettuce",
    description: "Seeds, nuts & ancient grains"
  },
];

const NutrientsSection = () => {
  const [activeNutrient, setActiveNutrient] = useState<number | null>(null);

  return (
    <section className="relative section-padding scroll-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 inline-block">🥗</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4">
            What's <span className="text-gradient-saffron">Inside</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every bowl is packed with nature's best nutrients
          </p>
        </motion.div>

        {/* Nutrient Cards - Sharp Edge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {nutrients.map((nutrient, index) => (
            <motion.div
              key={nutrient.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setActiveNutrient(index)}
              onHoverEnd={() => setActiveNutrient(null)}
            >
              {/* Card Container */}
              <motion.div
                className="relative w-full bg-card/40 border-2 border-border p-6 cursor-pointer hover:border-lettuce/50 transition-colors"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Progress Bar Container */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{nutrient.emoji}</span>
                    <span className="text-2xl font-heading font-bold text-cream">
                      {nutrient.percentage}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-muted/30 w-full">
                    <motion.div
                      className="h-full bg-gradient-to-r from-lettuce to-saffron"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${nutrient.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 + index * 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Label */}
                <h3 className="font-heading font-semibold text-cream text-lg mb-1">
                  {nutrient.name}
                </h3>
                <motion.p
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: activeNutrient === index ? 1 : 0.6 }}
                >
                  {nutrient.description}
                </motion.p>

                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-lettuce/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeNutrient === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Motivational Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/40 border-2 border-border p-8 max-w-2xl mx-auto">
            <span className="text-6xl mb-4 block">🥗</span>
            <p className="text-cream text-xl font-heading mb-2">
              "Your body is a temple, but only if you treat it as one."
            </p>
            <span className="text-muted-foreground text-sm">
              — Astrid Alauda
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NutrientsSection;
