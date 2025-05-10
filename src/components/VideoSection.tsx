
import React from 'react';
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neuro-lightGray">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neuro-dark mb-4">
            Transforme seu RH com Inteligência Artificial
          </h2>
          <p className="text-lg text-gray-700">
            Veja como a IA pode mudar completamente seu dia a dia nos processos de RH e coloque você à frente no mercado
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-r from-neuro-purple to-neuro-blue rounded-2xl p-1">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <img 
                src="/lovable-uploads/e449320a-d6b4-4d82-983a-776501f8a9eb.png"
                alt="Palestrante NeuroRH" 
                className="w-full h-full object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
