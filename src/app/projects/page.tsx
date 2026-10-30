import React from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Factory,
  Hotel,
  HeartPulse,
  GraduationCap,
  Store,
  Warehouse,
  ArrowRight,
  Flame,
  MessageCircle,
} from "lucide-react";
import { CLIENTS, COMPANY_INFO } from "@/data/companyData";

export const metadata = {
  title: "Clients & Sectors Served | G-Next Fire Safety Solution Services",
  description:
    "Trusted by Lodha Siena, Lodha Savanna, Newa Garden, and industrial setups across Pune, PCMC, and Mumbai for Form B certification and Fire AMC.",
};

const SECTORS = [
  {
    title: "Housing Societies & High-Rise Apartments",
    desc: "Complete Form B certification, pump room overhaul, wet risers, fire drills, and resident awareness programs for large residential complexes.",
    icon: Building2,
    clients: "Lodha Siena, Lodha Savanna, Newa Garden & more",
  },
  {
    title: "Manufacturing & Heavy Engineering",
    desc: "Industrial fire risk assessments, Factory Act compliance, electrical thermography, and sprinkler networks for automotive and chemical plants.",
    icon: Factory,
    clients: "Automotive vendors, chemical units in Chakan, Bhosari & Talegaon",
  },
  {
    title: "Corporate Offices & IT Parks",
    desc: "Clean agent gas suppression for data servers, addressable alarms, quarterly evacuation drills, and ERT certification.",
    icon: Building2,
    clients: "Tech campuses across Balewadi, Baner, Hinjawadi & Powai",
  },
  {
    title: "Hospitals & Healthcare Facilities",
    desc: "Advising healthcare facilities to attain fire compliance for NABH accreditation, ICU evacuation plans, and staff CPR training.",
    icon: HeartPulse,
    clients: "Multi-specialty clinics and tertiary care centers",
  },
  {
    title: "Educational Campuses & Universities",
    desc: "Child and student fire drill seminars, laboratory fire extinguishers, emergency exit clearings, and annual NOC renewals.",
    icon: GraduationCap,
    clients: "Schools and higher education institutes",
  },
  {
    title: "Commercial Malls, Hotels & Retail",
    desc: "Courtyard hydrants, grease duct fire suppression for commercial kitchens, and trained firemen shift deployment.",
    icon: Store,
    clients: "Shopping centers and hospitality destinations",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
              <Building2 className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Clients &amp; Sectors We Protect
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Serving premier housing societies, manufacturing hubs, IT parks, and healthcare campuses across Maharashtra with zero compromise on safety.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED CLIENT SPOTLIGHTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Prestigious Engagements
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Featured Client Projects
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Active fire safety management contracts maintained with market-leading standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-orange-500/50 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-800">
                      {client.type}
                    </span>
                    <span className="text-xs text-slate-500">{client.location}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">{client.name}</h3>
                  <p className="text-xs font-semibold text-orange-600">
                    {client.category}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/70">
                    {client.highlight}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/70 flex items-center justify-between text-xs text-emerald-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    100% Form B Complied
                  </span>
                  <span className="text-slate-400 font-normal">Active AMC</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES & OCCUPANCY SECTORS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Diverse Industry Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Industries &amp; Occupancies We Serve
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Every facility has distinct fire risks. Our NFSC Nagpur alumnus designs customized safety regimes for every sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((sec) => {
              const IconComp = sec.icon;
              return (
                <div
                  key={sec.title}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-orange-500/40 transition-colors space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{sec.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
                  <p className="text-[11px] font-semibold text-orange-600 pt-2 border-t border-slate-100">
                    Typical Scope: {sec.clients}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black">
            Does Your Society or Facility Need Reliable AMC Protection?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Join premier societies like Lodha Siena and Lodha Savanna. Get seamless Form B renewal and proactive fire pump servicing.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/estimator"
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-600/30"
            >
              Estimate Society AMC Scope
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700"
            >
              Contact Engineering Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
