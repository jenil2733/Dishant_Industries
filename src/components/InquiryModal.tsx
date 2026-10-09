import React, { useState } from "react";
import { X, CheckCircle2, MessageSquare } from "lucide-react";
import { COMPANY } from "../data/company";
import { PRODUCTS } from "../data/products";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct,
}) => {
  if (!isOpen) return null;

  const [productName, setProductName] = useState(defaultProduct || "Aluminium Block");
  const [estimatedQuantity, setEstimatedQuantity] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `*New RFQ - Dishant Industries*\n\n` +
      `*Product:* ${productName}\n` +
      `*Estimated Volume/Weight:* ${estimatedQuantity || "Standard batch"}\n` +
      `*Contact Person:* ${fullName}\n` +
      `*Company:* ${companyName || "N/A"}\n` +
      `*Phone:* ${phone}\n` +
      `*Requirements/Notes:* ${specifications || "Please share commercial quote & technical specifications"}\n\n` +
      `*Delivery Location:* Vavdi, Rajkot / Ex-Works`
    );

    window.open(`https://wa.me/${COMPANY.phoneRaw}?text=${text}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl skeuo-plate rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in duration-200">
        {/* 4 Corner Screws / Fasteners */}
        <div className="absolute top-2.5 left-2.5 pointer-events-none">
          <span className="skeuo-rivet" />
        </div>
        <div className="absolute top-2.5 right-2.5 pointer-events-none">
          <span className="skeuo-rivet" />
        </div>
        <div className="absolute bottom-2.5 left-2.5 pointer-events-none">
          <span className="skeuo-rivet" />
        </div>
        <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
          <span className="skeuo-rivet" />
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="skeuo-btn-metal absolute top-4 right-4 z-10 p-2 text-slate-700 hover:text-slate-950 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full skeuo-well flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-black text-[#1b365d] skeuo-embossed-light">
              Inquiry Opened on WhatsApp
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Your inquiry has been prepared and opened in WhatsApp with factory-direct details for Dishant Industries.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="skeuo-btn-metal px-6 py-2.5 text-xs font-bold text-slate-700 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="mb-6 border-b border-slate-200 pb-4">
              <span className="skeuo-badge-plate text-xs uppercase font-bold tracking-wider text-[#f24b00] px-2.5 py-0.5 rounded">
                Direct Foundry RFQ
              </span>
              <h3 className="font-display text-2xl font-black text-[#1b365d] mt-2 skeuo-embossed-light">
                Request Manufacturing Quote
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Get factory-direct pricing for aluminium blocks, precision sand casting, or master remelt ingots.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product / Service Needed *
                </label>
                <select
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-hidden focus:border-[#1b365d] font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]"
                  required
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.category})
                    </option>
                  ))}
                  <option value="Custom Aluminium Casting Solution">
                    Custom Casting / One-off Pattern Job
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rajesh Patel"
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#1b365d] font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Precision Tools"
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#1b365d] font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#1b365d] font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Estimated Quantity (MT or kg)
                  </label>
                  <input
                    type="text"
                    value={estimatedQuantity}
                    onChange={(e) => setEstimatedQuantity(e.target.value)}
                    placeholder="e.g. 5 MT / 500 pcs"
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#1b365d] font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Requirements &amp; Alloy Grade
                </label>
                <textarea
                  rows={3}
                  value={specifications}
                  onChange={(e) => setSpecifications(e.target.value)}
                  placeholder="Alloy grade (LM6, LM25, ADC12), dimensional tolerances, surface finish, delivery timeline..."
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#1b365d] resize-none font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                type="submit"
                className="w-full py-3.5 px-6 text-sm font-bold text-white rounded-xl shadow-md cursor-pointer transition-all active:translate-y-0.5 flex items-center justify-center gap-2.5"
                style={{
                  background: "linear-gradient(180deg, #10b981 0%, #059669 50%, #047857 100%)",
                  border: "1px solid #047857",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.25), 0 4px 8px rgba(5,150,105,0.35)",
                  textShadow: "0 1px 1px rgba(0,0,0,0.3)"
                }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit RFQ on WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
