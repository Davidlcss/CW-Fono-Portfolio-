const Orientations = () => {
  return (
    <section id="orientacoes" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
              Informações e Orientações
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Apraxia de fala na infância */}
            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-soft">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-secondary mb-6">
                Apraxia de fala na infância
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A apraxia de fala na infância (AFI) é um transtorno motor da fala caracterizado pela dificuldade no planejamento e na programação dos movimentos articulatórios necessários para produzir sons, sílabas e palavras. A criança sabe o que quer dizer, mas apresenta obstáculos para organizar, sequenciar e executar os movimentos da boca, língua e face de forma precisa.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  O termo "apraxia de fala" foi inicialmente descrito em adultos com lesões neurológicas adquiridas. Com o tempo, a literatura passou a reconhecer que crianças também poderiam apresentar um distúrbio semelhante, baseado no planejamento motor da fala, mas sem lesão cerebral evidente. Desde 2007, a American Speech-Language-Hearing Association (ASHA) reconhece a apraxia de fala na infância como um diagnóstico específico dentro dos transtornos motores da fala.
                </p>

                <div className="bg-card rounded-2xl p-6 my-8">
                  <h4 className="text-xl font-medium text-accent mb-4">As principais características são:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Produção inconsistente de sons e palavras: a mesma palavra pode ser falada de maneiras diferentes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Dificuldade nas transições entre sons, sílabas e palavras, resultando em pausas ou fala lenta.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Alterações na prosódia (ritmo e entonação da fala).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Reduzido inventário fonético, com omissões frequentes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Maior esforço articulatório, com busca visível pelos movimentos corretos.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Dificuldade em imitar palavras e sequências sonoras.</span>
                    </li>
                  </ul>
                </div>

                <h4 className="text-xl font-medium text-secondary mb-4">Métodos de intervenção mais utilizados</h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A intervenção fonoaudiológica para apraxia de fala deve ser intensiva, baseada em evidências e fundamentada em princípios de aprendizagem motora. Entre os métodos mais utilizados, destacam-se:
                </p>

                <div className="space-y-4">
                  <div className="bg-card rounded-xl p-4">
                    <h5 className="font-medium text-accent mb-2">PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets):</h5>
                    <p className="text-muted-foreground">fornece pistas táteis e cinestésicas no rosto e mandíbula da criança, ajudando a guiar os movimentos articulatórios necessários.</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-4">
                    <h5 className="font-medium text-accent mb-2">DTTC (Dynamic Temporal and Tactile Cueing):</h5>
                    <p className="text-muted-foreground">abordagem dinâmica que utiliza repetições intensivas, com apoio auditivo, visual e tátil, reduzido de forma gradual conforme a criança evolui.</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-4">
                    <h5 className="font-medium text-accent mb-2">Multigestos:</h5>
                    <p className="text-muted-foreground">associa gestos manuais, visuais e auditivos à fala, auxiliando a criança a estabelecer ligações entre movimentos motores e representações fonológicas.</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-4">
                    <h5 className="font-medium text-accent mb-2">ReST (Rapid Syllable Transition Training):</h5>
                    <p className="text-muted-foreground">indicado principalmente para crianças a partir de 7 anos, utiliza pseudopalavras para treinar precisão articulatória, prosódia e transições rápidas entre sílabas.</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-4">
                    <h5 className="font-medium text-accent mb-2">Prática motora intensiva e lúdica:</h5>
                    <p className="text-muted-foreground">a repetição de sons, sílabas e palavras em contextos variados, integrada a brincadeiras e atividades funcionais, é essencial para consolidar os padrões motores.</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A apraxia de fala exige alta intensidade terapêutica, sendo recomendadas múltiplas sessões semanais, geralmente de 3 a 5 vezes por semana. A prática frequente é essencial para que a criança desenvolva e estabilize novos padrões motores de fala. O engajamento da família é determinante para o sucesso do tratamento, pois, em casa, os pais devem reforçar as estratégias aprendidas na terapia, oferecer modelos corretos de fala de forma paciente, valorizar cada tentativa comunicativa e criar um ambiente rico em interações. Esse comprometimento garante maior progresso e favorece a generalização das habilidades adquiridas para o dia a dia da criança.
                </p>
              </div>
            </div>

            {/* Atraso de Fala */}
            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-soft">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-secondary mb-6">
                Atraso de Fala
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O desenvolvimento da fala acontece de forma gradual e está diretamente relacionado às chamadas habilidades preditoras da fala. São comportamentos que antecedem o surgimento da linguagem oral e indicam se a criança está se preparando para falar. Entre eles, destacam-se: atenção compartilhada, contato visual, imitação de gestos e sons, uso de gestos comunicativos (como apontar e acenar), balbucio variado e compreensão de ordens simples.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quando esses comportamentos não aparecem ou surgem de forma limitada, pode haver maior risco de atraso de fala, que se caracteriza quando a criança não apresenta o número esperado de palavras ou combinações para sua idade. Entre as possíveis causas, destacam-se: perdas auditivas (mesmo que leves ou ocasionais), alterações no desenvolvimento neurológico, dificuldades motoras de fala, ausência de estímulos comunicativos no ambiente familiar, excesso de telas, rigidez comportamental, além de transtornos de linguagem e do espectro autista.
                </p>

                <h4 className="text-xl font-medium text-secondary mb-4">Marcos importantes da fala e linguagem até 3 anos</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-6">
                    <h5 className="font-medium text-accent mb-3">12 meses</h5>
                    <p className="text-muted-foreground">balbucio frequente, pelo menos 1 a 3 palavras com significado ("mamãe", "papai", "au-au"), compreensão de ordens simples com gestos ("dá tchau", "vem aqui") e uso de gestos para se comunicar.</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-6">
                    <h5 className="font-medium text-accent mb-3">18 meses</h5>
                    <p className="text-muted-foreground">vocabulário de 10 a 20 palavras, uso de gestos junto à fala e compreensão de instruções simples sem apoio de gestos.</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-6">
                    <h5 className="font-medium text-accent mb-3">24 meses (2 anos)</h5>
                    <p className="text-muted-foreground">em torno de 50 palavras, início da combinação de duas palavras em frases curtas ("quer água", "bola caiu") e melhor compreensão da linguagem.</p>
                  </div>
                  
                  <div className="bg-card rounded-xl p-6">
                    <h5 className="font-medium text-accent mb-3">36 meses (3 anos)</h5>
                    <p className="text-muted-foreground">vocabulário de 200 a 250 palavras ou mais, frases de 3 a 4 palavras, capacidade de relatar pequenas experiências e fala compreensível pela família na maior parte das vezes.</p>
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-accent">Importante:</strong> De forma geral, a ausência de palavras até os 12 meses, a falta de evolução significativa do vocabulário até os 18 meses ou a ausência de combinações de palavras aos 2 anos podem indicar atraso de fala que merece avaliação fonoaudiológica. A intervenção precoce é essencial para favorecer o desenvolvimento da comunicação e evitar impactos futuros na aprendizagem e nas interações sociais.
                  </p>
                </div>
              </div>
            </div>

            {/* A estimulação vai além do ambiente terapêutico */}
            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-soft">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-secondary mb-6">
                A estimulação vai além do ambiente terapêutico
              </h3>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O desenvolvimento da fala e da linguagem acontece todos os dias, nos pequenos momentos em família. Estimular a criança em casa é essencial, pois é nesse ambiente que ela se sente segura para explorar, experimentar sons, palavras e maneiras de se comunicar.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Atitudes simples, como conversar durante as atividades do dia, nomear objetos, cantar músicas, contar histórias e incentivar a criança a se expressar, fazem grande diferença. Essas interações fortalecem o vínculo afetivo e ajudam no crescimento das habilidades de comunicação, tornando a fala mais funcional e natural.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quando os pais participam ativamente desse processo, criam um ambiente rico em linguagem, que potencializa os avanços conquistados na terapia e contribui para o desenvolvimento global da criança.
                </p>

                <div className="bg-secondary/10 rounded-2xl p-6 my-8">
                  <h4 className="text-xl font-medium text-accent mb-4">Dicas práticas para estimular em casa:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary font-bold mr-2">•</span>
                      <span>Realizar jogos de imitação, pois a imitação é um pré-requisito para o desenvolvimento da fala</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary font-bold mr-2">•</span>
                      <span>Conversar sobre o que aconteceu durante o dia, oferecendo modelos para que a criança também compartilhe</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary font-bold mr-2">•</span>
                      <span>Corrigir de maneira divertida e paciente as palavras distorcidas, priorizando palavras mais simples (dissílabas)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary font-bold mr-2">•</span>
                      <span>Aproveitar situações cotidianas (banho, alimentação) para descrever o que está acontecendo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary font-bold mr-2">•</span>
                      <span>Reservar momentos para atividades em conjunto (receitas, brincadeiras, jogos)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary font-bold mr-2">•</span>
                      <span>Incentivar a troca de turnos, permitindo que a criança se expresse no seu tempo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orientations;