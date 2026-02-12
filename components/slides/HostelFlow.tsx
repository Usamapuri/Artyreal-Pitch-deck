import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Home, LayoutGrid, Layers, LineChart } from 'lucide-react';

const HostelFlow: React.FC = () => {
  const stats = [
    { label: "Admin Reduction", value: "70%", color: "text-emerald-600" },
    { label: "Beds per Property", value: "500+", color: "text-blue-600" },
    { label: "Revenue Protection", value: "100%", color: "text-purple-600" },
  ];

  return (
    <div className="h-full w-full bg-white flex flex-col justify-center px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-12 border-l-4 border-emerald-500 pl-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold text-slate-900 mb-2"
          >
            HostelFlow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl text-slate-500 font-light"
          >
            The Future of Student Housing: Automating from single hostels to global chains.
          </motion.p>
        </div>

        {/* Big Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`text-6xl font-bold ${stat.color} mb-2 tracking-tighter`}>{stat.value}</div>
              <div className="text-slate-600 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Lower Section: Architecture & Value */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <Layers className="w-5 h-5 text-emerald-500" />
              Architecture Features
            </h3>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <span className="font-semibold text-slate-900">Multi-tenant SaaS Architecture</span>
                <p className="text-sm text-slate-500">One account, unlimited properties. Infinite scale.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {['Rooms', 'Students', 'Finance', 'Maintenance'].map((mod, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded text-sm text-slate-700 font-medium border border-slate-100">
                    <LayoutGrid className="w-4 h-4 text-slate-400" /> {mod}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
             <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              Value Proposition
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold text-emerald-900">Bank-grade Security</h4>
                  <p className="text-sm text-emerald-700/80">Data integrity and privacy first.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                <LineChart className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900">Real-time Financial Analytics</h4>
                  <p className="text-sm text-blue-700/80">Track every penny, instantly.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HostelFlow;