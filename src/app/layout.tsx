import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "G-Next Fire Safety Solution Services | Form B Licensed Agency JV | Pune & Mumbai",
  description:
    "G-Next Fire Safety: A Complete Fire Safety Solution Services under one roof. Headed by National Fire Service College (NFSC) Nagpur alumni. Form B certification joint venture with Vijay Laxmi Fire Services, Fire AMC, Risk Audits, Extinguisher Refilling, and Trained Firemen Deployment.",
  keywords: [
    "Fire Safety Pune",
    "Form B Certificate Pune",
    "Fire Safety Solutions Maharashtra",
    "Fire AMC Balewadi",
    "G-Next Fire Safety",
    "Vijay Laxmi Fire Services Joint Venture",
    "Fire Extinguisher Refilling Pune",
    "Fire Safety Audit Maharashtra",
    "NFSC Nagpur Alumnus Fire Consultant",
    "Residential Fire Safety Lodha",
  ],
  authors: [{ name: "G-Next Fire Safety Solution Services" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-orange-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
