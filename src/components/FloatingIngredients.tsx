import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ingredients = [
  { emoji: "🍅", size: "text-4xl md:text-6xl", x: "10%", y: "15%", speed: 0.3 },
  { emoji: "🥒", size: "text-3xl md:text-5xl", x: "88%", y: "25%", speed: 0.5 },
  { emoji: "🧀", size: "text-4xl md:text-5xl", x: "8%", y: "60%", speed: 0.4 },
  { emoji: "🫒", size: "text-2xl md:text-4xl", x: "85%", y: "70%", speed: 0.6 },
  { emoji: "🥬", size: "text-5xl md:text-7xl", x: "5%", y: "40%", speed: 0.2 },
  { emoji: "🌿", size: "text-3xl md:text-4xl", x: "25%", y: "20%", speed: 0.45 },
  { emoji: "🥕", size: "text-3xl md:text-5xl", x: "20%", y: "75%", speed: 0.35 },
  { emoji: "🌶️", size: "text-2xl md:text-3xl", x: "92%", y: "35%", speed: 0.55 },
  { emoji: "🥗", size: "text-4xl md:text-6xl", x: "75%", y: "85%", speed: 0.25 },
  { emoji: "🍃", size: "text-3xl md:text-4xl", x: "70%", y: "10%", speed: 0.5 },
  { emoji: "🫛", size: "text-3xl md:text-4xl", x: "15%", y: "90%", speed: 0.4 },
  { emoji: "🥜", size: "text-2xl md:text-3xl", x: "60%", y: "55%", speed: 0.6 },
];

const FloatingIngredients = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {ingredients.map((item, index) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, -300 * item.speed]
        );
        const x = useTransform(
          scrollYProgress,
          [0, 1],
          [0, (index % 2 === 0 ? 50 : -50) * item.speed]
        );
        const rotate = useTransform(
          scrollYProgress,
          [0, 1],
          [0, 360 * item.speed]
        );

        return (
          <motion.div
            key={index}
            className={`absolute ${item.size} opacity-50`}
            style={{
              left: item.x,
              top: item.y,
              y,
              x,
              rotate,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.span
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {item.emoji}
            </motion.span>
          </motion.div>
        );
      })}
      
      {/* Organic background blobs with parallax */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-lettuce/10 rounded-full blur-3xl"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-saffron/5 rounded-full blur-3xl"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -150]),
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lettuce/5 rounded-full blur-[100px]"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]),
        }}
      />
    </div>
  );
};

export default FloatingIngredients;
