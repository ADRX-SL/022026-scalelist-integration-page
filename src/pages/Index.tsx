import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <Integrations />
      <Footer />
    </main>
  );
};

export default Index;
