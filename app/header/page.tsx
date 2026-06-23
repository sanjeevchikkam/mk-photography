"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello MK Photography,\n\nI am interested in your photography services.\n\nPlease share pricing and availability.\n\nThank you."
  );
  const whatsappUrl = `https://wa.me/919949224331?text=${whatsappMessage}`;

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Side: Logo & Title */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none" id="header-logo-link">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/40 p-[2px] transition-transform duration-500 group-hover:scale-105" id="header-logo-container">
            <img
              src="/sample.png"
              alt="MK Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
              id="header-logo-img"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif text-lg md:text-xl font-bold tracking-widest leading-none group-hover:text-[#D4AF37] transition-colors duration-300" id="header-brand-name">
              MK
            </span>
            <span className="text-[10px] text-[#D4AF37] font-mono tracking-[0.3em] uppercase leading-none mt-1" id="header-brand-sub">
              Photography
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] transition-colors duration-300 relative group py-2"
              id={`nav-item-${item.name.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side: Get Quote Button */}
        <div className="hidden lg:block" id="header-cta-desktop">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0B] text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            id="get-quote-btn-desktop"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get Quote
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0B0B0B] border-t border-white/5 absolute top-full left-0 right-0 shadow-2xl overflow-hidden"
            id="mobile-nav-drawer"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors duration-300"
                    id={`mobile-nav-item-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center block px-6 py-3 bg-[#D4AF37] text-[#0B0B0B] text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-[#bfa032] rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.2)]"
                id="get-quote-btn-mobile"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
