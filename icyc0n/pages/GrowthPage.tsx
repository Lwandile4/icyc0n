
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Users, Video, Sparkles, Smartphone, Repeat, Calculator, ShieldCheck, TrendingUp } from 'lucide-react';
import AnimatedArrows from '../components/ui/animated-arrows';
import { AnimatedText } from '../components/ui/animated-text';

// ILLUSTRATION COMPONENTS

const SocialIllustration = () => {
    return (
        <div className="w-full h-full min-h-[280px] flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 perspective-1000">
            
            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                    <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                        <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                </defs>
                {/* Lines from center to satellites */}
                <motion.line x1="50%" y1="50%" x2="20%" y2="30%" stroke="url(#socialGradient)" strokeWidth="2" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
                <motion.line x1="50%" y1="50%" x2="80%" y2="30%" stroke="url(#socialGradient)" strokeWidth="2" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
                <motion.line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#socialGradient)" strokeWidth="2" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} />
            </svg>

            {/* Central Hub */}
            <div className="relative z-10">
                <motion.div 
                    animate={{ boxShadow: ["0 0 20px rgba(59,130,246,0.2)", "0 0 40px rgba(59,130,246,0.6)", "0 0 20px rgba(59,130,246,0.2)"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 bg-blue-500/20 rounded-full border border-blue-400/50 backdrop-blur-md flex items-center justify-center relative"
                >
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-20"></div>
                    <Share2 className="w-8 h-8 text-blue-300" />
                </motion.div>
            </div>

            {/* Orbiting Satellites */}
            <motion.div 
                className="absolute top-[20%] left-[15%] p-3 rounded-2xl bg-slate-800/60 border border-blue-500/40 backdrop-blur-md shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Users className="w-5 h-5 text-blue-300" />
            </motion.div>

            <motion.div 
                className="absolute top-[20%] right-[15%] p-3 rounded-2xl bg-slate-800/60 border border-blue-500/40 backdrop-blur-md shadow-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <Video className="w-5 h-5 text-blue-300" />
            </motion.div>

            <motion.div 
                className="absolute bottom-[15%] left-[50%] -translate-x-1/2 p-3 rounded-2xl bg-slate-800/60 border border-blue-500/40 backdrop-blur-md shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <Smartphone className="w-5 h-5 text-blue-300" />
            </motion.div>
        </div>
    );
};

const MultilingualIllustration = () => {
    const greetings = [
        { text: "Hello", x: 0, y: 0, scale: 1.5, delay: 0 },
        { text: "Hola", x: -80, y: -60, scale: 1, delay: 1 },
        { text: "Bonjour", x: 80, y: -50, scale: 1.1, delay: 2 },
        { text: "Ciao", x: -60, y: 60, scale: 0.9, delay: 3 },
        { text: "Namaste", x: 70, y: 50, scale: 1, delay: 1.5 },
        { text: "Konnichiwa", x: -90, y: 0, scale: 0.8, delay: 2.5 },
        { text: "Salam", x: 0, y: -90, scale: 0.9, delay: 0.5 },
        { text: "Hallo", x: 0, y: 90, scale: 0.8, delay: 3.5 },
    ];

    return (
        <div className="w-full h-full min-h-[280px] flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
            {greetings.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute font-bold text-cyan-300/80 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: [0.4, 1, 0.4], 
                        scale: [item.scale * 0.9, item.scale * 1.1, item.scale * 0.9],
                        x: item.x,
                        y: item.y
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: item.delay,
                        ease: "easeInOut"
                    }}
                    style={{ fontSize: `${item.scale}rem` }}
                >
                    {item.text}
                </motion.div>
            ))}
            
            {/* Background glowing orbs for depth */}
            <motion.div 
                className="absolute w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
        </div>
    );
};

const FreeZoneIllustration = () => (
    <div className="w-full h-full min-h-[280px] flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
        
        {/* 3D Dashboard Container */}
        <div 
            className="relative w-64 h-48"
            style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
            }}
        >
            <motion.div 
                className="w-full h-full relative"
                initial={{ rotateX: 20, rotateY: -15 }}
                animate={{ rotateY: [-15, -5, -15], rotateX: [20, 25, 20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Main Dashboard Panel */}
                <div className="absolute inset-0 bg-slate-900/60 border border-teal-500/30 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col p-4 space-y-3">
                    {/* Header */}
                    <div className="flex items-center gap-2 border-b border-teal-500/20 pb-2">
                        <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                        <div className="ml-auto w-16 h-1.5 bg-teal-500/20 rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex gap-3 h-full">
                        <div className="w-1/3 bg-teal-500/10 rounded-lg border border-teal-500/20 p-2 flex flex-col items-center justify-center gap-1">
                             <Calculator className="w-6 h-6 text-teal-400" />
                             <div className="w-8 h-1 bg-teal-500/30 rounded-full"></div>
                        </div>
                        <div className="w-2/3 bg-slate-800/40 rounded-lg border border-white/5 p-2 relative overflow-hidden">
                             <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-teal-500/10 to-transparent"></div>
                             <div className="flex items-end justify-between h-full gap-1 px-1">
                                 <motion.div animate={{ height: ["40%", "70%", "40%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-full bg-teal-400/40 rounded-t-sm"></motion.div>
                                 <motion.div animate={{ height: ["60%", "30%", "60%"] }} transition={{ duration: 3, repeat: Infinity }} className="w-full bg-teal-400/40 rounded-t-sm"></motion.div>
                                 <motion.div animate={{ height: ["50%", "80%", "50%"] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-full bg-teal-400/40 rounded-t-sm"></motion.div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements (Z-Axis) */}
                <motion.div 
                    className="absolute -right-8 top-8 p-3 bg-slate-800/80 border border-teal-400/30 rounded-xl shadow-xl backdrop-blur-md"
                    animate={{ z: 40, y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transform: "translateZ(40px)" }}
                >
                    <TrendingUp className="w-6 h-6 text-teal-300" />
                </motion.div>

                 <motion.div 
                    className="absolute -left-4 -bottom-4 p-2 bg-teal-500/10 border border-teal-400/30 rounded-lg backdrop-blur-md"
                    animate={{ z: 20, y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{ transform: "translateZ(20px)" }}
                >
                    <Sparkles className="w-5 h-5 text-teal-200" />
                </motion.div>
            </motion.div>
        </div>
    </div>
);

// DATA
const socialData = {
  title: "Social & Community Marketing Services", subtitle: "Policy-Compliant Audience Growth", intro: "We ensure your brand is present where your customers spend their time, distributing value and converting attention into demand, all while strictly adhering to community rules.",
  pillars: [
    { icon: <Share2 className="w-6 h-6" />, title: "Unified Social Media Management" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Viral Short-Form Video Production" },
    { icon: <Users className="w-6 h-6" />, title: "Authentic Community Participation" },
    { icon: <Video className="w-6 h-6" />, title: "Strategic YouTube Channel Growth" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Creative Acceleration with Responsible AI" }
  ],
  guardrails: "We operate with strict adherence to platform policies, including YouTube’s spam rules, Reddit’s guidelines, and Discord’s terms. We prohibit ban evasion, vote manipulation, and any inauthentic behavior to ensure your brand’s reputation remains secure."
};
const multilingualData = {
  title: "Multilingual SEO Services", subtitle: "Serve the Right Language, Win the Right Market", intro: "We build dedicated, culturally adapted digital presences to unlock new international markets. Our process uses automated translation as a starting point, followed by meticulous human refinement.",
  pillars: [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Phased, Data-Driven Market Expansion" },
    { icon: <Repeat className="w-6 h-6" />, title: "Cultural Adaptation & Glossary Management" }
  ],
  guardrails: "We ensure precise hreflang implementation to avoid duplicate content penalties and employ native speakers for final review to prevent cultural missteps or awkward machine translations."
};
const freeZoneData = {
  title: "Free Zone Creative Services", subtitle: "Sustainable Top-of-Funnel Growth", intro: "We develop free micro-tools, calculators, and content systems to act as powerful lead magnets and drive sustainable top-of-funnel growth.",
  pillars: [
    { icon: <Repeat className="w-6 h-6" />, title: "The 'Answer Once, Everywhere' Content Engine" },
    { icon: <Calculator className="w-6 h-6" />, title: "Micro-Tool & Interactive Asset Development" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Data-Driven Trend Surfacing" }
  ],
  guardrails: "All lead magnets and tools are built to provide genuine standalone value, not just as gated bait. We ensure GDPR compliance for data collection and transparency in how user inputs are processed."
};

const growthSections = [
    { theme: 'blue', data: socialData, illustration: <SocialIllustration /> },
    { theme: 'cyan', data: multilingualData, illustration: <MultilingualIllustration /> },
    { theme: 'teal', data: freeZoneData, illustration: <FreeZoneIllustration /> },
];

// Custom Card Component for Growth Page
const GrowthCard = ({ data, illustration, theme }: { data: any, illustration: React.ReactNode, theme: string }) => {
    const themeColors = {
        blue: { 
            accent: 'text-blue-400', 
            pill: 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20',
            grad: 'from-blue-500/20 via-transparent to-transparent'
        },
        cyan: { 
            accent: 'text-cyan-400', 
            pill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20',
            grad: 'from-cyan-500/20 via-transparent to-transparent'
        },
        teal: { 
            accent: 'text-teal-400', 
            pill: 'bg-teal-500/10 text-teal-300 border-teal-500/20 hover:bg-teal-500/20',
            grad: 'from-teal-500/20 via-transparent to-transparent'
        }
    };
    const colors = themeColors[theme as keyof typeof themeColors];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group flex flex-col relative"
        >
            {/* Ambient Background Glow */}
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${colors.grad} opacity-30 pointer-events-none`} />

            <div className="flex flex-col lg:flex-row flex-grow relative z-10">
                {/* Left Side: Illustration */}
                <div className="lg:w-5/12 relative overflow-hidden min-h-[250px] lg:min-h-full flex flex-col">
                    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 z-10">
                         {illustration}
                    </div>
                     {/* Overlay Label */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                         <div className="bg-slate-900/40 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full text-white/90 text-[10px] md:text-xs font-bold tracking-wider border border-white/20 shadow-sm">
                            GROWTH STRATEGY
                         </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="lg:w-7/12 p-6 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                    <div className="space-y-4 md:space-y-6">
                        <div>
                             <h3 className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-1 md:mb-2 ${colors.accent}`}>{data.subtitle}</h3>
                             <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-sm">{data.title}</h2>
                        </div>
                        
                        <p className="text-indigo-100/90 text-base md:text-lg leading-relaxed font-medium">
                            {data.intro}
                        </p>

                        <div className="pt-4 md:pt-6">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <span className="text-indigo-200/80 font-bold tracking-widest uppercase text-xs md:text-sm">Pillars</span>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {data.pillars.map((pillar: any, index: number) => (
                                    <div key={index} className={`px-3 py-2 md:px-4 md:py-3 rounded-xl border flex items-center gap-2 md:gap-3 transition-colors ${colors.pill} flex-grow sm:flex-grow-0 cursor-default backdrop-blur-sm`}>
                                        <div className="shrink-0 opacity-80 scale-75">
                                            {pillar.icon}
                                        </div>
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">{pillar.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom: Guardrails */}
            <div className="bg-white/5 backdrop-blur-md p-5 md:p-8 flex items-start gap-3 md:gap-4 border-t border-white/10 relative z-10 mt-auto">
                <div className="shrink-0 p-1.5 md:p-2 bg-slate-800/80 rounded-full text-indigo-200 mt-1 border border-white/10">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                    <h4 className="text-indigo-100 font-bold text-xs md:text-sm uppercase tracking-wider mb-1">Safety Guardrails</h4>
                    <p className="text-indigo-200/70 text-xs md:text-sm font-medium leading-relaxed">
                        {data.guardrails}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const GrowthPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-0 pb-20 bg-slate-950 min-h-screen relative overflow-x-hidden transition-colors duration-300 selection:bg-cyan-500/30">
      
      {/* Ambient Background Elements for Glass Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px]" />
         <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-slate-950/80 backdrop-blur-sm z-10">
        <AnimatedArrows />
        <div className="relative z-10 text-center px-4 mt-8 md:mt-12">
            <AnimatedText 
              text="Accelerate Growth"
              className="text-4xl sm:text-5xl md:text-7xl font-sans text-center text-white tracking-tight drop-shadow-2xl font-bold"
              highlightedWords={{
                'Growth': 'bg-gradient-to-r from-cyan-400 to-blue-500'
              }}
            />
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-4 md:mt-6 text-base md:text-xl text-indigo-200/80 max-w-lg mx-auto leading-relaxed font-medium"
            >
                Strategies that combine social amplification with intelligent content systems.
            </motion.p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-10 md:-mt-20 relative z-20 space-y-8 md:space-y-16">
        {growthSections.map((section, index) => (
            <GrowthCard 
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

export default GrowthPage;
