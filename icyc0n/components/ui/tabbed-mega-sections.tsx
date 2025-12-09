
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MegaSectionCard } from '../../components/MegaSectionCard';

export const TabbedMegaSections = ({ sections }: { sections: any[] }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-[95%] md:w-[90%] mx-auto relative z-10 mb-12 px-4 mt-12">
            <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-white/10 pb-4">
                {sections.map((section, index) => (
                    <button
                        key={section.tabTitle}
                        onClick={() => setActiveTab(index)}
                        className={`relative px-4 py-2.5 text-sm md:text-base font-sans font-medium rounded-md transition-colors ${
                            activeTab === index ? 'text-white' : 'text-slate-400 hover:text-white'
                        }`}
                        style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                        {activeTab === index && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-0 bg-white/10 rounded-lg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            {section.tabIcon}
                            {section.tabTitle}
                        </span>
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <MegaSectionCard
                    data={sections[activeTab].data}
                    theme={sections[activeTab].theme}
                    illustration={sections[activeTab].illustration}
                />
            </AnimatePresence>
        </div>
    );
};
