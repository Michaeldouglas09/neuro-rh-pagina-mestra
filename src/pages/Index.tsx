
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
import GoogleMap from '@/components/GoogleMap';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import FAQSection from '@/components/FAQSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingCTA from '@/components/FloatingCTA';

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
      <BeforeAfterSection />
      <TestimonialsSection />
      <AuthorSection />
      <BonusSection />
      <FAQSection />
      <div ref={priceRef}>
        <PriceSection id="price" />
      </div>
      <GoogleMap />
      <Footer />
      
      {/* Floating elements */}
      <WhatsAppButton />
      <FloatingCTA scrollToPrice={scrollToPrice} />
    </div>
  );
};

export default Index;
