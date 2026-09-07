import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Beratungsgespräch',
    desc: 'Wir analysieren Ihre Infrastruktur und verstehen Ihre Anforderungen.',
    icon: '🔍',
    color: 'text-gigatop-clay',
    duration: '1-2 Tage',
  },
  {
    num: '02',
    title: 'Setup & Integration',
    desc: 'Wir installieren und konfigurieren Ihre KI-Hardware und Software.',
    icon: '⚙️',
    color: 'text-gigatop-terracotta',
    duration: '3-5 Tage',
  },
  {
    num: '03',
    title: 'Wissens-Import',
    desc: 'Ihr Agent liest und versteht Ihre Daten: PDFs, Excel, Wikis.',
    icon: '📚',
    color: 'text-gigatop-apricot',
    duration: '1-2 Wochen',
  },
  {
    num: '04',
    title: 'Go Live',
    desc: 'Ihr KI-Assistent arbeitet aktiv in Ihrem Netzwerk — 24/7.',
    icon: '🚀',
    color: 'text-gigatop-olive',
    duration: 'Go-Live Tag',
  },
]

// Animated progress line
function ProgressLine() {
  return (
    <motion.div
      className="absolute left-8 top-0 bottom-0 w-px bg-gigatop-dust/10"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="absolute inset-x-0 bg-gradient-to-b from-gigatop-clay via-gigatop-terracotta to-gigatop-olive"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  )
}

// Circular progress indicator
function StepProgress({ progress, label }: { progress: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(227,212,194,0.08)" strokeWidth="2" />
          <motion.circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-gigatop-clay"
            initial={{ strokeDasharray: '94.2', strokeDashoffset: '94.2' }}
            whileInView={{ strokeDashoffset: 94.2 - (94.2 * progress) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-gigatop-sand/50">{progress}%</span>
        </div>
      </div>
      <span className="text-xs text-gigatop-sand/30 font-mono">{label}</span>
    </div>
  )
}

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gigatop-dust/5 to-transparent" />
        <div className="ambient-orb ambient-orb--clay w-[400px] h-[400px] top-1/4 -left-20" style={{ animationDelay: '-3s' }} />
        <div className="ambient-orb ambient-orb--olive w-[350px] h-[350px] bottom-1/4 right-0" style={{ animationDelay: '-12s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <span className="section-eyebrow mb-4 block">So funktioniert es</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4">
            Vier Schritte zu Ihrer{' '}
            <span className="text-gigatop-terracotta">KI-Landschaft.</span>
          </h2>
          <p className="text-gigatop-sand/50 max-w-lg mx-auto">
            Transparent, strukturiert, ohne Überraschungen.
          </p>
        </motion.div>

        {/* Steps with connecting line */}
        <div className="relative">
          <ProgressLine />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ x: i % 2 === 0 ? 8 : -8 }}
                className={`relative flex items-start gap-6 group ${
                  i % 2 === 0 ? '' : 'lg:justify-end'
                }`}
              >
                {/* Number badge */}
                <motion.div
                  className={`relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gigatop-bg-elevated to-gigatop-bg border border-gigatop-dust/10 flex items-center justify-center group-hover:border-gigatop-clay/20 transition-colors`}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`text-2xl`}>{step.icon}</span>
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="gigatop-glass group relative"
                >
                  <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gigatop-clay/30 to-transparent" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-bold text-gigatop-dust/10 font-mono">{step.num}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="ml-auto text-xs font-mono text-gigatop-sand/30 bg-gigatop-bg/50 px-2 py-1 rounded-md">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gigatop-sand/60 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>

                {/* Dot on line */}
                <div className={`absolute w-3 h-3 rounded-full bg-gigatop-clay top-8 ${
                  i % 2 === 0
                    ? 'left-4 -translate-x-1/2'
                    : 'lg:left-auto lg:right-4 lg:translate-x-1/2'
                }`}
                style={{
                  background: i === 0 ? 'var(--color-gigatop-clay)' :
                              i === 1 ? 'var(--color-gigatop-terracotta)' :
                              i === 2 ? 'var(--color-gigatop-apricot)' :
                              'var(--color-gigatop-olive)',
                }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA under process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 text-gigatop-sand/40 text-sm">
            <span>Bereit?</span>
            <motion.div
              className="w-8 h-px bg-gigatop-clay/40"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <a href="#kontakt" className="text-gigatop-clay hover:text-gigatop-terracotta transition-colors font-medium">
              Kontakt aufnehmen →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}