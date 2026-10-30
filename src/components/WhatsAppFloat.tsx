"use client";

import React, { useState } from "react";
import { MessageCircle, X, ShieldAlert, Flame } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const cleanPhone = "918779513748";
  const defaultMessage = encodeURIComponent(
    "Hello G-Next Fire Safety, I would like to enquire about Fire Safety AMC / Form B Certification / Site Audit for our building."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-white shadow-2xl border border-slate-200 p-4 text-slate-800 animate-in slide-in-from-bottom-2 fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-900">G-Next Fire Safety Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-600 space-y-1.5">
            <p className="font-semibold text-slate-800">
              Need immediate assistance?
            </p>
            <p>
              Connect directly with our senior fire engineers for Form B audits, society AMC quotes, or mock drills.
            </p>
          </div>

          <a
            href={`https://wa.me/${cleanPhone}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/30 transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
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
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
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
