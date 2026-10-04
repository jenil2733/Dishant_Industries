import React from "react";
import { Leaf, Flame, Recycle, Gauge, Shield, ArrowUpRight } from "lucide-react";

export const SustainabilitySection: React.FC = () => {
  const initiatives = [
    {
      icon: <Flame className="w-5 h-5 text-emerald-600" />,
      title: "Biomass Pellets & White Coal Fuel",
      description:
        "Our furnaces utilize clean-burning agricultural residue biomass pellets (white coal) in place of heavy fossil furnace oils. This renewable solid biofuel delivers high calorific efficiency with dramatically reduced sulfur and carbon emissions.",
    },
    {
      icon: <Recycle className="w-5 h-5 text-emerald-600" />,
      title: "Closed-Loop Secondary Metal Recycling",
      description:
        "Every month, hundreds of tonnes of post-industrial 6063 extrusion scrap, automobile components, and TT scrap are segregated and remelted, closing the loop and preventing the energy-intensive mining of virgin bauxite ore.",
    },
    {
      icon: <Gauge className="w-5 h-5 text-emerald-600" />,
      title: "High-Efficiency Thermal Refractory Linings",
      description:
        "Engineered multi-layer ceramic fiber insulation and dense alumina refractory blocks minimize heat transmission losses, ensuring that melting thermal energy is concentrated directly inside the molten bath.",
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      title: "Eco-Conscious Foundry Sand Reclamation",
      description:
        "Spent silica sand from our moulding lines is magnetically screened, mechanically agitated, and conditioned for reuse across non-critical foundry bedding, minimizing disposal footprint in Rajkot.",
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>Sustainable Metallurgy</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Green Foundry Initiatives</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Responsible Metal Casting Powered by White Coal &amp; Circular Recycling
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Industrial manufacturing demands sustainable responsibility. Dishant Industries operates with 
            an eco-forward mindset—substituting fossil oils with renewable biomass briquettes (white coal) 
            and actively recycling secondary aluminium streams back into high-grade industrial alloys.
          </p>
        </div>

        {/* INITIATIVES GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FACTUAL FOUNDRY COMMITMENT BOX */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-base font-bold text-slate-900">
              Green Supply Chain Partnerships
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Are you an OEM or casting buyer looking to reduce your Scope 3 embodied carbon? Partner with Dishant Industries for biomass-cast components with documented secondary scrap utilization.
            </p>
          </div>
          <a
            href="mailto:dishantindustriesllp@gmail.com?subject=Enquiry%20-%20Sustainable%20Aluminium%20Casting"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Discuss Sustainable Casting</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
