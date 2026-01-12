"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const whatWeDo = [
    "Help you understand internet and broadband service options",
    "Provide practical guidance on connectivity solutions",
    "Explain how to navigate service provider processes",
    "Offer independent, unbiased information and advice",
    "Help you compare different connectivity approaches",
  ]

  const whatWeDont = [
    "We are NOT an Internet Service Provider (ISP)",
    "We are NOT affiliated with any telecom or cable company",
    "We do NOT sell official ISP services or plans",
    "We do NOT provide guaranteed technical fixes",
    "We do NOT represent or endorse any specific provider",
  ]

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Our Mission
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We're independent advisors focused on helping you navigate connectivity decisions with clarity and confidence.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* What We Do */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-8 rounded-2xl border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-semibold text-white">What We Do</h3>
              </div>
              <ul className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <li
                    key={index}
                    className={`flex gap-3 transition-all duration-500 ease-out ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What We Don't Do */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="p-8 rounded-2xl border border-red-500/30 bg-red-500/5 hover:bg-red-500/10 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-semibold text-white">What We DON'T Do</h3>
              </div>
              <ul className="space-y-4">
                {whatWeDont.map((item, index) => (
                  <li
                    key={index}
                    className={`flex gap-3 transition-all duration-500 ease-out ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer Footer */}
        <div
          className={`mt-12 md:mt-16 p-6 rounded-xl border border-white/20 bg-white/5 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-sm text-white/60 text-center">
            📌 <strong>Important Disclaimer:</strong> We are not affiliated with, endorsed by, or associated with any Internet Service Provider, telecom company, or cable provider. All mentions of providers are for informational purposes only. We provide independent guidance to help you make informed decisions.
          </p>
        </div>
      </div>
    </section>
  )
}
