
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  heading: string;
  services: string[];
  description: string;
  illustration: React.ReactNode;
}

export const MegaSectionCard: React.FC<ServiceCardProps> = ({ heading, services, description, illustration }) => {
  return (
    <motion.div
      className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative ambient glow behind content */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
        
        {/* --- Left Column: Text Content (Heading + Description) --- */}
        <motion.div 
          className="bg-indigo-950/30 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-center gap-6 shadow-lg relative overflow-hidden h-full backdrop-blur-md"
          whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 27, 75, 0.4)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Top highlight line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent opacity-70"></div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center uppercase leading-tight drop-shadow-sm z-10 tracking-tight">
            {heading}
          </h2>
          
          {/* Decorative divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>

          <p className="text-indigo-100/90 text-lg md:text-xl leading-relaxed font-medium tracking-wide z-10 text-center">
            {description}
          </p>
        </motion.div>

        {/* --- Right Column: Visuals (Illustration + Pillars) --- */}
        <div className="flex flex-col gap-8 h-full">
          
          {/* Illustration Box */}
          <div className="bg-slate-900/40 border border-white/10 rounded-3xl min-h-[280px] lg:h-3/5 relative overflow-hidden shadow-inner flex items-center justify-center backdrop-blur-sm group-hover:border-white/20 transition-colors duration-500">
             <div className="w-full h-full absolute inset-0">
               {illustration}
             </div>
             
             {/* Visual label for Illustration Section */}
             <div className="absolute top-6 right-6 bg-slate-950/50 text-white/70 text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10 pointer-events-none tracking-wider uppercase shadow-lg z-20">
               
             </div>
          </div>

          {/* Pillars */}
          <div className="flex flex-col justify-end lg:h-2/5">
            <h3 className="text-cyan-100/80 font-bold text-xl md:text-2xl mb-4 tracking-tight text-center drop-shadow-sm">
              The Pillars Of Optimization
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300 text-cyan-50 font-semibold py-3 px-6 rounded-full shadow-lg backdrop-blur-md uppercase tracking-wide text-xs md:text-sm cursor-default flex-grow text-center"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.2)", borderColor: "rgba(34,211,238,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
