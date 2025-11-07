import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { Zap, Shield, Wifi, Headphones, Clock, Smartphone } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Zap,
      title: "Lightning-Fast Speeds",
      description: "Up to 1 Gbps download speeds for seamless streaming, gaming, and browsing.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Built-in protection against malware, phishing, and cyber threats.",
    },
    {
      icon: Wifi,
      title: "Whole Home WiFi",
      description: "Strong WiFi signals throughout your home with mesh network technology.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Dedicated support team ready to help you anytime. Call 1-844-525-0789",
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Reliable connection you can count on, guaranteed.",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Manage your account, check speeds, and troubleshoot on the go.",
    },
  ]

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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Beatrix Net offers comprehensive internet services designed to meet all your connectivity needs.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="px-4 py-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20"
                  >
                    <Icon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
