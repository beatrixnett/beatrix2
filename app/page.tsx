import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { NetworkReliabilitySection } from "@/components/network-reliability-section"
import Aurora from "@/components/Aurora"
import { FeaturesSection } from "@/components/features-section"
import { CoverageMapSection } from "@/components/coverage-map-section"
import { InstallationSupportSection } from "@/components/installation-support-section"
import { ServiceGallerySection } from "@/components/service-gallery-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { InternetServicesSection } from "@/components/internet-services-section"
import { CableBundlesSection } from "@/components/cable-bundles-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <InternetServicesSection />
          <CableBundlesSection />
          <NetworkReliabilitySection />
          <FeaturesSection />
          <CoverageMapSection />
          <InstallationSupportSection />
          <ServiceGallerySection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
