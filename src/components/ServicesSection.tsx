
import { Calculator, FileText, Users, Building, PieChart, ClipboardList } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: 'CONTABILIDADE',
      description: 'Registro, Escrituração e Emissão dos Livros Contábeis. Entrega dos Arquivos Digitais da RFB.'
    },
    {
      icon: FileText,
      title: 'FISCAL',
      description: 'Registro, Escrituração e Emissão dos Livros Fiscais. Emissão de Guias, Geração de Impostos e Entrega dos Arquivos Digitais da SEF e RFB.'
    },
    {
      icon: Users,
      title: 'TRABALHISTA',
      description: 'Processamento da Folha de Pagamento. Emissão de Guias. Geração de Impostos e Entrega dos Arquivos Digitais para o INSS, CEF, RFB e MTB.'
    },
    {
      icon: Building,
      title: 'LEGALIZAÇÃO',
      description: 'Abertura, Encerramento, Alteração e Regularização de Empresas. Alteração e Baixa das Inscrições nos Órgãos Públicos. Obtenção de Certidões Negativas.'
    },
    {
      icon: PieChart,
      title: 'TERCEIRO SETOR',
      description: 'Abertura, Encerramento, Alteração. Atas, Editais, Estatutos, documentação necessária para obtenção de Certidões de Interesse Social nos municípios, Cadastro de Entidades do Estado de São Paulo (CEE) e Cebas.'
    },
    {
      icon: ClipboardList,
      title: 'CONSULTORIA EMPRESARIAL',
      description: 'Análise financeira, planejamento estratégico e apoio na tomada de decisões para o crescimento sustentável do seu negócio.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas para atender todas as necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <a 
            href="https://wa.me/5511974122649" 
            className="btn-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicite um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
