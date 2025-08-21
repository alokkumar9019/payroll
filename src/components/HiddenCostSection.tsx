"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// Animation variants typed as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Data for the "Hidden Cost of Payroll Risk" cards
const hiddenCostCardsData = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
    title: "$919K Lost Annually",
    description: "Lost per 1,000 employees annually due to variances and errors.",
    color: "text-red-600",
    bg: "bg-red-100",
    hoverBorder: "hover:border-red-300",
    hoverShadow: "0 15px 40px rgba(239, 68, 68, 0.25)",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2c-4.97 0-9 4.03-9 9 0 3.92 2.5 7.15 6 8.35V22l4-4 4 4v-2.65c3.5-1.2 6-4.43 6-8.35 0-4.97-4.03-9-9-9zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
      </svg>
    ),
    title: "$7.2M in Risk Exposure",
    description: "When a 1% error hits a 12,000-employee workforce.",
    color: "text-orange-600",
    bg: "bg-orange-100",
    hoverBorder: "hover:border-orange-300",
    hoverShadow: "0 15px 40px rgba(249, 115, 22, 0.25)",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 22C6.47 22 2 17.53 2 12S6.47 2 12 2s10 4.47 10 10-4.47 10-10 10zm-2-14V6h4v2h-4zm0 10v-6h4v6h-4z" />
      </svg>
    ),
    title: "$1.8M Recovered Annually",
    description: "Through early risk detection.",
    color: "text-green-600",
    bg: "bg-green-100",
    hoverBorder: "hover:border-green-300",
    hoverShadow: "0 15px 40px rgba(34, 197, 94, 0.25)",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
    title: "37% Compliance Concern",
    description: "Of payroll managers cite compliance and risk as their #1 concern.",
    color: "text-blue-600",
    bg: "bg-blue-100",
    hoverBorder: "hover:border-blue-300",
    hoverShadow: "0 15px 40px rgba(59, 130, 246, 0.25)",
  },
];

export default function HiddenCostSection() {
  return (
    <section
      className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50"
      id="hidden-cost"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-10 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          The <span className="text-purple-600">Hidden Cost</span> of Payroll Risk
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          {hiddenCostCardsData.map((card, idx) => (
            <motion.div
              key={idx}
              className={`group bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl cursor-pointer border border-gray-100 ${card.hoverBorder} transition-all duration-300 ease-in-out flex flex-col items-start`}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: card.hoverShadow,
              }}
            >
              <div
                className={`mb-4 inline-flex rounded-full ${card.bg} p-3 ${card.color} transition-colors duration-300 group-hover:${card.bg}`}
              >
                {card.icon}
              </div>
              <h3
                className={`mb-2 text-base sm:text-lg font-semibold text-gray-900 group-hover:${card.color} transition-colors duration-300`}
              >
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
