import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Lightbulb } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // <--- Nuevo estado

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Requisitos", href: "#requisitos" },
    { name: "Casos de Éxito", href: "#casos-exito" },
    { name: "Eventos", href: "#eventos" },
    { name: "Inversionistas", href: "#inversionistas" },
  ];

  /*  handleScroll: Esta función comprueba si la posición vertical de la página es mayor a 10 píxeles. Si es así, actualiza el estado scrolled a true. De lo contrario, lo deja en false. */
  const handleScroll = () => {
    if (window.scrollY > 700) { // <-- Cambia a `> 10` para que el efecto se active al inicio del scroll
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
/* useEffect: Agrega el escuchador del evento de scroll cuando el componente se monta y lo elimina cuando el componente se desmonta, lo que evita problemas de memoria. */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El array vacío `[]` asegura que el efecto se ejecute solo una vez

  return (
    // <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/10 z-50">
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "scrolled-gradient" // Clase personalizada para el degradado , agregado en inde.css archivo de estilo global
          : "bg-white/10 backdrop-blur-md border-white/10" // Clases al inicio
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center animate-glow">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Enciende tu Idea</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-smooth font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
             <a href="#postular-idea">
              <Button variant="hero" size="sm">
                Postular Idea
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 transition-smooth"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white/80 hover:text-white transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button variant="hero" size="sm" className="w-full">
                  Postular Idea
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;