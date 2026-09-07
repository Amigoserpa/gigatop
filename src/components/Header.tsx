import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Moon,
  Sun,
  X,
  List,
  Phone,
} from '@phosphor-icons/react'

// --- Header / Navigation ---

export default function Header() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Leistungen', href: '#services' },
    { label: 'Über uns', href: '#about' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-gigatop-bg/80 backdrop-blur-xl border-b border-gigatop-dust/5'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gigatop-clay to-gigatop-terracotta flex items-center justify-center">
            <span className="text-gigatop-warm-white font-bold text-sm">G</span>
          </div>
          <span className="font-semibold text-lg tracking-tight group-hover:text-gigatop-sand transition-colors">
            Gigatop
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gigatop-sand/70 hover:text-gigatop-warm-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-gigatop-bg-elevated/50 transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? (
              <Moon size={18} className="text-gigatop-sand/60" />
            ) : (
              <Sun size={18} className="text-gigatop-sand/60" />
            )}
          </button>

          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gigatop-clay/10 text-gigatop-clay hover:bg-gigatop-clay/20 transition-colors"
          >
            <Phone size={16} />
            Beratung
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gigatop-bg-elevated/50 transition-colors"
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
            className="md:hidden border-t border-gigatop-dust/5 bg-gigatop-bg/95 backdrop-blur-xl"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-gigatop-sand/70 hover:text-gigatop-warm-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm rounded-full bg-gigatop-clay/10 text-gigatop-clay hover:bg-gigatop-clay/20 transition-colors"
              >
                <Phone size={16} />
                Beratung
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}