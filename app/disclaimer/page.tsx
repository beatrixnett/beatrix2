import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function DisclaimerPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Disclaimer</h1>
              <p className="text-white/70 text-lg">Important information about our services and limitations</p>
            </div>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-8 pb-20">
            
            <div className="p-6 rounded-lg bg-yellow-500/10 border border-yellow-400/30">
              <h2 className="text-2xl font-bold text-white mb-3">Please Read Carefully</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                This disclaimer outlines the scope, limitations, and nature of services provided by Beatrix Net. By using our website or services, you acknowledge that you have read, understood, and agree to the terms outlined in this disclaimer.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Independent Third-Party Advisor</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net is an independent third-party advisory platform. We provide unbiased guidance and information about internet and broadband service options.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                <strong>We are NOT:</strong>
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>An Internet Service Provider (ISP)</li>
                <li>A cable television company</li>
                <li>An authorized representative or agent of any provider</li>
                <li>Affiliated with, endorsed by, or sponsored by any provider</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">No Provider Affiliation or Endorsement</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net maintains complete independence from all internet service providers. Any mention of provider names is for informational and descriptive purposes only.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                All trademarks, service marks, trade names, and logos referenced on our website are the property of their respective owners. We do not claim any ownership, partnership, authorization, or endorsement relationship with these companies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">What We Do Provide</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net provides independent advisory services including:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Educational guidance on internet and broadband service options</li>
                <li>Comparative information about different approaches to connectivity</li>
                <li>Help navigating provider selection processes</li>
                <li>Practical advice on connectivity solutions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">What We Do NOT Do</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                <strong>Beatrix Net explicitly does NOT:</strong>
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Sell or provide actual ISP services or plans</li>
                <li>Provide guaranteed technical fixes</li>
                <li>Represent or endorse any specific provider</li>
                <li>Operate network infrastructure</li>
                <li>Process provider payments or billing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">No Guarantees Regarding Provider Services</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                While we strive to provide accurate and helpful guidance, Beatrix Net makes no guarantees or warranties regarding:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Service availability in your specific location</li>
                <li>Internet speeds, reliability, or uptime from providers</li>
                <li>Provider pricing, promotions, or contract terms</li>
                <li>Quality of cable channels or streaming content</li>
                <li>Provider customer service or technical support responsiveness</li>
                <li>Installation timelines or equipment performance</li>
              </ul>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                All such matters are controlled by the respective service providers and are subject to their terms, conditions, and service capabilities.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Information Accuracy</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We make reasonable efforts to provide accurate, current, and helpful information. However, provider offerings, pricing, availability, and terms change frequently. While we update our guidance regularly, there may be delays or discrepancies. You should always verify current information directly with the provider before making decisions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">No Account Access Required</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Beatrix Net never requests, requires, or stores provider account passwords, login credentials, or sensitive account access information. Our assistance is educational and supportive in nature and does not require access to your provider accounts. If anyone claiming to represent Beatrix Net requests such information, please report this immediately to our support team.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Provider Responsibility</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Each internet, cable, and streaming service provider is solely responsible for:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Their own service delivery and performance</li>
                <li>Installation, setup, and equipment</li>
                <li>Billing, payments, and account management</li>
                <li>Customer service and technical support for their services</li>
                <li>Contract terms, cancellation policies, and refunds related to their services</li>
              </ul>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                Any questions, issues, or disputes regarding provider services should be directed to the provider directly. Beatrix Net can offer guidance on how to contact providers but cannot resolve provider-specific issues on your behalf.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To the fullest extent permitted by law, Beatrix Net shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to provider services, availability, performance, billing, or any other provider-related matters. Our liability is limited to the fees you paid to Beatrix Net for our assistance services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Changes to This Disclaimer</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We may update this disclaimer periodically to reflect changes in our services or legal requirements. The "Last Updated" date at the top of this page indicates when the most recent changes were made. We encourage you to review this disclaimer regularly.
              </p>
            </div>

            <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30">
              <h3 className="text-xl font-bold text-white mb-3">Questions About This Disclaimer?</h3>
              <p className="text-white/70 mb-4">
                If you have questions or concerns about this disclaimer or the scope of our services, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18333190063"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call (833) 319-0063
                </a>
                <a
                  href="tel:+18333190063"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                >
                  Call (833) 319-0063
                </a>
              </div>
            </div>

          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
