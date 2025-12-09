
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Activity, LineChart, CheckCircle2, ShieldCheck } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const MegaSectionCard = ({ data, theme, illustration }: { data: any, theme: any, illustration?: React.ReactNode }) => {
    const colors: any = {
        blue: { accent: 'text-blue-500', impact: 'text-blue-500', iconBgFrom: 'from-blue-50', iconText: 'text-blue-500', border: 'hover:border-blue-500/40', dot: 'bg-blue-500', glow1: 'bg-blue-500', glow2: 'bg-indigo-500' },
        cyan: { accent: 'text-cyan-500', impact: 'text-cyan-500', iconBgFrom: 'from-cyan-50', iconText: 'text-cyan-500', border: 'hover:border-cyan-500/40', dot: 'bg-cyan-500', glow1: 'bg-cyan-500', glow2: 'bg-sky-500' },
        teal: { accent: 'text-teal-500', impact: 'text-teal-500', iconBgFrom: 'from-teal-50', iconText: 'text-teal-500', border: 'hover:border-teal-500/40', dot: 'bg-teal-500', glow1: 'bg-teal-500', glow2: 'bg-sky-400' },
        indigo: { accent: 'text-indigo-500', impact: 'text-indigo-500', iconBgFrom: 'from-indigo-50', iconText: 'text-indigo-500', border: 'hover:border-indigo-500/40', dot: 'bg-indigo-500', glow1: 'bg-indigo-500', glow2: 'bg-blue-500' },
        sky: { accent: 'text-sky-500', impact: 'text-sky-500', iconBgFrom: 'from-sky-50', iconText: 'text-sky-500', border: 'hover:border-sky-500/40', dot: 'bg-sky-500', glow1: 'bg-sky-500', glow2: 'bg-cyan-400' },
    };
    const c = colors[theme] || colors.blue;
    const pillarGridCols = data.pillars.length > 3 ? 'md:grid-cols-2' : 'md:grid-cols-3';

    return (
        <motion.div
            key={data.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className={`absolute -top-24 -right-24 w-96 h-96 ${c.glow1} rounded-full blur-[100px] pointer-events-none`} />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className={`absolute -bottom-24 -left-24 w-96 h-96 ${c.glow2} rounded-full blur-[100px] pointer-events-none`} />

            <div className="relative z-10 mb-8 md:mb-16 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">{data.title}</h2>
                <h3 className={`text-2xl font-sans ${c.accent} font-medium mb-6`}>{data.subtitle}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{data.intro}</p>
            </div>
            
            {illustration && (
              <div className="relative z-10 mb-8 md:mb-16">
                  {illustration}
              </div>
            )}

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`grid ${pillarGridCols} gap-6 mb-16 relative z-10`}>
                {data.pillars.map((pillar: any, idx: number) => (
                    <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }} className={`group bg-white/50 dark:bg-slate-900/40 p-5 md:p-8 rounded-3xl border border-white/30 dark:border-white/5 ${c.border} transition-all hover:shadow-lg dark:hover:shadow-black/20`}>
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.iconBgFrom} to-white dark:from-white/10 dark:to-white/5 ${c.iconText} flex items-center justify-center shadow-sm border border-white/20`}>{pillar.icon}</motion.div>
                            <h4 className="text-xl font-sans font-bold text-icy-dark dark:text-white leading-tight flex-1">{pillar.title}</h4>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">What We Do</h5>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">{pillar.do}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                                <h5 className={`text-xs font-bold font-sans uppercase tracking-wider ${c.impact} mb-2`}>Impact</h5>
                                <p className="text-slate-600 dark:text-slate-400 italic text-sm">{pillar.impact}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10 mb-12">
                <div className="lg:col-span-2 bg-slate-50/50 dark:bg-white/5 rounded-3xl p-5 md:p-8 border border-white/20 dark:border-white/5">
                    <h4 className={`text-2xl font-sans font-bold text-icy-dark dark:text-white mb-8 flex items-center gap-3`}>
                        <Activity className={`w-6 h-6 ${c.accent}`} /> What You Experience
                    </h4>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
                        {data.experience.map((exp: any, i: number) => (
                            <motion.div key={i} variants={itemVariants} className="space-y-3">
                                <div className={`w-2 h-2 rounded-full ${c.dot} mb-2`}></div>
                                <h5 className="font-bold font-sans text-icy-dark dark:text-white">{exp.title}</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{exp.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
                    <h4 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                        <LineChart className="w-6 h-6 text-cyan-400" /> Measuring Impact
                    </h4>
                    <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                        {data.roi.map((item: string, i: number) => (
                            <motion.li key={i} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                <span><strong className="text-white">{item.split('.')[0]}</strong>{item.substring(item.indexOf('.'))}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
            {data.guardrails && (
                <div className="relative z-10 bg-blue-900/20 border border-blue-500/20 rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                    <div className="shrink-0 p-3 bg-blue-500/10 rounded-xl text-blue-400"><ShieldCheck className="w-8 h-8" /></div>
                    <div>
                        <h4 className="text-lg font-bold font-sans text-white mb-2">Our Unbreakable Guardrails</h4>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">{data.guardrails}</p>
                    </div>
                </div>
            )}
        </motion.div>
    );
};
