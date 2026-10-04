import React from "react";
import { CheckCircle2, ArrowRight, Layers, Flame, Box, Shield, RefreshCw } from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      number: "01",
      title: "Aluminium Block Casting",
      badge: "Major Foundry Specialty",
      icon: <Box className="w-6 h-6 text-orange-600" />,
      description:
        "High-tonnage, pore-free cast aluminium blocks manufactured for CNC tooling, structural fixtures, and machine tool bases. Cast using optimized runner-gate configurations and chilled bottom plates to prevent centerline micro-shrinkage.",
      highlights: [
        "Uniform metallurgical grain structure with vacuum-tested degassing",
        "Blocks cast up to 500kg single-piece capacity",
        "Custom alloy composition matching LM6, LM25, or client specifications",
        "Stress-relieved and pre-machined reference surfaces available",
      ],
      suitableFor: "Tool & die manufacturers, machinery beds, and automotive fixture fabricators",
    },
    {
      number: "02",
      title: "Precision Sand Casting",
      badge: "Major Foundry Specialty",
      icon: <Layers className="w-6 h-6 text-orange-600" />,
      description:
        "Advanced green sand and resin sand casting infrastructure capable of producing thin-walled, geometrically complex housings, pump bodies, and industrial motor casings with high repeatability.",
      highlights: [
        "Controlled AFS 55-65 grain silica sand with bentonite bonding",
        "Low surface roughness with minimal post-cast fettling required",
        "Matchplate and manual box moulding for high-volume and short batches",
        "Integrated riser sleeves and exothermic feeds to eliminate voids",
      ],
      suitableFor: "Pump, valve, compressor housings, and agricultural machinery OEMs",
    },
    {
      number: "03",
      title: "Pattern & Mould Engineering",
      badge: "Tooling & Pattern Shop",
      icon: <Flame className="w-6 h-6 text-orange-600" />,
      description:
        "Comprehensive in-house pattern development including high-durability aluminium matchplates, seasoned wooden core boxes, and full-mould evaporative thermocol (lost foam) patterns for complex undercut shapes.",
      highlights: [
        "Lost-foam thermocol patterns for one-piece prototype castings",
        "Hardened aluminium matchplates built for over 50,000 impressions",
        "Carefully calculated shrinkage allowances and draft angle optimization",
        "Core assemblies for intricate internal oil passages and water jackets",
      ],
      suitableFor: "Engine manifolds, turbine impellers, and custom one-off prototypes",
    },
    {
      number: "04",
      title: "No-Bake Resin Sand Casting",
      badge: "Heavy Structural Casting",
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      description:
        "Self-setting chemically bonded furane resin sand moulding delivering superior dimensional rigidity, zero mould-wall movement, and high section thickness consistency for demanding heavy engineering components.",
      highlights: [
        "High-density mould envelope resisting molten hydrostatic pressure",
        "Near-zero core shifting with tight joint line alignment",
        "Components up to 1.8m in envelope size with class-A finish",
        "Optimal thermal gradient control during extended cooling cycles",
      ],
      suitableFor: "Heavy compressor frames, high-voltage switchgear enclosures, and marine components",
    },
    {
      number: "05",
      title: "Scrap Recycling & Custom Ingot Smelting",
      badge: "Circular Metal Supply",
      icon: <RefreshCw className="w-6 h-6 text-orange-600" />,
      description:
        "Closed-loop aluminium scrap processing and secondary ingot smelting utilizing eco-friendly biomass white coal furnaces. We segregate, clean, and remelt automotive scrap, 6063 extrusions, and TT scrap into certified alloy ingots.",
      highlights: [
        "Automated magnetic iron extraction and thermal de-coating",
        "Spectrometer-verified alloy chemistry and trace impurity control",
        "Rotary impeller nitrogen degassing for gas-free remelt charges",
        "Standardized notched 5kg-7kg ingots strapped for easy handling",
      ],
      suitableFor: "Foundries, die-casters, rolling mills, and sustainable procurement supply chains",
    },
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            <span>Foundry Capabilities</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Core Manufacturing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Specialized Foundry Services &amp; Heavy Aluminium Metallurgy
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            With over 25 years of foundry expertise in Vavdi, Rajkot, Dishant Industries delivers heavy-section 
            aluminium block casting, custom pattern engineering, and tight-tolerance sand moulding for demanding engineering applications.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="mt-14 space-y-6">
          {services.map((svc) => (
            <div
              key={svc.number}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Number & Icon */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-slate-300 group-hover:text-orange-600 transition-colors">
                    {svc.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold tracking-wide text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 uppercase">
                        {svc.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-100 pt-5 lg:pt-0 lg:pl-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
                    Technical Specifications
                  </span>
                  <ul className="space-y-3">
                    {svc.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <strong className="text-slate-900 font-semibold">Ideal For:</strong> {svc.suitableFor}
                  </p>
                </div>

                {/* Direct CTA */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-3 pt-5 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-6">
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 active:scale-[0.98] rounded-xl transition-all whitespace-nowrap shadow-sm shadow-orange-600/20 hover:shadow-md hover:shadow-orange-600/30"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-500 font-medium text-center lg:text-right">
                    Custom alloy specs available
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
