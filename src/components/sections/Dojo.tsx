import { CapsuleShape, Orb, StellarLine } from "@/components/stellar/CapsuleShape";

export const Dojo = () => {
  return (
    <section id="dojo" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-stellar pointer-events-none" />
      <CapsuleShape
        variant="vertical"
        color="sand"
        size="xl"
        className="absolute -left-10 top-1/4 opacity-20"
      />
      <Orb color="slate" size="lg" className="absolute right-[10%] top-20 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <StellarLine direction="horizontal" className="w-16" />
              <span className="text-ritual text-xs text-accent tracking-[0.3em]">
                El Punto de Partida
              </span>
            </div>

            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              <span className="text-muted-foreground">¿Por qué estás</span> <span className="text-primary font-medium">aquí?</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              A lo largo de los años, nos hemos dado cuenta de que las definiciones sobre
              "transformación" y "crecimiento" intentan, sin éxito, expresar la importancia
              de los cambios más profundos detrás de cada proyecto.
            </p>

            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
              Por tal razón, preferimos ofrecerte un auténtico <strong className="text-accent">'mapa estelar'</strong> para
              aventurarte según tus objetivos e intereses.
            </p>

            <div className="flex items-center gap-4">
              <a href="#primera-estrella" className="btn-wine">
                Comenzar Aventura
              </a>
            </div>
          </div>

          {/* Visual element - Capsule composition */}
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main capsule frame */}
              <div className="relative w-48 h-80 rounded-full border-2 border-primary/20 flex items-center justify-center">
                <div className="w-40 h-72 rounded-full border border-secondary/30 flex items-center justify-center bg-card/30 backdrop-blur-sm">
                  <div className="w-32 h-64 rounded-full bg-gradient-to-b from-primary/10 to-secondary/20 flex items-center justify-center">
                    <span className="text-ritual text-xs tracking-[0.2em] text-primary -rotate-90 whitespace-nowrap">
                      DOJO VIANNTTO
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <CapsuleShape
                variant="horizontal"
                color="sand"
                size="md"
                className="absolute -top-4 -right-8 opacity-60"
              />
              <CapsuleShape
                variant="horizontal"
                color="outline"
                size="sm"
                className="absolute bottom-8 -left-12 opacity-40"
              />
              <Orb color="wine" size="lg" className="absolute top-8 left-4" animate />
              <Orb color="sand" size="md" className="absolute bottom-12 right-8 opacity-60" />

              {/* Connecting lines */}
              <div className="absolute top-1/4 -right-20 w-20 h-px bg-gradient-to-r from-primary/20 to-transparent" />
              <div className="absolute bottom-1/3 -left-16 w-16 h-px bg-gradient-to-l from-secondary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
