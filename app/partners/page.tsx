import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Handshake, Building2 } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import { partners } from "@/data/content";

export const metadata: Metadata = {
  title: "Partners",
  description: "GameSpace Lab works with 100+ partner firms globally across fintech, HR tech, fitness, and more.",
};

const categoryColors: Record<string, string> = {
  Technology: "#00d4ff",
  FinTech: "#00ff88",
  Fitness: "#a855f7",
  "HR Tech": "#f97316",
  "Creator Economy": "#f43f5e",
  CRM: "#eab308",
};

export default function PartnersPage() {
  const categories = [...new Set(partners.map((p) => p.category))];

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="relative py-24 border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 hero-gradient opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-4">Our Network</p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-6">
              100+ Partner Firms<br /><span className="gradient-text-cyan">Worldwide</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              We&#39;ve built a global network of partner firms across industries and regions. Together, we deliver solutions that make a real business impact.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Partner highlights */}
      <section className="py-16 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Building2, value: "100+", label: "Partner Firms", color: "#00d4ff" },
              { icon: Globe, value: "4", label: "Global Regions", color: "#00ff88" },
              { icon: Handshake, value: "8+", label: "Industry Categories", color: "#a855f7" },
            ].map(({ icon: Icon, value, label, color }) => (
              <SectionReveal key={label}>
                <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold" style={{ color }}>{value}</div>
                    <div className="text-white/40 text-sm">{label}</div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-3">Featured Partners</p>
              <h2 className="font-display text-4xl font-bold">A Snapshot of Our Network</h2>
              <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm">
                These represent a selection of our partners. Our full network spans 100+ firms across the globe.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((partner, i) => {
              const color = categoryColors[partner.category] || "#00d4ff";
              return (
                <SectionReveal key={partner.id} delay={i * 0.07}>
                  <div className={`glass-card rounded-2xl p-6 card-hover h-full relative ${partner.isNew ? "border-neon-green" : ""}`}>
                    {partner.isNew && (
                      <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-green-neon/10 border border-green-neon/20 text-green-neon text-[10px] font-bold tracking-widest uppercase">New</span>
                    )}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}>
                        <Building2 className="w-5 h-5" style={{ color }} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white">{partner.name}</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}10`, color, border: `1px solid ${color}25` }}>
                            {partner.category}
                          </span>
                          <span className="text-white/30 text-xs flex items-center gap-1">
                            <Globe className="w-3 h-3" />{partner.region}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{partner.description}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          <SectionReveal delay={0.3}>
            <div className="text-center mt-10">
              <p className="text-white/30 text-sm">
                + many more across Middle East, Europe, Russia & CIS regions
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="glass-card rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden border-neon-green">
              <div className="absolute inset-0 bg-glow-green opacity-30 pointer-events-none" />
              <div className="relative z-10">
                <Handshake className="w-12 h-12 text-green-neon mx-auto mb-6" />
                <h2 className="font-display text-4xl font-bold mb-4">Become a Partner</h2>
                <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
                  Are you an agency, consultancy, or technology firm looking to expand your service offering? Let&#39;s collaborate.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold font-display transition-all group" style={{ backgroundColor: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)", color: "#00ff88" }}>
                  Partner with Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
