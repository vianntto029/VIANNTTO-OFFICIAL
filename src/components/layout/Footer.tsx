import { Logo } from "./Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-transparent text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-[10%] w-32 h-64 rounded-full border border-current" />
        <div className="absolute bottom-10 right-[15%] w-24 h-48 rounded-full border border-current" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo
              className="mb-6"
              iconClassName="text-white"
              showText={true}
            />
            <p className="font-body text-white/70 max-w-md leading-relaxed">
              Ecosistema de transformación sostenible, donde construimos nuestro verdadero poderío
              a través de la enseñanza profunda y sensible.
            </p>
          </div>

          {/* Estaciones */}
          <div>
            <h4 className="text-ritual text-xs tracking-[0.2em] mb-6 text-white/50">
              ESTACIONES
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#estaciones" className="font-body text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Comunidades
                </a>
              </li>
              <li>
                <a href="#estaciones" className="font-body text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Tripulaciones
                </a>
              </li>
              <li>
                <a href="#estaciones" className="font-body text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Exploradorxs
                </a>
              </li>
            </ul>
          </div>

          {/* Programas */}
          <div>
            <h4 className="text-ritual text-xs tracking-[0.2em] mb-6 text-white/50">
              PROGRAMAS
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Aventura Ágil
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Pangea
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Ganbatte
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Punto Azul
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/50">
            © {currentYear} VIANNTTO. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300">
              Privacidad
            </a>
            <a href="#" className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
