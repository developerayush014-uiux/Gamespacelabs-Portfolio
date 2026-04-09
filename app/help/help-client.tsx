"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowRight, Clock, BookOpen, Headphones } from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import { siteConfig, faqs } from "@/data/content";

const helpTopics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "How our engagement works, what to expect, and how to prepare for the first call.",
    href: "/faq",
    color: "#00d4ff",
  },
  {
    icon: MessageCircle,
    title: "Project Enquiries",
    description: "Discuss scope, timeline, budget, and technical requirements.",
    href: "/contact",
    color: "#00ff88",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Post-launch support, maintenance retainers, and issue escalation.",
    href: "/contact",
    color: "#a855f7",
  },
];

export default function HelpClient() {
  return (
    <div className="relative pt-24 pb-20">
      <div className="fixed inset-0 hero-gradient bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center section-padding pb-8">
            <p className="text-cyan-glow font-mono text-sm tracking-widest uppercase mb-4">
              Support
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">
              How Can We
              <br />
              <span className="gradient-text-cyan">Help You?</span>
            </h1>
            <p className="text-white/40 text-xl max-w-xl mx-auto leading-relaxed">
              Reach us directly or browse our resources. We&apos;re a fast-moving team — you won&apos;t
              wait long.
            </p>
          </div>
        </SectionReveal>

        {/* Primary contact — Phone with hover glow */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            {/* Phone */}
            <motion.a
              href={`tel:${siteConfig.phone}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 group relative overflow-hidden glass-card rounded-2xl p-8 border border-cyan-glow/20 text-center cursor-pointer transition-all duration-300 hover:border-cyan-glow/50 hover:shadow-glow-cyan"
            >
              <div className="absolute inset-0 bg-glow-cyan opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cyan-glow/10 border border-cyan-glow/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-glow/20 transition-colors">
                  <Phone className="w-8 h-8 text-cyan-glow" />
                </div>
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                  Call Us
                </p>
                <p className="font-display font-bold text-2xl text-white group-hover:text-cyan-glow transition-colors mb-1">
                  {siteConfig.phone}
                </p>
                <p className="text-white/30 text-sm">Tap to call · Available Mon–Sat</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 group relative overflow-hidden glass-card rounded-2xl p-8 border border-white/[0.06] text-center cursor-pointer transition-all duration-300 hover:border-green-neon/30 hover:shadow-glow-green"
            >
              <div className="absolute inset-0 bg-glow-green opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-green-neon/10 border border-green-neon/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-neon/20 transition-colors">
                  <Mail className="w-8 h-8 text-green-neon" />
                </div>
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                  Email Us
                </p>
                <p className="font-display font-bold text-lg text-white group-hover:text-green-neon transition-colors mb-1">
                  {siteConfig.email}
                </p>
                <p className="text-white/30 text-sm">Reply within 24 hours</p>
              </div>
            </motion.a>
          </div>
        </SectionReveal>

        {/* Response time banner */}
        <SectionReveal>
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-16">
            <Clock className="w-5 h-5 text-cyan-glow/60 flex-shrink-0" />
            <p className="text-white/40 text-sm">
              <span className="text-white/70 font-medium">Business hours:</span> Monday to Saturday,
              9 AM – 7 PM IST. After-hours emails are responded to on the next business day.
            </p>
          </div>
        </SectionReveal>

        {/* Help Topics */}
        <SectionReveal>
          <h2 className="font-display font-bold text-3xl text-white mb-8">
            Browse by Topic
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {helpTopics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <SectionReveal key={topic.title} delay={i * 0.1}>
                <Link href={topic.href} className="block group">
                  <div
                    className="glass-card rounded-2xl p-6 border border-white/[0.06] card-hover h-full"
                    style={{ "--accent": topic.color } as React.CSSProperties}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all"
                      style={{ background: `${topic.color}15`, border: `1px solid ${topic.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: topic.color }} />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-cyan-glow transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">{topic.description}</p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: topic.color }}
                    >
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

        {/* Quick FAQ */}
        <SectionReveal>
          <h2 className="font-display font-bold text-2xl text-white mb-6">
            Quick Answers
          </h2>
        </SectionReveal>

        <div className="space-y-3 mb-16">
          {faqs.slice(0, 4).map((faq, i) => (
            <SectionReveal key={i} delay={i * 0.05}>
              <div className="glass-card rounded-xl p-5 border border-white/[0.06]">
                <p className="font-medium text-white/80 text-sm mb-1.5">{faq.question}</p>
                <p className="text-white/40 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="text-center">
            <Link
              href="/faq"
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium"
            >
              View all FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
