
import TestimonialCard from './TestimonialCard';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Péricles é um profissional exemplar. Sempre atencioso, pontual e ético em todos os serviços prestados. Recomendo sem reservas!",
      author: "Maria Silva",
      role: "Empresária - Comércio",
      rating: 5
    },
    {
      content: "Excelente contador! Nos ajudou muito com a legalização da nossa empresa e continua prestando um serviço de qualidade excepcional.",
      author: "João Santos",
      role: "Diretor - Indústria",
      rating: 5
    },
    {
      content: "Profissional competente e sempre atualizado. A transparência e clareza no atendimento fazem toda a diferença.",
      author: "Ana Costa",
      role: "Gerente Administrativa",
      rating: 5
    },
    {
      content: "Trabalho com o Péricles há anos e sempre tive total confiança nos serviços prestados. Pontualidade e ética são seus pontos fortes.",
      author: "Carlos Oliveira",
      role: "Empresário - Prestação de Serviços",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.author} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <TestimonialCard 
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Junte-se aos nossos clientes satisfeitos e transforme sua contabilidade
          </p>
          <a 
            href="https://wa.me/5511146168357" 
            className="btn-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Atendimento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
