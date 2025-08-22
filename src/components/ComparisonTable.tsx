"use client";

import React, { useEffect, useState } from "react";
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
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ComparisonTable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="mx-auto px-6 py-16 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl"
    >
      <div className="text-center mb-14 relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block relative z-10">
          Why <span className="text-purple-600">We're</span> Different
        </h2>
      </div>

      <div
        className="overflow-x-auto"
        style={{
          overflowY: mounted ? "auto" : "hidden",
          minHeight: 360, // stable container height prevents flicker
        }}
      >
        <table className="w-full table-auto min-w-[600px] border-collapse border border-gray-200 rounded-xl shadow-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-4 rounded-tl-xl text-left font-semibold border border-gray-200">
                Function
              </th>
              <th className="px-6 py-4 text-left font-semibold border border-gray-200">
                Traditional Payroll Review
              </th>
              <th className="px-6 py-4 rounded-tr-xl text-left font-semibold bg-indigo-100 text-indigo-800 border border-gray-200">
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
                <td className="px-6 py-6 font-semibold text-gray-800 border border-gray-200 rounded-l-xl whitespace-nowrap">
                  {row.function}
                </td>
                <td className="px-6 py-6 text-gray-600 border border-gray-200">
                  {row.traditional}
                </td>
                <td className="px-6 py-6 border border-gray-200 rounded-r-xl bg-indigo-50 text-indigo-900 font-medium shadow-inner">
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
