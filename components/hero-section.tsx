import { Button } from "@/components/ui/button"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Phone = ({ className = "mr-2 h-5 w-5 group-hover:scale-110 transition-transform" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          Independent Connectivity Advisors Since 2025
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
          <span className="text-foreground">Your Trusted Guide to</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
            <span className="text-foreground">Better</span>
            <span className="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg">
              Connectivity
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-white text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          Independent guidance for navigating internet, broadband, and connectivity options. We help you understand your choices and make confident decisions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Button
            size="lg"
            asChild
            className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden"
          >
            <a href="tel:+18333190063">
              Talk to Advisor
              <ArrowRight />
            </a>
          </Button>

          <a
            href="tel:+18333190063"
            className="group bg-white hover:bg-gray-50 text-slate-900 font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            (833) 319-0063
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 sm:mb-12 px-4">
          <p className="text-xs text-white/50">
            📌 Independent Advisor | Not an ISP | No Brand Affiliation
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="text-center px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white mb-6">Trusted assistance from independent advisors</p>
          <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
            <div className="flex items-center gap-8 opacity-60 hover:opacity-80 transition-all duration-500 animate-slide-left">
              <div className="flex items-center gap-8 whitespace-nowrap">
                <div className="text-base sm:text-lg font-semibold">Expert Guidance</div>
                <div className="text-base sm:text-lg font-semibold">24/7 Support</div>
                <div className="text-base sm:text-lg font-semibold">Independent Service</div>
                <div className="text-base sm:text-lg font-semibold">Clear Pricing</div>
                <div className="text-base sm:text-lg font-semibold">Honest Advice</div>
                <div className="text-base sm:text-lg font-semibold">Customer First</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-8 whitespace-nowrap">
                <div className="text-base sm:text-lg font-semibold">Expert Guidance</div>
                <div className="text-base sm:text-lg font-semibold">24/7 Support</div>
                <div className="text-base sm:text-lg font-semibold">Independent Service</div>
                <div className="text-base sm:text-lg font-semibold">Clear Pricing</div>
                <div className="text-base sm:text-lg font-semibold">Honest Advice</div>
                <div className="text-base sm:text-lg font-semibold">Customer First</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white mb-6">Why Choose Beatrix Net?</p>
          <div className="relative overflow-hidden w-full max-w-sm mx-auto">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold">Independent</div>
                <div className="text-sm font-semibold">Helpful</div>
                <div className="text-sm font-semibold">Transparent</div>
                <div className="text-sm font-semibold">Expert</div>
                <div className="text-sm font-semibold">Support</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold">Independent</div>
                <div className="text-sm font-semibold">Helpful</div>
                <div className="text-sm font-semibold">Transparent</div>
                <div className="text-sm font-semibold">Expert</div>
                <div className="text-sm font-semibold">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
