import { PhoneCall, MessageCircle, Video, ArrowRight, Headphones, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Consultation() {
  const channels = [
    {
      title: "Phone Consultation",
      subtitle: "Direct 15-minute voice discussion with a dedicated credit specialist.",
      icon: PhoneCall,
      accentColor: "#FF6B00",
      topBorder: "border-t-4 border-t-[#FF6B00]",
      badge: "Quickest Response",
      badgeClass: "text-[#FF6B00] bg-[#FF6B00]/10",
      iconBg: "bg-[#FFF5EB] border-[#FF6B00]/20 text-[#FF6B00]",
      buttonText: "Request Phone Callback",
      buttonClass: "bg-[#FF6B00] hover:bg-orange-600 text-white hover:shadow-orange-glow",
      href: "#contact",
      features: [
        "Immediate callback scheduling",
        "Clear explanation of report flags",
        "No automated bots or telemarketers",
      ],
    },
    {
      title: "WhatsApp Advisory",
      subtitle: "Message our advisory desk for rapid answers and secure document sharing.",
      icon: MessageCircle,
      accentColor: "#00C4B4",
      topBorder: "border-t-4 border-t-[#00C4B4]",
      badge: "Encrypted & Instant",
      badgeClass: "text-[#00C4B4] bg-[#00C4B4]/10",
      iconBg: "bg-[#E6FAF8] border-[#00C4B4]/20 text-[#00C4B4]",
      buttonText: "Message Advisory Desk",
      buttonClass: "bg-[#00C4B4] hover:bg-[#00a89a] text-white hover:shadow-cyan-glow",
      href: "#contact",
      features: [
        "End-to-end encrypted messaging",
        "Fast screenshot discrepancy check",
        "Regular dispute status updates",
      ],
    },
    {
      title: "Screen-Share Meeting",
      subtitle: "Comprehensive 30-minute video audit analyzing your 4 reports live on screen.",
      icon: Video,
      accentColor: "#0072CE",
      topBorder: "border-t-4 border-t-[#0072CE]",
      badge: "Deep Forensic Review",
      badgeClass: "text-[#0072CE] bg-[#0072CE]/10",
      iconBg: "bg-[#EBF8FF] border-[#0072CE]/20 text-[#0072CE]",
      buttonText: "Book Video Session",
      buttonClass: "bg-[#0072CE] hover:bg-[#005bb5] text-white hover:shadow-blue-glow",
      href: "/book",
      features: [
        "Line-by-line bureau breakdown",
        "Uncover hidden DPD & phantom debt",
        "Actionable dispute action plan",
      ],
    },
  ];

  return (
    <section id="consultation" className="bg-white py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#0072CE]/20 text-xs font-semibold text-[#0072CE] shadow-sm">
            <Headphones className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>1-on-1 Expert Advisory</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            Talk to a credit specialist
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            Get personalized advice and start resolving your credit issues today. Choose your preferred format to discuss bureau flags or loan rejections.
          </p>
        </div>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-[#E2E8F0] ${ch.topBorder} p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 space-y-6`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${ch.iconBg} shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${ch.badgeClass}`}>
                      {ch.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#0A2540] tracking-tight">
                      {ch.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#718096] mt-1.5 leading-relaxed">
                      {ch.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-[#E2E8F0]">
                    {ch.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#0A2540]">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#4CD964]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={ch.href}
                    className={`w-full font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-center ${ch.buttonClass}`}
                  >
                    <span>{ch.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Guarantee Micro-Bar */}
        <div className="max-w-4xl mx-auto rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-[#718096]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00C4B4]" />
            <strong className="text-[#0A2540]">Zero Hard Inquiries:</strong> Advisory calls never hit your credit report.
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#4CD964]" />
            <strong className="text-[#0A2540]">Confidential:</strong> Your documents are never shared with marketing telecallers.
          </span>
        </div>
      </div>
    </section>
  );
}
