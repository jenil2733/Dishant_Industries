import React from "react";
import { ArrowRight, Flame, Scale, Users, Award } from "lucide-react";
import { COMPANY } from "../data/company";
import { DISHANT_LOGO_URL, DISHANT_LOGO_ALT } from "../assets/logo";
import { HeroThreeObject } from "./HeroThreeObject";

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative min-h-[90vh] pt-32 sm:pt-36 pb-16 flex flex-col justify-center overflow-hidden bg-white border-b border-slate-200">
      {/* AMBIENT LIGHT & INDUSTRIAL ACCENTS (Equal Blue & Orange Ambient) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Molten Orange ambient flare */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#f24b00]/10 rounded-full blur-3xl pointer-events-none animate-molten-glow" />
        {/* Foundry Blue ambient flare */}
        <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-[#1b365d]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#ffa533]/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle industrial grid texture overlay on clean white base */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1b365d 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO VALUE PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* HERITAGE CALLOUT & CORPORATE ENTITY (COMBINED) */}
            <div className="animate-slide-down stagger-1 inline-flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d] mb-4 bg-blue-50/90 px-3.5 py-1.5 rounded-lg border border-blue-200">
              <Flame className="w-4 h-4 text-[#f24b00] animate-pulse shrink-0" />
              <span className="font-extrabold text-[#1b365d]">Dishant Industries LLP</span>
              <span className="text-blue-300">/</span>
              <span>Rajkot, Gujarat</span>
              <span className="text-blue-300">/</span>
              <span className="text-[#f24b00] font-black font-mono">Est. 2000</span>
            </div>

            {/* MAIN HEADLINE (Dual-Color Logo Harmony - Scaled to balanced proportion) */}
            <h1 className="animate-slide-up stagger-2 font-display text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#1b365d] leading-[1.15] max-w-2xl">
              Aluminium Casting &amp;{" "}
              <span className="text-[#f24b00]">Industrial Metal Solutions</span>{" "}
              <span className="bg-gradient-to-r from-[#1b365d] via-[#f24b00] to-[#ffa533] bg-clip-text text-transparent">
                Since 2000
              </span>
            </h1>

            {/* VALUE PROPOSITION SUBTITLE (Entrance animated) */}
            <p className="animate-slide-up stagger-3 mt-3.5 text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Specialized in high-density <strong className="text-[#1b365d] font-bold">Aluminium Block Casting</strong>, 
              precision <strong className="text-[#1b365d] font-bold">Sand Casting</strong>, no-bake resin moulding, and circular 
              metal recycling powered by eco-friendly biomass white coal furnaces.
            </p>

            {/* INTEGRATED KEY METRICS (3 METRICS FITTED DIRECTLY BELOW TEXT) */}
            <div className="animate-slide-up stagger-3 my-5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 items-stretch">
                {COMPANY.stats.slice(1).map((stat, idx) => {
                  const icons = [
                    <Scale key="scale" className="w-4 h-4 text-[#1b365d]" />,
                    <Users key="users" className="w-4 h-4 text-[#1b365d]" />,
                    <Award key="award" className="w-4 h-4 text-[#1b365d]" />,
                  ];
                  const tagBadges = [
                    "CAPACITY",
                    "CLIENTS",
                    "ARTISANS",
                  ];

                  return (
                    <div
                      key={stat.label}
                      className="group relative p-3 sm:p-4 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-200/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between h-full hover:border-[#1b365d]/50"
                    >
                      {/* Top indicator glow line - All unified to Foundry Blue */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1b365d]/40 group-hover:bg-[#1b365d] transition-all" />

                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[9px] font-mono font-bold uppercase text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200/70">
                          {tagBadges[idx]}
                        </span>
                        <div className="p-1.5 rounded-lg bg-blue-100/70 text-[#1b365d] transition-transform group-hover:scale-105">
                          {icons[idx]}
                        </div>
                      </div>

                      {/* Vertically centered and aligned text block */}
                      <div className="flex-1 flex flex-col justify-center">
                        <span className="font-display text-2xl sm:text-2xl font-black tabular-nums tracking-tight block text-[#1b365d]">
                          {stat.value}
                        </span>
                        <span className="block text-xs font-bold text-slate-800 leading-tight mt-1">
                          {stat.label}
                        </span>
                        <p className="mt-1 text-xs text-slate-600 font-medium leading-snug">
                          {stat.subtext}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PRIMARY & SECONDARY ACTION BUTTONS (Equal 50/50 Blue & Orange) */}
            <div className="animate-slide-up stagger-4 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* PRIMARY ACTION 1: FOUNDRY BLUE BUTTON */}
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#1b365d] hover:bg-[#122540] rounded-lg shadow-md shadow-[#1b365d]/20 transition-all hover:-translate-y-0.5"
              >
                <span>Explore 10 Product Lines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* PRIMARY ACTION 2: MOLTEN ORANGE BUTTON */}
              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#f24b00] hover:bg-[#d94100] rounded-lg shadow-md shadow-[#f24b00]/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Custom Casting Quote</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: OFFICIAL LOGO + 3D METALLIC OBJECT */}
          <div className="lg:col-span-5 flex flex-col gap-4 animate-fade-in stagger-2">
            
            {/* THE HERO CARD */}
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl p-5 sm:p-6 overflow-hidden">
              
              {/* TOP HEADER: Official Dishant Industries Logo */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={DISHANT_LOGO_URL}
                    alt={DISHANT_LOGO_ALT}
                    className="h-11 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h2 className="text-base font-extrabold text-[#24303e] tracking-tight leading-none">
                      Dishant Industries
                    </h2>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Official Foundry Facility
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    Active Production
                  </span>
                </div>
              </div>

              {/* CENTER 3D ALUMINIUM BLOCK OBJECT */}
              <div className="my-3 bg-slate-50/80 rounded-xl border border-slate-100 overflow-hidden">
                <HeroThreeObject />
              </div>

              {/* FOOTER BADGE */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Interactive 3D Casting Demo</span>
                <span className="text-orange-600 font-mono font-bold text-[11px]">Vavdi · Rajkot</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
