"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "@/lotties/animation2.json";
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
    <section
      id="suite"
      className="relative py-12 md:py-20 px-2 md:px-10 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 mb-6 md:mb-8 tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          What You Can Do <span className="text-purple-600">With The Suite</span>
        </motion.h2>

        {/* Main Row with flipped order */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-center justify-center md:space-x-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Lottie/Image on the left */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <div className="max-w-[420px] w-full flex justify-center items-center">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{
                  width: "100%",
                  height: 420,
                  maxWidth: 420,
                  minWidth: 250,
                  display: "block"
                }}
                aria-label="Payroll Suite Animation"
              />
            </div>
          </div>

          {/* Feature Cards on the right */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            {features.map(({ heading, content }, idx) => (
              <motion.div
                key={idx}
                className="group flex items-center gap-3 rounded-2xl bg-white bg-opacity-90 px-7 py-4 shadow transition-all hover:scale-105 hover:bg-purple-50 cursor-pointer"
                variants={itemVariants}
              >
                <CheckCircle className="w-7 h-7 text-purple-600 flex-shrink-0" />
                <span className="text-[1rem] sm:text-[1.06rem] font-bold text-gray-900 mr-2 whitespace-nowrap">{heading}</span>
                <span className="text-gray-700 text-sm font-medium whitespace-nowrap">{content}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
