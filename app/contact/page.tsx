import type { Metadata } from "next";
import { Mail, Phone, MessageSquare, Clock } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with GameSpace Lab. Fill out our brief and we'll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="relative py-20 border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 hero-gradient opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-cyan-glow text-sm font-mono font-medium tracking-widest uppercase mb-4">Get In Touch</p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Let's Build<br /><span className="gradient-text-cyan">Something Great</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              Fill out the brief below and we'll get back to you within 24 hours with a tailored response.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar info */}
            <div className="lg:col-span-1 space-y-6">
              <SectionReveal>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                    { icon: Phone, label: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                    { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                    { icon: MessageSquare, label: "Discovery Call", value: "Free 30-minute consultation" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="glass-card rounded-2xl p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-glow/10 border border-cyan-glow/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-cyan-glow" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-white/80 text-sm font-medium hover:text-cyan-glow transition-colors">{value}</a>
                        ) : (
                          <p className="text-white/80 text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="glass-card rounded-2xl p-6 border-neon-green">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-neon animate-pulse" />
                    <span className="text-green-neon text-sm font-semibold">Now in India</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We're actively onboarding clients from India, Pakistan, Bangladesh, and Southeast Asia. Local timezone support available.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="glass-card rounded-2xl p-6">
                  <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">Budget Guide</p>
                  {[
                    { range: "Under $5k", desc: "MVP or prototype" },
                    { range: "$5k – $15k", desc: "Standard app / web" },
                    { range: "$15k – $50k", desc: "Enterprise product" },
                    { range: "$50k+", desc: "Large-scale system" },
                  ].map(({ range, desc }) => (
                    <div key={range} className="flex justify-between py-2 border-b border-white/[0.04] last:border-0">
                      <span className="text-cyan-glow text-sm font-mono">{range}</span>
                      <span className="text-white/40 text-sm">{desc}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <SectionReveal direction="left" delay={0.1}>
                <ContactForm />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
