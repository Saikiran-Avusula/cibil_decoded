import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-gray-300 py-16 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* Column 1: Brand blurb */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-lg px-5 py-2.5 inline-flex items-center justify-center self-start w-fit shadow-sm">
              <Image
                src="/logo-footer.png"
                alt="CIBIL Decoded"
                width={339}
                height={160}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              <strong className="text-white">Know your credit. Own your story.</strong> 
              <br />Credit-report guidance and curated loan-assistance service helping consumers navigate their financial journey.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#00C4B4]"></span>
              <span>Telangana &amp; Andhra Pradesh</span>
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-heading font-semibold text-base mb-1">
              Contact Us
            </h3>
            <p className="text-sm text-gray-300">
              Email:{" "}
              <a
                href="mailto:cibildecoded@gmail.com"
                className="text-white hover:text-[#00C4B4] transition-colors font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE] rounded-sm"
              >
                cibildecoded@gmail.com
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Have questions regarding your report? Write to us and a credit analyst will review your inquiry within 24 hours.
            </p>
          </div>

          {/* Column 3: Legal Links */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-white font-heading font-semibold text-base mb-1">
              Legal &amp; Policy
            </h3>
            <Link
              href="/privacy"
              className="text-sm text-gray-300 hover:text-[#00C4B4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE] rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-300 hover:text-[#00C4B4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE] rounded-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/grievance"
              className="text-sm text-gray-300 hover:text-[#00C4B4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE] rounded-sm"
            >
              Grievance Redressal
            </Link>
            <p className="text-xs text-gray-400 mt-2 italic leading-relaxed">
              If you ever have a concern about our service, talk to us directly first. We respond honestly and work to resolve it properly.
            </p>
          </div>

          {/* Column 4: Business Details */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-heading font-semibold text-base mb-1">
              Business Office
            </h3>
            <p className="text-sm font-semibold text-white">CIBIL Decoded Services</p>
            <p className="text-sm leading-relaxed text-gray-300">
              Kukatpally, Hyderabad, Telangana<br />
              India &ndash; 500072
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Serving consumers nationwide across India.
            </p>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="border-t border-slate-700/60 pt-8 flex flex-col items-center gap-4">
          <p className="text-xs text-center max-w-4xl leading-relaxed text-gray-400">
            <strong className="text-gray-300">Non-Affiliation Disclaimer:</strong> CIBIL Decoded is an independent credit-report guidance and loan-assistance consultancy.
            We are <strong>not</strong> affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with TransUnion CIBIL Limited, Experian, Equifax, or CRIF High Mark.
            We are not a credit bureau and are not RBI-regulated. We do not provide loans directly, nor do we guarantee any specific outcomes regarding your credit score or third-party loan sanctions.
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} CIBIL Decoded. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

