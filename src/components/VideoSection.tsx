
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
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
              {/* Replace with actual video player when ready */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  className="h-16 w-16 rounded-full bg-white hover:bg-neuro-purple hover:scale-110 transition-all duration-300"
                  variant="outline"
                >
                  <Play className="h-8 w-8 ml-1 text-neuro-purple hover:text-white" />
                </Button>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <img 
                src="/lovable-uploads/a91ebfce-80a4-4d29-8418-34c7f88815e4.png"
                alt="Palestrante NeuroRH" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
