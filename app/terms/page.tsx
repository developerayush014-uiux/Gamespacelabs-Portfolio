import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="relative py-24 border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-white/40 text-sm">Last updated: April 2026</p>
          </SectionReveal>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 sm:p-12">
            <SectionReveal>
              <div className="space-y-6 text-white/60 leading-relaxed">
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">1. Services</h2>
                  <p>GameSpace Lab provides software development consulting services as outlined in individual project agreements. All work is governed by a signed Statement of Work (SOW) or Master Services Agreement (MSA).</p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">2. Payment</h2>
                  <p>Payment terms are defined in each project agreement. Standard terms are 50% upfront, 50% on delivery unless otherwise agreed in writing.</p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
                  <p>Upon final payment, all custom-developed code and assets created for a project are transferred to the client. GameSpace Lab retains the right to showcase completed work in portfolios unless otherwise agreed.</p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
                  <p>GameSpace Lab's liability is limited to the amount paid for the specific engagement in question. We are not liable for indirect or consequential damages.</p>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white mb-3">5. Contact</h2>
                  <p>For inquiries, contact <a href="mailto:hello@gamespacelab.com" className="text-cyan-glow hover:underline">hello@gamespacelab.com</a>.</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
