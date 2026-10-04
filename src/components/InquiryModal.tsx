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
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in duration-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center bg-white">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-black text-slate-900">
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
                className="px-6 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-orange-600">
                Direct Foundry RFQ
              </span>
              <h3 className="font-display text-2xl font-black text-slate-950 mt-1">
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
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-hidden focus:border-orange-500 font-medium"
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
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 font-medium"
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
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 font-medium"
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
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 font-medium"
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
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 font-medium"
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
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 resize-none font-medium"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3.5 px-6 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] rounded-xl shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5"
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
