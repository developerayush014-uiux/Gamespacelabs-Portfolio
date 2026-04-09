"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-glow to-blue-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" fill="currentColor" />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-glow to-blue-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base tracking-tight text-white">
                  GameSpace
                </span>
                <span className="font-display font-medium text-xs text-cyan-glow/80 tracking-widest uppercase">
                  Lab
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                    pathname === link.href
                      ? "text-cyan-glow"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold font-display inline-flex items-center gap-2"
              >
                <span className="relative z-10">Start a Project</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy-950/90 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-navy-900 border-l border-white/[0.08] lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
                <span className="font-display font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 p-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        pathname === link.href
                          ? "bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/20"
                          : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-white/[0.06]">
                <Link
                  href="/contact"
                  className="btn-primary w-full px-5 py-3 rounded-xl text-sm font-semibold font-display text-center block"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
