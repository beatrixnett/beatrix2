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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Refund Policy</h1>
              <p className="text-white/70">Last updated: December 2025</p>
            </div>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-8 pb-20">
            <div className="p-6 rounded-lg bg-blue-500/10 border border-blue-400/30">
              <h2 className="text-2xl font-bold text-white mb-3">Important Notice About Our Refund Policy</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                This refund policy applies ONLY to fees charged by Beatrix Net for our independent assistance services. This policy does NOT cover charges from internet, cable, or streaming service providers. Any refund requests related to provider services must be directed to the provider directly.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Refund Window</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Refund requests can be submitted within 7 to 15 days of your initial service purchase with Beatrix Net, depending on the type of assistance provided. The specific refund window applicable to your service will be communicated at the time of purchase.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li><strong>7-day window:</strong> Applies to services where assistance has been substantially delivered</li>
                <li><strong>15-day window:</strong> Applies to initial consultation and guidance services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Eligibility Requirements</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                To be eligible for a refund of Beatrix Net assistance fees, the following conditions must be met:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Refund request must be submitted within the applicable 7-15 day window</li>
                <li>Request must be made through our official contact channels</li>
                <li>Account must be in good standing with no violations of our Terms and Conditions</li>
                <li>You must provide a clear explanation for the refund request</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. Services Already Delivered</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Refund eligibility may be affected if assistance services have already been provided:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Full assistance packages that have been completed may not be eligible for full refunds</li>
                <li>Partial refunds may be offered based on services delivered vs. total package purchased</li>
                <li>Initial consultation services that have been completed fall under the 7-day refund window</li>
              </ul>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                Our team will review each refund request individually and determine eligibility based on the services provided and the timing of the request.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. Refund Process</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                To request a refund of Beatrix Net assistance fees:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Contact our support team at (833) 319-0063</li>
                <li>Provide your account information and reason for the refund request</li>
                <li>Our team will review your request within 3-5 business days</li>
                <li>If approved, refunds will be processed within 7-10 business days</li>
                <li>Refunds will be issued to your original payment method</li>
                <li>You will receive confirmation once the refund has been processed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. What This Policy Does NOT Cover</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                This refund policy is limited to Beatrix Net service fees only. It does NOT cover:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Charges from internet, cable, or streaming service providers</li>
                <li>Provider installation fees, equipment costs, or subscription charges</li>
                <li>Third-party services or products not purchased through Beatrix Net</li>
                <li>Requests made outside the applicable 7-15 day window</li>
                <li>Services provided in violation of our Terms and Conditions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Provider-Related Refunds</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                For any refunds, cancellations, or billing disputes related to internet, cable, or streaming service providers, you must contact the provider directly. Beatrix Net cannot process refunds for provider charges as we are an independent third-party assistance platform with no authority over provider billing or accounts.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Contact Us</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                For questions about our refund policy or to submit a refund request:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white">Beatrix Net Customer Support</p>
                <p className="text-white/70">Phone: (833) 319-0063</p>
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
