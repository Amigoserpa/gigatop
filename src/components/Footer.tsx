import { Globe } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="border-t border-[#E3D4C2]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#B95F43] to-[#C96F52] flex items-center justify-center">
                <span className="text-[#FBF7F0] font-bold text-xs">G</span>
              </div>
              <span className="font-semibold text-[#FBF7F0]">Gigatop</span>
            </div>
            <p className="text-sm text-[#E3D4C2]/30 leading-relaxed max-w-xs">
              Lokale KI für Unternehmen in der Schweiz. Datenschutzkonform. Swiss Made.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-[#E3D4C2]/40">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Startseite', href: '#' },
                { label: 'Leistungen', href: '#services' },
                { label: 'Prozess', href: '#process' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#E3D4C2]/25 hover:text-[#E3D4C2]/50 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-[#E3D4C2]/40">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: 'Impressum', href: '#impressum' },
                { label: 'Datenschutz', href: '#privacy' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#E3D4C2]/25 hover:text-[#E3D4C2]/50 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-[#E3D4C2]/40">Kontakt</h4>
            <ul className="space-y-2 text-sm text-[#E3D4C2]/25">
              <li>top@gigatop.io</li>
              <li>Schweiz</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E3D4C2]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#E3D4C2]/15">
            © 2025 Gigatop. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-3">
            <Globe size={14} className="text-[#E3D4C2]/15" />
            <span className="text-[11px] text-[#E3D4C2]/15 font-mono">
              www.gigatop.io
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}