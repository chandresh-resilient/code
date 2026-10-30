"use client";

import React, { useState } from "react";
import {
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const CHECKLIST_ITEMS = [
  {
    id: "last_audit",
    question: "Was your building's fire fighting system inspected in the last 6 months?",
    law: "Mandatory bi-annual inspection under Maharashtra Fire Prevention Act 2006",
  },
  {
    id: "pumps_active",
    question: "Are your fire pumps (Main, Diesel, Jockey) in auto-mode and tested weekly?",
    law: "NBC 2016 Part 4 clause 5.1 & IS 15105 guidelines",
  },
  {
    id: "extinguishers_tagged",
    question: "Are all fire extinguishers hydro-tested, refilled, and tagged within 1 year?",
    law: "IS 2190:2010 Code of practice for fire extinguisher maintenance",
  },
  {
    id: "risers_hydrants",
    question: "Are landing valves, courtyard hydrants, and hose boxes unobstructed?",
    law: "Free unobstructed egress and water pressure of minimum 3.5 bar at highest outlet",
  },
  {
    id: "licensed_agency",
    question: "Do you have an active agreement with a licensed agency for Form B issuance?",
    law: "Form B can only be issued by a Maharashtra Fire Services Licensed Agency",
  },
];

export default function FormBChecker() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});

  const handleSelect = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const answeredCount = Object.keys(answers).length;
  const noCount = Object.values(answers).filter((v) => v === false).length;
  const isComplete = answeredCount === CHECKLIST_ITEMS.length;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30 mb-2">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Statutory Compliance Self-Audit</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Is Your Building 100% Form B Compliant?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Check your building's readiness under The Maharashtra Fire Prevention & Life Safety Measures Act 2006.
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 font-medium">Progress</span>
          <p className="text-lg font-bold text-orange-400">
            {answeredCount} / {CHECKLIST_ITEMS.length} Questions
          </p>
        </div>
      </div>

      {/* Questions list */}
      <div className="py-6 space-y-4">
        {CHECKLIST_ITEMS.map((item, idx) => {
          const ans = answers[item.id];
          return (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-700 text-slate-300 text-[11px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100">
                    {item.question}
                  </p>
                </div>
                <p className="text-[11px] text-slate-400 pl-7">
                  <span className="text-orange-400 font-medium">Standard: </span>
                  {item.law}
                </p>
              </div>

              <div className="flex items-center gap-2 pl-7 md:pl-0 shrink-0">
                <button
                  type="button"
                  onClick={() => handleSelect(item.id, true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    ans === true
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                      : "bg-slate-700/80 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  Yes, Compliant
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(item.id, false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    ans === false
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                      : "bg-slate-700/80 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  No / Unsure
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Result Card */}
      {isComplete && (
        <div className="mt-2 p-5 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-orange-500/40 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {noCount > 0 ? (
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                )}
                <h4 className="text-base font-bold text-white">
                  {noCount > 0
                    ? `Action Required: ${noCount} Potential Compliance Risks Detected`
                    : "Excellent! Your Systems Appear To Meet Core Standards"}
                </h4>
              </div>
              <p className="text-xs text-slate-300">
                {noCount > 0
                  ? "Non-compliance with Form B can lead to legal notices, disconnect of municipal services, or insurance claim rejection in fire incidents."
                  : "Keep your certification up to date with official bi-annual renewal via our licensed agency partnership."}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/918779513748?text=${encodeURIComponent(
                  `Hello G-Next, I completed your Form B audit check and found ${noCount} non-compliant points. Please advise on Form B certification.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-md shadow-orange-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Form B Assistance</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
