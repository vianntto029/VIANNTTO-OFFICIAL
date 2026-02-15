import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Dojo } from "@/components/sections/Dojo";
import { PrimeraEstrella } from "@/components/sections/PrimeraEstrella";
import { Estaciones } from "@/components/sections/Estaciones";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Dojo />
        <PrimeraEstrella />
        <Estaciones />
        <Testimonials />
        <div className="relative bg-contact-wine">
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
