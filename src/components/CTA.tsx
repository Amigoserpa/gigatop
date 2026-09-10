import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import {
  Envelope,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react'

function CTABackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#B95F43]/4 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#7A8067]/3 blur-3xl" />
      <div className="absolute inset-0 dot-grid opacity-[0.02]" />
    </div>
  )
}

export function CTA() {
  const ref = useRef(null)
  const [formState, setFormState] = useState('idle' as 'idle' | 'sending' | 'sent')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => setFormState('sent'), 1500)
  }

  return (
    <section
      id="kontakt"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* CTA background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D] via-[#0D0D0B] to-[#0A0F0D] pointer-events-none" />
      <CTABackground />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy + Contact */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-[#FBF7F0]">Bereit für </span>
              <span className="text-[#C96F52]">lokale KI?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#E3D4C2]/45 leading-relaxed max-w-md mb-10"
            >
              Ein persönliches Gespräch. Ein klares nächstes Schritt.
              Unverbindlich, diskret, Schweizer Qualität.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { label: 'E-Mail', value: 'top@gigatop.io', href: 'mailto:top@gigatop.io' },
                { label: 'Standort', value: 'Schweiz', href: '#' },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E3D4C2]/5 border border-[#E3D4C2]/5 flex items-center justify-center group-hover:bg-[#B95F43]/10 group-hover:border-[#B95F43]/20 transition-all">
                    <Envelope size={16} className="text-[#E3D4C2]/40 group-hover:text-[#B95F43] transition-colors" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#E3D4C2]/20 uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-medium text-[#E3D4C2]/70 group-hover:text-[#E3D4C2] transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center gap-6 text-[11px] text-[#E3D4C2]/20 font-mono"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} className="text-[#7A8067]" />
                Unverbindlich
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} className="text-[#7A8067]" />
                DSGVO
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} className="text-[#7A8067]" />
                CH Support
              </span>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              className="bg-[#1A2321]/60 border border-[#E3D4C2]/5 rounded-2xl p-8"
              onSubmit={handleSubmit}
            >
              <h3 className="text-lg font-semibold mb-6 text-[#E3D4C2]/60">Nachricht senden</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#E3D4C2]/40 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 bg-[#0A0F0D]/60 border border-[#E3D4C2]/5 rounded-xl text-[#E3D4C2] placeholder:text-[#E3D4C2]/15 focus:outline-none focus:border-[#B95F43]/40 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E3D4C2]/40 mb-2">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ihre@email.ch"
                    className="w-full px-4 py-3 bg-[#0A0F0D]/60 border border-[#E3D4C2]/5 rounded-xl text-[#E3D4C2] placeholder:text-[#E3D4C2]/15 focus:outline-none focus:border-[#B95F43]/40 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E3D4C2]/40 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Wie können wir Ihnen helfen?"
                    className="w-full px-4 py-3 bg-[#0A0F0D]/60 border border-[#E3D4C2]/5 rounded-xl text-[#E3D4C2] placeholder:text-[#E3D4C2]/15 focus:outline-none focus:border-[#B95F43]/40 transition-all resize-none text-sm"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="gigatop-cta w-full text-base mt-6 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState === 'sent' ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={18} className="text-[#7A8067]" />
                    Gesendet!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Nachricht senden
                    <ArrowRight size={16} weight="bold" />
                  </span>
                )}
              </motion.button>

              <p className="text-[10px] text-[#E3D4C2]/15 text-center mt-4">
                Wir antworten innerhalb von 24 Stunden.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}