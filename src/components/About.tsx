import { motion } from 'motion/react'
import { useRef } from 'react'
import {
  Database,
  Cpu,
  CloudSlash,
} from '@phosphor-icons/react'

// --- Network visualization ---
function NetworkVisual() {
  const nodes = [
    { x: 50, y: 15, label: 'Local AI', color: 'bg-[#B95F43]' },
    { x: 15, y: 50, label: 'CRM', color: 'bg-[#7A8067]' },
    { x: 85, y: 50, label: 'SharePoint', color: 'bg-[#E5B58B]' },
    { x: 30, y: 82, label: 'Dokumente', color: 'bg-[#98A18A]' },
    { x: 72, y: 82, label: 'E-Mail', color: 'bg-[#C96F52]' },
  ]

  return (
    <div className="relative w-full aspect-square">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {nodes.slice(1).map((node, i) => (
          <motion.line
            key={i}
            x1={50}
            y1={20}
            x2={node.x}
            y2={node.y}
            stroke="rgba(227,212,194,0.06)"
            strokeWidth="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center"
          style={{
            left: `calc(${node.x}% - 22px)`,
            top: `calc(${node.y}% - 22px)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.12, type: 'spring', stiffness: 200 }}
        >
          <div className={`w-11 h-11 rounded-xl ${node.color}/10 border border-[#E3D4C2]/5 flex items-center justify-center backdrop-blur-sm`}>
            {i === 0 ? (
              <Cpu size={18} className="text-[#B95F43]" />
            ) : (
              <Database size={18} className="text-[#E3D4C2]/40" />
            )}
          </div>
          <span className="text-[10px] text-[#E3D4C2]/30 mt-1.5 font-medium whitespace-nowrap">{node.label}</span>
        </motion.div>
      ))}

      {/* Center label */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <div className="text-[9px] text-[#B95F43]/50 font-mono uppercase tracking-widest">Hub</div>
      </motion.div>
    </div>
  )
}

// --- Data flow indicator ---
function DataFlowIndicator() {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <div className="w-8 h-8 rounded-lg bg-[#7A8067]/10 flex items-center justify-center">
        <Database size={14} className="text-[#7A8067]" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-[#7A8067]/30 to-[#B95F43]/30" />
      <div className="w-8 h-8 rounded-lg bg-[#B95F43]/10 flex items-center justify-center">
        <Cpu size={14} className="text-[#B95F43]" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-[#B95F43]/30 to-[#C96F52]/30" />
      <div className="w-8 h-8 rounded-lg bg-[#C96F52]/10 flex items-center justify-center">
        <CloudSlash size={14} className="text-[#C96F52]" />
      </div>
      <span className="text-[10px] text-[#E3D4C2]/20 ml-2 font-mono uppercase tracking-wider">Local only</span>
    </div>
  )
}

export function About() {
  const ref = useRef(null)

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E3D4C2]/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-[3rem] font-bold tracking-tight leading-[1.1] text-[#FBF7F0] mb-6"
            >
              Wir schliessen eine Lücke in der KI-Welt: <span className="text-[#C96F52]">Datensicherheit.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#E3D4C2]/45 leading-relaxed mb-4 text-base"
            >
              Die meisten grossen KI-Modelle basieren darauf, Daten an entfernte Cloud-Server zu senden. Für viele Schweizer Firmen ist das kein gangbarer Weg.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#E3D4C2]/45 leading-relaxed mb-8 text-base"
            >
              Wir setzen auf On-Premise. Die gesamte KI läuft in Ihrem eigenen Netzwerk. Hochleistungs-Hardware und Open-Source-Architekturen, unterstützt von der Schweizer Tech-Community.
            </motion.p>

            {/* Swiss Made badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: 'Schnell', desc: 'Support verfügbar' },
                { label: 'Mehrsprachig', desc: 'DE, EN, FR' },
                { label: 'Rechtssicher', desc: 'DSG-konform' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-sm font-medium text-[#FBF7F0] mb-0.5">{item.label}</div>
                  <div className="text-[11px] text-[#E3D4C2]/25">{item.desc}</div>
                </div>
              ))}
            </motion.div>

            {/* Data flow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6"
            >
              <DataFlowIndicator />
            </motion.div>
          </div>

          {/* Right: Network visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#B95F43]/3 blur-3xl rounded-full" />

            {/* Card */}
            <div className="relative gigatop-glass-dark p-6 md:p-8 rounded-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#B95F43]" />
                  <span className="text-sm font-medium text-[#E3D4C2]/50 font-mono">Network</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#7A8067]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-[10px] text-[#E3D4C2]/20 uppercase tracking-wider">Active</span>
                </div>
              </div>

              {/* Network visual */}
              <NetworkVisual />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-3 right-0 px-3 py-1.5 rounded-lg bg-[#1A2321]/80 border border-[#E3D4C2]/5 text-[10px] font-mono text-[#E3D4C2]/30"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              5 Quellen · 2.8k Dokumente
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}