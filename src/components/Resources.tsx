"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Resource = {
  id: string;
  title: string;
  kind: "Blog" | "Article" | "Video" | "Case Study";
  href: string;
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const resources: Resource[] = [
  { id: "1", title: "Are Payroll Discrepancies Your Weakness?", href: "https://www.linkedin.com/posts/pclnxai_weeklynewsletter-payroll-hrtech-activity-7268248039046168576-aN53/", kind: "Blog" },
  { id: "2", title: "Bridging Payroll & Employee Expectations", href: "https://www.linkedin.com/posts/pclnxai_nxai-globalpayroll-hcm-activity-7296143652152586240-nezJ/", kind: "Article" },
  { id: "3", title: "DOGES for Payroll Variance", href: "https://www.linkedin.com/posts/pclnxai_doge-video-payrollvarianceanalysis-activity-7300492317495373825-4o9C/", kind: "Video" },
  { id: "4", title: "Payroll Excellence", href: "https://pclnxai.com/how-a-global-manufacturer-achieved-payroll-excellence-and-compliance/", kind: "Case Study" },
  { id: "5", title: "HOOPP $1M Discrepancy Fix", href: "https://pclnxai.com/wp-content/uploads/2025/07/Case-Study-Eliminating-dollar1M-HOOPP-Pension-Contribution-Discrepancies-with-PCLnXAI-Payroll-Varian.pdf", kind: "Case Study" },
  { id: "6", title: "Pension Automation at Scale", href: "https://pclnxai.com/wp-content/uploads/2025/07/Pension-Automation-Case-Study-Final-1.pdf", kind: "Case Study" },
  { id: "7", title: "Non-Cash Equity Automation", href: "https://pclnxai.com/non-cash-equity-payroll-automation/", kind: "Case Study" },
];

function getKindStyles(kind: Resource["kind"]) {
  switch (kind) {
    case "Blog":
      return { labelColor: "text-blue-700", pillBg: "bg-blue-100" };
    case "Article":
      return { labelColor: "text-amber-700", pillBg: "bg-amber-100" };
    case "Video":
      return { labelColor: "text-emerald-700", pillBg: "bg-emerald-100" };
    case "Case Study":
    default:
      return { labelColor: "text-yellow-800", pillBg: "bg-yellow-100" };
  }
}

function ArticleCard({ r }: { r: Resource }) {
  const { labelColor, pillBg } = getKindStyles(r.kind);
  return (
    <Link
      href={r.href}
      className="group relative block w-[86vw] max-w-[420px] min-w-[360px] h-[210px] rounded-2xl border border-gray-200 bg-white p-5 shadow transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      tabIndex={0}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${pillBg} ${labelColor}`}>
        {r.kind}
      </span>

      <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
        {r.title}
      </h3>

      <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition group-hover:bg-blue-50 group-hover:text-blue-700">
        Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-[2px]" />
      </span>
    </Link>
  );
}

export default function ResourcesAutoScroll() {
  const railRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px", once: false });
  const posRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const speed = 1; // pixels per frame (~60FPS)

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const contentWidth = el.scrollWidth / 2;

    // Start offset at 0 so cards are visible on the left immediately
    posRef.current = 0;
    el.style.transform = `translateX(0px)`;

    const step = () => {
      if (isInView) {
        posRef.current -= speed;
        if (posRef.current <= -contentWidth) {
          posRef.current = 0;
        }
        el.style.transform = `translateX(${posRef.current}px)`;
      }
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isInView]);

  return (
    <section ref={containerRef} id="resources" className="bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-800 mb-10 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Resources & <span className="text-purple-600">Insight</span>
        </motion.h2>

        <div
          ref={railRef}
          className="flex h-[230px] whitespace-nowrap gap-6"
          aria-label="Scrollable resources"
          style={{ willChange: "transform" }}
        >
          {[...resources, ...resources].map((r, i) => (
            <div key={`${r.id}-${i}`} className="inline-block" tabIndex={0}>
              <ArticleCard r={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
