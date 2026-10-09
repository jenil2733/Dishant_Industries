import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "500+", "100+", "25+", "2000"
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1600,
  className = "",
}) => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const domRef = useRef<HTMLSpanElement>(null);

  // Extract number and suffix (e.g., "500+" -> num: 500, suffix: "+", prefix: "")
  const match = value.match(/^([^\d]*)(\d+[\.\d]*)([^\d]*)$/);
  const prefix = match ? match[1] : "";
  const numericTarget = match ? parseFloat(match[2]) : NaN;
  const suffix = match ? match[3] : "";
  const isDecimal = match ? match[2].includes(".") : false;

  useEffect(() => {
    if (isNaN(numericTarget)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startNum = 0;

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out expo curve for crisp mechanical precision
            const easeOutProgress = 1 - Math.pow(2, -10 * progress);
            const currentNum = startNum + (numericTarget - startNum) * easeOutProgress;

            const formatted = isDecimal
              ? currentNum.toFixed(1)
              : Math.floor(currentNum).toLocaleString();

            setDisplayValue(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [value, duration, numericTarget, prefix, suffix, isDecimal, hasAnimated]);

  return (
    <span ref={domRef} className={className}>
      {hasAnimated ? displayValue : `${prefix}0${suffix}`}
    </span>
  );
};
