/** @jsxImportSource react */

import { motion } from 'motion/react'
import {
  ShieldCheck,
  Lock,
  Clock,
} from '@phosphor-icons/react'

interface BenefitItem {
  icon: typeof ShieldCheck
  title: string
  desc: string
  color: string
  iconColor: string
}

const benefits: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: 'DSG/GDPR-konform',
    desc: 'Keine Daten verlassen Ihr Haus. Alle KI-Modelle und Datenverarbeitungen laufen ausschliesslich in Ihrer Infrastruktur.',
    color: 'from-[#B95F43]/10 to-transparent',
    iconColor: 'text-[#B95F43]',
  },
  {
    icon: Lock,
    title: 'Keine Cloud-Dependencies',
    desc: 'Lokale Latenzzeiten, kein Warten auf entfernte Server. Ihre Infrastruktur, Ihre Kontrolle, Ihre Sicherheit.',
    color: 'from-[#7A8067]/10 to-transparent',
    iconColor: 'text-[#7A8067]',
  },
  {
    icon: Clock,
    title: 'Swiss Made',
    desc: 'Support und Verantwortung aus der Schweiz. Schnelle Verfügbarkeit, verständliche Sprache, rechtssicher.',
    color: 'from-[#E5B58B]/10 to-transparent',
    iconColor: 'text-[#E5B58B]',
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Minimal background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E3D4C2]/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header - NO eyebrow, just headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-[#FBF7F0]">
            Vorteile, die Sie merken.
          </h2>
        </motion.div>

        {/* 3 benefit cards - not 6, bold layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              {/* Gradient accent line */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${b.color}`} />

              {/* Card */}
              <div className="gigatop-glow shimmer-hover p-8 border border-[#E3D4C2]/5 rounded-2xl bg-[#1A2321]/60 backdrop-blur-sm group-hover:border-[#E3D4C2]/10 transition-colors">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-[#E3D4C2]/5 border border-[#E3D4C2]/5 flex items-center justify-center mb-6 ${b.iconColor}`}>
                  <b.icon size={22} weight="duotone" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#FBF7F0] mb-3">
                  {b.title}
                </h3>

                {/* Description */}
                <p className="text-[#E3D4C2]/50 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}