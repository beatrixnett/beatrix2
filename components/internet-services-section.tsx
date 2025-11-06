"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Zap, Shield, Users } from "lucide-react"

export function InternetServicesSection() {
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

  const services = [
    {
      icon: Zap,
      title: "Ultra-Fast Speeds",
      description:
        "Up to 1 Gbps download speeds for seamless streaming, gaming, and video conferencing without buffering.",
    },
    {
      icon: Shield,
      title: "Reliable Connection",
      description: "99.9% uptime guarantee with redundant infrastructure ensuring your internet never goes down.",
    },
    {
      icon: Users,
      title: "Multiple Devices",
      description:
        "Connect your entire household with dedicated bandwidth for every device, no throttling or slowdowns.",
    },
    {
      icon: Check,
      title: "No Hidden Fees",
      description: "Transparent pricing with no contracts, early termination fees, or surprise charges on your bill.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Fiber-Fast Cable Internet
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            Premium{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Internet Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Choose from our range of cable internet plans designed for homes and businesses with different needs.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
