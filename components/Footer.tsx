"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Twitter, Linkedin, Github, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

const socialIcons = {
  Twitter: Twitter,
  Linkedin: Linkedin,
  Github: Github,
  Instagram: Instagram,
  Youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-900/50">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-glow to-blue-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" fill="currentColor" />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-glow to-blue-500 blur-md opacity-30" />
              </div>
              <span className="font-display font-bold text-lg text-white">GameSpace Lab</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Built by engineers from Netflix and Google. Delivering world-class Android & web solutions
              to businesses across 200+ countries.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-white/40 hover:text-cyan-glow text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-cyan-glow transition-colors" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-white/40 hover:text-cyan-glow text-sm transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-cyan-glow transition-colors" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-6 tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-6 tracking-wide">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(siteConfig.socials).map(([platform, href]) => {
                const IconComponent = socialIcons[platform.charAt(0).toUpperCase() + platform.slice(1) as keyof typeof socialIcons];
                if (!IconComponent) return null;
                return (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/40 hover:text-cyan-glow hover:border-cyan-glow/30 transition-all"
                    aria-label={platform}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="text-xs text-white/30 mb-3">Expanding in India</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-neon/20 bg-green-neon/5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-neon animate-pulse" />
                <span className="text-green-neon text-xs font-medium">Now Hiring in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} GameSpace Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
