import React, { useState } from "react";
import { Play, Pause, Volume2, Maximize2, Flame, Info } from "lucide-react";

export const ProcessVideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Replace with official Dishant Industries process video
  const officialVideoSrc: string | null = null; // Set to "/videos/dishant-casting-process.mp4" when available

  const processStages = [
    {
      step: "01",
      title: "Raw Scrap & Ingot Charge Preparation",
      temp: "Ambient",
      description:
        "Segregation and spectroscopic validation of incoming scrap, extrusion profiles, and master ingots to balance the metallurgical charge prior to furnace loading.",
    },
    {
      step: "02",
      title: "Biomass Reverberatory Melting",
      temp: "720°C - 740°C",
      description:
        "Melting powered by eco-friendly biomass white coal fuel pellets, providing uniform radiant heating with reduced carbon emissions and low melt oxidation.",
    },
    {
      step: "03",
      title: "Rotary Degassing & Flux Treatment",
      temp: "730°C",
      description:
        "Neutral nitrogen gas purging via graphite rotary impeller to eliminate hydrogen porosity and lift micro-inclusions to the bath surface for complete dross skimming.",
    },
    {
      step: "04",
      title: "Laminar Mould Pouring",
      temp: "710°C - 725°C",
      description:
        "Controlled tilt ladle pouring through ceramic foam filters into engineered sand matchplates with optimized runner-to-gate ratios to prevent air entrapment.",
    },
    {
      step: "05",
      title: "Directional Chilled Solidification",
      temp: "Cooling Cycle",
      description:
        "Strategic use of bottom chill plates and exothermic feeder risers ensures progressive directional solidification, guaranteeing pore-free aluminium blocks.",
    },
    {
      step: "06",
      title: "Shakeout, Fettling & Spectrometer Testing",
      temp: "Finished",
      description:
        "Vibratory sand knockout, shot-blasting, runner cut-off, and chemical composition verification using optical emission spectrometry before dispatch.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            <Flame className="w-4 h-4 text-orange-600" />
            <span>Manufacturing Methodology</span>
            <span className="text-slate-300">/</span>
            <span>Zero-Defect Foundry Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Aluminium Block Casting Process
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A precise metallurgical journey from biomass-fueled reverberatory melting to 
            micro-porosity-free directional solidification.
          </p>
        </div>

        {/* CINEMATIC VIDEO CONTAINER */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
          
          {/* VIDEO OR INDUSTRIAL FALLBACK CONTAINER */}
          <div className="relative aspect-16/9 sm:aspect-21/9 w-full max-h-[580px] bg-slate-950 flex items-center justify-center overflow-hidden">
            
            {officialVideoSrc ? (
              // Replace with official Dishant Industries process video
              <video
                src={officialVideoSrc}
                className="w-full h-full object-cover"
                controls
                autoPlay={isPlaying}
              />
            ) : (
              // REAL INDUSTRIAL ALUMINIUM CASTING IMAGE FALLBACK
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
                  alt="Dishant Industries — Aluminium Block Casting Process"
                  className="w-full h-full object-cover brightness-75 scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />

                {/* Video Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                  
                  {/* Play Button Trigger */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-orange-600 hover:bg-orange-500 text-white shadow-2xl shadow-orange-950 transition-all hover:scale-110 focus:outline-hidden"
                    aria-label="Play process preview"
                  >
                    <div className="absolute -inset-2 rounded-full border-2 border-orange-500/40 animate-ping pointer-events-none" />
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 translate-x-0.5 fill-white" />
                    )}
                  </button>

                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-white mt-6 tracking-tight max-w-xl">
                    Dishant Industries — Aluminium Block Casting Process
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-200 max-w-md">
                    Watch our molten aluminium pouring, sand mould filling, and heavy block cooling cycles.
                  </p>

                  <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700">
                      4K Ultra-HD
                    </span>
                    <span>·</span>
                    <span>Vavdi Foundry Unit</span>
                    <span>·</span>
                    <span>720°C Thermal Pour</span>
                  </div>

                  {/* CODE REPLACEMENT NOTICE */}
                  <div className="mt-6 flex items-center gap-2 text-[11px] text-slate-300 bg-slate-950/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-700">
                    <Info className="w-3.5 h-3.5 text-orange-400" />
                    <span>Representative process preview. Ready for official Dishant Industries MP4 file.</span>
                  </div>
                </div>

                {/* Bottom Video Progress Simulation */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent flex items-center justify-between text-xs text-slate-300 z-10">
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="text-orange-400 font-bold">02:45</span>
                    <span>/</span>
                    <span>06:30</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 text-slate-300 hover:text-white cursor-pointer" />
                    <Maximize2 className="w-4 h-4 text-slate-300 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* PROCESS STAGES STEPPER (Light Theme) */}
          <div className="p-6 sm:p-8 bg-white border-t border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                Step-by-Step Casting Sequence
              </span>
              <span className="text-xs font-mono font-bold text-orange-600">
                Stage {activeStep + 1} of {processStages.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {processStages.map((st, idx) => (
                <button
                  key={st.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeStep === idx
                      ? "bg-orange-50 border-orange-500 shadow-sm"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`font-mono text-xs font-black ${
                        activeStep === idx ? "text-orange-600" : "text-slate-400"
                      }`}
                    >
                      {st.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">
                      {st.temp}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-bold line-clamp-1 ${
                      activeStep === idx ? "text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {st.title}
                  </span>
                </button>
              ))}
            </div>

            {/* ACTIVE STAGE HIGHLIGHT DETAIL */}
            <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-mono text-lg font-black text-orange-600">
                  {processStages[activeStep].step}
                </span>
                <div>
                  <strong className="text-slate-950 block text-sm font-bold">
                    {processStages[activeStep].title}
                  </strong>
                  <p className="text-slate-600 mt-0.5">
                    {processStages[activeStep].description}
                  </p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-xs font-bold text-orange-700 bg-orange-100/80 px-2.5 py-1 rounded border border-orange-300">
                Operating Temp: {processStages[activeStep].temp}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
