"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Doughnut, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler
);

const chartPalette = {
  primary: "#81B29A",
  secondary: "#F4F1DE",
  accent: "#E07A5F",
};

const features = [
  {
    key: "variance",
    label: "Payroll Variance & Root Cause Finder",
    tab: "1. Payroll Variance & Root Cause Finder",
    description:
      "Compares payroll periods to detect discrepancies and pinpoints the exact reason behind the change, whether it’s an unplanned bonus, missing hours, or a deduction override. This eliminates guesswork and drastically cuts reconciliation time.",
    chartType: "doughnut",
    chartData: {
      labels: ["Time Saved on Reconciliation", "Remaining Manual Effort"],
      datasets: [
        {
          data: [85, 15],
          backgroundColor: [chartPalette.primary, chartPalette.secondary],
          borderColor: "#ffffff",
          borderWidth: 3,
        },
      ],
    },
    chartOptions: {
      cutout: "70%",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: "#3D405B", font: { size: 14 } },
        },
        title: {
          display: true,
          text: "Up to 90% Faster Discrepancy Resolution",
          font: { size: 16, weight: "bold" },
          color: "#3D405B",
          padding: { bottom: 20 },
        },
      },
    },
  },
  {
    key: "compliance",
    label: "Compliance Checker",
    tab: "2. Compliance Checker",
    description:
      "Payroll data is automatically reviewed against compliance rules (e.g., CRA, HMRC, IRS). The tool identifies discrepancies like missing deductions or improper tax handling that can lead to fines or rework.",
    chartType: "bar",
    chartData: {
      labels: ["Manual Process", "With Suite"],
      datasets: [
        {
          label: "Risk of Fines & Penalties",
          data: [80, 10],
          backgroundColor: [chartPalette.accent, chartPalette.primary],
          barThickness: 36,
        },
      ],
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max: 100, ticks: { color: "#3D405B" } },
        x: { ticks: { color: "#3D405B" } },
      },
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Compliance Risk Exposure",
          color: "#3D405B",
        },
      },
    },
  },
  {
    key: "validation",
    label: "Pre-Payroll Validation",
    tab: "3. Pre-Payroll Validation",
    description:
      "Validates that payroll results align with actual employee data (e.g., worked hours, pay rates). It checks misalignments like overpaid commissions or incorrect tax treatment.",
    chartType: "bar",
    chartData: {
      labels: ["Error Rate Before", "Error Rate After"],
      datasets: [
        {
          label: "Payroll Error Rate (%)",
          data: [12, 2],
          backgroundColor: [chartPalette.accent, chartPalette.primary],
          barThickness: 36,
        },
      ],
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max: 15, ticks: { color: "#3D405B" } },
        x: { ticks: { color: "#3D405B" } },
      },
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Increase Payroll Accuracy, Reduce Reruns",
          color: "#3D405B",
        },
      },
    },
  },
  {
    key: "costing",
    label: "Payroll Costing Validation",
    tab: "4. Payroll Costing Validation",
    description:
      "Ensures alignment between payroll data and HR costing by comparing runs with original assignments. Highlights mismatches between cost centers and charged departments.",
    isDiagram: true,
    diagramHtml: (
      <div className="text-center h-full flex flex-col justify-center items-center px-12">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">
          Ensure Accounting Integrity
        </h3>
        <div className="flex items-center justify-center space-x-4">
          <div className="p-4 bg-blue-100 text-blue-800 rounded-lg shadow">
            HR Costing Plan
          </div>
          <div className="text-4xl font-light text-gray-400">⇄</div>
          <div className="p-4 bg-green-100 text-green-800 rounded-lg shadow">
            Finance Payroll Run
          </div>
        </div>
        <p className="mt-6 text-gray-600">Perfectly aligned every time.</p>
      </div>
    ),
  },
  {
    key: "trends",
    label: "Historical Trend Analysis",
    tab: "5. Historical Trend Analysis",
    description:
      "Track how earnings, deductions, and hours evolve over time. Identify recurring patterns before they become budget or compliance problems.",
    chartType: "line",
    chartData: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Unplanned Overtime Costs",
          data: [15000, 17000, 22000, 21000],
          fill: true,
          borderColor: chartPalette.accent,
          backgroundColor: "rgba(224, 122, 95, 0.2)",
          tension: 0.3,
        },
      ],
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { color: "#3D405B" } },
        title: { display: true, text: "Identify Trends", color: "#3D405B" },
      },
      scales: {
        y: { ticks: { color: "#3D405B" } },
        x: { ticks: { color: "#3D405B" } },
      },
    },
  },
  {
    key: "reports",
    label: "Export-Ready Audit Reports",
    tab: "6. Export-Ready Audit Reports",
    description:
      "Download audit-ready PDF and Excel reports summarizing discrepancies, root causes, risk levels, and key metrics.",
    isDiagram: true,
    diagramHtml: (
      <div className="text-center h-full flex flex-col justify-center items-center px-12">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-green-500 text-white text-4xl">
          📝
        </div>
        <h3 className="text-xl font-semibold mt-6 text-gray-700">
          One-Click Audit Reports
        </h3>
        <p className="mt-2 text-gray-600">PDF & Excel formats</p>
      </div>
    ),
  },
  {
    key: "risk",
    label: "Risk Categorization",
    tab: "7. Risk Categorization",
    description:
      "Each variance is tagged as High, Medium, or Low Risk, enabling prioritization of critical issues.",
    chartType: "bar",
    chartData: {
      labels: ["Identified Variances"],
      datasets: [
        {
          label: "Low Risk",
          data: [120],
          backgroundColor: chartPalette.primary,
        },
        { label: "Medium Risk", data: [45], backgroundColor: "#F2C94C" },
        {
          label: "High Risk",
          data: [10],
          backgroundColor: chartPalette.accent,
        },
      ],
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y" as const,
      scales: {
        x: { stacked: true },
        y: { stacked: true },
      },
      plugins: {
        legend: { position: "bottom", labels: { color: "#3D405B" } },
        title: {
          display: true,
          text: "Prioritize High-Risk Issues",
          color: "#3D405B",
        },
      },
    },
  },
];

const tabVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
};
const contentVariants: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 24, transition: { duration: 0.3, ease: "easeIn" } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
export default function FeatureExplorer() {
  const [selected, setSelected] = React.useState("variance");
  const current = features.find((f) => f.key === selected);

  return (
    <section
      id="features"
      className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Key <span className="text-purple-600">Features</span>
          <span className="block mx-auto mt-2 w-20 h-1 bg-purple-500 rounded-full"></span>
        </h2>
        <motion.p
          className="text-center text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Our suite is a root-cause analytics tool that automatically highlights
          what's changed, why it changed, and what needs your attention first.
          Explore the features that deliver the full story behind payroll
          variance in minutes, not days.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <nav aria-label="Feature tabs" className="md:w-1/3">
          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f.key}>
                <button
                  className={`block w-full rounded-lg py-3 px-4 font-semibold transition ${
                    selected === f.key
                      ? "bg-indigo-900 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-indigo-50"
                  }`}
                  onClick={() => setSelected(f.key)}
                  aria-selected={selected === f.key}
                  aria-controls={`feature-panel-${f.key}`}
                >
                  {f.tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="md:w-2/3 bg-white rounded-lg p-8 shadow-lg min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current?.key}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              id={`feature-panel-${current?.key}`}
              role="tabpanel"
              aria-labelledby={current?.key && `tab-${current.key}`}
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-800">
                {current?.label}
              </h3>
              <p className="mb-6 text-gray-700">{current?.description}</p>
              <div className="max-w-md mx-auto">
                {current?.isDiagram ? current.diagramHtml : null}
              </div>
              {!current?.isDiagram && current?.chartType && (
                <div className="max-w-md mx-auto" style={{ height: "300px" }}>
                  {current.chartType === "doughnut" && (
                    <Doughnut
                      data={current.chartData}
                      options={current.chartOptions as any}
                    />
                  )}
                  {current.chartType === "bar" && (
                    <Bar
                      data={current.chartData}
                      options={current.chartOptions as any}
                    />
                  )}
                  {current.chartType === "line" && (
                    <Line
                      data={current.chartData}
                      options={current.chartOptions as any}
                    />
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </section>
  );
}
