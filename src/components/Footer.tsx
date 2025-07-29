
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Informações da empresa */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Péricles Vilela Santos</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Contador especializado em contabilidade, fiscal, trabalhista e legalização. Atendimento com ética, clareza e pontualidade.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/periclesvilela" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/periclesvilelacontador" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contabilidade</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Fiscal</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Trabalhista</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Legalização</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Consultoria Empresarial</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Planejamento Tributário</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start group">
                <div className="w-6 h-6 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <a href="tel:+551146168357" className="hover:text-white transition-colors">
                    (11) 4616-8357
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <a href="mailto:periclesvilela@gmail.com" className="hover:text-white transition-colors">
                    periclesvilela@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p className="leading-relaxed">
                    Rua da Mooca, 1202 - Mooca<br />
                    São Paulo - SP, 03103-001
                  </p>
                </div>
              </li>
            </ul>
            
            {/* Portal do Cliente */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <a 
                href="https://site.projetusti.com.br/site/page/32165" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Portal do Cliente
              </a>
            </div>
          </div>
        </div>
        
        {/* Rodapé inferior */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; {currentYear} Péricles Vilela Santos - Contador. Todos os direitos reservados.</p>
            <p>Desenvolvido por MonteSite</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
