/** @jsxImportSource react */

import { motion } from 'motion/react'

const packages = [
  {
    name: 'Standard',
    num: 'A',
    color: 'clay',
    price: 'CHF 2\'900.-',
    period: 'Einmalig',
    tagline: 'Die Basis für Unternehmer, die selbst die Kontrolle übernehmen wollen.',
    popular: false,
    features: [
      'Hardware-Check Ihrer Server, PCs oder NAS',
      'Einrichtung Ihres persönlichen KI-Assistenten (Hermes)',
      'Wissens-Import: PDFs, Excel-Dateien, Wikis',
      'Finetuning auf Ihre Branche',
      'Schulung Ihres Teams',
    ],
    cta: 'Jetzt anfragen',
    highlight: 'text-[#B95F43]',
    dot: 'bg-[#B95F43]',
  },
  {
    name: 'All-Inclusive',
    num: 'B',
    color: 'terracotta',
    price: 'CHF 950.-',
    period: 'Monatlich',
    tagline: 'Das Rundum-sorglos-Paket. Sie leasen die Power, wir kümmern uns um den Rest.',
    popular: true,
    features: [
      'DGX-Station: leistungsstark, kompakt, leise',
      '24/7 Monitoring Ihres KI-Betriebs',
      'Updates & Sicherheit durch unser Team',
      'Support-Hotline: Schweizer Technik-Team',
      'Monatliches Reporting: Anfragen, Status, Trends',
    ],
    cta: 'Jetzt anfragen',
    highlight: 'text-[#C96F52]',
    dot: 'bg-[#C96F52]',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#C96F52]/3 blur-[150px]" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E3D4C2]/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header - eyebrow here (1st eyebrow, OK per rule) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="section-eyebrow mb-4 block">Unsere Pakete</span>
          <h2 className="text-3xl md:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-[#FBF7F0]">
            Wählen Sie Ihren <span className="text-[#C96F52]">Einstieg.</span>
          </h2>
          <p className="text-[#E3D4C2]/40 max-w-lg mt-4 text-lg">
            Zwei Pakete. Beide mit dem gleichen Ziel: Ihre KI-Landschaft.
          </p>
        </motion.div>

        {/* Pricing cards - only 2, clean */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              {/* Glow for popular */}
              {pkg.popular && (
                <div className="absolute -inset-1 bg-gradient-to-br from-[#B95F43]/20 via-[#C96F52]/10 to-[#7A8067]/20 rounded-3xl blur-lg group-hover:opacity-70 transition-opacity" />
              )}

              {/* Card */}
              <div className={`relative h-full flex flex-col ${pkg.popular ? 'gigatop-glass-dark border-[#E3D4C2]/10' : 'bg-[#1A2321]/60 border border-[#E3D4C2]/5'} flex-col rounded-2xl`}>
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#B95F43] to-[#C96F52] text-[#FBF7F0] text-xs font-semibold shadow-lg">
                      Empfohlen
                    </div>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Package header */}
                  <div className="mb-6">
                    <span className={`text-xs font-mono uppercase tracking-wider ${pkg.highlight} mb-2 block`}>
                      Paket {pkg.num}
                    </span>
                    <h3 className="text-2xl font-bold text-[#FBF7F0] mb-2">{pkg.name}</h3>
                    <p className="text-[#E3D4C2]/40 text-sm leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className={`text-4xl font-bold mb-1 ${pkg.highlight}`}>{pkg.price}</div>
                    <div className="text-sm text-[#E3D4C2]/30">{pkg.period}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + pkg.features.indexOf(feature) * 0.08 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${pkg.dot} mt-1.5 shrink-0`} />
                        <span className="text-[#E3D4C2]/60">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#kontakt"
                    className={`gigatop-cta w-full text-sm ${pkg.popular ? '' : 'gigatop-cta-secondary'}`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}