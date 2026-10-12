"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const NAV_LINKS = [
  { label: "What we do", href: "/#what-we-solve" },
  { label: "Credit bureaus", href: "/#bureaus" },
  { label: "Process", href: "/#process" },
  { label: "Your rights", href: "/#your-rights" },
  { label: "Loans", href: "/#loans" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-line"
      animate={{
        paddingTop: scrolled ? "8px" : "12px",
        paddingBottom: scrolled ? "8px" : "12px",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          aria-label="CIBIL Decoded — home"
          className="flex-shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/logo_header_updated.png"
            alt="CIBIL Decoded"
            width={339}
            height={160}
            style={{ height: "50px", width: "auto", maxWidth: "220px" }}
            priority
          />
        </Link>

        {/* Nav links — hidden below 820px */}
        <nav
          aria-label="Main navigation"
          className="[@media(min-width:820px)]:flex hidden items-center gap-7 flex-1 justify-center"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold text-[#4A5568] hover:text-[#0072CE] transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Primary CTA */}
          <Link
            href="/#contact"
            id="header-cta"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex-shrink-0 bg-[#FF6B00] hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hidden sm:inline-flex items-center justify-center transform hover:-translate-y-0.5"
          >
            Get help now
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            className="[@media(min-width:820px)]:hidden p-2 -mr-2 text-[#0A2540] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {isMobileMenuOpen && (
        <div className="[@media(min-width:820px)]:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-xl py-5 px-4 sm:px-6 flex flex-col gap-4 max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-base font-medium text-[#0A2540] bg-gray-50/80 rounded-lg hover:bg-[#EBF8FF] hover:text-[#0072CE] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-[#FF6B00] hover:bg-orange-600 text-white font-semibold py-3.5 px-4 rounded-lg shadow-md text-base sm:hidden mt-2 transition-colors block"
          >
            Get help now
          </Link>
        </div>
      )}
    </motion.header>
  );
}


