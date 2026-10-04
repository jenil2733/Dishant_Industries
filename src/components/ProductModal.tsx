import React from "react";
import { X, Phone, MessageSquare, Check } from "lucide-react";
import { Product } from "../data/products";
import { COMPANY } from "../data/company";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Dishant Industries,\n\nI would like to enquire about:\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease share commercial rates, MOQ, available alloy grades, and lead time.\n\nThank you.`
  );
  const whatsappProductLink = `https://wa.me/${COMPANY.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-500 hover:text-slate-800 bg-white/90 hover:bg-slate-100 border border-slate-200 rounded-full transition-colors focus:outline-hidden shadow-xs"
          aria-label="Close product details modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* PRODUCT IMAGE & BADGES */}
          <div className="md:col-span-5 relative bg-slate-100 min-h-[300px] md:min-h-[440px] flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0">
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
            </div>

            {/* Category tag */}
            <div className="relative z-10">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded-md border border-white/20">
                {product.category}
              </span>
            </div>

            {/* Bottom image overlay information */}
            <div className="relative z-10">
              <span className="text-[11px] text-slate-200 font-mono block">
                Dishant Industries Catalog ID:
              </span>
              <span className="text-xs font-mono font-bold text-white">
                DIS-{product.id.toUpperCase()}
              </span>
              <div className="mt-2 text-[10px] text-slate-200 bg-slate-950/80 border border-slate-700 px-2 py-1 rounded">
                Representative industrial photography. Replaceable with client facility imagery.
              </div>
            </div>
          </div>

          {/* PRODUCT SPECS & DETAILS (Light theme) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto bg-white">
            <div>
              {/* Product Title */}
              <h3 
                id="modal-product-title"
                className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
              >
                {product.name}
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* SPECIFICATIONS GRID */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {product.specifications.grade && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block text-[11px] font-medium">Material Grade</span>
                      <span className="font-bold text-slate-900">{product.specifications.grade}</span>
                    </div>
                  )}
                  {product.specifications.purity && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block text-[11px] font-medium">Metallurgical Purity</span>
                      <span className="font-bold text-slate-900">{product.specifications.purity}</span>
                    </div>
                  )}
                  {product.specifications.process && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block text-[11px] font-medium">Foundry Process</span>
                      <span className="font-bold text-slate-900">{product.specifications.process}</span>
                    </div>
                  )}
                  {product.specifications.finish && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block text-[11px] font-medium">Surface Finish</span>
                      <span className="font-bold text-slate-900">{product.specifications.finish}</span>
                    </div>
                  )}
                  {product.specifications.dimensions && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 col-span-2">
                      <span className="text-slate-500 block text-[11px] font-medium">Dimensions / Sizing Capacity</span>
                      <span className="font-bold text-slate-900">{product.specifications.dimensions}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* APPLICATIONS LIST */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Common Industrial Applications
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ACTION CTAs */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* PRIMARY WHATSAPP ENQUIRY CTA */}
              <a
                href={whatsappProductLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] rounded-xl shadow-md shadow-emerald-600/25 transition-all text-center"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enquire on WhatsApp</span>
              </a>

              {/* CALL CTA */}
              <a
                href={COMPANY.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors text-center"
                title={`Call ${COMPANY.phone}`}
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Call Us</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
