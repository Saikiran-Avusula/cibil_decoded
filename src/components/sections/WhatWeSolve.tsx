import { Search, ShieldAlert, IndianRupee, ArrowRight, CheckCircle2, Layers } from "lucide-react";

export function WhatWeSolve() {
  const cards = [
    {
      title: "Understand",
      subtitle: "Diagnostic Credit Review",
      description: "We decode your full credit report line-by-line so you understand exactly what is affecting your score and why.",
      topBorder: "border-t-4 border-t-[#00C4B4]",
      accentColor: "#00C4B4",
      bgLight: "bg-[#00C4B4]/10",
      icon: Search,
      points: [
        "Audit across CIBIL, Experian, Equifax & CRIF",
        "Detect wrong payment dates & overdue flags",
        "Spot closed loans falsely shown active",
      ],
    },
    {
      title: "Resolve",
      subtitle: "Actionable Dispute Guidance",
      description: "We guide you through the official bureau dispute process to fix data errors, identity mismatches, and inaccuracies.",
      topBorder: "border-t-4 border-t-[#FF6B00]",
      accentColor: "#FF6B00",
      bgLight: "bg-[#FF6B00]/10",
      icon: ShieldAlert,
      points: [
        "Draft tailored dispute requests to bureaus",
        "Resolution tracking with partner banks",
        "Rectify fraudulent accounts & wrong defaults",
      ],
    },
    {
      title: "Finance",
      subtitle: "Lender Matchmaking",
      description: "Once your credit profile is cleaned up and verified healthy, we connect you with the right lenders suited to your score.",
      topBorder: "border-t-4 border-t-[#0072CE]",
      accentColor: "#0072CE",
      bgLight: "bg-[#0072CE]/10",
      icon: IndianRupee,
      points: [
        "Pre-assess eligibility before hard inquiries",
        "Direct connection to top private & public banks",
        "Home, personal, business & card solutions",
      ],
    },
  ];

  return (
    <section id="what-we-solve" className="bg-[#F8FAFC] py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0072CE] shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#00C4B4]" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            What We Solve
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            From uncovering reporting mistakes to securing approved loans, we guide every stage of your credit journey.
          </p>
        </div>

        {/* 3-Card Grid with alternating top border accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border border-[#E2E8F0] ${card.topBorder} p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl ${card.bgLight} flex items-center justify-center`}
                      style={{ color: card.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${card.accentColor}15`,
                        color: card.accentColor,
                      }}
                    >
                      Stage 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0072CE] uppercase tracking-wide mb-3">
                    {card.subtitle}
                  </p>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 border-t border-[#E2E8F0] pt-4 mb-6">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-[#0A2540] font-medium">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: card.accentColor }}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline group"
                  style={{ color: card.accentColor }}
                >
                  <span>Learn how we handle this</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

