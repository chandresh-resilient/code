"use client";

import React, { useState } from "react";
import { Flame, Check, X, ShieldAlert, Sparkles } from "lucide-react";

interface ExtinguisherType {
  name: string;
  code: string;
  color: string;
  suitableFor: string[];
  unsuitableFor: string[];
  agent: string;
  bestUse: string;
}

const EXTINGUISHERS: ExtinguisherType[] = [
  {
    name: "ABC Dry Chemical Powder",
    code: "ABC Stored Pressure",
    color: "from-blue-600 to-indigo-700",
    suitableFor: ["Class A: Solid combustibles (Wood, Paper, Cloth)", "Class B: Flammable liquids (Petrol, Diesel, Paint)", "Class C: Flammable gases (LPG, Methane)", "Electrical Equipment (Up to 1000V)"],
    unsuitableFor: ["Cooking oils and deep fat fryers (Class F)"],
    agent: "Monoammonium Phosphate (MAP 50% - 90%)",
    bestUse: "Offices, Housing Society Corridors, Warehouses, Parking Lots",
  },
  {
    name: "Carbon Dioxide (CO2)",
    code: "CO2 Gas Discharge",
    color: "from-slate-700 to-slate-900",
    suitableFor: ["Class B: Flammable liquids", "Electrical & Sensitive Electronic Gear (Zero residue)"],
    unsuitableFor: ["Deep wood / paper fires (No blanketing effect)", "Metal fires"],
    agent: "Liquid CO2 under high pressure (55 bar)",
    bestUse: "Server Rooms, Electrical Panels, Substations, Laboratories",
  },
  {
    name: "Mechanical Foam (AFFF)",
    code: "Aqueous Film Forming Foam",
    color: "from-amber-600 to-yellow-600",
    suitableFor: ["Class A: Solid combustibles", "Class B: Liquid fuel spills (Blankets vapors)"],
    unsuitableFor: ["Live electrical gear (Conducts electricity)", "Kitchen cooking oils"],
    agent: "AFFF Concentrate (3% or 6%) + Water",
    bestUse: "Refueling Stations, Paint Booths, Chemical Storage, Workshops",
  },
  {
    name: "Clean Agent (HFC 236fa / FK-5-1-12)",
    code: "Eco-Friendly Gas",
    color: "from-emerald-600 to-teal-700",
    suitableFor: ["Class A, B, C and Sensitive Electronics", "Server racks, telecom, data centers without damage"],
    unsuitableFor: ["Outdoor open wind environments"],
    agent: "Clean Agent Gas (Zero Ozone Depletion)",
    bestUse: "Data Centers, Telecommunications, Luxury Interiors, Control Rooms",
  },
  {
    name: "Water Type (Gas Cartridge / Stored)",
    code: "Water Jet / Spray",
    color: "from-sky-600 to-blue-700",
    suitableFor: ["Class A: Deep-seated wood, paper, textile fires"],
    unsuitableFor: ["Live electrical equipment (Shock risk)", "Liquid petrol/oil fires (Spreads fire)"],
    agent: "Pressurized Water + Anti-corrosive additive",
    bestUse: "Textile Mills, Timber Yards, Paper Storage, Printing Presses",
  },
];

export default function ExtinguisherGuide() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeExt = EXTINGUISHERS[selectedIdx];

  return (
    <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-2">
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>Equipment Technical Reference</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Fire Extinguisher Selection & Refilling Matrix
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Understand which fire extinguisher is legally required and effective for your hazard type as per IS 2190:2010.
          </p>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200">
        {EXTINGUISHERS.map((ext, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={ext.name}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {ext.name}
            </button>
          );
        })}
      </div>

      {/* Selected Detail View */}
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5">
          <div className={`p-6 rounded-2xl bg-gradient-to-br ${activeExt.color} text-white shadow-lg space-y-4`}>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/20">
              {activeExt.code}
            </span>
            <h4 className="text-2xl font-black">{activeExt.name}</h4>
            <div className="space-y-1 text-xs text-white/90">
              <p className="font-semibold text-white/70">Extinguishing Agent:</p>
              <p className="font-mono text-sm font-bold">{activeExt.agent}</p>
            </div>
            <div className="pt-2 border-t border-white/20 text-xs text-white/90">
              <p className="font-semibold text-white/70">Best Deployment Environment:</p>
              <p className="font-medium mt-0.5">{activeExt.bestUse}</p>
            </div>
            <div className="pt-2">
              <a
                href={`https://wa.me/918779513748?text=${encodeURIComponent(
                  `Hello G-Next, I need supply / refilling / hydraulic testing for ${activeExt.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition-transform active:scale-95 shadow-md"
              >
                <span>Request Refill / H.P. Test Quote</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {/* Suitable For */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <h5 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Approved Hazard Classes (Safe To Use)
            </h5>
            <ul className="space-y-1.5 text-xs text-emerald-800">
              {activeExt.suitableFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Suitable For */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
            <h5 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <X className="w-4 h-4 text-rose-600" />
              Hazards To Avoid (Risk of Ineffectiveness or Shock)
            </h5>
            <ul className="space-y-1.5 text-xs text-rose-800">
              {activeExt.unsuitableFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[11px] text-slate-500 italic">
            * Note: All fire extinguishers maintained by G-Next undergo mandatory hydrostatic pressure (H.P.) testing and are tagged with next servicing due date compliant with IS 2190 standards.
          </p>
        </div>
      </div>
    </div>
  );
}
