
import React from 'react';
import { Users, Briefcase, User } from "lucide-react";

interface AudienceTypeProps {
  icon: React.ReactNode;
  title: string;
}

const AudienceType: React.FC<AudienceTypeProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 hover:bg-neuro-lightPurple/10 transition-colors rounded-xl">
      <div className="w-16 h-16 bg-neuro-lightPurple/30 rounded-full flex items-center justify-center mb-4">
        <div className="text-neuro-purple">
          {icon}
        </div>
      </div>
      <h3 className="font-medium text-lg text-center">{title}</h3>
    </div>
  );
};

const AudienceSection = () => {
  const audienceTypes = [
    { title: "Recrutadores", icon: <Users size={28} /> },
    { title: "Analistas de RH", icon: <User size={28} /> },
    { title: "Gestores", icon: <Briefcase size={28} /> },
    { title: "Líderes", icon: <Users size={28} /> },
    { title: "Assistentes", icon: <User size={28} /> },
    { title: "Consultores", icon: <Briefcase size={28} /> },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Para quem é este curso?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {audienceTypes.map((type, index) => (
            <AudienceType key={index} title={type.title} icon={type.icon} />
          ))}
        </div>
        
        <p className="text-xl text-center mt-12 font-medium">
          Se você trabalha com gente e quer usar IA para se destacar, esse curso foi feito pra você.
        </p>
      </div>
    </section>
  );
};

export default AudienceSection;
