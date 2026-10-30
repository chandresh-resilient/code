"use client";

import React, { useState } from "react";
import { MessageCircle, X, ShieldAlert, Flame, AlertCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [premises, setPremises] = useState("");
  const [personName, setPersonName] = useState("");
  const [need, setNeed] = useState("Form B / AMC Consultation");
  const [error, setError] = useState("");

  const cleanPhone = "918779513748";

  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!premises.trim()) {
      setError("Please enter your Premises / Society name.");
      return;
    }
    if (premises.trim().length < 3) {
      setError("Premises name must be at least 3 characters.");
      return;
    }

    setError("");

    const message = `Hello G-Next Fire Safety Team,

🏢 Premises / Society: ${premises.trim()}
👤 Contact Person: ${personName.trim() || "Not specified"}
🛠️ Requirement: ${need}

Please connect with me to discuss our fire safety and Form B compliance requirements.

Thank you!
“WE SERVE TO SAVE”`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble with Input Validations */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-3xl bg-white shadow-2xl border border-slate-200 p-5 text-slate-800 animate-in slide-in-from-bottom-2 fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-bold text-slate-900">G-Next Fire Safety Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-md cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleChat} className="py-3 space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Premises / Society Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Lodha Siena / ABC Towers"
                value={premises}
                onChange={(e) => {
                  setPremises(e.target.value);
                  if (error) setError("");
                }}
                className={`w-full text-xs px-3 py-2 rounded-xl border focus:outline-none ${
                  error ? "border-red-500 bg-red-50/50" : "border-slate-300 focus:border-orange-500 bg-slate-50"
                }`}
              />
              {error && (
                <p className="text-[11px] font-semibold text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{error}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Amit Patil"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:border-orange-500 bg-slate-50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                I Need Assistance With:
              </label>
              <select
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:border-orange-500 bg-slate-50 focus:outline-none"
              >
                <option value="Form B Certification">Form B Statutory Certification</option>
                <option value="Fire AMC Periodic Maintenance">Fire AMC Periodic Maintenance</option>
                <option value="Fire Extinguisher Refilling">Fire Extinguisher Refilling</option>
                <option value="Fire Mock Drill / Evacuation">Fire Mock Drill &amp; Evacuation</option>
                <option value="Complete Fire Safety Audit">Complete Fire Safety Audit</option>
              </select>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/30 transition-transform active:scale-95 cursor-pointer mt-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div className="hidden md:flex items-center bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700 backdrop-blur-sm animate-bounce">
            <span>Instant Fire Safety Chat</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp Chat"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 text-[9px] text-white font-bold items-center justify-center">
              1
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
