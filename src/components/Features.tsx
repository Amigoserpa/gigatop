import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import {
  ShieldCheck,
  Clock,
  GraduationCap,
  Database,
  Lightning,
  Brain,
} from '@phosphor-icons/react'

// --- Floating particles background ---
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gigatop-clay/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

// --- Animated stat counter ---
function StatCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#1A2321] mb-1">{value}</div>
      <div className="text-sm text-[#1A2321]/50 font-medium">{label}</div>
    </div>
  )
}

// --- Feature cards ---
const features = [
  {
    icon: ShieldCheck,
    title: 'Datenschutz (DSG/GDPR)',
    desc: 'Keine Daten verlassen Ihr Haus. Alle KI-Modelle und Datenverarbeitungen laufen ausschliesslich in Ihrer Infrastruktur.',
    accent: 'from-gigatop-clay/10 to-transparent',
    iconBg: 'bg-gigatop-clay/10',
  },
  {
    icon: Clock,
    title: 'Geschwindigkeit',
    desc: 'Lokale Latenzzeiten, kein Warten auf Cloud-Server. Echtzeit-Antworten für Ihre Geschäftsprozesse.',
    accent: 'from-gigatop-olive/10 to-transparent',
    iconBg: 'bg-gigatop-olive/10',
  },
  {
    icon: GraduationCap,
    title: 'Swiss Made',
    desc: 'Support und Verantwortung aus der Schweiz. Schnelle Verfügbarkeit, verständliche Sprache, rechtssicher.',
    accent: 'from-gigatop-apricot/10 to-transparent',
    iconBg: 'bg-gigatop-apricot/10',
  },
  {
    icon: Database,
    title: 'Datensouveränität',
    desc: 'Sie behalten die Hoheit über Ihre Daten. Full Control, zero dependencies auf externe Clouds.',
    accent: 'from-gigatop-terracotta/10 to-transparent',
    iconBg: 'bg-gigatop-terracotta/10',
  },
  {
    icon: Lightning,
    title: 'Skalierbar',
    desc: 'Von der kleinen Kanzlei bis zum Industrieunternehmen. Ihre KI wächst mit Ihren Anforderungen.',
    accent: 'from-gigatop-sage/10 to-transparent',
    iconBg: 'bg-gigatop-sage/10',
  },
  {
    icon: Brain,
    title: 'Adaptiv',
    desc: 'Der Agent lernt aus Ihrer Branche und passt sich Ihren Prozessen an. Je länger, desto besser.',
    accent: 'from-gigatap-dust/10 to-transparent',
    iconBg: 'bg-gigatop-dust/10',
  },
]

// --- Visual illustration card ---
function FeatureVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Main card */}
      <div className="gigatop-card-light-dark p-6 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="text-xs text-gigatop-sand/30 font-mono ml-2">k8s-cluster-gigatop</span>
        </div>

        {/* Terminal output */}
        <div className="space-y-3 font-mono text-sm">
          {[
            { text: '>> initializing local-ai-agent...', color: 'text-gigatop-sand/40' },
            { text: '>> loading knowledge-base...', color: 'text-gigatop-sand/40' },
            { text: '✓ 2,847 documents indexed', color: 'text-gigatop-olive' },
            { text: '>> training on-sector model...', color: 'text-gigatop-sand/40' },
            { text: '✓ model accuracy: 94.7%', color: 'text-gigatop-olive' },
            { text: '>> running health-check...', color: 'text-gigatop-sand/40' },
            <motion.span
              key="pulse"
              className="text-gigatop-clay"
            >
              ✓ all systems operational
            </motion.span>,
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
              className={`${typeof line === 'string' ? 'text-gigatop-sand/40' : ''}`}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-5 pt-4 border-t border-gigatop-dust/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-gigatop-olive"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-gigatop-sand/40">Active</span>
          </div>
          <span className="text-xs text-gigatop-sand/30 font-mono">v3.2.1</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-gigatop-clay/5 blur-xl" />
      <div className="absolute -bottom-3 -left-3 w-32 h-32 rounded-full bg-gigatop-olive/5 blur-xl" />
    </motion.div>
  )
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="features"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Light section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D] via-[#0D1512] to-[#0A0F0D] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="ambient-orb ambient-orb--sand w-[500px] h-[500px] -top-40 -left-40" />
        <div className="ambient-orb ambient-orb--clay w-[400px] h-[400px] bottom-0 right-0" style={{ animationDelay: '-8s' }} />
      </div>

      {/* Particles */}
      <ParticleField />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow mb-4 block">Warum lokal?</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6">
            <span className="text-gigatop-warm-white">Vorteile,</span>{' '}
            <span className="text-gigatop-terracotta">die Sie merken.</span>
          </h2>
          <p className="text-gigatop-sand/50 max-w-xl mx-auto text-lg">
            Sechs Gründe, warum führende Schweizer Unternehmen auf lokale KI setzen.
          </p>
        </motion.div>

        {/* Features grid + visual */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Feature cards */}
          <div className="lg:col-span-2 space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: i % 2 === 0 ? 6 : -6 }}
                className={`gigatop-glass shimmer-hover group cursor-default ${
                  i < 3 ? '' : 'border-gigatop-dust/5'
                }`}
              >
                <div className="flex items-center gap-5 p-5">
                  {/* Icon with gradient bg */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <f.icon size={20} className={`text-gigatop-sand/70`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-1">{f.title}</h3>
                    <p className="text-gigatop-sand/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>

                  {/* Arrow on hover */}
                  <motion.div
                    className="text-gigatop-sand/20 group-hover:text-gigatop-clay transition-colors"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className={`h-px bg-gradient-to-r ${f.accent}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Visual terminal card */}
          <div className="lg:col-span-1">
            <FeatureVisual />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gigatop-dust/10"
        >
          <StatCounter value="99.9%" label="Uptime" />
          <StatCounter value="< 50ms" label="Latenz" />
          <StatCounter value="100%" label="DSG-konform" />
        </motion.div>
      </div>
    </section>
  )
}