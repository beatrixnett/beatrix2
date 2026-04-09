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
                Your independent advisor for making informed connectivity decisions. We help you understand internet and broadband options without any ISP affiliation.
              </p>
            </div>
          </section>

          {/* Content Sections */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net is an independent advisory platform. We provide unbiased guidance on internet and broadband service options without any affiliation to providers.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                We help users understand connectivity options, navigate the service selection process, and make informed decisions. We don't sell services—we guide you to make the best choices for your needs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We exist to help users understand their internet and connectivity options through independent guidance. Our mission is to provide unbiased information that empowers better decision-making about connectivity services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What We Stand For</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Independent</h3>
                  <p className="text-white/70">
                    No ISP affiliation. We're not endorsed by or affiliated with any service provider, ensuring our guidance is completely unbiased.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Transparent</h3>
                  <p className="text-white/70">
                    Clear information about what we do and don't do. We are advisors, not service providers.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Helpful</h3>
                  <p className="text-white/70">
                    We provide practical guidance on understanding connectivity options and making informed decisions.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Accessible</h3>
                  <p className="text-white/70">
                    Available for consultation to help with your connectivity questions and guidance needs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why We Started</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Many people struggle to understand their connectivity options and feel overwhelmed by service provider information. We created Beatrix Net to provide independent, unbiased guidance to help people make informed decisions about internet and broadband services.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Our goal is to be a trusted, independent advisor—not a service provider or reseller.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">How We Help You</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Our advisory services include:
              </p>
              <ul className="space-y-2 text-white/70 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Understanding your internet and connectivity needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Learning about available connectivity options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Navigating service provider selection processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Making informed connectivity decisions</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We commit to:
              </p>
              <ul className="space-y-2 text-white/70 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Maintaining complete independence from all service providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Providing unbiased, independent guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Being transparent about what we do and don't do</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Respecting your privacy and information</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Important Clarifications</h2>
              <div className="p-6 rounded-lg bg-blue-500/10 border border-blue-400/30">
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  <strong className="text-white">Beatrix Net is an independent advisory platform.</strong> We are NOT an Internet Service Provider (ISP), cable company, or service provider. We do not sell internet or connectivity services.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  We are NOT affiliated with, endorsed by, or sponsored by any internet service provider. Any provider names mentioned on our site are used for informational purposes only.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  📌 <strong>Independent</strong> | <strong>Not an ISP</strong> | <strong>No Brand Affiliation</strong>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get Guidance Today</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                If you have questions about internet and connectivity options, our independent advisors are here to help.
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
