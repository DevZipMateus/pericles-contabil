
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Fale Conosco</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Telefone</h4>
                    <a 
                      href="tel:+5511146168357" 
                      className="text-gray-600 hover:text-primary transition-colors text-lg"
                    >
                      (11) 4616-8357
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">E-mail</h4>
                    <a 
                      href="mailto:periclesvilela@hotmail.com" 
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      periclesvilela@hotmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Endereço</h4>
                    <p className="text-gray-600">Avenida das Nascentes, 280</p>
                    <p className="text-gray-600">São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">WhatsApp</h4>
                    <a 
                      href="https://wa.me/5511146168357" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      (11) 4616-8357
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Horário de Atendimento</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium">Segunda a Sexta</span>
                  <span className="text-gray-600">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium">Sábados</span>
                  <span className="text-gray-600">8h às 12h</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Domingos</span>
                  <span className="text-gray-600">Fechado</span>
                </div>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-2">Atendimento de Emergência</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Para situações urgentes, entre em contato via WhatsApp. 
                  Responderemos o mais breve possível.
                </p>
                <a 
                  href="https://wa.me/5511146168357" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary">Pronto para começar?</h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="tel:+5511146168357" 
                className="btn-primary"
              >
                Ligar Agora
              </a>
              <a 
                href="https://wa.me/5511146168357" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:periclesvilela@hotmail.com" 
                className="btn-secondary"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
