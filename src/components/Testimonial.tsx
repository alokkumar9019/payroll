"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// Animation variants typed properly
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const hoverVariants: Variants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 15px 40px rgba(224, 122, 95, 0.3)", // Burnt Sienna glow
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const testimonials = [
  {
    quote:
      "We reduced payroll error reconciliation time by 52%. The variance drill‑down and real‑time payroll risk alerts saved over 40 hours per month.",
    author: "Payroll Lead, Global Retail Firm",
  },
  {
    quote:
      "Pre‑alerts for high‑risk variances helped us cut audit prep by 60%. The payroll error detection module ensures compliance across 9 countries.",
    author: "Finance Systems Manager, Leading Pharma Company",
  },
  {
    quote:
      "We went from 2 weeks to 2 days on resolving payroll variances. The automation eliminated 90% of manual RCA work.",
    author: "Payroll Head, Manufacturing Conglomerate",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-16 px-6 md:px-10 lg:px-16 relative bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-12 tracking-tight text-gray-800 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          What Payroll <span className="text-purple-600">Teams</span> Are Saying
        </motion.h2>

        {/* Testimonials list */}
        <motion.div
          className="lg:grid lg:grid-cols-3 gap-8 flex overflow-x-auto snap-x snap-mandatory pb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              className="group snap-start lg:snap-auto min-w-[290px] lg:min-w-0 rounded-2xl p-1"
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="relative flex h-full flex-col justify-between rounded-2xl bg-white bg-opacity-[0.95] p-8 shadow-md"
                variants={hoverVariants}
              >

                {/* Faint big quote */}
                <span className="absolute top-3 right-5 text-[56px] leading-none opacity-10 select-none text-[#333D4B]">
                  ”
                </span>

                {/* Quote text */}
                <blockquote className="pl-6 text-lg font-medium leading-relaxed text-[#333D4B]">
                  {t.quote}
                </blockquote>

                {/* Author */}
                <figcaption className="mt-8 pl-6 text-sm italic text-[#7E7F9A]">
                  — {t.author}
                </figcaption>
              </motion.div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
