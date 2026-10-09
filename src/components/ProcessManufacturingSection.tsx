import React, { useState } from "react";
import { Flame, Play, Pause, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Layers } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ProcessStage {
  step: string;
  title: string;
  area: string;
  temp: string;
  equipment: string;
  qualityCheck: string;
  summary: string;
  image: string;
  fallbackImage: string;
}

export const ProcessManufacturingSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stages: ProcessStage[] = [
    {
      step: "01",
      title: "Biomass Reverberatory Melting",
      area: "Foundry Bay 1 · Melt Deck",
      temp: "720°C – 740°C",
      equipment: "Biomass White Coal Furnace",
      qualityCheck: "Thermocouple Pyrometry (±5°C)",
      summary:
        "Segregated clean scrap and certified ingots are melted using eco-friendly agricultural biomass white coal, ensuring high thermal efficiency and reduced carbon footprint.",
      image: "/images/plant/plant-melting.png",
      fallbackImage: "/images/plant/plant-melting.svg",
    },
    {
      step: "02",
      title: "Rotary Nitrogen Degassing",
      area: "Refining Station · Crucible Line",
      temp: "730°C",
      equipment: "Graphite Rotary Impeller",
      qualityCheck: "Reduced Pressure Porosity Test",
      summary:
        "High-purity nitrogen gas is injected through a submerged graphite rotor to purge trapped hydrogen and lift micro-inclusions for complete dross separation.",
      image: "/images/plant/plant-degassing.png",
      fallbackImage: "/images/plant/plant-degassing.svg",
    },
    {
      step: "03",
      title: "Sand & Matchplate Moulding",
      area: "Tooling Shop & Moulding Lines",
      temp: "Ambient",
      equipment: "Aluminium Matchplates & Core Boxes",
      qualityCheck: "AFS 55–65 Silica Grain Density",
      summary:
        "Rigid green sand and no-bake furane moulds are assembled with computer-calculated runner-to-gate ratios to guarantee smooth, turbulence-free filling.",
      image: "/images/plant/plant-moulding.png",
      fallbackImage: "/images/plant/plant-moulding.svg",
    },
    {
      step: "04",
      title: "Laminar Pouring & Directional Solidification",
      area: "Chilled Pouring Deck",
      temp: "710°C – 725°C",
      equipment: "Tilt Ladle & Ceramic Foam Filters",
      qualityCheck: "Zero Centerline Shrinkage",
      summary:
        "Molten metal passes through ceramic foam filters into moulds fitted with bottom chilled plates, creating directional solidification for heavy, pore-free aluminium blocks.",
      image: "/images/products/aluminium-block.png",
      fallbackImage: "/images/products/aluminium-block.svg",
    },
    {
      step: "05",
      title: "Fettling & Spectrometer Verification",
      area: "Inspection & Quality Laboratory",
      temp: "Finished Spec",
      equipment: "Optical Emission Spectrometer (OES)",
      qualityCheck: "Chemical Composition Certificate",
      summary:
        "Castings undergo vibratory sand knockout, shot-blasting, and multi-element spectroscopic testing to certify LM6, LM25, or custom client metallurgy before dispatch.",
      image: "/images/plant/plant-quality.png",
      fallbackImage: "/images/plant/plant-quality.svg",
    },
  ];

  const currentStage = stages[activeStageIndex];

  const plantAreas = [
    {
      name: "Melt Deck & Furnaces",
      tag: "Biomass Gasification",
      image: "/images/plant/plant-melting.png",
      stageTarget: 0,
      description: "White coal reverberatory melting at 740°C",
    },
    {
      name: "Refining & Degassing",
      tag: "Hydrogen Purging",
      image: "/images/plant/plant-degassing.png",
      stageTarget: 1,
      description: "Rotary impeller nitrogen flux treatment",
    },
    {
      name: "Moulding Lines",
      tag: "Green & No-Bake Sand",
      image: "/images/plant/plant-moulding.png",
      stageTarget: 2,
      description: "High-durability aluminium matchplates",
    },
    {
      name: "Testing & Spectrometry",
      tag: "100% Batch Certified",
      image: "/images/plant/plant-quality.png",
      stageTarget: 4,
      description: "Optical emission spectrometer chemical assay",
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Anchor for Inside Manufacturing nav links */}
      <div id="manufacturing" className="relative -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UNIFIED SECTION HEADER */}
        <ScrollReveal variant="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Flame className="w-4 h-4 text-orange-600" />
                <span>Foundry Process</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-600">Inside Manufacturing</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Aluminium Block Casting Process &amp; Plant Operations
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Explore our synchronized manufacturing flow—from eco-friendly white coal furnace melting 
                and rotary nitrogen degassing to precision sand moulding and spectrometer testing.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Foundry Sequence: Stage {activeStageIndex + 1}/5</span>
            </div>
          </div>
        </ScrollReveal>

        {/* STAGE SELECTOR TABS */}
        <ScrollReveal variant="fade-up" delay={100} duration={700}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
            {stages.map((st, idx) => {
              const isSelected = activeStageIndex === idx;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-orange-500 shadow-md ring-2 ring-orange-500/20"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`font-mono text-xs font-black ${
                        isSelected ? "text-orange-600" : "text-slate-400"
                      }`}
                    >
                      {st.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">
                      {st.temp}
                    </span>
                  </div>
                  <h4
                    className={`text-xs font-bold line-clamp-1 ${
                      isSelected ? "text-slate-950" : "text-slate-700"
                    }`}
                  >
                    {st.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* MAIN SHOWCASE: VISUAL PREVIEW + STREAMLINED STAGE METRICS */}
        <ScrollReveal variant="scale-up" delay={200} duration={750}>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 mb-12">
          
          {/* LEFT: PLANT VISUAL PREVIEW */}
          <div className="lg:col-span-7 relative bg-slate-950 min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
            <img
              src={currentStage.image}
              alt={currentStage.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith(".png")) {
                  target.src = currentStage.fallbackImage;
                }
              }}
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

            {/* Top Area Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[11px] font-bold tracking-wider text-white bg-slate-900/90 backdrop-blur-xs px-3 py-1 rounded-md border border-slate-700 shadow-xs">
                {currentStage.area}
              </span>
            </div>

            {/* Bottom Floating Play / Preview Trigger */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  aria-label="Toggle preview"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause View</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Play Preview</span>
                    </>
                  )}
                </button>
                <span className="text-[11px] text-slate-300 font-mono hidden sm:inline">
                  Vavdi Foundry Unit
                </span>
              </div>

              <span className="font-mono text-xs font-bold text-orange-400 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-700">
                {currentStage.temp}
              </span>
            </div>
          </div>

          {/* RIGHT: CONCISE STAGE DETAILS & QUALITY CONTROLS (LESS INFO, HIGH SIGNAL) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 mb-1">
                <span>STAGE {currentStage.step}</span>
                <span>·</span>
                <span className="text-slate-500 uppercase">{currentStage.area}</span>
              </div>

              <h3 className="font-display text-2xl font-black text-slate-950 tracking-tight">
                {currentStage.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {currentStage.summary}
              </p>

              {/* COMPACT KEY METRICS */}
              <div className="mt-6 space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Operating Equipment
                  </span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                    {currentStage.equipment}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200/80">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-800 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                    <span>Quality Checkpoint</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                    {currentStage.qualityCheck}
                  </span>
                </div>
              </div>
            </div>

            {/* STAGE NAVIGATION STEPPERS */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <button
                disabled={activeStageIndex === 0}
                onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                className="text-xs font-bold text-slate-600 hover:text-slate-950 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                ← Previous Stage
              </button>
              
              <button
                onClick={() => setActiveStageIndex((prev) => (prev + 1) % stages.length)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 cursor-pointer transition-colors"
              >
                <span>{activeStageIndex === stages.length - 1 ? "Repeat Process" : "Next Stage"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
        </ScrollReveal>

        {/* INSIDE MANUFACTURING: COMPACT PLANT HIGHLIGHTS STRIP (LESS INFO, HIGH VISUAL) */}
        <ScrollReveal variant="fade-up" delay={150} duration={750}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Inside Plant Highlights (Click area to view stage)
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">
                4 Foundry Sections
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {plantAreas.map((area, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStageIndex(area.stageTarget)}
                  className={`group p-3 rounded-xl bg-white border transition-all cursor-pointer hover:shadow-md hover:-translate-y-1 ${
                    activeStageIndex === area.stageTarget
                      ? "border-orange-500 ring-2 ring-orange-500/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="relative aspect-16/10 w-full rounded-lg overflow-hidden bg-slate-900 mb-3">
                    <img
                      src={area.image}
                      alt={area.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded">
                        {area.tag}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-display text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {area.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-1">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
