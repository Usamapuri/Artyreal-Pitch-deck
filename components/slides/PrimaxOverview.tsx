import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Activity, Users, DollarSign, AlertCircle, Percent, Plus, FileText, CreditCard, Lock, MoreHorizontal, CheckCircle2 } from 'lucide-react';

const PrimaxOverview: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#FFFBF0] flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orange-200/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div className="flex flex-col justify-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-3 mb-8"
            >
                <div className="p-3 bg-orange-100 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <span className="text-lg font-bold text-orange-800 tracking-wide uppercase">School OS</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-serif text-slate-900 mb-6"
            >
                frontench.io
            </motion.h2>

            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-medium text-slate-600 mb-6"
            >
                The Operating System for <br/>
                <span className="text-orange-500">Modern Schools</span>
            </motion.h3>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-lg mb-6 max-w-lg"
            >
                <p className="text-sm font-semibold text-orange-900 mb-1">The Problem</p>
                <p className="text-slate-700">
                    Schools run on fragmented spreadsheets for fees, attendance, and student records—creating administrative chaos and revenue leakage.
                </p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
                <strong className="text-slate-900">frontench.io</strong> is your unified command center for admissions, academics, and administration. Replace disconnected tools with a single, intelligent platform that makes school management effortless.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-2 text-sm text-slate-700 mb-8 max-w-lg"
            >
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Student enrollment & records management</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Automated fee collection & invoicing</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Daily attendance tracking</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Parent communication portal</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
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
            {/* PRIMAX DASHBOARD VISUAL (Coded) */}
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
                                <span className="text-[10px] text-slate-500">Total Students</span>
                            </div>
                            <div className="text-xl font-bold text-slate-800">162</div>
                        </div>
                        {/* Revenue */}
                        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-green-50 rounded-lg text-green-500"><DollarSign size={14}/></div>
                                <span className="text-[10px] text-slate-500">Monthly Revenue</span>
                            </div>
                            <div className="text-xl font-bold text-slate-800">Rs. 0</div>
                        </div>
                        {/* Overdue */}
                        <div className="bg-white p-3 rounded-xl border border-red-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-red-50 rounded-lg text-red-500"><AlertCircle size={14}/></div>
                                <span className="text-[10px] text-slate-500">Overdue Fees</span>
                            </div>
                            <div className="text-xl font-bold text-slate-800">Rs. 4.2M</div>
                            <div className="text-[9px] text-red-500 mt-1">157 students overdue</div>
                        </div>
                         {/* Attendance */}
                         <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-500"><Percent size={14}/></div>
                                <span className="text-[10px] text-slate-500">Avg Attendance</span>
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
                                    <span className="text-[9px] font-medium text-slate-600">{action.label}</span>
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
                                <div className="flex justify-between items-center text-[10px]">
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
                                <div className="flex justify-between items-center text-[10px]">
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
                                <div className="flex justify-between items-center text-[10px]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        <div>
                                            <div className="text-slate-800 font-medium">Payment Received</div>
                                            <div className="text-slate-400">Receipt #075eb6</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-green-600 font-bold">Rs. 30,000</div>
                                        <div className="text-slate-400">5:50 PM</div>
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
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600">AN</div>
                                        <div>
                                            <div className="text-[9px] font-bold text-slate-800">Ahmed Nouman</div>
                                            <div className="text-[8px] text-red-500">124 days overdue</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[9px] font-bold text-red-600">Rs. 30,000</div>
                                    </div>
                                </div>
                                <div className="p-2 bg-red-50 border border-red-100 rounded-lg flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600">AY</div>
                                        <div>
                                            <div className="text-[9px] font-bold text-slate-800">Aliyan Yasir</div>
                                            <div className="text-[8px] text-red-500">124 days overdue</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[9px] font-bold text-red-600">Rs. 30,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>

                </div>
            </div>
            {/* Back card decoration */}
            <div className="absolute inset-0 bg-orange-500/10 rounded-2xl -rotate-2 -z-10 translate-y-6 scale-95 blur-sm"></div>
         </motion.div>
      </div>
    </div>
  );
};

export default PrimaxOverview;