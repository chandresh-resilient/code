"use client";

import React, { useState, useEffect } from "react";
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
  Flame,
  Calculator,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {NAV_LINKS.map((link) => {
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
            {NAV_LINKS.map((link) => {
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
