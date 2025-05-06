
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleContentProps {
  title: string;
  lessons: string[];
  isOpen: boolean;
  toggleModule: () => void;
  moduleNumber: number;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ 
  title, 
  lessons, 
  isOpen, 
  toggleModule,
  moduleNumber 
}) => {
  return (
    <div className="border border-neuro-gray/20 rounded-xl overflow-hidden mb-4">
      <button 
        className={cn(
          "w-full text-left p-5 flex items-center justify-between font-medium text-lg", 
          isOpen ? "bg-neuro-lightPurple/20" : "bg-white"
        )}
        onClick={toggleModule}
      >
        <span className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-neuro-purple text-white flex items-center justify-center text-sm">
            {moduleNumber}
          </span>
          {title}
        </span>
        {isOpen ? <ChevronUp className="text-neuro-purple" /> : <ChevronDown />}
      </button>
      
      {isOpen && (
        <div className="p-5 bg-neuro-dark text-white">
          <ul className="space-y-3">
            {lessons.map((lesson, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neuro-lightPurple"></span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ModulesSection = () => {
  const [openModule, setOpenModule] = useState(0);
  
  const modules = [
    {
      title: "Boas-vindas ao NeuroRH",
      lessons: [
        "Conheça seu instrutor e o roadmap do curso",
        "Como aproveitar ao máximo o método NeuroRH",
        "Participe da nossa comunidade e defina sua intenção"
      ]
    },
    {
      title: "ChatGPT para RH – Fundamentos",
      lessons: [
        "Como o ChatGPT funciona em termos simples",
        "Versão gratuita vs. Paga: qual você realmente precisa?",
        "Privacidade, ética e riscos ao usar IA no trabalho"
      ]
    },
    {
      title: "Mãos à obra com ChatGPT – Prompts Práticos",
      lessons: [
        "Escrevendo prompts poderosos para tarefas de RH",
        "Criando descrições de cargo e perfis de candidatos",
        "Comunicação interna, onboarding e modelos de feedback"
      ]
    },
    {
      title: "Triagem & Tomada de Decisão com IA",
      lessons: [
        "Triagem de currículos e classificação de candidatos",
        "Criando guias de entrevista com IA",
        "Tomada de decisão com templates de prompts"
      ]
    },
    {
      title: "Automações para RH (introdução No-code)",
      lessons: [
        "O que é Make.com e como funciona",
        "Fluxos básicos para rotinas de RH",
        "Caso: Automatizando um email de acompanhamento de candidatos"
      ]
    },
    {
      title: "Ferramentas, Atualizações & Próximos Passos",
      lessons: [
        "Principais ferramentas de IA para complementar o ChatGPT no RH",
        "Como se manter atualizado com IA sem enlouquecer",
        "Desafios práticos para aplicar o que você aprendeu"
      ]
    }
  ];

  return (
    <section className="bg-neuro-dark text-white section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Conteúdo do Curso
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          O NeuroRH é um curso completo e prático que te prepara para usar IA no RH de forma estratégica e eficiente.
          Clique nos módulos para ver os detalhes:
        </p>
        
        <div className="max-w-3xl mx-auto">
          {modules.map((module, idx) => (
            <ModuleContent 
              key={idx}
              title={module.title}
              lessons={module.lessons}
              isOpen={openModule === idx}
              toggleModule={() => setOpenModule(openModule === idx ? -1 : idx)}
              moduleNumber={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
