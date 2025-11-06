"use client"

import { MapPin, Wifi, Zap } from "lucide-react"

export function CoverageMapSection() {
  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/80">Coverage Area</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Expanding across the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">nation</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Beatrix Net provides reliable cable internet to over 500,000+ homes and businesses nationwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm p-6">
            <div className="h-96 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg flex items-center justify-center border border-white/10">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4 opacity-50" />
                <p className="text-white/60 text-sm">Coverage Map</p>
              </div>
            </div>
          </div>

          {/* Coverage stats */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">500,000+</h3>
                  <p className="text-white/60 text-sm">Homes Connected</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">Serving residential and commercial customers across 45 states</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">99.9%</h3>
                  <p className="text-white/60 text-sm">Network Uptime</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">Backed by our commitment to reliability and service excellence</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Expanding Daily</h3>
                  <p className="text-white/60 text-sm">New Areas Added</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">Check availability in your area - we're growing constantly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
