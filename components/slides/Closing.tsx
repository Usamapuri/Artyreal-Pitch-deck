import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Mail, CheckCircle2, QrCode } from 'lucide-react';
import ArtyrealLogo from '../ArtyrealLogo';

const Closing: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#1A1512] text-[#FFFBF0] flex flex-col justify-center px-4 md:px-8 lg:px-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E94057]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left: Headline & CTA */}
        <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 opacity-80"
            >
                <ArtyrealLogo className="h-10 md:h-12 w-auto" />
            </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Scale Smarter. <br/>
            <span className="text-[#E94057]">Start Today.</span>
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-white/60 leading-relaxed max-w-lg text-lg md:text-xl mb-12"
          >
            From RotaClock to frontench.io, Artyreal products are engineered for operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 group-hover:text-[#E94057] transition-colors">
                <span className="w-1.5 h-8 bg-[#E94057] rounded-full"></span>
                Book a Live Demo
            </h3>
            <ul className="space-y-4">
                {[
                    "Personalized Workflow Audit",
                    "Seamless Data Migration",
                    "24/7 Dedicated Support"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base md:text-lg text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-[#E94057]" />
                        {item}
                    </li>
                ))}
            </ul>
          </motion.div>
        </div>

        {/* Right: Contact Info & QR */}
        <div className="flex flex-col justify-center lg:pl-12">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.6 }}
               className="space-y-10"
            >
                {/* Contact items */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                        <div className="p-3 md:p-4 bg-white/5 rounded-full group-hover:bg-[#E94057] group-hover:text-white transition-all duration-300 border border-white/5">
                            <Globe className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Official Website</div>
                            <div className="text-xl md:text-2xl font-medium">Artyreal.com</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                        <div className="p-3 md:p-4 bg-white/5 rounded-full group-hover:bg-[#E94057] group-hover:text-white transition-all duration-300 border border-white/5">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">HQ Location</div>
                            <div className="text-xl md:text-2xl font-medium">I/10-3, Islamabad</div>
                        </div>
                    </div>

                     <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                        <div className="p-3 md:p-4 bg-white/5 rounded-full group-hover:bg-[#E94057] group-hover:text-white transition-all duration-300 border border-white/5">
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Get in Touch</div>
                            <div className="text-xl md:text-2xl font-medium">team@artyreal.com</div>
                        </div>
                    </div>
                </div>

                {/* QR Code */}
                <div className="pt-8 border-t border-white/10 flex items-center gap-6">
                    <div className="bg-white p-3 rounded-xl shadow-lg">
                        <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://artyreal.com" 
                            alt="QR Code for Artyreal.com"
                            className="w-20 h-20 md:w-24 md:h-24 rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="text-base md:text-lg font-bold mb-1">Scan to Connect</div>
                        <div className="text-white/50 text-sm">Visit artyreal.com</div>
                    </div>
                </div>

            </motion.div>
        </div>
      </div>

      {/* Bottom Watermark */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center text-xs font-mono uppercase tracking-[0.3em] text-white/60"
      >
        Artyreal: Design-First Software
      </motion.div>
    </div>
  );
};

export default Closing;