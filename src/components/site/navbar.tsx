'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#details', label: 'Details' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#agent', label: 'Agent' },
  { href: '#feedback', label: 'Clients' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur shadow-[0_1px_0_rgba(184,146,74,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3" aria-label="Linden Hollow home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/60 bg-forest text-ivory transition-colors duration-300 group-hover:bg-brass group-hover:text-forest">
            <span className="font-serif text-xl font-semibold leading-none">L</span>
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-forest' : 'text-ivory'
              }`}
            >
              Linden Hollow
            </span>
            <span
              className={`mt-1 text-[10px] uppercase tracking-luxe transition-colors ${
                scrolled ? 'text-brass' : 'text-brass-soft'
              }`}
            >
              Private Estate
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brass ${
                  scrolled ? 'text-forest' : 'text-ivory'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brass-soft hover:shadow-lg md:inline-block"
          >
            Book a Viewing
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              scrolled
                ? 'border-forest/30 text-forest'
                : 'border-ivory/40 text-ivory'
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-ivory/98 backdrop-blur transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[640px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-forest transition-colors hover:bg-cream hover:text-brass"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brass px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Viewing
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
