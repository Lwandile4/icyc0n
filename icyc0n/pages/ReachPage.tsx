
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShoppingBag, MapPin, PenTool, Repeat, Briefcase, ShieldCheck, Layout, Star, CheckSquare, Shield, FileEdit, Search, Link, MessageSquare, Send, Globe, List } from 'lucide-react';
import NetworkAnimation from '../components/ui/network-animation';
import { AnimatedText } from '../components/ui/animated-text';

// --- ILLUSTRATIONS ---

const EmailSmsIllustration = () => {
  return (
    <div className="w-full h-full min-h-[300px] bg-slate-900/50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)]" />
      
      {/* Central Device */}
      <div className="relative z-10 w-48 h-64 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl flex flex-col p-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Mail className="w-4 h-4 text-blue-400" />
          </div>
          <div className="h-2 w-20 bg-slate-700 rounded-full" />
        </div>
        {/* Chat Bubbles */}
        <div className="space-y-3 flex flex-col">
           <motion.div 
             className="self-end bg-blue-600/80 p-2 rounded-l-lg rounded-tr-lg text-[10px] text-white w-3/4"
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.5 }}
           >
             Hey! Your exclusive offer is inside. 🎁
           </motion.div>
           <motion.div 
             className="self-start bg-slate-700 p-2 rounded-r-lg rounded-tl-lg text-[10px] text-gray-300 w-2/3"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 1.5 }}
           >
             Awesome, just what I needed!
           </motion.div>
           <motion.div 
             className="self-end bg-blue-600/80 p-2 rounded-l-lg rounded-tr-lg text-[10px] text-white w-1/2"
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 2.5 }}
           >
             <div className="h-2 w-full bg-white/20 rounded mb-1" />
             <div className="h-2 w-2/3 bg-white/20 rounded" />
           </motion.div>
        </div>
        
        {/* Floating Icons */}
        <motion.div 
          className="absolute -right-4 top-1/2 p-2 bg-slate-800 border border-slate-600 rounded-lg shadow-lg"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Send className="w-5 h-5 text-green-400" />
        </motion.div>
         <motion.div 
          className="absolute -left-2 bottom-10 p-2 bg-slate-800 border border-slate-600 rounded-lg shadow-lg"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageSquare className="w-5 h-5 text-indigo-400" />
        </motion.div>
      </div>
    </div>
  );
};

const MarketplaceIllustration = () => {
  return (
     <div className="w-full h-full min-h-[300px] bg-slate-900/50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />

        <div className="relative w-64 h-48 perspective-1000">
          <motion.div
            className="w-full h-full grid grid-cols-2 gap-4"
            animate={{ rotateY: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
             {[1, 2, 3, 4].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-slate-800/80 border border-indigo-500/30 rounded-lg p-3 flex flex-col gap-2 backdrop-blur-sm shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(99,102,241,0.8)" }}
                >
                    <div className="w-full h-12 bg-slate-700/50 rounded-md flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-indigo-400 opacity-50" />
                    </div>
                    <div className="h-2 w-3/4 bg-slate-700/50 rounded" />
                    <div className="flex justify-between items-center mt-auto">
                        <div className="h-2 w-1/3 bg-indigo-500/40 rounded" />
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    </div>
                </motion.div>
             ))}
          </motion.div>
          
          {/* Cursor */}
           <motion.div 
             className="absolute top-1/2 left-1/2 w-6 h-6"
             animate={{ 
               x: [-50, 50, -50],
               y: [-30, 40, -30]
             }}
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
           >
              <svg viewBox="0 0 24 24" fill="white" className="drop-shadow-lg"><path d="M5.5 3.21l10.08 5.31-4.33 1.16-1.16 4.33L5.5 3.21z" /></svg>
           </motion.div>
        </div>
     </div>
  );
};

const DirectoryIllustration = () => {
    return (
       <div className="w-full h-full min-h-[300px] bg-slate-900/50 flex items-center justify-center relative overflow-hidden">
         {/* Map Background */}
         <div className="absolute inset-0 opacity-20">
             <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-sky-500"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
         </div>

         {/* Central Pin */}
         <motion.div 
           className="relative z-10"
           initial={{ y: -50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ type: "spring", bounce: 0.5 }}
         >
             <div className="relative">
                 <MapPin className="w-16 h-16 text-sky-500 drop-shadow-[0_10px_10px_rgba(14,165,233,0.5)]" fill="currentColor" fillOpacity={0.2} />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full mt-1 bg-white rounded-full p-1">
                     <div className="w-4 h-4 bg-sky-600 rounded-full" />
                 </div>
             </div>
             {/* Ripple effect */}
             <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-sky-500/30 rounded-full"
                animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
             />
         </motion.div>

         {/* Floating Listings */}
         {[1, 2, 3].map((_, i) => (
             <motion.div
                key={i}
                className="absolute bg-slate-800 border border-sky-500/30 rounded px-3 py-2 flex items-center gap-2 shadow-lg"
                style={{
                    top: `${20 + i * 25}%`,
                    left: i % 2 === 0 ? '15%' : '70%'
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: i, repeat: Infinity, ease: "easeInOut" }}
             >
                 <div className="w-2 h-2 rounded-full bg-green-400" />
                 <div className="h-1.5 w-12 bg-slate-600 rounded" />
             </motion.div>
         ))}
       </div>
    );
};

const BlogIllustration = () => {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-900/50 flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 bg-slate-900">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
         </div>

         <div className="relative z-10 w-full max-w-[280px] perspective-1000">
            <motion.div 
              className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6 shadow-2xl relative"
              initial={{ rotateX: 10 }}
              animate={{ rotateX: [10, 5, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Lines of text */}
                <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-cyan-500/20 rounded" />
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-slate-700 rounded" />
                        <div className="h-2 w-full bg-slate-700 rounded" />
                        <div className="h-2 w-5/6 bg-slate-700 rounded" />
                    </div>
                    {/* Image Placeholder */}
                    <div className="w-full h-24 bg-slate-900 rounded border border-slate-700 flex items-center justify-center">
                         <Layout className="w-8 h-8 text-slate-600" />
                    </div>
                </div>

                {/* Pen Tool Animation */}
                <motion.div 
                  className="absolute -right-4 -bottom-4 bg-cyan-500 p-3 rounded-full shadow-lg shadow-cyan-500/20"
                  animate={{ 
                      x: [0, -5, 0],
                      y: [0, -5, 0],
                      rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <PenTool className="w-5 h-5 text-white" />
                </motion.div>
            </motion.div>

            {/* Link Chain */}
            <motion.div 
               className="absolute -left-8 top-10 flex flex-col gap-1 opacity-50"
               animate={{ y: [-10, 0, -10] }}
               transition={{ duration: 5, repeat: Infinity }}
            >
                <Link className="w-6 h-6 text-cyan-400 -rotate-45" />
                <Link className="w-6 h-6 text-cyan-400 -rotate-45" />
            </motion.div>
         </div>
      </div>
    );
};

// --- DATA ---

const emailSmsData = {
  title: "Email and SMS Revenue Engine", subtitle: "Automated Performance & Compliance", intro: "We build automated high-converting flows and broadcast campaigns that drive consistent revenue and foster lasting customer relationships through compliant lifecycle messaging.",
  pillars: [
    { icon: <Mail className="w-5 h-5" />, title: "Ethical List Growth", desc: "Opt-in focused growth" },
    { icon: <Repeat className="w-5 h-5" />, title: "Automated Lifecycle Flows", desc: "Welcome & Win-back series" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Compliant B2B Outreach", desc: "Value-first messaging" },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Global Compliance", desc: "GDPR, CAN-SPAM ready" }
  ]
};
const marketplaceData = {
  title: "Marketplace & Directory Listings", subtitle: "Capture Buyers Actively Comparing Solutions", intro: "We secure your strategic placement on high-intent platforms like G2, Capterra, and Amazon to capture buyers actively comparing solutions.",
  pillars: [
    { icon: <Layout className="w-5 h-5" />, title: "Strategic Optimization", desc: "Headlines, proof points & FAQs" },
    { icon: <Star className="w-5 h-5" />, title: "Authentic Reviews", desc: "Ethical coordination" },
    { icon: <ShoppingBag className="w-5 h-5" />, title: "Platform Management", desc: "G2, Capterra, Amazon" }
  ]
};
const directoryData = {
  title: "Curated Directory & Citation Submissions", subtitle: "Solidify Your Local Online Presence", intro: "We perform quality-first submissions to authoritative directories to solidify and protect your local online presence.",
  pillars: [
    { icon: <MapPin className="w-5 h-5" />, title: "Strategic Selection", desc: "High-relevance directories" },
    { icon: <CheckSquare className="w-5 h-5" />, title: "Accurate Management", desc: "NAP consistency" },
    { icon: <Shield className="w-5 h-5" />, title: "Quality Protection", desc: "No toxic link schemes" }
  ]
};
const blogData = {
  title: "Blog Engine & Backlinks Service", subtitle: "Build Organic Traffic and Domain Authority", intro: "We manage end-to-end content production and execute ethical digital PR strategies to build your organic traffic and domain authority.",
  pillars: [
    { icon: <FileEdit className="w-5 h-5" />, title: "Data-Driven Content", desc: "Demand-based production" },
    { icon: <Search className="w-5 h-5" />, title: "On-Page Optimization", desc: "Search intent focus" },
    { icon: <Link className="w-5 h-5" />, title: "Ethical Digital PR", desc: "Quality backlink building" }
  ]
};

const reachSections = [
    { theme: 'blue', data: emailSmsData, illustration: <EmailSmsIllustration /> },
    { theme: 'indigo', data: marketplaceData, illustration: <MarketplaceIllustration /> },
    { theme: 'sky', data: directoryData, illustration: <DirectoryIllustration /> },
    { theme: 'cyan', data: blogData, illustration: <BlogIllustration /> },
];

// --- REACH CARD COMPONENT ---

const ReachCard = ({ data, illustration, theme }: { data: any, illustration: React.ReactNode, theme: string }) => {
    const themeStyles = {
        blue: { border: 'border-blue-500/30', glow: 'shadow-blue-500/10', text: 'text-blue-400', bg: 'bg-blue-500/10' },
        indigo: { border: 'border-indigo-500/30', glow: 'shadow-indigo-500/10', text: 'text-indigo-400', bg: 'bg-indigo-500/10' },
        sky: { border: 'border-sky-500/30', glow: 'shadow-sky-500/10', text: 'text-sky-400', bg: 'bg-sky-500/10' },
        cyan: { border: 'border-cyan-500/30', glow: 'shadow-cyan-500/10', text: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    };
    const styles = themeStyles[theme as keyof typeof themeStyles];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`w-full bg-slate-900 border ${styles.border} rounded-3xl overflow-hidden shadow-2xl ${styles.glow} flex flex-col md:flex-row group`}
        >
            {/* Left Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col relative z-10">
                <div className="mb-6">
                    <h3 className={`text-xs font-bold uppercase tracking-widest mb-2 ${styles.text}`}>{data.subtitle}</h3>
                    <h2 className="text-3xl font-extrabold text-white leading-tight">{data.title}</h2>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {data.intro}
                </p>

                {/* Pillars Grid */}
                <div className="mt-auto">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <span className={`w-1.5 h-6 rounded-full ${styles.bg}`}></span>
                        Key Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {data.pillars.map((pillar: any, idx: number) => (
                            <div key={idx} className="bg-slate-800/50 border border-white/5 p-3 rounded-xl flex items-start gap-3 hover:bg-slate-800 transition-colors">
                                <div className={`shrink-0 p-2 rounded-lg ${styles.bg} ${styles.text}`}>
                                    {pillar.icon}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">{pillar.title}</div>
                                    <div className="text-slate-500 text-xs mt-0.5">{pillar.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Illustration Section */}
            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-auto relative overflow-hidden border-t md:border-t-0 md:border-l border-white/5">
                <div className="absolute inset-0 bg-slate-950/20 z-0"></div>
                {illustration}
                {/* Decorative fade at the edge */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none hidden md:block" />
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none md:hidden" />
            </div>
        </motion.div>
    );
};

const ReachPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-0 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <div className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-slate-950">
        <NetworkAnimation />
        <div className="relative z-10 text-center px-4 mt-10">
            <AnimatedText 
              text="Reach"
              className="text-4xl sm:text-5xl md:text-8xl font-sans text-center text-white tracking-tight drop-shadow-lg font-bold"
              highlightedWords={{ 'Reach': 'bg-gradient-to-r from-sky-400 to-indigo-500' }}
            />
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            >
              Expand your footprint beyond your website. We connect you with customers wherever they are. Whether its inboxes, directories, or marketplaces.
            </motion.p>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-current rounded-full" />
            </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 -mt-20 space-y-8 md:space-y-12">
        {reachSections.map((section, index) => (
            <ReachCard 
                key={index}
                data={section.data}
                illustration={section.illustration}
                theme={section.theme}
            />
        ))}
      </div>
    </div>
  );
};

export default ReachPage;
