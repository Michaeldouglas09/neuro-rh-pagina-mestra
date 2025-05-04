
import React from 'react';
import { Instagram, Mail, Lock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-neuro-dark text-white py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Não perca mais tempo. Transforme seu RH com IA agora.
          </h2>
          <p className="text-lg mb-8">
            A revolução da IA está acontecendo. Ou você lidera essa mudança no RH ou será deixado para trás.
            Invista em você mesmo e destaque-se com conhecimento prático.
          </p>
          <a 
            href="https://form.jotform.com/251227913997670" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="btn-primary text-lg">
              Quero transformar meu RH com IA
            </Button>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">NeuroRH</h2>
            <p className="text-neuro-gray">
              Inteligência Artificial para RHs que querem sair na frente
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="https://form.jotform.com/251227913997670" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neuro-lightPurple hover:text-white transition-colors"
            >
              Inscreva-se no curso
            </a>
            
            <div className="flex items-center gap-2 text-neuro-gray hover:text-white transition-colors">
              <Mail size={16} />
              <a href="mailto:contato@neurorh.com.br">contato@neurorh.com.br</a>
            </div>
            
            <div className="flex items-center gap-2 text-neuro-gray hover:text-white transition-colors">
              <Instagram size={16} />
              <a 
                href="https://instagram.com/neuro.rh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                @neuro.rh
              </a>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <Lock size={14} />
              <span className="text-sm text-neuro-gray">Pagamento 100% seguro via Jotform</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-neuro-gray">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} NeuroRH. Feito com 
            <Heart size={14} className="text-neuro-purple" /> 
            para profissionais de RH visionários.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
