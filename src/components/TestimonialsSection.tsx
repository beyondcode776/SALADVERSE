import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Priya Agarwal",
    location: "Dampier Nagar, Mathura",
    avatar: "👩‍💼",
    content: "मथुरा में finally healthy lunch का option मिला! Paneer tikka salad तो बहुत tasty है। Daily 11 बजे तक delivery आ जाती है।",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    location: "Krishna Nagar, Mathura",
    avatar: "👨‍💻",
    content: "Office में lunch के लिए perfect है। Fresh ingredients और authentic taste। Wife भी order करने लगी है!",
    rating: 5,
  },
  {
    name: "Ananya Goswami",
    location: "Vrindavan",
    avatar: "🧘‍♀️",
    content: "Satvik options available हैं जो Vrindavan के लिए perfect है। No onion-garlic वाले salads बहुत अच्छे हैं।",
    rating: 5,
  },
  {
    name: "Dr. Vikram Singh",
    location: "Civil Lines, Mathura",
    avatar: "👨‍⚕️",
    content: "As a doctor, I recommend SaladVerse to my patients. Local ingredients, hygienic preparation, और nutritious meals।",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative section-padding scroll-section overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 inline-block">❤️</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4">
            मथुरा की <span className="text-gradient-saffron">पसंद</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real reviews from our Mathura & Vrindavan customers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="bg-card/40 border-2 border-border p-6 md:p-8 h-full relative overflow-hidden group cursor-pointer hover:border-lettuce/50 transition-colors"
                whileHover={{ 
                  y: -5,
                  rotateY: 2,
                  rotateX: 2,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-lettuce/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-saffron text-saffron" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-cream/90 text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <span className="text-4xl">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-heading font-semibold text-cream">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
