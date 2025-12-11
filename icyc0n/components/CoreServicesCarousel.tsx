
import React from 'react';
import { CheckCircle2, ArrowRight, Cpu, Search, Layers, Globe, Share2, Radio, TrendingUp, BarChart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface CoreServicesCarouselProps {
  navigate: (page: string) => void;
}

// Custom Background Illustrations for each card
const OptIllustration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
     <motion.div 
        className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-icy-main/10 rounded-full blur-3xl" 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
     />
     <div className="relative w-full h-full opacity-20">
        <motion.div 
            className="absolute top-10 right-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
            <Cpu className="w-32 h-32 text-icy-main rotate-12" />
        </motion.div>
        
        <motion.div 
            className="absolute bottom-12 left-8"
            animate={{ y: [0, -15, 0], rotate: [-12, -8, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <Search className="w-24 h-24 text-white" />
        </motion.div>

        <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
            <Layers className="w-48 h-48 text-icy-secondary" />
        </motion.div>
     </div>
  </div>
);

const ReachIllustration = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       <motion.div 
        className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-icy-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
       />
       <div className="relative w-full h-full opacity-20">
          <motion.div 
            className="absolute -top-6 -left-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="w-40 h-40 text-icy-main" />
          </motion.div>

          <motion.div 
            className="absolute bottom-16 right-8"
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Share2 className="w-20 h-20 text-white" />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 right-4"
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Radio className="w-28 h-28 text-icy-secondary" />
          </motion.div>
          
          {/* Geometric Circles */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-white/30 rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
       </div>
    </div>
);

const GrowthIllustration = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-icy-deep/20 to-transparent" />
       <div className="relative w-full h-full opacity-20">
          <motion.div 
            className="absolute bottom-8 left-4"
            animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <TrendingUp className="w-40 h-40 text-icy-main" />
          </motion.div>

          <motion.div 
            className="absolute top-12 right-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
             <BarChart className="w-24 h-24 text-white" />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 left-1/3"
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-16 h-16 text-yellow-400" />
          </motion.div>

          {/* Upward lines */}
          <motion.div 
            className="absolute bottom-0 left-1/4 w-1 bg-icy-main/50"
            animate={{ height: ['8rem', '12rem', '8rem'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/2 w-1 bg-icy-main/50" 
            animate={{ height: ['12rem', '16rem', '12rem'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-0 left-3/4 w-1 bg-icy-main/50"
            animate={{ height: ['16rem', '20rem', '16rem'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
       </div>
    </div>
);

const services = [
  {
    title: 'Optimization',
    desc: 'Technical foundations for search & app stores.',
    subFeatures: ['Technical SEO Audits', 'Answer Engine Optimization', 'App Store Optimization', 'Local Visibility'],
    navKey: 'optimization',
    Illustration: OptIllustration
  },
  {
    title: 'Reach',
    desc: 'Connect with customers on every platform.',
    subFeatures: ['Email & SMS Automation', 'Marketplace Listings', 'Blog Content Engine', 'Backlink Acquisition'],
    navKey: 'reach',
    Illustration: ReachIllustration
  },
  {
    title: 'Growth',
    desc: 'Scale into new markets and communities.',
    subFeatures: ['Social Media Management', 'Multilingual Expansion', 'Viral Short-Form Video', 'Community Engagement'],
    navKey: 'growth',
    Illustration: GrowthIllustration
  },
];

const CoreServicesCarousel: React.FC<CoreServicesCarouselProps> = ({ navigate }) => {
  return (
    <section id="services" className="py-24 px-4 bg-icy-dark relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-icy-main/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-icy-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-sans tracking-tight">Our Core Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body text-lg">
            A holistic suite of digital tools designed for the modern business.
            Select a pillar to explore capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-icy-main/20 hover:border-white/20 transition-all duration-500 flex flex-col"
            >
              {/* Background Illustration */}
              <item.Illustration />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-icy-dark via-icy-dark/50 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-3 font-sans group-hover:text-icy-main transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-body leading-relaxed min-h-[3rem]">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {item.subFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-icy-main shrink-0 mt-0.5" />
                      <span className="font-body">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <button
                    onClick={(e) => { e.preventDefault(); navigate(item.navKey); }}
                    className="w-full py-4 bg-white/5 hover:bg-icy-main border border-white/10 hover:border-transparent rounded-xl text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn font-sans"
                  >
                    Explore {item.title}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesCarousel;
