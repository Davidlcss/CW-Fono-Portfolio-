import logoInitials from "@/assets/logo-initials.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoInitials} 
                alt="Carolina Wanderley" 
                className="h-20 w-auto drop-shadow-lg filter brightness-110 transition-transform hover:scale-105"
              />
            </div>
            <p className="text-accent-foreground/80 leading-relaxed">
              Fonoaudióloga especializada em TEA, ABA e desenvolvimento da comunicação. 
              Cuidado humanizado e baseado em evidências científicas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('especializacoes')}
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Capacitações
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('atividades')}
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Atividades
              </button>
              <button 
                onClick={() => scrollToSection('orientacoes')}
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Orientações
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="text-accent-foreground/80">
                João Pessoa - PB
              </p>
              <a 
                href="mailto:fgacarolinawanderley@gmail.com"
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                fgacarolinawanderley@gmail.com
              </a>
              <a 
                href="https://wa.me/5583991069133"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent-foreground/80 hover:text-primary transition-colors"
              >
                (83) 9 9106-9133
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="text-center text-accent-foreground/60">
            <p>&copy; {new Date().getFullYear()} Carolina Wanderley. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;