import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, MapPin, Wifi, Coffee, CreditCard, Bell, Server } from 'lucide-react';

const Coworking: React.FC = () => {
  return (
    <div className="h-full w-full bg-zinc-900 text-white flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 backdrop-blur-md mb-6"
          >
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400">PWA Enabled</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 mb-4"
          >
            Smart Coworking Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Real-time space management with PWA capabilities for seamless operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Module 1 */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 p-8 rounded-2xl hover:bg-zinc-800/60 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Hybrid Operations</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500" />
                Cafe management w/ real-time tracking
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500" />
                Credit-based Meeting Room booking
              </li>
            </ul>
          </motion.div>

          {/* Module 2 */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 p-8 rounded-2xl hover:bg-zinc-800/60 transition-colors relative"
          >
             <div className="absolute top-4 right-4 animate-pulse">
                <Wifi className="w-5 h-5 text-green-500" />
             </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Advanced Tech</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                Offline Support (PWA)
              </li>
              <li className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-cyan-400" />
                Push Notifications
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Multi-location (Blue Area & I-10)
              </li>
            </ul>
          </motion.div>

          {/* Module 3 */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.7 }}
             className="bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 p-8 rounded-2xl hover:bg-zinc-800/60 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Enterprise Ready</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start gap-2">
                 <CreditCard className="w-4 h-4 text-pink-400 mt-1" />
                 Organization Billing
              </li>
              <li className="flex items-start gap-2">
                 <Zap className="w-4 h-4 text-pink-400 mt-1" />
                 SSE (Server-Sent Events) for instant updates
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Coworking;