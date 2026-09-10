import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, List } from '@phosphor-icons/react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Leistungen', href: '#services' },
    { label: 'Prozess', href: '#process' },
    { label: 'Über uns', href: '#about' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0A0F0D]/80 backdrop-blur-xl border-b border-[#E3D4C2]/5'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#B95F43] to-[#C96F52] flex items-center justify-center shadow-lg shadow-[#B95F43]/20">
            <span className="text-[#FBF7F0] font-bold text-sm">G</span>
          </div>
          <span className="font-semibold text-lg tracking-tight text-[#FBF7F0]">
            Gigatop
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#E3D4C2]/60 hover:text-[#FBF7F0] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-[#B95F43]/15 text-[#E3D4C2] hover:bg-[#B95F43]/25 transition-colors font-medium"
          >
            AI Session buchen
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#0A0F0D]/50 transition-colors text-[#E3D4C2]/60"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#E3D4C2]/5 bg-[#0A0F0D]/95 backdrop-blur-xl"
          >
            <nav className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-[#E3D4C2]/70 hover:text-[#FBF7F0] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm rounded-full bg-[#B95F43]/15 text-[#E3D4C2] hover:bg-[#B95F43]/25 transition-colors font-medium"
              >
                AI Session buchen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}