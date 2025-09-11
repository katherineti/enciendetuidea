import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, DollarSign, Users, Trophy } from "lucide-react";
import ventureCapitalLogo from "@/assets/venture-capital-logo.jpg";
import innovationAngelsLogo from "@/assets/innovation-angels-logo.jpg";
import globalTechLogo from "@/assets/global-tech-logo.jpg";
import impactVenturesLogo from "@/assets/impact-ventures-logo.jpg";

const Investors = () => {
  const investors = [
    {
      name: "Venture Capital Partners",
      type: "Fondo de Inversión",
      focus: "Early Stage Tech",
      investment: "$100K - $2M",
      portfolio: 45,
      description: "Especializados en startups tecnológicas en etapa temprana con alto potencial de crecimiento.",
      sectors: ["FinTech", "HealthTech", "AI/ML"],
      logo: ventureCapitalLogo
    },
    {
      name: "Innovation Angels",
      type: "Red de Ángeles",
      focus: "Seed & Series A",
      investment: "$25K - $500K",
      portfolio: 80,
      description: "Red de ejecutivos y emprendedores exitosos que invierten en startups innovadoras.",
      sectors: ["SaaS", "E-commerce", "IoT"],
      logo: innovationAngelsLogo
    },
    {
      name: "Global Tech Fund",
      type: "Fondo Corporativo",
      focus: "Growth Stage",
      investment: "$500K - $10M",
      portfolio: 25,
      description: "Brazo de inversión de multinacional tecnológica enfocado en escalamiento global.",
      sectors: ["Enterprise", "B2B Tech", "Automation"],
      logo: globalTechLogo
    },
    {
      name: "Impact Ventures",
      type: "Impact Investing",
      focus: "Social Impact",
      investment: "$50K - $1M",
      portfolio: 35,
      description: "Inversiones en startups que generan impacto social positivo y retorno financiero.",
      sectors: ["EdTech", "CleanTech", "Social"],
      logo: impactVenturesLogo
    }
  ];

  return (
    <section id="inversionistas" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros{" "}
            <span className="text-gradient">Inversionistas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectamos tu startup con inversionistas especializados que pueden acelerar tu crecimiento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {investors.map((investor, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 gradient-accent"></div>
              
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white shadow-soft">
                    <img 
                      src={investor.logo} 
                      alt={investor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {investor.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold">
                        {investor.type}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{investor.focus}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">{investor.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <DollarSign className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">{investor.investment}</div>
                    <div className="text-xs text-muted-foreground">Rango inversión</div>
                  </div>
                  
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Trophy className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold">{investor.portfolio}</div>
                    <div className="text-xs text-muted-foreground">Portafolio</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Sectores de interés:</h4>
                  <div className="flex flex-wrap gap-2">
                    {investor.sectors.map((sector, sectorIndex) => (
                      <span 
                        key={sectorIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Conocer Más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-foreground">$50M+</div>
            <div className="text-muted-foreground">Capital disponible</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-foreground">200+</div>
            <div className="text-muted-foreground">Inversionistas activos</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-foreground">15</div>
            <div className="text-muted-foreground">Fondos asociados</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-foreground">85%</div>
            <div className="text-muted-foreground">Tasa de éxito</div>
          </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="tech" size="lg">
            Conectar con Inversionistas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investors;