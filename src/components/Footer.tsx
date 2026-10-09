import React from "react";
import { MapPin, Navigation, ArrowUpRight } from "lucide-react";
import { COMPANY } from "../data/company";
import { DISHANT_LOGO_URL, DISHANT_LOGO_ALT } from "../assets/logo";
import { ScrollReveal } from "./ScrollReveal";

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#products" },
    { label: "Company Profile", href: "#company-profile" },
    { label: "Services", href: "#capabilities" },
    { label: "Process", href: "#process" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-700 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: LOGO, QUICK LINKS, ADDRESS, CONTACT */}
        <ScrollReveal variant="fade-up" duration={750}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-200">
            
            {/* BRAND COLUMN: EXACT ORIGINAL DISHANT INDUSTRIES LOGO */}
            <div className="md:col-span-4 flex flex-col items-start">
              <div className="flex items-center gap-3.5 mb-4">
                <img
                  src={DISHANT_LOGO_URL}
                  alt={DISHANT_LOGO_ALT}
                  className="h-12 sm:h-14 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight block">
                    {COMPANY.name}
                  </span>
                  <span className="text-xs text-orange-600 font-bold">
                    Aluminium Foundry &amp; Ingot Smelting
                  </span>
                </div>
              </div>

              {/* MANDATORY TAGLINE */}
              <p className="text-xs sm:text-sm font-semibold text-slate-800 italic mb-3">
                "{COMPANY.tagline}"
              </p>

              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mb-4">
                Established in Rajkot, Gujarat. Providing specialized aluminium block casting, green sand moulding, lost-foam patterns, and circular scrap recycling for industrial manufacturers across India.
              </p>

              <div className="flex items-center gap-2.5 text-xs text-slate-500 font-semibold">
                <span className="font-mono text-slate-800">3000+ MT Annual Capacity</span>
                <span>·</span>
                <span className="font-mono text-slate-800">300+ Clients</span>
              </div>
            </div>

            {/* QUICK LINKS COLUMN */}
            <div className="md:col-span-2">
              <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-600">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="text-slate-400">›</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SHORT ADDRESS COLUMN */}
            <div className="md:col-span-3">
              <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Plant Address</span>
              </h4>
              
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <span className="font-bold text-xs text-[#1b365d] block">
                  Dishant Industries
                </span>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Plot No. 4, Shree Hari Ind. Area, Behind Tulip Party Plot, Patel Chowk, Vavdi, Rajkot - 360004, Gujarat
                </p>
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href={COMPANY.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* CONTACT & DIRECT LINKS COLUMN */}
            <div className="md:col-span-3">
              <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Direct Contact
              </h4>
              
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px] font-medium">Phone:</span>
                  <a
                    href={COMPANY.phoneLink}
                    className="font-bold text-slate-900 hover:text-orange-600 transition-colors text-sm"
                  >
                    {COMPANY.phone}
                  </a>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px] font-medium">Email:</span>
                  <a
                    href={COMPANY.emailLink}
                    className="font-semibold text-slate-900 hover:text-orange-600 transition-colors break-all"
                  >
                    {COMPANY.email}
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine-hover-effect inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-all text-xs font-bold shadow-xs active:scale-95"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* BOTTOM ROW: COPYRIGHT */}
        <ScrollReveal variant="fade-in" delay={150} duration={600}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div>
              © 2026 Dishant Industries. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>Vavdi · Rajkot · Gujarat · India</span>
              <span>·</span>
              <span>Aluminium Foundry Excellence</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
};
