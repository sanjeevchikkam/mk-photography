"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, Sparkles, UserCheck, ShieldCheck, Clock } from 'lucide-react';

interface ContactUsSectionProps {
  onGetQuote: () => void;
}

export default function ContactUsSection({ onGetQuote }: ContactUsSectionProps) {
  const whatsappMessage = encodeURIComponent(
    "Hello MK Photography,\n\nI am interested in discussing a shoot package. Please guide me with your prices and availability.\n\nThank you!"
  );
  const whatsappUrl = `https://wa.me/919949224331?text=${whatsappMessage}`;
  const phoneUrl = "tel:+919949224331";
  const mailUrl = "mailto:info@mkphotography.com";

  const founders = [
    {
      name: "Sanjay Kumar (MK)",
      role: "Founder & Creative Director",
      photo: "/profile01.png",
      description: "With 18+ years of dedicated visual passion, Sanjay crafts timeless memories. Specializes in candid framing, grand royal lighting, and luxury editorial wedding shots.",
      badge: "Master Photographer"
    },
    {
      name: "Meera Krishnan",
      role: "Co-Founder & Lead Cinematic Editor",
      photo: "/profile02.png",
      description: "Directs high-fidelity 4K cinematic films. Meera's work is celebrated for movie-grade color grading, emotional pacing, and custom-designed soundscapes.",
      badge: "Cinematic Film Director"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0F0F0F] border-t border-white/5 relative overflow-hidden">
      {/* Visual background enhancements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-white/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
            Let's Craft Your Story Together
          </h2>
          <p className="text-sm font-light text-white/50 mt-4 leading-relaxed font-sans">
            Have an upcoming wedding, pre-wedding shoot, or high-profile corporate celebration? Contact our founders directly or fill out a quick quote form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Trust Profile Cards Column (5/12 grid span) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-lg font-serif font-semibold text-white tracking-wide">
                Direct Founders Advisory
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {founders.map((founder, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-black/40 border border-white/5 p-6 rounded-lg hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between group"
                  id={`founder-card-${idx}`}
                >
                  <div>
                    {/* Headshot Image wrapper */}
                    <div className="relative aspect-square w-24 h-24 mb-5 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-500 bg-zinc-900 mx-auto sm:mx-0">
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                        id={`founder-img-${idx}`}
                      />
                    </div>

                    <span className="inline-block text-[9px] font-mono text-[#D4AF37] border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-2.5 py-0.5 rounded-full tracking-wider uppercase mb-2">
                      {founder.badge}
                    </span>

                    <h4 className="text-base font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {founder.name}
                    </h4>
                    
                    <p className="text-xs font-mono text-white/40 mb-3 uppercase tracking-wider">
                      {founder.role}
                    </p>

                    <p className="text-xs font-light text-white/60 leading-relaxed font-sans">
                      {founder.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-white/40">
                    <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Active consultant for all bookings</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Communication Panels (5/12 grid span) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-lg font-serif font-semibold text-white tracking-wide">
                Direct Contact Channels
              </h3>
            </div>

            <div className="bg-[#121212] border border-white/5 rounded-lg p-8 md:p-10 space-y-6 shadow-xl relative">
              <div className="absolute top-4 right-4 text-[9px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-sm uppercase tracking-widest border border-[#D4AF37]/20">
                Response within 1 Hour
              </div>

              <div className="space-y-4">
                {/* 1. Phone Call link */}
                <a
                  href={phoneUrl}
                  className="flex items-center gap-4 p-4 bg-black/40 border border-white/5 hover:border-[#D4AF37]/40 rounded-md transition-all duration-300 group cursor-pointer"
                  id="contact-call-link"
                >
                  <div className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] rounded-sm group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B] transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block uppercase tracking-wider">Direct Hotline Call</span>
                    <span className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 font-mono">
                      +91 99492 24331
                    </span>
                  </div>
                </a>

                {/* 2. WhatsApp Direct link */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/40 border border-white/5 hover:border-[#25D366]/40 rounded-md transition-all duration-300 group cursor-pointer"
                  id="contact-whatsapp-link"
                >
                  <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-sm group-hover:bg-[#25D366] group-hover:text-black transition-colors duration-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block uppercase tracking-wider">Instantly Chat on WhatsApp</span>
                    <span className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors duration-300 font-mono">
                      +91 99492 24331
                    </span>
                  </div>
                </a>

                {/* 3. Direct Mail link */}
                <a
                  href={mailUrl}
                  className="flex items-center gap-4 p-4 bg-black/40 border border-white/5 hover:border-[#D4AF37]/40 rounded-md transition-all duration-300 group cursor-pointer"
                  id="contact-mail-link"
                >
                  <div className="p-3 bg-white/5 text-white/80 rounded-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block uppercase tracking-wider">Send Official Inquiry Mail</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300 font-mono">
                      info@mkphotography.com
                    </span>
                  </div>
                </a>
              </div>

              {/* 4. Luxury Quote Trigger button */}
              <div className="pt-4">
                <button
                  onClick={onGetQuote}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-white text-[#0B0B0B] hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer group"
                  id="contact-get-quote-btn"
                >
                  <Sparkles className="w-4 h-4 text-[#0B0B0B] transition-transform group-hover:rotate-12" />
                  Get Customized Quote
                </button>
                <span className="text-[9px] font-mono text-white/30 text-center block mt-3 uppercase tracking-wider">
                  *Receive bespoke itemized price structures
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
