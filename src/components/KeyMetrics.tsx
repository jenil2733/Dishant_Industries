import React from "react";
import { COMPANY } from "../data/company";
import { Award, Users, Scale, History } from "lucide-react";

export const KeyMetrics: React.FC = () => {
  const isBlue = (idx: number) => idx % 2 === 0;

  const iconMap: Record<number, React.ReactNode> = {
    0: <History className="w-5 h-5 text-[#1b365d]" />,
    1: <Scale className="w-5 h-5 text-[#f24b00]" />,
    2: <Award className="w-5 h-5 text-[#1b365d]" />,
    3: <Users className="w-5 h-5 text-[#f24b00]" />,
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY.stats.map((stat, idx) => {
            const blueTheme = isBlue(idx);
            return (
              <div
                key={stat.label}
                className={`relative p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between group transition-all duration-200 ${
                  blueTheme
                    ? "hover:border-[#1b365d] hover:shadow-blue-900/10"
                    : "hover:border-[#f24b00] hover:shadow-orange-900/10"
                } hover:shadow-md`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    {stat.label}
                  </span>
                  <div
                    className={`p-2.5 rounded-lg border group-hover:scale-105 transition-transform ${
                      blueTheme
                        ? "bg-blue-50 border-blue-200 text-[#1b365d]"
                        : "bg-orange-50 border-orange-200 text-[#f24b00]"
                    }`}
                  >
                    {iconMap[idx]}
                  </div>
                </div>

                <div>
                  <span
                    className={`font-display text-3xl sm:text-4xl font-black tabular-nums tracking-tight ${
                      blueTheme ? "text-[#1b365d]" : "text-[#f24b00]"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <p className="mt-1 text-xs font-medium text-slate-600 leading-snug">
                    {stat.subtext}
                  </p>
                </div>

                {/* Alternating accent indicator */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-[2px] bg-transparent transition-all rounded-full ${
                    blueTheme
                      ? "group-hover:bg-[#1b365d]"
                      : "group-hover:bg-[#f24b00]"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
