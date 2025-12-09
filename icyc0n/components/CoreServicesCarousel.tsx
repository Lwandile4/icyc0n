
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from './ui/progressive-carousel';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// PERFORMANCE OPTIMIZATION: Responsive image URLs with multiple sizes
// Base URLs for carousel images - Unsplash API supports automatic optimization
const carouselItems = [
  {
    sliderName: 'optimisation',
    title: 'Optimisation',
    desc: 'Technical foundations for search & app stores.',
    subFeatures: ['Search Engine Optimzation & Audits', 'AEO (Answer Engine Optimzation)', 'App Store Optimization', 'Local & GBP Visibility'],
    // Base URL for srcset generation
    imgBase: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    link: '/optimisation'
  },
  {
    sliderName: 'reach',
    title: 'Reach',
    desc: 'Connect with customers on every platform.',
    subFeatures: ['Email & SMS Automation', 'Marketplace Listings', 'Blog Content Engine', 'Backlink Acquisition'],
    imgBase: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa',
    link: '/reach'
  },
  {
    sliderName: 'growth',
    title: 'Growth',
    desc: 'Scale into new markets and communities.',
    subFeatures: ['Social Media Management', 'Multilingual Expansion', 'Viral Short-Form Video', 'Community Engagement'],
    imgBase: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1',
    link: '/growth'
  },
];

const CoreServicesCarousel: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 bg-black/20">
      <div className="w-[90%] lg:w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Core Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A holistic suite of digital tools designed for the modern business.
            Select a pillar to explore capabilities.
          </p>
        </div>

        <div className="w-full">
          <ProgressSlider vertical={false} activeSlider='optimisation' className="w-full">
            <SliderContent className="w-full">
              {carouselItems.map((item, index) => (
                <SliderWrapper key={index} value={item.sliderName} className="w-full">
                  <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                    {/* PERFORMANCE OPTIMIZATION: Responsive images with srcset
                        Loads appropriate image size based on viewport width
                        Reduces image size by ~60-70% on mobile/tablet
                        WebP format support for ~25-35% additional compression */}
                    <img
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 dark:opacity-40"
                      srcSet={`
                        ${item.imgBase}?q=80&w=640&auto=format&fit=crop&fm=webp 640w,
                        ${item.imgBase}?q=80&w=1024&auto=format&fit=crop&fm=webp 1024w,
                        ${item.imgBase}?q=80&w=1920&auto=format&fit=crop&fm=webp 1920w,
                        ${item.imgBase}?q=80&w=640&auto=format&fit=crop 640w,
                        ${item.imgBase}?q=80&w=1024&auto=format&fit=crop 1024w,
                        ${item.imgBase}?q=80&w=1920&auto=format&fit=crop 1920w
                      `}
                      sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                      src={`${item.imgBase}?q=80&w=1024&auto=format&fit=crop`}
                      alt={item.title}
                      loading="lazy"
                      width={1920}
                      height={1080}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-24 md:pb-0">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                                {item.desc}
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {item.subFeatures.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/90">
                                        <div className="p-1 rounded-full bg-icy-main/20 text-icy-main">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="font-medium">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <Link 
                                to={item.link}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-icy-main hover:bg-icy-secondary text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-icy-main/25"
                            >
                                Explore {item.title} <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[80%] h-auto bg-black/80 backdrop-blur-2xl border border-white/20 overflow-hidden grid grid-cols-3 rounded-full shadow-2xl p-1 gap-1">
              {carouselItems.map((item, index) => (
                <SliderBtn
                  key={index}
                  value={item.sliderName}
                  className="text-center cursor-pointer py-3 md:py-4 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex flex-col items-center justify-center gap-1"
                  progressBarClass="bg-icy-main h-2 absolute inset-0 z-[-1] opacity-80 rounded-full"
                >
                  <h2 className="text-sm md:text-base font-bold text-white">
                    {item.title}
                  </h2>
                </SliderBtn>
              ))}
            </SliderBtnGroup>
          </ProgressSlider>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesCarousel;
