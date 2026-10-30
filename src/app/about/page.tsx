import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  FileCheck,
  CheckCircle2,
  Users,
  GraduationCap,
  Building2,
  Phone,
  Mail,
  Download,
  Flame,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Layers,
  MapPin,
} from "lucide-react";
import { COMPANY_INFO, EXPERTS, WHY_CHOOSE_US } from "@/data/companyData";

export const metadata = {
  title: "About Us | G-Next Fire Safety Solution Services",
  description:
    "Learn about G-Next Fire Safety: Headed by an alumnus of National Fire Services College (NFSC) Nagpur. 20+ to 35+ years experience in corporate safety, fire audits, AMC, and statutory Form B certification.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Corporate Profile & Leadership</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              “WE SERVE TO SAVE”
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              G-Next, A Complete Fire Safety Solution Services, was established in the year 2024 with a unique motto of serving esteemed clients in Fire Detection, Fire Prevention, Fire Protection, and providing trained firemen to counter any exigencies related to fire.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="/gnext-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors shadow-md shadow-orange-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Firm Profile (PDF)</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
              >
                <span>Book Site Survey</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY & WHY ONE-ROOF SOLUTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Our Distinct Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Why Run Around Knocking on Different Doors?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Other firms in the field are in isolation providing one or the other services whereas <strong className="text-slate-900">G-Next is a one-roof solution</strong>. Now there is no need to run around and knock on various doors to get different solutions. We are providing you everything under a single click.
              </p>
              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-900 space-y-2">
                <p className="font-bold flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-orange-600" />
                  Noble Cause & Public Service:
                </p>
                <p className="leading-relaxed">
                  Serving in the interest of the public at large with a noble cause and less profit-making intent. A friend in need who is devoted to serve the best and save lives.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>In-depth knowledge of latest legislation & emerging trends in fire safety</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>Tie up with the best brands in equipment and certified spares</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>Trained Firemen ready to get deployed with quick and easy processing</span>
                </div>
              </div>
            </div>

            {/* Right: Firm Documents Available */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Statutory Registrations
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Registered Documents Available
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  100% legal compliance and verified government credentials for client peace of mind.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {COMPANY_INFO.documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1"
                  >
                    <div className="flex items-center gap-2 text-white font-bold">
                      <FileCheck className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{doc.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 pl-6">{doc.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>GSTIN: <span className="font-mono text-white">{COMPANY_INFO.gstin}</span></span>
                <span>Proprietor: <span className="text-white">{COMPANY_INFO.proprietor}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POOL OF EXPERTS (Deep-Dive Profiles) */}
      <section id="experts" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-3">
              <Award className="w-3.5 h-3.5 text-orange-600" />
              <span>Technical Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Distinguished Pool of Experts
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Headed by seasoned alumni from the National Fire Service College (NFSC) Nagpur and senior directors from India&apos;s leading automotive, chemical, and FMCG conglomerates.
            </p>
          </div>

          <div className="space-y-8">
            {EXPERTS.map((expert) => (
              <div
                key={expert.id}
                id={expert.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-orange-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left 4 Cols: Identity & Badges */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-500 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-orange-500/20">
                      {expert.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{expert.name}</h3>
                      <p className="text-xs font-bold text-orange-600">{expert.title}</p>
                      <span className="inline-block mt-1 text-[11px] font-semibold text-slate-500">
                        {expert.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{expert.experience}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {expert.summary}
                  </p>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/918779513748?text=${encodeURIComponent(
                        `Hello G-Next, I would like to schedule a technical consultation with ${expert.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      <span>Book Consultation With {expert.name.split(" ")[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right 8 Cols: Qualifications, Credentials & Expertise */}
                <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
                  {/* Qualifications */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-orange-600" />
                      Qualifications & Government Certifications
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {expert.qualification.map((q, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-600 font-bold">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Credentials & Prior Leadership */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-orange-600" />
                      Notable Industry Credentials & Corporate Leadership
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {expert.credentials.map((cred, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise Tags */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Specialized Expertise Areas
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {expert.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-medium hover:bg-orange-50 hover:text-orange-900 transition-colors"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOINT VENTURE WITH VIJAY LAXMI FIRE SERVICES */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-orange-950 border border-orange-500/30">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Official Form B Issuance Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Joint Venture with Vijay Laxmi Fire Services
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Registered under Maharashtra Fire Services and licensed agency for Form B certification under The Maharashtra Fire Prevention & Life Safety Measures Act 2006. Our clients enjoy seamless audit, compliance filing, and authorized certification without administrative delays.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  PMC, PCMC, PMRDA & MIDC Coverage
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  Bi-annual Form B Renewals
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  Full Liaisoning with Fire Department
                </span>
              </div>
              <div className="pt-3">
                <Link
                  href="/form-b-compliance"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors shadow-md"
                >
                  <span>Learn More About Form B Compliance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
