"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Compass, BookOpen, Phone } from "lucide-react"

export function ServicesSection() {
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

  const services = [
    {
      icon: Lightbulb,
      title: "Connectivity Guidance",
      description: "Understand your internet and broadband options. Get practical advice on choosing the right connectivity solution for your needs.",
    },
    {
      icon: Compass,
      title: "Service Navigation",
      description: "We help you navigate the service selection process. Understand how to evaluate options and make informed decisions.",
    },
    {
      icon: BookOpen,
      title: "Educational Support",
      description: "Learn about different connectivity approaches, service terms, and what matters when choosing a provider.",
    },
    {
      icon: Phone,
      title: "Advisor Support",
      description: "Talk to our independent advisors. Get answers to your questions about connectivity options and guidance.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Advisory Services</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Independent guidance to help you understand and navigate connectivity decisions.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`p-8 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* What We Provide vs What We Don't */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* What We Provide */}
          <div className="p-6 rounded-lg border border-green-500/30 bg-green-500/5">
            <h4 className="text-lg font-semibold text-white mb-4">✓ What We Provide</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/80">
                <span className="text-green-400 font-bold">•</span>
                <span>Independent connectivity guidance</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <span className="text-green-400 font-bold">•</span>
                <span>Help understanding your options</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <span className="text-green-400 font-bold">•</span>
                <span>Practical advice on service selection</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <span className="text-green-400 font-bold">•</span>
                <span>Advisory support and assistance</span>
              </li>
            </ul>
          </div>

          {/* What We Don't Do */}
          <div className="p-6 rounded-lg border border-red-500/30 bg-red-500/5">
            <h4 className="text-lg font-semibold text-white mb-4">✗ What We Don't Do</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/80">
                <span className="text-red-400 font-bold">•</span>
                <span>We don't sell internet services</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <span className="text-red-400 font-bold">•</span>
                <span>We're not affiliated with any ISP</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <span className="text-red-400 font-bold">•</span>
                <span>We don't guarantee provider services</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <span className="text-red-400 font-bold">•</span>
                <span>We don't request account passwords</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Learn More Link */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <a href="/services" className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            Learn More About Our Services →
          </a>
        </div>
      </div>
    </section>
  )
}
