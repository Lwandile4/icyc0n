import React from 'react';
import CTA from '../components/CTA';
import { motion, Variants } from 'framer-motion';
import { Search, Smartphone, CheckCircle2, Map, FileText, Activity, Layers, MessageSquare, LineChart, Brain, Network, ShieldCheck, Settings, Sparkles, Palette, FlaskConical } from 'lucide-react';
import { WavyBackground } from '../components/ui/wavy-background';

// We separate the main "Mega" feature (Technical SEO) from the others to give it a custom layout
const technicalSeoData = {
  title: "Technical SEO & Content Strategy Services",
  subtitle: "How We Drive Qualified Traffic & Build Trust",
  intro: "At Icycon, we engineer digital visibility. We don't just \"do SEO\". We build the technical foundation and create the strategic content that ensures your organization is found and trusted by the exact customers searching for your solutions. Here’s how our services translate into your growth.",
  pillars: [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Technical Foundation Audit & Optimization",
      do: "We ensure search engines can efficiently discover, crawl, and interpret every part of your website. This includes validating sitemaps, fixing site structure issues, and monitoring indexing health in real-time.",
      impact: "Eliminates invisible barriers that make your content unfindable. You gain a website that communicates clearly with Google, ensuring your investment in content and pages translates into actual search presence. This is the essential plumbing. Without it, everything else fails."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Demand & Intent Mapping",
      do: "We analyze the market to build a comprehensive map of what your potential customers are actively searching for and why. We then align each search intent with the most effective page on your site.",
      impact: "Moves you from guessing to knowing. This strategy ensures every piece of content we recommend serves a clear business purpose by capturing qualified traffic at various stages of the buyer's journey, directly connecting search demand to your solutions."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Strategic Content Creation from Brief to Draft",
      do: "We turn intent maps into actionable content. Our service includes creating detailed briefs for pillar guides, product comparisons, FAQs, and how-to articles, complete with strategic angles, outlines, and internal linking plans. We then draft the content, incorporating on-page Q&A and implementing advanced Schema.org markup (like QAPage) to maximize understanding by search and answer engines.",
      impact: "You receive a steady pipeline of high-quality, purpose-driven content that ranks. It positions your team as an authority, answers critical customer questions preemptively, and technically structures information so Google can easily feature it in rich results, driving more clicks."
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Local Visibility & Google Business Profile Management",
      do: "We fully optimize and manage your Google Business Profile. This includes accurate category and service selection, photo management, regular posts, and professional Q&A engagement. We provide a secure review moderation system with policy-compliant reply suggestions, helping you navigate guidelines and escalate suspicious activity.",
      impact: "Builds trust and dominates local search. A vibrant, actively managed GBP profile significantly increases your visibility in local \"Map Pack\" results and attracts store visits or calls. Our compliant approach protects your reputation while fostering genuine customer relationships."
    }
  ],
  experience: [
    {
      title: "A Plain-English SEO Dashboard",
      text: "No jargon. You'll have a clear view of your current visibility, a prioritized list of technical issues to fix, and a content calendar showing what to publish next to capture demand."
    },
    {
      title: "Ready-to-Approve Content Assets",
      text: "Receive fully outlined and drafted articles, engineered for both users and search engines, streamlining your editorial process."
    },
    {
      title: "A Managed Reviews Inbox",
      text: "We provide suggested, brand-aligned replies to customer reviews, emphasizing authentic engagement without risky incentives or manipulation."
    }
  ],
  roi: [
    "Traffic Quality. Increase in qualified organic sessions that engage with your site.",
    "Efficiency. Reduced time to index for new, important content.",
    "Visibility Growth. Expanded target term coverage and rankings for commercial keywords.",
    "Authority Signals. Growth in Featured Snippet and local Map Pack visibility.",
    "Reputation Health. Positive trends in review volume and ratings, reflecting growing trust."
  ]
};

const aeoData = {
  title: "AI & Answer Engine Optimization (AEO) Services",
  subtitle: "Establishing Authority in the Conversational Era",
  intro: "The future of search is not just about links; it's about being cited as a source. As conversational AI and answer engines like ChatGPT, Claude, and Perplexity redefine how people find information, your brand's digital presence must be explicitly built for comprehension and citation. We optimize your entire footprint to ensure these Large Language Models (LLMs) recognize and reference your organization as a definitive authority.",
  pillars: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Entity-Based Content Optimization & Question Bank Development",
      do: "We move beyond keywords to optimize for into real-world concepts, people, and products that LLMs understand. We conduct research to build a foundational \"Question Bank\" (50-150 real customer questions) and transform them into concise, evidence-rich Q&A pages and \"how-to\" guides, structured with clear QAPage and FAQPage Schema.org markup.",
      impact: "This makes your content intrinsically easier for AI to quote accurately. It systematically captures the precise informational demand around your niche, positioning your site as the primary source for answers, which directly translates into brand citations in AI summaries."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Knowledge Graph Construction & Verification",
      do: "We audit and structure your content to strengthen your brand's presence in the interconnected \"knowledge graph\" that powers intelligent search. This involves clarifying entity relationships, verifying your official data points in directories, and creating content that explicitly establishes your expertise within a topic network.",
      impact: "It builds a durable, semantic understanding of your authority that both traditional search and AI models rely on. This foundational work increases the likelihood of your brand being presented as a trusted node of information in knowledge panels and AI responses."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Fact-Checking & Authority Building for AI Training Data",
      do: "We go beyond surface-level content. For your most critical pages, we help you add an \"Evidence\" section that cites primary sources, original data, industry standards, and proprietary research. We ensure your published facts are precise, current, and referenced from the highest-quality sources.",
      impact: "LLMs are trained to prioritize accurate, well-sourced data. By becoming a verified source of truth, you dramatically increase your value to these models, making your content indispensable for training and response generation. This builds unparalleled, long-term authority."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Strategic AI Crawler Management & Experimental Protocols",
      do: "We provide strategic control over how AI crawlers access your site. This includes implementing robots.txt directives to allow or disallow crawlers from specific AI platforms (e.g., OpenAI), aligning with your content distribution strategy. We also experiment with emerging conventions like /llms.txt to guide models to your most canonical resources.",
      impact: "Gives you agency in the new AI landscape. You can choose to fully engage with platforms that drive brand discovery or restrict scraping where it doesn't align with business goals, all based on informed strategy rather than default settings."
    }
  ],
  experience: [
    {
      title: "The AEO Coverage Board",
      text: "A clear dashboard showing which questions from your bank are live, which need updates, and which lack strong citations. You always know the status of your answer assets."
    },
    {
      title: "Weekly \"Answer Diff\" Snapshots",
      text: "Receive periodic reports showing how AI answers to your core questions have evolved, including when and how your brand citations appear, change, or disappear. This turns AI black-box responses into a trackable metric."
    }
  ],
  roi: [
    "Citation Rate. Your \"Answer with citation\" rate in AI overviews and responses.",
    "Brand Presence. Volume and context of brand mentions in AI answers across platforms.",
    "Direct Impact. Traffic and conversions generated from your strategically built Q&A and how-to pages.",
    "Authority Growth. Improvement in E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals across your domain."
  ]
};

const asoData = {
  title: "App Store Optimization (ASO)",
  subtitle: "Improve store discovery & install conversion",
  intro: "With millions of apps fighting for attention, having a great app isn't enough. We optimize every element of your store listing, text and visuals, to drive organic downloads and maximize the efficiency of your paid user acquisition campaigns.",
  pillars: [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Metadata Refinement",
      do: "We refine store metadata including titles, descriptions, and localized variants to target high-value keywords across different regions.",
      impact: "Ensures your app is discoverable by the right users in every market you target, laying the foundation for organic growth."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Asset Optimization",
      do: "We optimize visual assets including icons, screenshots, and preview videos to capture attention immediately.",
      impact: "Drastically improves the conversion rate from 'Page View' to 'Install' by communicating value instantly."
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Google Play Store Experiments",
      do: "We run Google Play store listing experiments to A/B test icons, screenshots, and text, using the Asset Library to organize creatives effectively.",
      impact: "Scientifically validates which assets perform best, removing guesswork from your creative strategy and maximizing ROI."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "iOS Custom Product Pages",
      do: "For iOS, we use Custom Product Pages (CPPs) to align store pages and Apple Search Ads variations with specific user intents (up to 35 CPPs), comparing performance against defaults.",
      impact: "Aligns the ad promise with the landing page reality, significantly boosting relevance scores and conversion rates for paid traffic."
    }
  ],
  experience: [
    {
      title: "Creative Boards",
      text: "Before/after visual comparisons and evolution of your store assets, giving you clear insight into creative direction."
    },
    {
      title: "Testing Plans",
      text: "Comprehensive A/B testing roadmaps segmented by locale or audience to systematically improve performance."
    }
  ],
  roi: [
    "Conversion. Store page → install CVR.",
    "Visibility. Browse & search visibility.",
    "Reputation. Review volume & ratings.",
    "Retention. Day 1 & 7 retention stats."
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

const OptimisationPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-0 pb-12 bg-slate-50 dark:bg-icy-dark min-h-screen relative overflow-hidden transition-colors duration-300">
      
      {/* 
        Wavy Background Hero Section
      */}
      <WavyBackground 
        className="max-w-4xl mx-auto pb-12 md:pb-40 px-4"
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
                Total <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Optimisation</span>
            </h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-6 text-xl text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-md"
            >
                Dominate search. Be the answer.
            </motion.p>
         </motion.div>

         {/* 
            Glowing Horizon Lines - "Neon Bar"
         */}
        <div className="w-full max-w-4xl h-24 md:h-40 relative mt-4 md:mt-8 mx-auto">
            {/* Gradients */}
            <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-icy-main to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
            <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-icy-main to-transparent h-px w-3/4 mx-auto" />
            <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
            <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-1/4 mx-auto" />
        </div>

      </WavyBackground>

      <div className="w-[95%] md:w-[90%] mx-auto relative z-10 space-y-12 md:space-y-24 mb-12 px-4">
        
        {/* MEGA SECTION: Technical SEO & Content Strategy */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-icy-main rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400 rounded-full blur-[100px] pointer-events-none" 
            />

            {/* Header */}
            <div className="relative z-10 mb-16 text-center max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-icy-main/10 text-icy-main text-sm font-sans font-semibold mb-6 border border-icy-main/20"
                >
                    <Activity className="w-4 h-4" />
                    <span>Core Service</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {technicalSeoData.title}
                </h2>
                <h3 className="text-2xl font-sans text-icy-main font-medium mb-6">
                    {technicalSeoData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {technicalSeoData.intro}
                </p>
            </div>

            {/* 4 Pillars Grid - Staggered */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-16 relative z-10"
            >
                {technicalSeoData.pillars.map((pillar, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="group bg-white/50 dark:bg-slate-900/40 p-5 md:p-8 rounded-3xl border border-white/30 dark:border-white/5 hover:border-icy-main/40 transition-all hover:shadow-lg dark:hover:shadow-black/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div 
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-white/10 dark:to-white/5 text-icy-main flex items-center justify-center shadow-sm border border-white/20"
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
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-icy-main mb-2">Impact</h5>
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
                        <MessageSquare className="w-6 h-6 text-icy-main" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Clarity & Actionable Outputs</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-3 gap-6"
                    >
                        {technicalSeoData.experience.map((exp, i) => (
                            <motion.div key={i} variants={itemVariants} className="space-y-3">
                                <div className="w-2 h-2 rounded-full bg-icy-main mb-2"></div>
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
                        <LineChart className="w-6 h-6 text-cyan-400" />
                        Measuring ROI
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {technicalSeoData.roi.map((item, i) => (
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

        {/* MEGA SECTION 2: AEO (Updated to Indigo/Blue Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Indigo/Blue Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px] pointer-events-none" 
            />

            {/* Header */}
            <div className="relative z-10 mb-16 text-center max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-sans font-semibold mb-6 border border-indigo-500/20"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Future of Search</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {aeoData.title}
                </h2>
                <h3 className="text-2xl font-sans text-indigo-500 font-medium mb-6">
                    {aeoData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {aeoData.intro}
                </p>
            </div>

            {/* 4 Pillars Grid - Staggered */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-16 relative z-10"
            >
                {aeoData.pillars.map((pillar, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="group bg-white/50 dark:bg-slate-900/40 p-5 md:p-8 rounded-3xl border border-white/30 dark:border-white/5 hover:border-indigo-500/40 transition-all hover:shadow-lg dark:hover:shadow-black/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div 
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-white/10 dark:to-white/5 text-indigo-500 flex items-center justify-center shadow-sm border border-white/20"
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
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-indigo-500 mb-2">Impact</h5>
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
                        <Activity className="w-6 h-6 text-indigo-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Visibility & Insight</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                        {aeoData.experience.map((exp, i) => (
                            <motion.div key={i} variants={itemVariants} className="space-y-3">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mb-2"></div>
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
                        <ShieldCheck className="w-6 h-6 text-blue-400" />
                        Demonstrating Authority
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {aeoData.roi.map((item, i) => (
                            <motion.li key={i} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
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

         {/* MEGA SECTION 3: ASO (Updated to Sky/Cyan Theme) */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Sky/Cyan Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400 rounded-full blur-[100px] pointer-events-none" 
            />

            {/* Header */}
            <div className="relative z-10 mb-16 text-center max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-sm font-sans font-semibold mb-6 border border-sky-500/20"
                >
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile Growth</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {asoData.title}
                </h2>
                <h3 className="text-2xl font-sans text-sky-500 font-medium mb-6">
                    {asoData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {asoData.intro}
                </p>
            </div>

            {/* 4 Pillars Grid - Staggered */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-16 relative z-10"
            >
                {asoData.pillars.map((pillar, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="group bg-white/50 dark:bg-slate-900/40 p-5 md:p-8 rounded-3xl border border-white/30 dark:border-white/5 hover:border-sky-500/40 transition-all hover:shadow-lg dark:hover:shadow-black/20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div 
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-50 to-white dark:from-white/10 dark:to-white/5 text-sky-500 flex items-center justify-center shadow-sm border border-white/20"
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
                                <h5 className="text-xs font-bold font-sans uppercase tracking-wider text-sky-500 mb-2">Impact</h5>
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
                        <Activity className="w-6 h-6 text-sky-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Creative Strategy & Plans</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                        {asoData.experience.map((exp, i) => (
                            <motion.div key={i} variants={itemVariants} className="space-y-3">
                                <div className="w-2 h-2 rounded-full bg-sky-500 mb-2"></div>
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
                        <LineChart className="w-6 h-6 text-cyan-400" />
                        Measuring ROI
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {asoData.roi.map((item, i) => (
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

export default OptimisationPage;