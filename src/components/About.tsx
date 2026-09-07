import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import {
  Users,
  Globe,
  BookOpen,
  MapPin,
  Shield,
  Cpu,
  Database,
  GitCommit,
  Cloud,
  CloudSlash,
} from '@phosphor-icons/react'

// --- Animated network visualization ---
function NetworkVisual() {
  const nodes = [
    { x: '50%', y: '20%', label: 'Local AI', color: 'bg-gigatop-clay' },
    { x: '20%', y: '50%', label: 'CRM', color: 'bg-gigatop-olive' },
    { x: '80%', y: '50%', label: 'SharePoint', color: 'bg-gigatop-apricot' },
    { x: '30%', y: '80%', label: 'Documents', color: 'bg-gigatop-sage' },
    { x: '70%', y: '80%', label: 'Email', color: 'bg-gigatop-terracotta' },
  ]

  return (
    <div className="relative w-full aspect-square">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {nodes.slice(1).map((node, i) => (
          <motion.line
            key={i}
            x1="50"
            y1="20"
            x2={node.x}
            y2={node.y}
            stroke="rgba(227,212,194,0.08)"
            strokeWidth="0.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center"
          style={{
            left: `calc(${node.x} - 24px)`,
            top: `calc(${node.y} - 24px)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200 }}
        >
          <div className={`w-12 h-12 rounded-xl ${node.color}/10 border border-white/5 flex items-center justify-center backdrop-blur-sm`}>
            {i === 0 ? (
              <Cpu size={20} className="text-gigatop-clay" />
            ) : i === 1 ? (
              <Database size={20} className="text-gigatop-olive" />
            ) : i === 2 ? (
              <GitCommit size={20} className="text-gigatop-apricot" />
            ) : i === 3 ? (
              <BookOpen size={20} className="text-gigatop-sage" />
            ) : (
              <Cloud size={20} className="text-gigatop-terracotta" />
            )}
          </div>
          <span className="text-xs text-gigatop-sand/40 mt-2 font-medium whitespace-nowrap">{node.label}</span>
        </motion.div>
      ))}

      {/* Center label */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-[10px] text-gigatop-clay/60 font-mono uppercase tracking-widest">Gigatop Hub</div>
      </motion.div>
    </div>
  )
}

// --- Data flow animation ---
function DataFlow() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <motion.div
        className="w-8 h-8 rounded-lg bg-gigatop-olive/10 flex items-center justify-center"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Database size={16} className="text-gigatop-olive" />
      </motion.div>
      <div className="flex-1 h-px bg-gradient-to-r from-gigatop-olive/30 via-gigatop-clay/50 to-gigatop-clay/30" />
      <motion.div
        className="w-8 h-8 rounded-lg bg-gigatop-clay/10 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Cpu size={16} className="text-gigatop-clay" />
      </motion.div>
      <div className="flex-1 h-px bg-gradient-to-r from-gigatop-clay/30 via-gigatop-terracotta/50 to-gigatop-olive/30" />
      <motion.div
        className="w-8 h-8 rounded-lg bg-gigatop-terracotta/10 flex items-center justify-center"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <CloudSlash size={16} className="text-gigatop-terracotta" />
      </motion.div>
      <span className="text-xs text-gigatop-sand/30 ml-2 font-mono">Local only</span>
    </div>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-orb ambient-orb--clay w-[500px] h-[500px] -top-48 right-1/4" style={{ animationDelay: '-4s' }} />
        <div className="ambient-orb ambient-orb--sand w-[400px] h-[400px] bottom-0 -left-32" style={{ animationDelay: '-14s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="section-eyebrow mb-4 block">Über Gigatop</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6"
            >
              Wir schliessen eine Lücke in der KI-Welt:{' '}
              <span className="text-gigatop-terracotta">Datensicherheit.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gigatop-sand/60 leading-relaxed mb-6"
            >
              Die meisten grossen KI-Modelle basieren darauf, Daten an entfernte Cloud-Server zu senden. Für viele Schweizer Firmen ist das jedoch kein gangbarer Weg. Sie brauchen die gleiche Rechenpower und Intelligenz — aber ihre Daten dürfen den Firmenkopf nicht verlassen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gigatop-sand/60 leading-relaxed mb-8"
            >
              Wir setzen auf On-Premise-Lösungen. Die gesamte KI läuft in Ihrem eigenen Netzwerk. Hochleistungs-Hardware und Open-Source-Architekturen, die von der Schweizer Tech-Community unterstützt werden.
            </motion.p>

            {/* Data flow visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <DataFlow />
            </motion.div>

            {/* Swiss Made details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { icon: Users, label: 'Schnell', desc: 'Verfügbar für Support' },
                { icon: Globe, label: 'Mehrsprachig', desc: 'DE, EN, FR' },
                { icon: BookOpen, label: 'Rechtssicher', desc: 'DSG-konform' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gigatop-clay/5 border border-gigatop-dust/5 mx-auto mb-3 flex items-center justify-center group-hover:bg-gigatop-clay/10 transition-colors">
                    <item.icon size={20} className="text-gigatop-sand/50 group-hover:text-gigatop-clay transition-colors" />
                  </div>
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-xs text-gigatop-sand/30 mt-0.5">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Network visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gigatop-clay/5 blur-3xl rounded-full" />

            {/* Main card */}
            <div className="relative gigatop-glass-dark p-6 md:p-8 rounded-2xl">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gigatop-clay" />
                  <span className="text-sm font-semibold text-gigatop-sand/70">Gigatop Network</span>
                </div>
                <div className="flex items-center gap-1">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-gigatop-olive"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs text-gigatop-sand/30">Active</span>
                </div>
              </div>

              {/* Network visual */}
              <NetworkVisual />

              {/* Bottom stats */}
              <div className="mt-6 pt-4 border-t border-gigatop-dust/10 grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-gigatop-sand/70">5</div>
                  <div className="text-xs text-gigatop-sand/30">Quellen</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gigatop-sand/70">2.8k</div>
                  <div className="text-xs text-gigatop-sand/30">Dokumente</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gigatop-clay">94.7%</div>
                  <div className="text-xs text-gigatop-sand/30">Genauigkeit</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -left-4 px-3 py-2 rounded-lg bg-gigatop-bg-elevated border border-gigatop-dust/10 text-xs font-mono"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Shield size={12} className="inline mr-1 text-gigatop-olive" />
              DSG Protected
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 px-3 py-2 rounded-lg bg-gigatop-bg-elevated border border-gigatop-dust/10 text-xs font-mono"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              🇨🇭 Swiss Made
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}