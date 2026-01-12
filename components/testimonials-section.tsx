"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

export function TestimonialsSection() {
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

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text: "Beatrix Net helped me understand my connectivity options without any pressure. They explained everything clearly and I felt confident making my decision.",
      name: "James Mitchell",
      role: "Homeowner",
      rating: 5,
    },
    {
      text: "Finally, an unbiased advisor who isn't trying to sell me anything. They genuinely helped me find the right solution for my needs.",
      name: "Sarah Chen",
      role: "Small Business Owner",
      rating: 5,
    },
    {
      text: "Excellent guidance. The advisors took time to answer all my questions and explain the differences between providers. Highly recommend!",
      name: "Michael Torres",
      role: "Remote Worker",
      rating: 5,
    },
    {
      text: "No sales pitch, just honest advice. That's exactly what I needed. Beatrix Net made the whole process stress-free.",
      name: "Jennifer Walsh",
      role: "Freelancer",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">What People Say</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Real feedback from people who received independent connectivity guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 mb-4 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-white/70 mb-6">Ready to get independent guidance?</p>
          <a
            href="tel:+18333190063"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Talk to an Advisor
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
