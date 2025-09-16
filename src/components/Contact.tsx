import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Contato de ${formData.name}`;
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
    const mailtoLink = `mailto:fgacarolinawanderley@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Mensagem enviada!",
      description: "Seu cliente de email foi aberto. Obrigada pelo contato!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
            Contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-medium text-accent mb-8">
              Informações de contato
            </h3>
            
            <div className="space-y-6 mb-8">
              <Card className="border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-accent mb-2">Email</h4>
                      <a 
                        href="mailto:fgacarolinawanderley@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        fgacarolinawanderley@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-accent mb-2">WhatsApp</h4>
                      <a 
                        href="https://wa.me/5583991069133"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +55 (83) 9 9106-9133
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-accent mb-2">Endereço</h4>
                      <p className="text-muted-foreground">
                        Avenida Piauí, 445<br />
                        Estados, João Pessoa - PB<br />
                        CEP: 58030-330
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <Card className="border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6524759654457!2d-34.83941628573445!3d-7.059751194935469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839f0bd7c35%3A0x8e2b9e6e1de1d4c6!2sAv.%20Piau%C3%AD%2C%20445%20-%20Estados%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058030-330!5e0!3m2!1spt!2sbr!4v1694123456789!5m2!1spt!2sbr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-medium text-accent mb-8">
              Envie uma mensagem
            </h3>
            
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-soft">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accent mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-border focus:border-primary"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-border focus:border-primary"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="border-border focus:border-primary min-h-[120px]"
                      placeholder="Como posso ajudá-lo(a)?"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;