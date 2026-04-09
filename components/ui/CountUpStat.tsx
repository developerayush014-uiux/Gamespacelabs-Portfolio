"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CountUpStatProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function CountUpStat({ value, suffix = "", label }: CountUpStatProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display font-bold text-4xl lg:text-5xl text-white mb-2 transition-colors group-hover:text-cyan-glow">
        {inView ? (
          <CountUp end={value} duration={2.2} suffix={suffix} separator="," />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p className="text-white/40 text-sm font-medium tracking-wide">{label}</p>
    </div>
  );
}
