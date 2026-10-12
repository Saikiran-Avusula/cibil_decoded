import { Check, X, ShieldCheck, Sparkles } from "lucide-react";

export function FeatureComparison() {
  const features = [
    {
      title: "Multi-Bureau Analysis",
      description: "Comprehensive review across all 4 Indian credit bureaus",
      bureau: "Single Bureau Only",
      bureauStatus: "partial",
      scoreApps: "1 Bureau Estimate",
      scoreAppsStatus: "partial",
      cibilDecoded: "All 4 Bureaus (CIBIL, Experian, Equifax, CRIF)",
      cibilDecodedStatus: "full",
      orangeHighlight: false,
    },
    {
      title: "Line-by-Line Error Detection",
      description: "Identifies incorrect settlements, fake active loans & bad balances",
      bureau: "None (Self Audit)",
      bureauStatus: "none",
      scoreApps: "Basic Overview",
      scoreAppsStatus: "partial",
      cibilDecoded: "Complete Line-by-Line Forensics",
      cibilDecodedStatus: "full",
      orangeHighlight: false,
    },
    {
      title: "Dispute Preparation & Resolution",
      description: "Assistance with drafting dispute letters & escalation to banks",
      bureau: "Generic portal only",
      bureauStatus: "none",
      scoreApps: "Not Available",
      scoreAppsStatus: "none",
      cibilDecoded: "End-to-End Resolution Guidance",
      cibilDecodedStatus: "full",
      orangeHighlight: true,
    },
    {
      title: "Unexplained Score Drop Diagnosis",
      description: "Unravels algorithmic penalties and utilization snags",
      bureau: "No",
      bureauStatus: "none",
      scoreApps: "Generic tips",
      scoreAppsStatus: "partial",
      cibilDecoded: "Specific root-cause breakdown",
      cibilDecodedStatus: "full",
      orangeHighlight: false,
    },
    {
      title: "Dedicated Human Specialist",
      description: "Personal consultation instead of automated bot replies",
      bureau: "No Support",
      bureauStatus: "none",
      scoreApps: "Automated Chatbot",
      scoreAppsStatus: "none",
      cibilDecoded: "1-on-1 Assigned Specialist",
      cibilDecodedStatus: "full",
      orangeHighlight: true,
    },
    {
      title: "Lender Matchmaking (Zero Spam)",
      description: "Curated lender matching without triggering hard inquiry traps",
      bureau: "None",
      bureauStatus: "none",
      scoreApps: "Aggressive Loan Ads",
      scoreAppsStatus: "none",
      cibilDecoded: "Curated Lender Matching",
      cibilDecodedStatus: "full",
      orangeHighlight: false,
    },
    {
      title: "Data Privacy & Protection",
      description: "Your data stays confidential, never sold to external telemarketers",
      bureau: "Bureau Standard",
      bureauStatus: "partial",
      scoreApps: "Monetizes Data",
      scoreAppsStatus: "none",
      cibilDecoded: "100% Private, Never Sold",
      cibilDecodedStatus: "full",
      orangeHighlight: false,
    },
  ];

  return (
    <section id="comparison" className="bg-white py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#0072CE]/20 text-xs font-semibold text-[#0072CE]">
            <Sparkles className="w-3.5 h-3.5 text-[#00C4B4]" />
            <span>Why Choose CIBIL Decoded</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            Feature Comparison
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            See how our dedicated personalized guidance compares to standard credit bureaus and automated score tracker apps.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-1.5 text-xs text-[#718096] -mb-6">
          <span>Swipe horizontally to compare &rarr;</span>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-xl bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px] sm:min-w-[700px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th className="py-5 px-6 font-bold text-sm text-[#0A2540] w-[34%]">
                    Key Features
                  </th>
                  <th className="py-5 px-5 font-semibold text-sm text-[#4A5568] text-center w-[20%]">
                    Credit Bureaus
                  </th>
                  <th className="py-5 px-5 font-semibold text-sm text-[#4A5568] text-center w-[20%]">
                    Score Apps
                  </th>
                  <th className="py-5 px-6 font-bold text-sm text-[#0A2540] text-center w-[26%] bg-[#EBF8FF]/70 relative border-l border-r border-[#00C4B4]/20">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072CE] via-[#00C4B4] to-[#FF6B00]"></div>
                    <div className="inline-flex items-center gap-1 text-[#0072CE]">
                      <span>CIBIL Decoded</span>
                      <ShieldCheck className="w-4 h-4 text-[#00C4B4]" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-sm">
                {features.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    {/* Feature name & description */}
                    <td className="py-4.5 px-6">
                      <p className="font-semibold text-[#0A2540] text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#718096] mt-0.5">
                        {item.description}
                      </p>
                    </td>

                    {/* Credit Bureaus */}
                    <td className="py-4.5 px-5 text-center text-xs text-[#4A5568]">
                      {item.bureauStatus === "none" ? (
                        <div className="inline-flex items-center gap-1 text-[#A0AEC0]">
                          <X className="w-4 h-4 text-gray-400" />
                          <span>{item.bureau}</span>
                        </div>
                      ) : (
                        <span className="text-[#4A5568] font-medium">{item.bureau}</span>
                      )}
                    </td>

                    {/* Score Apps */}
                    <td className="py-4.5 px-5 text-center text-xs text-[#4A5568]">
                      {item.scoreAppsStatus === "none" ? (
                        <div className="inline-flex items-center gap-1 text-[#A0AEC0]">
                          <X className="w-4 h-4 text-gray-400" />
                          <span>{item.scoreApps}</span>
                        </div>
                      ) : (
                        <span className="text-[#4A5568] font-medium">{item.scoreApps}</span>
                      )}
                    </td>

                    {/* CIBIL Decoded (Highlighted) */}
                    <td className="py-4.5 px-6 text-center text-xs font-semibold bg-[#EBF8FF]/40 border-l border-r border-[#00C4B4]/20">
                      <div className="inline-flex items-center justify-center gap-2">
                        {item.orangeHighlight ? (
                          <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-[#FF6B00] stroke-[2.5]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-[#00C4B4]/15 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-[#00C4B4] stroke-[2.5]" />
                          </div>
                        )}
                        <span className="text-[#0A2540] font-bold">
                          {item.cibilDecoded}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Action Callout */}
          <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-[#0A2540]">
                Don&apos;t let algorithmic errors block your loan approval.
              </p>
              <p className="text-xs text-[#4A5568] mt-0.5">
                Our specialists review your file directly with no automated guesswork.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-[#FF6B00] hover:bg-orange-600 text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
            >
              Get Your Report Reviewed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
