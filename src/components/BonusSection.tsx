
import React from 'react';
import { Users, FileText, Zap, Calendar, Award, Scale, Pen, Brain, Rocket, Award as Certificate } from "lucide-react";

interface BonusItemProps {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description?: string;
}

const BonusItem: React.FC<BonusItemProps> = ({ icon, emoji, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 bg-neuro-lightPurple/30 rounded-lg text-neuro-purple h-fit flex flex-col items-center">
        <span className="text-2xl mb-1">{emoji}</span>
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
      emoji: "🎯",
      title: "Grupo Colaborativo Exclusivo",
      description: "Onde você vai trocar ideias com outros RHs como um super time de heróis da produtividade."
    },
    {
      icon: <Scale size={24} />,
      emoji: "⚖️",
      title: "Assistente de Análise de Contratos",
      description: "Porque ninguém merece um contrato cheio de surpresas, né?"
    },
    {
      icon: <Pen size={24} />,
      emoji: "✍️",
      title: "Assistente Copywriter",
      description: "Já imaginou ter um assistente pessoal que sabe o que você quer escrever antes de você mesmo pensar?"
    },
    {
      icon: <Brain size={24} />,
      emoji: "🧠",
      title: "10 Prompts Estratégicos",
      description: "Crie pesquisas de clima, feedbacks estruturados, cartas de demissão, avaliações de desempenho e mais — tudo pronto para usar."
    },
    {
      icon: <Rocket size={24} />,
      emoji: "🚀",
      title: "Atualização Contínua",
      description: "Sempre que a IA ganhar uma nova habilidade, você será o primeiro a saber!"
    },
    {
      icon: <Calendar size={24} />,
      emoji: "🎉",
      title: "Evento Exclusivo em Dezembro",
      description: "Acesso VIP para aprender mais com especialistas e trocar experiências!"
    },
    {
      icon: <Certificate size={24} />,
      emoji: "📜",
      title: "Certificado de conclusão",
      description: "Comprove seu conhecimento em IA para RH com um certificado oficial que você pode adicionar ao seu currículo e LinkedIn."
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
            Bônus poderosos <span className="text-neuro-purple">(cada um vale o preço do curso!)</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {bonusItems.map((item, index) => (
            <BonusItem 
              key={index}
              icon={item.icon}
              emoji={item.emoji}
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
