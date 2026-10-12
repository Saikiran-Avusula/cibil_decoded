import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, ShieldAlert, Lock, ArrowRight, Headphones, CheckCircle2 } from "lucide-react";

const FAQS = [
  {
    question: "Can you directly change my CIBIL score or remove accurate defaults?",
    answer: "No legitimate company can directly alter a bureau database. What CIBIL Decoded does is identify erroneous entries, outdated loan statuses (like closed loans still marked active), reporting discrepancies, and identity theft, and guide you through the official bureau dispute mechanism to have those errors removed or corrected.",
  },
  {
    question: "Is my personal data safe with CIBIL Decoded?",
    answer: "Yes, 100%. We never ask for sensitive credentials like passwords, OTPs, net-banking PINs, or raw biometric Aadhaar details on our site. Your reports and documents are treated with enterprise confidentiality and are never sold or shared with third-party telemarketing call centers.",
  },
  {
    question: "How long does it typically take to see corrections on my credit report?",
    answer: "Under RBI guidelines, credit institutions and credit bureaus are required to investigate and resolve disputes within 30 days. If an inaccurate reporting dispute remains unresolved beyond 30 days, RBI regulations provide compensation of ₹100 for each day of delay.",
  },
  {
    question: "Why does my score differ between CIBIL, Experian, and Equifax?",
    answer: "Each bureau uses slightly different proprietary scoring models and algorithms. Moreover, some banks update their customer data with CIBIL at the start of the month, and with Experian at mid-month. That's why cross-checking all four bureaus is crucial before applying for large loans.",
  },
  {
    question: "Are you affiliated with TransUnion CIBIL or other credit bureaus?",
    answer: "No. CIBIL Decoded is an independent credit consultancy and loan guidance advisory. We are not owned by, partnered with, or an agent of TransUnion CIBIL, Experian, Equifax, or CRIF High Mark. We advocate solely on behalf of consumers.",
  },
  {
    question: "Do you guarantee loan approvals after dispute resolution?",
    answer: "We do not guarantee loan approvals, as final credit decisions rest solely with the underwriting policies of banks. However, by removing negative inaccuracies, closing phantom accounts, and optimizing your credit mix, your approval probability increases substantially.",
  },
  {
    question: "What if I have an unresolved dispute or concern?",
    answer: "We stand by transparent, honest communication. You can contact our dedicated grievance and advisory team directly at cibildecoded@gmail.com, and we will review your case with full priority.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#0072CE]/20 text-xs font-semibold text-[#0072CE]">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            Transparent answers regarding credit bureaus, dispute timelines, and consumer privacy protections.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-lg p-2 sm:p-4">
          <Accordion className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#E2E8F0] last:border-b-0 px-3 sm:px-4 py-1"
              >
                <AccordionTrigger className="text-left font-heading text-[#0A2540] hover:text-[#0072CE] text-base md:text-lg font-bold py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A5568] text-sm md:text-base leading-relaxed pb-5 pr-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions Box - Rebuilt & Elevated */}
        <div className="rounded-2xl bg-gradient-to-b from-white via-white to-[#F8FAFC] border border-[#E2E8F0] p-8 sm:p-10 text-center space-y-5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#0072CE] to-[#00C4B4]"></div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#0072CE]/20 text-xs font-bold text-[#0072CE]">
            <Headphones className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>Dedicated Consultation</span>
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0A2540] tracking-tight">
              Still have questions about your specific credit report?
            </h3>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Our specialists provide 1-on-1 reviews for complex inaccuracies and loan rejections.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-orange-glow transition-all"
            >
              <span>Speak with a specialist</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#718096]">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4CD964]" />
              Free 1-on-1 Session
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4CD964]" />
              Zero Hard Inquiries
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4CD964]" />
              Strict Confidentiality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

