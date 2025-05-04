
import React from 'react';
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Veja o curso em ação
        </h2>
        
        <div className="bg-neuro-lightGray rounded-2xl p-10 max-w-4xl mx-auto aspect-video flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-neuro-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play size={32} className="text-neuro-purple ml-2" />
            </div>
            <p className="text-xl font-medium text-neuro-gray max-w-md mx-auto">
              Prefere ver em vídeo? Em breve você terá um resumo completo do curso e exemplos práticos por aqui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
