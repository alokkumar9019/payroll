"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PayrollROICalculator() {
  const [form, setForm] = useState({
    employees: "",
    specialists: "",
    monthly: "",
    errorRate: "",
    complianceCost: "",
  });

  const [result, setResult] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function calculateROI() {
    const employees = parseInt(form.employees);
    const specialists = parseInt(form.specialists);
    const monthly = parseFloat(form.monthly);
    const errorRate = parseFloat(form.errorRate);
    const complianceCost = parseFloat(form.complianceCost);

    if (
      isNaN(employees) ||
      isNaN(specialists) ||
      isNaN(monthly) ||
      isNaN(errorRate) ||
      isNaN(complianceCost)
    ) {
      setResult(null);
      return;
    }

    const annualTransactions = employees * 52;
    const errors = (annualTransactions * errorRate) / 100;
    const costPerError = 200;
    const totalErrorCost = errors * costPerError;
    const payrollOpsCost = specialists * monthly * 12;
    const estimatedSavings =
      totalErrorCost * 0.5 + payrollOpsCost * 0.3 + complianceCost * 0.2;
    const solutionCost = 480000; // fixed annual cost (40,000 x 12)
    const roi = ((estimatedSavings - solutionCost) / solutionCost) * 100;

    const resultText = `Estimated Annual Savings: $${Math.round(estimatedSavings).toLocaleString()}\nROI: ${Math.round(roi)}%`;

    setResult(resultText);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    calculateROI();
  }

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center min-h-[70vh] px-4">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 tracking-tight relative "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        Estimate Your <span className="text-purple-600">Retail</span> Payroll ROI
        <span className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 h-1 w-20 bg-purple-600 rounded-full"></span>
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white bg-opacity-50 rounded-2xl shadow-2xl px-7 py-8 flex flex-col gap-5"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <div>
          <label className="block mb-2 font-semibold text-gray-800">Number of Employees</label>
          <input
            type="number"
            id="employees"
            name="employees"
            placeholder="e.g., 22000"
            value={form.employees}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800">Number of Payroll Specialists</label>
          <input
            type="number"
            id="specialists"
            name="specialists"
            placeholder="e.g., 3"
            value={form.specialists}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800">Monthly CTC per Specialist (USD)</label>
          <input
            type="number"
            id="monthly"
            name="monthly"
            placeholder="e.g., 11600"
            value={form.monthly}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800">Estimated Error Rate (%)</label>
          <input
            type="number"
            id="errorRate"
            name="errorRate"
            placeholder="e.g., 1"
            value={form.errorRate}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800">Estimated Annual Compliance Cost (USD)</label>
          <input
            type="number"
            id="complianceCost"
            name="complianceCost"
            placeholder="e.g., 120000"
            value={form.complianceCost}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-full bg-purple-600 text-white text-lg font-bold shadow-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-600"
        >
          Calculate ROI
        </button>

        {result && (
          <pre
            id="roiResult"
            className="whitespace-pre-wrap w-full mt-6 bg-purple-100 rounded-xl p-5 text-lg font-semibold text-purple-900"
          >
            {result}
          </pre>
        )}
      </form>
    </section>
  );
}
