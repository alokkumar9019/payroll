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
      className="group relative block w-[86vw] max-w-[420px] min-w-[360px] h-[210px] rounded-2xl border border-gray-200 bg-white p-5 shadow transition hover:shadow-lg dark:border-white/10 dark:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      tabIndex={0}
    >
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${pillBg} ${labelColor}`}>
        {r.kind}
      </span>

      <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
        {r.title}
      </h3>

      <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition group-hover:bg-blue-50 group-hover:text-blue-700 dark:bg-white/10 dark:text-gray-100">
        Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-[2px]" />
      </span>
    </Link>
  );
}

export default function Resources() {
  const railRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "-100px", once: false });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId = 0;
    let last = performance.now();

    const pxPerSec = 60; // scroll speed in pixels per second

    // Use let because halfWidth can change on resize
    let halfWidth = el.scrollWidth / 2;

    function updateHalfWidth() {
      if (!el) return;
      halfWidth = el.scrollWidth / 2;
    }

    function loop(now: number) {
      const dt = Math.max(0, now - last) / 1000; // elapsed time in seconds
      last = now;

      const shouldRun =
        inView &&
        !isPaused &&
        !prefersReduced &&
        document.visibilityState === "visible";


      rafId = requestAnimationFrame(loop);
    }

    rafId = requestAnimationFrame(loop);

    // Update halfWidth on resize
    const ro = new ResizeObserver(() => {
      updateHalfWidth();
    });
    ro.observe(el);

    // Update halfWidth after fonts and images settle
    const t = setTimeout(updateHalfWidth, 300);

    // Pause scrolling when user scrolls with wheel or touch
    let userScrollTimeout: number | null = null;
    const pauseForUser = () => {
      if (!isPaused) {
        setIsPaused(true);
        if (userScrollTimeout) window.clearTimeout(userScrollTimeout);
        userScrollTimeout = window.setTimeout(() => setIsPaused(false), 1200);
      }
    };
    el.addEventListener("wheel", pauseForUser, { passive: true });
    el.addEventListener("touchstart", pauseForUser, { passive: true });

    // Cleanup function
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      clearTimeout(t);
      el.removeEventListener("wheel", pauseForUser);
      el.removeEventListener("touchstart", pauseForUser);
    };
  }, [inView, isPaused]);

  // Pause when keyboard user focuses card, resume on blur
  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <section id="resources" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-10 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Resources & <span className="text-purple-600">Insight </span>
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 h-1 w-20 bg-purple-500 rounded-full"></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-center text-gray-600"
        >
          Learn from real-world implementations and industry best practices.
        </motion.p>

        <div
          ref={railRef}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          className="relative mt-8 flex gap-6 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
            scrollbarWidth: "none",
          }}
          aria-label="Scrollable resources"
        >
          {[...resources, ...resources].map((r, i) => (
            <motion.div
              key={`${r.id}-${i}`}
              data-card
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.05 * (i % resources.length), duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="snap-start"
            >
              <ArticleCard r={r} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
