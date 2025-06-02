
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

interface FloatingCTAProps {
  scrollToPrice: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ scrollToPrice }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Mostrar quando rolar 30% da página e não estiver próximo do final
      const shouldShow = scrolled > windowHeight * 0.3 && 
                        scrolled < documentHeight - windowHeight * 1.5;
      
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleCTAClick = () => {
    scrollToPrice();
    setIsDismissed(true);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg p-4 animate-slide-up">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-neuro-purple font-medium mb-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Últimas vagas disponíveis
            </div>
            <p className="font-semibold text-neuro-dark">
              Garante sua vaga no NeuroRH por apenas R$197
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              onClick={handleCTAClick}
              className="bg-neuro-purple hover:bg-neuro-darkPurple text-white px-6 py-3 font-medium group"
            >
              Quero minha vaga
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
            
            <button
              onClick={handleDismiss}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
