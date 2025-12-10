import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function TermsAndConditionsPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms and Conditions</h1>
              <p className="text-white/70">Last updated: November 2024</p>
            </div>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-8 pb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Service Agreement</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                By subscribing to Beatrix Net services, you agree to these Terms and Conditions. These terms govern your
                use of our cable internet services and any related services provided by Beatrix Net.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Service Availability</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net services are available only in areas where we provide coverage. Service availability is
                subject to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Technical feasibility and line availability</li>
                <li>Compliance with local regulations</li>
                <li>Credit approval</li>
                <li>Successful installation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. Payment Terms</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Customers agree to pay charges for services according to the rate plan selected. Billing occurs monthly
                in advance. Payment is due on the date specified in your billing statement.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. Service Modifications</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Beatrix Net reserves the right to modify or discontinue services with 30 days' notice. We also reserve
                the right to modify these terms at any time. Continued use of services constitutes acceptance of
                modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Equipment</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                All equipment provided by Beatrix Net remains our property. You agree to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Use equipment only for authorized purposes</li>
                <li>Return equipment upon service cancellation</li>
                <li>Pay replacement costs for lost or damaged equipment</li>
                <li>Not modify or repair equipment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Acceptable Use</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">You agree not to use our services for:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Illegal activities or content</li>
                <li>Harassment, threats, or abusive behavior</li>
                <li>Unauthorized network access or hacking</li>
                <li>Distribution of viruses or malware</li>
                <li>Excessive bandwidth usage affecting other customers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Beatrix Net shall not be liable for any indirect, incidental, special, or consequential damages
                resulting from service interruption, data loss, or other issues related to our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-white/70 text-lg leading-relaxed">For questions about these Terms and Conditions:</p>
              <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white">Beatrix Net Customer Support</p>
                <p className="text-white/70">Phone: (833) 619-0239</p>
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
