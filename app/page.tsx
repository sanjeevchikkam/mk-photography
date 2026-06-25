"use client";

import React, { useState } from 'react';
import HeaderSection from './header/page';
import HeroSection from './hero/page';
import ServicesSection from './services/page';
import StorySection from './ourstory/page';
import ProjectsSection from './projects/page';
import ContactUsSection from './contactus/page';
import FooterSection from './footer/page';
import QuoteModal from './quotemodal/page';

export default function Page() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Candid Photography & Videography');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('Candid Photography & Videography');
    }
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]" id="landing-page-root">
      
      {/* 1. Header Navigation section */}
      <HeaderSection onGetQuote={() => handleOpenQuote()} />
      
      {/* 2. Main content sections */}
      <main id="main-content-layout">
        <HeroSection onGetQuote={() => handleOpenQuote()} />
        
        {/* Services Showcase Section */}
        <ServicesSection onEnquiry={(service) => handleOpenQuote(service)} />
        
        {/* Our Story Heritage Section */}
        <StorySection />

        {/* Projects Showcase Section */}
        <ProjectsSection />

        {/* Contact Us Direct Section */}
        <ContactUsSection onGetQuote={() => handleOpenQuote()} />
      </main>
      
      {/* 3. Footer branding & contact section */}
      <FooterSection onGetQuote={() => handleOpenQuote()} />

      {/* 4. Luxury Request A Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        initialService={selectedService}
      />

    </div>
  );
}
