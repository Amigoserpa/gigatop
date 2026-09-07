import {
  Globe,
} from '@phosphor-icons/react'

// --- Footer ---

export function Footer() {
  const navLinks = [
    { label: 'Startseite', href: '#' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Über uns', href: '#about' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  const legalLinks = [
    { label: 'Impressum', href: '#impressum' },
    { label: 'Datenschutz', href: '#privacy' },
  ]

  return (
    <footer className="border-t border-gigatop-dust/5">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gigatop-clay to-gigatop-terracotta flex items-center justify-center">
                <span className="text-gigatop-warm-white font-bold text-xs">G</span>
              </div>
              <span className="font-semibold">Gigatop</span>
            </div>
            <p className="text-sm text-gigatop-sand/40 leading-relaxed max-w-xs">
              Lokale KI für Unternehmen in der Schweiz. Datenschutzkonform. Swiss Made.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-gigatop-sand/60">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gigatop-sand/40 hover:text-gigatop-warm-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-gigatop-sand/60">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gigatop-sand/40 hover:text-gigatop-warm-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-gigatop-sand/60">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gigatop-sand/40">
              <li>top@gigatop.io</li>
              <li>Schweiz</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gigatop-dust/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gigatop-sand/25">
            © 2025 Gigatop. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Globe size={14} className="text-gigatop-sand/20" />
            <span className="text-xs text-gigatop-sand/20 font-mono">
              www.gigatop.io
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}