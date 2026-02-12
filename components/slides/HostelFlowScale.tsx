import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Wallet, Wrench, BarChart3, ShieldCheck } from 'lucide-react';

const HostelFlowScale: React.FC = () => {
  return (
    <div className="h-full w-full bg-zinc-950 text-white flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 blur-[120px]"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full">
            
            {/* Left Content */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="md:col-span-5"
            >
                <div className="flex items-center gap-2 mb-6">
                    <div className="p-1.5 bg-emerald-500/20 rounded border border-emerald-500/50">
                        <Building2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="font-bold text-emerald-400 tracking-wider text-sm">HOSTEL OS</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Modern Hostel <br/> Management.
                </h2>
                
                <p className="text-xl text-zinc-400 mb-10 border-l-2 border-emerald-500 pl-6 leading-relaxed">
                    Streamline operations with our powerful, multi-tenant SaaS platform. From <strong>Student Onboarding</strong> to <strong>Financial Analytics</strong>, handle it all in one secure place.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <div className="text-4xl font-bold text-white mb-1">500+</div>
                        <div className="text-xs text-emerald-400 uppercase font-bold tracking-widest">Beds Managed</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-1">70%</div>
                        <div className="text-xs text-emerald-400 uppercase font-bold tracking-widest">Admin Reduction</div>
                    </div>
                </div>

                <div className="mt-10 flex gap-4">
                    <div className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 transition-colors rounded-lg font-bold text-white cursor-pointer">
                        Start Free Trial
                    </div>
                    <div className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 transition-colors rounded-lg font-bold text-zinc-300 cursor-pointer">
                        View Demo
                    </div>
                </div>
            </motion.div>

            {/* Right: CODED DASHBOARD VISUAL (HostelOS) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-7 w-full flex items-center justify-center"
            >
                {/* Simulated Webpage/Dashboard */}
                <div className="w-full bg-[#09090b] border border-zinc-800 rounded-xl shadow-2xl p-6 relative overflow-hidden">
                    {/* Fake Nav */}
                    <div className="flex justify-between items-center mb-12 border-b border-zinc-800 pb-4">
                        <div className="flex items-center gap-2 text-lg font-bold text-white">
                            <div className="text-emerald-500"><Building2 size={20}/></div> HostelOS
                        </div>
                        <div className="flex gap-4 text-sm text-zinc-400">
                             <span className="hover:text-white cursor-pointer">Super Admin</span>
                             <span className="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-500 cursor-pointer">Try Demo</span>
                        </div>
                    </div>

                    {/* Hero Text Simulated inside Dashboard */}
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-serif text-white mb-2">Modern Hostel Management</h3>
                        <p className="text-zinc-500 text-sm max-w-md mx-auto">Streamline your hostel operations with our powerful, multi-tenant SaaS platform.</p>
                        <div className="mt-6 flex justify-center gap-3">
                             <div className="px-4 py-2 bg-emerald-600 text-white rounded text-sm font-bold">Start Free Trial</div>
                             <div className="px-4 py-2 border border-zinc-700 text-zinc-300 rounded text-sm">Learn More</div>
                        </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Card 1 */}
                        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-colors group">
                            <div className="flex items-center gap-2 mb-3 text-emerald-400">
                                <Users size={18}/> <span className="font-bold text-white">Student Management</span>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400">
                                Track student records, room assignments, check-ins, and emergency contacts all in one place.
                            </p>
                        </div>
                         {/* Card 2 */}
                         <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-colors group">
                            <div className="flex items-center gap-2 mb-3 text-emerald-400">
                                <Wallet size={18}/> <span className="font-bold text-white">Finance & Billing</span>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400">
                                Automated rent collection, expense tracking, and comprehensive financial reports.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-colors group">
                            <div className="flex items-center gap-2 mb-3 text-emerald-400">
                                <Building2 size={18}/> <span className="font-bold text-white">Room Management</span>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400">
                                Visual room grid, bed assignment, transfers, and real-time occupancy tracking.
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-colors group">
                            <div className="flex items-center gap-2 mb-3 text-emerald-400">
                                <ShieldCheck size={18}/> <span className="font-bold text-white">Multi-Tenant Security</span>
                            </div>
                            <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400">
                                Complete data isolation per tenant with enterprise-grade security and backups.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default HostelFlowScale;