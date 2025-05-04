
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
        <div className="p-5 bg-white/50">
          <ul className="space-y-3">
            {lessons.map((lesson, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neuro-purple"></span>
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
      title: "Welcome to NeuroRH",
      lessons: [
        "Meet your instructor and course roadmap",
        "How to make the most of the NeuroRH method",
        "Join our community and set your intention"
      ]
    },
    {
      title: "ChatGPT for HR – Foundations",
      lessons: [
        "How ChatGPT works in simple terms",
        "Free vs Paid version: which one do you really need?",
        "Privacy, ethics, and risks when using AI at work"
      ]
    },
    {
      title: "Hands-on with ChatGPT – Practical Prompts",
      lessons: [
        "Writing powerful prompts for HR tasks",
        "Creating job descriptions and candidate profiles",
        "Internal communication, onboarding, and feedback models"
      ]
    },
    {
      title: "Screening & Decision-Making with AI",
      lessons: [
        "Resume triage and candidate ranking",
        "Creating interview guides with AI",
        "Decision-making with prompt templates"
      ]
    },
    {
      title: "Automations for HR (No-code intro)",
      lessons: [
        "What is Make.com and how it works",
        "Basic flows for HR routines",
        "Case: Automating a candidate follow-up email"
      ]
    },
    {
      title: "Tools, Updates & What's Next",
      lessons: [
        "Top AI tools to complement ChatGPT in HR",
        "How to stay updated with AI without going crazy",
        "Practical challenges to apply what you've learned"
      ]
    }
  ];

  return (
    <section className="bg-neuro-lightGray section-padding">
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
