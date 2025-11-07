import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* Hero */}
          <section className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Refund Policy</h1>
              <p className="text-white/70">Last updated: November 2024</p>
            </div>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-8 pb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. 30-Day Money-Back Guarantee</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We offer a 30-day money-back guarantee on all our internet service plans. If you're not satisfied with
                Beatrix Net's service quality or coverage during your first month, you can request a full refund of your
                service fees. Simply contact us at 1-844-525-0789 or email support@beatrixnet.com.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Conditions for Refund</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                To be eligible for a refund, the following conditions must be met:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Refund request must be made within 30 days of service activation</li>
                <li>All equipment must be returned in original condition</li>
                <li>No unreturned equipment charges should be outstanding</li>
                <li>Account must be in good standing (no unauthorized usage)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. Refund Process</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">After your refund request is approved:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>We will arrange equipment pickup at no charge</li>
                <li>Refunds will be processed within 7-10 business days</li>
                <li>Refunds will be issued to your original payment method</li>
                <li>We will provide confirmation of your refund</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. Equipment Return</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                All Beatrix Net equipment must be returned within 15 days of service cancellation. Unreturned equipment
                will be charged at the current replacement cost. We cover shipping costs for equipment returns.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Exclusions</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">Refunds are not applicable to:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Customers who exceed the 30-day refund window</li>
                <li>One-time or promotional fees</li>
                <li>Service packages that have been canceled and reactivated</li>
                <li>Charges for equipment damage or loss</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Contact Us</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                For questions about our refund policy or to request a refund:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white">Beatrix Net Customer Support</p>
                <p className="text-white/70">Phone: 1-844-525-0789</p>
                <p className="text-white/70">Email: support@beatrixnet.com</p>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
