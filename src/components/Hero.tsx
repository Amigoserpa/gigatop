import { motion, useScroll, useTransform } from 'motion/react'
import heroImage from '../assets/hero.png'
import { Monitor, Lock, GraduationCap } from '@phosphor-icons/react'

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3])

  return (
    <section className="relative min-h-[120dvh] flex items-center pt-16 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: y1, opacity }}
      >
        <img
          src={heroImage}
          alt="Gigatop - Lokale KI Infrastruktur"
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.1)' }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gigatop-bg/40 via-gigatop-bg/60 to-gigatop-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-gigatop-clay/10 via-transparent to-gigatop-olive/5" />
        <div className="absolute inset-0 dot-grid" />
      </motion.div>

      {/* Ambient glow orbs - top */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="ambient-orb ambient-orb--clay w-[600px] h-[600px] -top-32 -left-32" style={{ animationDelay: '0s' }} />
        <div className="ambient-orb ambient-orb--terracotta w-[500px] h-[500px] top-0 right-0" style={{ animationDelay: '-5s' }} />
        <div className="ambient-orb ambient-orb--apricot w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow with subtle pulse */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="section-eyebrow mb-6 block relative inline-block">
              Lokale KI. Ohne Kompromisse.
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-gigatop-clay/30"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </span>
          </motion.div>

          {/* Headline with word-by-word reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <motion.span className="inline-block" whileHover={{ scale: 1.02, color: '#C96F52' }} transition={{ duration: 0.2 }}>
              Unternehmens-Intelligenz.
            </motion.span>{' '}
            <span className="text-gigatop-terracotta">Lokal.</span>{' '}
            <span className="text-gigatop-dust">Sicher.</span>{' '}
            <span className="text-gigatop-apricot">Swiss Made.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gigatop-sand/70 leading-relaxed max-w-2xl mb-10"
          >
            Wir bringen KI in Ihren Serverraum — ohne Daten ins Ausland. Der{' '}
            <strong className="text-gigatop-warm-white font-semibold">Gigatop Service Agent</strong>{' '}
            hilft Ihnen, mit den modernsten Technologien der Schweiz, direkt vor Ort.
          </motion.p>

          {/* CTAs with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#kontakt"
              className="gigatop-cta text-base relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Jetzt Angebot anfordern</span>
            </motion.a>
            <motion.a
              href="#services"
              className="gigatop-cta gigatop-cta-secondary text-base"
              whileHover={{ scale: 1.03, borderColor: '#C96F52' }}
              whileTap={{ scale: 0.97 }}
            >
              Pakete ansehen
            </motion.a>
          </motion.div>
        </div>

        {/* Feature cards with staggered entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ y: y2 }}
          className="mt-20 md:mt-28 grid md:grid-cols-3 gap-4"
        >
          {[
            { icon: Monitor, label: 'On-Premise', desc: 'KI läuft in Ihrem Netzwerk', color: 'text-gigatop-clay' },
            { icon: Lock, label: 'DSG/GDPR', desc: 'Keine Daten verlassen Ihr Haus', color: 'text-gigatop-olive' },
            { icon: GraduationCap, label: 'Swiss Made', desc: 'Support aus der Schweiz', color: 'text-gigatop-apricot' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(227, 212, 194, 0.2)' }}
              className="gigatop-glass gigatop-glow shimmer-hover p-6 flex items-start gap-4 group cursor-default"
            >
              <div className={`feature-icon shrink-0 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.icon size={22} />
              </div>
              <div>
                <div className="font-semibold text-base mb-1">{item.label}</div>
                <div className="text-sm text-gigatop-sand/60">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-gigatop-sand/20 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-gigatop-clay/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}