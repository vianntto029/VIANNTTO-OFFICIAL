import { CapsuleShape, Orb } from "@/components/stellar/CapsuleShape";
import { Users, Briefcase, Compass, ArrowRight } from "lucide-react";

type StationColor = "primary" | "secondary" | "accent";

type Station = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Users;
  color: StationColor;
  features: string[];
};

const stations: Station[] = [
  {
    id: "comunidades",
    title: "Comunidades",
    subtitle: "\u00bfTe gustar\u00eda aportar valor y crecimiento a tu comunidad?",
    description:
      "Es el primer punto de contacto. Aqu\u00ed se ofrecen experiencias para todo p\u00fablico: Masterclass, Conversatorios, Comunidades de Aprendizaje y Productos digitales de vanguardia.",
    icon: Users,
    color: "primary",
    features: ["Masterclass", "Conversatorios", "Comunidades de Aprendizaje", "Productos Digitales"],
  },
  {
    id: "tripulaciones",
    title: "Tripulaciones",
    subtitle: "\u00bfEres l\u00edder de una empresa? \u00bfEst\u00e1s al frente de un equipo?",
    description:
      "Este es tu lugar. Aqu\u00ed se realizan experiencias para organizaciones que abrazan la innovaci\u00f3n, la sostenibilidad y el bienestar mediante nuestros programas AVENTURA \u00c1GIL y PANGEA.",
    icon: Briefcase,
    color: "secondary",
    features: ["Aventura Agil", "Pangea", "Transformacion Gerencial", "Entrenamiento Organizacional"],
  },
  {
    id: "exploradorxs",
    title: "Exploradorxs",
    subtitle: "\u00bfBuscas nuevas herramientas para aumentar tu valor?",
    description:
      "El lugar id\u00f3neo para aprender nuevas destrezas y tener acceso a herramientas de vanguardia. Aqu\u00ed encontrar\u00e1s Workshops, Cursos, Talleres y Mentor\u00edas adaptadas a tus necesidades.",
    icon: Compass,
    color: "accent",
    features: ["Workshops", "Cursos", "Talleres", "Mentor\u00edas Personalizadas"],
  },
];

const stationTheme = {
  primary: {
    card:
      "bg-[linear-gradient(135deg,hsl(var(--primary)/0.68)_0%,hsl(var(--vianntto-steel)/0.48)_58%,hsl(var(--primary)/0.72)_100%)] group-hover:shadow-[0_20px_50px_-28px_hsl(var(--primary)/0.6)]",
    iconShell: "border-white/20 bg-white/14 group-hover:bg-white/20",
    icon: "text-white",
    label: "text-white",
    title: "text-white",
    question: "text-white",
    description: "text-white",
    featureDot: "bg-white",
    featureText: "text-white",
    cta: "text-white hover:text-white/90",
    ctaShell: "border-white/22 bg-white/10",
  },
  secondary: {
    card:
      "bg-[linear-gradient(135deg,#e4d6ce_0%,#cbb4a8_46%,#a98f82_100%)] group-hover:shadow-[0_20px_50px_-28px_rgba(203,180,168,0.65)]",
    iconShell: "border-white/24 bg-white/14 group-hover:bg-white/22",
    icon: "text-white",
    label: "text-white",
    title: "text-white",
    question: "text-white",
    description: "text-white",
    featureDot: "bg-white",
    featureText: "text-white",
    cta: "text-white hover:text-white/90",
    ctaShell: "border-white/24 bg-white/14",
  },
  accent: {
    card:
      "bg-[linear-gradient(135deg,hsl(var(--accent)/0.56)_0%,hsl(348_40%_48%/0.64)_62%,hsl(var(--accent)/0.62)_100%)] group-hover:shadow-[0_20px_50px_-28px_hsl(var(--accent)/0.6)]",
    iconShell: "border-white/20 bg-white/15 group-hover:bg-white/22",
    icon: "text-white",
    label: "text-white",
    title: "text-white",
    question: "text-white",
    description: "text-white",
    featureDot: "bg-white",
    featureText: "text-white",
    cta: "text-white hover:text-white/90",
    ctaShell: "border-white/22 bg-white/10",
  },
} as const;

export const Estaciones = () => {
  return (
    <section id="estaciones" className="relative py-24 lg:py-32 overflow-hidden bg-ethereal">
      <CapsuleShape
        variant="vertical"
        color="outline"
        size="lg"
        className="absolute left-[3%] top-1/4 opacity-10"
      />
      <CapsuleShape
        variant="horizontal"
        color="sand"
        size="md"
        className="absolute right-[5%] bottom-1/4 opacity-15"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Orb color="slate" size="sm" />
            <span className="text-ritual text-xs text-muted-foreground tracking-[0.3em]">
              {"Las Tres Estaciones"}
            </span>
            <Orb color="slate" size="sm" />
          </div>

          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 max-w-[14ch] mx-auto">
            {"Elige tu "}
            <span className="text-primary font-medium">{"Estaci\u00f3n"}</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Cada ruta te lleva a una experiencia distinta con los componentes necesarios
            para despertar el imperio durmiente en tu interior.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stations.map((station, index) => {
            const theme = stationTheme[station.color];

            return (
              <div
                key={station.id}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`relative overflow-hidden h-full flex flex-col rounded-[2rem] p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 ${theme.card}`}
                >
                  <div className="relative z-10">
                    <div className="relative mb-6 min-h-[96px]">
                      <div
                        className={`pointer-events-none absolute left-0 top-0 w-14 h-24 rounded-full border flex items-center justify-center opacity-0 -translate-y-12 scale-95 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 ${theme.iconShell}`}
                      >
                        <station.icon className={`w-6 h-6 ${theme.icon}`} />
                      </div>
                      <div className="flex-1 min-w-0 transition-transform duration-500 ease-out group-hover:translate-x-16">
                        <span className={`text-ritual text-[10px] tracking-[0.3em] block mb-1 ${theme.label}`}>
                          {"ESTACI\u00d3N PARA"}
                        </span>
                        <div className="flex items-center gap-2">
                          <h3 className={`text-display text-2xl font-medium ${theme.title}`}>{station.title}</h3>
                        </div>
                      </div>
                    </div>

                    <p className={`font-body text-sm font-medium mb-4 ${theme.question}`}>{station.subtitle}</p>

                    <p className={`font-body text-sm leading-relaxed mb-6 flex-grow ${theme.description}`}>
                      {station.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {station.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${theme.featureDot}`} />
                          <span className={theme.featureText}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contacto"
                      className={`relative inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link ${theme.cta} px-3 py-1.5 -mx-3 rounded-full`}
                    >
                      <span
                        className={`pointer-events-none absolute inset-0 rounded-full border opacity-0 scale-95 transition-all duration-300 ease-out group-hover/link:opacity-100 group-hover/link:scale-100 ${theme.ctaShell}`}
                        aria-hidden="true"
                      />
                      <span className="relative z-10">{"Explorar estaci\u00f3n"}</span>
                      <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>

                {index < stations.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-border to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
