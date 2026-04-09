import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Globe, Layers, TrendingUp, Award, Users } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import { founders, niches, regions, stats } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Netflix and Google engineers behind GameSpace Lab — a global mobile and web consultancy.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="relative py-24 border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 hero-gradient opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-4">Who We Are</p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Engineers Who&apos;ve Built<br /><span className="gradient-text-cyan">at Netflix Scale</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              GameSpace Lab is an Android-focused consultancy dedicated to helping businesses launch robust, secure, and scalable mobile applications — built with the same standards used inside top-tier tech companies.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-4">Our Story</p>
              <h2 className="font-display text-4xl font-bold mb-6">
                Deep Focus on the<br /><span className="gradient-text-green">Java & Kotlin Ecosystem</span>
              </h2>
              <div className="space-y-4 text-white/50 leading-relaxed">
                <p>
                  Navigating the Android ecosystem requires more than just coding — it requires a deep understanding of performance, security, and user retention. GameSpace Lab was founded to bring that depth to every engagement.
                </p>
                <p>
                  Our team specializes in full-lifecycle Android development. Whether you need to optimize your existing mobile infrastructure or build a new foundation from the ground up, we provide the expertise to ensure your business stays ahead of the digital curve.
                </p>
                <p>
                  With a track record spanning <span className="text-white/80">100+ projects</span> across HR, fintech, fitness, influencers, management, CRM, and more — and partnerships with <span className="text-white/80">100+ firms</span> globally — we bring both scale and precision to every project.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code2, label: "Java & Kotlin", desc: "Native performance, no compromise" },
                  { icon: Globe, label: "200+ Countries", desc: "Global deployment experience" },
                  { icon: Layers, label: "Full Lifecycle", desc: "MVP to enterprise scale" },
                  { icon: TrendingUp, label: "8+ Years", desc: "Combined engineering experience" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="glass-card rounded-2xl p-5 card-hover">
                    <Icon className="w-5 h-5 text-cyan-glow mb-3" />
                    <div className="font-display font-bold text-white text-sm mb-1">{label}</div>
                    <div className="text-white/40 text-xs">{desc}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-3">Leadership</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">Founder & Co-Founder</h2>
              <p className="text-white/40 mt-4 max-w-xl mx-auto">
                Two engineers. One shared mission: bringing enterprise-grade digital products to businesses everywhere.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <SectionReveal key={founder.id} delay={i * 0.15}>
                <div className="glass-card rounded-3xl p-8 card-hover h-full">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-glow/20 to-blue-500/20 border border-cyan-glow/20 flex items-center justify-center mb-6">
                    <Users className="w-10 h-10 text-cyan-glow/60" />
                  </div>

                  <div className="mb-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono border border-cyan-glow/20 bg-cyan-glow/5 text-cyan-glow mb-3">
                      {founder.experience}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{founder.name}</h3>
                  <p className="text-white/40 text-sm mb-4 font-medium">{founder.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{founder.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <p className="text-center text-white/30 text-sm mt-8 italic">
              Full founder bios will be added shortly — stay tuned.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Niches */}
      <section className="section-padding border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-3">Industry Expertise</p>
              <h2 className="font-display text-4xl font-bold">Industries We&apos;ve Served</h2>
            </div>
          </SectionReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {niches.map((niche, i) => (
              <SectionReveal key={niche} delay={i * 0.04}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-white/60 text-sm font-medium card-hover">
                  <Award className="w-3.5 h-3.5 text-cyan-glow/60" />{niche}
                </span>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global expansion */}
      <section className="section-padding border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-3">Global Reach</p>
              <h2 className="font-display text-4xl font-bold">Where We Operate</h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map((region, i) => (
              <SectionReveal key={region.name} delay={i * 0.1}>
                <div className={`glass-card rounded-2xl p-6 h-full card-hover relative ${region.isNew ? "border-neon-green" : ""}`}>
                  {region.isNew && (
                    <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-green-neon/10 border border-green-neon/20 text-green-neon text-[10px] font-bold tracking-widest uppercase">New</span>
                  )}
                  <Globe className={`w-5 h-5 mb-4 ${region.isNew ? "text-green-neon" : "text-cyan-glow/60"}`} />
                  <h3 className="font-display font-bold text-white mb-2">{region.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{region.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-white/50 mb-8">Tell us about your project and we&apos;ll get back within 24 hours.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold font-display group">
              <span className="relative z-10">Start a Conversation</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
