import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Zap, Bell, CheckCircle2, TrendingUp } from 'lucide-react';

const PrimaxFeatures: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row relative">
        
        {/* LEFT SIDE: ADMIN (Warm/Professional) */}
        <div className="w-full md:w-1/2 bg-orange-50 h-1/2 md:h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200/20 blur-[80px] rounded-full"></div>
             
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="relative z-10"
             >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-orange-900/5">
                    <Monitor className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 md:mb-6">Admin Powerhouse</h3>
                <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                    The command center for principals and accountants. Manage the entire institution from a single desktop interface.
                </p>

                <div className="space-y-4 md:space-y-6">
                    {/* Killer Feature Highlight */}
                    <div className="bg-white p-4 md:p-5 rounded-xl border-l-4 border-orange-500 shadow-sm relative overflow-hidden group">
                         <div className="absolute top-0 right-0 bg-orange-100 px-2 py-1 rounded-bl-lg text-[10px] font-bold text-orange-700 uppercase tracking-wide">
                            Efficiency Booster
                         </div>
                         <div className="flex items-start gap-3 md:gap-4">
                             <div className="mt-1"><Zap className="w-4 h-4 md:w-5 md:h-5 text-orange-500 fill-orange-500" /></div>
                             <div>
                                 <h4 className="font-bold text-slate-900 text-base md:text-lg">Automatic Fee Generation</h4>
                                 <p className="text-xs md:text-sm text-slate-500 mt-1">
                                    Reduces late payments by <span className="font-bold text-orange-600">40%</span>. The system generates and sends invoices automatically.
                                 </p>
                             </div>
                         </div>
                    </div>

                    <div className="flex items-center gap-3">
                         <div className="p-1 rounded-full bg-orange-200/50"><CheckCircle2 className="w-4 h-4 text-orange-700" /></div>
                         <span className="text-slate-700 text-sm md:text-base font-medium">Complex Payroll Calculation</span>
                    </div>
                    <div className="flex items-center gap-3">
                         <div className="p-1 rounded-full bg-orange-200/50"><CheckCircle2 className="w-4 h-4 text-orange-700" /></div>
                         <span className="text-slate-700 text-sm md:text-base font-medium">Daily Attendance Analytics</span>
                    </div>
                </div>
             </motion.div>
        </div>

        {/* RIGHT SIDE: PARENT (Friendly/Blue) */}
        <div className="w-full md:w-1/2 bg-white h-1/2 md:h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden border-l border-slate-100">
            {/* Decor */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 blur-[100px] rounded-full"></div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative z-10"
             >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm">
                    <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 md:mb-6">Parent Engagement</h3>
                <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                    Bridging the gap. Parents stay connected to their child's progress through a dedicated, easy-to-use mobile interface.
                </p>

                <div className="grid grid-cols-1 gap-3 md:gap-4">
                    <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                            <TrendingUp size={16} className="md:w-5 md:h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm md:text-base">Progress Dashboards</h4>
                            <p className="text-xs md:text-sm text-slate-500">Visual academic tracking</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                            <CheckCircle2 size={16} className="md:w-5 md:h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm md:text-base">Real-time Results</h4>
                            <p className="text-xs md:text-sm text-slate-500">Instant exam updates</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                            <Bell size={16} className="md:w-5 md:h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm md:text-base">Smart Notifications</h4>
                            <p className="text-xs md:text-sm text-slate-500">Events, fees, and attendance alerts</p>
                        </div>
                    </div>
                </div>
             </motion.div>
        </div>

    </div>
  );
};

export default PrimaxFeatures;