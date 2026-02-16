import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, ArrowUp, Lock, Users, Activity, Layers } from 'lucide-react';

const RotaClockTech: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#0f172a] text-white flex flex-col justify-center px-4 md:px-8 lg:px-24 relative overflow-hidden">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        
        {/* LEFT: Business Value of Tech */}
        <div>
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 mb-6"
            >
                <div className="h-px w-8 bg-blue-500"></div>
                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">The Engine Room</span>
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 leading-tight"
            >
                Built for <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Scale & Speed.</span>
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-5 group"
                >
                    <div className="mt-1 relative">
                        <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative p-3 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                            <Database className="w-6 h-6 text-blue-400" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg md:text-xl mb-2 text-blue-100">Bank-Grade Data Integrity</h4>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Powered by PostgreSQL. Payroll and attendance logs are structurally unbreakable and audit-ready 24/7.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-5 group"
                >
                    <div className="mt-1 relative">
                        <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative p-3 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                            <Zap className="w-6 h-6 text-cyan-400" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg md:text-xl mb-2 text-cyan-100">Instant-Load Performance</h4>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Next.js architecture ensures zero lag. Dashboards load instantly, meaning your workforce never waits on the software.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* RIGHT: The Command Chain (Visual Hierarchy) */}
        <div className="relative h-[500px] md:h-[600px] flex flex-col justify-center items-center">
            
            {/* Connecting Line illustrating Data Flow */}
            <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-blue-500/50 via-slate-700 to-slate-800 -translate-x-1/2 z-0"></div>

            {/* Level 1: ADMIN (Top) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative z-10 w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/50 p-6 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] mb-8"
            >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0f172a] border border-blue-500 rounded-full flex items-center justify-center z-20">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Lock size={20} /></div>
                        <div>
                            <h3 className="font-bold text-white text-base md:text-lg">Admin</h3>
                            <span className="text-xs text-blue-400 uppercase tracking-wider font-bold">Strategic Control</span>
                        </div>
                    </div>
                    <div className="px-2 py-1 bg-blue-900/30 border border-blue-500/30 rounded text-[10px] text-blue-300">Full Access</div>
                </div>
                <p className="text-xs text-slate-400 pl-11">
                    Central command. Configures rules, approves payroll, and views global analytics.
                </p>
            </motion.div>

            {/* Level 2: MIDDLE MANAGEMENT */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative z-10 w-[90%] max-w-sm bg-slate-800/80 border border-slate-700 p-5 rounded-xl shadow-lg mb-8 backdrop-blur-sm"
            >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0f172a] border border-slate-600 rounded-full flex items-center justify-center z-20">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-700 rounded-lg text-purple-400"><Activity size={18} /></div>
                    <div>
                        <h3 className="font-bold text-slate-200">Managers & Leads</h3>
                        <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Operational Oversight</span>
                    </div>
                </div>
                 <p className="text-xs text-slate-400 pl-11">
                    Live monitoring of attendance, shift swaps, and team logistics.
                </p>
            </motion.div>

            {/* Level 3: EMPLOYEES */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 w-[80%] max-w-xs bg-slate-800/50 border border-slate-700 border-dashed p-4 rounded-xl backdrop-blur-sm"
            >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0f172a] border border-slate-600 rounded-full flex items-center justify-center z-20">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-slate-700/50 rounded-lg text-emerald-400"><Users size={16} /></div>
                    <div>
                        <h3 className="font-bold text-slate-300 text-sm">Employees</h3>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Field Execution</span>
                    </div>
                </div>
            </motion.div>

            {/* Data Flow Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
            >
                <div className="text-[10px] text-slate-500 font-mono rotate-90 whitespace-nowrap mb-4">Real-time Data Flow</div>
                <ArrowUp className="text-blue-500 animate-bounce" size={20} />
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default RotaClockTech;