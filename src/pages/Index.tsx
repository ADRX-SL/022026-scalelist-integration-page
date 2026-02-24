import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col gap-16 bg-background">
      <Hero />
      <Integrations />
      <FooterCTA />
      <Footer />
    </main>
  );
};

export default Index;
