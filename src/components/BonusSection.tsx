
import React from 'react';
import { Users, FileText, Zap, Calendar, Award } from "lucide-react";

interface BonusItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const BonusItem: React.FC<BonusItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 bg-neuro-lightPurple/30 rounded-lg text-neuro-purple h-fit">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        {description && <p className="text-neuro-gray">{description}</p>}
      </div>
    </div>
  );
};

const BonusSection = () => {
  const bonusItems = [
    {
      icon: <Users size={24} />,
      title: "Grupo VIP de RHs visionários",
      description: "uma comunidade ativa que compartilha novidades, vagas, ferramentas e insights toda semana."
    },
    {
      icon: <FileText size={24} />,
      title: "2 Assistentes de IA prontos pra usar",
      description: "Um que analisa contratos e te mostra onde estão os riscos (inclusive naquele contrato de experiência padrão da empresa!). Outro que atua como seu Copywriter pessoal: te ajuda a escrever posts, e-mails, feedbacks, respostas difíceis e muito mais."
    },
    {
      icon: <Zap size={24} />,
      title: "Kit de Prompts Poderosos",
      description: "10 prompts prontos e testados que vão transformar como você lida com: clima organizacional, modelo demissional, pesquisas, feedbacks e outras tarefas que ninguém gosta de fazer."
    },
    {
      icon: <Award size={24} />,
      title: "Atualizações contínuas",
      description: "Cada nova função do ChatGPT será explicada em português claro, com exemplos práticos e direto ao ponto."
    },
    {
      icon: <Calendar size={24} />,
      title: "Convite para um Evento Secreto (e gratuito) em Dezembro",
      description: "uma imersão online exclusiva com quem tá usando IA no RH pra valer — sem enrolação."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-neuro-blue/5 to-neuro-purple/5 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-neuro-lightPurple/30 rounded-lg text-neuro-purple mb-4">
            <Award size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Bônus exclusivos
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {bonusItems.map((item, index) => (
            <BonusItem 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
