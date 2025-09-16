import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Activities = () => {
  const activities = [
    {
      title: "Sequências Lógicas",
      links: [
        { name: "Sequências Lógicas", url: "https://wordwall.net/teacher/878995/pluralfonoaudiologia/folder/229330/sequ%C3%AAncias-l%C3%B3gicas" }
      ]
    },
    {
      title: "Frases",
      links: [
        { name: "Generalização Frases", url: "https://wordwall.net/resource/65280079/generaliza%c3%a7%c3%a3o-frases" },
        { name: "Leitura de Frases", url: "https://wordwall.net/resource/69980910/leitura-de-frases" }
      ]
    },
    {
      title: "Nomeação Rápida",
      links: [
        { name: "Nomeação Rápida - Objetos", url: "https://wordwall.net/resource/75177902/nomea%c3%a7%c3%a3o-r%c3%a1pida-objetos" }
      ]
    },
    {
      title: "Onomatopéias",
      links: [
        { name: "Treino de Onomatopeias", url: "https://wordwall.net/resource/1694714/abrapraxia-treino-de-onomatopeias" }
      ]
    },
    {
      title: "Motricidade Orofacial",
      links: [
        { name: "Exercícios MO", url: "https://wordwall.net/resource/25366277/exerc%c3%adcios-mo" },
        { name: "Roleta Motricidade Orofacial", url: "https://wordwall.net/pt/resource/32917285/roleta-motricidade-orofacial-fonod%C3%B3ris" }
      ]
    },
    {
      title: "Multigestos",
      links: [
        { name: "Multigestos", url: "https://wordwall.net/pt/resource/3184175/multigestos" }
      ]
    },
    {
      title: "Fonema /b/",
      links: [
        { name: "Fonema B", url: "https://wordwall.net/pt/resource/16400554/fonema-b-" },
        { name: "Jogo da Memória - Fonema B", url: "https://wordwall.net/pt/resource/24787629/fonoaudiologia/jogo-da-mem%c3%b3ria-fonema-b-palavras-simples" },
        { name: "Fonema B Inicial - O que tem na caixa", url: "https://wordwall.net/pt/resource/61460444/fonema-b-inicial-o-que-tem-na-caixa" }
      ]
    },
    {
      title: "Fonema /k/",
      links: [
        { name: "Treino do Fonema K - Palavras", url: "https://wordwall.net/pt/resource/59240269/treino-do-fonema-k-palavras" },
        { name: "Fonema K", url: "https://wordwall.net/pt/resource/3245200/fonema-k" },
        { name: "Fonema K (2)", url: "https://wordwall.net/pt/resource/20362093/fonema-k" }
      ]
    },
    {
      title: "Fonema /d/",
      links: [
        { name: "Fonema D", url: "https://wordwall.net/pt/resource/16354124/fonema-d-" },
        { name: "Som do Fonema D", url: "https://wordwall.net/pt/resource/1491328/som-do-fonema-d-" },
        { name: "Fonema D Inicial", url: "https://wordwall.net/pt/resource/3088694/fonema-d-inicial" }
      ]
    },
    {
      title: "Fonema /f/",
      links: [
        { name: "Fonema F", url: "https://wordwall.net/pt/resource/2303595/fonema-f" },
        { name: "Fonema F (2)", url: "https://wordwall.net/pt/resource/34193680/fonema-f" }
      ]
    },
    {
      title: "Fonema /g/",
      links: [
        { name: "Frases com G", url: "https://wordwall.net/pt/resource/75174831/frases-com-g-" },
        { name: "Fonema G", url: "https://wordwall.net/pt/resource/8600363/fonema-g-palavras-inicial-e-n%c3%a3o-inicial/fonema-g-" }
      ]
    },
    {
      title: "Fonema /j/",
      links: [
        { name: "Fonema J", url: "https://wordwall.net/pt/resource/3724763/fonema-j" },
        { name: "Fonema J (2)", url: "https://wordwall.net/pt/resource/2793333/fonema-j-" },
        { name: "Fonema J - Jogo da Memória", url: "https://wordwall.net/pt/resource/11456658/fonema-j-jogo-da-mem%C3%B3ria" }
      ]
    },
    {
      title: "Fonema /l/",
      links: [
        { name: "Jogo da Memória - Fonema L", url: "https://wordwall.net/pt/resource/24833863/jogo-da-mem%C3%B3ria-fonema-l-palavras-simples-fonodoris" },
        { name: "Fonema L", url: "https://wordwall.net/pt/resource/2000213/fonema-l-" },
        { name: "Fonema L (2)", url: "https://wordwall.net/pt/resource/3989002/fonema-l" }
      ]
    },
    {
      title: "Fonema /m/",
      links: [
        { name: "Fonema M", url: "https://wordwall.net/pt/resource/2721706/fonema-m" },
        { name: "Fonema M (2)", url: "https://wordwall.net/pt/resource/1520041/fonema-m" },
        { name: "Jogo Fonema M - Personagens", url: "https://wordwall.net/pt/resource/19071232/jogo-fonema-m-personagens" }
      ]
    },
    {
      title: "Fonema /n/",
      links: [
        { name: "Fonema N", url: "https://wordwall.net/pt/resource/39157534/fonema-n-" },
        { name: "Fonema N - Inicial e Final", url: "https://wordwall.net/pt/resource/10091945/fonema-n-inicial-e-final" },
        { name: "Fonema N - Fga Layssa Simões", url: "https://wordwall.net/pt/resource/65124072/fonema-n-fga-layssa-sim%C3%B5es" }
      ]
    },
    {
      title: "Fonema /p/",
      links: [
        { name: "Frases com Fonema P", url: "https://wordwall.net/pt/resource/65884441/frases-com-fonema-p" },
        { name: "Fonema P e B", url: "https://wordwall.net/pt/resource/20066741/fonema-p-e-b" },
        { name: "Memória - Palavras Simples Fonema P", url: "https://wordwall.net/pt/resource/24786924/fonoaudiologia/mem%c3%b3ria-palavras-simples-fonema-p-" }
      ]
    },
    {
      title: "Fonema /r/",
      links: [
        { name: "Fonema R", url: "https://wordwall.net/pt/resource/22634724/fonema-r-" },
        { name: "Memória Super Heróis R", url: "https://wordwall.net/pt/resource/32441558/mem%C3%B3ria-super-her%C3%B3is-r-" },
        { name: "Fonema R Vibrante", url: "https://wordwall.net/pt/resource/1907525/fonema-r-vibrante/fonema-r-vibrante" },
        { name: "Frases com R Forte", url: "https://wordwall.net/pt/resource/55249178/fonema-r/frases-com-r-forte" },
        { name: "Encontro Consonantal", url: "https://wordwall.net/pt/resource/28926270/fonoaudiologia/encontro-consonantal" }
      ]
    },
    {
      title: "Fonema /s/",
      links: [
        { name: "Fonema S", url: "https://wordwall.net/pt/resource/1697138/fonema-s" },
        { name: "Jogo da Memória - Fonema S", url: "https://wordwall.net/pt/resource/10530903/jogo-da-mem%C3%B3ria-fonema-s-" },
        { name: "Jogo da Memória - Fonema S (2)", url: "https://wordwall.net/pt/resource/3676884/jogo-da-mem%C3%B3ria-fonema-s" },
        { name: "Fonema S (2)", url: "https://wordwall.net/pt/resource/5567631/fonema-s-" }
      ]
    },
    {
      title: "Fonema /t/",
      links: [
        { name: "Memória - Fonema T Inicial", url: "https://wordwall.net/pt/resource/25836454/fonoaudiologia/mem%c3%b3ria-fonema-t-inicial" },
        { name: "Fonema T", url: "https://wordwall.net/pt/resource/1517279/fonema-t" }
      ]
    },
    {
      title: "Fonema /v/",
      links: [
        { name: "Jogo da Memória V", url: "https://wordwall.net/pt/resource/30938215/fonoaudiologia/jogo-da-mem%c3%b3ria-v-" },
        { name: "Fonema V", url: "https://wordwall.net/pt/resource/3161206/fonema-v-" },
        { name: "Nomeação Fonema V", url: "https://wordwall.net/pt/resource/75136230/habilidades-motoras/nomea%c3%a7%c3%a3o-fonema-v" },
        { name: "Fonema V (2)", url: "https://wordwall.net/pt/resource/3435809/fonema-v-" }
      ]
    },
    {
      title: "Fonema /x/",
      links: [
        { name: "Fonema X", url: "https://wordwall.net/pt/resource/2646616/fonema-x-" },
        { name: "Frases com o Fonema X", url: "https://wordwall.net/pt/resource/65978853/frases-com-o-fonema-x" },
        { name: "Fonema X CH", url: "https://wordwall.net/pt/resource/1564938/fonema-x-ch" },
        { name: "Fonema X CH (2)", url: "https://wordwall.net/pt/resource/26468830/articula%c3%a7%c3%a3o-consci%c3%aancia-fonol%c3%b3gica/fonema-x-ch" }
      ]
    },
    {
      title: "Fonema /z/",
      links: [
        { name: "Som Z", url: "https://wordwall.net/pt/resource/3615823/som-z" },
        { name: "Memória Fonema S Z", url: "https://wordwall.net/pt/resource/16962053/mem%C3%B3ria-fonema-s-z" },
        { name: "Jogo da Memória - Fonema Z", url: "https://wordwall.net/pt/resource/25596079/jogo-da-mem%C3%B3ria-fonema-z-s-com-som-de-z-fonod%C3%B3ris-e-arthur" }
      ]
    }
  ];

  return (
    <section id="atividades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Atividades
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Materiais e atividades organizados para apoio terapêutico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {activities.map((category, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-accent mb-2">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <div
                      key={linkIndex}
                      className="p-3 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors cursor-pointer border border-transparent hover:border-primary/20"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      <p className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {link.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Clique para acessar
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;