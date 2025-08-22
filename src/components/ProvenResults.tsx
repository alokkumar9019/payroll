"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const results = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-purple-600" />,
    value: "85%",
    label: "Faster error detection",
    bg: "bg-purple-50",
    hoverBorder: "hover:border-purple-300",
    hoverShadow: "0 15px 40px rgba(139,92,246,0.25)",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-sky-600" />,
    value: "90%",
    label: "Less manual review time",
    bg: "bg-sky-50",
    hoverBorder: "hover:border-sky-300",
    hoverShadow: "0 15px 40px rgba(56,189,248,0.23)",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-green-600" />,
    value: "99.5%",
    label: "Anomaly flagging accuracy",
    bg: "bg-green-50",
    hoverBorder: "hover:border-green-300",
    hoverShadow: "0 15px 40px rgba(34,197,94,0.25)",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-amber-600" />,
    value: "3x",
    label: "Faster compliance validation",
    bg: "bg-amber-50",
    hoverBorder: "hover:border-amber-300",
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

export default function ProvenResults() {
  return (
    <section className="pb-5 bg-gradient-to-br from-indigo-50 to-purple-50 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Proven <span className="text-purple-600">Results</span>
        </h2>
        <motion.p
          className="text-center text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Our solution delivers measurable improvements:
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, i) => (
            <motion.div
              key={result.value}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`group rounded-2xl border border-gray-100 p-7 flex flex-col items-center text-center
                transition-all duration-300 ease-in-out cursor-default bg-white cursor-pointer${result.bg}`}
              style={{
                boxShadow: result.hoverBorder,
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: result.hoverShadow,
              }}
            >
              <div className="mb-4">{result.icon}</div>
              <div className="text-3xl font-extrabold mb-2 text-gray-800">{result.value}</div>
              <div className="text-sm sm:text-base text-gray-700">{result.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
