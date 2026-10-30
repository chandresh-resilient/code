"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
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
  AlertCircle,
  Navigation,
  ExternalLink,
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

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    facilityName?: string;
    email?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [activeMapTab, setActiveMapTab] = useState<"pune" | "mumbai">("pune");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const facilityInputRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: {
      name?: string;
      phone?: string;
      facilityName?: string;
      email?: string;
    } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.trim().replace(/[\s\-()]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+]{10,15}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.facilityName.trim()) {
      newErrors.facilityName = "Premises / Society name is required.";
    } else if (formData.facilityName.trim().length < 3) {
      newErrors.facilityName = "Premises name must be at least 3 characters.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);

    if (newErrors.name) {
      nameInputRef.current?.focus();
      return false;
    }
    if (newErrors.phone) {
      phoneInputRef.current?.focus();
      return false;
    }
    if (newErrors.facilityName) {
      facilityInputRef.current?.focus();
      return false;
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const message = `*G-NEXT FIRE SAFETY — SITE SURVEY / AUDIT INQUIRY*

👤 *CONTACT PERSON:*
• Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim()}
• Email: ${formData.email.trim() || "Not provided"}

🏢 *PREMISES DETAILS:*
• Premises / Society: ${formData.facilityName.trim()}
• Location: ${formData.location}

🛠️ *SERVICE REQUIRED:*
• ${formData.service}

📝 *CLIENT NOTE / REQUIREMENTS:*
${formData.message.trim() || "Please arrange site survey and provide official quotation."}

Thank you!
“WE SERVE TO SAVE”`;

    const url = `https://wa.me/918779513748?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleSendOfficialEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const subject = encodeURIComponent(
      `[Official Fire Safety RFQ] ${formData.service} - ${formData.facilityName.trim()}`
    );
    const body = encodeURIComponent(
      `Dear G-Next Fire Safety Technical Board,\n\nWe request an official proposal and survey for our facility:\n\n• Premises Name: ${formData.facilityName.trim()}\n• Contact Person: ${formData.name.trim()}\n• Phone: ${formData.phone.trim()}\n• Location: ${formData.location}\n• Service Required: ${formData.service}\n\nClient Note:\n${formData.message.trim() || "Please provide commercial proposal and Form B inspection schedule."}\n\nSincerely,\n${formData.name.trim()}`
    );

    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  // Google Maps URLs
  const puneMapEmbed = "https://maps.google.com/maps?q=Avon+Vista+Balewadi+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const mumbaiMapEmbed = "https://maps.google.com/maps?q=L%26T+Emerald+Isle+Powai+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="flex flex-col gap-0">
      {/* HEADER HERO */}
      <section className="bg-slate-950 text-white py-20 md:py-28 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs sm:text-sm border border-orange-500/30">
              <Phone className="w-4 h-4" />
              <span>Direct Emergency &amp; Consultation Desk</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              Connect With G-Next Fire Safety
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              Book a complimentary site survey, request Form B certification, or discuss tailored AMC protection for your residential society or industrial plant.
            </p>
            <div className="pt-3 flex flex-wrap gap-3.5">
              <a
                href="/gnext-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-colors shadow-md shadow-orange-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Firm Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Cols: Office Addresses, Sandeep's Direct Desk, Phone & Statutory */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                  Our Locations &amp; Direct Desks
                </span>
                <h2 className="text-3xl font-black text-slate-900 mt-1.5">
                  Head Office &amp; Engineering Team
                </h2>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Serving Pune, PCMC, PMRDA, MIDC, Mumbai, and surrounding industrial corridors.
                </p>
              </div>

              {/* SPECIAL SPOTLIGHT: Sandeep Chaubey Direct Desk */}
              <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white border border-orange-500/40 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    Technical Leadership Desk
                  </span>
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/sandeep-chaubey.jpeg"
                    alt="Sandeep Chaubey"
                    className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-orange-500 shadow-md shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Sandeep Chaubey
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-orange-400">
                      Fire Safety Consultant / Auditor | NFSC Nagpur Alumnus
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Direct consultation for industrial risk audits, high-rise society advisory, and complex fire engineering tenders.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-sm">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="text-xs text-slate-400 font-medium">Direct Email:</span>
                    <a
                      href="mailto:gnextfiresafety@gmail.com?subject=[Direct Technical Inquiry for Sandeep Chaubey]"
                      className="text-white font-bold hover:text-orange-400 text-xs sm:text-sm"
                    >
                      gnextfiresafety@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="text-xs text-slate-400 font-medium">Direct Phone:</span>
                    <a
                      href="tel:+918779513748"
                      className="text-white font-bold hover:text-orange-400 text-xs sm:text-sm"
                    >
                      +91 8779513748
                    </a>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href="mailto:gnextfiresafety@gmail.com?subject=[Direct Technical Inquiry for Sandeep Chaubey]"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Sandeep Chaubey Directly</span>
                  </a>
                  <Link
                    href="/about/experts/sandeep-chaubey"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
                  >
                    <span>View Full Profile &amp; Credentials &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Pune Head Office Card */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3.5">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{COMPANY_INFO.puneAddress.title}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                  Avon Vista, Balewadi
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.puneAddress.address}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span>Coverage: Pune / PCMC / PMRDA</span>
                  <button
                    onClick={() => setActiveMapTab("pune")}
                    className="text-orange-600 font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Show on Map</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Mumbai Branch Office Card */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3.5">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{COMPANY_INFO.mumbaiAddress.title}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                  L&amp;T Emerald Isle, Powai
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.mumbaiAddress.address}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span>Coverage: Mumbai / Thane / Navi Mumbai</span>
                  <button
                    onClick={() => setActiveMapTab("mumbai")}
                    className="text-orange-600 font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Show on Map</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Direct Hotlines */}
              <div className="p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-5">
                <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                  Direct Contact Information
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3.5">
                    <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wide">Mobile Hotlines (24/7)</p>
                      <p className="font-bold text-white text-base sm:text-lg mt-0.5">
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

                  <div className="flex items-center gap-3.5">
                    <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wide">Official Email</p>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-bold text-white text-sm sm:text-base hover:text-orange-400"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Award className="w-5 h-5 text-orange-500 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wide">Proprietor &amp; GSTIN</p>
                      <p className="font-semibold text-white text-sm">
                        {COMPANY_INFO.proprietor} | <span className="font-mono text-orange-400">{COMPANY_INFO.gstin}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Form & Interactive Map */}
            <div className="lg:col-span-7 space-y-8">
              {/* Request Form */}
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-7">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 font-bold text-xs sm:text-sm mb-2.5">
                    <Send className="w-4 h-4 text-orange-600" />
                    <span>Instant Proposal Request</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Book a Free Site Survey or Request Quotation
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Fill out the form below to receive a formal technical proposal and Form B compliance roadmap via official email or WhatsApp.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-emerald-950">
                        Thank You, {formData.name}!
                      </h4>
                      <p className="text-sm text-emerald-800 mt-1.5 max-w-md mx-auto leading-relaxed">
                        Your inquiry for {formData.facilityName} has been recorded. Our senior fire engineer will review your requirements and respond promptly.
                      </p>
                    </div>
                    <div className="pt-3 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-md cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleSendOfficialEmail}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-md cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-orange-400" />
                        <span>Send via Email Client</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          ref={nameInputRef}
                          type="text"
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) {
                              setErrors((prev) => ({ ...prev, name: undefined }));
                            }
                          }}
                          className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none transition-colors ${
                            errors.name
                              ? "border-red-500 bg-red-50/50 focus:border-red-600"
                              : "border-slate-300 focus:border-orange-500 bg-slate-50"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs font-semibold text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          Contact Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          ref={phoneInputRef}
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) {
                              setErrors((prev) => ({ ...prev, phone: undefined }));
                            }
                          }}
                          className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none transition-colors ${
                            errors.phone
                              ? "border-red-500 bg-red-50/50 focus:border-red-600"
                              : "border-slate-300 focus:border-orange-500 bg-slate-50"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs font-semibold text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. name@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) {
                              setErrors((prev) => ({ ...prev, email: undefined }));
                            }
                          }}
                          className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none transition-colors ${
                            errors.email
                              ? "border-red-500 bg-red-50/50 focus:border-red-600"
                              : "border-slate-300 focus:border-orange-500 bg-slate-50"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs font-semibold text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          Premises / Society Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          ref={facilityInputRef}
                          type="text"
                          placeholder="e.g. Lodha Siena / Galaxy Industrial"
                          value={formData.facilityName}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              facilityName: e.target.value,
                            });
                            if (errors.facilityName) {
                              setErrors((prev) => ({ ...prev, facilityName: undefined }));
                            }
                          }}
                          className={`w-full text-sm px-4 py-3 rounded-xl border focus:outline-none transition-colors ${
                            errors.facilityName
                              ? "border-red-500 bg-red-50/50 focus:border-red-600"
                              : "border-slate-300 focus:border-orange-500 bg-slate-50"
                          }`}
                        />
                        {errors.facilityName && (
                          <p className="text-xs font-semibold text-red-600 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.facilityName}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          Primary Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:outline-none bg-slate-50"
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
                        <label className="block text-sm font-bold text-slate-800 mb-1.5">
                          City / Region
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                          }
                          className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:outline-none bg-slate-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-1.5">
                        Any Specific Requirements or Existing Issues
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Form B renewal due this month, fire pump needs servicing, need fire drill for 100 residents..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:outline-none bg-slate-50"
                      />
                    </div>

                    {/* Both WhatsApp and Email Actions Prominently Available */}
                    <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-600/30 transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Send Direct via WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendOfficialEmail}
                        className="py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-md shadow-slate-900/30 transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Mail className="w-5 h-5 text-orange-400" />
                        <span>Submit RFP via Email</span>
                      </button>
                    </div>

                    <div className="pt-1 text-center">
                      <button
                        type="submit"
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline cursor-pointer"
                      >
                        Or record request on page without opening apps
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* INTERACTIVE GOOGLE MAPS SECTION */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Office Navigation &amp; Directions
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mt-0.5">
                      Find Our Offices on Google Maps
                    </h4>
                  </div>

                  {/* Tabs for Pune / Mumbai */}
                  <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setActiveMapTab("pune")}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeMapTab === "pune"
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      Pune Head Office (Avon Vista)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveMapTab("mumbai")}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeMapTab === "mumbai"
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      Mumbai (Powai)
                    </button>
                  </div>
                </div>

                {/* Map Iframe */}
                <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
                  <iframe
                    title={activeMapTab === "pune" ? "Pune Head Office Map" : "Mumbai Office Map"}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={activeMapTab === "pune" ? puneMapEmbed : mumbaiMapEmbed}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                  <p>
                    <strong className="text-slate-900">Current View:</strong>{" "}
                    {activeMapTab === "pune"
                      ? "Avon Vista, Patil Nagar, Balewadi, Pune - 411045"
                      : "L&T Emerald Isle, Powai, Mumbai - 400076"}
                  </p>
                  <a
                    href={
                      activeMapTab === "pune"
                        ? "https://maps.google.com/?q=Avon+Vista+Balewadi+Pune"
                        : "https://maps.google.com/?q=L%26T+Emerald+Isle+Powai+Mumbai"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-orange-600 hover:text-orange-700 shrink-0"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
