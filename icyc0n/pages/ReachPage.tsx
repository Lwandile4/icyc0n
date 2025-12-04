import React from 'react';
import CTA from '../components/CTA';
import { motion, Variants } from 'framer-motion';
import { Mail, MessageSquare, ShoppingBag, MapPin, PenTool, Repeat, Briefcase, ShieldCheck, Activity, LineChart, CheckCircle2, Layout, Star, LayoutDashboard, MousePointerClick, Zap, ClipboardList, Shield, CheckSquare, FileEdit, Link, CalendarCheck, Map, Navigation, Search } from 'lucide-react';
import { WavyBackground } from '../components/ui/wavy-background';

const emailSmsData = {
  title: "Email and SMS Revenue Engine",
  subtitle: "Automated Performance & Compliance",
  intro: "We build automated high-converting flows and broadcast campaigns that drive consistent revenue and foster lasting customer relationships through compliant lifecycle messaging.",
  pillars: [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Ethical List Growth and Preference Management",
      do: "We build your subscriber list through ethical opt-in methods and clear preference centers ensuring every contact has explicitly chosen to hear from you.",
      impact: "This creates a foundation of high intent and engaged contacts. Higher engagement rates directly improve deliverability and campaign performance turning your list into a valuable owned asset primed for conversion."
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Automated Lifecycle Flow Programming",
      do: "We design and implement automated email and SMS sequences that guide contacts through the customer journey. Key flows include a 3-email Welcome series, a 7-Day Activation sequence, ongoing Weekly Nurture campaigns, Win-back programs, and review or user generated content prompts.",
      impact: "This system automates revenue and retention. Capturing customers at every critical moment from signup to reengagement maximizes lifetime value, nurtures loyalty, and consistently recovers lost sales without manual effort."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Compliant B2B Outreach Strategy",
      do: "Where lawful, we execute value-first B2B outreach campaigns. Each message prioritizes providing immediate value and includes instant unsubscribe functionality. We document the lawful basis for communication such as legitimate interest or consent as required by regional regulations.",
      impact: "This opens a new pipeline for qualified lead generation. Our compliant and respectful approach protects your brand reputation while effectively initiating commercial conversations with potential business partners."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Built In Global Compliance Framework",
      do: "We bake compliance into every campaign adhering to key regulations including CAN-SPAM basics, GDPR lawful basis, and CASL consent identification. We help you determine when legitimate interest applies versus explicit consent and always include clear instant opt-out mechanisms.",
      impact: "This eliminates legal risk and builds trust with your audience. By prioritizing compliance you avoid costly fines, protect your sender reputation, and demonstrate respect for your subscribers which in turn boosts engagement and loyalty."
    }
  ],
  experience: [
    {
      title: "Visual Journey Maps",
      text: "A visual map of all automated customer journeys from signup to win back showing how each flow interacts."
    },
    {
      title: "Performance Dashboards",
      text: "Campaign performance dashboards with clear metrics on revenue generated from each automated flow and broadcast."
    }
  ],
  roi: [
    "Revenue Generated. Direct sales attributed to email and SMS campaigns.",
    "Flow Performance. Conversion rates for key automated sequences like Welcome and Abandoned Cart.",
    "List Health. Growth in opted-in subscribers and overall engagement rates.",
    "Compliance Status. Audit-ready documentation of lawful basis and consent management."
  ]
};

const marketplaceData = {
  title: "Marketplace and Software Directory Listings Service",
  subtitle: "Capture Buyers Actively Comparing Solutions",
  intro: "We secure your strategic placement on high intent platforms like G2, Capterra, and Amazon to capture buyers actively comparing solutions.",
  pillars: [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Strategic Listing Creation and Optimization",
      do: "We draft or fully refresh your listings on key marketplaces and directories. We optimize every element including the headline, proof points, pricing details, screenshots, and FAQs. We also implement tracking parameters to accurately attribute all incoming traffic and conversions.",
      impact: "This captures demand at the point of decision. A compelling optimized listing acts as a 24/7 sales asset on the very platforms where your potential customers are vetting options directly driving high quality leads and trials."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Authentic Review and Social Proof Coordination",
      do: "We help coordinate the collection of authentic customer reviews and case studies for your listings. We follow a strict policy of no incentives and no manipulation operating fully in line with platform rules and regulator guidelines to build genuine social proof.",
      impact: "This builds the critical trust needed to convert browsers into buyers. Positive unbiased reviews are the most powerful conversion factor on marketplaces. Our ethical approach protects your brand from penalties while organically improving your ranking and conversion rates on each platform."
    }
  ],
  experience: [
    {
      title: "Listings Hub",
      text: "A Listings Hub that provides a single dashboard view showing the status of each listing from draft to live along with the traffic and trial attribution data from each platform."
    }
  ],
  roi: [
    "Listing Visibility. The number of views your listing receives on each platform.",
    "Engagement. The click through rate from the marketplace to your site or trial page.",
    "Conversions. The number of trials demos or purchases directly attributed to each listing.",
    "Customer Quality. The downstream retention rate of users acquired through marketplace listings."
  ]
};

const directoryData = {
  title: "Curated Directory and Citation Submissions Service",
  subtitle: "Solidify and Protect Your Local Online Presence",
  intro: "We perform quality-first submissions to authoritative directories to solidify and protect your local online presence.",
  pillars: [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Strategic Directory Selection and Scoring",
      do: "We score and select directories based on strict criteria including topical relevance to your industry, geographic accuracy, moderation quality, and actual referral traffic history. We submit your business only to the handful of directories that truly matter for your sector and location.",
      impact: "This builds a foundation of high quality signals. A few accurate citations on trusted platforms like industry associations or major local guides are far more valuable than hundreds of low quality listings. This focused approach strengthens your local search rankings and ensures your business information is presented on reputable sites."
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: "Accurate Submission and Ongoing Management",
      do: "We handle the complete submission process to selected directories and meticulously track approval status. We proactively update every listing whenever your core business details such as Name, Address, Phone Number, or Website change ensuring perfect consistency everywhere.",
      impact: "This eliminates negative ranking factors and builds trust. Inconsistent business information across the web is a major red flag for both customers and search engines. Our management guarantees accuracy which is critical for local SEO performance and customer confidence."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Protection Against Low Quality Signals",
      do: "We strictly avoid mass low quality directory submissions and any link building schemes that violate search engine guidelines. We focus only on building a clean authentic citation profile.",
      impact: "This protects your domain reputation and long term visibility. By avoiding toxic link practices and spammy directories we ensure your SEO profile receives only positive authoritative signals that support sustainable growth."
    }
  ],
  experience: [
    {
      title: "Directory Listings Checklist",
      text: "A Directory Listings Checklist that provides a single view of all your submissions with live links and current status marked as pending or approved for easy monitoring."
    }
  ],
  roi: [
    "Direct Traffic. Referral sessions coming to your website directly from your directory listings.",
    "Local Visibility. Measurable lifts in your local map pack rankings and visibility for geo-specific searches.",
    "Profile Health. The completeness and consistency score of your business information across all tracked directories."
  ]
};

const blogData = {
  title: "Blog Engine and Backlinks Service",
  subtitle: "Build Organic Traffic and Domain Authority",
  intro: "We manage end-to-end content production and execute ethical digital PR strategies to build your organic traffic and domain authority.",
  pillars: [
    {
      icon: <FileEdit className="w-6 h-6" />,
      title: "Data Driven Content Strategy and Production",
      do: "We prioritize blog topics using real demand data including search trends, your Google Search Console performance, and direct audience feedback. We then provide complete briefs with titles, outlines, FAQs, and internal linking plans, write the final drafts, and schedule publication. We repurpose each article into social media and email assets to maximize its reach.",
      impact: "This creates a consistent pipeline of relevant content that answers market demand. Publishing 1 to 2 targeted articles per week builds your site as a topical authority, attracts qualified search traffic, and provides versatile assets for all your marketing channels turning readers into leads."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Strategic On Page Optimization and User Experience",
      do: "We enhance articles with genuine Q and A sections where they provide clear user value focusing on helpful content rather than outdated search result features. We ensure every post is optimized for both readability and search intent with clear calls to action.",
      impact: "This improves engagement and conversion rates. Content that truly helps visitors keeps them on the page longer and builds trust. This positive user experience is a core ranking factor and directly increases the likelihood of a visitor taking the next step such as clicking a call to action or signing up for your newsletter."
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Ethical Digital PR and Authority Building",
      do: "We conduct ethical digital PR to earn quality backlinks from reputable industry sites. This involves creating standout cornerstone content and building genuine relationships with publishers, never using manipulative link schemes.",
      impact: "This builds lasting domain authority and improves search rankings. High quality backlinks act as endorsements from other websites signaling to search engines that your site is a credible trusted resource. This lifts the ranking potential of your entire domain not just individual blog posts."
    }
  ],
  experience: [
    {
      title: "Monthly Content Calendar",
      text: "A Monthly Content Calendar showing all scheduled posts with ready-to-approve drafts and a clear plan for how each article will be repurposed across other marketing channels."
    }
  ],
  roi: [
    "Traffic Generation. Organic landings per post and overall growth in search traffic.",
    "Content Engagement. Average time on page and scroll depth.",
    "Lead Generation. Call to action clicks and newsletter sign ups directly from blog content.",
    "Business Contribution. Assisted revenue influenced by users who engaged with your blog before converting."
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

const ReachPage: React.FC = () => {
  return (
    <div className="pt-40 md:pt-0 pb-12 bg-slate-50 dark:bg-icy-dark min-h-screen relative overflow-hidden transition-colors duration-300">
      
      {/* 
        Wavy Background Hero Section
        - Using unified Blue theme matching OptimisationPage
      */}
      <WavyBackground 
        className="max-w-4xl mx-auto pb-10 px-4"
        containerClassName="h-[55vh] md:h-[80vh] mb-2 md:mb-12"
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
                Maximize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Reach</span>
            </h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-6 text-xl text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-md"
            >
                 Connect with your customers wherever they are. Whether its inboxes, directories, or marketplaces.
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
        
        {/* MEGA SECTION 1: Email & SMS (Blue/Cyan Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Blue Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500 rounded-full blur-[100px] pointer-events-none" 
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
                    <Mail className="w-4 h-4" />
                    <span>Retention Engine</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {emailSmsData.title}
                </h2>
                <h3 className="text-2xl font-sans text-blue-500 font-medium mb-6">
                    {emailSmsData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {emailSmsData.intro}
                </p>
            </div>

            {/* 4 Pillars Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-16 relative z-10"
            >
                {emailSmsData.pillars.map((pillar, idx) => (
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
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {/* Experience Column */}
                <div className="lg:col-span-2 bg-slate-50/50 dark:bg-white/5 rounded-3xl p-5 md:p-8 border border-white/20 dark:border-white/5">
                    <h4 className="text-2xl font-sans font-bold text-icy-dark dark:text-white mb-8 flex items-center gap-3">
                        <Activity className="w-6 h-6 text-blue-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Automated Performance</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                        {emailSmsData.experience.map((exp, i) => (
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

                {/* ROI Column */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
                    <h4 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                        <LineChart className="w-6 h-6 text-cyan-400" />
                        Revenue Impact
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {emailSmsData.roi.map((item, i) => (
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

        {/* MEGA SECTION 2: Marketplace Listings (Indigo/Sky Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Indigo/Sky Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] pointer-events-none" 
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
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-sans font-semibold mb-6 border border-indigo-500/20"
                >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Marketplace Dominance</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {marketplaceData.title}
                </h2>
                <h3 className="text-2xl font-sans text-indigo-500 font-medium mb-6">
                    {marketplaceData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {marketplaceData.intro}
                </p>
            </div>

            {/* 2 Pillars Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-16 relative z-10"
            >
                {marketplaceData.pillars.map((pillar, idx) => (
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
                {/* Experience Column */}
                <div className="lg:col-span-2 bg-slate-50/50 dark:bg-white/5 rounded-3xl p-5 md:p-8 border border-white/20 dark:border-white/5">
                    <h4 className="text-2xl font-sans font-bold text-icy-dark dark:text-white mb-8 flex items-center gap-3">
                        <LayoutDashboard className="w-6 h-6 text-indigo-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Centralized Control</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-1 gap-6"
                    >
                        {marketplaceData.experience.map((exp, i) => (
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

                {/* ROI Column */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
                    <h4 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                        <MousePointerClick className="w-6 h-6 text-sky-400" />
                        Lead Generation
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {marketplaceData.roi.map((item, i) => (
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

        {/* MEGA SECTION 3: Directory Submissions (Sky/Teal Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Sky/Teal Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-400 rounded-full blur-[100px] pointer-events-none" 
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
                    <MapPin className="w-4 h-4" />
                    <span>Local Authority</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {directoryData.title}
                </h2>
                <h3 className="text-2xl font-sans text-sky-500 font-medium mb-6">
                    {directoryData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {directoryData.intro}
                </p>
            </div>

            {/* 3 Pillars Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-16 relative z-10"
            >
                {directoryData.pillars.map((pillar, idx) => (
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
                {/* Experience Column */}
                <div className="lg:col-span-2 bg-slate-50/50 dark:bg-white/5 rounded-3xl p-5 md:p-8 border border-white/20 dark:border-white/5">
                    <h4 className="text-2xl font-sans font-bold text-icy-dark dark:text-white mb-8 flex items-center gap-3">
                        <ClipboardList className="w-6 h-6 text-sky-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Clear Oversight</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-1 gap-6"
                    >
                        {directoryData.experience.map((exp, i) => (
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

                {/* ROI Column */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
                    <h4 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                        <Navigation className="w-6 h-6 text-teal-400" />
                        Local Impact
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {directoryData.roi.map((item, i) => (
                            <motion.li key={i} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
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

        {/* MEGA SECTION 4: Blog Engine (Sky/Blue Theme) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl overflow-hidden relative"
        >
            {/* Ambient Background Glow - Pulsing (Sky/Blue Theme) */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500 rounded-full blur-[100px] pointer-events-none" 
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
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-sm font-sans font-semibold mb-6 border border-sky-500/20"
                >
                    <PenTool className="w-4 h-4" />
                    <span>Content Engine</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-icy-dark dark:text-white mb-6 tracking-tight">
                    {blogData.title}
                </h2>
                <h3 className="text-2xl font-sans text-sky-500 font-medium mb-6">
                    {blogData.subtitle}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {blogData.intro}
                </p>
            </div>

            {/* 3 Pillars Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-16 relative z-10"
            >
                {blogData.pillars.map((pillar, idx) => (
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
                {/* Experience Column */}
                <div className="lg:col-span-2 bg-slate-50/50 dark:bg-white/5 rounded-3xl p-5 md:p-8 border border-white/20 dark:border-white/5">
                    <h4 className="text-2xl font-sans font-bold text-icy-dark dark:text-white mb-8 flex items-center gap-3">
                        <CalendarCheck className="w-6 h-6 text-sky-500" />
                        What You Experience
                        <span className="text-lg font-normal text-slate-500 dark:text-slate-400">Streamlined Publishing</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-1 gap-6"
                    >
                        {blogData.experience.map((exp, i) => (
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

                {/* ROI Column */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-3xl p-5 md:p-8 text-white shadow-xl">
                    <h4 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                        <LineChart className="w-6 h-6 text-blue-400" />
                        Impact
                    </h4>
                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                        {blogData.roi.map((item, i) => (
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

        <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <CTA />
        </div>

      </div>
    </div>
  );
};

export default ReachPage;