import React from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Users, Wallet, Wrench, ShieldCheck } from 'lucide-react';

const HostelFlowModules: React.FC = () => {
  const modules = [
    {
      icon: BedDouble,
      title: "Rooms",
      subtitle: "Inventory & Pricing",
      desc: "Dynamic inventory management with automated pricing models.",
      color: "text-blue-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]",
      border: "group-hover:border-blue-500/50",
      bg: "bg-blue-500/10"
    },
    {
      icon: Users,
      title: "Students",
      subtitle: "KYC & Contracts",
      desc: "Digital onboarding, KYC verification, and e-contracts.",
      color: "text-indigo-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(129,140,248,0.3)]",
      border: "group-hover:border-indigo-500/50",
      bg: "bg-indigo-500/10"
    },
    {
      icon: Wallet,
      title: "Finance",
      subtitle: "Automated Collection",
      desc: "Rent automation, expense tracking, and P&L reports.",
      color: "text-emerald-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]",
      border: "group-hover:border-emerald-500/50",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      subtitle: "Vendor Management",
      desc: "Ticket systems for repairs with vendor integration.",
      color: "text-orange-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]",
      border: "group-hover:border-orange-500/50",
      bg: "bg-orange-500/10"
    },
  ];

  return (
    <div className="h-full w-full bg-[#09090b] text-white flex flex-col justify-center px-6 md:px-24 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

       <div className="text-center mb-16 relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
                The 4-Pillar Ecosystem
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 text-lg"
            >
                Multi-tenant SaaS covering every aspect of operations.
            </motion.p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full relative z-10">
            {modules.map((mod, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className={`bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 transition-all duration-500 group cursor-default ${mod.border} hover:-translate-y-2 relative overflow-hidden`}
                >
                    <div className={`w-16 h-16 ${mod.bg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${mod.glow} shadow-lg relative z-10`}>
                        <mod.icon className={`w-8 h-8 ${mod.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 relative z-10">{mod.title}</h3>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${mod.color} opacity-80 relative z-10`}>{mod.subtitle}</div>
                    <p className="text-zinc-500 text-sm leading-relaxed border-t border-zinc-800 pt-4 group-hover:text-zinc-400 transition-colors relative z-10">{mod.desc}</p>
                    
                    {/* Inner highlight */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
            ))}
       </div>

       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1 }}
         className="absolute bottom-12 left-0 right-0 flex justify-center z-10"
       >
           <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold tracking-widest uppercase shadow-2xl">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Bank-Grade Security Standard</span>
           </div>
       </motion.div>
    </div>
  );
};

export default HostelFlowModules;