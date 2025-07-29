
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Péricles Vilela Santos</h3>
            <p className="text-gray-400 mb-6">
              Contador especializado em contabilidade, fiscal, trabalhista e legalização. Atendimento com ética, clareza e pontualidade.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/periclesvilela" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/periclesvilelacontador" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Contabilidade</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Fiscal</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Trabalhista</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Legalização</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Consultoria Empresarial</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Planejamento Tributário</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <p>(11) 4616-8357</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <p>periclesvilela@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Rua da Mooca, 1202 - Mooca</p>
                  <p>São Paulo - SP, 03103-001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Péricles Vilela Santos - Contador. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido por MonteSite</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
