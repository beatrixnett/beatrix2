import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function FAQPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h1>
              <p className="text-white/70 text-lg">Everything you need to know about our assistance services</p>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-8 pb-20">
            
            {/* Critical Compliance FAQs */}
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Are you an official cable or internet service provider?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                No, we are not. Beatrix Net is an independent third-party assistance platform that provides guidance and support services. We do not operate as an Internet Service Provider (ISP), cable company, or streaming service provider. Our role is to help you navigate the process of selecting, setting up, and managing your connectivity services.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Do you sell internet, cable, or streaming plans directly?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                No, we do not sell service plans. We provide educational guidance and assistance to help you understand your options and make informed decisions about internet, cable, and streaming services. All service plans are purchased directly from the respective providers.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Do you charge for your services?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Yes. Beatrix Net charges a separate service fee for the assistance and guidance we provide. This fee is completely independent from any charges you may incur from internet, cable, or streaming providers. Our pricing is transparent and disclosed before you engage our services.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Will I still be billed by my service provider?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Yes, absolutely. You will continue to receive bills directly from your chosen internet, cable, or streaming service provider according to their terms and pricing. Our assistance fee does not replace or include provider charges—they are entirely separate transactions.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Do you need my account passwords or sensitive information?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                No, we never request or require your provider account passwords, login credentials, or other sensitive account information. Our assistance is educational and supportive in nature, and we guide you through processes without needing access to your personal accounts.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Which providers do you support?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We provide guidance on a wide variety of internet, cable, and streaming service providers including, but not limited to, providers such as Xfinity™, Spectrum™, AT&T™, Verizon™, Cox™, and many others. Please note that we reference these providers for informational and educational purposes only. We are not affiliated with, endorsed by, or sponsored by any of these companies. All trademarks belong to their respective owners.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Are your services refundable?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether services have already been delivered. Please review our Refund Policy page for full eligibility details and terms.
              </p>
            </div>

            {/* Additional FAQs */}
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">What exactly does your assistance include?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Our assistance services include helping you understand available internet and cable options in your area, comparing different plans and providers, guiding you through the sign-up process, providing technical setup support, and offering ongoing customer support for connectivity-related questions.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">How do I contact your support team?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                You can reach our support team by calling (833) 619-0239 or (844) 525-0789. Our advisors are available to assist you with questions about our services, guidance on provider options, or any issues related to your assistance experience with Beatrix Net.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Is my information secure?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Yes. We take data security seriously. We use HTTPS encryption for all communications and follow industry best practices for data protection. We only collect information necessary to provide our assistance services and never share your personal information with third parties without your consent. Review our Privacy Policy for complete details.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">When was Beatrix Net founded?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Beatrix Net was launched in 2025 as an independent startup dedicated to helping consumers navigate the often-complex landscape of internet, cable, and streaming services. We are a new company committed to providing honest, transparent assistance without the conflicts of interest that come with provider affiliations.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">How is Beatrix Net different from going directly to a provider?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Unlike going directly to a provider, Beatrix Net offers independent guidance across multiple providers. We help you compare options objectively, understand technical specifications, navigate pricing structures, and make decisions based on your specific needs—without the sales pressure that can come from provider representatives who only represent one company.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Do you offer 24/7 support?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Yes, we provide 24/7 support to assist you with questions and guidance. Whether you're researching options late at night or need help troubleshooting a setup issue on the weekend, our team is available to help you.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">Can you help me if I already have internet service?</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Absolutely. We can assist existing customers who want to optimize their current service, troubleshoot issues, understand their bill, explore upgrade options, or switch to a different provider. Our guidance services are available whether you're a new customer or already have established connectivity.
              </p>
            </div>

            <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30">
              <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
              <p className="text-white/70 mb-4">Our assistance team is here to help you with any additional questions.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18336190239"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call (833) 619-0239
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                >
                  Visit Contact Page
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
