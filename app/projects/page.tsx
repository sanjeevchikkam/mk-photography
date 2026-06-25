"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function ProjectsSection() {
  // Dual-row collection of high-resolution professional shoots
  const row1Images = [
    '/project01.png',
    '/project02.png',
    '/project03.png',
    '/service01.png',
    '/service02.png',
    '/project05.png',
  ];

  const row2Images = [
    '/project04.png',
    '/project06.png',
    '/service03.png',
    '/project02.png',
    '/project01.png',
    '/project03.png',
  ];

  // Tripling the lists to ensure a fully seamless infinite scroll across any wide viewport
  const duplicatedRow1 = [...row1Images, ...row1Images, ...row1Images];
  const duplicatedRow2 = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section id="projects" className="py-24 bg-[#0B0B0B] border-t border-white/5 overflow-hidden relative">
      {/* Absolute Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
            Cinematic Highlights
          </h2>
          <p className="text-sm font-light text-white/50 mt-4 leading-relaxed font-sans">
            A curated glance of captured unions, dynamic corporate events, and raw candid moments across the subcontinent.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Gallery Rows Container */}
      <div className="space-y-8 relative z-10 w-full">
        
        {/* ROW 1: Auto Scrolling Left */}
        <div className="flex w-full overflow-hidden mask-gradient-horizontal select-none">
          <motion.div
            className="flex gap-6 flex-shrink-0"
            animate={{ x: [0, -1400] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {duplicatedRow1.map((imgSrc, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-72 md:w-96 aspect-[3/2] rounded-lg overflow-hidden border border-white/5 shadow-2xl relative group bg-black/40 flex-shrink-0"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={imgSrc}
                  alt="Portfolio Highlight"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  id={`portfolio-row1-${idx}`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Auto Scrolling Right */}
        <div className="flex w-full overflow-hidden mask-gradient-horizontal select-none">
          <motion.div
            className="flex gap-6 flex-shrink-0"
            animate={{ x: [-1400, 0] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {duplicatedRow2.map((imgSrc, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-72 md:w-96 aspect-[3/2] rounded-lg overflow-hidden border border-white/5 shadow-2xl relative group bg-black/40 flex-shrink-0"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={imgSrc}
                  alt="Portfolio Highlight"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  id={`portfolio-row2-${idx}`}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Styled Gradient Fade Overlay on Left & Right Sides */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
