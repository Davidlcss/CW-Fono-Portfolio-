import { Users, Baby, Brain, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Atendimento Infanto-juvenil",
    description: "Acompanhamento voltado para crianças e adolescentes com dificuldades na comunicação e funções orais. Abordagem personalizada respeitando a individualidade."
  },
  {
    icon: Baby,
    title: "Consultoria em Amamentação",
    description: "Apoio especializado às mães e bebês durante o processo de amamentação, incluindo diagnóstico e manejo de dificuldades, promovendo vínculos saudáveis."
  },
  {
    icon: Brain,
    title: "Intervenções para crianças com TEA",
    description: "Planos terapêuticos individualizados, baseados em evidências, que estimulam comunicação, interação social e autonomia através de metodologias científicas."
  },
  {
    icon: Stethoscope,
    title: "Avaliações e terapias individualizadas",
    description: "Anamnese, avaliação e acompanhamento fonoaudiológico em Linguagem, Fala, Voz e Motricidade Orofacial."
  }
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
            Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado infanto-juvenil com abordagem humanizada e científica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card shadow-soft">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-10 w-10 text-secondary" />
                </div>
                
                <h3 className="text-2xl font-medium text-accent mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;