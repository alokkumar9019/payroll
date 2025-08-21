"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/lotties/SaaS Meeting.json"; // put your animation JSON file here


const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: any = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const rise: any = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.67, ease } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative inset-0 bg-black z-0"
      aria-label="Hero"
    >
      <div className="relative container mx-auto px-4 py-10 min-h-[calc(100vh-64px)] grid items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* LEFT: Content */}
          <div className="pl-8 md:pl-16">
            <motion.div
              variants={rise}
              className="inline-flex items-center rounded-full border border-blue-300 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm"
            >
              Enterprise Payroll Risk Management
            </motion.div>
            <motion.h1
              variants={rise}
              className="mt-5 text-4xl md:text-6xl leading-[1.1] font-bold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-[gradientMove_8s_ease-in-out_infinite] bg-[length:300%_300%]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#3b82f6,#6366f1,#a21caf,#3b82f6)",
              }}
            >
              Payroll Variance &<br className="hidden md:block" /> Risk Analysis Suite
            </motion.h1>
            <motion.p
              variants={rise}
              className="mt-4 text-lg font-semibold text-amber-500"
            >
              See the Risk | Stop the Loss | Own the Outcome.
            </motion.p>
            <motion.p
              variants={rise}
              className="mt-4 max-w-2xl text-base font-bold text-white"
            >
              Payroll risk is costly, complex, and often hidden. The PCLnXAI Payroll Variance & Risk Analysis Suite is the world’s first Payroll Control Tower that detects payroll variances, pinpoints root causes, and flags compliance risks—all in real-time.
            </motion.p>
            <motion.div variants={rise} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-3 text-white shadow-md transition hover:brightness-105 active:translate-y-[1px]"
                whileHover={{
                  scale: 1.045,
                  boxShadow: "0px 8px 24px rgba(59,130,246,0.15)",
                }}
              >
                Schedule a Demo
                <svg
                  className="ml-2 transition group-hover:translate-x-[2px]"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: Image */}
          <motion.div
            variants={rise}
            className="flex items-center justify-center w-full h-full"
          >
            <Lottie
        animationData={animationData}
        loop={true}
        className="w-full max-w-xl rounded-lg shadow-lg"
      />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
