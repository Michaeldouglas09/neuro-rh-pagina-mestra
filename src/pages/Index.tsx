
import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AudienceSection from '@/components/AudienceSection';
import LearnSection from '@/components/LearnSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BonusSection from '@/components/BonusSection';
import PriceSection from '@/components/PriceSection';
import VideoSection from '@/components/VideoSection';
import AuthorSection from '@/components/AuthorSection';
import Footer from '@/components/Footer';
import ModulesSection from '@/components/ModulesSection';

const Index = () => {
  const priceRef = useRef<HTMLDivElement>(null);

  const scrollToPrice = () => {
    priceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection scrollToPrice={scrollToPrice} />
      <VideoSection />
      <ModulesSection />
      <AudienceSection />
      <LearnSection />
      <TestimonialsSection />
      <AuthorSection />
      <BonusSection />
      <div ref={priceRef}>
        <PriceSection id="price" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
