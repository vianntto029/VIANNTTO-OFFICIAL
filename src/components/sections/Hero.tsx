import { StellarBackground } from "@/components/stellar/StellarBackground";
import { CapsuleShape, Orb } from "@/components/stellar/CapsuleShape";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-gradient">
      <StellarBackground />

      {/* Additional decorative elements specific to hero */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[60%] bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
      <div className="absolute right-8 top-[15%] flex flex-col items-center gap-4">
        <CapsuleShape variant="vertical" color="outline" size="xl" className="opacity-20" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-title */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-up">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-ritual text-xs text-white/80 tracking-[0.4em]">
              Ecosistema de Transformación
            </span>
            <div className="w-12 h-px bg-white/30" />
          </div>

          {/* Main title */}
          <h1 className="font-body flex flex-col items-center mb-6 opacity-0 animate-fade-up animation-delay-200">
            <span className="text-5xl md:text-7xl lg:text-8xl font-light text-white/90 tracking-tight leading-none mb-1">
              Bienvenidx al
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-normal leading-none">
              Mapa Estelar
            </span>
          </h1>
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up animation-delay-400">
            Donde construimos nuestro verdadero poderío.
            <span className="block mt-2 text-white font-light">
              Un ecosistema para la enseñanza sostenible, profunda y sensible.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-600 relative z-20">
            <a href="#estaciones" className="btn-capsule">
              Ver Estaciones
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

        {/* Scroll indicator */}
      </div>
    </section>
  );
};
