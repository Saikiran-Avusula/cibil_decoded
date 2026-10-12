import Image from "next/image";
import { 
  Landmark, 
  Wallet, 
  Home, 
  Briefcase, 
  Building2, 
  Car, 
  GraduationCap, 
  CreditCard, 
  RefreshCcw,
  CheckCircle2,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export function Loans() {
  const loanCategories = [
    { title: "Personal Loans", desc: "Urgent liquidity & instant funds", icon: Wallet, color: "#0072CE" },
    { title: "Home Loans", desc: "Purchase, construction, renovation", icon: Home, color: "#00C4B4" },
    { title: "Business Loans", desc: "Working capital & MSME scaling", icon: Briefcase, color: "#FF6B00" },
    { title: "Loan Against Property", desc: "High-value collateral funding", icon: Building2, color: "#0072CE" },
    { title: "Car Loans", desc: "New & pre-owned vehicle loans", icon: Car, color: "#4CD964" },
    { title: "Education Loans", desc: "Domestic & foreign admissions", icon: GraduationCap, color: "#0072CE" },
    { title: "Credit Cards", desc: "High-limit & lifestyle reward cards", icon: CreditCard, color: "#00C4B4" },
    { title: "Balance Transfers", desc: "Refinance at lower interest rates", icon: RefreshCcw, color: "#FF6B00" },
  ];

  const primaryPartners = [
    { name: "HDFC Bank", file: "hdfc.png", type: "Private Bank" },
    { name: "State Bank of India", file: "sbi.png", type: "Public Sector Bank" },
    { name: "Bajaj Finserv", file: "bajaj.png", type: "Leading NBFC" },
    { name: "ICICI Bank", file: "icici.png", type: "Private Bank" },
    { name: "Canara Bank", file: "canara.png", type: "Public Sector Bank" },
    { name: "Piramal Capital", file: "piramal.png", type: "Housing & Retail NBFC" },
    { name: "Aadhar Housing", file: "aadhar.png", type: "Affordable Housing" },
    { name: "Muthoot Finance", file: "muthoot.png", type: "Gold & Retail Finance" },
  ];

  return (
    <section id="loans" className="bg-[#F8FAFC] py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto space-y-12 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0072CE] shadow-sm">
            <Landmark className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>Curated Financial Network</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            Loan Assistance &amp; Lending Partners
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            Once your credit report is decoded and verified healthy, we bridge you directly to the right institutions without harming your score with blind applications.
          </p>
        </div>

        {/* Loan Categories with Dedicated Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {loanCategories.map((loan, idx) => {
            const Icon = loan.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E2E8F0] p-4.5 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-3.5 group hover:border-[#0072CE]/40"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `${loan.color}15`, color: loan.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#0A2540] leading-tight group-hover:text-[#0072CE] transition-colors">
                    {loan.title}
                  </h3>
                  <p className="text-xs text-[#718096] mt-1 leading-snug">
                    {loan.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Structured Partner Logo Grid */}
        <div>
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#718096]">
              Our Lending Partners Network
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {primaryPartners.map((partner, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#E2E8F0] p-5 flex flex-col items-center justify-between shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-36"
              >
                <div className="h-16 w-full flex items-center justify-center">
                  <Image
                    src={`/lenders/${partner.file}`}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="max-h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                  />
                </div>
                <div className="text-center w-full pt-2 border-t border-slate-100">
                  <p className="text-xs font-bold text-[#0A2540] truncate">
                    {partner.name}
                  </p>
                  <p className="text-[10px] text-[#718096]">
                    {partner.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Step Safe Lending Flow */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 sm:p-8 md:p-10 text-center space-y-3 relative bg-gradient-to-b from-[#F8FAFC] to-white border-b border-[#E2E8F0]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#0072CE] to-[#00C4B4]"></div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#00C4B4] shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#00C4B4]" />
              <span>Zero Score Impact Guaranteed</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A2540] tracking-tight">
              How We Protect Your Approval
            </h3>
            <p className="text-sm sm:text-base text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
              We always perform a Soft Credit Health Check first to identify flags without triggering negative inquiries. Once your profile is ready, we match you with eligible partner lenders.
            </p>
          </div>

          {/* 2 Clear Action Steps Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAFCFF]">
            {/* Step 1 Card */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow space-y-5">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00] bg-[#FF6B00]/10 px-3 py-1 rounded-full">
                    Step 1 • Initial Diagnosis
                  </span>
                  <span className="text-xs font-semibold text-[#4CD964] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Zero Score Hit
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#0A2540]">
                  Check Credit Health (Soft Enquiry)
                </h4>
                <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                  We audit your 4 bureau records to detect phantom balances, DPD delays, and disputes before banks run formal hard checks.
                </p>
              </div>
              <a
                href="#contact"
                className="w-full bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-lg shadow-md hover:shadow-orange-glow transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>1. Check Credit Health (Soft Enquiry)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Step 2 Card */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow space-y-5">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0072CE] bg-[#0072CE]/10 px-3 py-1 rounded-full">
                    Step 2 • Lender Matching
                  </span>
                  <span className="text-xs font-semibold text-[#0072CE] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    High Approval Probability
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#0A2540]">
                  Explore Loan Eligibility
                </h4>
                <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                  Once your report is confirmed dispute-free, we introduce your profile to lenders whose underwriting benchmarks you fulfill.
                </p>
              </div>
              <a
                href="#contact"
                className="w-full bg-[#0072CE] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-lg shadow-md hover:shadow-blue-glow transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>2. Explore Loan Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

