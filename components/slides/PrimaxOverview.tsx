import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Activity, Users, DollarSign, AlertCircle, Percent, Plus, FileText, CreditCard, Lock, MoreHorizontal, CheckCircle2 } from 'lucide-react';

const PrimaxOverview: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-full w-full bg-[#FFFBF0] flex flex-col justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orange-200/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
         <div className="flex flex-col justify-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-3 mb-6 md:mb-8"
            >
                <div className="p-2 md:p-3 bg-orange-100 rounded-xl">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                </div>
                <span className="text-base md:text-lg font-bold text-orange-800 tracking-wide uppercase">School OS</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 mb-4 md:mb-6"
            >
                frontench.io
            </motion.h2>

            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl font-medium text-slate-600 mb-4 md:mb-6"
            >
                The Operating System for <br/>
                <span className="text-orange-500">Modern Schools</span>
            </motion.h3>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-orange-50 border-l-4 border-orange-600 p-3 md:p-4 rounded-lg mb-4 md:mb-6 max-w-lg"
            >
                <p className="text-xs md:text-sm font-semibold text-orange-900 mb-1">The Problem</p>
                <p className="text-sm md:text-base text-slate-700">
                    Schools run on fragmented spreadsheets for fees, attendance, and student records—creating administrative chaos and revenue leakage.
                </p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 max-w-lg"
            >
                <strong className="text-slate-900">frontench.io</strong> is your unified command center for admissions, academics, and administration. Replace disconnected tools with a single, intelligent platform that makes school management effortless.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-2 text-sm md:text-base text-slate-700 mb-6 md:mb-8 max-w-lg"
            >
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Student enrollment & records management</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Automated fee collection & invoicing</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Daily attendance tracking</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Parent communication portal</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Real-time financial dashboards</span>
                </div>
            </motion.div>
            
         </div>

         <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
         >
            {isMobile ? (
                // MOBILE VERSION: Simplified Dashboard
                <div className="rounded-xl bg-white shadow-2xl border border-zinc-200 p-4 md:p-5">
                    {/* Header */}
                    <div className="mb-4 border-b border-slate-100 pb-3">
                        <div className="text-sm font-bold text-zinc-800">Admin Dashboard</div>
                        <div className="text-xs text-slate-500 mt-1">Frontdesk Staff</div>
                    </div>

                    {/* Stats Grid - 2 Column */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {/* Students */}
                        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-blue-50 rounded-lg text-blue-500"><Users size={14}/></div>
                                <span className="text-xs text-slate-500">Students</span>
                            </div>
                            <div className="text-2xl font-bold text-slate-800">162</div>
                        </div>
                        {/* Revenue */}
                        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-green-50 rounded-lg text-green-500"><DollarSign size={14}/></div>
                                <span className="text-xs text-slate-500">Revenue</span>
                            </div>
                            <div className="text-2xl font-bold text-slate-800">Rs. 0</div>
                        </div>
                        {/* Overdue - Full Width */}
                        <div className="col-span-2 bg-white p-3 rounded-xl border border-red-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-red-50 rounded-lg text-red-500"><AlertCircle size={14}/></div>
                                <span className="text-xs text-slate-500">Overdue Fees</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="text-2xl font-bold text-slate-800">Rs. 4.2M</div>
                                <div className="text-xs text-red-500">157 students</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm mb-4">
                        <h5 className="text-xs font-bold text-slate-700 mb-3">Quick Actions</h5>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { icon: Plus, label: "New Enrollment", color: "text-blue-500" },
                                { icon: FileText, label: "Create Invoice", color: "text-blue-500" },
                                { icon: CreditCard, label: "Record Payment", color: "text-blue-500" },
                                { icon: Lock, label: "Daily Close", color: "text-blue-500" },
                            ].map((action, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                                    <action.icon className={`w-5 h-5 ${action.color} mb-1`} />
                                    <span className="text-[10px] font-medium text-slate-600 text-center">{action.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                        <h5 className="text-xs font-bold text-slate-700 mb-3">Recent Activity</h5>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    <div>
                                        <div className="text-slate-800 font-medium">Payment</div>
                                        <div className="text-slate-400">Receipt #4fc372</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-green-600 font-bold">Rs. 25,000</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                    <div>
                                        <div className="text-slate-800 font-medium">Overdue</div>
                                        <div className="text-slate-400">Ahmed Nouman</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-red-600 font-bold">Rs. 30,000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // DESKTOP VERSION: Full Dashboard
                <div className="rounded-xl bg-white shadow-2xl border border-zinc-200 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
                    {/* Browser/Window Header */}
                    <div className="h-8 bg-slate-50 border-b border-slate-100 rounded-t-lg flex items-center px-4 gap-2 mb-1 justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono bg-white px-2 py-0.5 rounded border border-slate-100 flex items-center gap-2">
                                 <Lock size={8} /> primax.edu/admin/dashboard
                            </div>
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">Frontdesk Staff</div>
                    </div>

                    <div className="w-full aspect-[16/10] bg-[#f8f9fa] rounded-lg overflow-hidden relative p-4 font-sans flex flex-col gap-4">
                         
                         {/* Dashboard Header */}
                         <div className="flex justify-between items-center">
                            <h4 className="text-lg font-bold text-slate-800">Admin Dashboard</h4>
                            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-xs">FS</div>
                         </div>

                         {/* Stats Row */}
                         <div className="grid grid-cols-4 gap-3">
                            {/* Students */}
                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-blue-50 rounded-lg text-blue-500"><Users size={14}/></div>
                                    <span className="text-[11px] text-slate-500">Total Students</span>
                                </div>
                                <div className="text-xl font-bold text-slate-800">162</div>
                            </div>
                            {/* Revenue */}
                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-green-50 rounded-lg text-green-500"><DollarSign size={14}/></div>
                                    <span className="text-[11px] text-slate-500">Monthly Revenue</span>
                                </div>
                                <div className="text-xl font-bold text-slate-800">Rs. 0</div>
                            </div>
                            {/* Overdue */}
                            <div className="bg-white p-3 rounded-xl border border-red-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-red-50 rounded-lg text-red-500"><AlertCircle size={14}/></div>
                                    <span className="text-[11px] text-slate-500">Overdue Fees</span>
                                </div>
                                <div className="text-xl font-bold text-slate-800">Rs. 4.2M</div>
                                <div className="text-[10px] text-red-500 mt-1">157 students overdue</div>
                            </div>
                             {/* Attendance */}
                             <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-500"><Percent size={14}/></div>
                                    <span className="text-[11px] text-slate-500">Avg Attendance</span>
                                </div>
                                <div className="text-xl font-bold text-slate-800">76%</div>
                            </div>
                         </div>

                         {/* Quick Actions */}
                         <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <h5 className="text-xs font-bold text-slate-700 mb-3">Quick Actions</h5>
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { icon: Plus, label: "New Enrollment", color: "text-blue-500" },
                                    { icon: FileText, label: "Create Invoice", color: "text-blue-500" },
                                    { icon: CreditCard, label: "Record Payment", color: "text-blue-500" },
                                    { icon: Lock, label: "Daily Close", color: "text-blue-500" },
                                ].map((action, i) => (
                                    <div key={i} className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                                        <action.icon className={`w-5 h-5 ${action.color} mb-1`} />
                                        <span className="text-[10px] font-medium text-slate-600">{action.label}</span>
                                    </div>
                                ))}
                            </div>
                         </div>

                         {/* Bottom Lists */}
                         <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
                            {/* Recent Transactions */}
                            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                                <h5 className="text-xs font-bold text-slate-700 mb-3">Recent Transactions</h5>
                                <div className="space-y-3 overflow-hidden">
                                    <div className="flex justify-between items-center text-[11px]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            <div>
                                                <div className="text-slate-800 font-medium">Payment Received</div>
                                                <div className="text-slate-400">Receipt #4fc372</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-green-600 font-bold">Rs. 25,000</div>
                                            <div className="text-slate-400">10:52 AM</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-[11px]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            <div>
                                                <div className="text-slate-800 font-medium">Payment Received</div>
                                                <div className="text-slate-400">Receipt #244797</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-green-600 font-bold">Rs. 12,000</div>
                                            <div className="text-slate-400">8:12 AM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fee Overdue */}
                            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                                <h5 className="text-xs font-bold text-slate-700 mb-3">Fee Overdue</h5>
                                <div className="space-y-2 overflow-hidden">
                                    <div className="p-2 bg-red-50 border border-red-100 rounded-lg flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[9px] font-bold text-blue-600">AN</div>
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-800">Ahmed Nouman</div>
                                                <div className="text-[9px] text-red-500">124 days overdue</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-bold text-red-600">Rs. 30,000</div>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-red-50 border border-red-100 rounded-lg flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[9px] font-bold text-blue-600">AY</div>
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-800">Aliyan Yasir</div>
                                                <div className="text-[9px] text-red-500">124 days overdue</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-bold text-red-600">Rs. 30,000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>

                    </div>
                </div>
            )}
            {/* Back card decoration */}
            {!isMobile && (
                <div className="absolute inset-0 bg-orange-500/10 rounded-2xl -rotate-2 -z-10 translate-y-6 scale-95 blur-sm"></div>
            )}
         </motion.div>
      </div>
    </div>
  );
};

export default PrimaxOverview;
