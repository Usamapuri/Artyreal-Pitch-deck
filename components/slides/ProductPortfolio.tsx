import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Coffee, Building2, GraduationCap, Zap } from 'lucide-react';

const ProductPortfolio: React.FC = () => {
  const products = [
    {
      icon: Clock,
      name: "RotaClock",
      tagline: "Workforce OS for precision scheduling.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      borderHover: "group-hover:border-blue-200",
      shadowHover: "group-hover:shadow-blue-100/50",
    },
    {
      icon: Coffee,
      name: "Coworkly",
      tagline: "Smart operations for coworking spaces.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      borderHover: "group-hover:border-indigo-200",
      shadowHover: "group-hover:shadow-indigo-100/50",
    },
    {
      icon: Building2,
      name: "HostelFlow",
      tagline: "Multi-tenant property management.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      borderHover: "group-hover:border-emerald-200",
      shadowHover: "group-hover:shadow-emerald-100/50",
    },
    {
      icon: GraduationCap,
      name: "frontench.io",
      tagline: "The operating system for modern schools.",
      color: "text-orange-600",
      bg: "bg-orange-50",
      borderHover: "group-hover:border-orange-200",
      shadowHover: "group-hover:shadow-orange-100/50",
    },
  ];

  return (
    <div className="h-full w-full bg-artyreal-bg flex flex-col justify-center px-6 md:px-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-artyreal-red blur-[150px]"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Headline */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-artyreal-text mb-4 leading-tight"
          >
            One Ecosystem. <br />
            <span className="text-artyreal-red">Four Industry Solutions.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-artyreal-red mx-auto rounded-full"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className={`group bg-white p-8 rounded-2xl border-2 border-artyreal-text/10 transition-all duration-300 cursor-default hover:-translate-y-2 shadow-lg ${product.borderHover} ${product.shadowHover}`}
            >
              {/* Icon Container */}
              <div className={`inline-flex p-4 ${product.bg} rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <product.icon className={`w-8 h-8 ${product.color}`} strokeWidth={1.5} />
              </div>

              {/* Product Name */}
              <h3 className="text-2xl font-bold text-artyreal-text mb-3">
                {product.name}
              </h3>

              {/* Tagline */}
              <p className="text-artyreal-text/70 leading-relaxed">
                {product.tagline}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-artyreal-text/5 border border-artyreal-text/10 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-artyreal-red" strokeWidth={2} />
            <span className="text-sm font-medium text-artyreal-text/80 tracking-wide">
              All built on the Artyreal Scale-and-Speed Engine.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPortfolio;
