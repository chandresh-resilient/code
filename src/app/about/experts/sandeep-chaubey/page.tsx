"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Building2,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Mail,
  Phone,
  Download,
  Flame,
  ArrowRight,
  Sparkles,
  Users,
  HardHat,
  BadgeCheck,
  ChevronRight,
  AlertCircle,
  MessageCircle,
  FileText,
  MapPin,
  Calendar,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY_INFO, EXPERTS } from "@/data/companyData";

export default function SandeepChaubeyPage() {
  const sandeep = EXPERTS.find((e) => e.id === "sandeep-chaubey")!;

  // Form state for direct consultation booking
  const [formData, setFormData] = useState({
    facilityName: "",
    contactPerson: "",
    phone: "",
    facilityType: "Residential High-Rise Society",
    serviceNeeded: "Bi-Annual Form B & Comprehensive Fire Audit",
    notes: "",
  });

  const [errors, setErrors] = useState<{
    facilityName?: string;
    contactPerson?: string;
    phone?: string;
  }>({});

  const [formSubmitted, setFormSubmitted] = useState(false);

  const facilityInputRef = useRef<HTMLInputElement>(null);
  const contactInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const newErrors: {
      facilityName?: string;
      contactPerson?: string;
      phone?: string;
    } = {};

    if (!formData.facilityName.trim()) {
      newErrors.facilityName = "Please enter your Society / Facility name.";
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Please enter the contact person's name.";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact phone number is required.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    setErrors(newErrors);

    if (newErrors.facilityName) {
      facilityInputRef.current?.focus();
      return false;
    }
    if (newErrors.contactPerson) {
      contactInputRef.current?.focus();
      return false;
    }
    if (newErrors.phone) {
      phoneInputRef.current?.focus();
      return false;
    }

    return true;
  };

  const handleSendEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(
      `[Direct Technical Consultation Request] Sandeep Chaubey - ${formData.facilityName.trim()}`
    );
    const body = encodeURIComponent(
      `Dear Sandeep Chaubey & Technical Board,\n\nWe request an executive technical fire safety consultation / site audit for our premises:\n\n• Premises / Organization: ${formData.facilityName.trim()}\n• Contact Person: ${formData.contactPerson.trim()}\n• Direct Mobile / Phone: ${formData.phone.trim()}\n• Facility Classification: ${formData.facilityType}\n• Primary Scope: ${formData.serviceNeeded}\n\nSpecific Requirements / Notes:\n${formData.notes.trim() || "Please contact us to schedule an introductory discussion or site inspection."}\n\nSincerely,\n${formData.contactPerson.trim()}`
    );

    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const text = `*DIRECT CONSULTATION REQUEST FOR SANDEEP CHAUBEY*\n----------------------------------------\n*Facility:* ${formData.facilityName.trim()}\n*Contact Person:* ${formData.contactPerson.trim()}\n*Phone:* ${formData.phone.trim()}\n*Type:* ${formData.facilityType}\n*Service:* ${formData.serviceNeeded}\n*Notes:* ${formData.notes.trim() || "Requesting technical consultation"}\n----------------------------------------\n_Submitted via G-Next Executive Portal_`;

    const url = `https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setFormSubmitted(true);
  };

  const corporateTenures = [
    {
      company: "Tata Motors Limited",
      role: "Former Regional Head",
      period: "Automobile & Heavy Manufacturing Hubs",
      achievement:
        "Architect of standard Emergency Management Plans (EMP) for Tata Motors. Recipient of multiple prestigious TATA Motors Safety Excellence Awards for zero-loss safety culture.",
      highlights: [
        "Authored plant-wide Emergency Management Plans",
        "Multiple TATA Motors Safety Excellence Awards",
        "Governed high-hazard automated paint & assembly lines",
      ],
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    {
      company: "ITC Limited",
      role: "Former Admin & Security Head",
      period: "FMCG, Packaging & Conglomerate Operations",
      achievement:
        "Supervised corporate administration, statutory life safety compliance, and physical security management across sprawling multi-facility corporate estates.",
      highlights: [
        "Multi-location corporate facility governance",
        "Integrated security and fire hazard prevention",
        "Strict adherence to Indian safety statutes",
      ],
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      company: "DLF Limited",
      role: "Former Fire Safety Head",
      period: "Commercial Mega-Malls & High-Rise Towers",
      achievement:
        "Headed fire protection, suppression engineering, riser automation, and life-safety evacuation protocols for India's premier commercial and residential high-rise infrastructures.",
      highlights: [
        "Engineered fire suppression for landmark skyscrapers",
        "Complex atrium smoke extraction and sprinkler hydraulics",
        "High-density commercial evacuation management",
      ],
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    },
  ];

  const credentialsGrid = [
    {
      title: "NFSC Nagpur Alumnus",
      subtitle: "16th Batch Sub-Officer (Fire Engineering)",
      desc: "Graduated from the National Fire Service College (NFSC), Nagpur — the premier national fire engineering institution under the Ministry of Home Affairs, Government of India.",
      icon: GraduationCap,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "ISO 45001:2018 Lead Auditor",
      subtitle: "Global OHS Standard",
      desc: "Certified lead auditor for Occupational Health and Safety Management Systems. Performs rigorous forensic gap audits ensuring total compliance and hazard elimination.",
      icon: BadgeCheck,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "₹16+ Crore Operational Budgets",
      subtitle: "Large-Scale Executive Governance",
      desc: "Managed multi-location corporate operations, multi-crore capital fire fighting infrastructure budgets, and commanded extensive technical and firefighting contract workforces.",
      icon: Briefcase,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    },
    {
      title: "CE Worldwide Emerging Leader",
      subtitle: "Distinguished Safety Honor",
      desc: "Conferred the prestigious 'Emerging Leader Award' by CE Worldwide, Mumbai, in recognition of outstanding leadership and transformative life safety engineering.",
      icon: Award,
      accent: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    },
  ];

  const keyAdvisoryServices = [
    {
      title: "Bi-Annual Form B Statutory Certification",
      desc: "Through G-Next's licensed Joint Venture with Vijay Laxmi Fire Services, Sandeep leads end-to-end technical pre-audits, rectification oversight, and bi-annual Form B certification under the Maharashtra Fire Prevention & Life Safety Measures Act 2006.",
    },
    {
      title: "High-Rise Residential Society AMC Governance",
      desc: "Guiding housing societies across Pune, PCMC, PMRDA, and Mumbai (e.g. Lodha, Avon Vista) to eliminate pump failures, unstick jammed hydrants, and protect thousands of residents from fire fatalities.",
    },
    {
      title: "Industrial & Manufacturing Fire Risk Audits",
      desc: "Forensic audits covering combustible dust, chemical hazards, electrical switchgears, transformer bays, and sprinkler coverage conforming to IS 14489, NBC 2016 Part 4, and Factory Act codes.",
    },
    {
      title: "Trained Firemen & Mock Evacuation Protocols",
      desc: "Developing bespoke emergency evacuation drills, warden training modules, and deploying disciplined on-site trained fire fighting crew for high-occupancy establishments.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 bg-white">
      {/* BREADCRUMB NAVIGATION */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs sm:text-sm py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/about/experts" className="hover:text-white transition-colors">
            Our Experts
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-orange-400 font-semibold">Sandeep Chaubey</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 8 Cols: Bio & Badges */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-wider border border-orange-500/30">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  Technical Leadership Showcase
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  NFSC Nagpur 16th Batch
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                  <BadgeCheck className="w-4 h-4 text-emerald-400" />
                  ISO 45001 Lead Auditor
                </span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                  Sandeep Chaubey
                </h1>
                <p className="text-lg sm:text-2xl font-bold text-orange-400 mt-2">
                  Chief Fire Safety Consultant &amp; Auditor
                </p>
                <p className="text-sm sm:text-base text-slate-400 mt-1">
                  Ex-Tata Motors Regional Head | Ex-ITC Admin &amp; Security Head | Ex-DLF Fire Safety Head
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {sandeep.summary} With over two decades of front-line engineering experience across India's largest automotive hubs, luxury conglomerates, and landmark high-rise skyscrapers, Sandeep advises high-value housing societies, factory owners, and corporate boards on zero-compromise fire safety systems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-orange-600/30 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Book Consultation with Sandeep</span>
                </a>
                <a
                  href={`https://wa.me/91${COMPANY_INFO.phones[0]}?text=${encodeURIComponent(
                    "Hello Sandeep Chaubey Sir, I am contacting you through your G-Next executive profile to discuss a fire safety audit / Form B compliance for our premises."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-emerald-600/25 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
                <a
                  href="/gnext-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 transition-colors"
                >
                  <Download className="w-4 h-4 text-orange-400" />
                  <span>Download Profile PDF</span>
                </a>
              </div>
            </div>

            {/* Right 4 Cols: Quick Executive Fact Card with Sandeep's Portrait */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden space-y-0">
                {/* Executive Portrait Frame */}
                <div className="relative aspect-[4/5] w-full bg-slate-950 overflow-hidden group">
                  <img
                    src="/sandeep-chaubey.jpeg"
                    alt="Sandeep Chaubey - Chief Fire Safety Consultant & Auditor"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 text-amber-300 font-bold text-xs border border-amber-400/30 backdrop-blur-md">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      NFSC Nagpur
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-black text-white">Sandeep Chaubey</h3>
                    <p className="text-xs font-semibold text-orange-400">Chief Consultant &amp; Auditor</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Experience</span>
                      <span className="font-bold text-white">20+ Years Front-Line</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Alma Mater</span>
                      <span className="font-bold text-orange-300">NFSC Nagpur (MHA)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Lead Auditor</span>
                      <span className="font-bold text-emerald-400">ISO 45001:2018</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Corporate Tenures</span>
                      <span className="font-bold text-white">Tata Motors | ITC | DLF</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">Direct Hotline</span>
                      <a
                        href={`tel:${COMPANY_INFO.phones[0]}`}
                        className="font-bold text-orange-400 hover:underline"
                      >
                        +91 {COMPANY_INFO.phones[0]}
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=[Direct Inquiry for Sandeep Chaubey]&body=Hello Sandeep Sir,\n\nWe would like to consult with you regarding our premises fire safety.\n\nOrganization:\nPhone:\nRequirement:\n`}
                      className="w-full py-3 px-4 rounded-xl bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span>Direct Email: {COMPANY_INFO.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE DISTINCTIONS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentialsGrid.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-orange-500/40 hover:shadow-md transition-all space-y-3"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${cred.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {cred.title}
                  </h3>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {cred.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORPORATE PEDIGREE & PROVEN TRACK RECORD */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
              Corporate Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              Leading Safety for India&apos;s Corporate Giants
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Before steering G-Next, Sandeep Chaubey spearheaded life safety and risk mitigation for household conglomerate brands across manufacturing, commercial real estate, and consumer goods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corporateTenures.map((tenure, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between space-y-6 hover:border-orange-500/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${tenure.badgeColor}`}>
                      {tenure.period}
                    </span>
                    <Building2 className="w-5 h-5 text-slate-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white">{tenure.company}</h3>
                    <p className="text-sm font-bold text-orange-400 mt-1">{tenure.role}</p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {tenure.achievement}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800 text-xs sm:text-sm">
                    {tenure.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400">
                  <span>Executive Fire Protection Governance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAL QUALIFICATIONS & EXPERTISE MATRIX */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 6 Cols: Qualifications & Credentials */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider">
                  Academic &amp; Statutory Background
                </span>
                <h3 className="text-3xl font-black text-slate-900 mt-2">
                  Government Certifications &amp; Diplomas
                </h3>
              </div>

              <div className="space-y-4">
                {sandeep.qualification.map((q, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{q}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Recognized by State Technical Boards &amp; National Safety Councils
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notable Industry Awards & Credentials */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-orange-500/30 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>Industry Honors &amp; Leadership Citations</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {sandeep.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 6 Cols: Advisory Disciplines */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider">
                  Technical Advisory Disciplines
                </span>
                <h3 className="text-3xl font-black text-slate-900 mt-2">
                  What Sandeep Chaubey Solves for Your Facility
                </h3>
              </div>

              <div className="space-y-5">
                {keyAdvisoryServices.map((srv, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-orange-500/40 transition-all"
                  >
                    <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                      <Flame className="w-5 h-5 text-orange-600 shrink-0" />
                      <span>{srv.title}</span>
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed pl-7">
                      {srv.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core Competency Tag Cloud */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Core Engineering Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sandeep.coreCompetencies.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-800 text-xs sm:text-sm font-bold border border-orange-200"
                    >
                      ✓ {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE CONSULTATION & RFP INQUIRY FORM */}
      <section id="consultation-form" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl sm:rounded-4xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-orange-500/30 shadow-2xl space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-bold text-orange-400 uppercase tracking-wider px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                Direct Technical Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Request an Executive Review with Sandeep Chaubey
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Fill out your premises details below. You can submit via official email for formal society/corporate documentation or connect directly via WhatsApp.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">
                  Consultation Request Dispatched!
                </h3>
                <p className="text-sm text-emerald-200 max-w-md mx-auto">
                  Thank you! Sandeep Chaubey and the G-Next Technical Board have received your inquiry and will revert with an audit plan within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Facility Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-200">
                      Premises / Society Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      ref={facilityInputRef}
                      type="text"
                      placeholder="e.g. Avon Vista CHS / Tata Plant"
                      value={formData.facilityName}
                      onChange={(e) => {
                        setFormData({ ...formData, facilityName: e.target.value });
                        if (errors.facilityName) setErrors({ ...errors, facilityName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 ${
                        errors.facilityName
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-700 focus:ring-orange-500"
                      }`}
                    />
                    {errors.facilityName && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.facilityName}</span>
                      </p>
                    )}
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-200">
                      Contact Person &amp; Designation <span className="text-red-400">*</span>
                    </label>
                    <input
                      ref={contactInputRef}
                      type="text"
                      placeholder="e.g. Rajesh Kumar (Secretary / Plant Head)"
                      value={formData.contactPerson}
                      onChange={(e) => {
                        setFormData({ ...formData, contactPerson: e.target.value });
                        if (errors.contactPerson) setErrors({ ...errors, contactPerson: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 ${
                        errors.contactPerson
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-700 focus:ring-orange-500"
                      }`}
                    />
                    {errors.contactPerson && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.contactPerson}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-200">
                      Direct Mobile / Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      placeholder="e.g. 98220 12345"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-700 focus:ring-orange-500"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Facility Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-200">
                      Facility Classification
                    </label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Residential High-Rise Society">Residential High-Rise Society</option>
                      <option value="Commercial Mall / Multiplex">Commercial Mall / Multiplex</option>
                      <option value="IT Park / Corporate Tech Center">IT Park / Corporate Tech Center</option>
                      <option value="Manufacturing / MIDC Industrial Plant">Manufacturing / MIDC Industrial Plant</option>
                      <option value="Hospital / Healthcare Facility">Hospital / Healthcare Facility</option>
                      <option value="Hotel / Hospitality Complex">Hotel / Hospitality Complex</option>
                    </select>
                  </div>
                </div>

                {/* Service Needed */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Bi-Annual Form B & Comprehensive Fire Audit">Bi-Annual Form B &amp; Comprehensive Fire Audit</option>
                    <option value="Comprehensive Fire AMC Contract Review">Comprehensive Fire AMC Contract Review</option>
                    <option value="Forensic Electrical Safety Audit (IS 3043)">Forensic Electrical Safety Audit (IS 3043)</option>
                    <option value="Trained Firemen & Security Force Deployment">Trained Firemen &amp; Security Force Deployment</option>
                    <option value="Fire Pump Automation & Hydrant Rectification">Fire Pump Automation &amp; Hydrant Rectification</option>
                    <option value="Executive High-Hazard Consultation">Executive High-Hazard Consultation</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    Premises Specifications / Remarks (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details such as number of floors, towers, past Form B status, or key safety concerns..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Dual Submission Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="py-4 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Official Email RFP</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Connect via WhatsApp</span>
                  </button>
                </div>

                <div className="text-center pt-2 text-xs text-slate-400">
                  <span>
                    Direct Technical Board Desk: <a href={`mailto:${COMPANY_INFO.email}`} className="text-orange-400 hover:underline">{COMPANY_INFO.email}</a> • Phone: <a href={`tel:${COMPANY_INFO.phones[0]}`} className="text-slate-200 hover:underline">+91 {COMPANY_INFO.phones[0]}</a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MEET OTHER TECHNICAL BOARD EXPERTS */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Full Technical Board
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Explore Other Senior Consultants at G-Next
              </h3>
            </div>
            <Link
              href="/about/experts"
              className="inline-flex items-center gap-1.5 font-bold text-orange-600 hover:text-orange-700 text-sm"
            >
              <span>View All Experts Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERTS.filter((e) => e.id !== "sandeep-chaubey").map((expert) => (
              <div
                key={expert.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                    {expert.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{expert.name}</h4>
                    <p className="text-xs font-semibold text-orange-600">{expert.title}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {expert.summary}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/about/experts#${expert.id}`}
                    className="text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Credentials</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
