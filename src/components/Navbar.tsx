"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GNextLogo from "./GNextLogo";
import {
  Phone,
  Mail,
  Download,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Flame,
  Calculator,
  Award,
  Users,
  Building2,
  FileCheck,
  Wrench,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
    setDesktopAboutOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  // About dropdown hover handlers
  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setDesktopServicesOpen(false);
    setDesktopAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setDesktopAboutOpen(false);
    }, 200);
  };

  // Services dropdown hover handlers
  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setDesktopAboutOpen(false);
    setDesktopServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
    }, 200);
  };

  const isAboutActive =
    pathname === "/about" ||
    pathname.startsWith("/about/") ||
    pathname === "/about/experts" ||
    pathname === "/about/experts/sandeep-chaubey";

  const isServicesActive =
    pathname === "/services" ||
    pathname === "/form-b-compliance" ||
    pathname === "/estimator";

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Notification & Emergency Bar (Single-line, non-breaking, neat on 14-15" laptops) */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-slate-800">
        <div className="w-full flex items-center justify-between gap-3 overflow-hidden">
          {/* Left: Licensed JV Badge & Tagline */}
          <div className="flex items-center gap-2.5 truncate">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-[11px] sm:text-xs border border-orange-500/30 whitespace-nowrap shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              Licensed JV: Vijay Laxmi Fire Services
            </span>
            <span className="hidden lg:inline text-slate-600 shrink-0">•</span>
            <span className="hidden lg:inline text-slate-300 font-medium text-xs truncate whitespace-nowrap">
              “WE SERVE TO SAVE” | GSTIN: <span className="font-mono text-white font-bold">{COMPANY_INFO.gstin}</span>
            </span>
          </div>

          {/* Right: Direct Hotlines, Email & Profile PDF */}
          <div className="flex items-center gap-3 text-xs shrink-0 whitespace-nowrap">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="flex items-center gap-1 text-white hover:text-orange-400 transition-colors font-bold whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-orange-500 shrink-0" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
            <span className="hidden xl:inline text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden xl:flex items-center gap-1 hover:text-orange-400 transition-colors text-slate-300 font-medium whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-orange-500 shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <a
              href="/gnext-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-orange-300 hover:text-white transition-all bg-orange-950/80 hover:bg-orange-900 px-2.5 py-0.5 rounded border border-orange-500/40 text-[11px] sm:text-xs whitespace-nowrap"
            >
              <Download className="w-3 h-3 text-orange-400" />
              <span>PDF Profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full px-4 sm:px-6 lg:px-8 xl:px-12 transition-all duration-200 ${
          isScrolled ? "py-2.5" : "py-3.5"
        }`}
      >
        <div className="w-full flex items-center justify-between gap-6">
          {/* Brand Logo (Compact on 14-15" screens) */}
          <div className="shrink-0">
            <GNextLogo variant="dark" />
          </div>

          {/* Desktop Nav Links (Streamlined 6 items: Spacious, no line wrapping, perfectly uncluttered) */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8">
            {/* 1. Home Link */}
            <Link
              href="/"
              className={`text-[15px] font-semibold transition-all duration-150 py-1.5 whitespace-nowrap relative ${
                pathname === "/"
                  ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                  : "text-slate-800 hover:text-orange-600"
              }`}
            >
              Home
            </Link>

            {/* 2. About Us Dropdown */}
            <div
              className="relative py-1.5"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                type="button"
                onClick={() => setDesktopAboutOpen(!desktopAboutOpen)}
                className={`inline-flex items-center gap-1 text-[15px] font-semibold transition-all duration-150 py-1 cursor-pointer whitespace-nowrap relative ${
                  isAboutActive
                    ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                    : "text-slate-800 hover:text-orange-600"
                }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    desktopAboutOpen ? "rotate-180 text-orange-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* About Us Dropdown Menu */}
              {desktopAboutOpen && (
                <div className="absolute top-full left-0 w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    {/* About Overview */}
                    <Link
                      href="/about"
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600">
                          About G-Next Overview
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                          Our &ldquo;One-Roof&rdquo; mission, statutory licenses &amp; JV.
                        </p>
                      </div>
                    </Link>

                    {/* Technical Experts Header */}
                    <div className="px-3 pt-2.5 pb-1 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        Our Technical Experts
                      </span>
                      <Link
                        href="/about/experts"
                        className="text-[11px] font-bold text-slate-500 hover:text-orange-600 hover:underline flex items-center gap-0.5"
                      >
                        <span>Full Board</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Sandeep Chaubey Card */}
                    <Link
                      href="/about/experts/sandeep-chaubey"
                      className="group flex items-start gap-3 p-2.5 rounded-xl bg-orange-50/70 hover:bg-orange-100/80 border border-orange-200 transition-all shadow-xs"
                    >
                      <img
                        src="/sandeep-chaubey.jpeg"
                        alt="Sandeep Chaubey"
                        className="w-10 h-10 rounded-xl object-cover object-top border border-orange-400 shrink-0 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-sm font-black text-slate-900 group-hover:text-orange-700 truncate">
                            Sandeep Chaubey
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-600 text-white font-bold shrink-0">
                            More Details
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-orange-700 mt-0.5">
                          Chief Fire Safety Consultant &amp; Auditor
                        </p>
                        <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-1 leading-tight">
                          NFSC Nagpur 16th Batch • Ex-Tata Motors &amp; DLF Head.
                        </p>
                      </div>
                    </Link>

                    {/* All Consultants */}
                    <Link
                      href="/about/experts"
                      className="group flex items-center justify-between p-2 px-3 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 hover:text-orange-600 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-orange-600" />
                        <span>All Senior Engineering Consultants</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Services & Compliance Dropdown (Merged: All Services, Form B, AMC Estimator) */}
            <div
              className="relative py-1.5"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                className={`inline-flex items-center gap-1 text-[15px] font-semibold transition-all duration-150 py-1 cursor-pointer whitespace-nowrap relative ${
                  isServicesActive
                    ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                    : "text-slate-800 hover:text-orange-600"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    desktopServicesOpen ? "rotate-180 text-orange-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Services Dropdown Menu */}
              {desktopServicesOpen && (
                <div className="absolute top-full left-0 w-[410px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    {/* All Services */}
                    <Link
                      href="/services"
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600">
                            All Fire Safety Solutions
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                            12+ Services
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                          AMC, Hydrant Testing, Sprinklers, Gas Suppression &amp; Manpower.
                        </p>
                      </div>
                    </Link>

                    {/* Form B Compliance */}
                    <Link
                      href="/form-b-compliance"
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border-t border-slate-100"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600">
                            Form B Statutory Compliance
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                            Mandatory JV
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                          Maharashtra Fire Services Bi-Annual certification &amp; Fire NOC.
                        </p>
                      </div>
                    </Link>

                    {/* AMC Cost Estimator */}
                    <Link
                      href="/estimator"
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border-t border-slate-100"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600">
                            Interactive AMC Estimator
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                            Excel Export
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                          Calculate instant society AMC pricing &amp; export detailed quote.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Clients & Sectors */}
            <Link
              href="/projects"
              className={`text-[15px] font-semibold transition-all duration-150 py-1.5 whitespace-nowrap relative ${
                pathname === "/projects"
                  ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                  : "text-slate-800 hover:text-orange-600"
              }`}
            >
              Clients &amp; Sectors
            </Link>

            {/* 5. Gallery */}
            <Link
              href="/gallery"
              className={`text-[15px] font-semibold transition-all duration-150 py-1.5 whitespace-nowrap relative ${
                pathname === "/gallery"
                  ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                  : "text-slate-800 hover:text-orange-600"
              }`}
            >
              Gallery
            </Link>

            {/* 6. Contact */}
            <Link
              href="/contact"
              className={`text-[15px] font-semibold transition-all duration-150 py-1.5 whitespace-nowrap relative ${
                pathname === "/contact"
                  ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                  : "text-slate-800 hover:text-orange-600"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Action CTA: ONLY visible on wide desktop (2xl+), completely removed on 14-15" laptops to eliminate clutter */}
          <div className="hidden 2xl:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:to-orange-700 px-5 py-2.5 rounded-xl shadow-md shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
            >
              <Flame className="w-4 h-4" />
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* Mobile Menu & Emergency Call Triggers */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="p-2.5 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-100 sm:hidden transition-colors"
              aria-label="Call Emergency Hotline"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-800 hover:text-orange-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-4 space-y-1.5 bg-white animate-in slide-in-from-top-2 duration-200">
            {/* Home */}
            <Link
              href="/"
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/"
                  ? "bg-orange-50 text-orange-600 font-bold"
                  : "text-slate-800 hover:bg-slate-50 hover:text-orange-600"
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>

            {/* About Us Accordion */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60">
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-colors ${
                  isAboutActive ? "text-orange-600 font-bold" : "text-slate-800"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>About Us &amp; Experts</span>
                  {isAboutActive && (
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                  )}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform ${
                    mobileAboutOpen ? "rotate-180 text-orange-600" : ""
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="p-2 space-y-1 bg-white border-t border-slate-200">
                  <Link
                    href="/about"
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <span>About G-Next Overview</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/about/experts"
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <span>Our Technical Experts Board</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/about/experts/sandeep-chaubey"
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-orange-50 text-orange-900 border border-orange-200 font-bold"
                  >
                    <img
                      src="/sandeep-chaubey.jpeg"
                      alt="Sandeep Chaubey"
                      className="w-9 h-9 rounded-lg object-cover object-top border border-orange-400 shrink-0 shadow-xs"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm text-slate-900">Sandeep Chaubey</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-orange-600 text-white">
                          More Details
                        </span>
                      </div>
                      <p className="text-xs text-orange-700 font-normal mt-0.5">
                        NFSC Nagpur | Ex-Tata Motors &amp; DLF
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Services & Compliance Accordion */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-colors ${
                  isServicesActive ? "text-orange-600 font-bold" : "text-slate-800"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>Services &amp; Compliance</span>
                  {isServicesActive && (
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                  )}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform ${
                    mobileServicesOpen ? "rotate-180 text-orange-600" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="p-2 space-y-1 bg-white border-t border-slate-200">
                  <Link
                    href="/services"
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <span>All 12+ Fire Safety Solutions</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/form-b-compliance"
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <span>Form B Statutory Certification</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/estimator"
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <span>AMC Cost Estimator (Excel Quote)</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              )}
            </div>

            {/* Clients */}
            <Link
              href="/projects"
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/projects"
                  ? "bg-orange-50 text-orange-600 font-bold"
                  : "text-slate-800 hover:bg-slate-50 hover:text-orange-600"
              }`}
            >
              <span>Clients &amp; Sectors</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>

            {/* Gallery */}
            <Link
              href="/gallery"
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/gallery"
                  ? "bg-orange-50 text-orange-600 font-bold"
                  : "text-slate-800 hover:bg-slate-50 hover:text-orange-600"
              }`}
            >
              <span>Photo Gallery</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                pathname === "/contact"
                  ? "bg-orange-50 text-orange-600 font-bold"
                  : "text-slate-800 hover:bg-slate-50 hover:text-orange-600"
              }`}
            >
              <span>Contact Us</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
              <Link
                href="/estimator"
                className="flex items-center justify-center gap-2 text-sm font-bold text-slate-800 border border-slate-300 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <Calculator className="w-4 h-4 text-orange-600" />
                <span>Estimator</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 py-3 rounded-xl shadow-sm transition-transform active:scale-95"
              >
                <Flame className="w-4 h-4" />
                <span>Get Quote</span>
              </Link>
            </div>

            <div className="pt-2 px-1 text-center">
              <a
                href="/gnext-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Download Official Firm Profile (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
