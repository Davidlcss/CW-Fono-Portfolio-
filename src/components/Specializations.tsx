import { Brain, Users, Heart, Mic, MessageCircle, Baby, Settings, Eye, Shield, Stethoscope, Volume2, BookOpen, Trophy, GraduationCap, UserCheck, Activity, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const capacitacoes = [
  {
    icon: Zap,
    title: "Técnica PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets)",
    description: "Método terapêutico que utiliza estímulos táteis e cinestésicos para reorganizar os movimentos orais e facilitar a produção correta dos sons da fala. É muito eficaz em casos de apraxia de fala e distúrbios motores da comunicação."
  },
  {
    icon: Baby,
    title: "Teste da Linguinha",
    description: "Exame de triagem que avalia o frênulo lingual em bebês. Permite identificar dificuldades que podem impactar a amamentação, a deglutição e o desenvolvimento da fala."
  },
  {
    icon: Brain,
    title: "Pós-graduação em Intervenção ABA aplicada ao TEA",
    description: "Formação em Análise do Comportamento Aplicada (ABA), abordagem com evidência científica para o desenvolvimento de habilidades de comunicação, sociais, cognitivas e adaptativas em pessoas com Transtorno do Espectro Autista (TEA)."
  },
  {
    icon: Users,
    title: "Método Multigestos",
    description: "Estratégia terapêutica que associa gestos a palavras, auxiliando na estimulação da fala, especialmente em crianças com atrasos de linguagem ou transtornos do desenvolvimento."
  },
  {
    icon: Heart,
    title: "Método DHACA (Desenvolvimento das Habilidades de Comunicação no Autismo)",
    description: "Programa voltado para estimular a comunicação em crianças com TEA, priorizando aspectos como interação, atenção compartilhada e desenvolvimento da linguagem funcional."
  },
  {
    icon: Volume2,
    title: "Método Reel Speech Treatment (ReST)",
    description: "Técnica específica para tratamento da apraxia de fala na infância. Trabalha a prosódia (ritmo, entonação e acentuação da fala) e a produção correta de palavras, com foco na generalização para o dia a dia."
  },
  {
    icon: MessageCircle,
    title: "Apraxia de Fala na Infância",
    description: "Curso introdutório sobre os fundamentos desse transtorno motor da fala, no qual a criança sabe o que quer dizer, mas apresenta dificuldade em planejar e coordenar os movimentos necessários para falar."
  },
  {
    icon: Settings,
    title: "Apraxia de Fala na Infância e Transtorno do Espectro Autista",
    description: "Curso avançado sobre a relação entre a apraxia e o TEA, abordando estratégias de avaliação e intervenção específicas para crianças que apresentam as duas condições associadas."
  },
  {
    icon: Activity,
    title: "Dynamic Temporal and Tactile Cueing (DTTC)",
    description: "Método de intervenção intensiva para apraxia de fala, baseado em pistas táteis e temporais. Trabalha repetições frequentes e ajustes graduais para favorecer o aprendizado motor da fala."
  },
  {
    icon: Eye,
    title: "Comunicação Alternativa e Ampliada (CAA)",
    description: "Curso que aborda recursos, estratégias e tecnologias de apoio à comunicação de pessoas que não desenvolvem fala funcional ou apresentam severas limitações comunicativas. A CAA amplia as possibilidades de expressão e promove maior inclusão e autonomia."
  },
  {
    icon: BookOpen,
    title: "Marcos do Desenvolvimento e Alfabetização",
    description: "Capacitação sobre as etapas típicas do desenvolvimento infantil e como elas se relacionam com a aquisição da leitura e escrita. Auxilia na identificação precoce de dificuldades e no planejamento de intervenções pedagógicas e fonoaudiológicas."
  },
  {
    icon: GraduationCap,
    title: "Monitoramento da Aprendizagem da Leitura e Escrita",
    description: "Formação voltada para o acompanhamento do processo de alfabetização, com foco em estratégias para prevenir e intervir em dificuldades de leitura e escrita."
  },
  {
    icon: Shield,
    title: "Covid-19: Uso seguro de EPI",
    description: "Curso sobre normas e práticas corretas para uso de Equipamentos de Proteção Individual na área da saúde, garantindo segurança em atendimentos durante a pandemia e em situações de risco biológico."
  },
  {
    icon: Stethoscope,
    title: "Atuação Fonoaudiológica na Disfagia Pós-AVC: Da Emergência ao Pós-Alta",
    description: "Capacitação específica para atendimento de pacientes com disfagia decorrente de acidente vascular cerebral (AVC), desde a fase hospitalar até o acompanhamento após a alta."
  },
  {
    icon: UserCheck,
    title: "Disfagia 2.0: O cuidado individualizado em disfagia nas diferentes condições",
    description: "Curso sobre avaliação e tratamento da disfagia em múltiplos contextos clínicos, destacando a importância de estratégias personalizadas conforme a condição de cada paciente."
  },
  {
    icon: Trophy,
    title: "Amamenta e Alimenta Brasil: Recomendações Baseadas no Guia Alimentar",
    description: "Formação que oferece orientações sobre aleitamento materno e alimentação complementar saudável, com base em diretrizes nacionais de saúde."
  }
];

const Specializations = () => {
  return (
    <section id="especializacoes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
            Capacitações
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Técnicas baseadas em evidências científicas para desenvolvimento individual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capacitacoes.map((spec, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <spec.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-medium text-accent mb-4 group-hover:text-primary transition-colors">
                  {spec.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {spec.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;