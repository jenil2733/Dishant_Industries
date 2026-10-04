import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Menu, X, MapPin, Mail, Clock } from "lucide-react";
import { COMPANY } from "../data/company";

interface HeaderProps {
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Company Profile", href: "#company-profile" },
    { label: "Process & Plant", href: "#process" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm"
          : "bg-white/95 backdrop-blur-xs border-b border-slate-200/60"
      }`}
    >
      {/* TOP UTILITY HEADER STRIP: SHORT ADDRESS & DIRECT CONTACT DETAILS */}
      <div className="bg-[#102138] text-slate-300 text-[11px] font-medium border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          {/* Left: Short Address with MapPin */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            title="View Plant Location in Vavdi, Rajkot"
          >
            <MapPin className="w-3.5 h-3.5 text-[#f24b00]" />
            <span className="font-semibold text-slate-200">
              Vavdi, Rajkot
            </span>
          </a>

          {/* Right: Contact Details (Hours, Email, Phone) */}
          <div className="flex items-center gap-3.5">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3 h-3 text-[#ffa533]" />
              <span>8 AM – 8 PM (Wed Off)</span>
            </div>
            <span className="hidden lg:inline text-slate-600">|</span>

            <a
              href={COMPANY.emailLink}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#ffa533]" />
              <span>{COMPANY.email}</span>
            </a>
            <span className="text-slate-600">|</span>

            <a
              href={COMPANY.phoneLink}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#ffa533] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#f24b00]" />
              <span>{COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ZONE 1: OFFICIAL BRAND LOGO */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1b365d] rounded-lg py-1 cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Dishant Industries Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* ZONE 2: NAVIGATION LINKS (Single-line, text hover states) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#1b365d]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#f24b00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f24b00] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ZONE 3: PRIMARY ACTIONS */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instant Quote Button (Molten Orange) */}
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#f24b00] hover:bg-[#d94100] rounded-lg shadow-sm transition-all hover:scale-102 cursor-pointer"
            >
              <span>Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={COMPANY.phoneLink}
              className="p-2 text-orange-600 bg-slate-100 border border-slate-200 rounded-lg"
              aria-label="Call Dishant Industries"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* MOBILE SHORT ADDRESS & DIRECT DETAILS */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-bold text-[#1b365d] block">Plant Location</span>
                <span className="text-[11px] text-slate-600 block">
                  Vavdi, Rajkot
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200/80 text-[11px] font-semibold text-slate-700">
              <Clock className="w-3.5 h-3.5 text-[#ffa533]" />
              <span>8:00 AM – 8:00 PM (Wed Off)</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <a
              href={COMPANY.phoneLink}
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-[#1b365d] rounded-lg shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffa533]" />
              Call Now
            </a>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestQuote();
            }}
            className="w-full mt-3 py-3 px-4 text-xs font-bold uppercase tracking-wider text-center text-white bg-[#f24b00] hover:bg-[#d94100] rounded-lg shadow-sm"
          >
            Request Manufacturing Quote
          </button>
        </div>
      )}
    </header>
  );
};
