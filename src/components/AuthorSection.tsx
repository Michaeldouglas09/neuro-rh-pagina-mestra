
import React from 'react';
import { Award } from "lucide-react";

const AuthorSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quem criou este curso?
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/b55a4775-4368-4980-b99b-51240957c710.png" 
                alt="Michael Douglas RH" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold">Michael Douglas RH</h3>
                <div className="p-1 bg-neuro-lightPurple/30 rounded-full text-neuro-purple">
                  <Award size={18} />
                </div>
              </div>
              
              <p className="text-lg mb-4">
                Especialista certificado em RH com certificação em IA da Amazon (AWS). 
                Especializado em desenvolvimento de lideranças e treinamentos práticos, 
                combinando tecnologia com práticas de RH centradas no ser humano.
                Eleito Jovem Talento de RH em 2023 pela Top OF Mind RH.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-neuro-lightPurple/30 text-neuro-purple rounded-full text-sm font-medium">
                  Especialista em IA para RH
                </span>
                <span className="px-3 py-1 bg-neuro-lightPurple/30 text-neuro-purple rounded-full text-sm font-medium">
                  Certificação AWS
                </span>
                <span className="px-3 py-1 bg-neuro-lightPurple/30 text-neuro-purple rounded-full text-sm font-medium">
                  +10 anos em RH
                </span>
                <span className="px-3 py-1 bg-neuro-lightPurple/30 text-neuro-purple rounded-full text-sm font-medium">
                  Jovem Talento RH 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
