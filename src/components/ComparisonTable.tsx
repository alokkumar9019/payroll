"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const comparisonData = [
  {
    function: "Variance Detection",
    traditional: "Manual, spreadsheet checks",
    pclnxai: "Automated scans with smart exception tagging",
  },
  {
    function: "Root Cause Analysis",
    traditional: "Hours of tracing across silos",
    pclnxai: "One-click RCA with pinpointed sources",
  },
  {
    function: "Compliance Assurance",
    traditional: "Manual legal review",
    pclnxai: "Embedded country-specific compliance checks",
  },
  {
    function: "Audit Trail",
    traditional: "Manual notes, low traceability",
    pclnxai: "Auto-captured RCA logs + export-ready reports",
  },
  {
    function: "Issue Prioritization",
    traditional: "All issues treated equally",
    pclnxai: "Ranked by urgency & financial impact",
  },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.7, ease: "easeOut" },
  }),
};

export default function ComparisonTable() {
  return (
    <section className="mx-auto px-6 py-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl ">
      <div className="text-center mb-14 relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block relative z-10">
          Why <span className="text-purple-600">We're</span> Different
        </h2>
        <span className="block mx-auto mt-2 w-20 h-1 bg-purple-500 rounded-full"></span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto min-w-[600px]">
          <thead>
            <tr>
              <th className="px-6 py-4 bg-gray-100 font-semibold text-gray-700 rounded-tl-2xl text-left">
                Function
              </th>
              <th className="px-6 py-4 bg-gray-100 font-semibold text-gray-600 text-left">
                Traditional Payroll Review
              </th>
              <th className="px-6 py-4 bg-indigo-100 font-semibold text-indigo-800 rounded-tr-2xl text-left">
                PCLnXAI Payroll Suite
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <motion.tr
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={rowVariants}
                className={idx % 2 === 0 ? "bg-white" : "bg-purple-50"}
              >
                <td className="px-6 py-6 font-semibold text-gray-800 border-b border-gray-200 align-top whitespace-nowrap rounded-l-2xl">
                  {row.function}
                </td>
                <td className="px-6 py-6 text-gray-600 border-b border-gray-200 align-top">
                  {row.traditional}
                </td>
                <td className="px-6 py-6 border-b border-gray-200 align-top rounded-r-2xl bg-indigo-50 text-indigo-900 font-medium shadow-inner">
                  {row.pclnxai}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
