"use client"

import { useEffect, useRef, useState } from "react"

const ZapIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const GlobeIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
)

export function NetworkReliabilitySection() {
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

  const features = [
    {
      icon: ZapIcon,
      title: "Ultra-Fast Speeds",
      description: "Up to 1 Gbps download speeds for seamless streaming, gaming, and browsing",
      stat: "1000 Mbps",
    },
    {
      icon: ShieldIcon,
      title: "99.9% Uptime",
      description: "Reliable connection you can count on with redundant network infrastructure",
      stat: "99.9%",
    },
    {
      icon: GlobeIcon,
      title: "Nationwide Coverage",
      description: "Serving over 500,000 connections across 45 states with continuous expansion",
      stat: "45 States",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Network <span className="text-blue-400">Reliability</span> You Can Trust
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Built on cutting-edge fiber-optic technology with enterprise-grade infrastructure
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-500"
              >
                <div className="p-3 rounded-lg bg-blue-500/20 w-fit mb-6 group-hover:bg-blue-500/30 transition-all">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm mb-4">{feature.description}</p>
                <div className="text-3xl font-bold text-blue-400">{feature.stat}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
