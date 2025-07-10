
import React from 'react';
import { Button } from "@/components/ui/button";
import { Gift, Shield } from "lucide-react";

const PricingCard: React.FC = () => {
  return (
    <div className="bg-white text-neuro-dark rounded-3xl p-8 shadow-lg">
      <div className="text-center mb-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <p className="text-red-600 font-medium text-sm">🔥 Oferta por tempo limitado</p>
        </div>
        
        <p className="text-lg font-medium text-neuro-purple">Valor do Investimento</p>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-lg text-gray-400 line-through">R$397</span>
          <p className="text-4xl font-bold text-neuro-purple">R$127,90</p>
        </div>
        <p className="text-sm text-gray-600">50% OFF - Apenas para as primeiras 12 vagas</p>
      </div>
      
      <div className="border-t border-gray-200 my-6"></div>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-medium">Duração:</span>
          <span>1 dia intensivo (8h)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Inclui:</span>
          <span>Material + Certificado + Coffee break</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Bônus:</span>
          <span>Prompts + GPT personalizado</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Garantia:</span>
          <span className="flex items-center gap-1">
            <Shield size={16} className="text-green-600" />
            7 dias
          </span>
        </div>
      </div>
      
      <a 
        href="https://doity.com.br/neuro-rh--recife" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full"
      >
        <Button className="w-full bg-neuro-purple hover:bg-neuro-darkPurple text-lg py-6 group">
          <Gift className="mr-2" size={20} />
          Garantir vaga com 50% OFF
        </Button>
      </a>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        💳 À vista ou em até 12x no cartão | 🔒 Pagamento 100% seguro
      </p>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
        <p className="text-green-700 text-sm text-center font-medium">
          ✅ Garantia incondicional de 7 dias ou seu dinheiro de volta
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
