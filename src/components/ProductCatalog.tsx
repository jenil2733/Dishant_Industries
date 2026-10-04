import React from "react";
import { PRODUCTS, Product } from "../data/products";
import { Eye, ArrowRight, ShieldCheck } from "lucide-react";

interface ProductCatalogProps {
  onSelectProduct?: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const handleProductClick = (product: Product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      window.location.hash = `product-${product.id}`;
    }
  };

  return (
    <section id="products" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="text-[#1b365d]">Industrial Catalog</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#f24b00]">Core Product Lines</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1b365d] tracking-tight">
            Aluminium Castings, <span className="text-[#f24b00]">Master Ingots</span> &amp; Circular Alloys
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore our full manufacturing range, from high-density aluminium blocks and matchplates 
            to eco-recycled 6063 extrusion scrap and high-strength 7000 series aerospace ingots.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1b365d]/40 hover:shadow-xl"
            >
              {/* IMAGE WRAPPER WITH DIRECT REAL ASSET */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('.png')) {
                      target.src = product.fallbackImage || `/images/products/${product.id}.svg`;
                    }
                  }}
                />
                
                {/* Subtle depth vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Category Unboxed Text in corner (Foundry Blue accent) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[11px] font-bold tracking-wider text-[#1b365d] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-blue-100 shadow-xs">
                    {product.category}
                  </span>
                </div>

                {/* HOVER SPECIFICATIONS BADGE OVERLAY */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-3 pointer-events-none z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#1b365d]/95 rounded-lg shadow-md border border-white/20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                    <Eye className="w-3.5 h-3.5 text-[#ffa533]" />
                    <span>View Specifications</span>
                  </span>
                </div>

                {/* HOVER DUAL-TONE ACCENT LINE (Foundry Blue to Molten Orange) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1b365d] via-[#2563eb] to-[#f24b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </div>

              {/* CARD CONTENT */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1b365d] group-hover:text-[#f24b00] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-end text-xs">
                  <span className="inline-flex items-center gap-1 text-[#f24b00] font-bold group-hover:translate-x-1 transition-transform">
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CATALOG NOTE */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
            <span>
              All representative product photos are structured in <code className="text-slate-900 font-mono font-semibold">src/data/products.ts</code> for instant replacement with official Dishant Industries imagery.
            </span>
          </div>
          <span className="text-slate-500 shrink-0 font-mono font-semibold">
            10 / 10 Products Loaded
          </span>
        </div>

      </div>
    </section>
  );
};
