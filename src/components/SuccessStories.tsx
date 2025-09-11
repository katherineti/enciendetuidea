import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
import techHealthImage from "@/assets/techhealth-case.jpg";
import ecoLogisticsImage from "@/assets/ecologistics-case.jpg";
import financeAIImage from "@/assets/financeai-case.jpg";
import eduStreamImage from "@/assets/edustream-case.jpg";

const SuccessStories = () => {
  const stories = [
    {
      name: "TechHealth",
      category: "HealthTech",
      description: "Plataforma de telemedicina que conecta pacientes con especialistas",
      metrics: {
        users: "50K+",
        funding: "$2.5M",
        growth: "300%"
      },
      year: "2025",
      gradient: "from-blue-500 to-cyan-500",
      image: techHealthImage
    },
    {
      name: "EcoLogistics",
      category: "LogTech",
      description: "Optimización de rutas logísticas con IA para reducir huella de carbono",
      metrics: {
        users: "200+",
        funding: "$1.8M",
        growth: "250%"
      },
      year: "2024",
      gradient: "from-green-500 to-teal-500",
      image: ecoLogisticsImage
    },
    {
      name: "FinanceAI",
      category: "FinTech",
      description: "Asesor financiero personal basado en inteligencia artificial",
      metrics: {
        users: "25K+",
        funding: "$3.2M",
        growth: "400%"
      },
      year: "2023",
      gradient: "from-purple-500 to-pink-500",
      image: financeAIImage
    },
    {
      name: "EduStream",
      category: "EdTech",
      description: "Plataforma de educación virtual adaptativa con realidad aumentada",
      metrics: {
        users: "100K+",
        funding: "$5M",
        growth: "500%"
      },
      year: "2022",
      gradient: "from-orange-500 to-red-500",
      image: eduStreamImage
    }
  ];

  return (
    <section id="casos-exito" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Casos de{" "}
            <span className="text-gradient">Éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce las historias inspiradoras de emprendimientos que han crecido con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${story.gradient}`}></div>
              
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${story.gradient} text-white`}>
                    {story.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-smooth">
                      {story.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-muted-foreground">{story.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">{story.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{story.metrics.users}</div>
                    <div className="text-xs text-muted-foreground">Usuarios</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{story.metrics.funding}</div>
                    <div className="text-xs text-muted-foreground">Inversión</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{story.metrics.growth}</div>
                    <div className="text-xs text-muted-foreground">Crecimiento</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="accent" size="lg">
            Ver Todos los Casos de Éxito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;