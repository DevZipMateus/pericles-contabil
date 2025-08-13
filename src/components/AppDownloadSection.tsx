import { Smartphone, Download, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AppDownloadSection = () => {
  return (
    <section id="app" className="py-16 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="grid grid-cols-8 gap-4 opacity-20">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
            <Smartphone className="h-4 w-4" />
            Baixe Nosso App
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gerencie sua Contabilidade
            <br />
            <span className="text-white/90">na Palma da Mão</span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Tenha acesso completo aos seus dados contábeis, documentos e relatórios 
            em qualquer lugar, a qualquer momento. Simples, rápido e seguro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Google Play Store Button */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.periclesvilelacontabilidade"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:scale-105 min-w-[200px]"
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-600 p-2 rounded-lg">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-600">Baixar no</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>

            {/* App Features */}
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-300" />
                <Star className="h-4 w-4 fill-current text-yellow-300" />
                <Star className="h-4 w-4 fill-current text-yellow-300" />
                <Star className="h-4 w-4 fill-current text-yellow-300" />
                <Star className="h-4 w-4 fill-current text-yellow-300" />
              </div>
              <span className="text-sm">Grátis • Seguro</span>
            </div>
          </div>

          {/* App Preview Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={200} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Documentos</h3>
                <p className="text-white/80 text-sm">
                  Acesse todos os seus documentos contábeis de forma organizada
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={400} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Relatórios</h3>
                <p className="text-white/80 text-sm">
                  Visualize relatórios financeiros atualizados em tempo real
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={600} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Suporte</h3>
                <p className="text-white/80 text-sm">
                  Comunique-se diretamente com nossa equipe pelo app
                </p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AppDownloadSection;