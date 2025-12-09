import React from 'react';

/**
 * PERFORMANCE OPTIMIZATION: Section-Specific Skeleton Loaders
 * 
 * These skeleton components match the dimensions and layout of actual components,
 * preventing layout shift and providing better UX during lazy loading.
 * They show animated placeholders while components are being fetched and rendered.
 */

/**
 * Hero Section Skeleton
 * Matches the full-screen Hero section dimensions
 * Shows gradient shimmer animation while Hero (with 3D graphics) loads
 */
export const HeroSkeleton: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 pt-24 overflow-hidden bg-icy-dark">
      {/* Animated gradient background that mimics the shader effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-icy-dark via-icy-deep to-icy-dark animate-pulse" />
      
      <div className="relative z-10 w-[90%] lg:w-[90%] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Skeleton */}
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
          {/* Title skeleton */}
          <div className="space-y-4">
            <div className="h-16 bg-white/10 rounded-lg w-3/4 mx-auto lg:mx-0 animate-pulse" />
            <div className="h-16 bg-icy-main/20 rounded-lg w-2/3 mx-auto lg:mx-0 animate-pulse" />
          </div>
          
          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-white/10 rounded w-full animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-5/6 mx-auto lg:mx-0 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-4/6 mx-auto lg:mx-0 animate-pulse" />
          </div>
          
          {/* Button skeleton */}
          <div className="h-12 w-48 bg-icy-main/20 rounded-full mx-auto lg:mx-0 animate-pulse" />
        </div>

        {/* Right Column: Globe Skeleton */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative">
          <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
            {/* Glow effect skeleton */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-icy-main/20 blur-[100px] rounded-full animate-pulse" />
            {/* Globe placeholder circle */}
            <div className="w-full h-full rounded-full bg-white/5 border-2 border-white/10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Carousel Skeleton
 * Matches the carousel height (~600px) and shows placeholder for image carousel
 */
export const CarouselSkeleton: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white dark:bg-black/20">
      <div className="w-[90%] lg:w-[90%] mx-auto">
        {/* Title skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-300 dark:bg-white/10 rounded-lg w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-gray-300 dark:bg-white/10 rounded w-96 mx-auto animate-pulse" />
        </div>

        {/* Carousel image skeleton */}
        <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-white/5 dark:to-white/10 animate-pulse">
          {/* Navigation buttons skeleton */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[80%] h-16 bg-white/60 dark:bg-black/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

/**
 * Generic Section Skeleton
 * Used for content sections like TargetMarkets, WhyChooseUs, About, etc.
 * Shows flexible grid of placeholder cards
 */
export const SectionSkeleton: React.FC<{ cards?: number }> = ({ cards = 3 }) => {
  return (
    <section className="py-24 px-4 bg-white dark:bg-icy-dark">
      <div className="w-[90%] lg:w-[90%] mx-auto">
        {/* Title skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 bg-gray-300 dark:bg-white/10 rounded-lg w-80 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-gray-300 dark:bg-white/10 rounded w-96 mx-auto animate-pulse" />
        </div>

        {/* Cards grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: cards }).map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 animate-pulse"
            >
              {/* Icon skeleton */}
              <div className="w-12 h-12 bg-gray-300 dark:bg-white/10 rounded-xl mb-4" />
              {/* Title skeleton */}
              <div className="h-6 bg-gray-300 dark:bg-white/10 rounded w-3/4 mb-2" />
              {/* Description skeleton */}
              <div className="space-y-2 mt-4">
                <div className="h-3 bg-gray-300 dark:bg-white/10 rounded w-full" />
                <div className="h-3 bg-gray-300 dark:bg-white/10 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Simple compact skeleton for smaller components
 * Used for CTA sections or simple content areas
 */
export const CompactSkeleton: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-icy-dark to-icy-deep animate-pulse">
      <div className="w-[90%] mx-auto text-center">
        <div className="h-8 bg-white/10 rounded w-64 mx-auto mb-4" />
        <div className="h-4 bg-white/10 rounded w-96 mx-auto" />
      </div>
    </div>
  );
};

