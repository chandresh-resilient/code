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
  Download,
  Flame,
  FileCheck,
  Check,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  HardHat,
  BadgeCheck,
} from "lucide-react";
import { COMPANY_INFO, EXPERTS } from "@/data/companyData";

export default function SandeepChaubeySpotlight() {
  const sandeep = EXPERTS.find((e) => e.id === "sandeep-chaubey");

  const corporatePedigree = [
    {
      company: "Tata Motors Limited",
      role: "Former Regional Head",
      achievement: "Architect of Emergency Management Plan standards; Recipient of multiple TATA Motors Safety Excellence Awards.",
      tag: "Automobile & Heavy Manufacturing",
    },
    {
      company: "ITC Limited",
      role: "Former Admin & Security Head",
      achievement: "Managed corporate safety, high-level administrative governance, and multi-location security compliance.",
      tag: "FMCG & Corporate Conglomerate",
    },
    {
      company: "DLF Limited",
      role: "Former Fire Safety Head",
      achievement: "Led fire protection, suppression engineering, and evacuation systems for India's largest commercial high-rises.",
      tag: "Real Estate & Mega High-Rise Infrastructure",
    },
  ];

  const corePillars = [
    {
      title: "NFSC Nagpur Alumnus",
      subtitle: "16th Batch Sub-Officer (Fire Engineering)",
      desc: "Trained at the National Fire Service College (Ministry of Home Affairs), Nagpur — India's premier government fire institution.",
      icon: GraduationCap,
    },
    {
      title: "ISO 45001:2018 Lead Auditor",
      subtitle: "Global OHS Standard",
      desc: "Certified lead auditor for occupational health and safety management systems, ensuring zero-defect compliance.",
      icon: BadgeCheck,
    },
    {
      title: "₹16+ Crore Budget Governance",
      subtitle: "Large Scale Execution",
      desc: "Successfully managed multi-location corporate operations, multi-crore fire safety budgets, and large specialized workforces.",
      icon: Briefcase,
    },
    {
      title: "CE Worldwide Emerging Leader",
      subtitle: "Distinguished Safety Recognition",
      desc: "Honored with the prestigious Emerging Leader Award from CE Worldwide, Mumbai, for groundbreaking contributions to industrial safety.",
      icon: Award,
    },
  ];

  const formalConsultEmailSubject = encodeURIComponent(
    "[Executive Consultation Request] Technical Fire Safety Review with Sandeep Chaubey"
  );
  const formalConsultEmailBody = encodeURIComponent(
    `Dear Sandeep Chaubey & G-Next Technical Board,

I am writing to formally request an executive fire safety consultation / audit review for our premises:

• Organization / Society Name: 
• Contact Person: 
• Phone / Direct Mobile: 
• Facility Classification (Industrial / High-Rise / IT Park / Healthcare): 
• Key Objective: [ ] Form B Statutory Certification [ ] Full Fire Safety Audit [ ] Fire AMC Review [ ] High-Risk Safety Overhaul

Please let us know your availability for an introductory technical discussion or site survey.

Sincerely,
`
  );

  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${formalConsultEmailSubject}&body=${formalConsultEmailBody}`;

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 border border-orange-500/30 shadow-2xl overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs sm:text-sm border border-orange-500/30 mb-3">
            <Award className="w-4 h-4 text-orange-400" />
            <span>Executive Leadership &amp; Engineering Authority</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Sandeep Chaubey
          </h2>
          <p className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white mt-1">
            Chief Fire Safety Consultant &amp; Lead Auditor | India
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-4 py-2 rounded-xl bg-orange-600/20 text-orange-300 border border-orange-500/40 text-sm font-bold">
            20+ Years Veteran
          </span>
          <span className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 text-sm font-bold">
            NFSC Nagpur 16th Batch
          </span>
        </div>
      </div>

      {/* Executive Bio & High-Trust Narrative */}
      <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-5">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Engineering Leadership Forged at India&apos;s Foremost Corporations
          </h3>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Headed by an experienced alumnus of the <strong className="text-white font-bold">National Fire Service College (NFSC) Nagpur</strong> — the premier Government Fire Institution of India under the Ministry of Home Affairs. Sandeep Chaubey brings two decades of hands-on senior management mastery in Fire Safety, Security Management, Plant Safety, and Corporate Facility Administration.
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Having served as <strong className="text-white font-semibold">Regional Head of Tata Motors</strong>, <strong className="text-white font-semibold">Admin &amp; Security Head at ITC Ltd</strong>, and <strong className="text-white font-semibold">Fire Safety in DLF Ltd</strong>, he has personally authored Corporate HSE policies, designed complex multi-tier fire suppression networks, and led safe commissioning across ₹16+ Crore operational environments.
          </p>

          <div className="p-5 rounded-2xl bg-orange-950/40 border border-orange-500/30 text-sm sm:text-base text-orange-200">
            <span className="font-bold text-orange-300 block mb-1">
              Architect of Corporate Emergency Standards:
            </span>
            Sandeep architected the Emergency Management Plan standards for Tata Motors Limited and has guided over 500+ commercial, industrial, and high-rise facilities in eliminating fire failure points and ensuring 100% legal compliance.
          </div>
        </div>

        {/* Action Card: Direct Executive Connection */}
        <div className="lg:col-span-4 p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-5 flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/sandeep-chaubey.jpeg"
              alt="Sandeep Chaubey"
              className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-orange-500 shadow-md shrink-0"
            />
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-orange-400 block">
                Technical Leadership
              </span>
              <h4 className="text-xl font-black text-white">
                Sandeep Chaubey
              </h4>
              <p className="text-xs text-slate-400">Chief Consultant &amp; Auditor</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Available for high-stakes fire risk assessments, industrial safety audits, Form B advisory, and corporate facility reviews.
          </p>

          <div className="space-y-3 pt-2">
            <Link
              href="/about/experts/sandeep-chaubey"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>More Details &amp; Credentials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={mailtoLink}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-orange-400" />
              <span>Send Official Email Proposal</span>
            </a>

            <a
              href="/gnext-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-800 transition-colors"
            >
              <Download className="w-4 h-4 text-orange-400" />
              <span>Download Complete Profile (PDF)</span>
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 text-center">
            Official Email: <span className="text-white font-bold">{COMPANY_INFO.email}</span>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid (Nagpur, ISO, Budget, Award) */}
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {corePillars.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 hover:border-orange-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white leading-snug">{item.title}</h4>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wide">{item.subtitle}</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Corporate Pedigree Showcase (Tata Motors, ITC, DLF) */}
      <div className="py-8">
        <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-orange-400" />
          Prior Senior Corporate Leadership &amp; Track Record
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corporatePedigree.map((corp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  {corp.tag}
                </span>
                <h5 className="text-xl font-bold text-white mt-2">{corp.company}</h5>
                <p className="text-sm font-semibold text-orange-400">{corp.role}</p>
                <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                  {corp.achievement}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Executive Verified Tenure</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Detailed Technical Columns: Academic Qualifications & Core Competencies */}
      <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-800">
        {/* Left: Academic & Government Diplomas */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-orange-400" />
            Accredited Qualifications &amp; Institutions
          </h4>

          <ul className="space-y-2.5 text-sm text-slate-300">
            {sandeep?.qualification.map((q, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Core Competencies Matrix */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-400" />
            Core Competencies &amp; Technical Authority
          </h4>

          <div className="flex flex-wrap gap-2">
            {sandeep?.coreCompetencies.map((comp, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 hover:border-orange-500/40 hover:text-white transition-colors"
              >
                {comp}
              </span>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-400 space-y-1">
            <p className="font-bold text-slate-200">Industries Personally Supervised:</p>
            <p>Automobile Plants, FMCG Units, IT Parks, Chemical Facilities, Residential High-Rise Societies, Commercial Malls, Warehouses, and Hospitals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
