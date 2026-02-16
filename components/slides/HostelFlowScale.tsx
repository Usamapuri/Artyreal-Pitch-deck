import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Wallet, Wrench, BarChart3, ShieldCheck } from 'lucide-react';

const HostelFlowScale: React.FC = () => {
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
    <div className="h-full w-full bg-zinc-950 text-white flex flex-col justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 blur-[120px]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center h-full">
            
            {/* Left Content */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="lg:col-span-5"
            >
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                    <div className="p-1.5 bg-emerald-500/20 rounded border border-emerald-500/50">
                        <Building2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                    </div>
                    <span className="font-bold text-emerald-400 tracking-wider text-xs md:text-sm">HOSTEL OS</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
                    HostelFlow
                </h2>
                
                <p className="text-xl md:text-2xl text-zinc-300 mb-8 md:mb-12 leading-relaxed max-w-2xl">
                    All-in-one property management platform for modern student accommodation.
                </p>

                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-zinc-300">
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mt-1 flex-shrink-0" />
                        <span>Visual bed assignments with automated pricing</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mt-1 flex-shrink-0" />
                        <span>Digital onboarding and contract management</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mt-1 flex-shrink-0" />
                        <span>Automated billing and payment tracking</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mt-1 flex-shrink-0" />
                        <span>Maintenance coordination with vendors</span>
                    </div>
                </div>
                
            </motion.div>

            {/* Right: CODED DASHBOARD VISUAL */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 w-full flex items-center justify-center"
            >
                {isMobile ? (
                    // MOBILE VERSION: Simplified Feature Cards
                    <div className="w-full bg-[#09090b] border border-zinc-800 rounded-xl shadow-2xl p-4 md:p-6 relative overflow-hidden">
                        {/* Nav */}
                        <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                            <div className="flex items-center gap-2 text-base md:text-lg font-bold text-white">
                                <div className="text-emerald-500"><Building2 size={18}/></div> HostelOS
                            </div>
                            <span className="text-xs px-3 py-1 bg-emerald-600 text-white rounded">Super Admin</span>
                        </div>

                        {/* Hero Text */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Modern Hostel Management</h3>
                            <p className="text-zinc-500 text-xs md:text-sm">Streamline hostel operations with one powerful platform.</p>
                        </div>

                        {/* Feature Cards - 2 Column Grid on Mobile */}
                        <div className="grid grid-cols-1 gap-3 mb-4">
                            {/* Card 1 */}
                            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-emerald-500/50 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                                    <Users size={16}/> <span className="font-bold text-white text-sm">Student Management</span>
                                </div>
                                <p className="text-xs text-zinc-500 leading-relaxed">
                                    Track records, room assignments, check-ins, and emergency contacts.
                                </p>
                            </div>
                             {/* Card 2 */}
                             <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-emerald-500/50 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                                    <Wallet size={16}/> <span className="font-bold text-white text-sm">Finance & Billing</span>
                                </div>
                                <p className="text-xs text-zinc-500 leading-relaxed">
                                    Automated rent collection, expense tracking, and reports.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-emerald-500/50 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                                    <Building2 size={16}/> <span className="font-bold text-white text-sm">Room Management</span>
                                </div>
                                <p className="text-xs text-zinc-500 leading-relaxed">
                                    Visual room grid, bed assignment, and real-time occupancy.
                                </p>
                            </div>
                        </div>

                        {/* Security Badge */}
                        <div className="bg-zinc-900/50 border border-emerald-500/30 p-3 rounded-lg flex items-center gap-2 justify-center">
                            <ShieldCheck size={16} className="text-emerald-400"/>
                            <span className="text-xs text-emerald-400 font-bold">Multi-Tenant Security</span>
                        </div>
                    </div>
                ) : (
                    // DESKTOP VERSION: Full Dashboard
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
                )}
            </motion.div>
        </div>
    </div>
  );
};

export default HostelFlowScale;
