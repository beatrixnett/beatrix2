"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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

  const faqs = [
    {
      question: "Are you an Internet Service Provider (ISP)?",
      answer:
        "No. Beatrix Net is an independent advisory platform. We are NOT an ISP, cable company, or service provider. We provide unbiased guidance to help you understand your connectivity options.",
    },
    {
      question: "Do you sell internet or connectivity plans?",
      answer:
        "No, we do not sell service plans. We provide educational guidance and independent advice to help you make informed decisions about internet and connectivity services.",
    },
    {
      question: "Are you affiliated with any service providers?",
      answer:
        "No. We maintain complete independence from all service providers. This ensures our guidance is completely unbiased and focused on what's best for you.",
    },
    {
      question: "Do you charge for your services?",
      answer:
        "Yes, we charge a transparent service fee for our advisory assistance. This is separate and independent from any provider charges. You'll continue to pay providers directly for their services.",
    },
    {
      question: "Will you ever ask for my account passwords?",
      answer:
        "No, we will never request your provider account passwords or sensitive login information. Our guidance is educational and supportive, not requiring account access.",
    },
    {
      question: "How can I contact your advisors?",
      answer:
        "You can reach our independent advisors by calling (833) 319-0063. We're available to help with questions about connectivity options and guidance.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Common questions about Beatrix Net and how we can help you.
          </p>
        </div>

        {/* FAQ Items */}
        <div
          className={`space-y-4 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-white/70 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white/5 border-t border-white/20">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <a href="/faq" className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            View All FAQ →
          </a>
        </div>
      </div>
    </section>
  )
}
