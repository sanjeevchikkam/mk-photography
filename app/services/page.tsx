"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Camera, Film, Award } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  features: string[];
}

interface ServicesSectionProps {
  onEnquiry: (serviceName: string) => void;
}

export default function ServicesSection({ onEnquiry }: ServicesSectionProps) {
  const services: Service[] = [
    {
      id: "candid",
      name: "Candid Photography & Videography",
      category: "Signature Storytelling",
      image: "/service01.png",
      icon: <Camera className="w-5 h-5 text-[#D4AF37]" />,
      description: "Artistic, unobtrusive capture of raw emotions, spontaneous laughter, and genuine stolen glances. We weave in-the-moment details into a mesmerizing visual story.",
      features: ["Premium high-resolution digital delivery", "Dual senior candid specialists", "Artistic custom color grading", "Sneak-peek gallery within 48 hours"]
    },
    {
      id: "cinematic",
      name: "Cinematic Wedding Film",
      category: "Movie-Grade Production",
      image: "/service02.png",
      icon: <Film className="w-5 h-5 text-[#D4AF37]" />,
      description: "Breathtaking movies featuring masterclass color grading, immersive cinematic drone/aerial footage, and professional custom-designed soundscapes.",
      features: ["Ultra HD 4K capture & delivery", "Custom licensed soundtracks", "3-minute cinematic teaser", "Comprehensive 15-20 min narrative film"]
    },
    {
      id: "traditional",
      name: "Traditional Wedding & Reception",
      category: "Classic Heritage",
      image: "/service03.png",
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      description: "Polished, timeless high-fidelity documentation of sacred rituals, wedding stages, and formal portraits with pristine clarity and classic production.",
      features: ["High-power professional lighting setups", "Comprehensive documentation of every ritual", "Curated master photo book selection", "Elegant physical luxury album"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0B0B0B] border-t border-white/5 relative overflow-hidden">
      {/* Golden glow decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
            Exclusive Photography & Film Services
          </h2>
          <p className="text-sm font-light text-white/50 mt-4 leading-relaxed font-sans">
            Every moment is unique. We offer a tailored array of specialized shoots, executed with absolute artistic dedication and the finest production standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-[#121212] border border-white/5 hover:border-[#D4AF37]/30 rounded-lg overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Image Container with Elegant Zoom Effect */}
                <div className="relative aspect-[3/2] overflow-hidden bg-black/40 border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                    id={`service-img-${service.id}`}
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#0B0B0B]/80 backdrop-blur-md border border-[#D4AF37]/30 rounded-sm text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#D4AF37]/10 rounded-sm border border-[#D4AF37]/20">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-sm font-light text-white/60 leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-white/50 font-sans">
                        <span className="text-[#D4AF37] mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Enquiry Action Button */}
              <div className="p-6 md:p-8 pt-0 mt-auto">
                <button
                  onClick={() => onEnquiry(service.name)}
                  className="w-full py-3.5 bg-transparent hover:bg-[#D4AF37] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-white hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-2 group cursor-pointer"
                  id={`service-enquiry-btn-${service.id}`}
                >
                  Add To Enquiry
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for custom events */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-white/40 tracking-wider">
            Looking for pre-wedding portrait shoots or festive family events?
          </p>
          <button
            onClick={() => onEnquiry("Candid Photography & Videography")}
            className="text-xs font-mono text-[#D4AF37] hover:text-white uppercase tracking-widest mt-2 border-b border-[#D4AF37]/30 hover:border-white transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer pb-0.5"
            id="services-custom-shoot-trigger"
          >
            <Sparkles className="w-3 h-3" />
            Request A Custom Session Package
          </button>
        </div>

      </div>
    </section>
  );
}
