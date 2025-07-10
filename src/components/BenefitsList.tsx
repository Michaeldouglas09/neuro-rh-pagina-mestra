
import React from 'react';
import { Check } from "lucide-react";

const BenefitsList: React.FC = () => {
  const benefits = [
    "8h de treinamento intensivo com especialista certificado",
    "Material exclusivo: +50 prompts prontos para usar no RH",
    "Certificado de participação reconhecido no mercado",
    "Coffee break + networking com outros profissionais de RH",
    "Suporte via WhatsApp durante 30 dias após o curso",
    "Bônus: GPT personalizado para análise de currículos"
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-2">O que está incluído</h3>
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
  );
};

export default BenefitsList;
