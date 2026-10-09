import React, { useEffect, useState } from "react";

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3.5px] z-[80] pointer-events-none bg-slate-900/10">
      <div
        className="relative h-full bg-gradient-to-r from-[#1b365d] via-[#2563eb] to-[#f24b00] shadow-[0_0_12px_rgba(242,75,0,0.85)] transition-[width] duration-75 ease-out will-change-[width]"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Leading edge molten flare */}
        {scrollProgress > 0 && scrollProgress < 100 && (
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#ffa533] shadow-[0_0_10px_#f24b00] animate-ping" />
        )}
      </div>
    </div>
  );
};
