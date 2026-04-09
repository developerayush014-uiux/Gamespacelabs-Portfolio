import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="fixed inset-0 hero-gradient bg-grid pointer-events-none" />
      <div className="relative z-10 text-center px-4">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-glow to-blue-500 flex items-center justify-center mx-auto mb-8">
          <Zap className="w-10 h-10 text-white" fill="currentColor" />
        </div>
        <p className="text-cyan-glow font-mono text-sm tracking-widest uppercase mb-4">404</p>
        <h1 className="font-display font-bold text-5xl text-white mb-4">Page not found</h1>
        <p className="text-white/40 text-lg mb-10 max-w-md mx-auto">
          This page doesn&apos;t exist — yet. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display"
        >
          <ArrowLeft className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
