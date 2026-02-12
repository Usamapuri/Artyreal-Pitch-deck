import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean; // Kept for compatibility, but image includes text usually
}

const ArtyrealLogo: React.FC<LogoProps> = ({ className = "w-48 h-auto" }) => {
  return (
    <div className={`relative ${className}`}>
      <img 
        src="https://framerusercontent.com/images/pJQkBGXBaEiitT3l73IW1UskYds.png?scale-down-to=512&width=2936&height=1872" 
        alt="Artyreal Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ArtyrealLogo;