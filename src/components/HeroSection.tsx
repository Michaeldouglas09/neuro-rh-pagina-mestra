
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
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 font-medium px-4 py-2 rounded-full mb-6 border border-red-200">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Curso Presencial • Apenas 12 Vagas • 30/08/2025
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-neuro-purple">NeuroRH:</span> <span className="text-neuro-dark">Domine a IA e vire referência no seu RH</span> <span className="text-3xl md:text-4xl lg:text-5xl text-neuro-dark">em apenas 1 dia</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Aprenda como <strong>reduzir 70% do tempo</strong> em processos de RH usando ChatGPT e outras ferramentas de IA. Saia na frente antes que seus concorrentes descubram!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="btn-primary text-lg group"
                onClick={scrollToPrice}
              >
                Garantir minha vaga por R$197 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-neuro-purple text-neuro-purple hover:bg-neuro-purple/10 text-lg"
                onClick={scrollToPrice}
              >
                Ver programa completo
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
              💳 Parcelamento em até 12x | 🎯 Garantia de 7 dias | 📧 Materiais inclusos
            </p>
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
