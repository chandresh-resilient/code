"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  Check,
  CheckCircle2,
  ArrowRight,
  Flame,
  FileCheck,
  GraduationCap,
  Users,
  Building2,
  Phone,
  MessageCircle,
  Filter,
} from "lucide-react";
import DynamicIcon from "@/components/DynamicIcon";
import ExtinguisherGuide from "@/components/ExtinguisherGuide";
import { SERVICES, COMPANY_INFO } from "@/data/companyData";

const CATEGORIES = [
  { id: "all", label: "All 12+ Solutions" },
  { id: "maintenance", label: "AMC & Equipment" },
  { id: "statutory", label: "Form B & Statutory" },
  { id: "audit", label: "Audits & Risk Assessment" },
  { id: "training", label: "Training & Mock Drills" },
  { id: "installation", label: "Turnkey Installations" },
  { id: "manpower", label: "Trained Firemen" },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeTab);

  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
              <Flame className="w-3.5 h-3.5" />
              <span>Turnkey Fire Protection Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              End-to-End Fire Safety Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From mandatory bi-annual Form B certification and high-pressure AMC maintenance to NFPA compliant safety audits, extinguisher refilling, and trained firemen deployment.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors shadow-md shadow-orange-600/30"
              >
                <span>Calculate AMC Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call Emergency Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS & SERVICE LIST */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mr-2">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-orange-500/50 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left 4 Cols: Title, Category & Quick Quote */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm">
                    <DynamicIcon name={service.icon} className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 px-2 py-0.5 rounded bg-orange-50 border border-orange-200">
                      {service.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-2">
                    <a
                      href={`https://wa.me/918779513748?text=${encodeURIComponent(
                        `Hello G-Next, I would like to get a formal quote for: ${service.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-600/30 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Request Quote on WhatsApp</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                    >
                      <span>Book Site Inspection</span>
                    </Link>
                  </div>
                </div>

                {/* Right 8 Cols: Full Description, Deliverables, Standards & Ideal For */}
                <div className="lg:col-span-8 space-y-5 lg:border-l lg:border-slate-100 lg:pl-8">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Service Scope & Engineering Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-orange-600" />
                      What We Deliver
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {service.deliverables.map((del, i) => (
                        <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standards & Ideal For */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 text-xs">
                    {service.complianceStandards && (
                      <div>
                        <span className="font-bold text-slate-800 block mb-1">
                          Governing Standards:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {service.complianceStandards.map((std, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium"
                            >
                              {std}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <span className="font-bold text-slate-800 block mb-1">
                        Recommended For:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {service.idealFor.map((idf, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-orange-50 text-orange-800 text-[11px] font-semibold"
                          >
                            {idf}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTINGUISHER SELECTION & REFILLING GUIDE */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExtinguisherGuide />
        </div>
      </section>
    </div>
  );
}
