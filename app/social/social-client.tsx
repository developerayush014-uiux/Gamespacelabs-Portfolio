/* eslint-disable react/style-prop-object */

"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram, Youtube, ArrowRight, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import { socialLinks, siteConfig } from "@/data/content";

const iconMap = {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Youtube,
};

export default function SocialClient() {
  return (
    <div className="relative pt-24 pb-20">
      <div className="fixed inset-0 hero-gradient bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center section-padding pb-8">
            <p className="text-cyan-glow font-mono text-sm tracking-widest uppercase mb-4">
              Stay Connected
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">
              Follow GameSpace Lab
            </h1>
            <p className="text-white/40 text-xl max-w-xl mx-auto leading-relaxed">
              Get product updates, engineering insights, behind-the-scenes, and company news across
              all our channels.
            </p>
          </div>
        </SectionReveal>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {socialLinks.map((social, i) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <SectionReveal key={social.platform} delay={i * 0.1}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group glass-card rounded-2xl p-6 border border-white/[0.06] hover:border-white/20 transition-all duration-300 block relative overflow-hidden"
                  style={{ "--hover-color": social.color } as React.CSSProperties}
                >
                  {/* Glow */}
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: social.color }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all group-hover:scale-110"
                        style={{ background: `${social.color}15`, borderColor: `${social.color}30` }}
                      >
                        {Icon && <Icon className="w-6 h-6" style={{ color: social.color }} />}
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                    </div>

                    <p className="font-mono text-xs text-white/40 mb-1">{social.platform}</p>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{social.handle}</h3>
                    <p
                      className="text-sm font-semibold mb-3 transition-all"
                      style={{ color: social.color }}
                    >
                      {social.followers} followers
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed">{social.description}</p>

                    <div
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-all"
                      style={{ color: social.color }}
                    >
                      Follow us <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              </SectionReveal>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <SectionReveal>
          <div className="glass-card rounded-3xl p-12 border border-cyan-glow/20 text-center relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-glow-cyan opacity-15" />
            <p className="text-cyan-glow font-mono text-sm tracking-widest uppercase mb-4 relative z-10">
              Newsletter
            </p>
            <h2 className="font-display font-bold text-3xl text-white mb-4 relative z-10">
              Get our monthly engineering digest
            </h2>
            <p className="text-white/40 text-base mb-8 max-w-lg mx-auto relative z-10">
              No spam. Just curated insights on Android, web, and startup engineering — once a month.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="form-input flex-1 px-4 py-3 rounded-xl text-sm"
              />
              <button
                type="submit"
                className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold font-display flex-shrink-0"
              >
                <span className="relative z-10">Subscribe</span>
              </button>
            </form>
          </div>
        </SectionReveal>

        {/* All links grid */}
        <SectionReveal>
          <h2 className="font-display font-bold text-2xl text-white mb-6">All Links</h2>
          <div className="space-y-2">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl glass-card border border-white/[0.06] hover:border-white/20 group transition-all"
                >
                  <div className="flex items-center gap-4">
                    {Icon && (
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: `${social.color}15` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: social.color }} />
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-white text-sm">{social.platform}</p>
                      <p className="text-white/40 text-xs">{social.handle}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                </a>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
