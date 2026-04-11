import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="relative py-24 border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/40 text-sm">Last updated: April 2026</p>
          </SectionReveal>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 sm:p-12 prose prose-invert max-w-none">
            <SectionReveal>
              <div className="space-y-6 text-white/60 leading-relaxed">
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">1. Information We Collect</h2>
                  <p>We collect information you provide when filling out our contact form, including name, email, phone number, and project details. We use this information solely to respond to your inquiry and deliver our services.</p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
                  <p>Your information is used to contact you about your project inquiry, deliver contracted services, and improve our offerings. We do not sell or share your data with third parties for marketing purposes.</p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">3. Data Security</h2>
                  <p>We implement industry-standard security measures to protect your personal information. All data is transmitted over encrypted connections (HTTPS).</p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">4. Contact</h2>
                  <p>For privacy-related inquiries, contact us at <a href="mailto:gamespacelabs@gmail.com" className="text-cyan-glow hover:underline">gamespacelabs@gmail.com</a>.</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
