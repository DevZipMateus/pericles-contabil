import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const LocationSection = () => {
  return (
    <section id="localização" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossa Localização</h2>
          <p className="section-subtitle">
            Venha nos visitar ou entre em contato para agendar uma consulta
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="space-y-6">
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
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Telefone</h4>
                    <a 
                      href="tel:+5511974122649" 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      (11) 9 7412-2649
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
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábados: 8h às 12h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-medium mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/periclesvilela" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://www.instagram.com/periclesvilelacontador" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <div className="glass-card rounded-xl p-2 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.094!2d-46.5730588!3d-23.5982542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d7a5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sAvenida%20das%20Nascentes%2C%20280%20-%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem', minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - Péricles Vilela Santos Contador"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
