const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
              Sobre mim
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-accent">Fonoaudióloga (CRFa 4-14915)</strong>, analista comportamental e consultora de amamentação. 
                Minha trajetória profissional é movida pelo desejo de transformar vidas por meio da comunicação, ajudando crianças, 
                adolescentes e suas famílias a superarem desafios e desenvolverem suas potencialidades, realizando avaliações e 
                intervenções fonoaudiológicas nas áreas de linguagem, motricidade orofacial, voz, aprendizagem e audição.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sou graduada em <strong className="text-secondary">Fonoaudiologia pela Universidade Federal da Paraíba</strong> e 
                pós-graduada em <strong className="text-secondary">Intervenção ABA aplicada ao Transtorno do Espectro Autista (TEA)</strong>. 
                Durante a graduação, participei ativamente de grupos de estudo, pesquisa, extensão e monitoria, sempre com foco na saúde coletiva, 
                linguagem, fonoaudiologia escolar e no cuidado a crianças com diferentes necessidades.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Busco constantemente atualização profissional e, ao longo da minha formação, concluí capacitações que enriquecem meu trabalho. 
                Essas formações complementam meu olhar e me permitem oferecer um <strong className="text-primary">atendimento mais completo, sensível e eficaz</strong>. 
                Acredito que cada criança tem sua própria forma de se comunicar e que o papel da fonoaudiologia vai muito além da técnica: 
                é também acolher, respeitar e caminhar junto com as famílias.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Por isso, construo meu trabalho com base em <strong className="text-accent">ciência, empatia e amor</strong>, 
                sempre buscando promover qualidade de vida, autonomia e inclusão.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-semibold text-secondary">16</span>
                </div>
                <h3 className="text-lg font-medium text-accent mb-2">Capacitações</h3>
                <p className="text-muted-foreground">Formações especializadas que enriquecem o atendimento</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-semibold text-accent">100%</span>
                </div>
                <h3 className="text-lg font-medium text-accent mb-2">Cuidado Personalizado</h3>
                <p className="text-muted-foreground">Atendimento humanizado e individualizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;