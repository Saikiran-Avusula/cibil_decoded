"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  CheckCircle, 
  TrendingUp,
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
import { Review } from "@/lib/reviews-data";

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

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > 140;
  const ProblemIcon = review.iconKey ? PROBLEM_ICON_MAP[review.iconKey] || ShieldAlert : ShieldAlert;

  return (
    <div className="w-80 sm:w-96 flex-shrink-0 bg-white rounded-2xl border border-[#E2E8F0] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group select-none">
      {/* Top Header with Stars, Score Bump & Themed Problem Intention Box */}
      <div className="p-5 sm:p-6 pb-3 flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          {/* 5-Star Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#FFCC00] text-[#FFCC00]"
              />
            ))}
          </div>

          {/* Score Bump Badge */}
          {review.scoreBump && (
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#4CD964]/15 border border-[#4CD964]/30 text-[11px] font-bold text-[#208a34]">
              <TrendingUp className="w-3 h-3 text-[#208a34]" />
              <span>{review.scoreBump}</span>
            </div>
          )}
        </div>

        {/* Themed Problem Intention Box matching Problems We Look At Section */}
        <div className="rounded-xl border border-[#E2E8F0] p-3.5 bg-[#F8FAFC] group-hover:bg-slate-50/80 transition-colors space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: `${review.impactColor || "#0072CE"}15`, 
                  color: review.impactColor || "#0072CE" 
                }}
              >
                <ProblemIcon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider truncate">
                {review.problemCategory || "Credit Discrepancy"}
              </span>
            </div>
            {review.impactTag && (
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                style={{ 
                  backgroundColor: `${review.impactColor || "#0072CE"}15`, 
                  color: review.impactColor || "#0072CE" 
                }}
              >
                {review.impactTag}
              </span>
            )}
          </div>
          <h4 className="font-heading text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-[#0072CE] transition-colors leading-snug">
            {review.problem}
          </h4>
          {review.problemDescription && (
            <p className="text-[11px] text-[#4A5568] leading-relaxed line-clamp-2">
              {review.problemDescription}
            </p>
          )}
        </div>

        {/* Authentic Quote */}
        <div className="pt-0.5">
          <blockquote className={`text-[#0A2540] text-xs sm:text-sm leading-relaxed ${!expanded ? "line-clamp-3" : ""}`}>
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          {isLong && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="mt-1 text-xs font-semibold text-[#0072CE] hover:underline focus-visible:outline-none cursor-pointer"
            >
              {expanded ? "Show less ↑" : "Read more ↓"}
            </button>
          )}
        </div>
      </div>

      {/* Author Footer */}
      <div className="px-5 sm:px-6 py-3.5 border-t border-[#E2E8F0] bg-[#F8FAFC]/80 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0072CE] to-[#00C4B4] text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
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

        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00C4B4] bg-[#00C4B4]/10 px-2.5 py-1 rounded-full flex-shrink-0">
          <CheckCircle className="w-3.5 h-3.5 text-[#00C4B4]" />
          <span>Resolved</span>
        </div>
      </div>
    </div>
  );
}

export function Reviews({ reviews }: { reviews: Review[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll loop: continuous smooth scrolling, pause on hover / touch
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // When nearing end, reset smoothly to beginning
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          scrollRef.current.scrollBy({ left: 1, behavior: "auto" });
        }
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!reviews || reviews.length === 0) {
    return null;
  }

  // Duplicate list to create a rich infinite carousel track
  const allStories = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-[#F8FAFC] py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0072CE] shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[#FFCC00] text-[#FFCC00]" />
              <span>Real Customer Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
              Social Proof &amp; Client Success
            </h2>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
              Real people across Hyderabad, Vijayawada, and Visakhapatnam who resolved damaging bureau errors and regained their credit scores.
            </p>
          </div>

          <div className="flex items-center">
            <Link
              href="/client-success-stories"
              className="text-xs font-bold uppercase tracking-wider text-[#0072CE] hover:underline px-3 py-2 whitespace-nowrap"
            >
              All Stories &rarr;
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Scroll Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allStories.map((review, idx) => (
              <ReviewCard key={`${review.id}-${idx}`} review={review} />
            ))}
          </div>

          {/* Left Arrow Controls for desktop */}
          <button
            onClick={() => handleManualScroll("left")}
            aria-label="Previous Stories"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 border border-[#E2E8F0] shadow-md items-center justify-center text-[#0A2540] hover:text-[#0072CE] hover:shadow-lg transition-all focus-visible:outline-none z-10 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Controls for desktop */}
          <button
            onClick={() => handleManualScroll("right")}
            aria-label="Next Stories"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 border border-[#E2E8F0] shadow-md items-center justify-center text-[#0A2540] hover:text-[#0072CE] hover:shadow-lg transition-all focus-visible:outline-none z-10 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
