"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flame,
  Wrench,
  GraduationCap,
  ShieldCheck,
  Filter,
  ArrowRight,
  MessageCircle,
  Eye,
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "systems" | "extinguishers" | "drills" | "audits";
  categoryLabel: string;
  desc: string;
  spec: string;
  gradient: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Multi-Stage Fire Pump Room Installation",
    category: "systems",
    categoryLabel: "Fire Systems",
    desc: "Main electrical fire pump, diesel engine backup pump, and jockey automation panel for high-rise riser pressure.",
    spec: "Pressure Rating: 14 Bar, 2850 RPM, Automatic cut-in",
    gradient: "from-slate-900 to-red-950",
  },
  {
    id: "g2",
    title: "Courtyard Hydrant & Landing Valve Setup",
    category: "systems",
    categoryLabel: "Fire Systems",
    desc: "Single / double landing valves with instant canvas hose coupling and weather-proof MS hose box.",
    spec: "IS 5290 Type A Gunmetal / Stainless Steel valves",
    gradient: "from-slate-900 to-orange-950",
  },
  {
    id: "g3",
    title: "Automatic Sprinkler Network with Alarm Valve",
    category: "systems",
    categoryLabel: "Fire Systems",
    desc: "Quartzoid glass bulb pendent sprinklers engineered for commercial ceilings and residential parking basements.",
    spec: "68°C Red Bulb, K-factor 5.6 (80 LPM at 1 bar)",
    gradient: "from-slate-900 to-amber-950",
  },
  {
    id: "g4",
    title: "ISI-Marked ABC Stored Pressure Extinguishers",
    category: "extinguishers",
    categoryLabel: "Extinguishers",
    desc: "Multi-purpose dry chemical powder fire extinguishers fully charged, pressurized, and digitally inspected.",
    spec: "Capacity: 2kg, 4kg, 6kg, 9kg (IS 15683 certified)",
    gradient: "from-blue-950 to-slate-900",
  },
  {
    id: "g5",
    title: "CO2 Gas Fire Extinguishers for Electrical Gear",
    category: "extinguishers",
    categoryLabel: "Extinguishers",
    desc: "Seamless manganese steel cylinders with bend pipe and horn for instant server room and panel protection.",
    spec: "Capacity: 2kg, 3kg, 4.5kg with PESO approved valve",
    gradient: "from-slate-950 to-indigo-950",
  },
  {
    id: "g6",
    title: "Live Controlled Fire Extinguishment Mock Drill",
    category: "drills",
    categoryLabel: "Mock Drills",
    desc: "Demonstration fire drill where residential society occupants and corporate staff practice the PASS technique.",
    spec: "Practical hands-on training with safety marshals",
    gradient: "from-red-950 to-orange-950",
  },
  {
    id: "g7",
    title: "High-Rise Evacuation Drill & Assembly Simulation",
    category: "drills",
    categoryLabel: "Mock Drills",
    desc: "Simulated smoke alert triggering building-wide orderly evacuation through pressurized fire staircases.",
    spec: "Role clarity for Fire Wardens, QRT & First Aiders",
    gradient: "from-orange-950 to-slate-900",
  },
  {
    id: "g8",
    title: "Electrical Panel Infrared Thermography Audit",
    category: "audits",
    categoryLabel: "Audits",
    desc: "Thermal imaging inspection conducted by senior electrical engineers to detect micro-hotspots before arc fires erupt.",
    spec: "IS 3043 & IS 14489 compliant reporting",
    gradient: "from-amber-950 to-slate-900",
  },
  {
    id: "g9",
    title: "Form B Comprehensive Statutory Inspection",
    category: "audits",
    categoryLabel: "Audits",
    desc: "Complete pre-certification technical audit of risers, pumps, refuge areas, and alarms for bi-annual Form B filing.",
    spec: "Maharashtra Fire Services Licensed Agency standard",
    gradient: "from-slate-900 to-emerald-950",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const displayedItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-20 md:py-28 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs sm:text-sm border border-orange-500/30">
              <Eye className="w-4 h-4" />
              <span>Operations &amp; Systems Showcase</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              Equipment &amp; Drills Gallery
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              Explore our turnkey installations, ISI-marked fire safety apparatus, periodic maintenance procedures, and on-site mock drills across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & GALLERY GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-5 border-b border-slate-200">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mr-2">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
            {[
              { id: "all", label: "All Showcase" },
              { id: "systems", label: "Fire Systems & Hydrants" },
              { id: "extinguishers", label: "Extinguishers & Refilling" },
              { id: "drills", label: "Emergency Drills & Training" },
              { id: "audits", label: "Audits & Thermography" },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Banner Card */}
                <div
                  className={`h-52 p-7 bg-gradient-to-br ${item.gradient} text-white flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-white/20 backdrop-blur-sm">
                      {item.categoryLabel}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800 font-medium">
                      <span className="font-bold text-orange-600">Technical Spec: </span>
                      {item.spec}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={`https://wa.me/918779513748?text=${encodeURIComponent(
                        `Hello G-Next, I am inquiring about equipment/service: ${item.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire About This Setup</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h3 className="text-3xl font-black text-slate-900">
            Need a Customized Fire Equipment Demonstration or On-Site Drill?
          </h3>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            We provide live demonstration fires, evacuation drills, and extinguisher handling sessions at your society premises at the lowest cost in the industry.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base shadow-md shadow-orange-600/30"
            >
              <span>Schedule On-Site Drill</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
