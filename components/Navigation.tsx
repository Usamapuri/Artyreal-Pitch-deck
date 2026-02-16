import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  goToSlide: (index: number) => void;
  theme?: 'light' | 'dark';
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  goToSlide,
  theme = 'light' 
}) => {
  
  // Stronger contrast for buttons to ensure visibility on all backgrounds
  const buttonStyle = theme === 'dark' 
    ? "bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" 
    : "bg-black/10 hover:bg-black/20 text-black border-black/10 shadow-[0_4px_20px_rgba(255,255,255,0.5)]";

  const indicatorActive = theme === 'dark' ? "bg-white w-8" : "bg-black w-8";
  const indicatorInactive = theme === 'dark' ? "bg-white/30 w-2" : "bg-black/20 w-2";

  return (
    <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none">
      {/* Slide Indicators */}
      <div className="flex gap-2 md:gap-3 pointer-events-auto">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out shadow-sm ${
              idx === currentSlide ? indicatorActive : indicatorInactive
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-3 md:gap-4 pointer-events-auto">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={`p-3 md:p-4 rounded-full backdrop-blur-xl border transition-all duration-300 disabled:opacity-0 disabled:translate-y-4 ${buttonStyle}`}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className={`p-3 md:p-4 rounded-full backdrop-blur-xl border transition-all duration-300 disabled:opacity-0 disabled:translate-y-4 ${buttonStyle}`}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;