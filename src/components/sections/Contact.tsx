import { CapsuleShape, Orb, StellarLine } from "@/components/stellar/CapsuleShape";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  station: z.string().min(1, "Selecciona una estación"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export const Contact = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      station: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log("Form data:", data);
      toast.success("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden bg-transparent">
      {/* Decorative elements */}
      <CapsuleShape
        variant="vertical"
        color="outline"
        size="xl"
        className="absolute -right-10 top-[24%] opacity-25 border-white/25 animate-float"
      />
      <CapsuleShape
        variant="vertical"
        color="outline"
        size="lg"
        className="absolute -left-8 top-16 opacity-20 border-white/20 animate-float"
        style={{ animationDelay: "1.4s" }}
      />
      <CapsuleShape
        variant="horizontal"
        color="mist"
        size="lg"
        className="absolute right-[8%] top-16 !bg-white/22 animate-float"
        style={{ animationDelay: "0.6s" }}
      />
      <CapsuleShape
        variant="horizontal"
        color="outline"
        size="md"
        className="absolute left-[12%] bottom-24 opacity-25 border-white/25 animate-float"
        style={{ animationDelay: "2.2s" }}
      />
      <CapsuleShape
        variant="pill"
        color="outline"
        size="md"
        className="absolute left-[15%] top-24 opacity-20 border-white/20 animate-float"
        style={{ animationDelay: "1.8s" }}
      />
      <Orb
        color="mist"
        size="xl"
        className="absolute left-[7%] bottom-24 !bg-white/28 animate-float"
        style={{ animationDelay: "1.2s" }}
      />
      <Orb
        color="mist"
        size="md"
        className="absolute right-[18%] bottom-16 !bg-slate-200/30 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <Orb
        color="mist"
        size="sm"
        className="absolute right-[24%] top-20 !bg-white/35 animate-float"
        style={{ animationDelay: "0.9s" }}
      />
      <Orb
        color="mist"
        size="lg"
        className="absolute left-[20%] top-[28%] !bg-slate-100/22 animate-float"
        style={{ animationDelay: "1.7s" }}
      />
      <div
        className="absolute left-[10%] top-[34%] w-[180px] h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0 rotate-12 animate-float"
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="absolute right-[12%] bottom-[22%] w-[150px] h-px bg-gradient-to-l from-white/0 via-slate-100/45 to-white/0 -rotate-6 animate-float"
        style={{ animationDelay: "2.4s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <StellarLine direction="horizontal" className="w-12" />
              <span className="text-ritual text-xs text-muted-foreground tracking-[0.3em]">
                Conecta con Nosotros
              </span>
              <StellarLine direction="horizontal" className="w-12" />
            </div>

            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 max-w-[14ch] mx-auto">
              Inicia tu viaje... <span className="text-accent font-medium">Aventura</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos listos para acompañarte en tu viaje hacia la transformación sostenible.
            </p>
          </div>

          {/* Contact card */}
          <div className="relative">
            <div className="station-card p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                  <h3 className="text-display text-2xl font-medium text-foreground mb-6">¡Hablemos!</h3>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-body text-muted-foreground">
                              Nombre completo
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="w-full px-4 py-3 rounded-full bg-background border border-border/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-body"
                                placeholder="Tu nombre"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-body text-muted-foreground">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                {...field}
                                className="w-full px-4 py-3 rounded-full bg-background border border-border/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-body"
                                placeholder="tu@email.com"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="station"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-body text-muted-foreground">
                              ¿Qué estación te interesa?
                            </FormLabel>
                            <FormControl>
                              <select
                                {...field}
                                className="w-full px-4 py-3 rounded-full bg-background border border-border/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-body appearance-none cursor-pointer"
                              >
                                <option value="">Selecciona una opción</option>
                                <option value="comunidades">Comunidades</option>
                                <option value="tripulaciones">Tripulaciones</option>
                                <option value="exploradorxs">Exploradorxs</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-body text-muted-foreground">
                              Mensaje
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                rows={4}
                                className="w-full px-4 py-3 rounded-2xl bg-background border border-border/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-body resize-none"
                                placeholder="Cuéntanos sobre tu proyecto..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="btn-wine w-full flex items-center justify-center gap-2"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </form>
                  </Form>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-display text-2xl font-medium text-foreground mb-6">
                      Información de contacto
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-body text-sm text-muted-foreground mb-1">Email</p>
                          <p className="font-body text-foreground">info@vianntto.com
                            vianntto.carnevali@gmail.com
                            Experiencias.vinanntto@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="font-body text-sm text-muted-foreground mb-1">Ubicación</p>
                          <p className="font-body text-foreground">Latinoamérica & Global</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative visual */}
                  <div className="hidden lg:block mt-12">
                    <div className="relative h-40">
                      <CapsuleShape variant="horizontal" color="sand" size="lg" className="absolute bottom-0 left-0 opacity-40" />
                      <CapsuleShape variant="horizontal" color="outline" size="md" className="absolute bottom-8 left-16 opacity-30" />
                      <Orb color="wine" size="lg" className="absolute bottom-4 right-8 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
