"use client";

import React from "react";
import {
  Linkedin,
  Youtube,
  Mail,
  ShieldCheck,
  BadgeCheck,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

const palette = {
  primary: "#253959", // deep royal blue (footer bg)
  accent: "#1CA8E3", // aqua
  highlight: "#D12CA2", // magenta
  secondary: "#A838A8", // soft purple
  background: "#F9FAFB", // light background
};

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{ background: palette.primary }}
    >
      {/* soft gradient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(1000px 200px at 50% -40px, ${palette.accent}55, transparent)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 md:pt-16 pb-8">
        {/* Top badges + social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/15">
          <div className="grid grid-cols-2 gap-10 md:gap-16 place-items-center">
            <ComplianceBadge src="/gdpr_act.png" label="GDPR" />
            <ComplianceBadge src="/SOC-blue.png" label="SOC" />
          </div>

          {/* social */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/pclnxai/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="group grid place-items-center w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
              aria-label="LinkedIn"
            >
              <Linkedin
                className="text-white/90 group-hover:text-white"
                size={18}
              />
            </a>
            <a
              href="https://www.youtube.com/@pclnXAI"
              target="_blank"
              rel="noreferrer"
              className="group grid place-items-center w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
              aria-label="YouTube"
            >
              <Youtube
                className="text-white/90 group-hover:text-white"
                size={18}
              />
            </a>
            <a
              href="mailto:info@pclnxai.com"
              className="group grid place-items-center w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
              aria-label="Email"
            >
              <Mail
                className="text-white/90 group-hover:text-white"
                size={18}
              />
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 py-10">
          {/* UK entity */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Payroll Cloud
              <br />
              Limited (UK)
            </h3>
            <ul className="space-y-1.5 text-white/80 text-sm leading-relaxed">
              <li>Registered in England and Wales</li>
              <li>Address:</li>
              <li>International House,</li>
              <li>12 Constance Street,</li>
              <li>London, E16 2DQ, UK</li>
            </ul>
          </div>

          {/* USA entity */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Payroll Cloud Corp
              <br />
              (USA)
            </h3>
            <ul className="space-y-1.5 text-white/80 text-sm leading-relaxed">
              <li>Registered in Texas</li>
              <li>Address:</li>
              <li>1314 W McDermott Dr, Ste 106 #910,</li>
              <li>Allen, TX 75013, US</li>
            </ul>
          </div>

          {/* Contact / links */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:info@pclnxai.com"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold border border-white/20 bg-white/10 hover:bg-white/20 transition w-fit"
            >
              Email us at{" "}
              <span className="ml-2 underline">info@pclnxai.com</span>
            </a>

            <a
              href="https://pclnxai.com/wp-content/uploads/2025/03/Privacy-Policy-for-PCLnXAI.pdf"
              className="inline-flex items-center gap-2 w-fit text-sm text-white/90 hover:text-white transition"
            >
              Click here to see our Privacy Policy
              <ExternalLink size={16} className="opacity-80" />
            </a>

            <div className="mt-2 text-xs text-white/70 leading-relaxed">
              <strong>PCLnXAI</strong> is operated globally by{" "}
              <strong>
                Payroll Cloud Corp (US) and Payroll Cloud Limited (UK)
              </strong>
              . All product offerings, support, and contracts will clearly
              indicate the responsible legal entity based on your region.
              © {new Date().getFullYear()} PCLnXAI. All rights reserved.
              All trademarks and registered trademarks are the property of
              their respective owners.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mt-2 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} Payroll Cloud Corp (US) & Payroll Cloud
            Limited (UK). All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
            <span className="opacity-50">•</span>
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy
            </a>
            <span className="opacity-50">•</span>
            <a href="/security" className="hover:text-white transition">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ComplianceBadge({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Equal-sized circular container */}
      <div className="aspect-square w-28 md:w-36 rounded-full ring-1 ring-white/20 bg-white/5 p-2">
        <img
          src={src}
          alt={`${label} badge`}
          className="w-full h-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Label + tick icon */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-white font-semibold text-base md:text-lg tracking-wide">
          {label}
        </span>
        <CheckCircle className="w-5 h-5 text-green-500" />
      </div>
    </div>
  );
}
