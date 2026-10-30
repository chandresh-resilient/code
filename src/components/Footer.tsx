import React from "react";
import Link from "next/link";
import GNextLogo from "./GNextLogo";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  FileText,
  Download,
  ArrowRight,
  ExternalLink,
  Flame,
  Award,
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner: Statutory & Joint Venture Assurance */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-orange-950/40 to-slate-900 border border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-600/20 text-orange-400 border border-orange-500/30 shrink-0">
              <ShieldCheck className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-orange-400">
                Official Joint Venture & Statutory Compliance
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Form B Certification Partner with Vijay Laxmi Fire Services
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Registered licensed agency under Maharashtra Fire Services. 100% compliant under The Maharashtra Fire Prevention & Life Safety Measures Act 2006.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/gnext-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-all"
            >
              <Download className="w-4 h-4 text-orange-400" />
              <span>Download PDF Profile</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md shadow-orange-600/30"
            >
              <Flame className="w-4 h-4" />
              <span>Book Site Audit</span>
            </Link>
          </div>
        </div>

        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: About G-Next */}
          <div className="space-y-4">
            <GNextLogo variant="light" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Established in 2024 with a unique motto of serving esteemed clients in Fire Detection, Prevention, Protection, AMC, and trained manpower deployment. Headed by an alumnus of National Fire Service College (NFSC) Nagpur.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-orange-400 font-semibold text-[11px]">
                <Award className="w-3.5 h-3.5" />
                <span>“WE SERVE TO SAVE”</span>
              </div>
              <p className="text-[11px] text-slate-400">
                GSTIN: <span className="font-mono text-slate-200">{COMPANY_INFO.gstin}</span>
              </p>
              <p className="text-[11px] text-slate-400">
                Proprietor: <span className="text-slate-200 font-medium">{COMPANY_INFO.proprietor}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Core Fire Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 hover:text-orange-400" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-orange-400 font-semibold text-xs mt-1 hover:underline"
                >
                  View All 12+ Solutions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Quick Links & Compliance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/about#experts" className="hover:text-orange-400 transition-colors">
                  Pool of Experts (NFSC Nagpur)
                </Link>
              </li>
              <li>
                <Link href="/form-b-compliance" className="hover:text-orange-400 transition-colors">
                  Form B Certification Guide
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange-400 transition-colors">
                  Housing Societies & Client List
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-400 transition-colors">
                  Photo & Equipment Gallery
                </Link>
              </li>
              <li>
                <Link href="/estimator" className="hover:text-orange-400 transition-colors">
                  Interactive AMC Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact & Site Survey
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 space-y-1">
              <p className="font-semibold text-slate-400">Registered Firm Documents:</p>
              <p>✓ Shop Act Registered</p>
              <p>✓ MSME Government of India</p>
              <p>✓ Form B Licensed Agency JV</p>
            </div>
          </div>

          {/* Col 4: Pune & Mumbai Locations */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Contact & Locations
            </h4>

            {/* Pune Head Office */}
            <div className="space-y-1.5 text-xs text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-orange-400 font-bold text-[11px]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Pune Head Office (Registered)</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Flat No. 1403, B1 Building, Avon Vista, Patil Nagar, Balewadi, Pune - 411045, Maharashtra
              </p>
            </div>

            {/* Mumbai Branch */}
            <div className="space-y-1.5 text-xs text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-orange-400 font-bold text-[11px]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Mumbai Branch Office</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                L&T Emerald Isle, Powai, Mumbai - 400076, Maharashtra
              </p>
            </div>

            {/* Phone & Email */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="font-semibold">{COMPANY_INFO.phones[0]}</span>
                <span className="text-slate-500">/</span>
                <span className="font-semibold">{COMPANY_INFO.phones[1]}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span>Balewadi, Pune</span>
            <span>•</span>
            <span>Powai, Mumbai</span>
            <span>•</span>
            <span className="text-orange-500 font-semibold">“WE SERVE TO SAVE”</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
