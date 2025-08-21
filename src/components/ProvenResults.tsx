"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Variants } from "framer-motion";

const results = [
  "85% faster error detection",
  "90% less manual review time",
  "99.5% anomaly flagging accuracy",
  "3x faster compliance validation",
];

const containerVariants :Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.6 } },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { ease: "easeOut", duration: 0.5 } },
};

export default function ProvenResults() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-lg max-w-5xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 mb-16 tracking-tight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        Proven <span className="text-purple-600">Results</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {results.map((result, i) => (
          <motion.div
            key={i}
            className="group flex items-center gap-4 rounded-3xl bg-white bg-opacity-80 p-6 shadow-md cursor-default transition-transform hover:scale-105 hover:shadow-2xl"
            variants={itemVariants}
          >
            <CheckCircle2 className="w-8 h-8 text-purple-600 flex-shrink-0" aria-hidden="true" />
            <p className="text-lg font-semibold text-gray-900">{result}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
