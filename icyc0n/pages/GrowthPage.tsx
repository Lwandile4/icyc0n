import React from 'react';
import CTA from '../components/CTA';
import { motion, Variants } from 'framer-motion';
import { Share2, Users, Video, Sparkles, Calendar, MessageSquare, CheckCircle2, ShieldCheck, Activity, LineChart, Zap, Globe, Languages, BookOpen, TrendingUp, BarChart3, Smartphone, Calculator, Lightbulb, Repeat, Hammer, Cpu } from 'lucide-react';
import { WavyBackground } from '../components/ui/wavy-background';

const socialData = {
  title: "Social & Community Marketing Services",
  subtitle: "Policy-Compliant Audience Growth",
  intro: "We ensure your brand is present where your customers spend their time. We distribute value and convert attention into visits and demand, all while strictly adhering to the rules of each digital community.",
  pillars: [
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Unified Social Media Management",
      do: "We develop and manage unified content calendars for LinkedIn, X (Twitter), Instagram, and TikTok. We create a mix of short videos, carousels, and text posts, publishing at optimal times informed by trend signals to ensure consistent and engaging brand messaging.",
      impact: "This builds a reliable and professional brand presence. Consistent, high-value content keeps your audience engaged, nurtures trust, and systematically grows your follower base across all major platforms."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Viral Short-Form Video Production",
      do: "We specialize in the production and editing of high-impact Reels, Shorts, and TikToks. Every video is engineered to hook viewer attention within the critical first three seconds using dynamic editing, trending audio, and compelling visuals designed for maximum shareability.",
      impact: "This captures explosive algorithm-friendly growth. Short-form video is the primary driver of discovery on social platforms. By mastering this format, we significantly increase your reach, attract new audiences, and drive viral traffic to your profile and website."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Authentic Community Participation",
      do: "We facilitate genuine brand participation in relevant online communities like Reddit threads and Discord channels. Our agents operate under real accounts, provide value, and follow all community rules with zero spam or stealth automation.",
      impact: "This builds authentic brand authority and trust within niche communities. It drives qualified interest from highly engaged users and establishes your brand as a helpful peer, not an intrusive advertiser."
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Strategic YouTube Channel Growth",
      do: "We manage and optimize your YouTube channel for growth. This includes crafting compelling titles and descriptions, implementing video chapters, scheduling strategic publishing, and creating metadata and calls-to-action that fully comply with YouTube's anti-spam and deceptive practices policies.",
      impact: "This transforms YouTube from a simple video host into a powerful discovery and lead generation engine. It increases your video visibility, watch time, and subscriber growth while protecting your channel from policy violations."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Acceleration with Responsible AI",
      do: "We optionally leverage next-generation AI tools to accelerate creative production, such as using text-to-video models for teasers or AI image generation for thumbnails and social visuals. All outputs are used responsibly and include transparency measures like digital watermarking to follow platform rules.",
      impact: "This dramatically increases the volume and variety of your visual content. It allows for rapid testing of creative concepts and keeps your social feeds fresh and engaging, all while maintaining ethical and transparent practices."
    }
  ],
  experience: [
    {
      title: "Strategic Content Calendar",
      text: "A clear week-by-week content calendar with post drafts, scheduled publish times, and a rationale explaining the strategy behind each piece."
    },
    {
      title: "DM & Comments Playbook",
      text: "A direct message and comments playbook that routes high-intent conversations to your sales team and provides guidelines to squash policy risks in public interactions."
    }
  ],
  roi: [
    "Qualified Traffic. The number of qualified visits to your website originating from social platforms.",
    "Engagement & Amplification. Post saves, shares, overall audience sentiment, and short-form video view-through rates.",
    "Responsiveness. Average response time to community inquiries and comments.",
    "Efficiency. Customer Acquisition Cost (CAC) for any social advertising campaigns we manage."
  ],
  guardrails: "We operate with strict adherence to platform policies. This includes full compliance with YouTube’s spam and deceptive practices policies, Reddit’s rules, and Discord’s community guidelines. We strictly prohibit ban evasion, vote manipulation, and any form of inauthentic behavior to ensure your brand’s reputation remains secure and respected."
};

const multilingualData = {
  title: "Multilingual SEO Services",
  subtitle: "Serve the Right Language, Win the Right Market",
  intro: "We build dedicated, culturally adapted digital presences to unlock new international markets and serve diverse communities. Our process uses automated translation as a starting point, followed by meticulous human refinement, to ensure your brand resonates locally and drives conversions.",
  pillars: [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Strategic Multilingual Site Architecture",
      do: "We launch and manage dedicated, correctly structured language versions of your site (using clear URL paths like /es/ or /de/). We implement precise hreflang tags and fully translate all critical on-page elements, including metadata, alt text, and internal linking structures, to create a technically flawless foundation for each locale.",
      impact: "This eliminates technical barriers to global discovery. Search engines can clearly understand which page to rank for which audience, dramatically improving your visibility in local search results and providing a seamless, dedicated experience for international users."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Cultural Adaptation and Glossary Management",
      do: "We go beyond literal translation. We adapt messaging, idioms, and value propositions to align with local cultural norms and search intent. We build and maintain a centralized brand glossary to ensure key product names, slogans, and technical terms are translated consistently across all markets and future content.",
      impact: "This builds trust and relevance. Visitors feel your brand understands their specific needs and speaks their language authentically. Consistent terminology reinforces your brand identity globally, preventing confusion and strengthening professional credibility in every new market."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Phased, Data-Driven Market Expansion",
      do: "We adopt a strategic, low-risk expansion model. We begin by localizing your site for 1-2 high-value, high-potential locales. We then measure traction, learn from the data, and refine our process before systematically expanding to additional languages and regions.",
      impact: "This ensures efficient use of your budget and resources. You invest in markets that show clear returns, minimizing guesswork and building a scalable, repeatable blueprint for successful global growth based on real performance data."
    }
  ],
  experience: [
    {
      title: "Centralized Languages Dashboard",
      text: "A single view showing all your active locales, with clear indicators for content coverage, translation quality flags, and a prioritized list of the next most valuable pages to localize."
    },
    {
      title: "A Living Brand Glossary",
      text: "Your single source of truth for approved multilingual terminology, ensuring consistency across all markets and teams."
    }
  ],
  roi: [
    "Technical Reach. The number of indexed pages per locale.",
    "Local Visibility. Improvement in local keyword rankings.",
    "Business Impact. Growth in conversions segmented by language."
  ]
};

const freeZoneData = {
  title: "Free Zone Creative Services",
  subtitle: "Sustainable Top-of-Funnel Growth",
  intro: "We develop free micro-tools, calculators, and content systems to act as powerful lead magnets and drive sustainable top-of-funnel growth.",
  pillars: [
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "The 'Answer Once, Everywhere' Content Engine",
      do: "We transform a single customer support question into a multi-platform content campaign. We convert it into a help document, an FAQ page, a short video, a social media post, and an email tip. This systematic repurposing extracts maximum value from every piece of insight your team provides.",
      impact: "This creates a perpetual content machine that efficiently addresses market demand. It builds a comprehensive resource hub that attracts searches, nurtures leads at scale, and establishes your brand as a helpful authority across every channel your audience uses."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Micro-Tool and Interactive Asset Development",
      do: "We propose and help develop free micro-tools like ROI calculators, diagnostic quizzes, or compliance checkers. These are designed to be published quickly, providing immediate utility that captures attention, earns backlinks, and generates qualified leads.",
      impact: "This creates high-value lead magnets that outperform traditional content. Tools solve specific problems for users, making them highly shareable and link-worthy. They directly capture lead information from engaged prospects and significantly boost your site's authority and top-of-funnel traffic."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data-Driven Trend Surfacing",
      do: "We continuously monitor signals from Google Trends and your own analytics to surface timely, relevant topics and tool ideas that align with rising market interest.",
      impact: "This ensures your creative output is always aligned with real-time demand. It allows you to capitalize on emerging trends quickly, positioning your brand at the forefront of conversations and capturing traffic surges as they happen."
    }
  ],
  experience: [
    {
      title: "Strategic Ideation",
      text: "A Weekly Idea Pack delivered to your team. Each idea includes a projected impact score, the required effort level, and example copy to accelerate execution."
    },
    {
      title: "Monthly Shipped Tally",
      text: "A Monthly 'Shipped' Tally that clearly links each launched tool or campaign to resulting metrics like new traffic and leads."
    }
  ],
  roi: [
    "Lead Generation. The number of marketing qualified leads captured directly from free tools and content.",
    "Authority Growth. The number of quality editorial backlinks earned to your micro-tools and resource pages.",
    "Market Reach. The expansion of new keyword phrases your site now ranks for due to this creative output."
  ]
};

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

const GrowthPage: React.FC = () => {
  return (
    <div className="pt-40 md:pt-0 pb-5 md:pb-0 bg-slate-50 dark:bg-icy-dark min-h-screen relative overflow-hidden transition-colors duration-300">
      
      {/* 
        Wavy Background Hero Section
        - Using unified Blue theme matching OptimisationPage
      */}
      <WavyBackground 
        className="max-w-4xl mx-auto pb-10 px-4"
        containerClassName="h-[50vh] md:h-[80vh] mb-2 md:mb-12"
        colors={['#4092ef', '#0079d2', '#22d3ee', '#003683', '#a5f3fc']}
        waveWidth={60}
        backgroundFill="#001358" // Match icy-dark
        blur={5}
        speed="slow"
        waveOpacity={1}
      >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-sans font-bold text-center text-white tracking-tight drop-shadow-lg">
                Accelerate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Growth</span>
            </h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-6 text-xl text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-md"
            >
                 Icycon combines social amplification with multilingual strategies to break barriers.
            </motion.p>
        </motion.div>

        {/* Glowing Horizon Lines - Unified Blue Theme */}
        <div className="w-full max-w-4xl h-40 relative mt-8 mx-auto">
            {/* Gradients */}
            <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-icy-main to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
            <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-icy-main to-transparent h-px w-3/4 mx-auto" />
            <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
            <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-1/4 mx-auto" />
        </div>
      </WavyBackground>

      <div className="w-[95%] md:w-[90%] mx-auto relative z-10 space-y-12 md:space-y-24 mb-12 px-4">
        
        {/* MEGA SECTION 1: Social & Community (Blue/Indigo Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Blue/Indigo Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] pointer-events-none" 
            />

            {/* Header */}
            <div className="relative z-10 mb-16 text-center max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-sans font-semibold mb-6 border border-blue-500/20"
                >
                    <Zap className="w-4 h-4" />
                    <span>Audience Growth</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {socialData.title}
                </h2>
                <h3 className="text-2xl font-sans text-blue-500 font-medium mb-6">
                    {socialData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {socialData.intro}
                </p>
            </div>

            {/* 5 Pillars Grid - Staggered */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-16 relative z-10"
            >
                {socialData.pillars.map((pillar, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="group bg-white/50 dark:bg-slate-900/40 p-5 md:p-8 rounded-3xl border border-white/30 dark:border-white/5 hover:border-blue-500/40 transition-all hover:shadow-lg dark:hover:shadow-black/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div 
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-white/10 dark:to-white/5 text-blue-500 flex items-center justify-center shadow-sm border border-white/20"
                            >
                                {pillar.icon}
                            </motion.div>
                            <h4 className="text-xl font-sans font-bold text-icy-dark dark:text-white leading-tight flex-1">
                                {pillar.title}
                            </h4>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">What We Do</h5>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                    {pillar.do}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-blue-500 mb-2">Impact</h5>
                                <p className="text-slate-600 dark:text-slate-400 italic text-sm">
                                    {pillar.impact}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Experience & ROI Section */}
            <div className="grid lg:grid-cols-3 gap-8 relative z-10 mb-12">
                {/* Experience Column (Spans 2) */}
                <div className="lg:col-span-2 bg-slate-50/50 dark:bg-white/5 rounded-3xl p-5 md:p-8 border border-white/20 dark:border-white/5">
                    <h4 className="text-2xl font-sans font-bold text-icy-dark dark:text-white mb-8 flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-blue-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Strategic Oversight</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                        {socialData.experience.map((exp, i) => (
                            <motion.div key={i} variants={itemVariants} className="space-y-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mb-2"></div>
                                <h5 className="font-bold font-sans text-icy-dark dark:text-white">{exp.title}</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {exp.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ROI Column (Spans 1) */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
                    <h4 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                        <LineChart className="w-6 h-6 text-indigo-400" />
                        Community Impact
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {socialData.roi.map((item, i) => (
                            <motion.li key={i} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                <span>
                                    <strong className="text-white">{item.split('.')[0]}</strong>
                                    {item.substring(item.indexOf('.'))}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>

            {/* Unbreakable Guardrails */}
            <div className="relative z-10 bg-blue-900/20 border border-blue-500/20 rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0 p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-lg font-bold font-sans text-white mb-2">Our Unbreakable Guardrails</h4>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        {socialData.guardrails}
                    </p>
                </div>
            </div>
        </motion.div>

        {/* MEGA SECTION 2: Multilingual SEO (Cyan/Sky Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Cyan/Sky Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-500 rounded-full blur-[100px] pointer-events-none" 
            />

            {/* Header */}
            <div className="relative z-10 mb-16 text-center max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-sans font-semibold mb-6 border border-cyan-500/20"
                >
                    <Globe className="w-4 h-4" />
                    <span>Global Expansion</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {multilingualData.title}
                </h2>
                <h3 className="text-2xl font-sans text-cyan-500 font-medium mb-6">
                    {multilingualData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {multilingualData.intro}
                </p>
            </div>

            {/* 3 Pillars Grid - Staggered */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-16 relative z-10"
            >
                {multilingualData.pillars.map((pillar, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="group bg-white/50 dark:bg-slate-900/40 p-5 md:p-8 rounded-3xl border border-white/30 dark:border-white/5 hover:border-cyan-500/40 transition-all hover:shadow-lg dark:hover:shadow-black/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div 
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-50 to-white dark:from-white/10 dark:to-white/5 text-cyan-500 flex items-center justify-center shadow-sm border border-white/20"
                            >
                                {pillar.icon}
                            </motion.div>
                            <h4 className="text-xl font-sans font-bold text-icy-dark dark:text-white leading-tight flex-1">
                                {pillar.title}
                            </h4>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">What We Do</h5>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                    {pillar.do}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-cyan-500 mb-2">Impact</h5>
                                <p className="text-slate-600 dark:text-slate-400 italic text-sm">
                                    {pillar.impact}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Experience & ROI Section */}
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {/* Experience Column (Spans 2) */}
                <div className="lg:col-span-2 bg-slate-50/50 dark:bg-white/5 rounded-3xl p-5 md:p-8 border border-white/20 dark:border-white/5">
                    <h4 className="text-2xl font-sans font-bold text-icy-dark dark:text-white mb-8 flex items-center gap-3">
                        <Languages className="w-6 h-6 text-cyan-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Cultural & Technical Oversight</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                        {multilingualData.experience.map((exp, i) => (
                            <motion.div key={i} variants={itemVariants} className="space-y-3">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 mb-2"></div>
                                <h5 className="font-bold font-sans text-icy-dark dark:text-white">{exp.title}</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {exp.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ROI Column (Spans 1) */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
                    <h4 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                        <BarChart3 className="w-6 h-6 text-sky-400" />
                        Market Growth
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {multilingualData.roi.map((item, i) => (
                            <motion.li key={i} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                                <span>
                                    <strong className="text-white">{item.split('.')[0]}</strong>
                                    {item.substring(item.indexOf('.'))}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </motion.div>

        {/* MEGA SECTION 3: Free Zone Creative (Teal/Sky Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Teal/Sky Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-400 rounded-full blur-[100px] pointer-events-none" 
            />

            {/* Header */}
            <div className="relative z-10 mb-16 text-center max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm font-sans font-semibold mb-6 border border-teal-500/20"
                >
                    <Calculator className="w-4 h-4" />
                    <span>Lead Magnets</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {freeZoneData.title}
                </h2>
                <h3 className="text-2xl font-sans text-teal-500 font-medium mb-6">
                    {freeZoneData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {freeZoneData.intro}
                </p>
            </div>

            {/* 3 Pillars Grid - Staggered */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-16 relative z-10"
            >
                {freeZoneData.pillars.map((pillar, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="group bg-white/50 dark:bg-slate-900/40 p-5 md:p-8 rounded-3xl border border-white/30 dark:border-white/5 hover:border-teal-500/40 transition-all hover:shadow-lg dark:hover:shadow-black/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div 
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-50 to-white dark:from-white/10 dark:to-white/5 text-teal-500 flex items-center justify-center shadow-sm border border-white/20"
                            >
                                {pillar.icon}
                            </motion.div>
                            <h4 className="text-xl font-sans font-bold text-icy-dark dark:text-white leading-tight flex-1">
                                {pillar.title}
                            </h4>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">What We Do</h5>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                    {pillar.do}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-teal-500 mb-2">Impact</h5>
                                <p className="text-slate-600 dark:text-slate-400 italic text-sm">
                                    {pillar.impact}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Experience & ROI Section */}
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {/* Experience Column (Spans 2) */}
                <div className="lg:col-span-2 bg-slate-50/50 dark:bg-white/5 rounded-3xl p-5 md:p-8 border border-white/20 dark:border-white/5">
                    <h4 className="text-2xl font-sans font-bold text-icy-dark dark:text-white mb-8 flex items-center gap-3">
                        <Lightbulb className="w-6 h-6 text-teal-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Creative Ideation</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                        {freeZoneData.experience.map((exp, i) => (
                            <motion.div key={i} variants={itemVariants} className="space-y-3">
                                <div className="w-2 h-2 rounded-full bg-teal-500 mb-2"></div>
                                <h5 className="font-bold font-sans text-icy-dark dark:text-white">{exp.title}</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {exp.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ROI Column (Spans 1) */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
                    <h4 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-cyan-400" />
                        Compound Growth
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {freeZoneData.roi.map((item, i) => (
                            <motion.li key={i} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                <span>
                                    <strong className="text-white">{item.split('.')[0]}</strong>
                                    {item.substring(item.indexOf('.'))}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </motion.div>

        <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <CTA />
        </div>
      </div>
    </div>
  );
};

export default GrowthPage;