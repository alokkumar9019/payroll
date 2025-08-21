"use client";
import React from "react";

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

export default function ComparisonTable() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-3xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
        Why We’re Different{" "}
        <span className="text-lg font-normal text-gray-500">(Comparison Table)</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse table-auto min-w-[600px]">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 px-6 py-4 bg-gray-50 text-gray-700 font-semibold">
                Function
              </th>
              <th className="border-b-2 border-gray-300 px-6 py-4 bg-gray-50 text-gray-600 font-semibold">
                Traditional Payroll Review
              </th>
              <th className="border-b-2 border-gray-300 px-6 py-4 bg-indigo-50 text-indigo-800 font-semibold">
                PCLnXAI Payroll Suite
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border-b border-gray-200 px-6 py-5 font-semibold text-gray-800 align-top">
                  {row.function}
                </td>
                <td className="border-b border-gray-200 px-6 py-5 text-gray-600 align-top">
                  {row.traditional}
                </td>
                <td className="border-b border-gray-200 px-6 py-5 text-indigo-900 align-top">
                  {row.pclnxai}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
