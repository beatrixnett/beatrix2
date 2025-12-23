"use client"

import type React from "react"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for contacting us! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Have questions about our assistance services? We're here to help you navigate your connectivity options!
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="max-w-4xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                  </div>
                  <a
                    href="tel:+18333190063"
                    className="text-white/70 hover:text-white transition-colors text-lg font-semibold"
                  >
                    (833) 319-0063
                  </a>
                  <p className="text-white/50 text-sm mt-2">Available 24/7 for assistance</p>
                </div>

                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">Alternative Phone</h3>
                  </div>
                  <a
                    href="tel:+18333190063"
                    className="text-white/70 hover:text-white transition-colors text-lg font-semibold"
                  >
                    (833) 319-0063
                  </a>
                  <p className="text-white/50 text-sm mt-2">Support line available 24/7</p>
                </div>

                <div className="p-6 rounded-xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                  </div>
                  <a
                    href="mailto:support@beatrixnet.com"
                    className="text-white/70 hover:text-white transition-colors text-lg font-semibold"
                  >
                    support@beatrixnet.com
                  </a>
                  <p className="text-white/50 text-sm mt-2">We respond within 24 hours</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-xl bg-white/10 border border-white/20">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                      placeholder="Tell us how we can help with your connectivity needs..."
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300"
                    onClick={() => window.location.href = 'tel:+18336190239'}
                  >
                    Contact Us
                  </button>
                  <p className="text-white/50 text-xs text-center mt-2">
                    We respect your privacy. By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-12 p-6 rounded-lg bg-blue-500/10 border border-blue-400/30">
              <h3 className="text-lg font-bold text-white mb-3">Important Information</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Thank you for calling Beatrix Net, an independent service assistance platform. We provide guidance and support for internet, cable, and streaming services. We are not affiliated with any service providers. Our phone representatives will clearly identify themselves as Beatrix Net advisors and explain our independent assistance services.
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
