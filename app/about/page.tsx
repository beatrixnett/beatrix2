import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function AboutPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">About Beatrix Net</h1>
              <p className="text-xl text-white/70 mb-12">
                Your independent partner for navigating the complex world of internet, cable, and streaming services. Founded in 2025, we're here to make connectivity decisions simpler.
              </p>
            </div>
          </section>

          {/* Content Sections */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net is an independent third-party assistance platform launched in 2025. We help everyday people make sense of the overwhelming world of internet, cable, and streaming options. We don't sell services—we guide you to the right choices for your unique needs.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Think of us as your personal connectivity advisors. We cut through marketing jargon, compare options objectively, and help you understand what you're really getting. No sales pressure, no hidden agendas—just honest guidance from people who understand how confusing it all can be.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We exist to empower consumers with knowledge and support in a marketplace that's deliberately complicated. Our mission is to be the trusted voice that helps you understand your options, avoid common pitfalls, and get connected with confidence. We believe everyone deserves clear, unbiased guidance when choosing essential services for their home or business.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What Makes Us Different</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Truly Independent</h3>
                  <p className="text-white/70">
                    We're not affiliated with any provider. This means we can give you honest, unbiased advice focused solely on what's best for you—not what earns us the biggest commission.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Expert Guidance</h3>
                  <p className="text-white/70">
                    Our advisors understand the technical details, pricing structures, and fine print across multiple providers. We translate complexity into clarity.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Transparent Pricing</h3>
                  <p className="text-white/70">
                    We charge a clear, upfront service fee for our assistance. No hidden costs, no ongoing subscriptions—you know exactly what you're paying for.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                  <p className="text-white/70">
                    Questions don't keep business hours. Our support team is available around the clock at (833) 319-0063.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why We Started</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net was born from frustration. Our founders experienced firsthand how difficult it is to make informed decisions about internet and cable services. Confusing plans, promotional pricing that expires, hidden fees, contradictory information from sales reps—it's exhausting.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We saw a gap in the market: people needed an advocate. Someone who could help them understand their options without trying to upsell them. Someone independent who could speak plainly about what actually matters when choosing a provider.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                So in 2025, we launched Beatrix Net to be that advocate. We're a small startup with a big mission: to bring transparency and simplicity to an industry that desperately needs both.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">How We Help You</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Our assistance services include:
              </p>
              <ul className="space-y-2 text-white/70 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Understanding which internet speeds you actually need for your usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Comparing providers available in your area objectively</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Decoding promotional pricing and contract terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Guiding you through the sign-up and installation process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Technical setup support and troubleshooting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Ongoing support as your connectivity needs evolve</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Commitment to You</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We promise to always:
              </p>
              <ul className="space-y-2 text-white/70 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Maintain complete independence from all service providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Provide honest guidance even if it means recommending the simplest option</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Respect your privacy and never request provider passwords</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Be transparent about our fees and what they cover</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Stand behind our assistance with a clear refund policy</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Important Clarifications</h2>
              <div className="p-6 rounded-lg bg-blue-500/10 border border-blue-400/30">
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  <strong className="text-white">Beatrix Net is an independent third-party assistance platform.</strong> We are not an Internet Service Provider (ISP), cable company, or streaming service. We do not sell internet, cable, or streaming plans.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  We charge a separate service fee for our guidance and assistance. This fee is independent from any charges you incur from service providers. You will be billed directly by providers for their services.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  We are not affiliated with, endorsed by, or sponsored by any internet, cable, or streaming service provider. Provider names referenced on our site (such as Xfinity™, Spectrum™, AT&T™, Verizon™, etc.) are used for informational purposes only. All trademarks belong to their respective owners.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Whether you're setting up service for the first time, considering a switch, or just need help understanding your current plan, we're here to assist. Reach out today and experience the difference that independent, expert guidance makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18336190239"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call (833) 619-0239
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                >
                  Contact Us
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
