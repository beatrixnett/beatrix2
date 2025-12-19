"use client"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Phone } from "lucide-react"

interface FooterLink {
  title: string
  href: string
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Assistance Services", href: "/services" },
      { title: "How It Works", href: "/about" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Contact Us", href: "/contact" },
      { title: "Disclaimer", href: "/disclaimer" },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Refund Policy", href: "/refund-policy" },
      { title: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="text-2xl font-bold text-white">Beatrix Net</div>
          <p className="text-sm text-white/60 max-w-xs">
            Independent third-party assistance for your internet, cable, and streaming needs. Launched 2025.
          </p>
          <div className="text-muted-foreground mt-8 text-sm md:mt-0 md:block hidden">
            <p>© {new Date().getFullYear()} Beatrix Net. All rights reserved.</p>
            <div className="mt-4 space-y-2">
              <a
                href="tel:+18333190063"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-semibold"
              >
                <Phone size={18} />
                (833) 319-0063
              </a>
              <a
                href="tel:+18336190239"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-semibold"
              >
                <Phone size={18} />
                (833) 619-0239
              </a>
              <a
                href="tel:+18445250789"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-semibold"
              >
                <Phone size={18} />
                (844) 525-0789
              </a>
            </div>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-8 text-center space-y-4">
        <div className="space-y-3 px-4">
          <p className="text-muted-foreground text-xs leading-relaxed">
            <strong>Important:</strong> Beatrix Net is an independent third-party service assistance startup. We are not affiliated with any internet, cable, or streaming provider. All trademarks belong to their respective owners.
          </p>
        </div>
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Beatrix Net. All rights reserved.</p>
        <a
          href="tel:+18333190063"
          className="flex items-center gap-2 justify-center text-white hover:text-blue-400 transition-colors font-semibold"
        >
          <Phone size={18} />
          (833) 319-0063
        </a>
        <a
          href="tel:+18336190239"
          className="flex items-center gap-2 justify-center text-white hover:text-blue-400 transition-colors font-semibold"
        >
          <Phone size={18} />
          (833) 619-0239
        </a>
        <a
          href="tel:+18445250789"
          className="flex items-center gap-2 justify-center text-white hover:text-blue-400 transition-colors font-semibold"
        >
          <Phone size={18} />
          (844) 525-0789
        </a>
      </div>

      <div className="hidden md:block mt-8 pt-6 border-t border-foreground/10 w-full">
        <div className="space-y-3">
          <p className="text-muted-foreground text-xs text-center leading-relaxed px-4">
            <strong>Important Disclosure:</strong> Beatrix Net is an independent third-party service assistance startup. We are not affiliated with, endorsed by, or sponsored by any internet, cable, or streaming service provider. All trademarks belong to their respective owners.
          </p>
          <p className="text-muted-foreground text-xs text-center">
            Expert guidance for your connectivity needs.
          </p>
        </div>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
