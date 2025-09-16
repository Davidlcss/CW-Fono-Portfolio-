import { Button } from "@/components/ui/button";
import carolinaPhoto from "@/assets/carolina-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src={carolinaPhoto} 
                  alt="Carolina Wanderley - Fonoaudióloga" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Fonoaudióloga
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-accent mb-6">
              Dra. Carolina
              <br />
              <span className="text-primary">Wanderley</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              Fonoaudióloga em João Pessoa - Paraíba
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Cuidado especializado para desenvolvimento da comunicação e funções orais. 
              Atendimento humanizado com base em evidências científicas.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;