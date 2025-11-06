import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function PrivacyPolicyPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
              <p className="text-white/70">Last updated: November 2024</p>
            </div>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-8 pb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                At Beatrix Net ("we", "us", "our", or "Company"), we are committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website and use our internet services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We collect information you provide directly, such as when you:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Create an account or subscribe to our services</li>
                <li>Contact our customer support team</li>
                <li>Complete forms on our website</li>
                <li>Make payments for services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We implement appropriate technical and organizational measures designed to protect personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including
                the right to access, correct, or delete your data. To exercise these rights, please contact us at
                support@beatrixnet.com.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Contact Us</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white">Beatrix Net Customer Support</p>
                <p className="text-white/70">Phone: 1-833-319-0063</p>
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
