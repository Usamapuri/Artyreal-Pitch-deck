import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, CalendarCheck, CreditCard, MessageCircle, FileText } from 'lucide-react';

const Primax: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#FFFBF0] text-slate-800 flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
      
      {/* Gentle blob background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orange-200/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 bg-orange-100 rounded-2xl mb-6"
          >
            <GraduationCap className="w-10 h-10 text-orange-600" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-slate-900 mb-3 font-serif"
          >
            Primax: The All-in-One School OS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Streamlining school administration and bridging the parent-teacher gap.
          </motion.p>
        </div>

        {/* Dashboard Preview / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-orange-900/5 border border-orange-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 bg-red-50 rounded-full mb-6">
              <CreditCard className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Admin Power</h3>
            <p className="text-slate-500 mb-4 text-sm leading-relaxed">
              Complete control over Automatic Billing, Daily Attendance, and complex Teacher Payroll calculations.
            </p>
            <div className="mt-auto w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-red-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-orange-900/5 border border-orange-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 transform scale-105 z-10"
          >
            <div className="p-4 bg-orange-50 rounded-full mb-6">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Parent Engagement</h3>
            <p className="text-slate-500 mb-4 text-sm leading-relaxed">
              Dedicated Student Progress Dashboards and real-time push updates keep parents in the loop, always.
            </p>
             <div className="mt-auto flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                ))}
             </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-orange-900/5 border border-orange-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 bg-blue-50 rounded-full mb-6">
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Full Workflow</h3>
            <p className="text-slate-500 mb-4 text-sm leading-relaxed">
              A true "One-Stop-Shop" covering every administrative need from admissions to exams.
            </p>
            <div className="mt-auto flex gap-2">
                <div className="p-1 bg-blue-50 rounded"><CalendarCheck className="w-4 h-4 text-blue-400"/></div>
                <div className="p-1 bg-blue-50 rounded"><MessageCircle className="w-4 h-4 text-blue-400"/></div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Primax;