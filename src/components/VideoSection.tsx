
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Video } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neuro-lightGray">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-neuro-purple/10 text-neuro-purple font-medium px-4 py-2 rounded-full mb-4">
            <Video size={20} />
            Apresentação Especial
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neuro-dark mb-4">
            Veja Como a IA Vai Transformar Seu RH
          </h2>
          <p className="text-lg text-gray-700">
            Assista Michael Douglas explicar como você pode economizar 70% do seu tempo em processos de RH usando IA
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-r from-neuro-purple to-neuro-blue rounded-2xl p-1">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Placeholder para o vídeo - remover quando adicionar vídeo real */}
              <div className="text-center text-white z-10">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Play className="text-white ml-1" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vídeo de Apresentação</h3>
                <p className="text-gray-300">Em breve: Demonstração prática das ferramentas</p>
              </div>
              
              {/* Quando adicionar o vídeo real, substitua o conteúdo acima por: */}
              {/* 
              <video 
                controls 
                poster="/path-to-video-thumbnail.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              */}
              
              <img 
                src="/lovable-uploads/e449320a-d6b4-4d82-983a-776501f8a9eb.png"
                alt="Michael Douglas - Instrutor NeuroRH" 
                className="w-full h-full object-contain opacity-50"
              />
            </div>
          </div>
          
          {/* Stats abaixo do vídeo */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="text-2xl font-bold text-neuro-purple">500+</div>
              <div className="text-sm text-gray-600">Profissionais Treinados</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="text-2xl font-bold text-neuro-purple">95%</div>
              <div className="text-sm text-gray-600">Taxa de Satisfação</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="text-2xl font-bold text-neuro-purple">70%</div>
              <div className="text-sm text-gray-600">Economia de Tempo</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="text-2xl font-bold text-neuro-purple">8h</div>
              <div className="text-sm text-gray-600">Treinamento Intensivo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
