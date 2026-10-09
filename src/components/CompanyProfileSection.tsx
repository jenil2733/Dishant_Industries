import React from "react";
import { 
  Building2, 
  Target, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Layers, 
  History, 
  Users, 
  Phone, 
  MessageSquare,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { COMPANY } from "../data/company";
import { DISHANT_LOGO_URL, DISHANT_LOGO_ALT } from "../assets/logo";
import { ScrollReveal } from "./ScrollReveal";
import { AnimatedCounter } from "./AnimatedCounter";

interface CompanyProfileSectionProps {
  onRequestQuote?: () => void;
}

export const CompanyProfileSection: React.FC<CompanyProfileSectionProps> = ({ onRequestQuote }) => {
  const milestones = [
    {
      year: "2000",
      title: "Foundry Establishment",
      description: "Founded in Rajkot, Gujarat, commencing operations with precision sand matchplate casting for regional pump and machine manufacturers."
    },
    {
      year: "2008",
      title: "Aluminium Block Expansion",
      description: "Scaled production to large-format cast aluminium blocks and tooling plates, providing pore-free metal for tool & die fabricators."
    },
    {
      year: "2016",
      title: "Clean Biomass Smelting",
      description: "Pioneered sustainable white coal (agricultural briquette) reverberatory furnaces, slashing carbon emissions by up to 70%."
    },
    {
      year: "2021",
      title: "3,000+ MT Melting Milestone",
      description: "Surpassed 3,000 MT annual production, expanding supply chains to automotive, electrical, and machinery OEMs across India."
    },
    {
      year: "Present",
      title: "Full-Spectrum Metallurgy",
      description: "Serving 300+ industrial clients with spectrometry-tested ingots, custom pattern mouldings, and circular metal recovery."
    }
  ];

  const coreStrengths = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#f24b00]" />,
      title: "Zero-Porosity Metallurgical Density",
      desc: "Spectrometer-verified alloy chemistry, rotary flux degassing, and controlled pour rates ensure tight grain structures free from internal voids."
    },
    {
      icon: <Flame className="w-5 h-5 text-[#1b365d]" />,
      title: "Clean Agro-Biomass Smelting",
      desc: "Reverberatory furnaces fueled by 100% renewable white coal agricultural briquettes, delivering clean thermal efficiency without heavy fossil fuel burn."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#f24b00]" />,
      title: "Precision Matchplate & Sand Moulding",
      desc: "Accommodates single prototypes through high-volume production with fast tooling turnaround, wood/metal patterns, and lost-foam thermocol moulding."
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#1b365d]" />,
      title: "Circular Remelting & Scrap Recovery",
      desc: "High-yield recycling of clean 6063 extrusion profiles, foundry runners, and turning scrap, converting industrial metal waste into certified ingots."
    }
  ];

  return (
    <section id="company-profile" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <ScrollReveal variant="fade-up" duration={700}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="text-[#1b365d] bg-blue-100/70 px-2.5 py-1 rounded">Company Profile</span>
              <span className="text-slate-300">/</span>
              <span className="text-[#f24b00] font-black">Est. 2000 · Rajkot, Gujarat</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b365d] tracking-tight">
              Over 25 Years of Precision <span className="text-[#f24b00]">Aluminium Foundry</span> Excellence
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Dishant Industries is an established secondary smelting and aluminium casting enterprise 
              operating in Shree Hari Industrial Area, Vavdi, Rajkot. We partner with India’s leading 
              machinery, automotive, and electrical engineering manufacturers.
            </p>
          </div>
        </ScrollReveal>

        {/* TOP ROW: EXECUTIVE OVERVIEW & VISION / MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* LEFT: EXECUTIVE OVERVIEW & HERITAGE (7 COLS) */}
          <ScrollReveal variant="slide-left" duration={800} className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <img
                    src={DISHANT_LOGO_URL}
                    alt={DISHANT_LOGO_ALT}
                    className="h-12 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1b365d]">
                      Dishant Industries
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      Aluminium Castings &amp; Industrial Metal Solutions Since 2000
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <p>
                    Established in the year <strong className="text-[#1b365d]">2000</strong> in Rajkot—Gujarat's premier industrial hub—<strong className="text-[#1b365d]">Dishant Industries</strong> has grown from a specialized pattern foundry into a high-capacity smelting and precision casting powerhouse with an annual melting volume exceeding <strong className="text-[#f24b00]">3,000 MT</strong>.
                  </p>
                  <p>
                    Our modern plant features custom-engineered reverberatory melting furnaces fueled entirely by clean <strong className="text-[#1b365d]">agricultural white coal biomass briquettes</strong>. This eco-conscious technology significantly reduces carbon emissions while providing steady, uniform thermal soak for clean metal tapping.
                  </p>
                  <p>
                    Whether pouring dense <strong className="text-[#1b365d]">Aluminium Blocks</strong> for heavy tooling or producing intricate matchplate components for engineering OEMs, our foundrymen enforce zero-porosity standards, precise metallurgical alloy chemistry, and certified dimensional repeatability.
                  </p>
                </div>
              </div>

              {/* KEY NUMBERS STRIP */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-6 mt-6 border-t border-slate-100">
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2 sm:gap-1 min-w-0">
                  <span className="font-display text-xl sm:text-2xl font-black text-[#1b365d] block leading-tight shrink-0">
                    <AnimatedCounter value="2000" />
                  </span>
                  <span className="text-xs sm:text-[11px] text-slate-500 font-medium text-right sm:text-left">
                    25+ Years Legacy
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2 sm:gap-1 min-w-0">
                  <span className="font-display text-xl sm:text-2xl font-black text-[#f24b00] block leading-tight shrink-0">
                    <AnimatedCounter value="3000+ MT" />
                  </span>
                  <span className="text-xs sm:text-[11px] text-slate-500 font-medium text-right sm:text-left">
                    Annual Melt Output
                  </span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2 sm:gap-1 min-w-0">
                  <span className="font-display text-xl sm:text-2xl font-black text-[#1b365d] block leading-tight shrink-0">
                    <AnimatedCounter value="300+" />
                  </span>
                  <span className="text-xs sm:text-[11px] text-slate-500 font-medium text-right sm:text-left">
                    OEM Clients
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: VISION & MISSION CARDS (5 COLS) */}
          <ScrollReveal variant="slide-right" duration={800} className="lg:col-span-5 flex flex-col gap-6 h-full">
            
            {/* VISION CARD */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#1b365d] transition-colors flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[#1b365d]">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#1b365d]">
                    Our Vision
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-[#1b365d] mb-2.5">
                  India’s Benchmark Sustainable Aluminium Foundry
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To pioneer eco-friendly industrial casting in India by delivering zero-porosity, high-integrity aluminium solutions through clean biomass technology, automated quality verification, and circular metallurgical innovation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#1b365d] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#1b365d]" />
                <span>Committed to Carbon-Neutral Smelting</span>
              </div>
            </div>

            {/* MISSION CARD */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#f24b00] transition-colors flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-[#f24b00]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#f24b00]">
                    Our Mission
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-[#1b365d] mb-2.5">
                  Metallurgical Integrity &amp; OEM Empowerment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To supply engineering OEMs with uncompromised metallurgical density, CAD-accurate tolerances, and reliable lead times while minimizing environmental impact through circular metal recycling and transparent business ethics.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#f24b00] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#f24b00]" />
                <span>Zero-Defect Quality Standards</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* MIDDLE: 4 CORE METALLURGICAL STRENGTHS */}
        <div className="mb-16">
          <ScrollReveal variant="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f24b00] block mb-1">
                Foundry Capabilities
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#1b365d]">
                Why Engineering OEMs Choose Dishant Industries
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((item, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 100} duration={700}>
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:border-[#1b365d]/50 transition-all hover:-translate-y-1.5 group flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 inline-block mb-4 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-display text-base font-bold text-[#1b365d] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#1b365d] flex items-center gap-1">
                    <span>Factory Verified</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f24b00]" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* BOTTOM: COMPANY TIMELINE / MILESTONES */}
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d] mb-1">
                  <History className="w-4 h-4 text-[#f24b00]" />
                  <span>Foundry Journey</span>
                </div>
                <h3 className="font-display text-2xl font-black text-[#1b365d]">
                  Milestones in Metal Casting Since 2000
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Vavdi, Rajkot Foundry Hub
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative flex flex-col justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div>
                    <span className="font-display text-xl font-black text-[#f24b00] block mb-1">
                      {m.year}
                    </span>
                    <h5 className="font-bold text-xs text-[#1b365d] mb-1.5 leading-snug">
                      {m.title}
                    </h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200/80 text-[10px] font-mono text-slate-400">
                    Step 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* BOTTOM ACTION BANNER */}
        <ScrollReveal variant="scale-up" duration={750}>
          <div className="rounded-2xl bg-gradient-to-r from-[#1b365d] via-[#122540] to-[#102138] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffa533] block mb-1.5">
                ✦ Connect With Our Foundry Team
              </span>
              <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Need Custom Aluminium Blocks, Castings, or <span className="text-[#ffa533]">Master Ingots?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-xl leading-relaxed">
                Talk directly with our metallurgical engineers to discuss drawings, alloy grades, pattern development, and production schedules.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {onRequestQuote && (
                <button
                  onClick={onRequestQuote}
                  className="shine-hover-effect px-5 py-3 text-xs font-bold text-white bg-[#f24b00] hover:bg-[#d94100] rounded-xl shadow-md transition-all hover:scale-102 cursor-pointer active:scale-95"
                >
                  Request Quotation
                </button>
              )}

              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-hover-effect inline-flex items-center gap-1.5 px-4 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </a>

              <a
                href={COMPANY.phoneLink}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#ffa533]" />
                <span>{COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
