import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import AuthPage from './pages/AuthPage';
import OptimisationPage from './pages/OptimisationPage';
import ReachPage from './pages/ReachPage';
import GrowthPage from './pages/GrowthPage';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import LoadingScreen from './components/ui/LoadingScreen';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // PERFORMANCE: Loading state - wait for fonts and critical resources before showing content
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Enforce dark mode class
    document.documentElement.classList.add('dark');

    // PERFORMANCE: Wait for fonts and initial render before showing content
    // Prevents FOUT (Flash of Unstyled Text) and ensures styles are ready
    const initApp = async () => {
      // Wait for fonts to load (critical for proper rendering)
      if ('fonts' in document) {
        await document.fonts.ready;
      }
      
      // Small delay to ensure styles are applied
      await new Promise(resolve => setTimeout(resolve, 100));
      
      setIsLoading(false);
    };

    initApp();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // PERFORMANCE: Show loading screen until critical resources (fonts, styles) are ready
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col transition-colors duration-300 bg-icy-dark text-white">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
          {/* Abstract Background Noise/Gradient */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-icy-main rounded-full blur-[120px] opacity-10 animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-icy-deep rounded-full blur-[120px] opacity-10" />
        </div>

        <Navbar 
          isAuthenticated={isAuthenticated} 
          onLogout={handleLogout}
        />
        
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/optimisation" element={<OptimisationPage />} />
            <Route path="/reach" element={<ReachPage />} />
            <Route path="/growth" element={<GrowthPage />} />
            <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}