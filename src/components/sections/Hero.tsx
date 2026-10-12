"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { getHeroFacts } from "@/lib/facts";

// ─── Sample report data ───────────────────────────────────────────────────────
interface ReportRow {
  account: string;
  lender: string;
  status: string;
  balance: string;
  flagged?: boolean;
  flagLabel?: string;
}

const SAMPLE_ROWS: ReportRow[] = [
  { account: "Home Loan",     lender: "National Housing Finance", status: "Closed", balance: "₹0"      },
  { account: "Credit Card",   lender: "Premier Card Services",    status: "Active", balance: "₹12,400" },
  {
    account: "Personal Loan", lender: "Consumer Finance Ltd",     status: "Active", balance: "₹0",
    flagged: true,
    flagLabel: "Loan closed, balance zero, still marked active",
  },
];

// ─── Sample Report Card ───────────────────────────────────────────────────────

function SampleReportCard({ rows }: { rows: ReportRow[] }) {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xl overflow-hidden w-full max-w-lg mx-auto">
      {/* Card Header with Score Status & Brand Arc Accent */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF3B30]"></span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
            Credit Discrepancy Detected
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-full text-xs font-semibold text-[#0A2540] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#FF3B30]"></span>
          <span>Score Impact: -28 pts</span>
        </div>
      </div>

      <p className="text-[11px] text-[#4A5568] text-center px-4 pt-3 pb-1 italic">
        Sample illustration of actual bureau discrepancy review (neutral mock data)
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-[#4A5568] whitespace-nowrap">Account</th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-[#4A5568] whitespace-nowrap">Lender</th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-[#4A5568] whitespace-nowrap">Status</th>
              <th className="text-right px-4 py-2.5 text-xs font-semibold text-[#4A5568] whitespace-nowrap">Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <Fragment key={i}>
                <tr
                  className={`border-b border-[#E2E8F0] transition-colors ${
                    row.flagged ? "border-l-4 border-l-[#FF3B30] bg-[#FFF5F5]" : "hover:bg-slate-50/50"
                  }`}
                >
                  <td className="px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">{row.account}</td>
                  <td className="px-4 py-3 text-[#4A5568] whitespace-nowrap">{row.lender}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {row.flagged ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-[#FF3B30]/15 text-[#FF3B30]">
                        {row.status}
                      </span>
                    ) : (
                      <span className="text-[#4A5568]">{row.status}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-[#0A2540] whitespace-nowrap font-medium">{row.balance}</td>
                </tr>
                {row.flagged && row.flagLabel && (
                  <tr className="bg-[#FFF5F5]">
                    <td colSpan={4} className="px-4 pb-3 pt-0">
                      <div className="flex items-start gap-2 bg-[#FFECEC] text-[#C53030] p-2.5 rounded-lg border border-[#FEB2B2] text-xs font-medium leading-relaxed">
                        <span className="font-bold text-[#FF3B30]">⚠ Discrepancy:</span>
                        <span>{row.flagLabel}</span>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Footer with resolution pill & regulatory tie-in link */}
      <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-4 py-3 flex items-center justify-between text-xs">
        <span className="text-[#4A5568] font-medium">Bureaus reviewed: CIBIL, Experian</span>
        <span className="text-[#0072CE] font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C4B4]"></span>
          Ready for Dispute
        </span>
      </div>
      <div className="bg-[#F1F5F9] border-t border-[#E2E8F0] px-4 py-2 text-[11px] text-[#4A5568] text-center">
        If a complaint about an entry like this is not resolved within 30 days, RBI rules provide ₹100 for each day of delay.{" "}
        <a href="#your-rights" className="text-[#0072CE] font-bold hover:underline inline-flex items-center gap-0.5">
          See your rights &rarr;
        </a>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroFacts = getHeroFacts();

  return (
    <section className="bg-white pt-10 pb-12 md:pt-14 md:pb-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C4B4]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#0072CE]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 [@media(min-width:820px)]:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* ── Left column ── */}
          <div className="space-y-6 max-w-xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF8FF] border border-[#0072CE]/20 text-xs font-semibold text-[#0072CE]">
              <span className="w-2 h-2 rounded-full bg-[#00C4B4]"></span>
              <span>Credit Clarity &amp; Loan Enablement &bull; Own your story.</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#0A2540] leading-tight font-extrabold tracking-tight">
              Your credit report,{" "}
              <span className="bg-gradient-to-r from-[#0072CE] to-[#00C4B4] bg-clip-text text-transparent">
                finally decoded.
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">
              We help you decode your credit report, spot errors, and resolve disputes with bureaus, then connect you with the right lenders when you&apos;re ready.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-1">
              {/* Primary CTA: Solid Warm Orange */}
              <a
                href="#contact"
                id="hero-cta-primary"
                className="bg-[#FF6B00] hover:bg-orange-600 text-white font-semibold text-base px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center transform hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
              >
                Get your credit issue reviewed
              </a>

              {/* Secondary CTA: Outline Cyan/Blue */}
              <a
                href="#loans"
                id="hero-cta-secondary"
                className="border-2 border-[#0072CE] text-[#0072CE] hover:bg-[#0072CE]/10 font-semibold text-base px-6 py-3.5 rounded-lg transition-all duration-200 text-center inline-flex items-center justify-center cursor-pointer"
              >
                Explore loan options
              </a>
            </div>

            {/* Hero Fact Strip (Section 5.1 & F-01, F-04, F-02) */}
            {heroFacts && (
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#718096]">
                  <span className="font-semibold text-[#0A2540]">RBI Statutory Directives</span>
                  <span>Checked 12 Oct 2026</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs text-[#4A5568] pt-1">
                  <div className="sm:border-r sm:border-[#E2E8F0] sm:pr-2 leading-snug">
                    <strong className="text-[#0A2540] block text-[11px]">4x Monthly Reporting</strong>
                    Lenders report data as on 9th, 16th, 23rd &amp; month-end.
                  </div>
                  <div className="sm:border-r sm:border-[#E2E8F0] sm:pr-2 leading-snug">
                    <strong className="text-[#0A2540] block text-[11px]">₹100/Day Delay Rule</strong>
                    Complaints unresolved after 30 days earn compensation.
                  </div>
                  <div className="leading-snug">
                    <strong className="text-[#0A2540] block text-[11px]">Free Annual Report</strong>
                    1 full report with score per year from each of 4 bureaus.
                  </div>
                </div>
              </div>
            )}

            <div className="pt-1 flex items-center gap-2 text-xs text-[#4A5568]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4CD964]"></span>
              <span>Serving Telangana &amp; Andhra Pradesh &nbsp;&bull;&nbsp; Not affiliated with any credit bureau &nbsp;&bull;&nbsp; 100% Private</span>
            </div>
          </div>

          {/* ── Right column — sample report card ── */}
          <div className="w-full">
            <SampleReportCard rows={SAMPLE_ROWS} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


