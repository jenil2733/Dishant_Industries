import React, { useEffect, useState } from "react";
import { 
  ArrowLeft, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Sliders,
  RotateCw,
  Image as ImageIcon,
  Sparkles
} from "lucide-react";
import { Product } from "../data/products";
import { COMPANY } from "../data/company";
import { Product3DViewer } from "./Product3DViewer";

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct?: (product: Product) => void;
  onRequestQuote?: (productName: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
}) => {
  const [viewMode, setViewMode] = useState<"3d" | "photo">("3d");

  // Scroll to top on mount or product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product.id]);

  const whatsappMessage = encodeURIComponent(
    `Hello Dishant Industries,\n\nI would like to enquire about:\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease share commercial rates, MOQ, available alloy grades, and lead time.\n\nThank you.`
  );
  const whatsappProductLink = `https://wa.me/${COMPANY.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div className="pt-[109px] md:pt-[138px] pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP NAVIGATION BREADCRUMB & BACK ACTION */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200">
          <button
            onClick={onBack}
            className="skeuo-btn-metal inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#f24b00]" />
            <span>Back to All Products</span>
          </button>

          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={onBack} className="hover:text-[#1b365d] transition-colors cursor-pointer">
              Home
            </button>
            <span className="text-slate-300">/</span>
            <button onClick={onBack} className="hover:text-[#1b365d] transition-colors cursor-pointer">
              Products
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-[#1b365d] font-bold truncate max-w-[200px] sm:max-w-none skeuo-embossed-light">
              {product.name}
            </span>
          </nav>
        </div>

        {/* MAIN PRODUCT SHOWCASE GRID */}
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 3D 360° MODEL / HIGH-RES ASSET & CERTIFICATION BADGES (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* VIEW MODE TOGGLE (SKEUOMORPHIC INDUSTRIAL ROCKER SWITCH) */}
            <div className="flex items-center gap-1.5 p-1.5 skeuo-switch-track rounded-xl">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "3d"
                    ? "skeuo-btn-blue text-white"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <RotateCw className="w-3.5 h-3.5 text-[#ffa533]" />
                <span>3D Model (360° View)</span>
              </button>

              <button
                onClick={() => setViewMode("photo")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "photo"
                    ? "skeuo-btn-blue text-white"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-blue-300" />
                <span>Foundry Photo</span>
              </button>
            </div>

            {/* VISUAL SHOWCASE: INTERACTIVE 3D MODEL OR HIGH-RES PHOTO FRAMED IN MACHINED BEZEL */}
            <div className="relative rounded-2xl skeuo-plate p-2.5 overflow-hidden">
              {/* Corner Fastener Rivets */}
              <div className="absolute top-2 left-2 pointer-events-none z-10">
                <span className="skeuo-rivet" />
              </div>
              <div className="absolute top-2 right-2 pointer-events-none z-10">
                <span className="skeuo-rivet" />
              </div>
              <div className="absolute bottom-2 left-2 pointer-events-none z-10">
                <span className="skeuo-rivet" />
              </div>
              <div className="absolute bottom-2 right-2 pointer-events-none z-10">
                <span className="skeuo-rivet" />
              </div>

              {viewMode === "3d" ? (
                <div className="rounded-xl overflow-hidden">
                  <Product3DViewer product={product} />
                </div>
              ) : (
                <div className="relative rounded-xl skeuo-bezel-dark overflow-hidden aspect-4/3 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* FOUNDRY QUALITY ASSURANCE CARD */}
            <div className="rounded-2xl skeuo-plate p-5 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="skeuo-embossed-light">Foundry Quality &amp; Compliance</span>
                </div>
                <span className="skeuo-rivet" />
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2.5 p-2 rounded-lg skeuo-well">
                  <CheckCircle2 className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                  <span>100% Spectrometer chemical composition verification available upon request.</span>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-lg skeuo-well">
                  <CheckCircle2 className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                  <span>Smelted in eco-friendly white coal biomass gasifier furnaces for reduced carbon intensity.</span>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-lg skeuo-well">
                  <CheckCircle2 className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                  <span>Custom alloys, degassing treatments, and certified melt chemistry to customer specs.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILED SPECIFICATIONS & ACTIONS (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* PRODUCT HEADER */}
            <div className="rounded-2xl skeuo-plate p-6 sm:p-8 relative overflow-hidden">
              {/* Corner Fastener Rivets */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="skeuo-rivet" />
              </div>
              <div className="absolute top-3 right-3 pointer-events-none">
                <span className="skeuo-rivet" />
              </div>

              <div className="skeuo-badge-plate inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d] px-3 py-1 rounded border border-slate-300 mb-3">
                <Flame className="w-3.5 h-3.5 text-[#f24b00]" />
                <span className="skeuo-embossed-light">Dishant Industries Official Casting</span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b365d] tracking-tight skeuo-embossed-light">
                {product.name}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* COMMERCIAL ACTION BUTTONS */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={whatsappProductLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-12 min-h-[48px] inline-flex items-center justify-center gap-2 px-6 text-xs sm:text-sm font-bold text-white rounded-xl text-center shadow-md cursor-pointer transition-all active:translate-y-[2px]"
                  style={{
                    background: "linear-gradient(180deg, #10b981 0%, #059669 50%, #047857 100%)",
                    border: "1px solid #047857",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.25), 0 4px 8px -1px rgba(5,150,105,0.4), 0 2px 4px rgba(0,0,0,0.15)",
                    textShadow: "0 1px 1px rgba(0,0,0,0.3)"
                  }}
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>

                <a
                  href={COMPANY.phoneLink}
                  className="skeuo-btn-metal sm:w-auto h-12 min-h-[48px] inline-flex items-center justify-center gap-2 px-6 text-xs sm:text-sm font-bold rounded-xl text-center shrink-0 cursor-pointer"
                  title="Call Foundry Representative"
                >
                  <Phone className="w-4 h-4 text-[#1b365d] shrink-0" />
                  <span>Call Foundry Now</span>
                </a>
              </div>
            </div>

            {/* TECHNICAL SPECIFICATIONS TABLE */}
            <div className="rounded-2xl skeuo-plate p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d]">
                  <Sliders className="w-4 h-4 text-[#f24b00]" />
                  <span className="skeuo-embossed-light">Technical Specifications &amp; Parameters</span>
                </div>
                <span className="skeuo-badge-plate text-[10px] font-mono font-bold text-slate-600 px-2 py-0.5 rounded">
                  FOUNDRY SPEC
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.specifications.grade && (
                  <div className="p-3.5 rounded-xl skeuo-well">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Material Grade
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block skeuo-embossed-light">
                      {product.specifications.grade}
                    </span>
                  </div>
                )}

                {product.specifications.purity && (
                  <div className="p-3.5 rounded-xl skeuo-well">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Metallurgical Purity
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block skeuo-embossed-light">
                      {product.specifications.purity}
                    </span>
                  </div>
                )}

                {product.specifications.process && (
                  <div className="p-3.5 rounded-xl skeuo-well">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Foundry Process
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block skeuo-embossed-light">
                      {product.specifications.process}
                    </span>
                  </div>
                )}

                {product.specifications.finish && (
                  <div className="p-3.5 rounded-xl skeuo-well">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Surface Finish
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block skeuo-embossed-light">
                      {product.specifications.finish}
                    </span>
                  </div>
                )}

                {product.specifications.dimensions && (
                  <div className="p-3.5 rounded-xl skeuo-well sm:col-span-2">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Dimensions / Sizing Capacity
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block skeuo-embossed-light">
                      {product.specifications.dimensions}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* INDUSTRIAL APPLICATIONS */}
            <div className="rounded-2xl skeuo-plate p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d]">
                  <Layers className="w-4 h-4 text-[#f24b00]" />
                  <span className="skeuo-embossed-light">Key Industrial Applications</span>
                </div>
                <span className="skeuo-rivet" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg skeuo-well text-xs text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
