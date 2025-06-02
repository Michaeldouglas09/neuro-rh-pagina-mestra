
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Calendar, MapPin, Clock, Users, Shield, Gift } from "lucide-react";

interface PriceSectionProps {
  id: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({ id }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-28').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "8h de treinamento intensivo com especialista certificado",
    "Material exclusivo: +50 prompts prontos para usar no RH",
    "Certificado de participação reconhecido no mercado",
    "Coffee break + networking com outros profissionais de RH",
    "Suporte via WhatsApp durante 30 dias após o curso",
    "Bônus: GPT personalizado para análise de currículos"
  ];
  
  const eventDetails = [
    { icon: <Calendar className="text-neuro-purple" />, text: "28 de Junho de 2025" },
    { icon: <MapPin className="text-neuro-purple" />, text: "Recruitment - Recursos Humanos" },
    { icon: <Clock className="text-neuro-purple" />, text: "Das 9h às 18h (8h de conteúdo)" },
    { icon: <Users className="text-neuro-purple" />, text: "Máximo 12 participantes" }
  ];

  return (
    <section id={id} className="bg-gradient-to-b from-neuro-dark to-black text-white section-padding">
      <div className="container-custom">
        {/* Urgency Timer */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            ÚLTIMAS VAGAS DISPONÍVEIS
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-3">Inscrições encerram em:</h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center">
                <div className="bg-neuro-purple rounded-lg p-2">
                  <span className="text-xl font-bold">{timeLeft.days}</span>
                </div>
                <span className="text-xs mt-1 block">Dias</span>
              </div>
              <div className="text-center">
                <div className="bg-neuro-purple rounded-lg p-2">
                  <span className="text-xl font-bold">{timeLeft.hours}</span>
                </div>
                <span className="text-xs mt-1 block">Horas</span>
              </div>
              <div className="text-center">
                <div className="bg-neuro-purple rounded-lg p-2">
                  <span className="text-xl font-bold">{timeLeft.minutes}</span>
                </div>
                <span className="text-xs mt-1 block">Min</span>
              </div>
              <div className="text-center">
                <div className="bg-neuro-purple rounded-lg p-2">
                  <span className="text-xl font-bold">{timeLeft.seconds}</span>
                </div>
                <span className="text-xs mt-1 block">Seg</span>
              </div>
            </div>
          </div>
        </div>

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
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="bg-white text-neuro-dark rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-600 font-medium text-sm">🔥 Oferta por tempo limitado</p>
                </div>
                
                <p className="text-lg font-medium text-neuro-purple">Valor do Investimento</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-400 line-through">R$397</span>
                  <p className="text-4xl font-bold text-neuro-purple">R$197</p>
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
                href="https://pay.kiwify.com.br/oF6ADfU" 
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
