
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    {
      url: "/sample.png",
      title: "Royal Union",
      subtitle: "Cinematic Wedding Films",
      tag: "VIBRANT & SOULFUL"
    },
    {
      url: "/sample1.png",
      title: "Golden Hour Glow",
      subtitle: "Luxury Bridal Portraits",
      tag: "ELEGANT & REFINED"
    },
    {
      url: "/sample2.png",
      title: "The Grand Mandap",
      subtitle: "Traditional Indian Festivities",
      tag: "MAJESTIC & TIMELESS"
    }    
  ];

  // Automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello MK Photography,\n\nI am interested in your photography services.\n\nPlease share pricing and availability.\n\nThank you."
  );
  const whatsappUrl = `https://wa.me/919949224331?text=${whatsappMessage}`;

  return (
    <section
      id="home"
      className="relative min-h-[75vh] md:min-h-screen w-full bg-[#0B0B0B] overflow-hidden flex flex-col justify-between pt-20 md:pt-28 pb-12 md:pb-8"
    >
      {/* 1. Cinematic Background Layer using MAP to render multiple scrolling/panning photos */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden" id="hero-background-slider">
        <AnimatePresence mode="popLayout">
          {backgroundImages.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={slide.url}
                initial={{ opacity: 0, scale: 1.15, x: 20 }}
                animate={{ opacity: 0.45, scale: 1.05, x: 0 }}
                exit={{ opacity: 0, scale: 1, x: -20 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
                id={`bg-slide-${index}`}
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-10000 ease-linear scale-105"
                  style={{
                    animation: 'panBackground 20s infinite alternate ease-in-out'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/40" />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* CSS Animation embedded inline for the gentle pan scroll background effect */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes panBackground {
            0% { transform: scale(1.05) translate(0px, 0px); }
            100% { transform: scale(1.15) translate(-15px, -10px); }
          }
        `}} />
      </div>

      {/* 2. Premium Overlays for Contrast & Aesthetic Value */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0B0B]/80 to-[#0B0B0B] z-10 pointer-events-none" id="radial-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/10 to-transparent z-10 pointer-events-none" id="bottom-gradient-overlay" />

      {/* 3. Main Hero Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 flex-grow flex items-center my-auto" id="hero-main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 w-full items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-left-content">
            
            {/* Slider Tagline */}
            <div className="h-6 overflow-hidden mb-3" id="hero-sliding-tag">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSlide}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xs font-mono font-bold tracking-[0.3em] text-[#D4AF37] block uppercase"
                >
                  {backgroundImages[currentSlide].tag}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Title with Smooth Dynamic Changes */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-bold tracking-tight leading-[1.12] mb-5 md:mb-6"
              id="hero-heading"
            >
              Capturing Moments,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5E6B3] to-[#D4AF37] drop-shadow-sm">
                Creating Timeless Memories
              </span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-[#E5E5E5]/90 font-sans font-light leading-relaxed max-w-2xl mb-8"
              id="hero-subheading"
            >
              Professional wedding photography and videography services in Hyderabad, crafted meticulously to preserve every emotion, beautiful glance, and unforgettable celebration.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              id="hero-buttons-container"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B0B0B] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-[0_10px_25px_rgba(212,175,55,0.25)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.4)] group"
                id="hero-cta-quote"
              >
                Get Quote
                <Sparkles className="w-4 h-4 text-[#0B0B0B] transition-transform duration-300 group-hover:rotate-12" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm hover:bg-white/[0.03]"
                id="hero-cta-services"
              >
                View Services
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Showcase Card - Displays matching layout image info */}
          <div className="lg:col-span-5 relative w-full h-[280px] lg:h-[420px] hidden sm:flex items-center justify-center" id="hero-right-composition">
            <div className="relative w-full h-full max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/40 p-[3px]"
                  id="right-showcase-slide"
                >
                  <div className="relative w-full h-full rounded-sm overflow-hidden">
                    <img
                      src={backgroundImages[currentSlide].url}
                      alt={backgroundImages[currentSlide].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/15 to-transparent" />
                    
                    {/* Caption Overlays */}
                    <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                          Featured Work
                        </span>
                        <h3 className="text-lg font-serif font-semibold text-white tracking-wide mt-1">
                          {backgroundImages[currentSlide].title}
                        </h3>
                        <p className="text-[10px] text-white/60 font-mono mt-0.5">
                          {backgroundImages[currentSlide].subtitle}
                        </p>
                      </div>
                      <div className="p-2 bg-[#D4AF37] rounded-sm shadow-md flex items-center justify-center">
                        <Camera className="w-4 h-4 text-[#0B0B0B]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Little manual navigation controls */}
              <div className="absolute -bottom-6 right-0 flex items-center gap-2 z-30" id="manual-slider-arrows">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-sm bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] hover:bg-white/10 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-sm bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] hover:bg-white/10 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator animation pointing to the next section coming (visible on both laptop & phone) */}
      <div className="relative z-20 flex flex-col items-center gap-2 mt-4 mb-2 select-none" id="hero-scroll-indicator">
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById('contact');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase">
            Discover More
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </div>

      {/* 4. Luxury Bottom Progress Indicator mapped out elegantly (just minimalist lines) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 pt-2" id="hero-progress-indicator-area">
        <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
          {backgroundImages.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="flex flex-col items-start gap-1 group text-left focus:outline-none"
              id={`progress-dot-${index}`}
            >
              {/* Dynamic Progress Line */}
              <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                {index === currentSlide ? (
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    key={currentSlide}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="absolute top-0 left-0 h-full bg-[#D4AF37]"
                  />
                ) : (
                  <div className={`absolute top-0 left-0 h-full w-0 bg-[#D4AF37] group-hover:w-[30%] transition-all duration-300`} />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


