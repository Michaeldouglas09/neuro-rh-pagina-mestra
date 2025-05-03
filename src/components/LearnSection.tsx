
import React from 'react';
import { TrendingUp, FileText } from "lucide-react";

interface LearnItemProps {
  icon: React.ReactNode;
  text: string;
}

const LearnItem: React.FC<LearnItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-start gap-4 p-4">
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
      text: "Como usar o ChatGPT de forma estratégica no dia a dia do RH",
      icon: <TrendingUp size={24} />,
    },
    {
      text: "Criar relatórios em minutos (e com cara de relatório caro!)",
      icon: <TrendingUp size={24} />,
    },
    {
      text: "Automatizar tarefas chatas (e ganhar tempo de verdade)",
      icon: <TrendingUp size={24} />,
    },
    {
      text: "Ranquear currículos com eficiência e inteligência",
      icon: <TrendingUp size={24} />,
    },
    {
      text: "Reduzir o tempo de processos seletivos e aumentar a qualidade",
      icon: <TrendingUp size={24} />,
    },
    {
      text: "Produzir textos, feedbacks e respostas com o apoio da IA",
      icon: <FileText size={24} />,
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
      </div>
    </section>
  );
};

export default LearnSection;
