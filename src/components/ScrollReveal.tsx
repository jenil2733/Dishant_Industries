import React, { useEffect, useRef, useState } from "react";

export type RevealVariant = "fade-up" | "fade-down" | "slide-left" | "slide-right" | "scale-up" | "fade-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 750,
  className = "",
  threshold,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    // Quick viewport check on mount: if already visible above fold, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setIsVisible(true);
      if (once) return;
    }

    const isMobile = window.innerWidth < 768;
    const computedThreshold = threshold !== undefined ? threshold : isMobile ? 0.04 : 0.08;
    const computedRootMargin = isMobile ? "0px 0px -15px 0px" : "0px 0px -35px 0px";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: computedThreshold,
        rootMargin: computedRootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [threshold, once]);

  // Compute CSS styles for extraordinary transforms with silky physics easing
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transitionProperty: "opacity, transform, filter",
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform, filter",
    };

    if (isVisible) {
      return {
        ...base,
        opacity: 1,
        transform: "translate3d(0, 0, 0) scale(1)",
        filter: "blur(0px)",
      };
    }

    switch (variant) {
      case "fade-up":
        return {
          ...base,
          opacity: 0,
          transform: "translate3d(0, 32px, 0)",
          filter: "blur(4px)",
        };
      case "fade-down":
        return {
          ...base,
          opacity: 0,
          transform: "translate3d(0, -32px, 0)",
          filter: "blur(4px)",
        };
      case "slide-left":
        return {
          ...base,
          opacity: 0,
          transform: "translate3d(-36px, 0, 0)",
          filter: "blur(4px)",
        };
      case "slide-right":
        return {
          ...base,
          opacity: 0,
          transform: "translate3d(36px, 0, 0)",
          filter: "blur(4px)",
        };
      case "scale-up":
        return {
          ...base,
          opacity: 0,
          transform: "translate3d(0, 20px, 0) scale(0.93)",
          filter: "blur(4px)",
        };
      case "fade-in":
      default:
        return {
          ...base,
          opacity: 0,
          transform: "translate3d(0, 0, 0)",
          filter: "blur(6px)",
        };
    }
  };

  return (
    <div ref={domRef} style={getStyles()} className={className}>
      {children}
    </div>
  );
};
