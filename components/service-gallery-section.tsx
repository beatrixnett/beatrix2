"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ServiceGallerySection() {
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

  const gallery = [
    {
      title: "Fiber-Optic Infrastructure",
      description: "State-of-the-art network backbone",
      image: "/fiber-optic-cable-infrastructure.jpg",
    },
    {
      title: "Residential Connectivity",
      description: "Fast internet for your home",
      image: "/home-wifi-router-internet.jpg",
    },
    {
      title: "Business Solutions",
      description: "Enterprise-grade connectivity",
      image: "/business-office-network-setup.jpg",
    },
    {
      title: "24/7 Monitoring",
      description: "Constant network surveillance",
      image: "/server-room-monitoring-dashboard.jpg",
    },
    {
      title: "Customer Support Center",
      description: "Always ready to help",
      image: "/customer-support-team-office.jpg",
    },
    {
      title: "Data Centers",
      description: "Secure data storage facilities",
      image: "/modern-data-center-facility.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Powering <span className="text-cyan-400">Connections</span> Everywhere
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            From our advanced infrastructure to our dedicated support teams, we deliver excellence at every touchpoint
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {gallery.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
