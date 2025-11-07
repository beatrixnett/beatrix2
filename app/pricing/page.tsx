"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Essential",
      speed: "300 Mbps",
      price: 39.99,
      description: "Perfect for everyday browsing and video streaming",
      features: ["300 Mbps Download Speed", "Unlimited Data", "WiFi Router Included", "24/7 Support", "No Contract"],
    },
    {
      name: "Professional",
      speed: "600 Mbps",
      price: 59.99,
      description: "Ideal for families and home offices",
      features: [
        "600 Mbps Download Speed",
        "Unlimited Data",
        "Mesh WiFi System",
        "Priority Support",
        "Free Installation",
        "No Contract",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      speed: "1 Gbps",
      price: 79.99,
      description: "Maximum speed for power users",
      features: [
        "1 Gbps Download Speed",
        "Unlimited Data",
        "Premium Mesh WiFi",
        "VIP 24/7 Support",
        "Free Installation",
        "Free Modem Rental",
        "No Contract",
      ],
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                No hidden fees. No contracts. No surprises. Choose the perfect plan for you.
              </p>
              <p className="text-lg text-blue-400 font-semibold">Need help? Call us at 1-844-525-0789</p>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="px-4 py-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? "bg-white/15 border-white/40 md:scale-105 md:shadow-2xl"
                      : "bg-white/10 border-white/20 hover:border-white/40"
                  }`}
                >
                  {plan.popular && (
                    <div className="mb-4 inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-blue-400 text-lg font-semibold mb-4">{plan.speed}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/70 ml-2">/month</span>
                  </div>
                  <p className="text-white/70 mb-6">{plan.description}</p>
                  <button
                    onClick={() => (window.location.href = "tel:1-844-525-0789")}
                    className="w-full py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 mb-8"
                  >
                    Get Started
                  </button>
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
