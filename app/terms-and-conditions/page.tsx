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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms and Conditions</h1>
              <p className="text-white/70">Last updated: December 2025</p>
            </div>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-8 pb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Independent Service Agreement</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                By engaging with Beatrix Net services, you acknowledge and agree to these Terms and Conditions. These terms govern your use of our independent third-party assistance services.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                <strong>Critical Understanding:</strong> Beatrix Net is NOT an Internet Service Provider (ISP), cable company, or streaming service. We are an independent assistance platform that provides guidance, support, and educational services to help you navigate internet, cable, and streaming service options.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                We are not affiliated with, endorsed by, or sponsored by any internet, cable, or streaming service provider. All provider names and trademarks are the property of their respective owners and are referenced for informational purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Nature of Services</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net provides assistance services including, but not limited to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Educational guidance on internet, cable, and streaming service options</li>
                <li>Comparison information about different providers and plans</li>
                <li>Technical setup support and troubleshooting assistance</li>
                <li>Customer support for connectivity-related questions</li>
                <li>Help navigating the sign-up and activation process</li>
              </ul>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                Our services do NOT include selling or providing internet, cable, or streaming plans. All service plans are purchased directly from the respective providers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. Service Fees and Billing</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net charges a separate service fee for our assistance and guidance services. This fee is independent and separate from any charges you incur from internet, cable, or streaming service providers.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Our service fees are disclosed transparently before you engage our services</li>
                <li>Provider billing remains unchanged and is handled directly by the provider</li>
                <li>You will receive separate bills: one from Beatrix Net for assistance services, and one from your chosen provider for their service plans</li>
                <li>Payment is required according to the fee schedule presented at time of service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. No Provider Affiliation</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net maintains complete independence from all service providers. We:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Are not authorized representatives or agents of any provider</li>
                <li>Do not have special partnerships or endorsement arrangements</li>
                <li>Reference provider names solely for educational and descriptive purposes</li>
                <li>Cannot make decisions or modifications to your provider accounts</li>
                <li>Provide objective guidance without bias toward any specific provider</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Information Security</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We never request or require your provider account passwords, login credentials, or other sensitive account access information. Our guidance is educational and does not require access to your provider accounts.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                We collect only the information necessary to provide our assistance services and maintain the security of your data in accordance with our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Refund Policy</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether services have already been delivered. Please review our dedicated Refund Policy page for complete eligibility details and terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Service Modifications</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Beatrix Net reserves the right to modify, update, or discontinue our assistance services with reasonable notice. We may update these Terms and Conditions periodically. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                As an independent assistance platform, Beatrix Net provides guidance and support services but cannot guarantee specific outcomes related to provider services, availability, or performance. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Actions, decisions, or policies of internet, cable, or streaming providers</li>
                <li>Service interruptions, outages, or technical issues from providers</li>
                <li>Changes in provider pricing, terms, or service availability</li>
                <li>Provider billing disputes or account management issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">9. Contact Information</h2>
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
