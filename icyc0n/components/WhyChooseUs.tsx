import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import HelixRings from './ui/HelixRings';

const reasons = [
  {
    title: "AI-First Approach",
    desc: "We leverage cutting-edge LLMs to predict trends before they happen."
  },
  {
    title: "Cross-Platform Synergy",
    desc: "We connect your social signals to your SEO results for a holistic growth strategy."
  },
  {
    title: "Data-Driven Creative",
    desc: "Our content is engineered to convert based on real user behavior metrics."
  },
  {
    title: "Transparent Reporting",
    desc: "Live dashboards showing real ROI, not just vanity metrics."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 px-4 bg-icy-dark text-white overflow-hidden">
      
      {/* 
        Mobile-only background: Helix animation fills the section.
        // Opacity increased to 80% for better mobile visibility
      */}
      <div className="absolute inset-0 z-0 lg:hidden opacity-80">
        <HelixRings />
        {/* Gradient overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-icy-dark via-icy-dark/80 to-transparent" />
      </div>

      {/* Main Content Grid */}
      <div className="w-[90%] lg:w-[90%] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content - Centered on mobile, left-aligned on desktop */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why top brands trust <br />
            <span className="text-icy-main">Icycon</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Your advantage isn't just in following trends, but in having them work for you. 
            We design the intelligent systems that proactively position your brand for growth, turning market shifts into your opportunities.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {reasons.map((r, i) => (
              <motion.div 
                key={i}
                {...({
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { delay: i * 0.1 }
                } as any)}
                className="flex flex-col items-center sm:items-start gap-3"
              >
                <div className="flex items-center gap-2 text-icy-main font-bold text-lg">
                  <CheckCircle2 size={24} />
                  <h3>{r.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop-only Helix Animation in the right column */}
        <motion.div 
          {...({
              initial: { scale: 0.9, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 }
          } as any)}
          className="hidden lg:block relative h-[450px] w-full"
        >
          <HelixRings />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;