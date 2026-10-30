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
  GraduationCap,
  Building2,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  // About Us is handled separately with a dropdown / submenu
  { name: "Services", href: "/services" },
  { name: "Form B Compliance", href: "/form-b-compliance" },
  { name: "Clients & Sectors", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Cost Estimator", href: "/estimator" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    setDesktopDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 200);
  };

  const isAboutActive =
    pathname === "/about" ||
    pathname.startsWith("/about/") ||
    pathname === "/about/experts" ||
    pathname === "/about/experts/sandeep-chaubey";

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Notification & Emergency Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs sm:text-[13px] py-2.5 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-slate-800">
        <div className="w-full flex flex-wrap items-center justify-between gap-3">
          {/* Left: Licensed JV Badge & Tagline */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
              JV with Vijay Laxmi Fire Services (Maharashtra Fire Services Licensed Agency)
            </span>
            <span className="hidden xl:inline text-slate-600">•</span>
            <span className="hidden xl:inline text-slate-300 font-medium text-xs sm:text-[13px]">
              “WE SERVE TO SAVE” | GSTIN: <span className="font-mono text-white font-bold">{COMPANY_INFO.gstin}</span>
            </span>
          </div>

          {/* Right: Direct Hotlines, Email & Profile PDF */}
          <div className="flex items-center gap-4 text-xs sm:text-[13px]">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="text-white font-bold">{COMPANY_INFO.phones[0]}</span>
              <span className="text-slate-600">/</span>
              <span className="hidden sm:inline text-slate-200 hover:text-orange-400">{COMPANY_INFO.phones[1]}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-orange-400 transition-colors text-slate-200 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <a
              href="/gnext-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-orange-300 hover:text-white transition-all bg-gradient-to-r from-orange-950 to-red-950 hover:from-orange-800 hover:to-red-800 px-3 py-1 rounded-lg border border-orange-500/40 shadow-sm text-xs"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>Download PDF Profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full px-4 sm:px-8 lg:px-12 xl:px-16 transition-all duration-200 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="w-full flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="shrink-0">
            <GNextLogo variant="dark" />
          </div>

          {/* Desktop Nav Links (Clean, larger, and highly legible) */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {/* Home Link */}
            <Link
              href="/"
              className={`text-[15px] 2xl:text-[16px] font-semibold transition-all duration-150 py-1.5 relative ${
                pathname === "/"
                  ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                  : "text-slate-800 hover:text-orange-600"
              }`}
            >
              Home
            </Link>

            {/* About Us With Dropdown Submenu */}
            <div
              className="relative py-1.5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className={`inline-flex items-center gap-1 text-[15px] 2xl:text-[16px] font-semibold transition-all duration-150 py-1 cursor-pointer relative ${
                  isAboutActive
                    ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                    : "text-slate-800 hover:text-orange-600"
                }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    desktopDropdownOpen ? "rotate-180 text-orange-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Mega-Styled Submenu Dropdown */}
              {desktopDropdownOpen && (
                <div className="absolute top-full left-0 w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    {/* 1. About G-Next Overview */}
                    <Link
                      href="/about"
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600">
                            About G-Next Overview
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                            Company
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                          Our &ldquo;One-Roof&rdquo; mission, Form B licensed agency JV &amp; statutory credentials.
                        </p>
                      </div>
                    </Link>

                    {/* Divider with Sub-Menu Header */}
                    <div className="px-3 pt-3 pb-1 border-t border-slate-100 flex items-center justify-between">
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

                    {/* 2. Sandeep Chaubey Executive Profile (Highlighted) */}
                    <Link
                      href="/about/experts/sandeep-chaubey"
                      className="group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 hover:from-orange-100 hover:via-amber-100 hover:to-orange-100 border border-orange-200 transition-all shadow-xs"
                    >
                      <img
                        src="/sandeep-chaubey.jpeg"
                        alt="Sandeep Chaubey"
                        className="w-11 h-11 rounded-xl object-cover object-top border border-orange-400 shrink-0 shadow-sm"
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
                        <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-tight">
                          NFSC Nagpur 16th Batch • Ex-Tata Motors Regional Head • Ex-DLF Fire Safety Head • ISO 45001 Lead Auditor.
                        </p>
                      </div>
                    </Link>

                    {/* 3. Engineering Board Directory Link */}
                    <Link
                      href="/about/experts"
                      className="group flex items-center justify-between p-2.5 px-3 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 hover:text-orange-600 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-orange-600" />
                        <span>All Senior Consultants &amp; Electrical Legal Experts</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Main Nav Links */}
            {NAV_LINKS.filter((l) => l.name !== "Home").map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] 2xl:text-[16px] font-semibold transition-all duration-150 py-1.5 relative ${
                    isActive
                      ? "text-orange-600 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:rounded-full"
                      : "text-slate-800 hover:text-orange-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/estimator"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-orange-600 border border-slate-300 hover:border-orange-500 rounded-xl px-4 py-2.5 transition-all bg-slate-50 hover:bg-orange-50/60 shadow-xs"
            >
              <Calculator className="w-4 h-4 text-orange-600" />
              <span>AMC Estimator</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:to-orange-700 px-5 py-2.5 rounded-xl shadow-md shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Flame className="w-4 h-4" />
              <span>Request Form B / Audit</span>
            </Link>
          </div>

          {/* Mobile Menu & Call Triggers */}
          <div className="flex xl:hidden items-center gap-2">
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
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-100 pb-4 space-y-1.5 bg-white animate-in slide-in-from-top-2 duration-200">
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

                  {/* Sandeep Chaubey Highlighted */}
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

            {/* Other Links */}
            {NAV_LINKS.filter((l) => l.name !== "Home").map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-600 font-bold"
                      : "text-slate-800 hover:bg-slate-50 hover:text-orange-600"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </Link>
              );
            })}

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
                <Download className="w-4 h-4 text-orange-600" />
                <span>Download Official Firm Profile (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
