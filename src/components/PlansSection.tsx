
import PlanCard from './PlanCard';
import AnimatedSection from './AnimatedSection';

const PlansSection = () => {
  const plans = [
    {
      title: "Contabilidade Essencial",
      price: "Consulte",
      description: "Serviços básicos de contabilidade para pequenas empresas",
      features: [
        "Registro e escrituração contábil",
        "Emissão de livros contábeis",
        "Entrega de arquivos digitais RFB",
        "Suporte básico por e-mail",
        "Relatórios mensais"
      ],
      isPopular: false
    },
    {
      title: "Fiscal Completo",
      price: "Consulte",
      description: "Gestão fiscal completa para sua empresa",
      features: [
        "Registro e escrituração fiscal",
        "Emissão de guias e impostos",
        "Arquivos digitais SEF e RFB",
        "Planejamento tributário",
        "Suporte telefônico",
        "Consultoria fiscal mensal"
      ],
      isPopular: true
    },
    {
      title: "Trabalhista Premium",
      price: "Consulte",
      description: "Gestão completa de departamento pessoal",
      features: [
        "Processamento de folha de pagamento",
        "Emissão de guias trabalhistas",
        "Arquivos INSS, CEF, RFB e MTB",
        "Admissões e demissões",
        "Férias e 13º salário",
        "Atendimento prioritário"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="planos" className="bg-white py-24">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Planos</h2>
          <p className="section-subtitle">
            Escolha o plano que melhor se adapta às necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.title} animation="fade-in-up" delay={index * 150}>
              <PlanCard 
                title={plan.title} 
                price={plan.price} 
                description={plan.description} 
                features={plan.features} 
                isPopular={plan.isPopular} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">Legalização e Terceiro Setor</h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Oferecemos também serviços especializados em legalização de empresas 
            (abertura, encerramento, alterações) e assessoria completa para organizações 
            do terceiro setor, incluindo obtenção de certidões e cadastros necessários.
          </p>
          <a 
            href="https://wa.me/5511146168357" 
            className="btn-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento Personalizado
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
