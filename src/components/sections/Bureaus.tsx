import { Building2, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export function Bureaus() {
  const bureaus = [
    {
      name: "TransUnion CIBIL",
      badge: "Primary CIC",
      scoreRange: "300 - 900",
      description: "India's pioneer credit information company, referenced by over 90% of prime retail and home loan lenders.",
      features: ["Home & Auto Loans priority", "Detailed CIR reports", "Historic DPD tracking"],
      accentColor: "#0072CE",
    },
    {
      name: "Experian",
      badge: "Global Bureau",
      scoreRange: "300 - 900",
      description: "A prominent international credit bureau widely used by fintech lenders, private banks, and credit card issuers.",
      features: ["Fintech & digital loan adoption", "Comprehensive payment records", "Real-time updates"],
      accentColor: "#00C4B4",
    },
    {
      name: "Equifax",
      badge: "Global CIC",
      scoreRange: "300 - 900",
      description: "Monitors historical credit performance, inquiries, and commercial and retail debt across Indian financial institutions.",
      features: ["Microfinance & personal loans", "Risk analysis indexes", "Fast dispute response"],
      accentColor: "#FF6B00",
    },
    {
      name: "CRIF High Mark",
      badge: "MSME & Retail",
      scoreRange: "300 - 900",
      description: "Known for extensive micro-lending, rural, retail, and commercial credit database coverage throughout India.",
      features: ["MSME & rural data dominance", "Cross-sector debt analysis", "Dual bureau checks"],
      accentColor: "#4CD964",
    },
  ];

  return (
    <section id="bureaus" className="bg-[#F8FAFC] py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0072CE] shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>Authorized Credit Information Companies (CICs)</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            The Four Credit Bureaus
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            Every bank checks one or more of these four RBI-licensed bureaus before sanctioning your loan. We analyze records across all of them.
          </p>
        </div>

        {/* 4 Bureau Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bureaus.map((bureau, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E2E8F0] p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{
                      backgroundColor: `${bureau.accentColor}15`,
                      color: bureau.accentColor,
                    }}
                  >
                    {bureau.badge}
                  </span>
                  <span className="text-xs font-semibold text-[#718096] whitespace-nowrap">
                    {bureau.scoreRange}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0A2540] mb-2 whitespace-nowrap tracking-tight">
                  {bureau.name}
                </h3>
                <p className="text-[#4A5568] text-xs leading-relaxed mb-4">
                  {bureau.description}
                </p>

                <ul className="space-y-2 border-t border-[#E2E8F0] pt-3">
                  {bureau.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-1.5 text-xs text-[#0A2540]">
                      <CheckCircle2
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: bureau.accentColor }}
                      />
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                <span className="text-[#718096]">Status in India:</span>
                <span className="font-semibold text-[#0A2540] flex items-center gap-1 whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4CD964]" />
                  RBI Licensed
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Independence & Non-Affiliation Disclaimer */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EBF8FF] border border-[#0072CE]/15 text-[#0072CE] flex items-center justify-center flex-shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-[#0072CE]" />
          </div>
          <div className="space-y-1 flex-1">
            <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
              Disclaimer
            </h4>
            <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed">
              CIBIL Decoded is an independent credit consultancy service. We are not affiliated with, endorsed by, or representing TransUnion CIBIL, Experian, Equifax, or CRIF High Mark. All trademarks and bureau logos belong to their respective registered entities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

