import { 
  CalendarX2, 
  FileX2, 
  AlertOctagon, 
  Search, 
  UserX, 
  Scale, 
  ShieldAlert, 
  ClockAlert,
  ArrowRight,
  FileSearch
} from "lucide-react";

export function Problems() {
  const problemsList = [
    {
      title: "Closed Loans Marked Active",
      category: "Critical Error",
      impact: "High Impact",
      impactColor: "#FF3B30",
      description: "Loans you fully paid off years ago still showing an active status and phantom outstanding balance, inflating your debt burden.",
      icon: ShieldAlert,
    },
    {
      title: "Erroneous Late Payments",
      category: "Reporting Mistake",
      impact: "Score Dropper",
      impactColor: "#FF6B00",
      description: "EMIs paid on time but logged with 30+ or 60+ DPD (Days Past Due) tags due to bank server delays or holiday clearing lags.",
      icon: CalendarX2,
    },
    {
      title: "Settlement / Written-Off Flags",
      category: "Severe Penalty",
      impact: "High Impact",
      impactColor: "#FF3B30",
      description: "Accounts settled under one-time settlement (OTS) marked as 'Written Off' or 'Settled' instead of issuing a clean closure status.",
      icon: FileX2,
    },
    {
      title: "Identity Theft & Duplicate PAN",
      category: "Fraud & Security",
      impact: "Critical Dispute",
      impactColor: "#FF3B30",
      description: "Credit cards or personal loans taken by third parties using your credentials, or accounts commingled due to shared names.",
      icon: UserX,
    },
    {
      title: "Multiple Unauthorized Hard Inquiries",
      category: "Algorithmic Hit",
      impact: "Moderate Drop",
      impactColor: "#FFCC00",
      description: "Aggressive loan portals and agents pinging your bureau file 10+ times within days, penalizing your profile as 'credit hungry'.",
      icon: Search,
    },
    {
      title: "Incorrect Balances & Limits",
      category: "Data Discrepancy",
      impact: "Utilization Spike",
      impactColor: "#0072CE",
      description: "Credit card limits reported lower than actual or paid card balances failing to update, driving your credit utilization over 70%.",
      icon: Scale,
    },
    {
      title: "Ghost Overdue Amounts",
      category: "Accounting Glitch",
      impact: "Dispute Priority",
      impactColor: "#FF6B00",
      description: "Small residual fees, annual card charges, or disputed interest billed without notice that morph into long overdue negative tags.",
      icon: ClockAlert,
    },
    {
      title: "Guarantor / Co-Applicant Defaults",
      category: "Collateral Risk",
      impact: "Unseen Hazard",
      impactColor: "#00C4B4",
      description: "A business or family loan where you signed as guarantor running into arrears and secretly devastating your individual CIBIL score.",
      icon: AlertOctagon,
    },
  ];

  return (
    <section id="problems" className="bg-[#F8FAFC] py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0072CE] shadow-sm">
            <FileSearch className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>Forensic Credit Diagnosis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            Problems We Look At
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            Bureau records are prone to human and banking software mistakes. We audit and isolate the exact issues dragging your score down.
          </p>
        </div>

        {/* 8 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problemsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${item.impactColor}15`, color: item.impactColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${item.impactColor}15`, color: item.impactColor }}
                    >
                      {item.impact}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#0A2540] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#718096] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px]">
                  <span className="text-[#718096] font-medium">{item.category}</span>
                  <a
                    href="#contact"
                    className="text-[#0072CE] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Resolve</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rebuilt Clear Action & Ethical Notice Module */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden">
          {/* Action Row */}
          <div className="p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-white via-white to-[#F8FAFC]">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full inline-block">
                Actionable Dispute Review
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A2540] tracking-tight">
                Spot any of these in your report?
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] max-w-lg leading-relaxed">
                Don&apos;t let uncorrected bureau mistakes block your loan approvals. Get an expert audit to isolate and dispute factual errors.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-md hover:shadow-orange-glow transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Request a Free Dispute Review</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Ethical Notice Bar */}
          <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] p-5 sm:p-6 flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-[#EBF8FF] border border-[#0072CE]/15 text-[#0072CE] flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldAlert className="w-4 h-4 text-[#0072CE]" />
            </div>
            <div className="text-xs sm:text-[13px] leading-relaxed text-[#4A5568] flex-1">
              <strong className="text-[#0A2540] font-bold mr-1">Important Notice:</strong>
              We help dispute factual inaccuracies, duplicate accounts, banking data delays, and identity fraud. We do not promise the removal of accurate, legitimate defaults that you rightfully owe.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
