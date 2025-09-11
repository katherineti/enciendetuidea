import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, Target, Zap } from "lucide-react";

const Requirements = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documenta tu Idea",
      description: "Prepara un pitch deck con tu propuesta de valor, modelo de negocio y análisis de mercado.",
      requirements: ["Business plan", "Análisis de competencia", "Propuesta de valor única"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Define tu Mercado",
      description: "Identifica tu target, tamaño de mercado y estrategia de go-to-market.",
      requirements: ["Target definido", "TAM/SAM/SOM", "Estrategia de marketing"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Prototipo o MVP",
      description: "Desarrolla una versión mínima viable o prototipo funcional de tu solución.",
      requirements: ["MVP funcional", "Validación técnica", "Feedback de usuarios"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Forma tu Equipo",
      description: "Reúne un equipo complementario con las habilidades necesarias para ejecutar.",
      requirements: ["Equipo multidisciplinario", "Roles definidos", "Compromiso tiempo completo"]
    }
  ];

  return (
    <section id="requisitos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Requisitos para{" "}
            <span className="text-gradient">Participar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sigue estos pasos para preparar tu emprendimiento y maximizar tus posibilidades de ser seleccionado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-card transition-smooth border-0 shadow-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 gradient-primary"></div>
              
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:animate-glow">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Requisitos:</h4>
                  {step.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary/10 rounded-tl-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{index + 1}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requirements;