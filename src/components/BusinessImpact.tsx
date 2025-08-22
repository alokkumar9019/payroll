"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { BarChart3, Clock, ShieldCheck, Eye } from "lucide-react";

const impactStats = [
  {
    icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
    value: "95%",
    label: "reduction in manual reconciliation workload",
    bg: "bg-purple-50",
    baseShadow: "0 8px 28px rgba(139,92,246,0.08)",
    hoverShadow: "0 15px 40px rgba(139,92,246,0.25)",
  },
  {
    icon: <Clock className="w-8 h-8 text-sky-600" />,
    value: "70%",
    label: "faster root cause analysis",
    bg: "bg-sky-50",
    baseShadow: "0 8px 28px rgba(56,189,248,0.08)",
    hoverShadow: "0 15px 40px rgba(56,189,248,0.23)",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    value: "80%",
    label: "fewer compliance errors",
    bg: "bg-green-50",
    baseShadow: "0 8px 28px rgba(34,197,94,0.08)",
    hoverShadow: "0 15px 40px rgba(34,197,94,0.25)",
  },
  {
    icon: <Eye className="w-8 h-8 text-amber-600" />,
    value: "100%",
    label: "visibility for finance, audit, and payroll ops",
    bg: "bg-amber-50",
    baseShadow: "0 8px 28px rgba(251,191,36,0.08)",
    hoverShadow: "0 15px 40px rgba(251,191,36,0.20)",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.7, ease: "easeOut" },
  }),
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BusinessImpact() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Business <span className="text-purple-600">Impact</span>
        </h2>
        <motion.p
                  className="text-center text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                >
                    Payroll teams using our suite achieve:
                </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.value}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`group rounded-2xl border border-gray-100 p-7 flex flex-col items-center text-center
                transition-all duration-300 ease-in-out bg-white ${stat.bg} cursor-pointer`}
              style={{
                boxShadow: stat.baseShadow,
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: stat.hoverShadow,
              }}
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl font-extrabold mb-2 text-gray-800">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
