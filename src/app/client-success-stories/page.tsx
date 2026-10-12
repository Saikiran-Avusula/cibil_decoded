import React from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ALL_REVIEWS, Review } from "@/lib/reviews-data";
import { 
  Star, 
  TrendingUp, 
  CheckCircle, 
  ShieldCheck, 
  Lock, 
  Clock, 
  Landmark, 
  ArrowRight,
  ShieldAlert,
  CalendarX2,
  FileX2,
  UserX,
  Scale,
  Briefcase,
  Search,
  AlertOctagon,
  ClockAlert
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Client Success Stories | CIBIL Decoded",
  description: "Read authentic feedback from users who transformed their credit profiles with CIBIL Decoded in Telangana and Andhra Pradesh.",
};

const PROBLEM_ICON_MAP = {
  ShieldAlert,
  CalendarX2,
  FileX2,
  UserX,
  Scale,
  Briefcase,
  Search,
  AlertOctagon,
  ClockAlert,
};

export default async function AllReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const currentFilter = params.filter || "all";

  const filteredReviews =
    currentFilter === "all"
      ? ALL_REVIEWS
      : ALL_REVIEWS.filter((r) => r.category === currentFilter);

  const filterTabs = [
    { id: "all", label: "All Stories", count: ALL_REVIEWS.length },
    { id: "reports", label: "Report Discrepancies", count: ALL_REVIEWS.filter(r => r.category === "reports").length },
    { id: "score-repair", label: "Score Improvement", count: ALL_REVIEWS.filter(r => r.category === "score-repair").length },
    { id: "loans", label: "Loan Approvals", count: ALL_REVIEWS.filter(r => r.category === "loans").length },
  ];

  return (
    <>
      <Header />
      <main className="pt-[74px] min-h-screen bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6 space-y-10">
          {/* Header Section */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0072CE] shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[#FFCC00] text-[#FFCC00]" />
              <span>Verified Client Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#0A2540] font-bold tracking-tight">
              Client Success Stories
            </h1>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
              Read authentic experiences from professionals and business owners across Hyderabad, Vijayawada, Visakhapatnam, and regional districts who corrected damaging bureau inaccuracies.
            </p>
          </div>

          {/* Rebuilt Data Security Notice Component */}
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-md flex items-start gap-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00C4B4] to-[#0072CE]"></div>
            <div className="w-10 h-10 rounded-xl bg-[#EBF8FF] border border-[#0072CE]/15 text-[#0072CE] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Lock className="w-5 h-5 text-[#0072CE]" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#0A2540] text-sm uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#00C4B4]" />
                  Data Security &amp; Privacy Notice
                </span>
                <span className="text-[10px] font-bold text-[#208a34] bg-[#4CD964]/15 px-2 py-0.5 rounded-full">
                  100% Confidential
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                <strong className="text-[#0A2540]">Data Security Notice:</strong> We prioritize your absolute privacy. Sensitive government or financial identifiers (such as PAN cards, Aadhaar details, bank passwords, or OTPs) are never requested, stored, or scraped without your explicit approval and a verified use case.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] text-[#718096]">
                <span className="flex items-center gap-1">
                  <span className="text-[#4CD964] font-bold">✓</span> Zero Automated Storage
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-[#4CD964] font-bold">✓</span> End-to-End Client Privilege
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-[#4CD964] font-bold">✓</span> No Commercial Data Sharing
                </span>
              </div>
            </div>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="flex flex-wrap gap-2.5 border-b border-[#E2E8F0] pb-4">
            {filterTabs.map((tab) => {
              const isActive = currentFilter === tab.id;
              return (
                <Link
                  key={tab.id}
                  href={`/client-success-stories?filter=${tab.id}`}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#0072CE] text-white shadow-md shadow-[#0072CE]/20"
                      : "bg-white text-[#4A5568] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:text-[#0A2540]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-[#718096]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Rebuilt Reviews Grid matching Problems We Look At Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredReviews.map((review) => {
              const ProblemIcon = review.iconKey ? PROBLEM_ICON_MAP[review.iconKey] || ShieldAlert : ShieldAlert;

              return (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Top Section */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Rating & Score Bump */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#FFCC00] text-[#FFCC00]"
                          />
                        ))}
                      </div>

                      {review.scoreBump && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4CD964]/15 border border-[#4CD964]/30 text-xs font-bold text-[#208a34]">
                          <TrendingUp className="w-3.5 h-3.5 text-[#208a34]" />
                          <span>{review.scoreBump}</span>
                        </div>
                      )}
                    </div>

                    {/* Themed Problem Intention Box matching Problems We Look At Section */}
                    <div className="rounded-xl border border-[#E2E8F0] p-4 bg-[#F8FAFC] group-hover:bg-slate-50/80 transition-colors space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ 
                              backgroundColor: `${review.impactColor || "#0072CE"}15`, 
                              color: review.impactColor || "#0072CE" 
                            }}
                          >
                            <ProblemIcon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[11px] font-bold text-[#718096] uppercase tracking-wider block truncate">
                              {review.problemCategory || "Credit Discrepancy"}
                            </span>
                            <h3 className="font-heading text-sm sm:text-base font-bold text-[#0A2540] group-hover:text-[#0072CE] transition-colors leading-snug">
                              {review.problem}
                            </h3>
                          </div>
                        </div>
                        {review.impactTag && (
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 self-start"
                            style={{ 
                              backgroundColor: `${review.impactColor || "#0072CE"}15`, 
                              color: review.impactColor || "#0072CE" 
                            }}
                          >
                            {review.impactTag}
                          </span>
                        )}
                      </div>
                      {review.problemDescription && (
                        <p className="text-xs text-[#4A5568] leading-relaxed border-t border-[#E2E8F0]/80 pt-2.5">
                          <strong className="text-[#0A2540]">Problem Diagnosed: </strong>
                          {review.problemDescription}
                        </p>
                      )}
                    </div>

                    {/* Bureau & Timeline Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      {review.bureau && (
                        <span className="text-[11px] font-semibold text-[#4A5568] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-xs">
                          <Landmark className="w-3.5 h-3.5 text-[#0072CE]" />
                          <span>{review.bureau}</span>
                        </span>
                      )}
                      {review.timeline && (
                        <span className="text-[11px] font-semibold text-[#4A5568] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-xs">
                          <Clock className="w-3.5 h-3.5 text-[#00C4B4]" />
                          <span>{review.timeline} Resolution</span>
                        </span>
                      )}
                    </div>

                    {/* Authentic Quote */}
                    <div className="pt-1">
                      <blockquote className="text-[#0A2540] text-sm leading-relaxed">
                        &ldquo;{review.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Resolution Outcome Banner */}
                    {review.outcome && (
                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5 text-xs text-[#2D3748]">
                        <CheckCircle className="w-4 h-4 text-[#00C4B4] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#0A2540]">Resolution: </strong>
                          <span>{review.outcome}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer with User Details and Verified Badge */}
                  <div className="px-6 sm:px-7 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC]/80 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0072CE] to-[#00C4B4] text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading text-sm font-bold text-[#0A2540] leading-tight truncate">
                          {review.name}
                        </p>
                        <p className="text-xs text-[#718096] truncate">
                          {review.city}, India
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C4B4] bg-[#00C4B4]/10 px-3 py-1 rounded-full flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00C4B4]" />
                      <span>Resolved</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-[#E2E8F0] text-[#718096] space-y-3">
              <p className="text-base font-semibold text-[#0A2540]">No stories found in this category.</p>
              <Link
                href="/client-success-stories?filter=all"
                className="inline-block text-xs font-bold text-[#0072CE] uppercase tracking-wider hover:underline"
              >
                View all stories &rarr;
              </Link>
            </div>
          )}

          {/* Bottom CTA Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#0A2540] via-[#0d3154] to-[#0A2540] text-white p-8 sm:p-10 text-center space-y-4 shadow-xl">
            <h3 className="text-white text-2xl sm:text-3xl font-heading font-bold">
              Facing an unfair error on your CIBIL report?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Don&apos;t let banking clerical slips or unresolved disputes block your financial aspirations.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-orange-glow transition-all"
              >
                <span>Request a Free Dispute Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
