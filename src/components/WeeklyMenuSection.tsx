import { motion } from "framer-motion";
import { useState } from "react";
import { Flame, Sparkles } from "lucide-react";

// Import salad images
import saladMonday from "@/assets/salad-monday.jpg";
import saladTuesday from "@/assets/salad-tuesday.jpg";
import saladWednesday from "@/assets/salad-wednesday.jpg";
import saladThursday from "@/assets/salad-thursday.jpg";
import saladFriday from "@/assets/salad-friday.jpg";
import saladSaturday from "@/assets/salad-saturday.jpg";
import saladSunday from "@/assets/salad-sunday.jpg";

const weeklyMenu = [
  {
    day: "Monday",
    name: "Falafel Power Bowl",
    description: "Crispy falafel with Middle-Eastern flavors and fresh veggies",
    ingredients: ["Falafel", "Lettuce", "Cucumber", "Tomato", "Hummus Dressing"],
    calories: 390,
    protein: "16g",
    spiceLevel: 2,
    flavor: "Crispy & Savory",
    badge: "Customer Favorite",
    image: saladMonday,
  },
  {
    day: "Tuesday",
    name: "Tribal Grain Salad",
    description: "Ancient tribal grains blended with earthy vegetables",
    ingredients: ["Millets", "Roasted Veggies", "Onion", "Lemon Dressing", "Seeds"],
    calories: 330,
    protein: "14g",
    spiceLevel: 1,
    flavor: "Earthy & Wholesome",
    badge: "Ancient Grains",
    image: saladTuesday,
  },
  {
    day: "Wednesday",
    name: "Cottage Cheese Delight",
    description: "Protein-rich cottage cheese with light Indian spices",
    ingredients: ["Cottage Cheese", "Capsicum", "Onion", "Mint Yogurt Dip"],
    calories: 360,
    protein: "22g",
    spiceLevel: 2,
    flavor: "Soft & Creamy",
    badge: "High Protein",
    image: saladWednesday,
  },
  {
    day: "Thursday",
    name: "Pineapple Foxtail Fusion",
    description: "Sweet pineapple paired with nutritious foxtail millet",
    ingredients: ["Foxtail Millet", "Pineapple", "Bell Peppers", "Honey Lime Dressing"],
    calories: 320,
    protein: "12g",
    spiceLevel: 0,
    flavor: "Sweet & Refreshing",
    badge: "Gut Friendly",
    image: saladThursday,
  },
  {
    day: "Friday",
    name: "Classic Caesar Green Bowl",
    description: "A healthy twist on the classic Caesar salad",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    calories: 340,
    protein: "15g",
    spiceLevel: 1,
    flavor: "Rich & Tangy",
    badge: "Classic",
    image: saladFriday,
  },
  {
    day: "Saturday",
    name: "Orange Zest Detox Salad",
    description: "Vitamin-C rich orange salad for weekend detox",
    ingredients: ["Orange Segments", "Mixed Greens", "Walnuts", "Citrus Dressing"],
    calories: 280,
    protein: "9g",
    spiceLevel: 0,
    flavor: "Citrusy & Fresh",
    badge: "Detox Special",
    image: saladSaturday,
  },{ day: "Sunday", name: "Royal Thali Salad", description: "A grand mix of all the week's best ingredients", ingredients: ["Paneer", "Chickpeas", "Sprouts", "Veggies", "Special Dressing"], calories: 450, protein: "26g", spiceLevel: 2, flavor: "Complete & Balanced", badge: "Chef's Special", image: saladSunday, },
  
];

const menuTabs = [
  { id: "daily", label: "Daily Menu", description: "Choose any salad daily" },
  { id: "weekly", label: "Weekly Menu", description: "7 unique salads, one for each day" },
  { id: "monthly", label: "Monthly Menu", description: "30 days of variety" },
];

const SpiceIndicator = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3].map((i) => (
      <Flame
        key={i}
        className={`h-4 w-4 ${
          i <= level ? "text-saffron fill-saffron" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const WeeklyMenuSection = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [activeTab, setActiveTab] = useState("weekly");

  return (
    <section id="menu" className="relative section-padding scroll-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 inline-block">📅</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-4">
            Our <span className="text-gradient-saffron">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            7 unique Indian-inspired salads, crafted fresh in Mathura daily
          </p>
        </motion.div>

        {/* Menu Type Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {menuTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-heading font-medium text-sm transition-all border-2 ${
                activeTab === tab.id
                  ? "bg-lettuce text-spinach-deep border-lettuce shadow-glow"
                  : "bg-transparent text-cream/70 border-border hover:border-lettuce/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Description */}
        <motion.p
          key={activeTab}
          className="text-center text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {menuTabs.find(t => t.id === activeTab)?.description}
        </motion.p>

        {/* Day Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {weeklyMenu.map((item, index) => (
            <motion.button
              key={item.day}
              onClick={() => setSelectedDay(index)}
              className={`px-4 py-2 font-heading font-medium text-sm transition-all border-2 ${
                selectedDay === index
                  ? "bg-lettuce text-spinach-deep border-lettuce shadow-glow"
                  : "bg-transparent text-cream/70 border-border hover:border-lettuce/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.day.slice(0, 3)}
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Menu Card */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/60 border-2 border-border p-6 md:p-10 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 bg-saffron/20 text-saffron px-3 py-1 text-xs font-medium">
                <Sparkles className="h-3 w-3" />
                {weeklyMenu[selectedDay].badge}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Image */}
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative w-full max-w-sm aspect-square overflow-hidden">
                  <div className="absolute inset-0 bg-lettuce/10 blur-3xl" />
                  <img
                    src={weeklyMenu[selectedDay].image}
                    alt={weeklyMenu[selectedDay].name}
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </motion.div>

              {/* Right - Details */}
              <div className="text-left">
                <span className="text-lettuce font-heading text-sm font-medium mb-2 block">
                  {weeklyMenu[selectedDay].day}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-3">
                  {weeklyMenu[selectedDay].name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {weeklyMenu[selectedDay].description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border p-3 text-center">
                    <span className="text-2xl font-heading font-bold text-lettuce">
                      {weeklyMenu[selectedDay].calories}
                    </span>
                    <span className="block text-xs text-muted-foreground">Calories</span>
                  </div>
                  <div className="bg-card/50 border border-border p-3 text-center">
                    <span className="text-2xl font-heading font-bold text-saffron">
                      {weeklyMenu[selectedDay].protein}
                    </span>
                    <span className="block text-xs text-muted-foreground">Protein</span>
                  </div>
                </div>

                {/* Spice & Flavor */}
                <div className="flex items-center gap-6 mb-6">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Spice Level</span>
                    <SpiceIndicator level={weeklyMenu[selectedDay].spiceLevel} />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Flavor Profile</span>
                    <span className="text-cream font-medium text-sm">
                      {weeklyMenu[selectedDay].flavor}
                    </span>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <span className="text-xs text-muted-foreground block mb-2">Ingredients</span>
                  <div className="flex flex-wrap gap-2">
                    {weeklyMenu[selectedDay].ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="bg-muted/30 text-cream/80 px-3 py-1 text-xs border border-border"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Days Preview - with images */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {weeklyMenu.map((item, index) => (
            <motion.button
              key={item.day}
              onClick={() => setSelectedDay(index)}
              className={`bg-card/40 border-2 p-3 text-center transition-all ${
                selectedDay === index ? "border-lettuce" : "border-border hover:border-lettuce/50"
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="w-full aspect-square mb-2 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-muted-foreground block">{item.day}</span>
              <span className="text-xs text-cream font-medium block truncate">
                {item.name.split(" ").slice(0, 2).join(" ")}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyMenuSection;
