"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

export function WhyChooseUsSection() {
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

  const reasons = [
    {
      title: "100% Independent",
      description: "No affiliation with any service provider. Our guidance is purely based on what's best for you.",
    },
    {
      title: "Expert Advisors",
      description: "Our team understands connectivity options, helps you navigate choices, and provides unbiased guidance.",
    },
    {
      title: "Transparent Process",
      description: "We're clear about what we do (advise) and what we don't do (sell services or represent providers).",
    },
    {
      title: "Practical Support",
      description: "We help you understand options, navigate decisions, and make informed choices about connectivity.",
    },
    {
      title: "Always Available",
      description: "Reach our advisors anytime with your connectivity questions. We're here to help.",
    },
    {
      title: "No Hidden Agendas",
      description: "No sales pressure, no commission bias. Just honest guidance focused on your needs.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Beatrix Net?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Independent guidance you can trust, from advisors who focus on what matters to you.
          </p>
        </div>

        {/* Grid of Reasons */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="tel:+18336190239"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Talk to an Advisor Today
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
