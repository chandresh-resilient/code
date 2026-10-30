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
import SandeepChaubeySpotlight from "@/components/SandeepChaubeySpotlight";
import { COMPANY_INFO, EXPERTS, WHY_CHOOSE_US } from "@/data/companyData";

export const metadata = {
  title: "About Us & Leadership | Sandeep Chaubey (NFSC Nagpur) | G-Next Fire Safety",
  description:
    "G-Next Fire Safety executive leadership: Headed by Sandeep Chaubey, alumnus of National Fire Service College (NFSC) Nagpur, former Regional Head at Tata Motors, Admin & Security Head at ITC Ltd, and Fire Safety at DLF Ltd. 20+ to 35+ years of engineering mastery.",
};

export default function AboutPage() {
  const formalRfpMailto = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    "[Official Fire Safety RFP / Proposal Request] Corporate & Society Facility Audit"
  )}&body=${encodeURIComponent(
    `Dear G-Next Fire Safety Technical Board,\n\nWe would like to request an official technical fire safety proposal and site audit for our facility.\n\n• Premises Name:\n• Contact Person:\n• Contact Phone:\n• Location:\n• Requirements: [ ] Bi-Annual Form B [ ] Comprehensive Fire AMC [ ] Plant Fire Safety Audit [ ] Trained Firemen Deployment\n\nPlease send us your formal commercial proposal.\n\nSincerely,`
  )}`;

  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-20 md:py-28 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs sm:text-sm border border-orange-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Corporate Profile &amp; Leadership</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              “WE SERVE TO SAVE”
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              G-Next, A Complete Fire Safety Solution Services, was established in the year 2024 with a unique motto of serving esteemed clients in Fire Detection, Fire Prevention, Fire Protection, and providing trained firemen to counter any exigencies related to fire.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href={formalRfpMailto}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-colors shadow-md shadow-orange-600/30 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Official RFP via Email</span>
              </a>
              <a
                href="/gnext-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base border border-slate-700 transition-colors"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Download Firm Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY & WHY ONE-ROOF SOLUTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                Our Distinct Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Why Run Around Knocking on Different Doors?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Other firms in the field are in isolation providing one or the other services whereas <strong className="text-slate-900 font-bold">G-Next is a one-roof solution</strong>. Now there is no need to run around and knock on various doors to get different solutions. We are providing you everything under a single click.
              </p>
              <div className="p-6 rounded-3xl bg-orange-50 border border-orange-200 text-sm sm:text-base text-orange-950 space-y-2.5">
                <p className="font-bold flex items-center gap-2 text-base">
                  <HeartHandshake className="w-5 h-5 text-orange-600" />
                  Noble Cause &amp; Public Service:
                </p>
                <p className="leading-relaxed">
                  Serving in the interest of the public at large with a noble cause and less profit-making intent. A friend in need who is devoted to serve the best and save lives.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>In-depth knowledge of latest legislation &amp; emerging trends in fire safety</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Tie up with the best brands in equipment and certified spares</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Trained Firemen ready to get deployed with quick and easy processing</span>
                </div>
              </div>
            </div>

            {/* Right: Firm Documents Available */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-7">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
                  Statutory Registrations
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
                  Registered Documents Available
                </h3>
                <p className="text-sm text-slate-300 mt-1.5">
                  100% legal compliance and verified government credentials for client peace of mind.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {COMPANY_INFO.documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1"
                  >
                    <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                      <FileCheck className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{doc.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 pl-6 leading-relaxed">{doc.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-sm text-slate-300">
                <span>GSTIN: <span className="font-mono text-white font-bold">{COMPANY_INFO.gstin}</span></span>
                <span>Proprietor: <span className="text-white font-semibold">{COMPANY_INFO.proprietor}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP EXECUTIVE SPOTLIGHT: SANDEEP CHAUBEY */}
      <section id="sandeep-chaubey" className="py-16 md:py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SandeepChaubeySpotlight />
        </div>
      </section>

      {/* POOL OF EXPERTS (Ashok Pote, Deepak Gangal, Anil Kumar Chaubey) */}
      <section id="experts" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 font-bold text-xs sm:text-sm mb-3">
              <Award className="w-4 h-4 text-orange-600" />
              <span>Distinguished Technical Board</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Senior Engineering Consultants &amp; Management
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Combining 30+ years of industrial process safety, electrical hazard engineering, and client governance across India.
            </p>
          </div>

          <div className="space-y-10">
            {EXPERTS.filter((exp) => exp.id !== "sandeep-chaubey").map((expert) => (
              <div
                key={expert.id}
                id={expert.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-orange-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left 4 Cols: Identity & Badges */}
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

                  {/* Expertise Tags */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Specialized Expertise Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {expert.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-orange-50 hover:text-orange-950 transition-colors"
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
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-orange-950 border border-orange-500/30">
            <div className="max-w-3xl space-y-5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
                Official Form B Issuance Partnership
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                Joint Venture with Vijay Laxmi Fire Services
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Registered under Maharashtra Fire Services and licensed agency for Form B certification under The Maharashtra Fire Prevention &amp; Life Safety Measures Act 2006. Our clients enjoy seamless audit, compliance filing, and authorized certification without administrative delays.
              </p>
              <div className="pt-2 flex flex-wrap gap-5 text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                  PMC, PCMC, PMRDA &amp; MIDC Coverage
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                  Bi-annual Form B Renewals
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                  Full Liaisoning with Fire Department
                </span>
              </div>
              <div className="pt-3">
                <Link
                  href="/form-b-compliance"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-colors shadow-md"
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
