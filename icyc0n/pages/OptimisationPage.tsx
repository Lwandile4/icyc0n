
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Smartphone, Layers, FileText, Map, Brain, Network, ShieldCheck, Settings, Palette, FlaskConical, Activity, Sparkles } from 'lucide-react';
import { WavyBackground } from '../components/ui/wavy-background';
import { AnimatedText } from '../components/ui/animated-text';
import { TabbedMegaSections } from '../components/ui/tabbed-mega-sections';

const technicalSeoData = {
  title: "Technical SEO & Content Strategy Services",
  subtitle: "How We Drive Qualified Traffic & Build Trust",
  intro: "At Icycon, we engineer digital visibility. We don't just \"do SEO\". We build the technical foundation and create the strategic content that ensures your organization is found and trusted by the exact customers searching for your solutions. Here’s how our services translate into your growth.",
  pillars: [
    { icon: <Layers className="w-6 h-6" />, title: "Technical Foundation Audit & Optimization", do: "We ensure search engines can efficiently discover, crawl, and interpret every part of your website. This includes validating sitemaps, fixing site structure issues, and monitoring indexing health in real-time.", impact: "Eliminates invisible barriers that make your content unfindable. You gain a website that communicates clearly with Google, ensuring your investment in content and pages translates into actual search presence." },
    { icon: <Search className="w-6 h-6" />, title: "Search Demand & Intent Mapping", do: "We analyze the market to build a comprehensive map of what your potential customers are actively searching for and why. We then align each search intent with the most effective page on your site.", impact: "Moves you from guessing to knowing. This strategy ensures every piece of content we recommend serves a clear business purpose by capturing qualified traffic at various stages of the buyer's journey." },
    { icon: <FileText className="w-6 h-6" />, title: "Strategic Content Creation from Brief to Draft", do: "We turn intent maps into actionable content, creating detailed briefs for pillar guides, product comparisons, and FAQs, complete with strategic angles and outlines. We then draft the content and implement advanced Schema.org markup.", impact: "You receive a steady pipeline of high-quality, purpose-driven content that ranks, positions your team as an authority, and technically structures information so Google can easily feature it in rich results." },
    { icon: <Map className="w-6 h-6" />, title: "Local Visibility & Google Business Profile Management", do: "We fully optimize and manage your Google Business Profile, including category selection, photo management, posts, and professional Q&A engagement, with a secure review moderation system.", impact: "Builds trust and dominates local search. A vibrant, actively managed GBP profile significantly increases your visibility in local \"Map Pack\" results and attracts store visits or calls." }
  ],
  experience: [
    { title: "A Plain-English SEO Dashboard", text: "No jargon. A clear view of your visibility, a prioritized list of technical issues, and a content calendar." },
    { title: "Ready-to-Approve Content Assets", text: "Receive fully outlined and drafted articles, engineered for users and search engines, streamlining your editorial process." },
    { title: "A Managed Reviews Inbox", text: "We provide suggested, brand-aligned replies to customer reviews, emphasizing authentic engagement." }
  ],
  roi: [
    "Traffic Quality. Increase in qualified organic sessions.",
    "Efficiency. Reduced time to index for new content.",
    "Visibility Growth. Expanded target term coverage and rankings.",
    "Authority Signals. Growth in Featured Snippet and local Map Pack visibility.",
    "Reputation Health. Positive trends in review volume and ratings."
  ]
};
const aeoData = {
  title: "AI & Answer Engine Optimization (AEO) Services",
  subtitle: "Establishing Authority in the Conversational Era",
  intro: "The future of search is not just about links; it's about being cited as a source. We optimize your entire footprint to ensure Large Language Models (LLMs) recognize and reference your organization as a definitive authority.",
  pillars: [
    { icon: <Brain className="w-6 h-6" />, title: "Entity-Based Content Optimization", do: "We move beyond keywords to optimize for real-world concepts (entities) that LLMs understand, building a foundational \"Question Bank\" and transforming them into concise, evidence-rich Q&A pages with structured Schema.org markup.", impact: "Makes your content intrinsically easier for AI to quote accurately, positioning your site as the primary source for answers, which directly translates into brand citations in AI summaries." },
    { icon: <Network className="w-6 h-6" />, title: "Knowledge Graph Construction", do: "We audit and structure your content to strengthen your brand's presence in the interconnected \"knowledge graph\" that powers intelligent search, clarifying entity relationships and verifying official data points.", impact: "Builds a durable, semantic understanding of your authority that both traditional search and AI models rely on, increasing the likelihood of being presented as a trusted node of information." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Fact-Checking & Authority Building", do: "For your most critical pages, we help you add an \"Evidence\" section that cites primary sources and original data. We ensure your published facts are precise, current, and well-referenced.", impact: "LLMs are trained to prioritize accurate, well-sourced data. By becoming a verified source of truth, you dramatically increase your value to these models, making your content indispensable for training and response generation." },
    { icon: <Settings className="w-6 h-6" />, title: "Strategic AI Crawler Management", do: "We provide strategic control over how AI crawlers access your site, implementing robots.txt directives and experimenting with emerging conventions to guide models to your most canonical resources.", impact: "Gives you agency in the new AI landscape. You can choose to fully engage with platforms or restrict scraping based on informed strategy rather than default settings." }
  ],
  experience: [
    { title: "The AEO Coverage Board", text: "A clear dashboard showing which questions from your bank are live, which need updates, and which lack strong citations." },
    { title: "Weekly \"Answer Diff\" Snapshots", text: "Periodic reports showing how AI answers to your core questions have evolved, including when and how your brand citations appear." }
  ],
  roi: [
    "Citation Rate. Your \"Answer with citation\" rate in AI responses.",
    "Brand Presence. Volume and context of brand mentions in AI answers.",
    "Direct Impact. Traffic and conversions from your Q&A pages.",
    "Authority Growth. Improvement in E-E-A-T signals across your domain."
  ]
};
const asoData = {
  title: "App Store Optimization (ASO)",
  subtitle: "Improve Store Discovery & Install Conversion",
  intro: "With millions of apps fighting for attention, having a great app isn't enough. We optimize every element of your store listing to drive organic downloads and maximize the efficiency of your paid user acquisition campaigns.",
  pillars: [
    { icon: <FileText className="w-6 h-6" />, title: "Metadata Refinement", do: "We refine store metadata including titles, descriptions, and localized variants to target high-value keywords across different regions.", impact: "Ensures your app is discoverable by the right users in every market you target, laying the foundation for organic growth." },
    { icon: <Palette className="w-6 h-6" />, title: "Creative Asset Optimization", do: "We optimize visual assets including icons, screenshots, and preview videos to capture attention immediately.", impact: "Drastically improves the conversion rate from 'Page View' to 'Install' by communicating value instantly." },
    { icon: <FlaskConical className="w-6 h-6" />, title: "Google Play Store Experiments", do: "We run A/B tests on icons, screenshots, and text, using the Asset Library to organize creatives effectively.", impact: "Scientifically validates which assets perform best, removing guesswork from your creative strategy and maximizing ROI." },
    { icon: <Smartphone className="w-6 h-6" />, title: "iOS Custom Product Pages", do: "We use Custom Product Pages (CPPs) to align store pages and Apple Search Ads variations with specific user intents, boosting relevance and conversion rates for paid traffic.", impact: "Aligns the ad promise with the landing page reality, significantly boosting relevance scores and conversion rates for paid traffic." }
  ],
  experience: [
    { title: "Creative Boards", text: "Before/after visual comparisons and evolution of your store assets, giving you clear insight into creative direction." },
    { title: "Testing Plans", text: "Comprehensive A/B testing roadmaps segmented by locale or audience to systematically improve performance." }
  ],
  roi: [
    "Conversion. Store page to install CVR.",
    "Visibility. Browse & search visibility.",
    "Reputation. Review volume & ratings.",
    "Retention. Day 1 & 7 retention stats."
  ]
};

const optimisationSections = [
  {
    tabTitle: "Technical SEO",
    tabIcon: <Search />,
    theme: 'blue',
    data: technicalSeoData
  },
  {
    tabTitle: "AEO",
    tabIcon: <Sparkles />,
    theme: 'indigo',
    data: aeoData
  },
  {
    tabTitle: "ASO",
    tabIcon: <Smartphone />,
    theme: 'sky',
    data: asoData
  }
];

const OptimisationPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-0 pb-12 bg-slate-50 dark:bg-icy-dark min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <WavyBackground 
        className="max-w-4xl mx-auto pb-12 md:pb-40 px-4"
        containerClassName="h-[50vh] md:h-[80vh]"
        colors={['#4092ef', '#0079d2', '#22d3ee', '#003683', '#a5f3fc']}
        waveWidth={60}
        backgroundFill="#001358"
        blur={5}
        speed="slow"
        waveOpacity={1}
      >
        <AnimatedText 
          text="Total Optimisation"
          className="text-4xl sm:text-5xl md:text-8xl font-sans text-center text-white tracking-tight drop-shadow-lg"
          highlightedWords={{
            'Optimisation': 'bg-gradient-to-r from-cyan-400 to-blue-600'
          }}
        />
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-xl text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-md"
        >
            Dominate search. Be the answer.
        </motion.p>
      </WavyBackground>

      <TabbedMegaSections sections={optimisationSections} />
    </div>
  );
};

export default OptimisationPage;
