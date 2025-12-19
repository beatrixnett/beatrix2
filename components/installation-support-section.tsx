"use client"

import { Phone, CheckCircle, Users, Award } from "lucide-react"

export function InstallationSupportSection() {
  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Award className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white/80">Support & Installation</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Expert installation and{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              dedicated support
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            From setup to troubleshooting, our expert team is here to ensure your internet experience is seamless
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Installation Process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Free Professional Installation</h3>

            {[
              { step: 1, title: "Schedule", desc: "Book your installation at your convenience" },
              { step: 2, title: "Setup", desc: "Professional technician installs and tests your connection" },
              { step: 3, title: "Training", desc: "We configure your devices and show you how to get started" },
              { step: 4, title: "Support", desc: "Ongoing technical support available 24/7" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Support Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">24/7 Customer Support</h3>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">Call Us Anytime</span>
              </div>
              <p className="text-white/80 mb-4">Our friendly support team is always ready to help</p>
              <p className="text-2xl font-bold text-blue-400">(833) 319-0063</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Users className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white/80 text-sm font-semibold">Expert Support</p>
                <p className="text-white/60 text-xs mt-1">Certified technicians</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <Award className="w-6 h-6 text-pink-400 mb-2" />
                <p className="text-white/80 text-sm font-semibold">Quick Response</p>
                <p className="text-white/60 text-xs mt-1">Average 2-minute wait</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold mb-3">Support Channels</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 Phone Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Live Chat & Email</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Online Knowledge Base</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
