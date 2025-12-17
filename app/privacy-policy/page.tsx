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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
              <p className="text-white/70">Last updated: December 2025</p>
            </div>
          </section>

          {/* Content */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-8 pb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                At Beatrix Net ("we", "us", "our", or "Company"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our independent assistance services.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                <strong>Important:</strong> Beatrix Net is an independent third-party assistance platform. We do not operate as an internet service provider, cable company, or streaming service. This policy covers only data collected by Beatrix Net for our assistance services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We collect information you provide directly, such as when you:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Request assistance or consultation services</li>
                <li>Contact our support team for guidance</li>
                <li>Complete forms on our website</li>
                <li>Make payments for our assistance services</li>
                <li>Communicate with us via phone, email, or chat</li>
              </ul>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                Information may include your name, contact information, location details (to help identify available providers in your area), and payment information necessary to process our service fees.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. Information We DO NOT Collect</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We never request or collect:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Provider account passwords or login credentials</li>
                <li>Provider account access information</li>
                <li>Sensitive financial information beyond what's necessary for our service payments</li>
                <li>Social Security Numbers or government-issued ID numbers</li>
              </ul>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                Our services are guidance-based and do not require access to your provider accounts.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. How We Use Your Information</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Provide, maintain, and improve our assistance services</li>
                <li>Process payments for Beatrix Net service fees</li>
                <li>Communicate with you about your assistance requests</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send service-related notifications (with your consent)</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Data Sharing</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties. We may share information only in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>With service providers who assist in operating our website or business (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or merger (with notice to you)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Data Security</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We implement appropriate technical and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>HTTPS encryption for all website communications</li>
                <li>Secure payment processing systems</li>
                <li>Limited employee access to personal information</li>
                <li>Regular security audits and updates</li>
              </ul>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Your Rights</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to delete your data</li>
                <li>The right to restrict or object to data processing</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-white/70 text-lg leading-relaxed mt-4">
                To exercise these rights, please contact us at (833) 619-0239 or (844) 525-0789.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
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
