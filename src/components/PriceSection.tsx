
import React from 'react';
import CountdownTimer from './CountdownTimer';
import EventDetails from './EventDetails';
import BenefitsList from './BenefitsList';
import PricingCard from './PricingCard';

interface PriceSectionProps {
  id: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({ id }) => {
  return (
    <section id={id} className="bg-gradient-to-b from-neuro-dark to-black text-white section-padding">
      <div className="container-custom">
        <CountdownTimer targetDate="2025-08-30" />

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Invista no seu futuro profissional
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="bg-gradient-to-br from-neuro-purple/20 to-neuro-blue/20 backdrop-blur-sm rounded-3xl p-6 md:p-8">
              <EventDetails />
              <BenefitsList />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <PricingCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
