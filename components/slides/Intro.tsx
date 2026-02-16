import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Cpu, Heart } from 'lucide-react';
import ArtyrealLogo from '../ArtyrealLogo';

const Intro: React.FC = () => {
  return (
    <div className="h-full w-full bg-artyreal-bg flex flex-col justify-center px-4 md:px-8 lg:px-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute -right-20 -bottom-20 w-[60vh] h-[60vh] rounded-full bg-artyreal-red blur-[100px]"
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <ArtyrealLogo className="h-16 md:h-20 lg:h-24 w-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-l-4 border-artyreal-red pl-4 md:pl-8 mb-8 md:mb-12"
        >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-artyreal-text mb-4 leading-tight">
            Design-First <br/>
            Software House.
            </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl font-light text-artyreal-text/80 max-w-2xl leading-relaxed mb-12 md:mb-16"
        >
          Based in Islamabad. We don't just write code; we craft intuitive digital experiences that turn complex ideas into reality.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-artyreal-text/10 pt-8 md:pt-12"
        >
          <div className="space-y-3 group">
            <Palette className="w-7 h-7 md:w-8 md:h-8 text-artyreal-red group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-base md:text-lg font-bold text-artyreal-text">Bespoke Design</h3>
            <p className="text-sm text-artyreal-text/60">Tailored aesthetics meeting functional precision.</p>
          </div>
          <div className="space-y-3 group">
            <Heart className="w-7 h-7 md:w-8 md:h-8 text-artyreal-red group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-base md:text-lg font-bold text-artyreal-text">Human-Centric</h3>
            <p className="text-sm text-artyreal-text/60">Experiences designed for people, not just users.</p>
          </div>
          <div className="space-y-3 group">
            <Cpu className="w-7 h-7 md:w-8 md:h-8 text-artyreal-red group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-base md:text-lg font-bold text-artyreal-text">Digital Craftsmanship</h3>
            <p className="text-sm text-artyreal-text/60">Engineering excellence built in Pakistan.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;