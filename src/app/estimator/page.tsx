import React from "react";
import Link from "next/link";
import {
  Calculator,
  ShieldCheck,
  Calendar,
  FileCheck,
  Phone,
  Flame,
  ArrowRight,
} from "lucide-react";
import EstimatorCalculator from "@/components/EstimatorCalculator";
import ExtinguisherGuide from "@/components/ExtinguisherGuide";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata = {
  title: "Interactive Fire Safety & AMC Cost Estimator | G-Next Fire Safety",
  description:
    "Calculate your building fire safety scope, AMC periodic maintenance needs, and Form B statutory compliance requirements instantly.",
};

export default function EstimatorPage() {
  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Transparent & Instant Planning</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Fire Safety &amp; AMC Scope Estimator
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tailored for housing society committees, plant heads, and commercial facility managers. Select your property profile to generate an instant scope blueprint and WhatsApp proposal.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR TOOL */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EstimatorCalculator />
        </div>
      </section>

      {/* EXTINGUISHER REFERENCE GUIDE */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExtinguisherGuide />
        </div>
      </section>
    </div>
  );
}
