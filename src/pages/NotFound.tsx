import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { StellarBackground } from "@/components/stellar/StellarBackground";
import { CapsuleShape, Orb } from "@/components/stellar/CapsuleShape";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative min-h-[calc(100vh-140px)] flex items-center justify-center overflow-hidden bg-ethereal">
        <StellarBackground />
        
        {/* Additional decorative elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[60%] bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
        <div className="absolute right-8 top-[15%] flex flex-col items-center gap-4">
          <CapsuleShape variant="vertical" color="outline" size="xl" className="opacity-20" />
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Pre-title */}
            <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-up">
              <div className="w-12 h-px bg-primary/30" />
              <span className="text-editorial text-xs text-muted-foreground tracking-[0.4em]">
                PÉRDIDA EN EL VACÍO
              </span>
              <div className="w-12 h-px bg-primary/30" />
            </div>
            
            {/* 404 Number */}
            <div className="mb-8 opacity-0 animate-fade-up animation-delay-200">
              <span className="block font-heading text-8xl md:text-9xl lg:text-[12rem] font-extralight text-primary/20">
                404
              </span>
            </div>
            
            {/* Main title */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light mb-6 opacity-0 animate-fade-up animation-delay-400">
              <span className="block text-foreground">Esta estrella no</span>
              <span className="block mt-2 text-primary font-medium">existe en el mapa</span>
            </h1>
            
            {/* Subtitle */}
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up animation-delay-600">
              La ruta que buscas se ha perdido en el espacio interestelar.
              <span className="block mt-2 text-foreground/80">
                Te invitamos a regresar al punto de origen y explorar nuestro ecosistema.
              </span>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-800">
              <a href="/" className="btn-wine">
                Volver al Mapa Estelar
              </a>
              <a href="#contacto" className="btn-capsule">
                Contactar Navegación
              </a>
            </div>
            
            {/* Decorative orbs */}
            <div className="absolute left-[10%] top-1/3 hidden lg:block">
              <Orb color="wine" size="lg" animate className="opacity-70" />
            </div>
            <div className="absolute right-[15%] bottom-1/3 hidden lg:block">
              <Orb color="sand" size="xl" className="opacity-50" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
