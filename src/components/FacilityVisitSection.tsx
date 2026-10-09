import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare, Navigation, ExternalLink, Clock, Building2, Send, CheckCircle2 } from "lucide-react";
import { COMPANY } from "../data/company";
import { DISHANT_LOGO_URL, DISHANT_LOGO_ALT } from "../assets/logo";
import { ScrollReveal } from "./ScrollReveal";

export const FacilityVisitSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "Cast Aluminium Blocks",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Construct WhatsApp message with user details
    const text = encodeURIComponent(
      `Hello Dishant Industries,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\nMessage: ${formData.message || "I would like to discuss a custom aluminium casting requirement."}`
    );
    window.open(`https://wa.me/919723246660?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* Backwards-compatibility anchor for existing #location links */}
      <div id="location" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING: "Contact Us / Dishant Industries" */}
        <ScrollReveal variant="fade-up" duration={750}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="text-[#1b365d] bg-blue-100/80 px-2.5 py-1 rounded">Contact Us</span>
              <span className="text-slate-300">/</span>
              <span className="text-[#f24b00] font-black">Direct Plant &amp; Sales Desk</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b365d] tracking-tight">
              Get In Touch With <span className="text-[#f24b00]">Dishant Industries</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Have questions about custom aluminium block casting, pattern tooling, chemical alloy grades, or plant visits? Connect directly with our Rajkot foundry engineering team.
            </p>
          </div>
        </ScrollReveal>

        {/* COMBINED CONTACT HUB & REAL-TIME INTERACTIVE MAP */}
        <ScrollReveal variant="scale-up" duration={800} delay={150}>
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT DETAILS: DIRECT CONTACT INFO, INQUIRY FORM, HOURS & ACTIONS */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
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
                      Foundry Plant &amp; Sales Administrative Office
                    </span>
                  </div>
                </div>

                {/* QUICK INQUIRY FORM */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-6 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#1b365d] bg-blue-100/80 px-2.5 py-0.5 rounded">
                      Quick Inquiry / RFQ Message
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      Direct WhatsApp &amp; Call
                    </span>
                  </div>

                  {submitted ? (
                    <div className="py-4 text-center">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-bold text-slate-900 text-sm">Message Sent Successfully!</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Our foundry engineers will review your requirement and respond promptly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-3 text-xs text-[#1b365d] font-bold underline"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Patel"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#1b365d] bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#1b365d] bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                          Requirement Type
                        </label>
                        <select
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#1b365d] bg-white"
                        >
                          <option value="Cast Aluminium Blocks">Cast Aluminium Blocks (Custom Dimensions)</option>
                          <option value="Complex Pattern Castings">Complex Pattern Moulding Castings</option>
                          <option value="Master Secondary Ingots">Secondary Master Ingots (LM6 / ADC12 / 6063)</option>
                          <option value="Scrap Remelting & Conversion">Aluminium Scrap Remelting &amp; Conversion</option>
                          <option value="Foundry Plant Visit">Foundry Plant Visit &amp; Quality Audit</option>
                          <option value="Other Technical Inquiry">Other Technical Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                          Specifications / Message (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Approx dimensions, grade, estimated quantity"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#1b365d] bg-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-[#1b365d] hover:bg-[#122540] rounded-lg shadow-sm transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Instant Inquiry via WhatsApp</span>
                      </button>
                    </form>
                  )}
                </div>

                {/* VISITING HOURS / FACILITY INFO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 mb-6">
                  {/* OPERATING HOURS: 8:00 AM - 8:00 PM, HOLIDAY WEDNESDAY, OPEN SUNDAY */}
                  <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1b365d]/50 transition-colors">
                    <Clock className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-bold text-[#1b365d] block leading-tight">Operating Hours</span>
                      <span className="text-xs font-semibold text-slate-800 block mt-0.5">8:00 AM – 8:00 PM</span>
                      <span className="text-[11px] text-slate-600 font-medium block">Thu – Tue (Open Sunday)</span>
                      <span className="inline-block mt-1.5 text-[10px] font-bold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded border border-amber-300">
                        Holiday Every Wednesday
                      </span>
                    </div>
                  </div>

                  {/* DISPATCH & LOADING */}
                  <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#f24b00]/50 transition-colors">
                    <Building2 className="w-4 h-4 text-[#1b365d] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-bold text-[#1b365d] block leading-tight">Dispatch &amp; Loading</span>
                      <span className="text-xs font-semibold text-slate-800 block mt-0.5">Heavy Truck Bay</span>
                      <span className="text-[11px] text-slate-600 font-medium block">Forklift &amp; Crane Ready</span>
                      <span className="inline-block mt-1.5 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Sunday Dispatches Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                {/* LARGE "GET DIRECTIONS" BUTTON (Foundry Blue) */}
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm font-black uppercase tracking-wider text-white bg-[#1b365d] hover:bg-[#122540] rounded-xl shadow-md shadow-[#1b365d]/25 transition-all hover:scale-[1.01]"
                >
                  <Navigation className="w-5 h-5 text-[#ffa533]" />
                  <span>GET DIRECTIONS TO FOUNDRY</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                {/* SECONDARY ROW BUTTONS: Open in Google Maps, Call Now, WhatsApp, Email Us */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <a
                    href={COMPANY.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#1b365d] bg-blue-50 hover:bg-blue-100/80 border border-blue-200 rounded-lg transition-colors text-center"
                  >
                    <span>Open Maps</span>
                  </a>

                  <a
                    href={COMPANY.phoneLink}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-[#f24b00] hover:bg-[#d94100] border border-[#f24b00] rounded-lg transition-colors text-center shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={COMPANY.emailLink}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors text-center"
                  >
                    <Mail className="w-3.5 h-3.5 text-orange-600" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: REAL-TIME INTERACTIVE GOOGLE MAP (GUARANTEED VISIBLE PIN IN DEAD CENTER) */}
            <div className="lg:col-span-6 relative bg-slate-100 border-t lg:border-t-0 lg:border-l border-slate-200 min-h-[500px] lg:min-h-[620px] flex flex-col justify-between overflow-hidden">
              
              {/* Real-Time Live Google Maps Iframe with exact coordinates */}
              <iframe
                title="Dishant Industries Official Google Maps Real-Time Location"
                src="https://maps.google.com/maps?q=22.2514,70.8022+(Dishant+Industries)&hl=en&z=15&t=m&output=embed"
                className="w-full h-full min-h-[500px] lg:min-h-[620px] border-0"
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* GUARANTEED DIRECTLY VISIBLE PIN IN THE DEAD CENTER ON LOAD (NO ZOOM REQUIRED) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[92%] z-20 flex flex-col items-center pointer-events-none">
                {/* Information Card anchored right above the pin */}
                <div className="mb-2 px-3.5 py-2 rounded-xl bg-white border-2 border-[#1b365d] shadow-2xl flex items-center gap-2.5 pointer-events-auto">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f24b00] animate-ping shrink-0" />
                  <div className="text-left">
                    <span className="font-display font-black text-xs sm:text-sm text-[#1b365d] block leading-tight">
                      Dishant Industries
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 block">
                      Plot No. 4, Shree Hari Ind. Area, Vavdi, Rajkot
                    </span>
                  </div>
                  <a
                    href={COMPANY.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 p-1 rounded-lg bg-orange-50 text-[#f24b00] hover:bg-[#f24b00] hover:text-white transition-colors"
                    title="Open in Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Big Red/Orange Foundry Pin with Beacon */}
                <div className="relative flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-[#f24b00] text-white flex items-center justify-center shadow-2xl border-2 border-white ring-4 ring-[#f24b00]/30 animate-pulse">
                    <MapPin className="w-6 h-6 fill-white stroke-[#f24b00]" />
                  </div>
                  {/* Ground Indicator & Radar Wave */}
                  <div className="w-4 h-1.5 bg-black/40 rounded-full blur-[1px] mt-0.5" />
                  <div className="absolute -bottom-1 w-12 h-3 bg-[#f24b00]/35 rounded-full animate-ping -z-10" />
                </div>
              </div>

              {/* COMPACT CORNER BADGE (TOP-LEFT) */}
              <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-[#1b365d]">
                    Live GPS: 22.2514° N, 70.8022° E
                  </span>
                </div>
              </div>

              {/* COMPACT CORNER ACTION (BOTTOM-RIGHT) */}
              <div className="absolute bottom-3.5 right-3.5 z-10 pointer-events-auto">
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#1b365d] hover:bg-[#f24b00] rounded-xl shadow-lg transition-all hover:scale-102"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#ffa533]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </ScrollReveal>

      </div>
    </section>
  );
};

