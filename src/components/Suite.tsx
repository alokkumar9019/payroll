"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "@/lotties/animation2.json";
import { useRouter } from "next/navigation";

const features = [
  {
    heading: "Catch Errors Before They Escalate",
    content: "Flag variances instantly.",
  },
  {
    heading: "Prioritize What Matters",
    content: "Focus on high-value risks with smart severity scoring.",
  },
  {
    heading: "Trace Root Causes Clearly",
    content: "Identify errors in time, data, or logic in one click.",
  },
  {
    heading: "Stay Audit-Ready",
    content: "Export-ready reports for finance and compliance.",
  },
  {
    heading: "Save Time Every Cycle",
    content: "Automate reconciliations, dashboards, and summaries.",
  },
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
          What You Can Do{" "}
          <span className="text-purple-600">With The Suite</span>
        </motion.h2>

        {/* Main Row with flipped order */}
        <motion.div
          className="pt-4 flex flex-col md:flex-row items-center md:items-center justify-center md:space-x-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Lottie/Image on the left */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center mb-8 md:mb-0">
            <div className="w-full max-w-[420px] relative z-0">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{
                  width: "140%", // increased size (e.g. 120%)
                  height: "auto",
                  maxWidth: "none",
                  position: "absolute", // position absolute to avoid affecting layout
                  top: -300,
                  left: -55,
                  zIndex: -10, // negative z-index to put behind content
                  pointerEvents: "none", // prevent interaction issues
                }}
                aria-label="Payroll Suite Animation"
              />
            </div>
          </div>

          {/* Feature Cards on the right */}

          <div className="w-full md:w-3/4 flex flex-col gap-5">
            {features.map(({ heading, content }, idx) => (
              <motion.div
                key={idx}
                className="
        group flex items-center gap-2 rounded-2xl bg-white bg-opacity-90 
        px-4 sm:px-8 py-4 shadow transition-all hover:scale-105 hover:bg-purple-50 cursor-pointer
        w-full max-w-full
      "
                variants={itemVariants}
                style={{ minWidth: 0 }}
              >
                <CheckCircle className="w-7 h-7 text-purple-600 flex-shrink-0" />
                <span className="text-[1.02rem] sm:text-lg font-bold mr-2 text-gray-900">
                  {heading}
                </span>
                <span className="text-base sm:text-l font-semibold text-gray-700">
                  {content}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
