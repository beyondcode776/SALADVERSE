import Navbar from "@/components/Navbar";
import FloatingIngredients from "@/components/FloatingIngredients";
import HeroSection from "@/components/HeroSection";
import WeeklyMenuSection from "@/components/WeeklyMenuSection";
import IngredientsExplorer from "@/components/IngredientsExplorer";
import SubscriptionSection from "@/components/SubscriptionSection";
import NutrientsSection from "@/components/NutrientsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen scroll-container leaf-texture overflow-x-hidden bg-spinach-deep">
      {/* Navbar */}
      <Navbar />

      {/* Floating Ingredients Background with Parallax */}
      <FloatingIngredients />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <WeeklyMenuSection />
        <IngredientsExplorer />
        <SubscriptionSection />
        <NutrientsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
