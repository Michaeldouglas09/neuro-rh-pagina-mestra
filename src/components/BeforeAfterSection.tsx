
import React from 'react';
import { X, Check, TrendingUp } from 'lucide-react';

const BeforeAfterSection = () => {
  const beforeItems = [
    "Triagem manual de currículos demora horas",
    "Relatórios de RH feitos do zero toda vez",
    "Processos seletivos demorados e ineficientes", 
    "Dificuldade para criar job descriptions atrativas",
    "Pesquisas de clima organizacional complexas"
  ];

  const afterItems = [
    "Triagem automatizada em minutos com IA",
    "Relatórios gerados instantaneamente",
    "Processos seletivos otimizados e rápidos",
    "Job descriptions criadas com prompts inteligentes",
    "Pesquisas personalizadas com ajuda da IA"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neuro-lightGray to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-neuro-purple/10 text-neuro-purple font-medium px-4 py-2 rounded-full mb-4">
            <TrendingUp size={20} />
            Transformação Real
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neuro-dark mb-4">
            Antes vs Depois do NeuroRH
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Veja como sua rotina de RH vai mudar completamente após dominar as ferramentas de IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Antes */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <X className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Antes (Sem IA)</h3>
              <p className="text-gray-600">Processos manuais e demorados</p>
            </div>
            
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Depois */}
          <div className="bg-gradient-to-br from-neuro-purple/5 to-neuro-blue/5 rounded-2xl p-8 border border-neuro-purple/20">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neuro-dark">Depois (Com IA)</h3>
              <p className="text-neuro-purple font-medium">Processos inteligentes e rápidos</p>
            </div>
            
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neuro-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto border border-neuro-purple/20">
            <h4 className="text-xl font-bold text-neuro-dark mb-3">
              ⚡ Economia de Tempo Média dos Nossos Alunos
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-neuro-purple">70%</div>
                <div className="text-sm text-gray-600">Triagem de CVs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neuro-purple">80%</div>
                <div className="text-sm text-gray-600">Relatórios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neuro-purple">60%</div>
                <div className="text-sm text-gray-600">Job Descriptions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neuro-purple">90%</div>
                <div className="text-sm text-gray-600">Pesquisas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
