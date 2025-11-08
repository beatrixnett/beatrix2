"use client"

import { useEffect, useRef } from "react"
import { Phone } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-8 px-4 sm:px-6 lg:px-8 mb-32">
      <div className="relative max-w-4xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center p-8 md:p-10 rounded-3xl border border-white/20 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))]">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 text-balance leading-tight">
            Ready for{" "}
            <span className="font-medium italic bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              lightning-fast internet?
            </span>
          </h3>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers enjoying unlimited high-speed internet with SpeedNet. Get connected
            today!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+18445250789"
              className="group bg-white hover:bg-gray-50 text-slate-900 font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Now: (844) 525-0789
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
