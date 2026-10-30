"use client";

import React, { useState } from "react";
import {
  Building2,
  ShieldCheck,
  Calculator,
  CheckCircle2,
  FileCheck,
  MessageCircle,
  Flame,
  ArrowRight,
  Phone,
  Check,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const BUILDING_TYPES = [
  { id: "residential", label: "Residential Housing Society", icon: "Building2", baseFactor: 1.0 },
  { id: "commercial", label: "Commercial Office / IT Park", icon: "Building", baseFactor: 1.2 },
  { id: "industrial", label: "Industrial / Manufacturing Plant", icon: "Factory", baseFactor: 1.4 },
  { id: "hospital", label: "Hospital / Healthcare Facility", icon: "HeartPulse", baseFactor: 1.3 },
  { id: "educational", label: "School / Educational Institute", icon: "GraduationCap", baseFactor: 1.1 },
  { id: "mall_hotel", label: "Mall / Hotel / Commercial Complex", icon: "Store", baseFactor: 1.35 },
];

const HEIGHT_TIERS = [
  { id: "tier1", label: "Low-Rise (Up to 15m / 1-4 Floors)", factor: 1.0, requiredSystems: "Extinguishers, Hose Reels, Yard Hydrant" },
  { id: "tier2", label: "Mid-Rise (15m - 24m / 5-8 Floors)", factor: 1.25, requiredSystems: "Wet Riser, Down Comer, Extinguishers, Hydrant, Manual Call Points" },
  { id: "tier3", label: "High-Rise (24m - 45m / 9-15 Floors)", factor: 1.6, requiredSystems: "Sprinkler System, Wet Riser, Auto Fire Alarm, Yard Hydrant, Refuge Area" },
  { id: "tier4", label: "Super High-Rise (45m+ / 15+ Floors)", factor: 2.1, requiredSystems: "Dual Fire Pumps, Addressable Alarms, Sprinklers on all floors, Smoke Extraction" },
];

const SERVICE_OPTIONS = [
  { id: "form_b", title: "Bi-Annual Form B Certification", desc: "Mandatory statutory compliance certificate via licensed agency JV", recommended: true },
  { id: "amc", title: "Comprehensive Fire Fighting AMC", desc: "Periodic pump maintenance, hydrant servicing, oiling, testing & logbook", recommended: true },
  { id: "refill", title: "Fire Extinguisher Refilling & H.P. Testing", desc: "Hydrostatic testing, agent recharging, nozzle servicing & tagging", recommended: true },
  { id: "drills", title: "Live Fire Drill & Evacuation Training", desc: "Simulated smoke evacuation, live fire putting out, QRT role-play", recommended: false },
  { id: "electrical_audit", title: "Electrical Safety Audit & Thermography", desc: "Earth pit testing (IS 3043) & panel hotspot inspection", recommended: false },
  { id: "firemen", title: "Trained Firemen / Pump Operator Deployment", desc: "24/7 or 12-hour dedicated certified fire personnel on site", recommended: false },
];

export default function EstimatorCalculator() {
  const [buildingType, setBuildingType] = useState("residential");
  const [heightTier, setHeightTier] = useState("tier3");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "form_b",
    "amc",
    "refill",
  ]);
  const [societyName, setSocietyName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("Pune / PCMC");

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const selectedBuildingObj = BUILDING_TYPES.find((b) => b.id === buildingType);
  const selectedHeightObj = HEIGHT_TIERS.find((h) => h.id === heightTier);

  // Generate WhatsApp Message
  const getWhatsAppMessage = () => {
    const servicesList = selectedServices
      .map((s) => SERVICE_OPTIONS.find((opt) => opt.id === s)?.title)
      .filter(Boolean)
      .join(", ");

    const text = `Hello G-Next Fire Safety Team!%0A%0AI used your online Cost & Scope Estimator:%0A• Premises: ${societyName || "Premises"} (${selectedBuildingObj?.label})%0A• Scale: ${selectedHeightObj?.label}%0A• Location: ${location}%0A• Services Required: ${servicesList}%0A• Contact: ${contactNumber || "Provided on call"}%0A%0APlease provide an official Form B / AMC proposal.`;
    return `https://wa.me/918779513748?text=${text}`;
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 text-white border-b border-orange-500/20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30 mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Scope & AMC Estimator</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black tracking-tight">
          Configure Your Property Fire Safety & Form B Plan
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
          Get an immediate customized compliance assessment, mandatory requirements checklist, and direct proposal from G-Next fire engineers.
        </p>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Building Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              1. Select Property / Occupancy Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {BUILDING_TYPES.map((type) => {
                const isSelected = buildingType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setBuildingType(type.id)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-orange-50/80 border-orange-500 text-orange-900 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    <span>{type.label}</span>
                    {isSelected && (
                      <span className="w-4 h-4 rounded-full bg-orange-600 text-white flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Building Scale / Floors */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              2. Select Building Height / Elevation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {HEIGHT_TIERS.map((tier) => {
                const isSelected = heightTier === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setHeightTier(tier.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-orange-50/80 border-orange-500 text-orange-900 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{tier.label}</span>
                      {isSelected && (
                        <span className="w-4 h-4 rounded-full bg-orange-600 text-white flex items-center justify-center text-[10px]">
                          ✓
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Required Solutions */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              3. Choose Solutions & Services Required
            </label>
            <div className="space-y-2">
              {SERVICE_OPTIONS.map((srv) => {
                const isChecked = selectedServices.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className={`p-3 rounded-xl border cursor-pointer flex items-start gap-3 transition-all ${
                      isChecked
                        ? "bg-orange-50/50 border-orange-500/70"
                        : "bg-white border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                        isChecked
                          ? "bg-orange-600 border-orange-600 text-white"
                          : "border-slate-400 bg-white"
                      }`}
                    >
                      {isChecked && "✓"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">
                          {srv.title}
                        </span>
                        {srv.recommended && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Quick Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Premises / Society Name
              </label>
              <input
                type="text"
                placeholder="e.g. Lodha Siena / ABC Towers"
                value={societyName}
                onChange={(e) => setSocietyName(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Contact Phone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Instant Assessment & Deliverables (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Custom Scope Summary
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                MFS Form B Ready
              </span>
            </div>

            <div>
              <h4 className="text-lg font-black text-white">
                {societyName || selectedBuildingObj?.label}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Classification: {selectedHeightObj?.label}
              </p>
            </div>

            {/* Mandatory Systems Checklist */}
            <div className="space-y-2 text-xs">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide">
                Mandatory Systems Required as per NBC / Maharashtra Fire Act:
              </span>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs leading-relaxed">
                {selectedHeightObj?.requiredSystems}
              </div>
            </div>

            {/* Selected Solutions */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide">
                Selected Scope ({selectedServices.length} Solutions):
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedServices.map((sid) => {
                  const srv = SERVICE_OPTIONS.find((s) => s.id === sid);
                  return (
                    <li key={sid} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{srv?.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Assurances */}
            <div className="p-3 rounded-xl bg-orange-950/40 border border-orange-500/30 text-xs text-orange-200 space-y-1">
              <p className="font-bold flex items-center gap-1.5 text-orange-300">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                Licensed Form B Guarantee
              </p>
              <p className="text-[11px] text-slate-300 leading-tight">
                Audited & certified under joint venture with Vijay Laxmi Fire Services (Maharashtra Fire Services Licensed Agency).
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Scope to WhatsApp for Official Quote</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Call Senior Fire Engineer Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
