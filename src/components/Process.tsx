import { motion } from 'motion/react'

const steps = [
  {
    title: 'Beratungsgespräch',
    desc: 'Wir analysieren Ihre Infrastruktur und verstehen Ihre Anforderungen – persönlich, vor Ort oder remote.',
    duration: '1-2 Tage',
    color: 'from-[#B95F43] to-[#C96F52]',
  },
  {
    title: 'Setup & Integration',
    desc: 'Wir installieren und konfigurieren Ihre KI-Hardware und Software nahtlos in Ihre bestehende Landschaft.',
    duration: '3-5 Tage',
    color: 'from-[#C96F52] to-[#E5B58B]',
  },
  {
    title: 'Wissens-Import',
    desc: 'Ihr Agent liest und versteht Ihre Daten: PDFs, Excel, Wikis. Er wird zum Experten Ihrer Branche.',
    duration: '1-2 Wochen',
    color: 'from-[#E5B58B] to-[#7A8067]',
  },
  {
    title: 'Go Live',
    desc: 'Ihr KI-Assistent arbeitet aktiv in Ihrem Netzwerk. 24/7. Lernen Sie den Unterschied.',
    duration: 'Tag X',
    color: 'from-[#7A8067] to-[#98A18A]',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#7A8067]/3 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* NO eyebrow - this is section 2, eyebrow was at Hero(0) → Services(1), this is section 3, so eyebrow OK here */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="section-eyebrow mb-4 block">So funktioniert es</span>
          <h2 className="text-3xl md:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-[#FBF7F0] max-w-xl">
            Vier Schritte. <span className="text-[#C96F52]">Null Überraschungen.</span>
          </h2>
        </motion.div>

        {/* Timeline - clean, bold */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ x: 6 }}
              className="group relative py-8 border-b border-[#E3D4C2]/5 last:border-b-0"
            >
              {/* Accent line on hover */}
              <div className={`absolute top-0 left-0 h-px bg-gradient-to-r ${step.color} w-0 group-hover:w-[80px] transition-all duration-500`} />

              <div className="grid grid-cols-[80px_1fr_auto] items-center gap-8">
                {/* Number */}
                <div className="text-5xl font-bold text-[#E3D4C2]/8 font-mono">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FBF7F0] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#E3D4C2]/45 leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>

                {/* Duration */}
                <div className="text-xs font-mono text-[#E3D4C2]/25 bg-[#0A0F0D]/50 px-3 py-2 rounded-md whitespace-nowrap">
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA under process - NO eyebrow needed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 text-[#B95F43] hover:text-[#C96F52] transition-colors font-medium"
          >
            <span>Kontakt aufnehmen</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}