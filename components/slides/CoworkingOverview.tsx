import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MapPin, Coffee, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

const CoworkingOverview: React.FC = () => {
  return (
    <div className="h-full w-full bg-white text-zinc-900 flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-50 via-white to-white z-0"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full py-12">
            
            {/* Text Content */}
            <div className="md:col-span-5 flex flex-col justify-center">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full w-fit"
                >
                    <Smartphone className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-bold tracking-widest text-orange-700 uppercase">Coworking OS</span>
                </motion.div>
                
                <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="text-5xl md:text-7xl font-bold mb-6 text-zinc-900"
                >
                    Coworkly<br/>
                    <span className="text-orange-500">Smart Space Management</span>
                </motion.h2>

                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.2 }}
                   className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-lg mb-6"
                >
                    <p className="text-sm font-semibold text-orange-900 mb-1">The Problem</p>
                    <p className="text-zinc-700">
                        Coworking spaces struggle with fragmented systems for bookings, cafe orders, and member management—reducing efficiency and member satisfaction.
                    </p>
                </motion.div>
                
                <motion.p 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.3 }}
                   className="text-lg text-zinc-600 leading-relaxed mb-6"
                >
                    <strong className="text-zinc-900">Coworkly</strong> is a unified PWA that manages spaces, orders, payments, and member experience—all in one seamless platform.
                </motion.p>

                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.4 }}
                   className="space-y-2 text-sm text-zinc-700"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>One-tap meeting room booking</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Integrated cafe ordering system</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Organization credit management</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Multi-location support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Real-time space availability</span>
                    </div>
                </motion.div>
            </div>

            {/* Right: CODED DASHBOARD VISUAL */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="md:col-span-7 w-full flex items-center justify-center"
            >
                {/* Dashboard Frame */}
                <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-zinc-100 p-8 font-sans relative">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8 border-b border-zinc-100 pb-6">
                        <div>
                            <div className="text-sm font-bold text-zinc-800 tracking-tight mb-4 flex items-center gap-2">
                                <span className="text-lg">CalmKaaj</span> <span className="text-orange-500">✦</span>
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-900 mb-2">Welcome back, Usama!</h3>
                            <div className="flex items-center gap-4 text-sm text-zinc-500">
                                <div className="flex items-center gap-1"><MapPin size={14}/> I-10 Location</div>
                                <div className="flex items-center gap-1"><Smartphone size={14}/> Artyreal Member</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                             <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">UP</div>
                             <div className="hidden sm:block text-sm font-medium">Usama Puri</div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        {/* Orange Card */}
                        <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 flex flex-col justify-between h-48">
                            <div>
                                <div className="flex items-center gap-2 text-orange-700 font-bold mb-2">
                                    <Coffee size={18}/> Order from Café
                                </div>
                                <div className="text-xs text-orange-600/70">Fresh coffee, snacks & meals</div>
                            </div>
                            <button className="w-full py-2 bg-[#ea580c] text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-colors">
                                View Menu
                            </button>
                        </div>
                        
                        {/* Green Card */}
                        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 flex flex-col justify-between h-48">
                            <div>
                                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                                    <Calendar size={18}/> Book Meeting Room
                                </div>
                                <div className="text-xs text-emerald-600/70">Private spaces for meetings</div>
                            </div>
                            <button className="w-full py-2 bg-[#16a34a] text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors">
                                Book Now
                            </button>
                        </div>

                         {/* Purple Card */}
                         <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 flex flex-col justify-between h-48">
                            <div>
                                <div className="flex items-center gap-2 text-purple-700 font-bold mb-2">
                                    <Smartphone size={18}/> Organization Credits
                                </div>
                                <div className="flex justify-between text-[10px] text-purple-600 mb-2">
                                    <span>Used: 0.00</span>
                                    <span className="font-bold">Available: 5.00</span>
                                </div>
                                <div className="w-full h-1.5 bg-purple-100 rounded-full overflow-hidden">
                                    <div className="w-0 h-full bg-purple-500"></div>
                                </div>
                            </div>
                            <div className="text-xs text-purple-400">Allocation: 5</div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div>
                        <h4 className="font-bold text-zinc-800 mb-4 flex items-center gap-2">
                             <span className="text-zinc-400">↗</span> Your Activity Summary
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-zinc-50 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-zinc-900">18</div>
                                <div className="text-xs text-zinc-500">Total Orders</div>
                            </div>
                            <div className="bg-zinc-50 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-zinc-900">1</div>
                                <div className="text-xs text-zinc-500">Total Bookings</div>
                            </div>
                             <div className="bg-zinc-50 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-zinc-900">0.00</div>
                                <div className="text-xs text-zinc-500">Credits Used</div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default CoworkingOverview;