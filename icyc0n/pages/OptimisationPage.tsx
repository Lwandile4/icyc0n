
import React from 'react';
import { MegaSectionCard } from '../components/MegaSectionCard';
import { WavyBackground } from '../components/ui/wavy-background';
import { AnimatedText } from '../components/ui/animated-text';
import { motion } from 'framer-motion';
import { 
  ScanSearch, 
  Code2, 
  Server, 
  CheckCircle2, 
  Bot, 
  Mic, 
  Database, 
  Network, 
  Smartphone, 
  Download, 
  Star, 
  TrendingUp,
  Search
} from 'lucide-react';

// --- NEW MODERN ILLUSTRATIONS (Reach Page Style) ---

const TechnicalSeoIllustration = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-slate-800/50 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,146,239,0.1),transparent_50%)]" />
      
      {/* Code Window Container */}
      <div className="relative z-10 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Window Header */}
        <div className="h-8 bg-slate-900 border-b border-slate-700 flex items-center px-3 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        
        {/* Code Content */}
        <div className="p-4 space-y-3 relative">
          <div className="w-3/4 h-2 bg-slate-600 rounded opacity-50" />
          <div className="w-1/2 h-2 bg-slate-600 rounded opacity-50" />
          <div className="w-full h-2 bg-slate-600 rounded opacity-50" />
          <div className="w-5/6 h-2 bg-slate-600 rounded opacity-50" />
          
          {/* Scanning Effect */}
          <motion.div 
            className="absolute left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-20"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Floating Badges */}
        <motion.div 
          className="absolute -right-6 top-12 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2"
          animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-emerald-400 font-sans">98% Health</span>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div 
        className="absolute bottom-10 left-10 text-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Server className="w-16 h-16 opacity-50" />
      </motion.div>
    </div>
  );
};

const AeoIllustration = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-slate-800/50 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl">
      <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      
      {/* Central AI Hub */}
      <div className="relative z-10">
        <motion.div 
          className="w-24 h-24 bg-blue-500/10 rounded-full border border-blue-500/30 backdrop-blur-sm flex items-center justify-center relative"
          animate={{ boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 30px rgba(59,130,246,0.3)", "0 0 0px rgba(59,130,246,0)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Bot className="w-10 h-10 text-blue-500" />
          
          {/* Orbiting Nodes */}
          {[0, 120, 240].map((deg, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 2 }}
            >
              <div 
                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 p-2 rounded-lg border border-blue-500/30 shadow-lg"
                style={{ transform: 'rotate(-360deg)' }} 
              >
                {i === 0 && <Mic className="w-4 h-4 text-cyan-400" />}
                {i === 1 && <Database className="w-4 h-4 text-purple-400" />}
                {i === 2 && <Network className="w-4 h-4 text-indigo-400" />}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Voice Waves */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-blue-500/10 rounded-full"
          style={{ width: `${i * 150}px`, height: `${i * 150}px` }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  );
};

const AsoIllustration = () => {
  return (
    <div className="w-full h-full min-h-[320px] bg-slate-800/50 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      
      {/* 3D Phone Container */}
      <motion.div 
        className="relative w-40 h-72 bg-slate-800 rounded-[2rem] border-4 border-slate-600 shadow-2xl flex flex-col overflow-hidden"
        initial={{ rotateY: -15, rotateX: 10 }}
        animate={{ rotateY: [-15, -5, -15], rotateX: [10, 5, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-b-xl z-20" />
        
        {/* Screen Content */}
        <div className="flex-1 bg-slate-900/50 p-3 pt-8 space-y-3">
          <div className="w-12 h-12 bg-blue-500 rounded-xl mb-2 mx-auto" />
          <div className="h-2 w-20 bg-slate-700 rounded mx-auto" />
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
          </div>
          <div className="h-8 bg-blue-600 rounded-lg mt-4 w-full flex items-center justify-center text-[10px] font-bold text-white font-sans">
            GET
          </div>
        </div>
      </motion.div>

      {/* Floating Stats Card */}
      <motion.div 
        className="absolute bottom-16 right-16 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center gap-3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Download className="w-5 h-5 text-blue-500" />
        </div>
        <div>
          <div className="text-sm font-bold text-white font-sans">+150%</div>
          <div className="text-[10px] text-slate-400 font-body">Downloads</div>
        </div>
      </motion.div>
    </div>
  );
};

const optimisationSections = [
  {
    heading: "Technical SEO",
    description: "At Icycon, we engineer digital visibility. We don’t just 'do SEO'. We build the technical foundation and create the strategic content that ensures your organization is found and trusted by the exact customers searching for your solutions. Here’s how our services translate into your growth.",
    services: [
      "Technical Foundation",
      "Search Intent Mapping",
      "Strategic Content Creation",
      "Local Visibility & GBP"
    ],
    illustration: <TechnicalSeoIllustration />
  },
  {
    heading: "Answer Engine Optimization",
    description: "We optimize your content for semantic search and voice assistants. By structuring your data for knowledge graphs and AI, we position you as a definitive authority, ensuring you provide the direct answers users are looking for.",
    services: [
      "Entity-Based Optimization",
      "Knowledge Graph Construction",
      "Authority & Fact-Checking",
      "AI Crawler Management"
    ],
    illustration: <AeoIllustration />
  },
  {
    heading: "App Store Optimization",
    description: "We optimize your app for discovery and conversion in digital stores. By structuring your metadata and creatives for algorithmic search and user intent, we position your app as the definitive choice, ensuring you capture the immediate action users are ready to take.",
    services: [
      "Metadata Refinement",
      "Creative Asset Optimization",
      "A/B Testing (Google Play)",
      "Custom Product Pages (iOS)"
    ],
    illustration: <AsoIllustration />
  }
];

const Optimization: React.FC = () => {
  return (
    <>
       <WavyBackground 
         className="max-w-4xl mx-auto pb-40" 
         containerClassName="h-[80vh]"
         colors={['#4092ef', '#0079d2', '#003683', '#001358']}
         backgroundFill="#001358"
       >
        <AnimatedText
          text="Total Optimization "
          className="text-4xl md:text-7xl lg:text-8xl text-white font-bold text-center font-sans"
          highlightedWords={{
            'Optimization': 'bg-gradient-to-r from-icy-main to-icy-secondary',
            
          }}
        />
        <p className="text-base md:text-lg mt-6 text-white text-center font-body">
          Dominate Search. Be The Answer
        </p>
      </WavyBackground>
      {/* Reverted background to slate-950 and removed progressive darkening logic */}
      <div className="py-20 bg-icy-dark -mt-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {optimisationSections.map((section, index) => (
              <MegaSectionCard
                key={index}
                heading={section.heading}
                services={section.services}
                description={section.description}
                illustration={section.illustration}
                // No className passed, effectively reverting to default slate styles in the component
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Optimization;
