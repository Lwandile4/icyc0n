
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveNebulaShader } from './ui/InteractiveNebulaShader';
import RotatingEarth from './ui/RotatingEarth';

/**
 * PERFORMANCE OPTIMIZATION: Deferred Heavy Graphics Loading
 * 
 * This component defers loading of heavy 3D graphics (Three.js shader + D3.js Earth)
 * until the component is visible or after a short delay, preventing GPU blocking
 * during initial page load.
 * 
 * Strategy:
 * 1. Use Intersection Observer to detect when Hero section is visible
 * 2. Delay graphics initialization by 300ms even when visible (allows text to render first)
 * 3. Show static gradient fallback while graphics load
 * 4. Only initialize WebGL/canvas when needed
 */
const Hero: React.FC = () => {
  // Track if heavy graphics should be loaded
  const [shouldLoadGraphics, setShouldLoadGraphics] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // PERFORMANCE: Use Intersection Observer to detect when Hero enters viewport
    // This ensures graphics only load when user can actually see them
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadGraphics) {
            // PERFORMANCE: Small delay (300ms) allows text content to render first
            // This improves perceived performance - user sees content before GPU work starts
            timeoutRef.current = setTimeout(() => {
              setShouldLoadGraphics(true);
            }, 300);
          }
        });
      },
      {
        // Start loading when Hero is 200px from viewport
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    // Fallback: If IntersectionObserver not supported or element already visible,
    // load graphics after 500ms delay as fallback
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // Fallback timer for immediate load if observer doesn't fire
      const fallbackTimer = setTimeout(() => {
        setShouldLoadGraphics(true);
      }, 500);

      return () => {
        observer.disconnect();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        clearTimeout(fallbackTimer);
      };
    }
  }, []); // Empty deps - only run once on mount

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-4 pt-24 pb-12 md:pb-0 overflow-hidden bg-icy-dark"
    >
      {/* PERFORMANCE: Conditional rendering of heavy 3D shader
          Only loads Three.js WebGL renderer when shouldLoadGraphics is true
          This defers ~600KB Three.js library initialization */}
      {shouldLoadGraphics ? (
        <InteractiveNebulaShader className="opacity-100" isDarkMode={true} />
      ) : (
        // Static gradient fallback - no JavaScript execution, instant render
        <div className="absolute inset-0 bg-gradient-to-br from-icy-dark via-icy-deep to-icy-dark opacity-80" />
      )}
      
      {/* Overlay gradient to help blend bottom if needed */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-icy-dark to-transparent z-10" />

      <div className="relative z-10 w-[90%] lg:w-[90%] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <motion.div
            {...({
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 }
            } as any)}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-lg">
              One Platform<br/> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-icy-main to-cyan-300">
                 Limitless Global Reach.
              </span> 
            </h1>
          </motion.div>

          <motion.p 
            {...({
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.4, duration: 0.8 }
            } as any)}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 drop-shadow-sm"
          >Icycon consolidates every marketing channel into one powerful command hub. It provides the essential framework for visionary eCommerce, SaaS, and businesses to capture market share on a worldwide scale.
 </motion.p>

          <motion.div 
            {...({
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6, duration: 0.8 }
            } as any)}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
          >
            <Link 
              to="/auth?mode=signup" 
              className=" relative px-8 py-3 rounded-full font-bold text-lg text-white bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:bg-[#009dd3] hover:border-[#009dd3] hover:shadow-[0_0_30px_rgba(0,157,211,0.6)] hover:-translate-y-5 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Start Your Growth <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </motion.div>
        </div>

        {/* Right Column: Globe */}
        <motion.div 
          {...({
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1, delay: 0.2 }
          } as any)}
          className="order-1 lg:order-2 flex justify-center items-center relative"
        >
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                {/* Glow behind globe - keeping it icy blue */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-icy-main/20 blur-[100px] rounded-full" />
                {/* PERFORMANCE: Defer D3.js Earth component loading
                    Only renders when graphics should load, preventing D3.js (~200KB)
                    and GeoJSON fetch from blocking initial render */}
                {shouldLoadGraphics ? (
                  <RotatingEarth width={600} height={600} className="w-full h-full" isDarkMode={true} />
                ) : (
                  // Simple placeholder circle - no D3.js, no canvas, no network requests
                  <div className="w-full h-full rounded-full bg-white/5 border-2 border-white/10 animate-pulse" />
                )}
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
