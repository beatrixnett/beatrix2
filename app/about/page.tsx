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
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">About Beatrix Net</h1>
              <p className="text-xl text-white/70 mb-12">
                Beatrix Net is committed to delivering the fastest, most reliable internet service to homes and
                businesses across the nation.
              </p>
            </div>
          </section>

          {/* Content Sections */}
          <section className="max-w-4xl mx-auto px-4 py-20 space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                At Beatrix Net, our mission is to bridge the digital divide by providing affordable, high-speed internet
                to everyone. We believe fast internet is essential in today's connected world, and we're dedicated to
                making it accessible to all.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Lightning-Fast Speeds</h3>
                  <p className="text-white/70">
                    Our fiber-optic cable network delivers speeds up to 1 Gbps, ensuring smooth streaming, gaming, and
                    work-from-home experiences.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">99.9% Reliability</h3>
                  <p className="text-white/70">
                    With our state-of-the-art infrastructure, we guarantee 99.9% uptime so your connection is always
                    there when you need it.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">No Hidden Fees</h3>
                  <p className="text-white/70">
                    We believe in transparency. Our pricing is straightforward with no contracts, no hidden fees, and no
                    surprises on your bill.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Award-Winning Support</h3>
                  <p className="text-white/70">
                    Our dedicated 24/7 customer support team is always ready to help. Call 1-844-525-0789 anytime.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Founded in 2015, Beatrix Net started with a simple vision: to revolutionize internet access for everyday
                people. What began as a small operation has grown into a trusted provider serving hundreds of thousands
                of customers nationwide.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                We've invested heavily in infrastructure, technology, and customer service to ensure that every Beatrix
                Net customer enjoys the best internet experience possible. Our commitment to excellence has made us one
                of the fastest-growing ISPs in the country.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Network Infrastructure</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Beatrix Net operates one of the most advanced cable networks in North America. Our fiber-optic backbone
                and state-of-the-art equipment ensure consistently fast speeds and reliable connectivity. We
                continuously invest in network upgrades to maintain our competitive edge and support growing bandwidth
                demands.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Our network is monitored 24/7 by experienced technicians who proactively address potential issues before
                they impact customers. This dedication to network excellence is why Beatrix Net maintains the
                industry-leading 99.9% uptime guarantee.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Environmental Commitment</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                At Beatrix Net, we believe in responsible business practices. We're committed to reducing our
                environmental footprint by:
              </p>
              <ul className="space-y-2 text-white/70 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Using energy-efficient equipment in our network infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Promoting paperless billing and digital account management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Partnering with environmental organizations for sustainability initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Implementing recycling programs for old equipment</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Community Involvement</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Beatrix Net is proud to support the communities we serve. We sponsor local events, support educational
                initiatives, and provide internet access programs for underserved areas. We believe in giving back and
                making a positive difference in the lives of our customers and their communities.
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
