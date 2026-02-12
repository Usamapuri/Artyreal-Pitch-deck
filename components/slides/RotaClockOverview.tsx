import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ChevronDown, Calendar, ArrowRight } from 'lucide-react';

const RotaClockOverview: React.FC = () => {
  return (
    <div className="h-full w-full bg-slate-50 flex flex-col relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[80%] h-full bg-blue-50/50 skew-x-[-10deg] translate-x-[20%]" />
      
      <div className="flex-1 flex flex-col md:flex-row px-6 md:px-16 py-12 relative z-10 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/3 flex flex-col justify-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
                <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
                    <Clock className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Workforce OS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
                <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight mb-4">
                    RotaClock
                </h2>
                <h3 className="text-xl font-medium text-slate-500">Precision Scheduling & Logistics</h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg mb-6"
            >
                <p className="text-sm font-semibold text-blue-900 mb-1">The Problem</p>
                <p className="text-slate-700">
                    Businesses lose thousands weekly on scheduling errors, last-minute no-shows, and manual roster management across multiple locations.
                </p>
            </motion.div>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-600 leading-relaxed mb-6"
            >
                <strong className="text-slate-900">RotaClock</strong> is the real-time workforce OS that syncs schedules, tracks costs, and sends instant notifications across your entire organization.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
            >
                <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Live shift board with drag-and-drop</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Automated cost-per-shift calculation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>SMS & app notifications to staff</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Role-based access (managers vs. staff)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Historical analytics & forecasting</span>
                </div>
            </motion.div>
        </div>

        {/* Right: CODED DASHBOARD VISUAL */}
        <motion.div 
             initial={{ opacity: 0, x: 50, scale: 0.95 }}
             animate={{ opacity: 1, x: 0, scale: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="w-full md:w-2/3 max-h-[85vh] flex items-center"
        >
            {/* The Dashboard Container */}
            <div className="w-full bg-[#1e293b] rounded-2xl shadow-2xl p-6 font-sans text-slate-300 relative overflow-hidden border border-slate-700">
                {/* Header Row */}
                <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-2 text-white font-semibold text-lg">
                        <div className="p-1.5 bg-blue-600 rounded-lg"><Clock className="w-4 h-4 text-white"/></div>
                        The Rope & Rock <ChevronDown className="w-4 h-4 opacity-50"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-800 p-1 rounded-lg">
                            <div className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium shadow-sm">Week</div>
                            <div className="px-4 py-1.5 text-slate-400 text-sm font-medium hover:text-white transition-colors cursor-pointer">Month</div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Calendar className="w-4 h-4" /> 1 - 7 September
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 overflow-hidden">
                    {/* Sidebar Stats */}
                    <div className="w-48 shrink-0 flex flex-col gap-4">
                        <div className="bg-blue-600 rounded-xl p-5 text-white shadow-lg shadow-blue-900/20">
                            <div className="text-xs font-medium opacity-80 mb-2">Week 13 Summary</div>
                            <div className="text-2xl font-bold mb-1">915h 30m</div>
                            <div className="text-lg font-bold opacity-90">£13,732.50</div>
                        </div>
                        <div className="bg-[#ea580c] rounded-xl p-5 text-white shadow-lg shadow-orange-900/20">
                            <div className="text-xs font-medium opacity-80 mb-2">Open Shifts</div>
                            <div className="text-2xl font-bold mb-1">80h</div>
                            <div className="text-lg font-bold opacity-90">(£1,017.00)</div>
                            <div className="text-xs mt-1 opacity-80">8 shifts</div>
                        </div>
                    </div>

                    {/* Schedule Grid */}
                    <div className="flex-1 flex gap-3 overflow-hidden">
                        {[
                            { day: '1 Monday', hours: '102h 0m', cost: '£1,530.00' },
                            { day: '2 Tuesday', hours: '102h 0m', cost: '£1,530.00' },
                            { day: '3 Wednesday', hours: '102h 0m', cost: '£1,530.00' },
                            { day: '4 Thursday', hours: '102h 0m', cost: '£1,530.00' },
                        ].map((col, idx) => (
                            <div key={idx} className="flex-1 min-w-[140px] flex flex-col gap-3">
                                <div className="bg-slate-800/80 p-3 rounded-lg text-center border border-slate-700">
                                    <div className="text-xs text-slate-400 mb-1">{col.day}</div>
                                    <div className="text-white font-bold text-sm">{col.hours}</div>
                                    <div className="text-xs text-slate-500">{col.cost}</div>
                                </div>
                                <div className="bg-blue-500/20 border-l-2 border-blue-500 p-2 rounded text-[10px] font-medium text-blue-100">
                                    4pm - 11pm Bar Staff x2
                                </div>
                                <div className="bg-emerald-500/20 border-l-2 border-emerald-500 p-2 rounded text-[10px] font-medium text-emerald-100">
                                    7am - 7pm Front Of House x2
                                </div>
                                <div className="bg-orange-500/20 border-l-2 border-orange-500 p-2 rounded text-[10px] font-medium text-orange-100">
                                    12pm - 11pm Waiting Staff
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Notification Card (Based on Screenshot) */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-12 top-24 w-72 bg-blue-600 rounded-2xl shadow-2xl p-5 text-white z-20 border border-blue-500"
                >
                    <div className="text-xs font-medium opacity-80 mb-2">Mon 8 Sep 2025</div>
                    <h3 className="text-xl font-bold mb-4">Good Morning, Robert</h3>
                    
                    <div className="bg-[#1e3a8a] rounded-xl p-4 mb-4 border border-blue-400/30">
                        <div className="text-xs text-blue-200 mb-1">Next shift today</div>
                        <div className="text-2xl font-bold mb-1">11:00 - 18:00</div>
                        <div className="font-medium text-sm">Front of House</div>
                        <div className="text-xs text-blue-300">Rope & Rock</div>
                    </div>
                    
                    <p className="text-xs leading-relaxed opacity-90">
                        Hey Robert, you will be the first one in today. Please speak with Emily when you arrive and she'll brief you on today's special events.
                    </p>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RotaClockOverview;