"use client";

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function DemoSection() {
  const demoChartRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState("period1");
  const [analysisContent, setAnalysisContent] = useState<React.ReactNode>(
    "Select a pay period to begin analysis."
  );
  const chartInstance = useRef<Chart | null>(null);

  const period1Data = {
    labels: ["Sales", "Logistics", "Marketing", "Admin"],
    data: [120000, 85000, 45000, 32000],
  };

  const period2Data = {
    labels: ["Sales", "Logistics", "Marketing", "Admin"],
    data: [125000, 84500, 50200, 32000],
  };

  // Initialize Chart
  useEffect(() => {
    if (demoChartRef.current) {
      chartInstance.current = new Chart(demoChartRef.current, {
        type: "bar",
        data: {
          labels: period1Data.labels,
          datasets: [
            {
              label: "Payroll Cost",
              data: period1Data.data,
              backgroundColor: "#38bdf8",
              borderColor: "#0ea5e9",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => "$" + (Number(value) / 1000) + "k",
              },
            },
          },
        },
      });
    }

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  // Update Chart and analysis content based on selected period
  const updateChart = (period: string) => {
    if (!chartInstance.current) return;

    if (period === "period1") {
      chartInstance.current.data.datasets[0].data = period1Data.data;
      setAnalysisContent("Select a pay period to begin analysis.");
    } else {
      chartInstance.current.data.datasets[0].data = period2Data.data;
      setAnalysisContent(
        <>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-bold text-red-600">High Risk Variance Detected!</p>
            <p className="text-slate-700 text-lg font-semibold">
              Marketing Dept: +$5,200
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-800">Root Cause:</p>
            <p className="text-slate-600">
              Unplanned bonus payout to employee J. Doe ($5,000) + increased overtime ($200).
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-800">Recommendation:</p>
            <p className="text-slate-600">
              Verify bonus approval with department head. Review overtime policy for marketing team.
            </p>
          </div>
        </>
      );
    }

    chartInstance.current.update();
  };

  // Handle button clicks
  const handlePeriodClick = (period: string) => {
    setSelectedPeriod(period);
    updateChart(period);
  };

  return (
    <section id="demo" className="py-5 md:py-10 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            See the &quot;<span className="text-purple-600">Why</span>&quot; in Action
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-600">
            This is not just another report. It&apos;s an answer engine. Use the buttons below to
            compare pay periods and see how our tool instantly finds the root cause of a variance.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800">Departmental Payroll Costs</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => handlePeriodClick("period1")}
                  className={`px-4 py-1 text-sm font-medium rounded-md ${
                    selectedPeriod === "period1"
                      ? "bg-sky-600 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  Pay Period 1
                </button>
                <button
                  onClick={() => handlePeriodClick("period2")}
                  className={`px-4 py-1 text-sm font-medium rounded-md ${
                    selectedPeriod === "period2"
                      ? "bg-sky-600 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  Pay Period 2
                </button>
              </div>
            </div>
            <div className="chart-container h-[350px]">
              <canvas id="demoChart" ref={demoChartRef} />
            </div>
          </div>
          <div
            id="analysis-box"
            className={`lg:col-span-2 bg-amber-50 border-2 border-dashed border-amber-300 p-6 rounded-lg min-h-[300px] transition-all duration-500 ${
              selectedPeriod === "period2" ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="font-bold text-lg text-amber-800 flex items-center">
              <span className="text-2xl mr-2">💡</span>Automated Analysis
            </h3>
            <div id="analysis-content" className="mt-4 space-y-4">
              {analysisContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
