"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

export function CableBundlesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
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

  const bundles = [
    {
      name: "Internet Only",
      speed: "300 Mbps",
      price: "$39.99",
      period: "/month",
      features: [
        "300 Mbps download speed",
        "Unlimited data",
        "24/7 customer support",
        "Free setup & installation",
        "WiFi router included",
      ],
      highlight: false,
    },
    {
      name: "Internet + Cable",
      speed: "600 Mbps",
      price: "$59.99",
      period: "/month",
      features: [
        "600 Mbps download speed",
        "Unlimited data",
        "200+ cable channels",
        "On-demand content",
        "Free setup & installation",
        "Premium router included",
      ],
      highlight: true,
    },
    {
      name: "Premium Bundle",
      speed: "1 Gbps",
      price: "$79.99",
      period: "/month",
      features: [
        "1 Gbps download speed",
        "Unlimited data",
        "400+ cable channels",
        "Premium on-demand",
        "Home security included",
        "Phone service included",
        "Free modem & router",
      ],
      highlight: false,
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            Flexible Plans
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            Cable & Internet{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Bundles</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Find the perfect plan for your home or business with our flexible cable and internet bundles.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-500 ${
                bundle.highlight
                  ? "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-400/50 shadow-2xl scale-105 md:scale-110"
                  : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2"
              }`}
            >
              {bundle.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{bundle.name}</h3>
                <p className="text-blue-400 text-sm sm:text-base mb-4">{bundle.speed}</p>

                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-white">{bundle.price}</span>
                  <span className="text-white/70 text-sm">{bundle.period}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 mb-8 ${
                    bundle.highlight
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-3">
                  {bundle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-white/70 text-base sm:text-lg mb-4">
            Need help choosing? Call us at{" "}
            <a href="tel:1-833-319-0063" className="text-blue-400 hover:text-blue-300 font-semibold">
              1-833-319-0063
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
