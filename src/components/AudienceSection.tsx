
import React from 'react';
import { Users, Briefcase, User, Award, GraduationCap, UsersRound } from "lucide-react";

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
    { title: "Líderes", icon: <UsersRound size={28} /> },
    { title: "Assistentes", icon: <Award size={28} /> },
    { title: "Consultores", icon: <GraduationCap size={28} /> },
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
          Se você é <strong>recrutador</strong>, <strong>analista</strong> ou <strong>líder de RH</strong>, esse curso vai fazer você se sentir como o herói do escritório. Já pensou em eliminar horas de trabalho manual com o poder da inteligência artificial? Pois é, esse curso é pra você! 💡
        </p>
      </div>
    </section>
  );
};

export default AudienceSection;
