
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Strikethrough } from "lucide-react";

interface PriceSectionProps {
  id: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({ id }) => {
  const benefits = [
    "Aulas práticas e diretas ao ponto",
    "Ferramentas prontas pra aplicar no trabalho",
    "Conhecimento que se paga em resultados imediatos",
    "Um ano à frente de quem ainda nem começou a pensar em IA"
  ];

  return (
    <section id={id} className="bg-neuro-dark text-white section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Quanto custa sair na frente?
        </h2>
        
        <p className="text-xl text-center max-w-2xl mx-auto mb-12">
          A pergunta não é quanto custa. A pergunta certa é:
          <span className="block mt-4 font-medium text-2xl">Quanto custa continuar fazendo tudo do jeito antigo?</span>
        </p>
        
        <div className="bg-gradient-to-br from-neuro-purple/20 to-neuro-blue/20 rounded-3xl p-6 md:p-12 max-w-4xl mx-auto">
          <p className="text-xl mb-6">
            O NeuroRH não é só mais um curso.
            <span className="block font-medium">É o que separa os RHs operacionais dos RHs que lideram a transformação digital.</span>
          </p>
          
          <p className="text-lg mb-8">
            E por apenas <span className="font-bold text-neuro-lightPurple">R$197</span> (menos do que um jantar de pizza), você adquire conhecimento que pode usar todos os dias no trabalho. Este curso se paga rapidamente através dos resultados que você vai entregar.
          </p>
          
          <ul className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="p-1 bg-neuro-lightPurple/30 rounded-full text-neuro-lightPurple">
                  <Check size={16} />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3">
                <div className="relative">
                  <p className="text-gray-400 text-2xl md:text-3xl font-medium opacity-80 relative">
                    R$497
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Strikethrough className="text-gray-400" />
                    </span>
                  </p>
                </div>
                <p className="text-3xl md:text-4xl font-bold">R$197</p>
              </div>
              <p className="text-neuro-lightPurple">à vista ou em até 12x com juros no cartão via formulário de inscrição.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://form.jotform.com/251227913997670" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="btn-primary text-lg w-full sm:w-auto">
                  Quero acesso agora
                </Button>
              </a>
              
              <a 
                href="https://form.jotform.com/251227913997670" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-lg w-full sm:w-auto">
                  Sim, quero sair na frente!
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
