import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';

// Import all slides
import Intro from './components/slides/Intro';
import RotaClockOverview from './components/slides/RotaClockOverview';
import RotaClockTech from './components/slides/RotaClockTech';
import CoworkingOverview from './components/slides/CoworkingOverview';
import CoworkingTech from './components/slides/CoworkingTech';
import HostelFlowScale from './components/slides/HostelFlowScale';
import HostelFlowModules from './components/slides/HostelFlowModules';
import PrimaxOverview from './components/slides/PrimaxOverview';
import PrimaxFeatures from './components/slides/PrimaxFeatures';
import Closing from './components/slides/Closing';
import ArtyrealLogo from './components/ArtyrealLogo';

const SLIDES = [
  Intro,
  RotaClockOverview,
  RotaClockTech,
  CoworkingOverview,
  CoworkingTech,
  HostelFlowScale,
  HostelFlowModules,
  PrimaxOverview,
  PrimaxFeatures,
  Closing
];

// Define theme for each slide for navigation contrast
const SLIDE_THEMES: ('light' | 'dark')[] = [
  'light', // Intro (Cream)
  'light', // RotaClockOverview (White/Slate-50)
  'dark',  // RotaClockTech (Dark Slate)
  'light', // CoworkingOverview (White)
  'light', // CoworkingTech (Cream)
  'dark',  // HostelFlowScale (Black/Zinc)
  'dark',  // HostelFlowModules (Dark Charcoal) - UPDATED to dark
  'light', // PrimaxOverview (Cream)
  'light', // PrimaxFeatures (White)
  'dark'   // Closing (Dark)
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];
  const currentTheme = SLIDE_THEMES[currentSlide];

  return (
    <div className="h-screen w-screen overflow-hidden bg-artyreal-bg relative font-sans">
      <AnimatePresence mode='wait' custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ y: direction > 0 ? '100%' : '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: direction > 0 ? '-20%' : '20%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="h-full w-full absolute top-0 left-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <Navigation 
        currentSlide={currentSlide}
        totalSlides={SLIDES.length}
        onNext={goToNextSlide}
        onPrev={goToPrevSlide}
        goToSlide={goToSlide}
        theme={currentTheme}
      />
      
      {/* Brand Watermark - Hidden on Intro and Closing to avoid clutter */}
      {currentSlide !== 0 && currentSlide !== SLIDES.length - 1 && (
        <div className={`fixed top-6 left-8 z-50 pointer-events-none opacity-80 ${currentTheme === 'dark' ? 'invert brightness-0 invert-100' : ''}`}>
             <ArtyrealLogo className="w-24 h-auto" />
        </div>
      )}
    </div>
  );
};

export default App;