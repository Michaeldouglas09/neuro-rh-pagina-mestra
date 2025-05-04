
import React from 'react';
import { FileText, TrendingUp, Users, Clock, Zap } from "lucide-react";

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

  return (
    <section className="bg-neuro-lightGray section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que você vai aprender
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {learnItems.map((item, index) => (
            <LearnItem key={index} text={item.text} icon={item.icon} />
          ))}
        </div>

        <p className="text-center mt-12 text-lg font-medium text-neuro-purple">
          Tudo isso explicado passo a passo, com exemplos práticos e aplicações reais.
        </p>
      </div>
    </section>
  );
};

export default LearnSection;
