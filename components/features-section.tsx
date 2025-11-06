"use client"

import { useEffect, useRef, useState } from "react"
import { Wifi, Zap, Shield, Clock, Download, Smartphone } from "lucide-react"

const SpeedTestDemo = ({ isActive }: { isActive: boolean }) => {
  const [speedPercentage, setSpeedPercentage] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setSpeedPercentage((prev) => {
        if (prev >= 100) return prev
        return Math.min(prev + 2, 100)
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 flex flex-col items-center justify-center">
      <div className="text-xs text-slate-500 mb-2 font-medium">Download Speed</div>
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle cx="48" cy="48" r="40" fill="none" stroke="#e2e8f0" strokeWidth="4" />
          <circle
            cx="48"
            cy="48"
            r="40"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray={`${(speedPercentage / 100) * 251.2} 251.2`}
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute text-center">
          <div className="text-lg font-bold text-slate-900">{Math.round(speedPercentage * 10)}</div>
          <div className="text-xs text-slate-600">Mbps</div>
        </div>
      </div>
    </div>
  )
}

const NetworkStatusDemo = ({ isActive }: { isActive: boolean }) => {
  const [uptimePercentage, setUptimePercentage] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const timeout = setTimeout(() => {
      setUptimePercentage(99.9)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 flex flex-col justify-center">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-slate-700">Network Uptime</span>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs text-slate-600 mb-1">
          <span>Status</span>
          <span className="font-semibold">{uptimePercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${uptimePercentage}%` }}
          ></div>
        </div>
      </div>
      <p className="text-xs text-green-600">✓ All systems operational</p>
    </div>
  )
}

const DeviceConnectionDemo = ({ isActive }: { isActive: boolean }) => {
  const [connectedDevices, setConnectedDevices] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const devices = [
      { name: "TV", icon: "📺" },
      { name: "Laptop", icon: "💻" },
      { name: "Phone", icon: "📱" },
      { name: "Tablet", icon: "📱" },
      { name: "Gaming", icon: "🎮" },
    ]

    devices.forEach((_, index) => {
      setTimeout(() => {
        setConnectedDevices(index + 1)
      }, index * 400)
    })
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="text-xs font-medium text-slate-700 mb-2">Connected Devices</div>
      <div className="space-y-1.5">
        {["📺 TV", "💻 Laptop", "📱 Phone", "🎮 Gaming", "⌚ Device"].map((device, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 text-xs transition-all duration-300 ${
              i < connectedDevices ? "opacity-100 text-slate-700" : "opacity-30 text-slate-400"
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${i < connectedDevices ? "bg-green-500" : "bg-slate-300"}`} />
            {device}
          </div>
        ))}
      </div>
      <div className="mt-2 text-xs text-blue-600 font-medium">{connectedDevices}/5 Connected</div>
    </div>
  )
}

const CustomerSupportDemo = ({ isActive }: { isActive: boolean }) => {
  const [messages, setMessages] = useState([
    { text: "Need help with internet?", isBot: false, visible: false },
    { text: "I'm here 24/7 to assist you!", isBot: true, visible: false },
  ])

  useEffect(() => {
    if (!isActive) return

    setMessages([
      { text: "Need help with internet?", isBot: false, visible: false },
      { text: "I'm here 24/7 to assist you!", isBot: true, visible: false },
    ])

    setTimeout(() => {
      setMessages((prev) => prev.map((msg, i) => ({ ...msg, visible: i === 0 })))
      setTimeout(() => {
        setMessages((prev) => prev.map((msg) => ({ ...msg, visible: true })))
      }, 1000)
    }, 500)
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden">
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.isBot ? "justify-start" : "justify-end"} transition-all duration-500 ${
              msg.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <div
              className={`max-w-[70%] px-3 py-2 rounded-lg text-xs ${
                msg.isBot ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-700"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const InstallationDemo = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const steps = ["📋 Schedule", "🔧 Installation", "📡 Configuration", "✓ Complete"]

    steps.forEach((_, index) => {
      setTimeout(() => {
        setStep(index)
      }, index * 800)
    })
  }, [isActive])

  const steps = ["📋 Schedule", "🔧 Installation", "📡 Configuration", "✓ Complete"]

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="text-xs font-medium text-slate-700 mb-3">Setup Process</div>
      <div className="space-y-1.5">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 text-xs transition-all ${i <= step ? "opacity-100 text-slate-700" : "opacity-40 text-slate-400"}`}
          >
            <div
              className={`w-4 h-4 rounded border-2 flex items-center justify-center text-xs ${i <= step ? "border-green-500 bg-green-50 text-green-600" : "border-slate-300"}`}
            >
              {i < step ? "✓" : ""}
            </div>
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}

const features = [
  {
    title: "Ultra-Fast Speeds",
    description:
      "Experience lightning-fast internet speeds up to 1000 Mbps. Perfect for streaming 4K video, online gaming, and large file downloads without buffering.",
    demo: SpeedTestDemo,
    size: "large",
    icon: Zap,
  },
  {
    title: "99.9% Uptime",
    description:
      "Reliable connection you can count on. Our redundant network infrastructure ensures your internet stays on, day and night.",
    demo: NetworkStatusDemo,
    size: "medium",
    icon: Shield,
  },
  {
    title: "Multiple Devices",
    description:
      "Connect up to 10+ devices simultaneously without slowdowns. Stream, game, work, and browse all at the same time.",
    demo: DeviceConnectionDemo,
    size: "medium",
    icon: Smartphone,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is always available to help. Call, chat, or email us anytime - we're here to assist.",
    demo: CustomerSupportDemo,
    size: "large",
    icon: Clock,
  },
  {
    title: "Professional Installation",
    description:
      "Free professional installation and setup. Our technicians get you connected in just 4 easy steps, no hassle.",
    demo: InstallationDemo,
    size: "medium",
    icon: Download,
  },
  {
    title: "WiFi Coverage",
    description:
      "Complete home WiFi coverage with our advanced mesh network system. Strong signal in every room of your home.",
    demo: NetworkStatusDemo,
    size: "medium",
    icon: Wifi,
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeDemo, setActiveDemo] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
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

  return (
    <section id="features" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-200 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div
            className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium mb-6">
              <Wifi className="w-4 h-4 mr-2" />
              Lightning-Fast Internet - Always Available
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-balance mb-4 sm:mb-6">
              Why Choose Beatrix{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">Net</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Reliable, fast internet with exceptional customer service. Connect with confidence and experience the
              difference that quality service makes.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`group transition-all duration-1000 ${feature.size === "large" ? "md:col-span-2" : ""}`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                  }}
                  onMouseEnter={() => setActiveDemo(index)}
                  onMouseLeave={() => setActiveDemo(null)}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300">
                    <div className="mb-4 flex items-center justify-between">
                      <IconComponent className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <div className="mb-6">
                      <feature.demo isActive={activeDemo === index || isVisible} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
