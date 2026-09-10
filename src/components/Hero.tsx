import { motion, useScroll, useTransform } from 'motion/react'

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4])
  const scale = useTransform(scrollY, [0, 400], [1, 1.1])

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: y1, opacity, scale }}
      >
        <img
          src="/assets/hero-v2.png"
          alt="Lokale KI Infrastruktur – Gigatop On-Premise"
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.05)' }}
          loading="eager"
        />
        {/* Deep gradient overlay - darker than before */}
        <div className="absolute inset-0 bg-[#0A0F0D]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] via-[#0A0F0D]/30 to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-[0.03]" />
      </motion.div>

      {/* Ambient glow - subtle */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="ambient-orb ambient-orb--clay w-[700px] h-[700px] -top-40 -left-40" style={{ animationDelay: '0s' }} />
        <div className="ambient-orb ambient-orb--olive w-[500px] h-[500px] bottom-0 right-0" style={{ animationDelay: '-12s' }} />
      </div>

      {/* Content - offset left, not centered */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Headline - no eyebrow, bold, minimal */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-[#FBF7F0]">KI, die Ihren</span>{' '}
              <span className="text-[#C96F52]">Serverraum</span>{' '}
              <span className="text-[#FBF7F0]">nicht verlässt.</span>
            </motion.h1>

            {/* Subtext - max 20 words */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-[#E3D4C2]/50 leading-relaxed max-w-xl mb-10"
            >
              Lokale KI-Modelle für Schweizer Unternehmen. DSGVO-konform,
              On-Premise, Swiss Made. Ihre Daten, Ihre Infrastruktur,
              Ihre Kontrolle.
            </motion.p>

            {/* CTA - single primary, one secondary */}
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
                <span className="relative z-10">AI Session buchen</span>
              </motion.a>
              <motion.a
                href="#services"
                className="gigatop-cta-secondary text-base"
                whileHover={{ scale: 1.03, borderColor: '#C96F52' }}
                whileTap={{ scale: 0.97 }}
              >
                Pakete ansehen
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Evidence Bar - below the fold, always visible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 border-t border-[#E3D4C2]/5 bg-[#0A0F0D]/60 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 rounded-full bg-[#7A8067] animate-pulse" />
            <span className="text-[#E3D4C2]/40">100% DSG/GDPR-konform</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 rounded-full bg-[#B95F43] animate-pulse" />
            <span className="text-[#E3D4C2]/40">On-Premise部署</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 rounded-full bg-[#E5B58B] animate-pulse" />
            <span className="text-[#E3D4C2]/40">Schweizer Support</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 rounded-full bg-[#C96F52] animate-pulse" />
            <span className="text-[#E3D4C2]/40">&lt; 50ms Latenz</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}