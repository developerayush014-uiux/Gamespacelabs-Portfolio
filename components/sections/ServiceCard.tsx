"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Smartphone, Globe, Users, Briefcase, Zap } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Globe,
  Users,
  Briefcase,
  Zap,
};

interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  accentColor: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Zap;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group glass-card rounded-2xl p-8 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 relative overflow-hidden"
    >
      {/* Gradient blob behind */}
      <div
        className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: `${service.accentColor}15`, border: `1px solid ${service.accentColor}30` }}
        >
          <Icon className="w-7 h-7" style={{ color: service.accentColor }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: `${service.accentColor}99` }}>
          {service.subtitle}
        </p>
        <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-6">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-white/50">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: service.accentColor }} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Link */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-all"
          style={{ color: `${service.accentColor}` }}
        >
          Get started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
