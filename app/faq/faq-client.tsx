"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import { faqs } from "@/data/content";

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative pt-24 pb-20">
      <div className="fixed inset-0 hero-gradient bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center section-padding pb-8">
            <p className="text-cyan-glow font-mono text-sm tracking-widest uppercase mb-4">
              Common Questions
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">
              FAQ
            </h1>
            <p className="text-white/40 text-xl max-w-xl mx-auto leading-relaxed">
              Everything you need to know before starting a project with us.
            </p>
          </div>
        </SectionReveal>

        {/* Accordion */}
        <div className="space-y-3 mb-20">
          {faqs.map((faq, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div
                className={`glass-card rounded-2xl border overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "border-cyan-glow/30"
                    : "border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span
                    className={`font-display font-semibold text-base leading-snug transition-colors ${
                      openIndex === i ? "text-white" : "text-white/70"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all ${
                      openIndex === i
                        ? "bg-cyan-glow/15 border-cyan-glow/30 text-cyan-glow"
                        : "bg-white/[0.04] border-white/[0.08] text-white/40"
                    }`}
                  >
                    {openIndex === i ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 border-t border-white/[0.05] pt-4">
                        <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Still have questions */}
        <SectionReveal>
          <div className="glass-card rounded-3xl p-10 border border-white/[0.06] text-center">
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              Still have questions?
            </h2>
            <p className="text-white/40 text-base mb-8 max-w-md mx-auto">
              Our team is happy to answer anything that&apos;s not covered here. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display group"
              >
                <span className="relative z-10">Ask us directly</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/help"
                className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium"
              >
                Visit Help Centre
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
