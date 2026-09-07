import { motion } from 'motion/react'
import {
  HardDrive,
  Clock as ClockIcon,
  Headset,
  ChartBar,
  Check,
} from '@phosphor-icons/react'

const packages = [
  {
    name: 'Standard',
    num: 'A',
    color: 'clay',
    price: 'CHF 2\'900.-',
    period: 'Einmalig',
    popular: false,
    features: [
      'Hardware-Check Ihrer Server, PCs oder NAS',
      'Einrichtung Ihres persönlichen KI-Assistenten (Hermes)',
      'Wissens-Import: PDFs, Excel-Dateien, Wikis',
      'Finetuning auf Ihre Branche',
      'Schulung Ihres Teams',
    ],
    cta: 'Jetzt anfragen',
    bg: 'from-gigatop-clay/5 to-transparent',
    border: 'gigatop-dust/5',
    highlight: 'text-gigatop-clay',
    dot: 'bg-gigatop-clay',
  },
  {
    name: 'All-Inclusive',
    num: 'B',
    color: 'terracotta',
    price: 'CHF 950.-',
    period: 'Monatlich',
    popular: true,
    features: [
      'DGX-Station: leistungsstark, kompakt, leise',
      '24/7 Monitoring Ihres KI-Betriebs',
      'Updates & Sicherheit durch unser Team',
      'Support-Hotline: Schweizer Technik-Team',
      'Monatliches Reporting: Anfragen, Status, Trends',
    ],
    cta: 'Jetzt anfragen',
    bg: 'from-gigatop-terracotta/10 to-gigatop-olive/5',
    border: 'gigatop-clay/20',
    highlight: 'text-gigatop-terracotta',
    dot: 'bg-gigatop-terracotta',
  },
]

// Visual comparison chart
function FeatureComparison() {
  const features = [
    { name: 'On-Premise', standard: true, inclusive: true },
    { name: 'DSG/GDPR', standard: true, inclusive: true },
    { name: 'Swiss Made', standard: true, inclusive: true },
    { name: 'DGX-Station', standard: false, inclusive: true },
    { name: '24/7 Monitoring', standard: false, inclusive: true },
    { name: 'Monatliches Reporting', standard: false, inclusive: true },
  ]

  return (
    <div className="mt-12">
      <div className="gigatop-glass-dark p-6 rounded-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gigatop-dust/10">
              <th className="text-left text-sm font-medium text-gigatop-sand/50 pb-3">Feature</th>
              <th className="text-center text-sm font-medium text-gigatop-sand/70 pb-3">A: Standard</th>
              <th className="text-center text-sm font-medium text-gigatop-terracotta pb-3">B: All-Inclusive</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {features.map((f, i) => (
              <motion.tr
                key={f.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={`border-b border-gigatop-dust/5 ${i % 2 === 0 ? 'bg-gigatop-bg/20' : ''}`}
              >
                <td className="py-3 text-gigatop-sand/60">{f.name}</td>
                <td className="py-3 text-center">
                  {f.standard ? (
                    <Check size={18} className="text-gigatop-olive inline" />
                  ) : (
                    <span className="text-gigatop-sand/20">—</span>
                  )}
                </td>
                <td className="py-3 text-center">
                  {f.inclusive ? (
                    <Check size={18} className="text-gigatop-clay inline" />
                  ) : (
                    <span className="text-gigatop-sand/20">—</span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-orb ambient-orb--terracotta w-[600px] h-[600px] -top-48 -right-48" style={{ animationDelay: '-7s' }} />
        <div className="ambient-orb ambient-orb--olive w-[500px] h-[500px] bottom-0 left-0" style={{ animationDelay: '-15s' }} />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gigatop-dust/5 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow mb-4 block">Unsere Pakete</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4">
            <span className="text-gigatop-warm-white">Wählen Sie Ihren</span>{' '}
            <span className="text-gigatop-terracotta">Einstieg.</span>
          </h2>
          <p className="text-gigatop-sand/50 max-w-lg mx-auto">
            Zwei Pakete. Beide mit dem gleichen Ziel: Ihre KI-Landschaft.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative group ${pkg.popular ? '' : ''}`}
            >
              {/* Glow effect for popular */}
              {pkg.popular && (
                <div className="absolute -inset-1 bg-gradient-to-br from-gigatop-clay/20 via-gigatop-terracotta/10 to-gigatop-olive/20 rounded-2xl blur-lg group-hover:opacity-70 transition-opacity" />
              )}

              {/* Card */}
              <div className={`relative h-full ${pkg.popular ? 'gigatop-glass-dark' : 'gigatop-glass'} flex flex-col`}>
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gigatop-clay to-gigatop-terracotta text-white text-xs font-semibold shadow-lg">
                      Empfohlen
                    </div>
                  </div>
                )}

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${pkg.bg}`} />

                <div className="p-8 flex flex-col flex-1">
                  {/* Package header */}
                  <div className="mb-6">
                    <span className={`text-xs font-mono uppercase tracking-wider ${pkg.highlight} mb-2 block`}>
                      Paket {pkg.num}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gigatop-sand/50 text-sm leading-relaxed">
                      {pkg.name === 'Standard'
                        ? 'Die Basis für Unternehmer, die selbst die Kontrolle übernehmen wollen.'
                        : 'Das Rundum-sorglos-Paket. Sie leasen die Power, wir kümmern uns um den Rest.'}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className={`text-4xl font-bold mb-1 ${pkg.highlight}`}>{pkg.price}</div>
                    <div className="text-sm text-gigatop-sand/40">{pkg.period}</div>
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
                        <span className="text-gigatop-sand/70">{feature}</span>
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

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FeatureComparison />
        </motion.div>
      </div>
    </section>
  )
}