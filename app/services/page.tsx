import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Smartphone, Globe, Users, Briefcase, Check, Zap } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Android development, web apps, UX design, and project management from Netflix and Google engineers.",
};

const serviceIconMap: Record<string, React.ElementType> = { Smartphone, Globe, Users, Briefcase };

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="relative py-24 border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 hero-gradient opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-4">Our Services</p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Built for Businesses<br /><span className="gradient-text-cyan">That Demand the Best</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              From native Android development to full-stack web platforms, we deliver engineering excellence across every layer of your product.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon] || Zap;
            const isEven = i % 2 === 0;
            return (
              <SectionReveal key={service.id} delay={i * 0.05}>
                <div id={service.id} className={`glass-card rounded-3xl overflow-hidden bg-gradient-to-br ${service.gradient} card-hover`} style={{ borderColor: `${service.accentColor}20` }}>
                  <div className={`flex flex-col lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    <div className="flex-1 p-8 sm:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${service.accentColor}15`, border: `1px solid ${service.accentColor}30` }}>
                          <Icon className="w-7 h-7" style={{ color: service.accentColor }} />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-white">{service.title}</h2>
                          <p className="text-xs font-mono tracking-widest uppercase" style={{ color: service.accentColor }}>{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-white/60 text-base leading-relaxed mb-8">{service.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${service.accentColor}15` }}>
                              <Check className="w-3 h-3" style={{ color: service.accentColor }} />
                            </div>
                            <span className="text-white/60 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display transition-all group"
                        style={{ backgroundColor: `${service.accentColor}15`, border: `1px solid ${service.accentColor}30`, color: service.accentColor }}>
                        Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="lg:w-64 p-8 flex items-center justify-center border-t lg:border-t-0 lg:border-l" style={{ borderColor: `${service.accentColor}10`, backgroundColor: `${service.accentColor}05` }}>
                      <div className="relative">
                        <div className="w-24 h-24 rounded-3xl flex items-center justify-center" style={{ backgroundColor: `${service.accentColor}10`, border: `2px solid ${service.accentColor}20` }}>
                          <Icon className="w-12 h-12 opacity-60" style={{ color: service.accentColor }} />
                        </div>
                        <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30" style={{ backgroundColor: service.accentColor }} />
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-3">How We Work</p>
              <h2 className="font-display text-4xl font-bold">Our Process</h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We understand your goals, constraints, and user needs through a structured workshop." },
              { step: "02", title: "Proposal", desc: "A detailed scope, timeline, and cost breakdown — no surprises." },
              { step: "03", title: "Build", desc: "Agile sprints with weekly demos. You stay in the loop at every stage." },
              { step: "04", title: "Launch & Support", desc: "Smooth deployment and 30-day post-launch support as standard." },
            ].map((phase, i) => (
              <SectionReveal key={phase.step} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 card-hover">
                  <div className="font-mono text-4xl font-bold gradient-text-cyan mb-4">{phase.step}</div>
                  <h3 className="font-display font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
