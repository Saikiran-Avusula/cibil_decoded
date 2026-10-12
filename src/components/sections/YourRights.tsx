"use client";

import React from "react";
import { 
  Scale, 
  FileCheck2, 
  BellRing, 
  ClockAlert, 
  CalendarCheck2, 
  ArrowRight, 
  ExternalLink,
  ShieldAlert,
  FileSearch
} from "lucide-react";

export function YourRights() {

  const scenarios = [
    {
      title: "You repaid a loan, but it still shows as active",
      ruleText: "A lender must send corrected data within 21 days of being told (F-05). A complaint open after 30 days can earn ₹100 a day in compensation (F-04). Lenders report on four dates a month (F-01), so corrections update rapidly across bureaus.",
      actionText: "We read your credit report, isolate the phantom balance entry, and guide you through the official grievance escalation to both the bank and the bureau.",
      factIds: ["F-01", "F-04", "F-05"],
      icon: ShieldAlert,
    },
    {
      title: "A lender checked your report and you never applied",
      ruleText: "Credit bureaus must notify you via SMS or email whenever a financial institution accesses your credit report (F-03). Unauthorized hard inquiries can depress your score.",
      actionText: "We identify which institution triggered the unauthorized inquiry, verify potential identity theft, and draft the formal removal dispute.",
      factIds: ["F-03"],
      icon: BellRing,
    },
    {
      title: "You have never checked your report, or only one bureau's",
      ruleText: "Every consumer in India is legally entitled to one free full credit report with score every calendar year from each of the four bureaus (F-02). Data can differ between bureaus.",
      actionText: "We help you pull and cross-audit all four credit bureaus (CIBIL, Experian, Equifax, CRIF) line by line to detect unaligned data or latent discrepancies.",
      factIds: ["F-02"],
      icon: FileSearch,
    },
    {
      title: "Your dispute has been open for more than 30 days",
      ruleText: "Under RBI directions, if a complaint regarding inaccurate credit data remains unresolved beyond 30 days, you can claim ₹100 for each day of delay (F-04). Unresolved cases can be escalated to the RBI Ombudsman.",
      actionText: "We compile your dispute timeline, verify date logs, and help you prepare a comprehensive grievance submission for regulatory redressal.",
      factIds: ["F-04"],
      icon: Scale,
    },
  ];

  return (
    <section id="your-rights" className="bg-white py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#0072CE]/20 text-xs font-semibold text-[#0072CE]">
            <Scale className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>Consumer Protections &bull; Checked 12 Oct 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            What the rules say today
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            General information on RBI directions for credit reporting in India. Rules change, so we document the exact source and verification date.
          </p>
        </div>

        {/* Block 1: 4 Core Rights Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-[#0A2540]">
              Your Four Statutory Credit Rights
            </h3>
            <span className="text-xs text-[#718096]">
              Verified against RBI directions &bull; Oct 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Right 1: Free Report */}
            <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider block mb-1">
                    Rule F-02
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[#0A2540] leading-snug">
                    One Free Full Report Annually
                  </h4>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  You can get one free full credit report, with your score, every calendar year from each of the 4 credit bureaus.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E2E8F0] text-[11px] flex items-center justify-between text-[#718096]">
                <a
                  href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0072CE] hover:underline flex items-center gap-1 font-semibold"
                >
                  Source Rule <ExternalLink className="w-3 h-3" />
                </a>
                <span>Checked 12 Oct 2026</span>
              </div>
            </div>

            {/* Right 2: Mandatory Access Alert */}
            <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#00C4B4]/15 text-[#00897B] flex items-center justify-center">
                  <BellRing className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider block mb-1">
                    Rule F-03
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[#0A2540] leading-snug">
                    Credit Access Alert
                  </h4>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Bureaus must send an SMS or email when a lender accesses your credit report, provided they hold your contact details.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E2E8F0] text-[11px] flex items-center justify-between text-[#718096]">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0072CE] hover:underline flex items-center gap-1 font-semibold"
                >
                  Source Rule <ExternalLink className="w-3 h-3" />
                </a>
                <span>Checked 12 Oct 2026</span>
              </div>
            </div>

            {/* Right 3: ₹100/Day Delay */}
            <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center">
                  <ClockAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider block mb-1">
                    Rule F-04
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[#0A2540] leading-snug">
                    ₹100/Day Delay Compensation
                  </h4>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  If your complaint about inaccurate credit data is not resolved within 30 days, you can claim ₹100 for each day of delay.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E2E8F0] text-[11px] flex items-center justify-between text-[#718096]">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0072CE] hover:underline flex items-center gap-1 font-semibold"
                >
                  Source Rule <ExternalLink className="w-3 h-3" />
                </a>
                <span>Checked 12 Oct 2026</span>
              </div>
            </div>

            {/* Right 4: 21-Day Correction */}
            <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#4CD964]/20 text-[#208a34] flex items-center justify-center">
                  <CalendarCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider block mb-1">
                    Rule F-05
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[#0A2540] leading-snug">
                    21-Day Lender Window
                  </h4>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  A credit institution must send corrected data to the credit bureaus within 21 days of being notified about the error.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E2E8F0] text-[11px] flex items-center justify-between text-[#718096]">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0072CE] hover:underline flex items-center gap-1 font-semibold"
                >
                  Source Rule <ExternalLink className="w-3 h-3" />
                </a>
                <span>Checked 12 Oct 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Timeline of Regulatory Changes */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider">
              Recent Evolution
            </span>
            <h3 className="text-xl font-heading font-bold text-[#0A2540]">
              How Credit Reporting Frequency Changed in 2025 &ndash; 2026
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568]">
              Credit reports update much faster today due to staggered monthly data delivery directives:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0A2540] inline-block">
                1 Jan 2025
              </span>
              <h4 className="text-sm font-bold text-[#0A2540]">Fortnightly Data Reporting</h4>
              <p className="text-xs text-[#718096] leading-relaxed">
                Lenders transitioned from monthly submissions to reporting customer credit data twice a month (as on the 15th and month-end).
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] inline-block">
                4 Dec 2025
              </span>
              <h4 className="text-sm font-bold text-[#0A2540]">Framework Finalization</h4>
              <p className="text-xs text-[#718096] leading-relaxed">
                RBI issued circular RBI/DOR/2025-26/117, setting 1 July 2026 as the formal launch for staggered four-times-a-month reporting.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#00C4B4]/15 text-[#00897B] inline-block">
                1 Jul 2026
              </span>
              <h4 className="text-sm font-bold text-[#0A2540]">4x Monthly Reporting Active</h4>
              <p className="text-xs text-[#718096] leading-relaxed">
                Lenders transmit records as on the 9th, 16th, 23rd, and last day of each month, allowing dispute corrections to appear far quicker.
              </p>
            </div>
          </div>
        </div>

        {/* Block 3: Scenario Cards ("If this is happening to you") */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
              Real-World Application
            </span>
            <h3 className="text-2xl font-heading font-bold text-[#0A2540]">
              If this is happening to your credit report
            </h3>
            <p className="text-sm text-[#4A5568]">
              How statutory rules apply to common borrower scenarios, and how CIBIL Decoded assists you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#EBF8FF] text-[#0072CE] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0072CE]" />
                      </div>
                      <h4 className="font-heading text-base font-bold text-[#0A2540] leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 text-xs text-[#4A5568] leading-relaxed">
                      <strong className="text-[#0A2540] block">What the rule says:</strong>
                      <span>{item.ruleText}</span>
                    </div>

                    <div className="space-y-1 text-xs text-[#4A5568] leading-relaxed pl-1">
                      <strong className="text-[#0072CE] block font-semibold">How CIBIL Decoded assists:</strong>
                      <span>{item.actionText}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#718096]">
                      Rules applied: {item.factIds.join(", ")}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-orange-600 transition-colors"
                    >
                      <span>Review your case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Block 4: Bottom Disclaimer & Source */}
        <div className="rounded-xl border border-[#E2E8F0] bg-slate-50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718096]">
          <p className="leading-relaxed text-center sm:text-left">
            <strong className="text-[#0A2540]">Statutory Notice:</strong> General information, not legal advice. Regulatory rules evolve over time. For official circulars and full directions, visit{" "}
            <a
              href="https://www.rbi.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0072CE] font-semibold hover:underline"
            >
              rbi.org.in
            </a>
            .
          </p>
          <div className="flex items-center gap-2 flex-shrink-0 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#4CD964]"></span>
            <span>Fact Register verified on 12 Oct 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
}
