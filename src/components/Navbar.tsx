"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GNextLogo from "./GNextLogo";
import {
  Phone,
  Mail,
  MapPin,
  Download,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  Flame,
  FileCheck,
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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Notification & Emergency Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Licensed JV Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-medium text-[11px] border border-orange-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              JV with Vijay Laxmi Fire Services (Form B Licensed Agency)
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <span className="hidden lg:inline text-slate-400 text-[11px]">
              “WE SERVE TO SAVE” | GSTIN: {COMPANY_INFO.gstin}
            </span>
          </div>

          {/* Right: Direct Hotline & Profile PDF */}
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-500" />
              <span className="font-semibold text-white">{COMPANY_INFO.phones[0]}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-orange-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-orange-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <a
              href="/gnext-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-orange-400 hover:text-orange-300 transition-colors bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/30"
            >
              <Download className="w-3 h-3" />
              <span>Download Profile PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-200 ${
          isScrolled ? "py-2.5" : "py-3.5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <GNextLogo variant="dark" />

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-150 py-1 ${
                    isActive
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-slate-700 hover:text-orange-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/estimator"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-orange-600 border border-slate-200 hover:border-orange-500/40 rounded-lg px-3 py-2 transition-all bg-slate-50 hover:bg-orange-50"
            >
              <Calculator className="w-3.5 h-3.5 text-orange-600" />
              <span>AMC Estimator</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:to-orange-700 px-4 py-2.5 rounded-lg shadow-sm shadow-orange-500/30 transition-all hover:scale-[1.02]"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Request Form B / Audit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="p-2 rounded-lg bg-orange-50 text-orange-600 sm:hidden"
              aria-label="Call Emergency Line"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-orange-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-100 pb-4 space-y-1 bg-white animate-in slide-in-from-top-2 duration-200">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-600 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-orange-600"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <Link
                href="/estimator"
                className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 border border-slate-200 py-2.5 rounded-lg bg-slate-50"
              >
                <Calculator className="w-3.5 h-3.5 text-orange-600" />
                <span>Estimator</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 py-2.5 rounded-lg"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Get Quote</span>
              </Link>
            </div>

            <div className="pt-2 px-1 text-center">
              <a
                href="/gnext-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <Download className="w-3.5 h-3.5 text-orange-600" />
                <span>Download Official Firm Profile (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
