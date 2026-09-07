import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import {
  Envelope,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react'

// --- Animated background pattern ---
function CTABackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient mesh */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gigatop-clay/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gigatop-olive/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gigatop-terracotta/3 blur-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Animated dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gigatop-clay/20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}

// --- Step indicator ---
function ContactSteps() {
  const steps = [
    { num: '1', label: 'Anfrage' },
    { num: '2', label: 'Gespräch' },
    { num: '3', label: 'Konzept' },
    { num: '4', label: 'Go Live' },
  ]

  return (
    <div className="flex items-center justify-center gap-1 mb-8">
      {steps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="flex items-center"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gigatop-clay to-gigatop-terracotta flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">{step.num}</span>
            </div>
            <span className="text-xs text-white/70 font-medium">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={14} className="text-white/20 ml-1" weight="thin" />
          )}
        </motion.div>
      ))}
    </div>
  )
}

// --- Form field with floating label ---
function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  icon: Icon,
}: {
  id: string
  label: string
  type?: string
  placeholder: string
  icon: typeof Envelope
}) {
  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white/70 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gigatop-clay transition-colors">
          <Icon size={18} />
        </div>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gigatop-clay/50 focus:bg-white/8 transition-all text-sm"
        />
      </div>
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
      {/* Darker background for CTA section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D] via-[#0D0D0D] to-[#0A0F0D] pointer-events-none" />
      <CTABackground />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Copy + Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-eyebrow mb-4 block text-gigatop-apricot">Kontakt</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            >
              <span className="text-white">Bereit für</span>{' '}
              <span className="text-gigatop-terracotta">lokale KI?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 leading-relaxed mb-8 max-w-md"
            >
              Ein konkretes AI-Potenzial. Ein klarer nächster Schritt.
              Persönlich, diskret, unverbindlich.
            </motion.p>

            {/* Contact steps */}
            <ContactSteps />

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mt-10"
            >
              {[
                { icon: Envelope, label: 'E-Mail', value: 'top@gigatop.io', href: 'mailto:top@gigatop.io' },
                { icon: Phone, label: 'Telefon', value: '+41 CH', href: 'tel:+41' },
                { icon: MapPin, label: 'Standort', value: 'Schweiz', href: '#' },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gigatop-clay/10 group-hover:border-gigatop-clay/20 transition-all">
                    <item.icon size={18} className="text-white/50 group-hover:text-gigatop-clay transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30">{item.label}</div>
                    <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-4 text-xs text-white/30"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-gigatop-olive" />
                Unverbindlich
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-gigatop-olive" />
                DSGVO-konform
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-gigatop-olive" />
                Schweizer Support
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              className="gigatop-card-light-dark p-8 rounded-2xl"
              onSubmit={handleSubmit}
            >
              {/* Card accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gigatop-clay/30 to-transparent rounded-t-2xl" />

              <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>

              <div className="space-y-4">
                <FormField
                  id="name"
                  label="Name"
                  placeholder="Ihr Name"
                  icon={Envelope}
                />
                <FormField
                  id="email"
                  label="E-Mail"
                  type="email"
                  placeholder="ihre@email.ch"
                  icon={Envelope}
                />
                <FormField
                  id="message"
                  label="Nachricht"
                  placeholder="Wie können wir Ihnen helfen?"
                  icon={Envelope}
                />
              </div>

              <motion.button
                type="submit"
                className="gigatop-cta w-full text-base mt-6 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState === 'sent' ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={18} className="text-gigatop-olive" />
                    Gesendet!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Nachricht senden
                    <ArrowRight size={16} weight="bold" />
                  </span>
                )}
              </motion.button>

              <p className="text-xs text-white/20 text-center mt-4">
                Wir antworten innerhalb von 24 Stunden.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}