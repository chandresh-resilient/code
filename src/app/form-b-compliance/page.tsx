import React from "react";
import Link from "next/link";
import {
  FileCheck,
  ShieldCheck,
  AlertTriangle,
  Calendar,
  Building2,
  CheckCircle2,
  Download,
  Flame,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import FormBChecker from "@/components/FormBChecker";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata = {
  title: "Form B Fire Safety Certification Maharashtra | G-Next Fire Safety",
  description:
    "Official Form B Certificate issuance in Pune & Mumbai through our Joint Venture with Vijay Laxmi Fire Services (Maharashtra Fire Services Licensed Agency). Mandatory bi-annual compliance.",
};

export default function FormBCompliancePage() {
  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Maharashtra Fire Act 2006 Mandatory Requirement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Form B Fire Safety Certification
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Authorized bi-annual certification through our formal Joint Venture with <strong className="text-white">Vijay Laxmi Fire Services</strong> — Registered Licensed Agency under Maharashtra Fire Services.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/918779513748?text=${encodeURIComponent(
                  "Hello G-Next, we need Form B audit and certification for our housing society / commercial building."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors shadow-md shadow-orange-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Form B Inspection</span>
              </a>
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
              >
                <span>Calculate Society Form B Fee</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS FORM B & TIMELINE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Statutory Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                What is Form B & Why Is It Legally Mandatory?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under <strong>Section 3(1) of The Maharashtra Fire Prevention and Life Safety Measures Act 2006</strong>, every owner or occupier of a building is required to maintain the fire prevention and life safety installations in good repair and efficient condition at all times.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                To prove compliance, the building management must submit a certificate issued by a <strong>Licensed Agency</strong> in <strong>Form &ldquo;B&rdquo;</strong> to the local Chief Fire Officer twice a year:
              </p>

              {/* Due Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                  <div className="flex items-center gap-2 text-orange-900 font-bold text-sm">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span>Cycle 1: January</span>
                  </div>
                  <p className="text-xs text-orange-800 mt-1">
                    First half submission covering January to June compliance.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                  <div className="flex items-center gap-2 text-orange-900 font-bold text-sm">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span>Cycle 2: July</span>
                  </div>
                  <p className="text-xs text-orange-800 mt-1">
                    Second half submission covering July to December compliance.
                  </p>
                </div>
              </div>

              {/* Warning Alert */}
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-xs text-rose-900 space-y-1">
                  <p className="font-bold">Severe Consequences of Failure to Submit Form B:</p>
                  <p>
                    Non-submission invites notices under Section 6 & 8 of the Fire Act, potential disconnection of municipal water or electrical supply, criminal liability for society office-bearers, and immediate rejection of fire insurance claims by underwriters.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Joint Venture Partnership Badge */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 px-2 py-0.5 rounded bg-orange-500/20 border border-orange-500/30">
                Official Authorization
              </span>
              <h3 className="text-xl font-bold text-white">
                G-Next &amp; Vijay Laxmi Fire Services Joint Venture
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Form B can only be issued by an agency that holds an active license from the Directorate of Maharashtra Fire Services. Through our joint venture, G-Next performs comprehensive engineering audits and Vijay Laxmi Fire Services issues the official licensed Form B certificate.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Licensed Agency of Government of Maharashtra</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>PMC, PCMC, PMRDA, MIDC, MCGM recognized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Complete Fire Department Liaisoning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero-delay bi-annual renewal reminders</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-600/30 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now for Form B Quotation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE INSPECT DURING FORM B AUDIT */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-3">
              <FileCheck className="w-3.5 h-3.5 text-orange-600" />
              <span>Inspection Checklist</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Is Inspected During a Form B Audit?
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Our NFSC Nagpur alumnus and certified engineers systematically test every component before issuing the certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900">Fire Pump Room Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Testing Main Fire Pump, Standby Diesel Pump, and Jockey Pump for automatic cut-in and pressure sustenance (minimum 3.5 bar).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900">Wet Risers & Courtyard Hydrants</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hydrostatic checking of landing valves, canvas hose pipes, branch nozzles, and courtyard ring mains.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900">Sprinkler Network & Valves</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inspection of alarm check valves, water motor gong, quartzoid glass bulb integrity, and drainage lines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-sm font-bold text-slate-900">Fire Detection & Alarm Panels</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Testing smoke detectors, heat detectors, manual call points (MCP), sounder hooters, and central addressable panels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                5
              </div>
              <h3 className="text-sm font-bold text-slate-900">Fire Extinguisher Tagging</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verification of annual refilling date, pressure gauge indicators, safety pins, and placement as per IS 2190.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                6
              </div>
              <h3 className="text-sm font-bold text-slate-900">Escape Routes & Refuge Areas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Checking fire staircase pressurization, emergency exit signs, illuminated route signage, and unblocked refuge terraces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM B INTERACTIVE AUDIT TOOL */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FormBChecker />
        </div>
      </section>
    </div>
  );
}
