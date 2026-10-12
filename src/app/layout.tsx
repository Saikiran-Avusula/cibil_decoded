import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: replace with the production domain once known
  metadataBase: new URL("https://cibildecoded.in"),
  title: "CIBIL Decoded - Know your credit, own your story",
  description:
    "Credit-report guidance and loan-assistance service in Hyderabad. We help you understand your credit report, identify discrepancies, and navigate disputes.",
  icons: {
    // favicon.ico is auto-served from src/app/favicon.ico by Next.js App Router
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/icon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", url: "/icon-512.png" },
    ],
  },
  openGraph: {
    title: "CIBIL Decoded",
    description:
      "Know your credit. Own your story. Credit-report guidance and loan assistance — Hyderabad.",
    images: [{ url: "/logo.png", width: 1080, height: 1080, alt: "CIBIL Decoded — glossy logo" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "CIBIL Decoded Services",
              "description": "Independent credit-report guidance and loan-assistance consultancy in Hyderabad.",
              "url": "https://cibildecoded.in",
              "logo": "https://cibildecoded.in/logo.png",
              "image": "https://cibildecoded.in/logo.png",
              "email": "cibildecoded@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kukatpally",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500072",
                "addressCountry": "IN"
              },
              "areaServed": ["Telangana", "Andhra Pradesh"]
            })
          }}
        />
      </body>
    </html>
  );
}
