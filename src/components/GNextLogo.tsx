import React from "react";
import Link from "next/link";

interface GNextLogoProps {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
}

export default function GNextLogo({
  variant = "dark",
  showTagline = true,
  className = "",
}: GNextLogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Brand Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-orange-500 to-amber-500 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          {/* Stylized Shield with Fire Flame */}
          <path
            d="M12 2L4 5V11C4 16.5 7.4 21.6 12 23C16.6 21.6 20 16.5 20 11V5L12 2Z"
            fill="rgba(255,255,255,0.15)"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7C12 7 9.5 9.5 9.5 12C9.5 13.5 10.6 15 12 15C13.4 15 14.5 13.5 14.5 12C14.5 10 13.2 8.5 12 7Z"
            fill="white"
          />
          <path
            d="M12 15C11 16 11.5 17.5 12 18C12.5 17.5 13 16 12 15Z"
            fill="#FEF08A"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`text-2xl font-black tracking-tight ${
              isLight ? "text-white" : "text-slate-900"
            }`}
          >
            G-NEXT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600 px-1.5 py-0.5 rounded bg-orange-100">
            FIRE SAFETY
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[9.5px] font-semibold tracking-wider uppercase mt-1 ${
              isLight ? "text-slate-400" : "text-slate-500"
            }`}
          >
            A Complete Fire Safety Solution Services
          </span>
        )}
      </div>
    </Link>
  );
}
