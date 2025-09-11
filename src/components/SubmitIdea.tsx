import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitIdea = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "¡Idea enviada exitosamente!",
      description: "Nuestro equipo revisará tu propuesta y te contactaremos pronto.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-card">
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">¡Gracias por tu envío!</h3>
              <p className="text-muted-foreground mb-6">
                Hemos recibido tu idea de negocio. Nuestro equipo de expertos la revisará 
                y nos pondremos en contacto contigo en un plazo de 48 horas.
              </p>
              <Button 
                variant="accent" 
                onClick={() => setIsSubmitted(false)}
              >
                Enviar Otra Idea
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="postular-idea" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Postula tu{" "}
            <span className="text-gradient">Idea</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuéntanos sobre tu idea innovadora y únete a nuestra incubadora
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-0 shadow-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Formulario de Postulación</CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input 
                    id="name" 
                    placeholder="Tu nombre completo" 
                    required 
                    className="transition-smooth focus:shadow-soft"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    required
                    className="transition-smooth focus:shadow-soft"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input 
                    id="phone" 
                    placeholder="+1 234 567 8900"
                    className="transition-smooth focus:shadow-soft"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría *</Label>
                  <Select required>
                    <SelectTrigger className="transition-smooth focus:shadow-soft">
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fintech">FinTech</SelectItem>
                      <SelectItem value="healthtech">HealthTech</SelectItem>
                      <SelectItem value="edtech">EdTech</SelectItem>
                      <SelectItem value="logtech">LogTech</SelectItem>
                      <SelectItem value="agtech">AgTech</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Título de tu idea *</Label>
                <Input 
                  id="title" 
                  placeholder="Título breve y descriptivo de tu proyecto" 
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción del proyecto *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe tu idea, el problema que resuelve y tu propuesta de valor..."
                  className="min-h-32 transition-smooth focus:shadow-soft"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="market">Análisis de mercado</Label>
                <Textarea 
                  id="market" 
                  placeholder="Describe tu mercado objetivo, competencia y oportunidad de negocio..."
                  className="min-h-24 transition-smooth focus:shadow-soft"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="stage">Etapa del proyecto *</Label>
                  <Select required>
                    <SelectTrigger className="transition-smooth focus:shadow-soft">
                      <SelectValue placeholder="Selecciona la etapa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">Solo idea</SelectItem>
                      <SelectItem value="prototype">Prototipo</SelectItem>
                      <SelectItem value="mvp">MVP desarrollado</SelectItem>
                      <SelectItem value="early">Primeros usuarios</SelectItem>
                      <SelectItem value="growth">En crecimiento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="funding">Inversión buscada</Label>
                  <Select>
                    <SelectTrigger className="transition-smooth focus:shadow-soft">
                      <SelectValue placeholder="Rango de inversión" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k">$10K - $50K</SelectItem>
                      <SelectItem value="50k">$50K - $100K</SelectItem>
                      <SelectItem value="100k">$100K - $250K</SelectItem>
                      <SelectItem value="250k">$250K - $500K</SelectItem>
                      <SelectItem value="500k">$500K+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="files">Documentos adicionales</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-smooth">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Arrastra archivos aquí o haz clic para seleccionar
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOC, PPT hasta 10MB (Pitch deck, business plan, etc.)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <input type="checkbox" id="terms" required className="rounded" />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  Acepto los términos y condiciones y autorizo el tratamiento de mis datos
                </Label>
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full group"
              >
                <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                Enviar Postulación
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubmitIdea;