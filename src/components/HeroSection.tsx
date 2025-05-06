
import React from 'react';
import { Button } from "@/components/ui/button";
import NeuroRHLogo from './NeuroRHLogo';

interface HeroProps {
  scrollToPrice: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ scrollToPrice }) => {
  return (
    <section className="bg-hero-pattern py-20 md:py-32">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-neuro-purple/10 text-neuro-purple font-medium px-4 py-2 rounded-full mb-6">
              Curso Presencial • 100% prático
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neuro-dark">
              <span className="text-neuro-purple">Use IA no seu RH</span> antes que o mercado te substitua.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10">
              Um curso rápido, prático e acessível para profissionais de RH que querem sair na frente
              e transformar processos em algo estratégico, ágil e inteligente — <span className="font-semibold">mesmo sem conhecimento técnico</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="btn-primary text-lg"
                onClick={scrollToPrice}
              >
                Quero acesso agora
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-neuro-purple text-neuro-purple hover:bg-neuro-purple/10 text-lg"
                onClick={scrollToPrice}
              >
                Sim, quero sair na frente!
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 flex items-center justify-center">
              <NeuroRHLogo size="lg" className="animate-float" />
              <div className="absolute top-4 right-4 w-full h-full bg-neuro-blue/10 rounded-full -z-10 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
