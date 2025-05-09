
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Calendar, MapPin, Clock } from "lucide-react";

interface PriceSectionProps {
  id: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({ id }) => {
  const benefits = [
    "Gerar relatórios em minutos: Porque quem tem tempo para fazer isso manualmente, né? 😉",
    "Triagem de currículos: O ChatGPT vai ser seu assistente pessoal (mais eficiente que qualquer ser humano).",
    "Automatização de processos: Fique mais rápido, inteligente e, claro, mais valioso para a empresa.",
    "Um ano à frente de quem ainda nem começou a pensar em IA"
  ];
  
  const eventDetails = [
    { icon: <Calendar className="text-neuro-purple" />, text: "20 de Junho de 2025" },
    { icon: <MapPin className="text-neuro-purple" />, text: "Hotel Premium - Centro" },
    { icon: <Clock className="text-neuro-purple" />, text: "Das 9h às 18h" }
  ];

  return (
    <section id={id} className="bg-gradient-to-b from-neuro-dark to-black text-white section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Invista no seu futuro profissional
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="bg-gradient-to-br from-neuro-purple/20 to-neuro-blue/20 backdrop-blur-sm rounded-3xl p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Detalhes do Evento</h3>
                <div className="h-1 w-20 bg-neuro-purple mb-4"></div>
                
                <ul className="space-y-4">
                  {eventDetails.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-full">
                        {detail.icon}
                      </div>
                      <span className="text-lg">{detail.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">O que você vai aprender</h3>
                <div className="h-1 w-20 bg-neuro-purple mb-4"></div>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="p-1 mt-1 bg-neuro-lightPurple/30 rounded-full text-neuro-lightPurple">
                        <Check size={16} />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="bg-white text-neuro-dark rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <p className="text-lg font-medium text-neuro-purple">Valor do Investimento</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <p className="text-4xl font-bold">R$197</p>
                </div>
                <p className="text-sm text-gray-600">Vagas limitadas - Turma exclusiva</p>
              </div>
              
              <div className="border-t border-gray-200 my-6"></div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Duração:</span>
                  <span>1 dia intensivo (8h)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Inclui:</span>
                  <span>Material + Certificado</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Bônus:</span>
                  <span>E-book com prompts</span>
                </div>
              </div>
              
              <a 
                href="https://form.jotform.com/251227913997670" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-neuro-purple hover:bg-neuro-darkPurple text-lg py-6">
                  Garanta sua vaga agora
                </Button>
              </a>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                À vista ou em até 12x com juros no cartão via formulário de inscrição
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
