"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatCounterProps {
  stat: { value: number; suffix: string; label: string };
}

export default function StatCounter({ stat }: StatCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold mb-2">
        <span className="gradient-text-cyan">
          {inView ? (
            <CountUp end={stat.value} duration={2.5} separator="," />
          ) : (
            "0"
          )}
        </span>
        <span className="gradient-text-cyan">{stat.suffix}</span>
      </div>
      <p className="text-white/40 text-sm font-medium">{stat.label}</p>
    </div>
  );
}
