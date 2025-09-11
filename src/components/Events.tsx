import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import demoDayImage from "@/assets/demo-day-event.jpg";
import workshopImage from "@/assets/workshop-event.jpg";
import networkingImage from "@/assets/networking-event.jpg";
import pitchCompetitionImage from "@/assets/pitch-competition-event.jpg";

const Events = () => {
  const events = [
    {
      // title: "Demo Day Q1 2024",
      title: "Día de demostración del primer trimestre de 2025",
      date: "15 Marzo 2025",
      time: "18:00 - 21:00",
      location: "Centro de Innovación Tech",
      attendees: 200,
      type: "Presentación",
      description: "Los emprendimientos de nuestra cohorte presentarán sus proyectos a inversionistas y mentores.",
      featured: true,
      image: demoDayImage
    },
    {
      title: "Workshop: Validación de Ideas",
      date: "22 Marzo 2025",
      time: "10:00 - 16:00",
      location: "Virtual + Presencial",
      attendees: 50,
      type: "Taller",
      description: "Aprende metodologías ágiles para validar tu idea de negocio antes de invertir recursos.",
      image: workshopImage
    },
    {
      // title: "Networking Tech Entrepreneurs",
      title: "Emprendedores tecnológicos en red",
      date: "5 Abril 2025",
      time: "19:00 - 22:00",
      location: "Hub de Emprendimiento",
      attendees: 150,
      type: "Networking",
      description: "Conecta con otros emprendedores, mentores e inversionistas en un ambiente relajado.",
      image: networkingImage
    },
    {
      title: "Competencia de lanzamiento",
      date: "20 Abril 2025",
      time: "14:00 - 18:00",
      location: "Auditorio Central",
      attendees: 300,
      type: "Competencia",
      description: "Compite por una inversión semilla de $100,000 presentando tu startup en 3 minutos.",
      image: pitchCompetitionImage
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Eventos y{" "}
            <span className="text-gradient">Actividades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participa en nuestros eventos diseñados para acelerar tu crecimiento empresarial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in-up ${
                event.featured ? 'ring-2 ring-primary/20 shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {event.featured && (
                <div className="absolute top-0 left-0 w-full h-1 gradient-primary"></div>
              )}
              
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.featured 
                      ? 'gradient-primary text-white' 
                      : 'bg-white/90 text-gray-800'
                  }`}>
                    {event.type}
                  </span>
                  {event.featured && (
                    <span className="ml-2 px-2 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
                      Destacado
                    </span>
                  )}
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {event.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">{event.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees} participantes esperados</span>
                  </div>
                </div>
                
                <Button 
                  variant={event.featured ? "accent" : "outline"} 
                  className="w-full"
                >
                  {event.featured ? "Registrarse Ahora" : "Más Información"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="tech" size="lg">
            Ver Calendario Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;