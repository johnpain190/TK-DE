
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LoginSection from '../components/LoginSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LoginSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
