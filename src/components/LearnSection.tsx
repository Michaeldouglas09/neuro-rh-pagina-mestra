
import React from 'react';
import { FileText, TrendingUp, Users, Clock, Zap, Target } from "lucide-react";

interface LearnItemProps {
  icon: React.ReactNode;
  text: string;
}

const LearnItem: React.FC<LearnItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="p-2 bg-neuro-lightPurple/30 rounded-lg text-neuro-purple flex-shrink-0">
        {icon}
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

const LearnSection = () => {
  const learnItems = [
    {
      text: "Como usar o ChatGPT para gerar relatórios em minutos",
      icon: <FileText size={24} />,
    },
    {
      text: "Como analisar e classificar currículos usando IA",
      icon: <TrendingUp size={24} />,
    },
    {
      text: "Como criar processos seletivos mais inteligentes",
      icon: <Users size={24} />,
    },
    {
      text: "Como automatizar tarefas repetitivas de RH",
      icon: <Clock size={24} />,
    },
    {
      text: "Usar prompts prontos para tarefas cotidianas de RH",
      icon: <Zap size={24} />,
    },
  ];

  const expectedResults = [
    "Redução de 70% no tempo gasto em triagem de currículos",
    "Automação de 80% dos processos administrativos",
    "Aumento de 50% na satisfação das lideranças com o RH",
    "Impacto direto nos resultados de negócio da empresa"
  ];

  return (
    <section className="bg-neuro-purple section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          O que você vai aprender
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {learnItems.map((item, index) => (
            <LearnItem key={index} text={item.text} icon={item.icon} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-neuro-lightPurple/30 rounded-lg text-neuro-purple">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-neuro-dark">Resultados que você pode esperar:</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {expectedResults.map((result, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-neuro-lightGray/50 rounded-lg">
                <div className="w-2 h-2 bg-neuro-purple rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{result}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-12 text-lg font-medium text-white">
          Tudo isso explicado passo a passo, com exemplos práticos e aplicações reais.
        </p>
      </div>
    </section>
  );
};

export default LearnSection;
