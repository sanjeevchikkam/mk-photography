"use client";

import { Mail, Phone, MessageSquare, Inspect, Globe, Video, Sparkles } from 'lucide-react';

interface FooterSectionProps {
  onGetQuote?: () => void;
}

export default function FooterSection({ onGetQuote }: FooterSectionProps) {
  const quickLinks = [
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
    <footer id="contact" className="bg-[#070707] border-t border-white/5 pt-16 pb-8 text-[#E5E5E5] relative z-20">
      {/* Background radial soft gold glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Left Column: Brand Identity */}
        <div className="md:col-span-5 flex flex-col items-start gap-5" id="footer-col-brand">
          <div className="flex items-center gap-3" id="footer-logo-row">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]/30 p-[1.5px]" id="footer-logo-wrapper">
              <img
                src="/sample.png"
                alt="MK Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
                id="footer-logo-img"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-base font-bold tracking-widest leading-none" id="footer-brand-title">
                MK
              </span>
              <span className="text-[9px] text-[#D4AF37] font-mono tracking-[0.3em] uppercase leading-none mt-0.5" id="footer-brand-subtitle">
                Photography
              </span>
            </div>
          </div>
          <p className="text-sm text-[#E5E5E5]/70 font-light leading-relaxed max-w-sm" id="footer-description">
            Capturing beautiful moments and turning them into lifelong cinematic memories. Specializing in luxury wedding films and traditional celebrations in Hyderabad.
          </p>
          
          {/* Social Profiles */}
          <div className="flex items-center gap-4 mt-2" id="footer-social-row">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:bg-white/[0.02] transition-all duration-300"
              aria-label="Instagram Profile"
              id="footer-social-instagram"
            >
              <Inspect className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:bg-white/[0.02] transition-all duration-300"
              aria-label="Facebook Profile"
              id="footer-social-facebook"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:bg-white/[0.02] transition-all duration-300"
              aria-label="Youtube Channel"
              id="footer-social-youtube"
            >
              <video className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Center Column: Quick Navigation Links */}
        <div className="md:col-span-3 flex flex-col gap-5" id="footer-col-links">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D4AF37]" id="quick-links-header">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3" id="quick-links-list">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-[#E5E5E5]/70 hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-2 group"
                  id={`footer-link-${link.name.toLowerCase()}`}
                >
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37] scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Contact Details */}
        <div className="md:col-span-4 flex flex-col gap-5" id="footer-col-contact">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D4AF37]" id="contact-info-header">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4" id="contact-info-items">
            {/* Phone option */}
            <a
              href="tel:+919949224331"
              className="flex items-center gap-3 text-sm text-[#E5E5E5]/70 hover:text-white transition-colors duration-300 group"
              id="footer-phone-link"
            >
              <span className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 border border-transparent transition-all duration-300">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              </span>
              +91 99492 24331
            </a>

            {/* WhatsApp option */}
            <button
              onClick={(e) => {
                if (onGetQuote) {
                  e.preventDefault();
                  onGetQuote();
                } else {
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }
              }}
              className="flex items-center gap-3 text-sm text-[#E5E5E5]/70 hover:text-[#D4AF37] transition-colors duration-300 group cursor-pointer text-left w-full bg-transparent border-none p-0 focus:outline-none"
              id="footer-whatsapp-link"
            >
              <span className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 border border-transparent transition-all duration-300">
                <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
              </span>
              Connect on WhatsApp
            </button>

            {/* Email Option */}
            <a
              href="mailto:info@mkphotography.com"
              className="flex items-center gap-3 text-sm text-[#E5E5E5]/70 hover:text-white transition-colors duration-300 group"
              id="footer-email-link"
            >
              <span className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 border border-transparent transition-all duration-300">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              </span>
              info@mkphotography.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: copyright & credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono" id="footer-bottom-bar">
        <p id="footer-copyright">
          Copyright © 2026 MK Photography. All Rights Reserved.
        </p>
        <p className="flex items-center gap-1.5" id="footer-creator">
          Developed with <Sparkles className="w-3 h-3 text-[#D4AF37]" /> by{' '}
          <a
            href="https://chikklabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300"
            id="footer-creator-link"
          >
            Chikkam Labs
          </a>
        </p>
      </div>
    </footer>
  );
}
