import { StellarLine } from "@/components/stellar/CapsuleShape";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "VIANNTTO transformó la manera en que vemos el liderazgo. La metodología Primera Estrella nos ayudó a conectar con nuestro equipo de formas que nunca imaginamos.",
    author: "María González",
    role: "Directora de Innovación",
    company: "TechCorp Latam",
  },
  {
    quote:
      "El programa Aventura Ágil fue un punto de inflexión. Pasamos de tener un grupo de trabajo a una verdadera tripulación con propósito.",
    author: "Carlos Mendoza",
    role: "CEO",
    company: "Fundación Crecer",
  },
  {
    quote:
      "Las mentorías personalizadas me dieron las herramientas que necesitaba para escalar mi emprendimiento de manera sostenible.",
    author: "Ana Lucía Pérez",
    role: "Fundadora",
    company: "EcoSolutions",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <StellarLine direction="horizontal" className="w-16" />
            <span className="text-ritual text-xs text-muted-foreground tracking-[0.3em]">
              Prueba Social
            </span>
            <StellarLine direction="horizontal" className="w-16" />
          </div>
          
          <h2 className="text-display text-4xl md:text-5xl font-light text-foreground">
            Voces del
            <span className="text-primary font-medium ml-2">Ecosistema</span>
          </h2>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-[2rem] bg-background border border-border/50 transition-all duration-500 hover:border-secondary/50 hover:shadow-lg group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-accent" />
              </div>
              
              {/* Quote */}
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                  <span className="text-primary font-display font-medium text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-medium text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};
