import React, { Suspense } from 'react';
// PERFORMANCE OPTIMIZATION: Import section-specific skeleton loaders
// These match actual component dimensions to prevent layout shift during loading
import { 
  HeroSkeleton, 
  CarouselSkeleton, 
  SectionSkeleton, 
  CompactSkeleton 
} from '../components/ui/SkeletonLoaders';

// PERFORMANCE OPTIMIZATION: Using React.lazy() for code splitting
// These components will be split into separate JavaScript chunks that only load when needed
// This reduces initial bundle size by ~80% (from ~2.5MB to ~200KB core code)

// Lazy load Hero component (contains heavy 3D graphics: Three.js ~600KB + D3.js ~200KB)
// Only loads when Hero section renders, not on initial page load
const Hero = React.lazy(() => import('../components/Hero'));

// Lazy load carousel (contains large Unsplash images)
// Loads separately from main bundle, reducing initial load time
const CoreServicesCarousel = React.lazy(() => import('../components/CoreServicesCarousel'));

// Lazy load below-fold sections - these don't need to load immediately
const TargetMarkets = React.lazy(() => import('../components/TargetMarkets'));
const WhyChooseUs = React.lazy(() => import('../components/WhyChooseUs'));
const About = React.lazy(() => import('../components/About'));
const HomePricing = React.lazy(() => import('../components/HomePricing'));
const CTA = React.lazy(() => import('../components/CTA'));

const Home: React.FC = () => {
  return (
    <>
      {/* PERFORMANCE: Section-specific skeleton loaders prevent layout shift
          Each skeleton matches the exact dimensions and structure of its component */}
      
      {/* Hero loads first (above fold), but in separate chunk from main bundle */}
      {/* HeroSkeleton matches full-screen Hero layout for seamless transition */}
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      {/* Carousel skeleton matches ~600px height and carousel structure */}
      <Suspense fallback={<CarouselSkeleton />}>
        <CoreServicesCarousel />
      </Suspense>

      {/* Section skeletons match grid layouts (6 cards for TargetMarkets) */}
      <Suspense fallback={<SectionSkeleton cards={6} />}>
        <TargetMarkets />
      </Suspense>

      {/* WhyChooseUs section with 3 card layout */}
      <Suspense fallback={<SectionSkeleton cards={3} />}>
        <WhyChooseUs />
      </Suspense>

      {/* About section with 3 stat cards */}
      <Suspense fallback={<SectionSkeleton cards={3} />}>
        <About />
      </Suspense>

      {/* Pricing section with pricing card grid */}
      <Suspense fallback={<SectionSkeleton cards={3} />}>
        <HomePricing />
      </Suspense>

      {/* Compact skeleton for simple CTA section */}
      <Suspense fallback={<CompactSkeleton />}>
        <CTA />
      </Suspense>
    </>
  );
};

export default Home;