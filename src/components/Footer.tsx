
import React from 'react';
import { Instagram, Mail, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neuro-dark text-white py-12">
      <div className="container-custom">
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
          <p>&copy; {new Date().getFullYear()} NeuroRH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
