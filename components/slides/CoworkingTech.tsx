import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Building2, Coffee, CalendarCheck, CreditCard, Radio, Globe } from 'lucide-react';

const CoworkingTech: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#FFFBF0] text-zinc-900 flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-orange-100 rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-orange-50 rounded-full blur-[80px] opacity-60 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 rounded-full border border-orange-200 mb-6 shadow-sm"
           >
              <Smartphone className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-bold text-orange-700 tracking-widest uppercase">PWA Advantage: Zero Install. Offline Ready. Push Notifications.</span>
           </motion.div>

           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-6xl font-bold mb-4 text-zinc-900"
           >
             Total Control, <span className="text-orange-500">One Tap Away.</span>
           </motion.h2>

           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-zinc-500 max-w-2xl mx-auto"
           >
             A multi-role ecosystem designed for members, managers, and owners.
           </motion.p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-white p-8 rounded-3xl border border-orange-100 shadow-xl shadow-orange-900/5 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
            >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                    <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Seamless Member Experience</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Frictionless interaction. Members can order coffee or book rooms instantly using a unified credit wallet.
                </p>
                <ul className="space-y-3 border-t border-zinc-100 pt-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                        <Zap className="w-4 h-4 text-orange-500" /> One-Tap Café Orders
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                        <CalendarCheck className="w-4 h-4 text-orange-500" /> Instant Reservations
                    </li>
                </ul>
            </motion.div>

            {/* Column 2 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-white p-8 rounded-3xl border border-orange-100 shadow-xl shadow-orange-900/5 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
            >
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-700">
                    <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Operational Intelligence</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Stay ahead with real-time data streams. Managers get live updates across all physical locations.
                </p>
                <ul className="space-y-3 border-t border-zinc-100 pt-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                        <Globe className="w-4 h-4 text-zinc-500" /> Multi-Location Support
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                        <Zap className="w-4 h-4 text-zinc-500" /> Real-time Notifications
                    </li>
                </ul>
            </motion.div>

             {/* Column 3 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="bg-white p-8 rounded-3xl border border-orange-100 shadow-xl shadow-orange-900/5 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
            >
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-white">
                    <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Billing</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Built for B2B. Manage corporate teams with automated invoicing and bulk credit allocation.
                </p>
                <ul className="space-y-3 border-t border-zinc-100 pt-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                        <CreditCard className="w-4 h-4 text-zinc-900" /> Organization Invoices
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                        <Zap className="w-4 h-4 text-zinc-900" /> Auto-Credit Management
                    </li>
                </ul>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CoworkingTech;