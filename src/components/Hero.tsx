import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket, Users } from "lucide-react";
import heroImage from "@/assets/hero-innovation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
              <Lightbulb className="w-4 h-4" />
              Incubadora de Emprendimientos Innovadores
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Enciende tu{" "}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Idea
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 max-w-2xl">
              Transformamos ideas innovadoras en soluciones tecnológicas exitosas. 
              Únete a nuestra incubadora y haz realidad tu emprendimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#postular-idea">
                <Button variant="hero" size="lg" className="group">
                  Postula tu Idea
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#casos-exito">
              <Button variant="outline-hero" size="lg">
                Conoce Casos de Éxito
              </Button>
              </a>

            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-white/70">Emprendimientos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">85%</div>
                <div className="text-white/70">Tasa de Éxito</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50M+</div>
                <div className="text-white/70">Inversión Total</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Innovación Tecnológica" 
                className="w-full h-auto rounded-2xl shadow-2xl animate-glow"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
                <Rocket className="w-8 h-8 text-purple-600 mb-2" />
                <div className="text-sm font-semibold text-gray-800">Acelera tu startup</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-sm font-semibold text-gray-800">Red de mentores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;