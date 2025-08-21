"use client"
import React from "react";
import { motion, Variants } from "framer-motion";
import classNames from "classnames";
import {
  Zap,
  MessageCircle,
  ShieldCheck,
  Wifi,
  AlertTriangle,
  EyeOff,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const problemPointCardsData = [
  {
    icon: <Zap className="w-7 h-7 text-red-500" />,
    title: "Manual Reconciliation",
    description: "Hours lost chasing mismatched data across spreadsheets.",
    hoverBorder: "hover:border-red-300",
    hoverText: "group-hover:text-red-600",
    hoverShadow: "0 15px 40px rgba(239,68,68,0.18)",
  },
  {
    icon: <MessageCircle className="w-7 h-7 text-violet-500" />,
    title: "No Root Cause Visibility",
    description: "Errors are detected but never explained.",
    hoverBorder: "hover:border-violet-300",
    hoverText: "group-hover:text-violet-600",
    hoverShadow: "0 15px 40px rgba(139,92,246,0.18)",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-500" />,
    title: "Compliance Complexity",
    description: "Country-specific laws without automated checks = costly fines.",
    hoverBorder: "hover:border-yellow-300",
    hoverText: "group-hover:text-yellow-600",
    hoverShadow: "0 15px 40px rgba(234,179,8,0.18)",
  },
  {
    icon: <Wifi className="w-7 h-7 text-sky-500" />,
    title: "Disconnected Systems",
    description: "HR, time, and payroll data rarely flow seamlessly.",
    hoverBorder: "hover:border-sky-300",
    hoverText: "group-hover:text-sky-600",
    hoverShadow: "0 15px 40px rgba(14,165,233,0.18)",
  },
  {
    icon: <AlertTriangle className="w-7 h-7 text-yellow-500" />,
    title: "Lack of Prioritization",
    description: "High-impact risks get buried in the noise.",
    hoverBorder: "hover:border-yellow-400",
    hoverText: "group-hover:text-yellow-600",
    hoverShadow: "0 15px 40px rgba(202,138,4,0.18)",
  },
  {
    icon: <EyeOff className="w-7 h-7 text-purple-500" />,
    title: "Hidden from Finance",
    description: "No central view for audit or financial teams.",
    hoverBorder: "hover:border-purple-300",
    hoverText: "group-hover:text-purple-600",
    hoverShadow: "0 15px 40px rgba(139,92,246,0.18)",
  },
];

export default function ProblemWeSolve() {
  return (
    <section id="problem-we-solve" className="bg-gradient-to-br from-gray-50 to-indigo-50 pt-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-10 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          The <span className="text-purple-600">Problem</span> We Solve
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 h-1 w-20 bg-purple-500 rounded-full" />
        </motion.h1>

        <motion.p
          className="text-center text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Payroll teams are under pressure to deliver accurate and compliant pay, yet outdated processes hold them back:
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          {problemPointCardsData.map(
            ({ icon, title, description, hoverBorder, hoverText, hoverShadow }, idx) => (
              <motion.div
                key={idx}
                className={classNames(
                  "group bg-white rounded-2xl p-7 shadow-lg border border-gray-100 flex flex-col items-center text-center transition-all duration-300 ease-in-out cursor-pointer",
                  hoverBorder
                )}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: hoverShadow,
                }}
              >
                <div className="mb-4 transition-colors duration-300">{icon}</div>
                <h3 className={classNames(
                  "mb-2 text-base sm:text-lg font-semibold text-gray-900 transition-colors duration-300",
                  hoverText
                )}>
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
