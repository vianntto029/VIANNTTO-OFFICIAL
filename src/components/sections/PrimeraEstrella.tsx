import { CapsuleShape, Orb, StellarLine } from "@/components/stellar/CapsuleShape";
import { Star } from "lucide-react";

export const PrimeraEstrella = () => {
  return (
    <section id="primera-estrella" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Decorative background */}
      <CapsuleShape
        variant="vertical"
        color="outline"
        size="xl"
        className="absolute right-[5%] top-20 opacity-15"
      />
      <Orb color="wine" size="xl" className="absolute left-[8%] bottom-32 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <StellarLine direction="horizontal" className="w-12" />
            <span className="text-editorial text-xs text-muted-foreground tracking-[0.3em]">
              Nuestra Metodología
            </span>
            <StellarLine direction="horizontal" className="w-12" />
          </div>

          <div className="w-full flex justify-center mt-2">
            <img
              src="/primera estrella.svg"
              alt="Primera Estrella"
              className="h-24 md:h-32 lg:h-40 w-auto opacity-100 -translate-x-12"
            />
          </div>

          <p className="font-body text-lg text-muted-foreground mt-8 leading-relaxed">
            Nuestra metodología que sostiene al ecosistema VIANNTTO, compuesta por un conjunto
            de hangares, estaciones y experiencias dentro de un gran mapa estelar al servicio
            de la enseñanza sostenible, profunda y sensible.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Alto Rendimiento */}
          <div className="station-card text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-primary/30" />
            </div>
            <h4 className="text-editorial text-sm tracking-[0.2em] text-primary mb-3">
              Alto Rendimiento
            </h4>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Maximiza el potencial de tu equipo con metodologías de vanguardia.
            </p>
          </div>

          {/* Alta Vinculación */}
          <div className="station-card text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/30 flex items-center justify-center group-hover:bg-secondary/50 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-secondary/60" />
            </div>
            <h4 className="text-editorial text-sm tracking-[0.2em] text-secondary-foreground mb-3">
              Alta Vinculación
            </h4>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Construye conexiones profundas que transforman culturas organizacionales.
            </p>
          </div>

          {/* Alta Facturación */}
          <div className="station-card text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-accent/40" />
            </div>
            <h4 className="text-editorial text-sm tracking-[0.2em] text-accent mb-3">
              Alta Facturación
            </h4>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Incrementa resultados mediante estrategias sostenibles de crecimiento.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
