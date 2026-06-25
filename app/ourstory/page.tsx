"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, History, Camera, Award } from 'lucide-react';

export default function StorySection() {
  const milestones = [
    {
      year: "2008",
      title: "The Humble Beginning",
      description: "Started with a deep passion for framing human light. Commencing from intimate, local family shoots and normal portrait sessions, we honed our skills in raw timing and classic compositions."
    },
    {
      year: "2016",
      title: "Stepping into Big Weddings",
      description: "Stepped onto the grand stage of Indian weddings. Embraced destination weddings, candid cinematic filming, and grand reception visual coverage, capturing legacy family unions with pure emotion."
    },
    {
      year: "2021",
      title: "Corporate & Commercial Peak",
      description: "Expanded our craft to state-of-the-art Corporate photography, professional brand films, commercial campaigns, and executive documentation, servicing major tech and legacy brands."
    },
    {
      year: "2026",
      title: "18 Years of Timeless Legacy",
      description: "Continuing our journey in 2026 with 18 proud years of unmatched excellence. Every frame we capture remains a testament to timeless love, pristine heritage, and absolute artistic devotion."
    }
  ];

  return (
    <section id="our-story" className="py-24 bg-[#0F0F0F] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Golden Ambient Light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/3 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context Story */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] uppercase block">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
              An 18-Year Pursuit Of Perfection
            </h2>
            <div className="w-16 h-0.5 bg-[#D4AF37]/50 my-6" />
            <p className="text-sm font-light text-white/70 leading-relaxed font-sans">
              Founded in 2008, MK Photography started with a single camera and a relentless vision: to preserve life's fleeting moments as timeless fine art. We believed that every glance, laughter, and tear deserved a legacy.
            </p>
            <p className="text-sm font-light text-white/50 leading-relaxed font-sans">
              As we journeyed through almost two decades, we scaled from local portraits and normal studio shootings to magnificent, multi-day Big Indian Weddings and high-profile Corporate films. Today in 2026, we stand proud of our rich heritage, carrying the same passion and refined techniques into every single click.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-black/40 border border-white/5 rounded-sm">
                <span className="text-3xl font-serif font-bold text-[#D4AF37] block">18+</span>
                <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase">Years of Artistry</span>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-sm">
                <span className="text-3xl font-serif font-bold text-[#D4AF37] block">1000+</span>
                <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase">Stories Captured</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Timeline Grid */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Vertical Axis Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 relative">
              {milestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`flex flex-col md:flex-row items-stretch md:items-center relative ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node Center Point */}
                    <div className="absolute left-4 md:left-1/2 top-3 w-3.5 h-3.5 bg-[#0B0B0B] border border-[#D4AF37] rounded-full -translate-x-1/2 z-20 hidden md:block shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

                    {/* Milestone Card */}
                    <div className="w-full md:w-[45%] pl-8 md:pl-0">
                      <div className="p-6 bg-black/30 border border-white/5 hover:border-[#D4AF37]/25 rounded-md transition-all duration-300">
                        <span className="text-2xl font-serif font-bold text-[#D4AF37] tracking-wider block mb-1">
                          {milestone.year}
                        </span>
                        <h3 className="text-base font-semibold text-white tracking-wide mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-xs font-light text-white/60 leading-relaxed font-sans">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for structure balancing */}
                    <div className="w-0 md:w-[10%] hidden md:block" />
                    <div className="w-full md:w-[45%] hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
