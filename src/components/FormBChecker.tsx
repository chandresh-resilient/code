"use client";

import React, { useState, useRef } from "react";
import {
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  AlertCircle,
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
  const [premisesName, setPremisesName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [errors, setErrors] = useState<{ premisesName?: string; contactPhone?: string }>({});

  const premisesInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const answeredCount = Object.keys(answers).length;
  const noCount = Object.values(answers).filter((v) => v === false).length;
  const isComplete = answeredCount === CHECKLIST_ITEMS.length;

  const validateInputs = (): boolean => {
    const newErrors: { premisesName?: string; contactPhone?: string } = {};

    if (!premisesName.trim()) {
      newErrors.premisesName = "Please enter your Premises / Society name.";
    } else if (premisesName.trim().length < 3) {
      newErrors.premisesName = "Premises name must be at least 3 characters.";
    }

    const cleanPhone = contactPhone.trim().replace(/[\s\-()]/g, "");
    if (!cleanPhone) {
      newErrors.contactPhone = "Please enter your contact phone number.";
    } else if (!/^[0-9+]{10,15}$/.test(cleanPhone)) {
      newErrors.contactPhone = "Please enter a valid 10-digit phone number.";
    }

    setErrors(newErrors);

    if (newErrors.premisesName) {
      premisesInputRef.current?.focus();
      return false;
    }
    if (newErrors.contactPhone) {
      phoneInputRef.current?.focus();
      return false;
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppAssistance = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }

    const failedQuestions = CHECKLIST_ITEMS.filter((item) => answers[item.id] === false)
      .map((item, idx) => `  ${idx + 1}. ${item.question}`)
      .join("\n");

    const message = `*G-NEXT FIRE SAFETY — FORM B AUDIT RESULT & INQUIRY*

🏢 *PREMISES:* ${premisesName.trim()}
📞 *CONTACT:* ${contactPhone.trim()}
📋 *AUDIT SUMMARY:*
• Questions Answered: ${answeredCount}/${CHECKLIST_ITEMS.length}
• Potential Compliance Risks Identified: ${noCount}

${
  noCount > 0
    ? `⚠️ *IDENTIFIED DEFICIENCIES:*\n${failedQuestions}\n`
    : "✅ All standard self-check points marked compliant."
}

Please provide Form B inspection schedule, rectification assistance, and formal certification quote through Vijay Laxmi Fire Services JV.

Thank you!
“WE SERVE TO SAVE”`;

    const url = `https://wa.me/918779513748?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs sm:text-sm border border-orange-500/30 mb-3">
            <FileCheck className="w-4 h-4" />
            <span>Statutory Compliance Self-Audit</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            Is Your Building 100% Form B Compliant?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-1.5">
            Check your building&apos;s readiness under The Maharashtra Fire Prevention &amp; Life Safety Measures Act 2006.
          </p>
        </div>
        <div className="text-left sm:text-right shrink-0">
          <span className="text-xs sm:text-sm text-slate-400 font-medium">Audit Progress</span>
          <p className="text-xl sm:text-2xl font-black text-orange-400">
            {answeredCount} / {CHECKLIST_ITEMS.length} Questions
          </p>
        </div>
      </div>

      {/* Questions list */}
      <div className="py-8 space-y-5">
        {CHECKLIST_ITEMS.map((item, idx) => {
          const ans = answers[item.id];
          return (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-700 text-orange-400 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.question}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 pl-9">
                  <span className="text-orange-400 font-bold">Standard: </span>
                  {item.law}
                </p>
              </div>

              <div className="flex items-center gap-3 pl-9 md:pl-0 shrink-0">
                <button
                  type="button"
                  onClick={() => handleSelect(item.id, true)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    ans === true
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                      : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  }`}
                >
                  Yes, Compliant
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(item.id, false)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    ans === false
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                      : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  }`}
                >
                  No / Unsure
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Result Card with Required Premises & Phone Validations */}
      {isComplete && (
        <div className="mt-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-800 to-slate-900 border border-orange-500/40 animate-in fade-in slide-in-from-bottom-2 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {noCount > 0 ? (
                <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
              ) : (
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              )}
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {noCount > 0
                  ? `Action Required: ${noCount} Potential Compliance Risks Detected`
                  : "Excellent! Your Systems Appear To Meet Core Standards"}
              </h4>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              {noCount > 0
                ? "Non-compliance with Form B can lead to municipal notices, disconnect of utility services, or insurance claim repudiation in fire incidents. Let our licensed JV engineers help rectify deficiencies and issue your official certificate."
                : "Keep your certification up to date with official bi-annual renewal via our licensed agency partnership with Vijay Laxmi Fire Services."}
            </p>
          </div>

          {/* Input details with validation */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-700 space-y-4">
            <p className="text-sm font-bold text-orange-400 uppercase tracking-wide">
              Enter Premises Information for Official Form B Proposal
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1">
                  Premises / Society Name <span className="text-red-400">*</span>
                </label>
                <input
                  ref={premisesInputRef}
                  type="text"
                  placeholder="e.g. Lodha Siena Housing Society"
                  value={premisesName}
                  onChange={(e) => {
                    setPremisesName(e.target.value);
                    if (errors.premisesName) {
                      setErrors((prev) => ({ ...prev, premisesName: undefined }));
                    }
                  }}
                  className={`w-full text-sm px-4 py-2.5 rounded-xl border focus:outline-none bg-slate-900 text-white ${
                    errors.premisesName ? "border-red-500 bg-red-950/40" : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.premisesName && (
                  <p className="text-xs font-semibold text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.premisesName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1">
                  Contact Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  ref={phoneInputRef}
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={contactPhone}
                  onChange={(e) => {
                    setContactPhone(e.target.value);
                    if (errors.contactPhone) {
                      setErrors((prev) => ({ ...prev, contactPhone: undefined }));
                    }
                  }}
                  className={`w-full text-sm px-4 py-2.5 rounded-xl border focus:outline-none bg-slate-900 text-white ${
                    errors.contactPhone ? "border-red-500 bg-red-950/40" : "border-slate-700 focus:border-orange-500"
                  }`}
                />
                {errors.contactPhone && (
                  <p className="text-xs font-semibold text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.contactPhone}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleWhatsAppAssistance}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold shadow-md shadow-orange-600/30 transition-transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Audit Result to WhatsApp for Form B Proposal</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="text-xs sm:text-sm text-slate-400 hover:text-white flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Or Call: {COMPANY_INFO.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
