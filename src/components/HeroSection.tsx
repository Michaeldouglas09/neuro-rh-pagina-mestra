
import React from 'react';
import { Button } from "@/components/ui/button";
import NeuroRHLogo from './NeuroRHLogo';
import LeadForm from './LeadForm';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToPrice: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ scrollToPrice }) => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-neuro-purple/10 text-neuro-purple font-medium px-4 py-2 rounded-full mb-6">
              Curso Presencial • Turma Limitada
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neuro-dark">
              <span className="text-neuro-purple">NeuroRH: O Curso de IA para RHs <span className="text-3xl md:text-4xl lg:text-5xl">Que querem sair na frente</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10">
              Domine a IA no RH antes que o mercado decida por você. Aprenda como usar ChatGPT e outras ferramentas de IA para transformar processos de RH em algo estratégico, rápido e inteligente!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="btn-primary text-lg group"
                onClick={scrollToPrice}
              >
                Quero garantir minha vaga <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-neuro-purple text-neuro-purple hover:bg-neuro-purple/10 text-lg"
                onClick={scrollToPrice}
              >
                Ver detalhes do treinamento
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center mb-4">
                  <NeuroRHLogo size="md" className="animate-float" />
                </div>
                
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
