import React, { useState } from "react";
import { MANUFACTURING_STEPS, ManufacturingStep } from "../data/manufacturing";
import { Eye, ArrowRight, Info } from "lucide-react";

export const InsideManufacturing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModalStep, setActiveModalStep] = useState<ManufacturingStep | null>(null);

  const filterTabs = [
    { id: "all", label: "All Operations" },
    { id: "melting", label: "Melting & Furnace" },
    { id: "moulding", label: "Moulding & Casting" },
    { id: "finishing", label: "Finishing & Quality" },
  ];

  const getFilteredSteps = () => {
    if (activeTab === "melting") {
      return MANUFACTURING_STEPS.filter((s) =>
        ["aluminium-melting", "furnace-operations", "molten-aluminium-degassing"].includes(s.id)
      );
    }
    if (activeTab === "moulding") {
      return MANUFACTURING_STEPS.filter((s) =>
        ["casting-mould-assembly", "sand-casting-lines", "aluminium-block-solidification"].includes(s.id)
      );
    }
    if (activeTab === "finishing") {
      return MANUFACTURING_STEPS.filter((s) =>
        ["industrial-foundry-workers", "aluminium-ingot-stacking", "scrap-processing-yard", "quality-metallurgical-inspection"].includes(s.id)
      );
    }
    return MANUFACTURING_STEPS;
  };

  const stepsToDisplay = getFilteredSteps();

  return (
    <section id="manufacturing" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              <span>Visual Foundry Tour</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">Plant Operations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Inside Aluminium Manufacturing
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              A comprehensive visual exploration of modern industrial metallurgy—from furnace melting 
              and rotary degassing to precision sand moulding and spectrometer quality control.
            </p>
          </div>

          {/* TAB FILTERS */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-xl">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-orange-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* REPRESENTATIVE DISCLAIMER BANNER */}
        <div className="mb-10 p-4 rounded-xl bg-orange-50/80 border border-orange-200 flex items-start gap-3 text-xs text-slate-700">
          <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-900 font-bold">Representative Industrial Photography:</strong>{" "}
            Images shown in this section represent the industrial metallurgical processes utilized at 
            Dishant Industries. They are illustrative reference assets and will be progressively updated 
            with official plant photography via <code className="text-orange-700 font-mono font-bold">src/data/manufacturing.ts</code>.
          </div>
        </div>

        {/* PHOTO CARDS GRID (10 PROCESS VISUALS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stepsToDisplay.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveModalStep(step)}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                {/* Replacement Key Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[10px] font-mono font-bold text-slate-700 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                    {step.replaceKey}
                  </span>
                </div>

                {/* Hover inspect badge */}
                <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-orange-600 rounded-lg shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Process</span>
                  </span>
                </div>

                {/* Bottom orange accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* CARD DETAILS */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="line-clamp-1 italic font-medium">
                    {step.technicalHighlight}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-600 shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DETAIL MODAL FOR INSPECTING MANUFACTURING STEP */}
      {activeModalStep && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative aspect-16/9 w-full bg-slate-100">
              <img
                src={activeModalStep.image}
                alt={activeModalStep.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <button
                onClick={() => setActiveModalStep(null)}
                className="absolute top-4 right-4 p-2 text-slate-700 bg-white/90 hover:bg-white rounded-full shadow-md"
              >
                ✕
              </button>
            </div>

            <div className="p-6 bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                {activeModalStep.subtitle}
              </span>
              <h3 className="font-display text-2xl font-black text-slate-950 mt-1">
                {activeModalStep.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {activeModalStep.description}
              </p>

              <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong className="text-orange-700 font-bold">Metallurgical Benchmark:</strong>{" "}
                {activeModalStep.technicalHighlight}
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
                <span>Asset Slot: <code className="font-mono text-slate-900 font-semibold">{activeModalStep.replaceKey}</code></span>
                <button
                  onClick={() => setActiveModalStep(null)}
                  className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
