
import React from 'react';

const AuthorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-neuro-lightGray to-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="relative z-10 h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/2e1f6f69-650a-4d9e-b98e-a7a8210a94a9.png" 
                  alt="Foto do Instrutor" 
                  className="w-full h-full object-contain" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-4 left-4 z-20 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Michael Douglas</h3>
                <p className="text-neuro-lightPurple">Especialista em IA para RH</p>
              </div>
              
              <div className="absolute top-10 -right-5 w-24 h-24 bg-neuro-purple rounded-full opacity-25"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-neuro-blue rounded-full opacity-15"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neuro-dark">
              Quem vai te ensinar a dominar a IA no RH
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Com mais de 10 anos de experiência na área de Recursos Humanos e especialista em transformação digital, Michael Douglas tem ajudado dezenas de profissionais e empresas a integrar tecnologias de IA em seus processos de RH.
              </p>
              
              <p>
                Atua como RH no maior programa de microcrédito da américa latina, é especialista em RH com certificação de IA da Amazon (AWS). Especialista em desenvolvimento de liderança e treinamento prático, combinando tecnologia com práticas de RH centradas no ser humano.
              </p>
              
              <p>
                Eleito como Jovem Talento de RH em 2023 pela TOP OF MIND RH a nível Brasil. Facilitador dos cursos de Processo Seletivo do portal "Na Prática" (Antiga Fundação Estudar).
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-neuro-dark">Resultados que você pode esperar:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Redução de 70% no tempo gasto em triagem de currículos</li>
                  <li>Automação de 80% dos processos administrativos</li>
                  <li>Aumento de 50% na satisfação das lideranças com o RH</li>
                  <li>Impacto direto nos resultados de negócio da empresa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
