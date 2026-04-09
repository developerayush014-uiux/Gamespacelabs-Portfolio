"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Globe, Shield, Code2, ChevronRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionReveal from "@/components/ui/SectionReveal";
import CounterStat from "@/components/ui/CounterStat";
import ServiceCard from "@/components/sections/ServiceCard";
import { stats, services, niches, regions } from "@/data/content";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-glow/5 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green-neon/5 blur-3xl animate-float pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-neon animate-pulse" />
            <span className="text-xs font-medium text-cyan-glow/80 tracking-widest uppercase">
              Netflix × Google Engineers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-white">We Build</span>
            <br />
            <span className="gradient-text-cyan">World-Class</span>
            <br />
            <span className="gradient-text-multi">Digital Products</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Built by engineers from <span className="text-white/80">Netflix</span> and{" "}
            <span className="text-white/80">Google</span>. 100+ projects delivered across{" "}
            <span className="text-cyan-glow/80">200+ countries</span>. Now expanding in India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="btn-primary group px-8 py-4 rounded-2xl text-base font-semibold font-display inline-flex items-center gap-3"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="btn-ghost group px-8 py-4 rounded-2xl text-base font-semibold font-display inline-flex items-center gap-3"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Niche marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-20 marquee-wrapper"
          >
            <p className="text-white/20 text-xs tracking-widest uppercase mb-6">
              Trusted across industries
            </p>
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {[...niches, ...niches].map((niche, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-white/30 text-sm whitespace-nowrap"
                >
                  <Zap className="w-3 h-3 text-cyan-glow/40" />
                  {niche}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-glow/40 to-transparent" />
        </motion.div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="relative py-20 border-y border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-glow/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <CounterStat stat={stat} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ──────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <p className="text-cyan-glow text-sm font-mono tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4">
              Services Built for <span className="gradient-text-green">Scale</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              From native Android to full-stack web — precision engineering with the
              standards of a top-tier product team.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-12">
            <Link
              href="/services"
              className="btn-ghost group px-6 py-3 rounded-xl text-sm font-semibold font-display inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── Global Reach ──────────────────────────────────────── */}
      <section className="section-padding bg-navy-900/30 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <p className="text-cyan-glow text-sm font-mono tracking-widest uppercase mb-4">
                Global Reach
              </p>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-6">
                Operating Across{" "}
                <span className="gradient-text-cyan">200+ Countries</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Our business spans the Middle East, Russia, and Europe — and we&apos;re now
                establishing a strong foothold across South Asia and Southeast Asia, with
                India as our newest hub.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {regions.map((region) => (
                  <div
                    key={region.name}
                    className={`glass-card rounded-xl p-4 card-hover ${
                      region.isNew ? "border-neon-green" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Globe className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                      <span className="font-display font-semibold text-sm text-white">
                        {region.name}
                      </span>
                      {region.isNew && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-neon/10 text-green-neon border border-green-neon/20 font-mono">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {region.description}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="relative h-80 lg:h-[460px] flex items-center justify-center">
                <div className="absolute inset-0 bg-glow-cyan opacity-30 rounded-full blur-3xl" />
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  {[1, 2, 3].map((ring) => (
                    <div
                      key={ring}
                      className="absolute inset-0 rounded-full border border-cyan-glow/10"
                      style={{ transform: `scale(${ring * 0.35 + 0.3})` }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-card rounded-full w-40 h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center border-neon-cyan">
                      <Globe className="w-10 h-10 text-cyan-glow mb-2" />
                      <span className="font-display font-bold text-3xl gradient-text-cyan">
                        200+
                      </span>
                      <span className="text-white/40 text-xs mt-1">Countries</span>
                    </div>
                  </div>
                  {[
                    { top: "10%", left: "70%", label: "EU" },
                    { top: "30%", left: "15%", label: "ME" },
                    { top: "65%", left: "78%", label: "IN" },
                    { top: "80%", left: "28%", label: "RU" },
                  ].map((dot) => (
                    <div key={dot.label} className="absolute" style={{ top: dot.top, left: dot.left }}>
                      <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-cyan-glow" />
                        <div className="absolute inset-0 rounded-full bg-cyan-glow animate-ping opacity-40" />
                        <span className="absolute left-3 top-0 text-[9px] text-cyan-glow/60 whitespace-nowrap font-mono">
                          {dot.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <div className="glass-card rounded-3xl p-12 lg:p-16 relative overflow-hidden border-neon-cyan">
              <div className="absolute inset-0 bg-glow-cyan opacity-20 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-glow/60 to-transparent" />
              <div className="relative z-10">
                <Shield className="w-10 h-10 text-cyan-glow mx-auto mb-6" />
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
                  Ready to Build Something{" "}
                  <span className="gradient-text-multi">Exceptional?</span>
                </h2>
                <p className="text-white/50 mb-8 max-w-md mx-auto">
                  Join 100+ companies who trust GameSpace Lab to deliver. Tell us your idea —
                  we&apos;ll make it real.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary group px-8 py-4 rounded-2xl text-base font-semibold font-display inline-flex items-center gap-3"
                >
                  <Code2 className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
