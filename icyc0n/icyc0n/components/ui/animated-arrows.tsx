
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Helper component for a single column of arrows, passing index for staggered animations
const ArrowColumn = ({ count, renderArrow }: { count: number; renderArrow: (index: number) => React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-around h-full">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex justify-center">
          {renderArrow(i)}
        </div>
      ))}
    </div>
  );
};

// Main component to render a lane with a seamless animation
const renderAnimatedLane = (count: number, duration: number) => {
  // Function to render a single arrow with effects
  const renderArrowIcon = (index: number) => (
    <ArrowUp
      className="w-8 h-8 md:w-12 md:h-12 text-icy-deep opacity-60 animate-pulse-color drop-shadow-[0_0_5px_rgba(64,146,239,0.5)]"
      style={{ animationDelay: `${index * 0.4}s` }} // Stagger the pulse animation
    />
  );

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-[200%]" // Container is 200% height to hold both stacks
      animate={{ y: ['0%', '-100%'] }} // Animate from start to the end of one stack
      transition={{
        duration,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      {/* Stack 1 */}
      <div className="w-full h-1/2">
        <ArrowColumn count={count} renderArrow={renderArrowIcon} />
      </div>
      {/* Stack 2 (Identical, for seamless loop) */}
      <div className="w-full h-1/2">
        <ArrowColumn count={count} renderArrow={renderArrowIcon} />
      </div>
    </motion.div>
  );
};

const AnimatedArrows = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
      <div className="relative w-full h-full max-w-5xl mx-auto">
        {/* Each div is a lane with its own independent, seamless animation */}
        <div className="absolute left-[10%] w-[10%] h-full">
            {renderAnimatedLane(3, 10)}
        </div>
        <div className="absolute left-[25%] w-[10%] h-full">
            {renderAnimatedLane(3, 8)}
        </div>
        <div className="absolute left-[40%] w-[10%] h-full">
             {renderAnimatedLane(3, 12)}
        </div>
        <div className="absolute right-[40%] w-[10%] h-full">
             {renderAnimatedLane(3, 9)}
        </div>
        <div className="absolute right-[25%] w-[10%] h-full">
            {renderAnimatedLane(3, 11)}
        </div>
        <div className="absolute right-[10%] w-[10%] h-full">
            {renderAnimatedLane(3, 7)}
        </div>
      </div>
    </div>
  );
};

export default AnimatedArrows;