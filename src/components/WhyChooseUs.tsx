"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {useRouter} from "next/navigation";

const features = [
  "Multi-Country Compliance – Automated checks across global regulations.",
  "Scalability – Supports tens of thousands of employees without performance loss.",
  "Advanced RCA – Prioritized discrepancies with clear resolution paths.",
  "Unified Solution – Variance analysis, compliance, and audit-ready reporting in one platform.",
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.6 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { ease: "easeOut", duration: 0.5 } },
};

export default function WhyChooseUs() {
    const router = useRouter();

  return (
    <section
      className="relative py-20 px-6 md:px-12 shadow-l mx-auto overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50"
      style={{
        backgroundImage: `url('/payroll-solutions.png')`, // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10 pointer-events-none rounded-3xl"></div>

      <motion.div
        className="relative max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-4 max-w-xl mx-auto tracking-tight drop-shadow-lg"
          variants={itemVariants}
        >
          Why <span className="text-purple-800">Choose Us</span>
          <span className="block mx-auto mt-2 w-20 h-1 bg-purple-500 rounded-full"></span>
        </motion.h2>
        <motion.p
          className="text-gray-700 text-white text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          The PCLnXAI Payroll Variance & Risk Analysis Suite is built for scale and precision:
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group flex items-start gap-4 rounded-3xl bg-white bg-opacity-80 p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              variants={itemVariants}
            >
              <span className="mt-1 flex-shrink-0 text-purple-600 text-2xl font-bold select-none">✓</span>
              <p className="text-lg font-semibold text-gray-900">{feature}</p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mt-16"
          variants={itemVariants}
        >
          <button
            type="button"
            className="inline-flex items-center px-12 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Schedule a Demo
          </button>
          <button
            onClick={() => router.push("https://pclnxai.com/get-help/")}
            type="button"
            className="inline-flex items-center px-12 py-3 rounded-xl border-2 border-[#6749fb] text-white font-semibold hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E07A5F] cursor-pointer"
          >
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
