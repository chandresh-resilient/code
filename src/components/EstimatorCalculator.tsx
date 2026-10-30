"use client";

import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
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
  Download,
  Copy,
  FileSpreadsheet,
  AlertCircle,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const BUILDING_TYPES = [
  { id: "residential", label: "Residential Housing Society", baseFactor: 1.0 },
  { id: "commercial", label: "Commercial Office / IT Park", baseFactor: 1.2 },
  { id: "industrial", label: "Industrial / Manufacturing Plant", baseFactor: 1.4 },
  { id: "hospital", label: "Hospital / Healthcare Facility", baseFactor: 1.3 },
  { id: "educational", label: "School / Educational Institute", baseFactor: 1.1 },
  { id: "mall_hotel", label: "Mall / Hotel / Commercial Complex", baseFactor: 1.35 },
];

const HEIGHT_TIERS = [
  { id: "tier1", label: "Low-Rise (Up to 15m / 1-4 Floors)", factor: 1.0, requiredSystems: "Extinguishers, Hose Reels, Yard Hydrant" },
  { id: "tier2", label: "Mid-Rise (15m - 24m / 5-8 Floors)", factor: 1.25, requiredSystems: "Wet Riser, Down Comer, Extinguishers, Hydrant, Manual Call Points" },
  { id: "tier3", label: "High-Rise (24m - 45m / 9-15 Floors)", factor: 1.6, requiredSystems: "Sprinkler System, Wet Riser, Auto Fire Alarm, Yard Hydrant, Refuge Area" },
  { id: "tier4", label: "Super High-Rise (45m+ / 15+ Floors)", factor: 2.1, requiredSystems: "Dual Fire Pumps, Addressable Alarms, Sprinklers on all floors, Smoke Extraction" },
];

const SERVICE_OPTIONS = [
  {
    id: "form_b",
    title: "Bi-Annual Form B Certification",
    category: "Statutory Compliance",
    desc: "Mandatory statutory compliance certificate via licensed agency JV (Vijay Laxmi Fire Services)",
    standard: "Maharashtra Fire Prevention Act 2006",
    recommended: true,
  },
  {
    id: "amc",
    title: "Comprehensive Fire Fighting AMC",
    category: "Periodic Maintenance",
    desc: "Quarterly pump maintenance, hydrant servicing, oiling, pressure testing & compliance logbook",
    standard: "NBC 2016 Part 4 & IS 15105",
    recommended: true,
  },
  {
    id: "refill",
    title: "Fire Extinguisher Refilling & H.P. Testing",
    category: "Equipment Servicing",
    desc: "Hydrostatic pressure testing, agent recharging, nozzle servicing & digital QR tagging",
    standard: "IS 2190:2010",
    recommended: true,
  },
  {
    id: "drills",
    title: "Live Fire Drill & Evacuation Training",
    category: "Training & Drills",
    desc: "Simulated smoke evacuation, live fire put-out training, and QRT / Fire Warden role-play",
    standard: "ISO 45001 & Factories Act",
    recommended: false,
  },
  {
    id: "electrical_audit",
    title: "Electrical Safety Audit & Thermography",
    category: "Technical Audits",
    desc: "Earth pit resistance testing (IS 3043) & infrared panel hotspot inspection",
    standard: "IS 3043 & IS 14489",
    recommended: false,
  },
  {
    id: "firemen",
    title: "Trained Firemen / Pump Operator Deployment",
    category: "Trained Manpower",
    desc: "24/7 or 12-hour dedicated certified fire personnel on site for routine maintenance and vigil",
    standard: "Maharashtra Fire Services Standards",
    recommended: false,
  },
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
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Validation State
  const [errors, setErrors] = useState<{
    societyName?: string;
    contactNumber?: string;
    services?: string;
  }>({});

  const societyInputRef = useRef<HTMLInputElement>(null);
  const contactInputRef = useRef<HTMLInputElement>(null);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const selectedBuildingObj = BUILDING_TYPES.find((b) => b.id === buildingType);
  const selectedHeightObj = HEIGHT_TIERS.find((h) => h.id === heightTier);

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: {
      societyName?: string;
      contactNumber?: string;
      services?: string;
    } = {};

    const cleanSociety = societyName.trim();
    if (!cleanSociety) {
      newErrors.societyName = "Premises / Society Name is required.";
    } else if (cleanSociety.length < 3) {
      newErrors.societyName = "Premises name must be at least 3 characters long.";
    }

    const cleanPhone = contactNumber.trim().replace(/[\s\-()]/g, "");
    if (!cleanPhone) {
      newErrors.contactNumber = "Contact phone number is required.";
    } else if (!/^[0-9+]{10,15}$/.test(cleanPhone)) {
      newErrors.contactNumber = "Please enter a valid 10-digit mobile number.";
    }

    if (selectedServices.length === 0) {
      newErrors.services = "Please select at least one fire safety solution.";
    }

    setErrors(newErrors);

    if (newErrors.societyName) {
      societyInputRef.current?.focus();
      return false;
    }
    if (newErrors.contactNumber) {
      contactInputRef.current?.focus();
      return false;
    }

    return Object.keys(newErrors).length === 0;
  };

  // Generate Reference ID & Date
  const refId = `GNEXT-EST-${(societyName.trim() || "PREMISES")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 4)
    .toUpperCase() || "SAFE"}-${new Date().getFullYear()}`;
  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Build Full Plain-Text Summary
  const getFullSummaryText = () => {
    const chosenServices = selectedServices
      .map((sid, idx) => {
        const srv = SERVICE_OPTIONS.find((s) => s.id === sid);
        return `${idx + 1}. ${srv?.title}\n   • Category: ${srv?.category}\n   • Scope: ${srv?.desc}\n   • Compliance: ${srv?.standard}`;
      })
      .join("\n\n");

    return `🔥 G-NEXT FIRE SAFETY SOLUTION SERVICES
Motto: “WE SERVE TO SAVE”
GSTIN: ${COMPANY_INFO.gstin}
JV Partner: ${COMPANY_INFO.jvPartner.name} (Form B Licensed Agency)
Web: ${COMPANY_INFO.domain}

=======================================
ESTIMATION & SCOPE SPECIFICATION SHEET
=======================================
Ref ID: ${refId}
Date: ${currentDate}

PREMISES & CLIENT INFORMATION:
• Premises Name: ${societyName.trim()}
• Contact Phone: ${contactNumber.trim()}
• Location: ${location}
• Occupancy Type: ${selectedBuildingObj?.label}
• Building Height/Scale: ${selectedHeightObj?.label}

MANDATORY SYSTEMS (NBC & MAHARASHTRA FIRE ACT):
${selectedHeightObj?.requiredSystems}

SELECTED SCOPE OF SERVICES (${selectedServices.length} Selected):
${chosenServices}

STATUTORY GUARANTEE:
• Bi-annual Form B certification under joint venture with Vijay Laxmi Fire Services (Registered Licensed Agency under Maharashtra Fire Services).
• Technical lead: Alumnus of National Fire Service College (NFSC) Nagpur with 20+ to 35+ years experience.

CONTACT FOR OFFICIAL PROPOSAL:
• Pune Head Office: ${COMPANY_INFO.puneAddress.address}
• Mumbai Branch: ${COMPANY_INFO.mumbaiAddress.address}
• Hotlines: ${COMPANY_INFO.phones.join(" / ")}
• Email: ${COMPANY_INFO.email}`;
  };

  // Handle WhatsApp action with validation
  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const servicesBulletList = selectedServices
      .map((sid) => {
        const s = SERVICE_OPTIONS.find((opt) => opt.id === sid);
        return `✅ *${s?.title}*\n   - ${s?.desc}`;
      })
      .join("\n");

    const message = `*G-NEXT FIRE SAFETY — ESTIMATION & SCOPE REQUEST*
Ref: ${refId} | Date: ${currentDate}

🏢 *PREMISES DETAILS:*
• *Name:* ${societyName.trim()}
• *Contact:* ${contactNumber.trim()}
• *Location:* ${location}
• *Occupancy:* ${selectedBuildingObj?.label}
• *Building Scale:* ${selectedHeightObj?.label}

📋 *MANDATORY REQUIRED SYSTEMS:*
${selectedHeightObj?.requiredSystems}

🛠️ *SELECTED SCOPE (${selectedServices.length} Services):*
${servicesBulletList}

📄 *NOTE:*
An official Excel Estimation Sheet (.xlsx) has also been generated for our committee. Please review and provide your formal Form B / AMC proposal.

Thank you!
“WE SERVE TO SAVE”`;

    const url = `https://wa.me/918779513748?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Generate & Download Real Excel (.xlsx) Spreadsheet with validation
  const handleDownloadExcel = () => {
    if (!validateForm()) {
      return;
    }

    try {
      setIsExporting(true);
      const wb = XLSX.utils.book_new();

      const summaryData = [
        ["G-NEXT FIRE SAFETY SOLUTION SERVICES"],
        ["“WE SERVE TO SAVE” — A Complete Fire Safety Solution Services under One Single Roof"],
        ["GSTIN: " + COMPANY_INFO.gstin, "Est. 2024", "Domain: " + COMPANY_INFO.domain],
        ["Official JV Partner: Vijay Laxmi Fire Services (Maharashtra Fire Services Licensed Agency)"],
        [],
        ["FIRE SAFETY ESTIMATION & SCOPE SPECIFICATION"],
        ["Reference ID", refId],
        ["Generated Date", currentDate],
        [],
        ["1. CLIENT & PREMISES INFORMATION"],
        ["Premises / Society Name", societyName.trim()],
        ["Contact Person Phone", contactNumber.trim()],
        ["Premises Location", location],
        ["Occupancy Classification", selectedBuildingObj?.label],
        ["Building Elevation / Height Scale", selectedHeightObj?.label],
        [],
        ["2. MANDATORY STATUTORY FIRE SYSTEMS (NBC 2016 & MAHARASHTRA FIRE ACT)"],
        ["Legally Required Installations", selectedHeightObj?.requiredSystems],
        [],
        ["3. SELECTED SCOPE OF SERVICES (" + selectedServices.length + " Items Chosen)"],
        ["S.No", "Service Name", "Category", "Scope & Deliverables", "Governing Standard", "Selected Status"],
      ];

      selectedServices.forEach((sid, idx) => {
        const s = SERVICE_OPTIONS.find((opt) => opt.id === sid);
        summaryData.push([
          (idx + 1).toString(),
          s?.title || "",
          s?.category || "",
          s?.desc || "",
          s?.standard || "",
          "Selected by Client",
        ]);
      });

      summaryData.push(
        [],
        ["4. STATUTORY COMPLIANCE & LEGAL NOTICE"],
        ["Form B Requirement", "Mandatory bi-annual submission in January & July under Maharashtra Fire Prevention Act 2006"],
        ["Certification Authority", "Issued by Licensed Agency Vijay Laxmi Fire Services in formal JV with G-Next"],
        ["Technical Leadership", "Headed by National Fire Service College (NFSC) Nagpur alumni (20+ to 35+ yrs experience)"],
        [],
        ["5. CONTACT & REGISTERED OFFICES"],
        ["Pune Head Office", COMPANY_INFO.puneAddress.address],
        ["Mumbai Branch Office", COMPANY_INFO.mumbaiAddress.address],
        ["Emergency Mobile Hotlines", COMPANY_INFO.phones.join(" / ")],
        ["Official Email", COMPANY_INFO.email]
      );

      const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);

      wsSummary["!cols"] = [
        { wch: 8 },
        { wch: 38 },
        { wch: 24 },
        { wch: 60 },
        { wch: 32 },
        { wch: 20 },
      ];

      XLSX.utils.book_append_sheet(wb, wsSummary, "Fire Safety Scope & Estimator");

      const cleanFileName = `GNext_FireSafety_Estimate_${societyName
        .trim()
        .replace(/[^a-zA-Z0-9]/g, "_")
        .slice(0, 20)}_${new Date().toISOString().slice(0, 10)}.xlsx`;

      XLSX.writeFile(wb, cleanFileName);
    } catch (err) {
      console.error("Excel generation error:", err);
    } finally {
      setIsExporting(false);
    }
  };

  // Copy full summary to clipboard with validation
  const handleCopyClipboard = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      await navigator.clipboard.writeText(getFullSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 text-white border-b border-orange-500/20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs sm:text-sm border border-orange-500/30 mb-3">
              <Calculator className="w-4 h-4" />
              <span>Interactive Scope &amp; AMC Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
              Configure Your Property Fire Safety &amp; Form B Plan
            </h3>
            <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Get an immediate customized compliance assessment, mandatory requirements checklist, official Excel spreadsheet export, and direct proposal from G-Next fire engineers.
            </p>
          </div>
          <div className="text-left sm:text-right p-3.5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
            <span className="text-xs text-orange-400 font-bold block uppercase tracking-wider">Estimate Ref ID</span>
            <span className="text-sm sm:text-base font-mono font-bold text-white">{refId}</span>
          </div>
        </div>
      </div>

      <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Form Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-7">
          {/* Step 1: Building Type */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
              1. Select Property / Occupancy Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BUILDING_TYPES.map((type) => {
                const isSelected = buildingType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setBuildingType(type.id)}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between text-sm font-semibold transition-all ${
                      isSelected
                        ? "bg-orange-50/90 border-orange-500 text-orange-950 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    <span>{type.label}</span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs">
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
            <label className="block text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
              2. Select Building Height / Elevation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HEIGHT_TIERS.map((tier) => {
                const isSelected = heightTier === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setHeightTier(tier.id)}
                    className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all ${
                      isSelected
                        ? "bg-orange-50/90 border-orange-500 text-orange-950 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{tier.label}</span>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs">
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
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-800">
                3. Choose Solutions &amp; Services Required ({selectedServices.length} Selected)
              </label>
              {errors.services && (
                <span className="text-xs font-bold text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.services}
                </span>
              )}
            </div>

            <div className="space-y-2.5">
              {SERVICE_OPTIONS.map((srv) => {
                const isChecked = selectedServices.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-start gap-3.5 transition-all ${
                      isChecked
                        ? "bg-orange-50/60 border-orange-500 shadow-xs"
                        : "bg-white border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border text-xs font-bold shrink-0 ${
                        isChecked
                          ? "bg-orange-600 border-orange-600 text-white"
                          : "border-slate-400 bg-white"
                      }`}
                    >
                      {isChecked && "✓"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-slate-900">
                          {srv.title}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 px-2 py-0.5 rounded bg-slate-100">
                          {srv.category}
                        </span>
                        {srv.recommended && (
                          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {srv.desc}
                      </p>
                      <p className="text-[11px] text-orange-700 font-semibold mt-1">
                        Compliance: {srv.standard}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Quick Details with Validation Highlighting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                <span>Premises / Society Name <span className="text-red-600">*</span></span>
              </label>
              <input
                ref={societyInputRef}
                type="text"
                placeholder="e.g. Lodha Siena / ABC Towers"
                value={societyName}
                onChange={(e) => {
                  setSocietyName(e.target.value);
                  if (errors.societyName) {
                    setErrors((prev) => ({ ...prev, societyName: undefined }));
                  }
                }}
                className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none transition-colors ${
                  errors.societyName
                    ? "border-red-500 bg-red-50/50 focus:border-red-600"
                    : "border-slate-300 focus:border-orange-500 bg-slate-50"
                }`}
              />
              {errors.societyName && (
                <p className="text-xs font-semibold text-red-600 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.societyName}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                <span>Contact Phone / WhatsApp <span className="text-red-600">*</span></span>
              </label>
              <input
                ref={contactInputRef}
                type="tel"
                placeholder="e.g. 9876543210"
                value={contactNumber}
                onChange={(e) => {
                  setContactNumber(e.target.value);
                  if (errors.contactNumber) {
                    setErrors((prev) => ({ ...prev, contactNumber: undefined }));
                  }
                }}
                className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none transition-colors ${
                  errors.contactNumber
                    ? "border-red-500 bg-red-50/50 focus:border-red-600"
                    : "border-slate-300 focus:border-orange-500 bg-slate-50"
                }`}
              />
              {errors.contactNumber && (
                <p className="text-xs font-semibold text-red-600 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.contactNumber}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Instant Assessment, Excel Export & WhatsApp (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
                Custom Scope Summary
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                MFS Form B Ready
              </span>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                {societyName.trim() || selectedBuildingObj?.label}
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Classification: {selectedHeightObj?.label}
              </p>
            </div>

            {/* Mandatory Systems Checklist */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                Mandatory Systems Required as per NBC / Maharashtra Fire Act:
              </span>
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-200 text-sm leading-relaxed">
                {selectedHeightObj?.requiredSystems}
              </div>
            </div>

            {/* Selected Solutions */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                Selected Scope ({selectedServices.length} Services):
              </span>
              <ul className="space-y-2 text-sm text-slate-300">
                {selectedServices.map((sid) => {
                  const srv = SERVICE_OPTIONS.find((s) => s.id === sid);
                  return (
                    <li key={sid} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">{srv?.title}</span>
                        <span className="text-xs text-slate-400 block">{srv?.standard}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Validation Notice Box if fields missing */}
            {(errors.societyName || errors.contactNumber) && (
              <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs sm:text-sm space-y-1 animate-in fade-in">
                <p className="font-bold flex items-center gap-1.5 text-red-300">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  Required Information Missing
                </p>
                <p>Please enter your Premises Name and Contact Phone before exporting or submitting.</p>
              </div>
            )}

            {/* Excel & WhatsApp Action Box */}
            <div className="p-4 rounded-2xl bg-orange-950/40 border border-orange-500/30 text-sm text-orange-200 space-y-2">
              <p className="font-bold flex items-center gap-2 text-orange-300 text-sm">
                <FileSpreadsheet className="w-5 h-5 text-orange-400" />
                Comprehensive Export &amp; Full Configuration
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Download an official itemized <strong>Excel Sheet (.xlsx)</strong> containing all configurations, and send the full unabridged scope directly to our WhatsApp without any text truncation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* Button 1: Download Official Excel Spreadsheet */}
              <button
                type="button"
                onClick={handleDownloadExcel}
                disabled={isExporting}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Download Official Excel Scope (.xlsx)</span>
              </button>

              {/* Button 2: Send Full Scope to WhatsApp */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-green-600/30 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Complete Scope to WhatsApp</span>
              </button>

              {/* Button 3: Copy Formatted Scope to Clipboard */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyClipboard}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Scope Copied! ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-orange-400" />
                      <span>Copy Full Scope</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call Engineer</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-400 text-center italic mt-1">
                Tip: After clicking download, you can attach the saved Excel sheet directly into WhatsApp for instant committee quotation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
