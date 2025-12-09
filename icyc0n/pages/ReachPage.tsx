
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShoppingBag, MapPin, PenTool, Repeat, Briefcase, ShieldCheck, Layout, Star, CheckSquare, Shield, FileEdit, Search, Link } from 'lucide-react';
import NetworkAnimation from '../components/ui/network-animation';
import { AnimatedText } from '../components/ui/animated-text';
import { TabbedMegaSections } from '../components/ui/tabbed-mega-sections';
import CTA from '../components/CTA';

const emailSmsData = {
  title: "Email and SMS Revenue Engine", subtitle: "Automated Performance & Compliance", intro: "We build automated high-converting flows and broadcast campaigns that drive consistent revenue and foster lasting customer relationships through compliant lifecycle messaging.",
  pillars: [
    { icon: <Mail className="w-6 h-6" />, title: "Ethical List Growth", do: "We build your subscriber list through ethical opt-in methods and clear preference centers, ensuring every contact has explicitly chosen to hear from you.", impact: "Creates a foundation of high-intent, engaged contacts. Higher engagement improves deliverability and campaign performance, turning your list into a valuable owned asset." },
    { icon: <Repeat className="w-6 h-6" />, title: "Automated Lifecycle Flows", do: "We design and implement automated sequences like Welcome series, Activation campaigns, and Win-back programs to guide contacts through the customer journey.", impact: "This system automates revenue and retention, capturing customers at every critical moment to maximize lifetime value and recover lost sales without manual effort." },
    { icon: <Briefcase className="w-6 h-6" />, title: "Compliant B2B Outreach", do: "Where lawful, we execute value-first B2B outreach. Each message provides immediate value and includes instant unsubscribe functionality, documenting the lawful basis for communication.", impact: "Opens a new pipeline for qualified lead generation. Our compliant and respectful approach protects your brand reputation while effectively initiating commercial conversations." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Global Compliance Framework", do: "We bake compliance into every campaign, adhering to CAN-SPAM, GDPR, and CASL. We help determine when legitimate interest applies versus explicit consent and always include clear opt-outs.", impact: "Eliminates legal risk and builds trust. Prioritizing compliance avoids costly fines, protects your sender reputation, and boosts engagement and loyalty." }
  ],
  experience: [ { title: "Visual Journey Maps", text: "A visual map of all automated customer journeys from signup to win-back, showing how each flow interacts." }, { title: "Performance Dashboards", text: "Dashboards with clear metrics on revenue generated from each automated flow and broadcast campaign." } ],
  roi: [ "Revenue Generated. Direct sales attributed to email and SMS.", "Flow Performance. Conversion rates for key automated sequences.", "List Health. Growth in opted-in subscribers and engagement rates.", "Compliance Status. Audit-ready documentation of lawful basis." ]
};
const marketplaceData = {
  title: "Marketplace & Directory Listings", subtitle: "Capture Buyers Actively Comparing Solutions", intro: "We secure your strategic placement on high-intent platforms like G2, Capterra, and Amazon to capture buyers actively comparing solutions.",
  pillars: [
    { icon: <Layout className="w-6 h-6" />, title: "Strategic Listing Optimization", do: "We draft or fully refresh your listings on key marketplaces. We optimize every element including headline, proof points, pricing, screenshots, and FAQs, implementing tracking for attribution.", impact: "This captures demand at the point of decision. An optimized listing acts as a 24/7 sales asset on platforms where customers are vetting options, driving high-quality leads." },
    { icon: <Star className="w-6 h-6" />, title: "Authentic Review Coordination", do: "We help coordinate the collection of authentic customer reviews. We follow a strict policy of no incentives and no manipulation, operating fully in line with platform rules.", impact: "Builds the critical trust needed to convert browsers into buyers. Positive, unbiased reviews are a powerful conversion factor, and our ethical approach protects your brand from penalties." }
  ],
  experience: [ { title: "Listings Hub", text: "A single dashboard view showing the status of each listing from draft to live, along with traffic and trial attribution data from each platform." } ],
  roi: [ "Listing Visibility. The number of views your listing receives.", "Engagement. The click-through rate from the marketplace to your site.", "Conversions. Trials, demos, or purchases attributed to each listing.", "Customer Quality. Downstream retention rate of acquired users." ]
};
const directoryData = {
  title: "Curated Directory & Citation Submissions", subtitle: "Solidify Your Local Online Presence", intro: "We perform quality-first submissions to authoritative directories to solidify and protect your local online presence.",
  pillars: [
    { icon: <MapPin className="w-6 h-6" />, title: "Strategic Directory Selection", do: "We score and select directories based on strict criteria like topical relevance, geographic accuracy, and referral traffic history, submitting only to those that truly matter for your sector.", impact: "Builds a foundation of high-quality signals. A few accurate citations on trusted platforms are far more valuable than hundreds of low-quality listings, strengthening local search rankings." },
    { icon: <CheckSquare className="w-6 h-6" />, title: "Accurate Submission & Management", do: "We handle the complete submission process and track approval status. We proactively update every listing whenever your core business details (NAP) change.", impact: "Eliminates negative ranking factors. Inconsistent business information is a major red flag for customers and search engines. Our management guarantees accuracy." },
    { icon: <Shield className="w-6 h-6" />, title: "Protection Against Low-Quality Signals", do: "We strictly avoid mass low-quality directory submissions and any link schemes that violate search engine guidelines. We focus only on building a clean, authentic citation profile.", impact: "Protects your domain reputation. By avoiding toxic link practices, we ensure your SEO profile receives only positive, authoritative signals that support sustainable growth." }
  ],
  experience: [ { title: "Directory Listings Checklist", text: "A single view of all your submissions with live links and current status (pending or approved) for easy monitoring." } ],
  roi: [ "Direct Traffic. Referral sessions from your directory listings.", "Local Visibility. Lifts in local map pack rankings for geo-specific searches.", "Profile Health. Consistency score of your business information." ]
};
const blogData = {
  title: "Blog Engine & Backlinks Service", subtitle: "Build Organic Traffic and Domain Authority", intro: "We manage end-to-end content production and execute ethical digital PR strategies to build your organic traffic and domain authority.",
  pillars: [
    { icon: <FileEdit className="w-6 h-6" />, title: "Data-Driven Content Production", do: "We prioritize blog topics using real demand data from search trends and your GSC performance. We provide complete briefs, write the drafts, and repurpose each article for social and email.", impact: "Creates a consistent pipeline of relevant content that answers market demand, building your site as a topical authority and attracting qualified search traffic." },
    { icon: <Search className="w-6 h-6" />, title: "Strategic On-Page Optimization", do: "We enhance articles with genuine Q&A sections where they provide user value. We ensure every post is optimized for readability and search intent with clear calls-to-action.", impact: "Improves engagement and conversion rates. Content that truly helps visitors keeps them on the page longer, building trust and increasing the likelihood of a conversion." },
    { icon: <Link className="w-6 h-6" />, title: "Ethical Digital PR & Authority Building", do: "We conduct ethical digital PR to earn quality backlinks from reputable industry sites by creating standout cornerstone content and building genuine relationships with publishers.", impact: "Builds lasting domain authority. High-quality backlinks act as endorsements, signaling to search engines that your site is a credible resource, lifting the ranking potential of your entire domain." }
  ],
  experience: [ { title: "Monthly Content Calendar", text: "A calendar showing all scheduled posts with ready-to-approve drafts and a clear plan for how each article will be repurposed." } ],
  roi: [ "Traffic Generation. Organic landings per post and overall growth.", "Content Engagement. Average time on page and scroll depth.", "Lead Generation. CTA clicks and newsletter sign-ups from blog content.", "Business Contribution. Assisted revenue from users who engaged with your blog." ]
};

const reachSections = [
    { tabTitle: "Email & SMS", tabIcon: <Mail />, theme: 'blue', data: emailSmsData },
    { tabTitle: "Marketplace", tabIcon: <ShoppingBag />, theme: 'indigo', data: marketplaceData },
    { tabTitle: "Directory", tabIcon: <MapPin />, theme: 'sky', data: directoryData },
    { tabTitle: "Blog & Backlinks", tabIcon: <PenTool />, theme: 'cyan', data: blogData },
];

const ReachPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-0 pb-12 bg-slate-50 dark:bg-icy-dark min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <div className="relative h-[60vh] md:h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-icy-dark">
        <NetworkAnimation />
        <div className="relative z-10 text-center px-4">
            <AnimatedText 
              text="Reach"
              className="text-4xl sm:text-5xl md:text-8xl font-sans text-center text-white tracking-tight drop-shadow-lg"
              highlightedWords={{ 'Reach': 'bg-gradient-to-r from-sky-400 to-sky-600' }}
            />
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 text-xl text-white/90 max-w-lg mx-auto leading-relaxed drop-shadow-md"
            >
                Connect with customers wherever they are—inboxes, directories, or marketplaces.
            </motion.p>
        </div>
      </div>

      <TabbedMegaSections sections={reachSections} />
      
    <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      <CTA />
    </div>
    </div>
  );
};

export default ReachPage;
