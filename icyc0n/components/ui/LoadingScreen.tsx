import { FC } from 'react';

/**
 * PERFORMANCE: Full-page loading screen shown until critical resources are ready
 * Prevents FOUT (Flash of Unstyled Text) and ensures fonts/styles are loaded before showing content
 */
const LoadingScreen: FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-icy-dark">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-icy-main/30 border-t-icy-main rounded-full animate-spin mb-4 mx-auto" />
        <p className="text-white/60 text-sm font-medium">Icycon is loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

