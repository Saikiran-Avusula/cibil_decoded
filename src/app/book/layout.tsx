import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | CIBIL Decoded",
  description: "Schedule a 1-on-1 confidential credit consultation or video meeting with CIBIL Decoded specialists.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
