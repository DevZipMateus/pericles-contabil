
import { CheckCircle, Award, Users, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Ética Profissional',
      description: 'Respeitamos as normas do CFC'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção especial'
    },
    {
      icon: Award,
      title: 'Qualidade Comprovada',
      description: 'Mais de 15 anos de experiência'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Conheça nossa história e nosso compromisso com a excelência em serviços contábeis
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Péricles Vilela Santos - Contador Profissional" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full">
              Nossa Missão
            </span>
            <h3 className="text-3xl font-bold">Compromisso com a sua empresa</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold text-primary mb-2">Missão</h4>
              <p className="text-gray-700">
                Atender aos nossos clientes com ética, clareza e pontualidade.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold text-primary mb-2">Visão</h4>
              <p className="text-gray-700">
                Tornar-se a longo prazo uma das maiores Consultorias Contábil, Empresarial e 
                Trabalhista da Região Metropolitana do Estado de São Paulo.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold text-primary mb-2">Valores</h4>
              <p className="text-gray-700">
                Trabalhar com ética profissional, respeitando e pondo em prática as Normas e 
                Resoluções estabelecidas pelo Conselho Federal de Contabilidade.
              </p>
            </div>
            
            <a 
              href="https://wa.me/5511974122649" 
              className="btn-primary inline-block mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com o Contador
            </a>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} animation="fade-in-up" delay={index * 100}>
              <div className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
