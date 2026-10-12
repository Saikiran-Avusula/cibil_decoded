export interface Fact {
  id: string;
  text: string;
  shortLabel?: string;
  sourceLabel: string;
  sourceUrl: string;
  rule: string;
  verifiedOn: string; // e.g., "12 Oct 2026"
  reviewEveryDays: number;
  confidence: "high" | "medium";
  publish: boolean;
}

export const FACTS_REGISTER: Fact[] = [
  {
    id: "F-01",
    text: "Since 1 July 2026, lenders send your credit data to the bureaus as on the 9th, 16th, 23rd and last day of each month.",
    shortLabel: "Fortnightly+ Reporting (4x Monthly)",
    sourceLabel: "RBI Amendment Directions (4 Dec 2025)",
    sourceUrl: "https://www.rbi.org.in",
    rule: "RBI/DOR/2025-26/117 in force 1 Jul 2026",
    verifiedOn: "12 Oct 2026",
    reviewEveryDays: 30,
    confidence: "medium",
    publish: true,
  },
  {
    id: "F-02",
    text: "You can get one free full credit report, with your score, every calendar year from each credit bureau.",
    shortLabel: "Free Annual Credit Report",
    sourceLabel: "RBI Master Direction (Credit Information Reporting) 2025",
    sourceUrl: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12764",
    rule: "RBI/DoR/2024-25/125, para 9(1)(i) & CIC Directions para 21(7)",
    verifiedOn: "12 Oct 2026",
    reviewEveryDays: 30,
    confidence: "high",
    publish: true,
  },
  {
    id: "F-03",
    text: "Bureaus must send you an SMS or email when a lender or other specified user accesses your credit report, where they hold your number or email.",
    shortLabel: "Mandatory Credit Access Alert",
    sourceLabel: "RBI Reporting Directions 2025",
    sourceUrl: "https://www.rbi.org.in",
    rule: "Reporting Directions 2025, para 16(1)(a) & CIC Directions para 37(i)",
    verifiedOn: "12 Oct 2026",
    reviewEveryDays: 30,
    confidence: "high",
    publish: true,
  },
  {
    id: "F-04",
    text: "If your complaint about wrong credit information is not resolved within 30 days, you can claim ₹100 for each day of delay.",
    shortLabel: "₹100/Day Delay Compensation",
    sourceLabel: "RBI CIC Directions 2025",
    sourceUrl: "https://www.rbi.org.in",
    rule: "Reporting Directions 2025, para 17(1) & CIC Directions para 41(1)",
    verifiedOn: "12 Oct 2026",
    reviewEveryDays: 30,
    confidence: "high",
    publish: true,
  },
  {
    id: "F-05",
    text: "A lender must send corrected data to the bureaus within 21 days of being told about the error.",
    shortLabel: "21-Day Lender Correction Window",
    sourceLabel: "RBI Compensation Framework",
    sourceUrl: "https://www.rbi.org.in",
    rule: "Framework for Compensation in Credit Reporting",
    verifiedOn: "12 Oct 2026",
    reviewEveryDays: 30,
    confidence: "medium",
    publish: true,
  },
  {
    id: "F-06",
    text: "RBI's Ombudsman schemes received about 13.3 lakh complaints in FY2024-25. Loans and advances were the largest category (29.25%).",
    shortLabel: "Ombudsman Grievance Data",
    sourceLabel: "RBI Annual Report of the Ombudsman Scheme 2024-25",
    sourceUrl: "https://cms.rbi.org.in",
    rule: "RBI Annual Report 2024-25",
    verifiedOn: "12 Oct 2026",
    reviewEveryDays: 30,
    confidence: "medium",
    publish: true,
  },
  {
    id: "F-07",
    text: "Lenders reported every two weeks from 1 January 2025. From 1 July 2026 they report as on four dates a month.",
    shortLabel: "Reporting Cadence Evolution",
    sourceLabel: "RBI Circular Id 12718",
    sourceUrl: "https://www.rbi.org.in",
    rule: "Reporting Frequency Circular",
    verifiedOn: "12 Oct 2026",
    reviewEveryDays: 30,
    confidence: "medium",
    publish: true,
  },
];

/** Check if any fact has exceeded 45 days past its verification date */
export function isFactStale(fact: Fact): boolean {
  // Parsed check - verified on 12 Oct 2026
  const verifiedDate = new Date(fact.verifiedOn);
  if (isNaN(verifiedDate.getTime())) return false;
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - verifiedDate.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays > 45;
}

/** Returns the 3 hero facts (F-01, F-04, F-02) if none are stale */
export function getHeroFacts(): Fact[] | null {
  const heroFactIds = ["F-01", "F-04", "F-02"];
  const facts = FACTS_REGISTER.filter((f) => heroFactIds.includes(f.id) && f.publish);
  const hasStale = facts.some(isFactStale);
  if (hasStale || facts.length < 3) return null;
  return facts;
}

/** Returns the 4 core rights facts (F-02, F-03, F-04, F-05) */
export function getYourRightsFacts(): Fact[] {
  const rightsIds = ["F-02", "F-03", "F-04", "F-05"];
  return FACTS_REGISTER.filter((f) => rightsIds.includes(f.id) && f.publish);
}
