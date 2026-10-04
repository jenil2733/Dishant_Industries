import React, { useEffect } from "react";
import { 
  ArrowLeft, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Sliders, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Product, PRODUCTS } from "../data/products";
import { COMPANY } from "../data/company";

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onRequestQuote,
}) => {
  // Scroll to top on mount or product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product.id]);

  const whatsappMessage = encodeURIComponent(
    `Hello Dishant Industries,\n\nI would like to enquire about:\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease share commercial rates, MOQ, available alloy grades, and lead time.\n\nThank you.`
  );
  const whatsappProductLink = `https://wa.me/${COMPANY.phoneRaw}?text=${whatsappMessage}`;

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP NAVIGATION BREADCRUMB & BACK ACTION */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#1b365d] bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-all hover:-translate-x-0.5 cursor-pointer"
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
            <span className="text-[#1b365d] font-bold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>

        {/* MAIN PRODUCT SHOWCASE GRID */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: HIGH-RES ASSET & CERTIFICATION BADGES (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
              <div className="relative aspect-4/3 w-full bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('.png')) {
                      target.src = product.fallbackImage || `/images/products/${product.id}.svg`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* CATEGORY CHIP */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-bold tracking-wider text-[#1b365d] bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-md border border-blue-100 shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* CATALOG ID OVERLAY */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] text-slate-300 uppercase tracking-widest block font-mono">
                      Catalog Identifier
                    </span>
                    <span className="text-xs font-mono font-bold">
                      DIS-{product.id.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold bg-[#f24b00] px-2 py-0.5 rounded text-white font-mono">
                      Verified Batch
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* FOUNDRY QUALITY ASSURANCE CARD */}
            <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Foundry Quality &amp; Compliance</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                  <span>100% Spectrometer chemical composition verification available upon request.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                  <span>Smelted in eco-friendly white coal biomass gasifier furnaces for reduced carbon intensity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                  <span>Custom alloys, degassing treatments, and certified melt chemistry to customer specs.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILED SPECIFICATIONS & ACTIONS (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* PRODUCT HEADER */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d] bg-blue-50 px-3 py-1 rounded border border-blue-200 mb-3">
                <Flame className="w-3.5 h-3.5 text-[#f24b00]" />
                <span>Dishant Industries Official Casting</span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b365d] tracking-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* COMMERCIAL ACTION BUTTONS */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappProductLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-12 min-h-[48px] inline-flex items-center justify-center gap-2 px-6 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] rounded-xl shadow-xs transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>

                <a
                  href={COMPANY.phoneLink}
                  className="sm:w-auto h-12 min-h-[48px] inline-flex items-center justify-center gap-2 px-6 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#1b365d] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all text-center shrink-0"
                  title="Call Foundry Representative"
                >
                  <Phone className="w-4 h-4 text-[#1b365d] shrink-0" />
                  <span>Call Foundry Now</span>
                </a>
              </div>
            </div>

            {/* TECHNICAL SPECIFICATIONS TABLE */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d] mb-4">
                <Sliders className="w-4 h-4 text-[#f24b00]" />
                <span>Technical Specifications &amp; Parameters</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.specifications.grade && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Material Grade
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block">
                      {product.specifications.grade}
                    </span>
                  </div>
                )}

                {product.specifications.purity && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Metallurgical Purity
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block">
                      {product.specifications.purity}
                    </span>
                  </div>
                )}

                {product.specifications.process && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Foundry Process
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block">
                      {product.specifications.process}
                    </span>
                  </div>
                )}

                {product.specifications.finish && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Surface Finish
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block">
                      {product.specifications.finish}
                    </span>
                  </div>
                )}

                {product.specifications.dimensions && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Dimensions / Sizing Capacity
                    </span>
                    <span className="font-bold text-sm text-[#1b365d] mt-0.5 block">
                      {product.specifications.dimensions}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* INDUSTRIAL APPLICATIONS */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b365d] mb-4">
                <Layers className="w-4 h-4 text-[#f24b00]" />
                <span>Key Industrial Applications</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#f24b00] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* EXPLORE OTHER PRODUCTS FROM DISHANT INDUSTRIES */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#f24b00] mb-1">
                More Casting Lines
              </div>
              <h2 className="font-display text-2xl font-black text-[#1b365d]">
                Explore Other Products
              </h2>
            </div>

            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1b365d] hover:text-[#f24b00] transition-colors cursor-pointer"
            >
              <span>View Full 10-Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <div
                key={relProduct.id}
                onClick={() => onSelectProduct(relProduct)}
                className="group rounded-xl bg-white border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#1b365d]/40 transition-all duration-300"
              >
                <div className="relative aspect-16/10 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={relProduct.image}
                    alt={relProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.endsWith('.png')) {
                        target.src = relProduct.fallbackImage || `/images/products/${relProduct.id}.svg`;
                      }
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold text-[#1b365d] bg-white/95 px-2 py-0.5 rounded shadow-xs">
                      {relProduct.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-[#1b365d] group-hover:text-[#f24b00] transition-colors truncate">
                    {relProduct.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {relProduct.shortDesc}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#f24b00] font-bold">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
