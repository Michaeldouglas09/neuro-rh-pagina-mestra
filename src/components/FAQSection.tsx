
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
        onClick={onToggle}
      >
        <span className="font-medium text-neuro-dark">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-neuro-purple flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-neuro-purple flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter conhecimento técnico para acompanhar o curso?",
      answer: "Não! O curso foi desenvolvido especificamente para profissionais de RH sem conhecimento técnico. Ensinamos tudo do zero, de forma prática e didática."
    },
    {
      question: "O que acontece se eu não conseguir comparecer no dia?",
      answer: "Oferecemos garantia de reembolso de 100% até 7 dias antes do evento. Caso tenha algum imprevisto, entre em contato e avaliaremos sua situação."
    },
    {
      question: "Quais ferramentas de IA vamos aprender a usar?",
      answer: "Focaremos principalmente no ChatGPT e outras ferramentas práticas para RH como análise de currículos, criação de job descriptions, automação de processos e muito mais."
    },
    {
      question: "Vou receber certificado ao final do curso?",
      answer: "Sim! Todos os participantes recebem certificado de participação que pode ser usado para comprovação em processos seletivos e desenvolvimento profissional."
    },
    {
      question: "O material fica disponível depois do curso?",
      answer: "Sim! Você receberá todos os prompts, templates e materiais utilizados durante o treinamento para usar no seu dia a dia profissional."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim! Aceitamos pagamento em até 12x no cartão de crédito através do nosso formulário de inscrição seguro."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-neuro-darkPurple">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
