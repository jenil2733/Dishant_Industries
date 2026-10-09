import React, { useEffect, useState } from "react";
import { Flame, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { DISHANT_LOGO_URL, DISHANT_LOGO_ALT } from "../assets/logo";

interface SiteLoadRevealProps {
  onComplete?: () => void;
}

export const SiteLoadReveal: React.FC<SiteLoadRevealProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING FOUNDRY...");

  useEffect(() => {
    const startTime = performance.now();
    const duration = 950; // Snappy, ultra-crisp loading experience

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 30) {
        setStatusText("PRE-HEATING BIOMASS CRUCIBLE (730°C)...");
      } else if (pct < 65) {
        setStatusText("CALIBRATING ALLOY CHEMISTRY SPEC...");
      } else if (pct < 95) {
        setStatusText("ROTARY NITROGEN DEGASSING VERIFIED...");
      } else {
        setStatusText("FOUNDRY READY · DISHANT INDUSTRIES");
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        setPhase("revealing");

        setTimeout(() => {
          setPhase("done");
          if (onComplete) onComplete();
        }, 650);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setPhase("revealing");
    setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 300);
  };

  if (phase === "done") return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070b12] text-white transition-all duration-700 select-none cursor-pointer ${
        phase === "revealing"
          ? "opacity-0 -translate-y-full pointer-events-none scale-102 filter blur-sm ease-[cubic-bezier(0.16,1,0.3,1)]"
          : "opacity-100 translate-y-0 scale-100 filter blur-0"
      }`}
      style={{ willChange: "transform, opacity, filter" }}
      title="Click anywhere to enter immediately"
    >
      {/* ATMOSPHERIC MOLTEN EMBERS & FOUNDRY HALO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Core molten orange furnace aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-[#f24b00]/20 rounded-full blur-[140px] animate-pulse" />
        {/* Deep industrial navy cooling aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] bg-[#1b365d]/40 rounded-full blur-[120px]" />
        
        {/* Shimmering subtle foundry grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f24b00 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating molten sparks */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#f24b00] animate-ping opacity-75" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-[#ffa533] animate-ping opacity-60 delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse opacity-80 delay-150" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md w-full">
        {/* BRAND EMBLEM WITH METALLIC RING */}
        <div className="relative mb-7">
          {/* Animated circular progress orbit */}
          <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#f24b00] via-[#ffa533] to-[#1b365d] opacity-75 blur-xs animate-spin" style={{ animationDuration: "6s" }} />
          
          <div className="relative w-24 h-24 rounded-2xl bg-[#0d1424] border border-white/20 p-3.5 shadow-[0_0_40px_rgba(242,75,0,0.35)] flex items-center justify-center">
            <img
              src={DISHANT_LOGO_URL}
              alt={DISHANT_LOGO_ALT}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(242,75,0,0.6)]"
            />
          </div>

          {/* Molten flame pill */}
          <div className="absolute -bottom-2.5 -right-2.5 w-8 h-8 rounded-full bg-gradient-to-tr from-[#d94100] to-[#f24b00] border-2 border-[#070b12] flex items-center justify-center shadow-lg animate-bounce">
            <Flame className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* BRAND TITLE WITH GRADIENT GLOW */}
        <h1 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white mb-1.5 flex items-center gap-2">
          <span>DISHANT</span>
          <span className="bg-gradient-to-r from-[#f24b00] via-[#ffa533] to-[#ff6b00] bg-clip-text text-transparent">
            INDUSTRIES
          </span>
        </h1>

        <p className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mb-7 flex items-center gap-2">
          <span>ALUMINIUM FOUNDRY</span>
          <span className="text-[#f24b00] font-black">•</span>
          <span>RAJKOT, GUJARAT</span>
          <span className="text-[#f24b00] font-black">•</span>
          <span className="text-slate-300 font-bold">EST. 2000</span>
        </p>

        {/* PRECISION LIQUID METAL PROGRESS BAR */}
        <div className="w-full max-w-[280px] h-2 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-white/15 mb-3.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
          <div
            className="h-full bg-gradient-to-r from-[#1b365d] via-[#2563eb] to-[#f24b00] rounded-full transition-all duration-75 ease-out shadow-[0_0_14px_rgba(242,75,0,0.95)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* STATUS & NUMERICAL TELEMETRY */}
        <div className="flex items-center justify-between w-full max-w-[280px] text-[10px] font-mono text-slate-400 mb-6">
          <span className="flex items-center gap-1.5 text-slate-300 truncate max-w-[200px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f24b00] shrink-0" />
            <span className="truncate">{statusText}</span>
          </span>
          <span className="text-[#f24b00] font-black text-xs">{progress}%</span>
        </div>

        {/* FAST SKIP CUE */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-slate-400 hover:text-white transition-colors border border-white/10 hover:border-white/30 rounded-full bg-white/5 backdrop-blur-xs"
        >
          <span>Click to enter</span>
          <ArrowRight className="w-3 h-3 text-[#f24b00]" />
        </button>
      </div>
    </div>
  );
};
