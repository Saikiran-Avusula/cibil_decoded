"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  PhoneCall, 
  SearchCode, 
  FileCheck2, 
  Clock4, 
  BadgePercent,
  ArrowRight,
  Workflow
} from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    tag: "Submission",
    title: "Tell Us What Happened",
    description: "Submit a short intake form explaining your credit drop, rejected application, or loan goal.",
    icon: FileText,
    accent: "#0072CE",
  },
  {
    step: "02",
    tag: "Intake Call",
    title: "Specialist Consultation",
    description: "We reach out directly to understand your financial history, timeline, and gather needed report copies.",
    icon: PhoneCall,
    accent: "#00C4B4",
  },
  {
    step: "03",
    tag: "Analysis",
    title: "Deep Report Decoding",
    description: "Our experts audit all accounts across CIBIL, Experian, Equifax, and CRIF to pinpoint inaccuracies.",
    icon: SearchCode,
    accent: "#FF6B00",
  },
  {
    step: "04",
    tag: "Action",
    title: "Resolution & Dispute Filing",
    description: "We provide step-by-step guidance on raising formal disputes, escalation paths, and correction notices.",
    icon: FileCheck2,
    accent: "#0072CE",
  },
  {
    step: "05",
    tag: "Monitoring",
    title: "Bureau Tracking & Follow-Up",
    description: "We actively monitor progress during the bureau's 30-45 day review window until records are updated.",
    icon: Clock4,
    accent: "#00C4B4",
  },
  {
    step: "06",
    tag: "Approval",
    title: "Loan Assessment & Match",
    description: "Once your credit profile is verified clean and healthy, we match you directly with favorable lenders.",
    icon: BadgePercent,
    accent: "#4CD964",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-white py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#0072CE]/20 text-xs font-semibold text-[#0072CE]">
            <Workflow className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>End-to-End Methodology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            Step-by-Step Process
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            Our structured 6-stage journey from first inquiry to verified dispute resolution and loan assessment.
          </p>
        </div>

        {/* 6 Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {/* Background Number Watermark */}
                <span className="absolute -top-3 -right-2 text-7xl font-extrabold text-slate-100 select-none pointer-events-none group-hover:text-blue-50/60 transition-colors">
                  {step.step}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                    >
                      Step {step.step} &bull; {step.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-2 relative z-10 group-hover:text-[#0072CE] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[#4A5568] text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#0A2540]">Stage {index + 1}</span>
                  <span
                    className="font-semibold px-2 py-0.5 rounded text-[11px]"
                    style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                  >
                    Phase {step.step} of 06
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="text-center pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-semibold text-sm px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Start Step 1: Submit your issue now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

