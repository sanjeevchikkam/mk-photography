"use client";

import React, { useState } from 'react';
import HeaderSection from './header/page';
import HeroSection from './hero/page';
import FooterSection from './footer/page';
import QuoteModal from './quotemodal/page';

export default function Page() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]" id="landing-page-root">
      
      {/* 1. Header Navigation section */}
      <HeaderSection onGetQuote={() => setIsQuoteOpen(true)} />
      
      {/* 2. Main content sections */}
      <main id="main-content-layout">
        <HeroSection onGetQuote={() => setIsQuoteOpen(true)} />
      </main>
      
      {/* 3. Footer branding & contact section */}
      <FooterSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* 4. Luxury Request A Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

    </div>
  );
}
