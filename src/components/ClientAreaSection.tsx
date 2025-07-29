
import { ExternalLink, User, FileText, Calendar, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ClientAreaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 skew-x-12 transform origin-top"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-200/30 rounded-full filter blur-xl"></div>
      </div>

      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full mb-4">
              Acesso Exclusivo
            </span>
            <h2 className="section-title">Área do Cliente</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Acesse sua área exclusiva para acompanhar documentos, relatórios e se comunicar diretamente conosco
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left" className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Documentos e Relatórios</h3>
                  <p className="text-gray-600">Acesse todos os seus documentos contábeis, fiscais e trabalhistas em um só lugar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Agenda e Prazos</h3>
                  <p className="text-gray-600">Acompanhe prazos importantes e agende reuniões diretamente pela plataforma</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comunicação Direta</h3>
                  <p className="text-gray-600">Tire dúvidas e se comunique conosco através de mensagens seguras</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" delay={200}>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <User className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Portal Exclusivo</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Entre na sua área do cliente e tenha controle total sobre todos os aspectos da sua contabilidade
              </p>
              
              <a 
                href="https://connect.calima.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <User className="h-5 w-5" />
                Acessar Área do Cliente
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-sm text-gray-500 mt-4">
                Acesso seguro e protegido
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center mt-16" delay={400}>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
            <p className="text-gray-600 mb-4">
              <strong>Primeiro acesso?</strong> Entre em contato conosco para receber suas credenciais
            </p>
            <a 
              href="https://wa.me/5511974122649" 
              className="btn-secondary inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Credenciais
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClientAreaSection;
