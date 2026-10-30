import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Flame,
  Award,
  Phone,
  ArrowRight,
  CheckCircle2,
  Users,
  Wrench,
  FileCheck,
  Building2,
  GraduationCap,
  Sparkles,
  Download,
  AlertTriangle,
  ChevronRight,
  Shield,
  Layers,
  HeartHandshake,
  Check,
  Star,
  MapPin,
  Clock,
} from "lucide-react";
import DynamicIcon from "@/components/DynamicIcon";
import EstimatorCalculator from "@/components/EstimatorCalculator";
import FormBChecker from "@/components/FormBChecker";
import {
  COMPANY_INFO,
  CORE_PILLARS,
  SERVICES,
  EXPERTS,
  CLIENTS,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  TESTIMONIALS,
} from "@/data/companyData";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Subtle geometric glowing background gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                Licensed Agency Joint Venture for Form B
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-medium text-xs border border-slate-700">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Headed by NFSC Nagpur Alumnus
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 text-red-300 font-semibold text-xs border border-red-500/30">
                “WE SERVE TO SAVE”
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
              A Complete Fire Safety Solution Under{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-400">
                One Single Roof
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              No need to run around knocking on different doors. G-Next delivers turnkey Fire AMC, statutory Form B certification, comprehensive safety audits, equipment refilling, emergency drills, and trained firemen deployment across Pune and Mumbai.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Flame className="w-4 h-4" />
                <span>Book Site Audit & Form B Survey</span>
              </Link>
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all hover:scale-[1.02]"
              >
                <Wrench className="w-4 h-4 text-orange-400" />
                <span>Interactive Cost Estimator</span>
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-sm backdrop-blur-sm border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left w-full border-t border-slate-800/80 mt-6">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Maharashtra Fire Act Form B Ready</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">20+ to 35+ Yrs Industry Veterans</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Trusted by Lodha Siena & Savanna</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Lowest Industry Training Cost</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRIC COUNTER BANNER */}
      <section className="bg-slate-900 border-y border-slate-800 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-orange-400">20+ to 35+</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Years Senior Expert Experience
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-orange-400">100%</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Statutorily Complied (Form B)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-orange-400">4 Pillars</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Training • Audit • AMC • Residential
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-orange-400">Pune & Mumbai</p>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Avon Vista Balewadi & Powai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE 4 CORE PILLARS SECTION (From PDF Diagram) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-3">
              <Flame className="w-3.5 h-3.5 text-orange-600" />
              <span>Comprehensive Fire Defense</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The 4 Pillars of G-Next Fire Safety
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Representing our interconnected approach from prevention and audits to proactive maintenance and life-saving evacuation drills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group relative p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-orange-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <DynamicIcon name={pillar.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      {pillar.stats}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-600 mt-0.5">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS THE DIFFERENCE: G-NEXT VS OTHER FIRMS */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 Cols: Firm Philosophy */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The G-Next Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                What is the Difference Between G-Next and Other Firms?
              </h2>
              <div className="p-5 rounded-2xl bg-orange-950/40 border border-orange-500/30 text-slate-300 text-sm leading-relaxed space-y-3">
                <p>
                  Other firms in the field are in isolation providing one or the other services, whereas <span className="text-white font-bold">G-Next is a one-roof solution</span>.
                </p>
                <p>
                  Now there is no need to run around and knock on various doors to get different solutions. We provide you with everything under a single click.
                </p>
                <p className="text-xs text-orange-300 font-semibold italic">
                  — Serving in the interest of the public at large with a noble cause and fair, transparent pricing.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Licensed JV with Vijay Laxmi Fire Services for Form B</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Headed by National Fire Service College Nagpur alumnus</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Trained firemen ready for immediate deployment</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/gnext-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors shadow-md shadow-orange-600/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete Firm Profile (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right 7 Cols: 6 Key Features */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-orange-500/40 transition-colors space-y-2"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <DynamicIcon name={item.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SHOWCASE */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-3">
                <Wrench className="w-3.5 h-3.5 text-orange-600" />
                <span>Our Turnkey Scope</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Featured Fire Protection Solutions
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                Meeting all requirements under Maharashtra Fire Prevention & Life Safety Act 2006, NBC 2016, and NFPA standards.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline"
            >
              <span>View All 12 Services In Detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((srv) => (
              <div
                key={srv.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-500/60 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                    <DynamicIcon name={srv.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 line-clamp-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {srv.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services#${srv.id}`}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                  >
                    <span>Detailed Scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`https://wa.me/918779513748?text=${encodeURIComponent(
                      `Hello G-Next, I am inquiring about ${srv.title} for our facility.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-slate-500 hover:text-slate-900"
                  >
                    Quick Quote &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR SECTION */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EstimatorCalculator />
        </div>
      </section>

      {/* POOL OF EXPERTS SECTION (Highlighting NFSC Nagpur Alumnus & Senior Team) */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Veteran Technical Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Pool of Distinguished Fire & Electrical Experts
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Headed by an experienced alumnus of the National Fire Services College (NFSC) Nagpur — India&apos;s premier Government Fire Institution — with bags of expertise in commercial and manufacturing fire safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERTS.slice(0, 3).map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      {exp.experience}
                    </span>
                    <span className="text-xs text-slate-500">{exp.location}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.name}</h3>
                    <p className="text-xs font-semibold text-orange-400 mt-0.5">
                      {exp.title}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Top Credentials */}
                  <div className="pt-3 border-t border-slate-800 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                      Key Credentials:
                    </p>
                    {exp.credentials.slice(0, 3).map((cred, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                  <Link
                    href={`/about#${exp.id}`}
                    className="font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                  >
                    <span>Full Biography</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-slate-500 text-[11px]">Senior Consultant</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 transition-colors"
            >
              <span>Meet the Complete Technical Advisory Board</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* FORM B COMPLIANCE CHECKER */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FormBChecker />
        </div>
      </section>

      {/* 3-STEP SEAMLESS PROCESS (Inspired by firesafesolutions.in) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-3">
              <Clock className="w-3.5 h-3.5 text-orange-600" />
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              How We Safeguard Your Facility
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              From site survey to bi-annual Form B certification and active maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-orange-500/30">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-orange-600 flex items-center gap-1">
                  <span>Guaranteed On-Time</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT SHOWCASE & TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-3">
              <Building2 className="w-3.5 h-3.5 text-orange-600" />
              <span>Valued Clientele</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Trusted by Premier Housing Societies & Industries
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Active fire safety partners for landmark residential complexes and commercial establishments.
            </p>
          </div>

          {/* Client Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {CLIENTS.slice(0, 3).map((client) => (
              <div
                key={client.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                    {client.type}
                  </span>
                  <span className="text-xs text-slate-500">{client.location}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{client.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {client.highlight}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial Quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <p className="text-xs font-bold text-white">{t.author}</p>
                  <p className="text-[11px] text-orange-400">{t.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL BOTTOM CALL TO ACTION */}
      <section className="bg-gradient-to-r from-red-700 via-orange-600 to-amber-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            100% Statutorily Compliant Fire Safety
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-3xl mx-auto">
            Ready to Protect Precious Lives & Ensure Complete Peace of Mind?
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Connect with our senior fire engineers today for a complimentary site assessment, Form B audit review, or customized society AMC proposal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Book Site Survey Now</span>
            </Link>
            <a
              href={`https://wa.me/918779513748?text=${encodeURIComponent(
                "Hello G-Next Fire Safety, I want to book a site inspection for our premises."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <span>Instant WhatsApp Discussion</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-black/20 hover:bg-black/30 text-white font-semibold text-sm border border-white/30 backdrop-blur-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
