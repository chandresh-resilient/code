"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Download,
  MessageCircle,
  CheckCircle2,
  Building2,
  Award,
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/data/companyData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    facilityName: "",
    service: "Form B Statutory Certification",
    location: "Pune / PCMC",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppDirectLink = () => {
    const text = `Hello G-Next Fire Safety,%0A%0AMy Name: ${formData.name}%0APremises: ${formData.facilityName}%0APhone: ${formData.phone}%0AService Required: ${formData.service}%0ALocation: ${formData.location}%0ANote: ${formData.message || "Please provide quotation & survey date"}`;
    return `https://wa.me/918779513748?text=${text}`;
  };

  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Emergency & Consultation Desk</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Connect With G-Next Fire Safety
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Book a complimentary site survey, request Form B certification, or discuss tailored AMC protection for your residential society or industrial plant.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/gnext-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors shadow-md shadow-orange-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Firm Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Cols: Office Addresses, Phone & Statutory */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Our Locations
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">
                  Head Office &amp; Branch
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Serving Pune, PCMC, PMRDA, MIDC, Mumbai, and surrounding industrial corridors.
                </p>
              </div>

              {/* Pune Head Office Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wide">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{COMPANY_INFO.puneAddress.title}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Avon Vista, Balewadi
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {COMPANY_INFO.puneAddress.address}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Coverage: Pune / PCMC / PMRDA</span>
                  <a
                    href="https://maps.google.com/?q=Avon+Vista+Balewadi+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    View Map &rarr;
                  </a>
                </div>
              </div>

              {/* Mumbai Branch Office Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wide">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{COMPANY_INFO.mumbaiAddress.title}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  L&amp;T Emerald Isle, Powai
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {COMPANY_INFO.mumbaiAddress.address}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Coverage: Mumbai / Thane / Navi Mumbai</span>
                  <a
                    href="https://maps.google.com/?q=L%26T+Emerald+Isle+Powai+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    View Map &rarr;
                  </a>
                </div>
              </div>

              {/* Direct Hotlines */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                  Direct Contact Information
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-[10px]">Mobile Hotlines (24/7)</p>
                      <p className="font-bold text-white text-sm">
                        <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-orange-400">
                          {COMPANY_INFO.phones[0]}
                        </a>
                        {" / "}
                        <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-orange-400">
                          {COMPANY_INFO.phones[1]}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-[10px]">Official Email</p>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-bold text-white text-xs hover:text-orange-400"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-orange-500 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-[10px]">Proprietor &amp; GSTIN</p>
                      <p className="font-semibold text-white">
                        {COMPANY_INFO.proprietor} | {COMPANY_INFO.gstin}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Inquiry / Site Survey Request Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-2">
                    <Send className="w-3.5 h-3.5 text-orange-600" />
                    <span>Instant Proposal Request</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Book a Free Site Survey or Request Quotation
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out the form below to receive a formal technical proposal and Form B compliance roadmap.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-emerald-950">
                        Thank You, {formData.name}!
                      </h4>
                      <p className="text-xs text-emerald-800 mt-1 max-w-md mx-auto">
                        Your inquiry for {formData.facilityName || "your premises"} has been recorded. Our senior fire engineer will review your requirements and call you shortly.
                      </p>
                    </div>
                    <div className="pt-2">
                      <a
                        href={getWhatsAppDirectLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-md"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Continue to WhatsApp with this Data</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. name@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Premises / Society Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Lodha Siena / Galaxy Industrial"
                          value={formData.facilityName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              facilityName: e.target.value,
                            })
                          }
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Primary Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
                        >
                          <option value="Form B Statutory Certification">
                            Form B Statutory Certification
                          </option>
                          <option value="Annual Maintenance Contract (AMC)">
                            Annual Maintenance Contract (AMC)
                          </option>
                          <option value="Fire Safety Audit & Risk Assessment">
                            Fire Safety Audit &amp; Risk Assessment
                          </option>
                          <option value="Fire Extinguisher Refilling & Testing">
                            Fire Extinguisher Refilling &amp; Testing
                          </option>
                          <option value="Fire Mock Drill & Evacuation Training">
                            Fire Mock Drill &amp; Evacuation Training
                          </option>
                          <option value="Electrical Safety Audit (IS 3043)">
                            Electrical Safety Audit (IS 3043)
                          </option>
                          <option value="Trained Firemen Deployment">
                            Trained Firemen Deployment
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          City / Region
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                          }
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Any Specific Requirements or Existing Issues
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Form B renewal due this month, fire pump needs servicing, need fire drill for 100 residents..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 bg-slate-50"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3 px-5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-600/30 transition-transform active:scale-95 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Site Survey Request</span>
                      </button>

                      <a
                        href={getWhatsAppDirectLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 transition-transform active:scale-95 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Direct via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
