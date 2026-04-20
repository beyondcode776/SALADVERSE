import { motion } from "framer-motion";
import Lottie from "lottie-react";

import whatsappLottie from "@/assets/animation/Ordercompleted.json";
import chefLottie from "@/assets/animation/Chef.json";
import deliveryLottie from "@/assets/animation/Deliveryguy.json";
import healthyLottie from "@/assets/animation/AvocadoFruitExerciseAnimation.json";

const steps = [
  {
    number: "01",
    lottie: whatsappLottie,
    title: "WhatsApp पर Order करें",
    description: "Simply message us on WhatsApp to start your subscription",
  },
  {
    number: "02",
    lottie: chefLottie,
    title: "रोज़ Fresh बनाते हैं",
    description: "Our Mathura kitchen prepares your salad every morning",
  },
  {
    number: "03",
    lottie: deliveryLottie,
    title: "11 AM तक Delivery",
    description: "Free doorstep delivery across Mathura & Vrindavan",
  },
  {
    number: "04",
    lottie: healthyLottie,
    title: "स्वस्थ रहें, खुश रहें",
    description: "Feel lighter, healthier & more energetic every day",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative section-padding scroll-section overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 inline-block">⚙️</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4">
            कैसे <span className="text-gradient-leaf">काम करता है</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Mathura में fresh salad पाना अब बहुत आसान है
          </p>
        </motion.div>

        {/* Steps - Curved Path */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <svg
              className="w-full h-32"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,50 Q250,0 500,50 T1000,50"
                fill="none"
                stroke="hsl(var(--lettuce))"
                strokeWidth="2"
                strokeDasharray="8,8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Sharp-edged Card */}
                <motion.div
                  className="glass-card border-2 md:border-[3px] border-lettuce/30 p-6 md:p-8 text-center h-full 
                            shadow-xl md:shadow-2xl bg-gradient-to-br from-cream/20 via-transparent to-lettuce/5 
                            backdrop-blur-md hover:shadow-lettuce/20 transition-all duration-300"
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ borderRadius: 0 }}
                >
                  {/* Step Number */}
                  <span className="text-lg md:text-xl font-heading font-bold text-lettuce mb-4 md:mb-6 block 
                                  bg-gradient-to-r from-lettuce/20 to-transparent px-4 py-1 border 
                                  border-lettuce/30 inline-block">
                    {step.number}
                  </span>

                  {/* Lottie Animation */}
                  <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 md:mb-8 relative">
                    <div className="absolute inset-0 bg-cream/10 border border-lettuce/20 rounded-sm" />
                    <Lottie
                      animationData={step.lottie}
                      loop={true}
                      autoplay={true}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-cream text-xl md:text-2xl mb-4 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed 
                               font-medium tracking-wide">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow Connector - Mobile */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="md:hidden flex justify-center my-6 pt-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    <div className="w-20 h-20 border-2 border-lettuce/30 rounded-full flex items-center justify-center 
                                   bg-gradient-to-b from-lettuce/10 to-transparent shadow-lg">
                      <span className="text-2xl font-bold text-lettuce drop-shadow-md">↓</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
