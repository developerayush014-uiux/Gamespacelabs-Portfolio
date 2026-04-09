"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export default function CounterStat({ stat, index }: { stat: Stat; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const gradients = [
    "from-cyan-glow to-blue-400",
    "from-green-neon to-cyan-glow",
    "from-purple-400 to-pink-400",
    "from-orange-400 to-red-400",
  ];

  return (
    <div
      ref={ref}
      className="text-center lg:border-r border-white/[0.06] last:border-0 px-4 py-2"
    >
      <div
        className={`font-display font-bold text-4xl lg:text-5xl xl:text-6xl mb-2 bg-gradient-to-r ${gradients[index % gradients.length]} bg-clip-text text-transparent`}
      >
        {inView ? (
          <CountUp
            end={stat.value}
            duration={2.5}
            delay={index * 0.15}
            suffix={stat.suffix}
            useEasing
            easingFn={(t, b, c, d) => {
              t /= d;
              return -c * t * (t - 2) + b;
            }}
          />
        ) : (
          `0${stat.suffix}`
        )}
      </div>
      <p className="text-white/40 text-sm font-medium">{stat.label}</p>
    </div>
  );
}
