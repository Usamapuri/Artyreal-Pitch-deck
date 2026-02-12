import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar, BarChart3, Shield, UserCog, UserCheck, Eye } from 'lucide-react';

const RotaClock: React.FC = () => {
  return (
    <div className="h-full w-full bg-slate-50 text-slate-900 flex flex-col justify-center px-6 md:px-20 overflow-hidden relative">
      {/* Background graphic */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-100/50 skew-x-12 transform translate-x-20" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="font-mono text-blue-600 font-bold tracking-wider">ROTACLOCK</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-2">Precision Workforce Management.</h2>
            <p className="text-xl text-slate-500">A comprehensive Next.js & PostgreSQL system for time tracking and shift logistics.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Calendar, title: "Shift Management", desc: "Drag-and-drop scheduling logic." },
              { icon: Users, title: "Leave Requests", desc: "Automated approval workflows." },
              { icon: UserCheck, title: "Shift Swaps", desc: "Peer-to-peer exchange system." },
              { icon: BarChart3, title: "Automated Reporting", desc: "Real-time attendance analytics." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white p-5 rounded-xl shadow-sm border border-slate-200"
              >
                <feature.icon className="w-6 h-6 text-blue-500 mb-3" />
                <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Roles visual */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">The Power of Roles</h3>
            <div className="space-y-4">
              {[
                { icon: Shield, role: "Admin", desc: "Full control & Configuration", color: "text-red-400" },
                { icon: Eye, role: "Project Manager", desc: "Multi-team oversight", color: "text-purple-400" },
                { icon: UserCog, role: "Team Lead", desc: "Live monitoring", color: "text-blue-400" },
                { icon: Users, role: "Employee", desc: "Self-service dashboard", color: "text-emerald-400" },
              ].map((role, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className={`p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors`}>
                    <role.icon className={`w-5 h-5 ${role.color}`} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-200">{role.role}</div>
                    <div className="text-xs text-slate-400">{role.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center text-xs text-slate-500 font-mono">
              <span>v2.4.0 Stable</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> PostgreSQL Connected</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RotaClock;