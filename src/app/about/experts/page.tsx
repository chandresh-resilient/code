import React from "react";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Building2,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Mail,
  Phone,
  Download,
  Flame,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Users,
  HardHat,
  BadgeCheck,
} from "lucide-react";
import { COMPANY_INFO, EXPERTS } from "@/data/companyData";

export const metadata = {
  title: "Our Technical Experts & Engineering Board | G-Next Fire Safety",
  description:
    "Meet the distinguished engineering board and fire consultants at G-Next Fire Safety, led by Sandeep Chaubey (NFSC Nagpur 16th Batch, Ex-Tata Motors, ITC & DLF Head).",
};

export default function ExpertsPage() {
  const sandeep = EXPERTS.find((e) => e.id === "sandeep-chaubey")!;
  const otherExperts = EXPERTS.filter((e) => e.id !== "sandeep-chaubey");

  return (
    <div className="flex flex-col gap-0 bg-white">
      {/* BREADCRUMB */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs sm:text-sm py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-orange-400 font-semibold">Our Technical Experts</span>
        </div>
      </div>

      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs sm:text-sm border border-orange-500/30">
              <Users className="w-4 h-4" />
              <span>Pool of Technical Experts &amp; Engineering Board</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Decades of Engineering Mastery
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              G-Next is anchored by senior leaders from premier government fire institutions, Fortune 500 manufacturing corporations, and state electricity boards, delivering unmatched statutory defensibility and practical life safety solutions.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about/experts/sandeep-chaubey"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-colors shadow-md shadow-orange-600/30"
              >
                <span>View Sandeep Chaubey&apos;s Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/gnext-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 transition-colors"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Firm Profile PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CHIEF CONSULTANT: SANDEEP CHAUBEY */}
      <section className="py-16 sm:py-24 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl sm:rounded-4xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-orange-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                    Lead Fire Safety Consultant
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                    NFSC Nagpur 16th Batch
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    ISO 45001 Lead Auditor
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-5xl font-black text-white">
                    Sandeep Chaubey
                  </h2>
                  <p className="text-base sm:text-xl font-bold text-orange-400 mt-2">
                    Chief Fire Safety Consultant &amp; Auditor
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Ex-Regional Head Tata Motors | Ex-Admin &amp; Security Head ITC | Ex-Fire Safety DLF
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {sandeep.summary}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <span className="text-xl font-black text-orange-400 block">20+</span>
                    <span className="text-xs text-slate-400">Years Exp</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <span className="text-xl font-black text-white block">NFSC</span>
                    <span className="text-xs text-slate-400">Nagpur Sub-Officer</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <span className="text-xl font-black text-emerald-400 block">ISO</span>
                    <span className="text-xs text-slate-400">45001 Lead Auditor</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <span className="text-xl font-black text-amber-400 block">₹16+ Cr</span>
                    <span className="text-xs text-slate-400">Budgets Governed</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/about/experts/sandeep-chaubey"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-600/30 hover:scale-[1.02]"
                  >
                    <span>Read Sandeep Chaubey&apos;s Full Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(
                      "Hello Sandeep Sir, I would like to consult with you regarding our fire safety audit."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 transition-colors"
                  >
                    <span>Direct WhatsApp Desk</span>
                  </a>
                </div>
              </div>

              {/* Right 4 Cols: Executive Portrait & More Details */}
              <div className="lg:col-span-4 bg-slate-900/90 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
                <div className="relative aspect-[4/5] w-full bg-slate-950 overflow-hidden">
                  <img
                    src="/sandeep-chaubey.jpeg"
                    alt="Sandeep Chaubey"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs uppercase tracking-wider font-bold text-orange-400 block">
                      NFSC Nagpur Alumnus
                    </span>
                    <h4 className="text-lg font-bold text-white">Sandeep Chaubey</h4>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Career track record across Tata Motors, ITC, DLF, NFSC Nagpur training, and ISO 45001 lead audits.
                  </p>
                  <Link
                    href="/about/experts/sandeep-chaubey"
                    className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>More Details &amp; Bio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER TECHNICAL BOARD MEMBERS */}
      <section id="board" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
              Senior Consultants &amp; Management
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              Multidisciplinary Engineering Board
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Complementing our core fire safety audit capabilities with 30+ years of electrical legal advisory, process safety hazard assessments, and turnkey project operations.
            </p>
          </div>

          <div className="space-y-12">
            {otherExperts.map((expert) => (
              <div
                key={expert.id}
                id={expert.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-orange-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left 4 Cols: Identity */}
                <div className="lg:col-span-4 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-950 text-white flex items-center justify-center font-black text-2xl shadow-lg shrink-0 border border-slate-700">
                      {expert.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">{expert.name}</h3>
                      <p className="text-sm font-bold text-orange-600 mt-0.5">{expert.title}</p>
                      <span className="inline-block mt-1 text-xs sm:text-sm font-semibold text-slate-500">
                        {expert.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-800 border border-orange-200 text-xs sm:text-sm font-bold">
                    <Award className="w-4 h-4 text-orange-600" />
                    <span>{expert.experience}</span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {expert.summary}
                  </p>

                  <div className="pt-2">
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
                        `[Technical Consultation Request] Meeting with ${expert.name}`
                      )}&body=${encodeURIComponent(
                        `Dear G-Next Board,\n\nI would like to schedule a formal technical review with ${expert.name} regarding our premises fire / electrical safety.\n\nPremises Name:\nContact Phone:\nRequirement:\n\nThank you.`
                      )}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Official Inquiry to {expert.name.split(" ")[0]}</span>
                    </a>
                  </div>
                </div>

                {/* Right 8 Cols: Qualifications, Credentials & Expertise */}
                <div className="lg:col-span-8 space-y-7 lg:border-l lg:border-slate-100 lg:pl-10">
                  {/* Qualifications */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-orange-600" />
                      Qualifications &amp; Government Certifications
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {expert.qualification.map((q, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-orange-600 font-bold text-base">•</span>
                          <span className="leading-relaxed">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Credentials & Prior Leadership */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-orange-600" />
                      Notable Industry Credentials &amp; Corporate Leadership
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {expert.credentials.map((cred, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise list */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Flame className="w-5 h-5 text-orange-600" />
                      Key Focus Areas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                      {expert.expertise.map((exp, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                          <span>{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
