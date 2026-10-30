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
  CheckCircle2,
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "systems" | "extinguishers" | "drills" | "audits";
  categoryLabel: string;
  desc: string;
  spec: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Multi-Stage Fire Pump Room Installation",
    category: "systems",
    categoryLabel: "Fire Systems",
    desc: "Main electrical fire pump, diesel engine backup pump, and jockey automation panel for high-rise riser pressure.",
    spec: "Pressure Rating: 14 Bar, 2850 RPM, Automatic cut-in",
    image: "/gallery/pumps.jpg",
  },
  {
    id: "g2",
    title: "Courtyard Hydrant & Landing Valve Setup",
    category: "systems",
    categoryLabel: "Fire Systems",
    desc: "Single / double landing valves with instant canvas hose coupling and weather-proof MS hose box.",
    spec: "IS 5290 Type A Gunmetal / Stainless Steel valves",
    image: "/gallery/hydrant.jpg",
  },
  {
    id: "g3",
    title: "Automatic Sprinkler Network & Basements",
    category: "systems",
    categoryLabel: "Fire Systems",
    desc: "Quartzoid glass bulb pendent sprinklers engineered for commercial ceilings and residential parking basements.",
    spec: "68°C Red Bulb, K-factor 5.6 (80 LPM at 1 bar)",
    image: "/gallery/alarm.jpg",
  },
  {
    id: "g4",
    title: "ISI-Marked ABC Stored Pressure Extinguishers",
    category: "extinguishers",
    categoryLabel: "Extinguishers",
    desc: "Multi-purpose dry chemical powder fire extinguishers fully charged, pressurized, and digitally inspected.",
    spec: "Capacity: 2kg, 4kg, 6kg, 9kg (IS 15683 certified)",
    image: "/gallery/extinguishers.jpg",
  },
  {
    id: "g5",
    title: "Clean Agent & Server Room Gas Suppression",
    category: "extinguishers",
    categoryLabel: "Extinguishers",
    desc: "Automated gas flooding cylinders for sensitive electronic data centers, server racks, and control rooms without water damage.",
    spec: "Zero Ozone Depletion, Clean Agent discharge within 10s",
    image: "/gallery/server-panels.jpg",
  },
  {
    id: "g6",
    title: "Live Controlled Fire Extinguishment Mock Drill",
    category: "drills",
    categoryLabel: "Mock Drills",
    desc: "Demonstration fire drill where residential society occupants and corporate staff practice the PASS technique.",
    spec: "Practical hands-on training with safety marshals",
    image: "/gallery/drills.jpg",
  },
  {
    id: "g7",
    title: "Trained Firemen & Rapid Response Readiness",
    category: "drills",
    categoryLabel: "Trained Personnel",
    desc: "Certified, disciplined fire fighters and pump operators ready for corporate campuses, townships, and industrial sites.",
    spec: "State Fire Services standards & 24/7 vigil",
    image: "/gallery/firemen.jpg",
  },
  {
    id: "g8",
    title: "Industrial Plant Safety & EHS Engineering Audit",
    category: "audits",
    categoryLabel: "Audits",
    desc: "Comprehensive engineering walk-through identifying fire load, staircase pressurization, and exit clearance.",
    spec: "Indian Factory Act 1948 & NFPA 101 compliance",
    image: "/gallery/inspection.jpg",
  },
  {
    id: "g9",
    title: "High-Rise Society & Commercial Complex Protection",
    category: "audits",
    categoryLabel: "High-Rise Safety",
    desc: "Complete Form B statutory inspections and wet riser overhaul for premier societies like Lodha Siena and Savanna.",
    spec: "Maharashtra Fire Prevention Act 2006 (Form B)",
    image: "/gallery/highrise.jpg",
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
              { id: "extinguishers", label: "Extinguishers & Gas Suppression" },
              { id: "drills", label: "Emergency Drills & Manpower" },
              { id: "audits", label: "Audits & High-Rise Safety" },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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

          {/* Cards Grid with Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Image Banner with Gradient Overlay */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/85 text-white backdrop-blur-md border border-white/20">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md leading-snug">
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
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Inquiry</span>
                    </a>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700"
                    >
                      <span>Book Survey</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base shadow-md shadow-orange-600/30"
            >
              <span>Schedule On-Site Drill</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/918779513748?text=${encodeURIComponent(
                "Hello G-Next, I would like to schedule a mock fire drill & training session at our premises."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
