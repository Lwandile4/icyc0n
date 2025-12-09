
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Share2, Users, Video, Sparkles, Smartphone, Globe, BookOpen, TrendingUp, Repeat, Calculator } from 'lucide-react';
import AnimatedArrows from '../components/ui/animated-arrows';
import { AnimatedText } from '../components/ui/animated-text';
import { TabbedMegaSections } from '../components/ui/tabbed-mega-sections';

// ILLUSTRATION COMPONENTS
const SocialIllustration = () => (
    <div className="w-full h-48 rounded-2xl bg-slate-900/50 border border-white/10 flex items-center justify-center p-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0))]"></div>
        <div className="flex items-center justify-center gap-4">
            {[Share2, Users, Video].map((Icon, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className={`p-4 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg ${i === 1 ? 'scale-125 mx-4' : ''}`}>
                    <Icon className="w-8 h-8" />
                </motion.div>
            ))}
        </div>
    </div>
);
const MultilingualIllustration = () => (
    <div className="w-full h-48 rounded-2xl bg-slate-900/50 border border-white/10 flex items-center justify-center p-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0))]"></div>
        <div className="relative flex items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                <Globe className="w-24 h-24 text-cyan-400 opacity-30" />
            </motion.div>
            {['文', 'A', 'अ'].map((char, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="absolute font-bold text-3xl text-cyan-300" style={{ transform: `rotate(${i * 120}deg) translate(60px) rotate(-${i * 120}deg)` }}>
                    {char}
                </motion.span>
            ))}
        </div>
    </div>
);
const FreeZoneIllustration = () => (
    <div className="w-full h-48 rounded-2xl bg-slate-900/50 border border-white/10 flex items-center justify-center p-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0))]"></div>
        <div className="flex items-center space-x-4">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}><Calculator className="w-16 h-16 text-teal-400 bg-teal-500/10 p-4 rounded-2xl border border-teal-500/20" /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}><Sparkles className="w-8 h-8 text-white" /></motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}><TrendingUp className="w-16 h-16 text-teal-300 bg-teal-500/10 p-4 rounded-2xl border border-teal-500/20" /></motion.div>
        </div>
    </div>
);

const socialData = {
  title: "Social & Community Marketing Services", subtitle: "Policy-Compliant Audience Growth", intro: "We ensure your brand is present where your customers spend their time, distributing value and converting attention into demand, all while strictly adhering to community rules.",
  pillars: [
    { icon: <Share2 className="w-6 h-6" />, title: "Unified Social Media Management", do: "We develop and manage unified content calendars for LinkedIn, X, Instagram, and TikTok, creating a mix of short videos, carousels, and text posts published at optimal times.", impact: "Builds a reliable and professional brand presence, keeping your audience engaged, nurturing trust, and systematically growing your follower base across all major platforms." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Viral Short-Form Video Production", do: "We specialize in producing and editing high-impact Reels, Shorts, and TikToks, engineered to hook attention in the first three seconds using dynamic editing and trending audio.", impact: "Captures explosive algorithm-friendly growth. Short-form video is the primary driver of discovery, and by mastering this format, we significantly increase your reach and attract new audiences." },
    { icon: <Users className="w-6 h-6" />, title: "Authentic Community Participation", do: "We facilitate genuine brand participation in relevant online communities like Reddit and Discord. Our agents operate under real accounts, provide value, and follow all community rules with zero spam.", impact: "Builds authentic brand authority and trust within niche communities, driving qualified interest from highly engaged users and establishing your brand as a helpful peer." },
    { icon: <Video className="w-6 h-6" />, title: "Strategic YouTube Channel Growth", do: "We manage and optimize your YouTube channel, crafting compelling titles, descriptions, and implementing video chapters and compliant metadata to drive growth.", impact: "Transforms YouTube from a video host into a powerful discovery and lead generation engine, increasing visibility and subscriber growth while protecting your channel from policy violations." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Creative Acceleration with Responsible AI", do: "We optionally leverage next-gen AI tools to accelerate creative production, using text-to-video or AI image generation for social visuals, with transparency measures like watermarking.", impact: "Dramatically increases the volume and variety of your visual content, allowing for rapid testing of creative concepts to keep your social feeds fresh and engaging." }
  ],
  experience: [ { title: "Strategic Content Calendar", text: "A clear week-by-week calendar with post drafts and a rationale explaining the strategy behind each piece." }, { title: "DM & Comments Playbook", text: "A playbook that routes high-intent conversations to sales and provides guidelines to squash policy risks in public interactions." } ],
  roi: [ "Qualified Traffic. Visits to your website from social platforms.", "Engagement & Amplification. Post saves, shares, and audience sentiment.", "Responsiveness. Average response time to community inquiries.", "Efficiency. Customer Acquisition Cost (CAC) for social ad campaigns." ],
  guardrails: "We operate with strict adherence to platform policies, including YouTube’s spam rules, Reddit’s guidelines, and Discord’s terms. We prohibit ban evasion, vote manipulation, and any inauthentic behavior to ensure your brand’s reputation remains secure."
};
const multilingualData = {
  title: "Multilingual SEO Services", subtitle: "Serve the Right Language, Win the Right Market", intro: "We build dedicated, culturally adapted digital presences to unlock new international markets. Our process uses automated translation as a starting point, followed by meticulous human refinement.",
  pillars: [
    { icon: <Globe className="w-6 h-6" />, title: "Strategic Multilingual Site Architecture", do: "We launch and manage dedicated, correctly structured language versions of your site (e.g., /es/, /de/), implementing precise hreflang tags and translating all critical on-page elements.", impact: "Eliminates technical barriers to global discovery. Search engines can clearly understand which page to rank for which audience, dramatically improving your visibility in local search results." },
    { icon: <BookOpen className="w-6 h-6" />, title: "Cultural Adaptation & Glossary Management", do: "We adapt messaging, idioms, and value propositions to align with local cultural norms. We build and maintain a centralized brand glossary for consistent terminology.", impact: "Builds trust and relevance. Visitors feel your brand understands their specific needs and speaks their language authentically, reinforcing your brand identity globally." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Phased, Data-Driven Market Expansion", do: "We adopt a strategic, low-risk expansion model, localizing for 1-2 high-value locales first. We then measure traction and refine our process before expanding further.", impact: "Ensures efficient use of your budget. You invest in markets that show clear returns, minimizing guesswork and building a scalable blueprint for global growth." }
  ],
  experience: [ { title: "Centralized Languages Dashboard", text: "A single view showing all active locales, with content coverage, quality flags, and a prioritized list of pages to localize." }, { title: "A Living Brand Glossary", text: "Your single source of truth for approved multilingual terminology, ensuring consistency across all markets and teams." } ],
  roi: [ "Technical Reach. The number of indexed pages per locale.", "Local Visibility. Improvement in local keyword rankings.", "Business Impact. Growth in conversions segmented by language." ]
};
const freeZoneData = {
  title: "Free Zone Creative Services", subtitle: "Sustainable Top-of-Funnel Growth", intro: "We develop free micro-tools, calculators, and content systems to act as powerful lead magnets and drive sustainable top-of-funnel growth.",
  pillars: [
    { icon: <Repeat className="w-6 h-6" />, title: "The 'Answer Once, Everywhere' Content Engine", do: "We transform a single customer support question into a multi-platform content campaign: a help doc, FAQ page, short video, social post, and email tip, extracting maximum value from every insight.", impact: "Creates a perpetual content machine that efficiently addresses market demand, building a comprehensive resource hub that attracts searches and nurtures leads at scale." },
    { icon: <Calculator className="w-6 h-6" />, title: "Micro-Tool & Interactive Asset Development", do: "We propose and help develop free micro-tools like ROI calculators or diagnostic quizzes, designed for rapid publication to provide immediate utility and capture leads.", impact: "Creates high-value lead magnets that outperform traditional content. Tools solve specific problems, making them highly shareable and directly capturing lead information from engaged prospects." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Data-Driven Trend Surfacing", do: "We continuously monitor signals from Google Trends and your analytics to surface timely, relevant topics and tool ideas that align with rising market interest.", impact: "Ensures your creative output is always aligned with real-time demand, allowing you to capitalize on emerging trends and capture traffic surges as they happen." }
  ],
  experience: [ { title: "Strategic Ideation", text: "A Weekly Idea Pack with projected impact, effort level, and example copy to accelerate execution." }, { title: "Monthly Shipped Tally", text: "A monthly tally linking each launched tool or campaign to resulting metrics like new traffic and leads." } ],
  roi: [ "Lead Generation. MQLs captured from free tools and content.", "Authority Growth. Quality editorial backlinks earned to your micro-tools.", "Market Reach. Expansion of new keyword rankings." ]
};

const growthSections = [
    { tabTitle: "Social & Community", tabIcon: <Share2 />, theme: 'blue', data: socialData, illustration: <SocialIllustration /> },
    { tabTitle: "Multilingual SEO", tabIcon: <Globe />, theme: 'cyan', data: multilingualData, illustration: <MultilingualIllustration /> },
    { tabTitle: "Free Zone Creatives", tabIcon: <Sparkles />, theme: 'teal', data: freeZoneData, illustration: <FreeZoneIllustration /> },
];

const GrowthPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-0 pb-12 bg-slate-50 dark:bg-icy-dark min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <div className="relative h-[60vh] md:h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-icy-dark">
        <AnimatedArrows />
        <div className="relative z-10 text-center px-4">
            <AnimatedText 
              text="Accelerate Growth"
              className="text-4xl sm:text-5xl md:text-8xl font-sans text-center text-white tracking-tight drop-shadow-lg"
              highlightedWords={{
                'Growth': 'bg-gradient-to-r from-cyan-400 to-blue-600'
              }}
            />
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-6 text-xl text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-md"
            >
                Scale faster with viral loops and global infrastructure.
            </motion.p>
        </div>
      </div>
      
      <TabbedMegaSections sections={growthSections} />
    </div>
  );
};

export default GrowthPage;
