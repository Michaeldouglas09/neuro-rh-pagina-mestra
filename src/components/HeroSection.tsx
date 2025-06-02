
import React from 'react';
import { Button } from "@/components/ui/button";
import NeuroRHLogo from './NeuroRHLogo';
import LeadForm from './LeadForm';
import { ArrowRight, Users, Clock, TrendingUp } from 'lucide-react';

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
              Curso Presencial • Apenas 25 Vagas • 28/06/2025
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neuro-dark">
              <span className="text-neuro-purple">NeuroRH: Domine a IA</span> e vire referência no seu RH <span className="text-3xl md:text-4xl lg:text-5xl">em apenas 1 dia</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Aprenda como <strong>reduzir 70% do tempo</strong> em processos de RH usando ChatGPT e outras ferramentas de IA. Saia na frente antes que seus concorrentes descubram!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center gap-1 text-neuro-purple mb-1">
                  <Users size={16} />
                  <span className="font-bold text-lg">500+</span>
                </div>
                <span className="text-sm text-gray-600">Profissionais Treinados</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center gap-1 text-neuro-purple mb-1">
                  <Clock size={16} />
                  <span className="font-bold text-lg">8h</span>
                </div>
                <span className="text-sm text-gray-600">Treinamento Intensivo</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm col-span-2 md:col-span-1">
                <div className="flex items-center justify-center gap-1 text-neuro-purple mb-1">
                  <TrendingUp size={16} />
                  <span className="font-bold text-lg">95%</span>
                </div>
                <span className="text-sm text-gray-600">Satisfação</span>
              </div>
            </div>
            
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
