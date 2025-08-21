"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "@/lotties/animation2.json";
import { Variants } from "framer-motion";
import { useRouter } from "next/navigation";



const features = [
  { heading: "Catch Errors Before They Escalate", content: "Flag variances instantly." },
  { heading: "Prioritize What Matters Most", content: "Focus on high-value risks with smart severity scoring." },
  { heading: "Trace Root Causes Clearly", content: "Identify errors in time, data, or logic in one click." },
  { heading: "Stay Audit-Ready", content: "Export-ready reports for finance and compliance." },
  { heading: "Save Time Every Cycle", content: "Automate reconciliations, dashboards, and summaries." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function SuiteCapabilitiesWithLottie() {
  const router = useRouter();
  return (
    <section id="suite" className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-indigo-50 to-purple-50 mx-auto shadow-l">
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-900 mb-16 tracking-tight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        What You Can Do <span className="text-purple-600">With The Suite</span>
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row md:items-center md:space-x-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Features List */}
        <div className="md:w-1/2 space-y-6">
          {features.map(({ heading, content }, idx) => (
            <motion.div
              key={idx}
              className="group flex items-start gap-3 rounded-3xl bg-white bg-opacity-70 p-6 shadow-sm transition-shadow hover:shadow-lg cursor-default"
              variants={itemVariants}
            >
              <CheckCircle
                className="mt-1 w-7 h-7 flex-shrink-0 text-purple-600 transition-colors group-hover:text-purple-700"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-l font-semibold text-gray-900">{heading}</h3>
                <p className="mt-1 text-gray-700 text-base">{content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lottie Animation */}
        <motion.div className="md:w-1/2 mt-12 md:mt-0 flex justify-center" variants={itemVariants}>
          <Lottie
            animationData={animationData}
            loop
            autoplay
           style={{ transform: 'translateY(-80px)', width: '100%', maxWidth: 800, height: '1200' }}
            aria-label="Payroll Suite Animation"
          />
        </motion.div>
      </motion.div>

      {/* Centered CTA Button */}
      <div className="mt-16 flex justify-center">
        <motion.button
          type="button"
          onClick={() => router.push("https://pclnxai.com/retail-payroll-errors-solution-by-pclnxai/#demo")}
          className="inline-flex items-center px-10 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          See It In Action
        </motion.button>
      </div>
    </section>
  );
}
