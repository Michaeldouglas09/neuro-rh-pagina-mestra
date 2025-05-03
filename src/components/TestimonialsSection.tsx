
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  isActive: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, title, isActive }) => {
  return (
    <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 h-0'}`}>
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg max-w-3xl mx-auto relative">
        <div className="text-6xl text-neuro-purple absolute top-4 left-4 opacity-20">"</div>
        <p className="text-lg md:text-xl mb-8 pt-6 relative z-10">{quote}</p>
        <div>
          <p className="font-semibold text-neuro-dark">{author}</p>
          <p className="text-neuro-gray">{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Eu achava que IA era coisa de TI. Depois desse curso, virei referência de inovação no meu time de RH.",
      author: "Juliana A.",
      title: "Analista de RH",
    },
    {
      quote: "O assistente de contrato me salvou de um baita erro em uma cláusula. Valeu cada centavo!",
      author: "Rodrigo M.",
      title: "Coordenador de Gente & Gestão",
    },
    {
      quote: "Nunca mais fiquei travada na hora de escrever um feedback ou criar uma pesquisa de clima. Agora eu tenho um copiloto!",
      author: "Vanessa L.",
      title: "Business Partner",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que dizem nossos alunos
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-neuro-purple' : 'bg-neuro-lightPurple'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
