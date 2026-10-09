import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const QUICK_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#details', label: 'Property Details' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#agent', label: 'The Agent' },
  { href: '#feedback', label: 'Client Stories' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const SERVICES_LINKS = [
  'Property Management',
  'Capital Care',
  'Financial Reporting',
  'Business Development',
  'Finance Real Estate',
  'Recover Asset Value',
]

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      {/* Top CTA band */}
      <div className="border-b border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-luxe text-brass-soft">
              Ready to see it in person
            </p>
            <h3 className="mt-2 font-serif text-3xl font-semibold text-ivory sm:text-4xl">
              Book a private tour of Linden Hollow
            </h3>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brass-soft"
          >
            Schedule a Visit
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/60 bg-ivory/5 text-brass-soft">
                <span className="font-serif text-xl font-semibold leading-none">L</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-ivory">
                  Linden Hollow
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-luxe text-brass-soft">
                  Private Estate
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              A five bedroom country residence on 1.2 private acres in Ashford
              Hollow, Vermont. Listed and represented by Whitman and Co. Estate
              Partners.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="tel:+18025550147"
                className="flex items-center gap-3 text-cream/75 transition-colors hover:text-brass-soft"
              >
                <Phone size={15} className="text-brass-soft" />
                (802) 555 0147
              </a>
              <a
                href="mailto:sarah@whitmanco.com"
                className="flex items-center gap-3 text-cream/75 transition-colors hover:text-brass-soft"
              >
                <Mail size={15} className="text-brass-soft" />
                sarah@whitmanco.com
              </a>
              <p className="flex items-center gap-3 text-cream/75">
                <MapPin size={15} className="text-brass-soft" />
                47 Willow Creek Lane, Ashford Hollow, VT 05201
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-luxe text-brass-soft">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-brass-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-luxe text-brass-soft">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-cream/70 transition-colors hover:text-brass-soft"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property summary */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-luxe text-brass-soft">
              The Property
            </p>
            <dl className="mt-5 space-y-3 text-sm">
              {[
                ['Offered at', '$4,850,000'],
                ['Bedrooms', '5'],
                ['Bathrooms', '6'],
                ['Square feet', '4,200'],
                ['Lot size', '1.2 acres'],
                ['Year built', '1998'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-ivory/10 pb-2"
                >
                  <dt className="text-cream/60">{label}</dt>
                  <dd className="font-medium text-ivory">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/55">
            © {new Date().getFullYear()} Linden Hollow. All rights reserved.
            Listed by Whitman and Co. Estate Partners.
          </p>
          <p className="text-xs text-cream/55">
            <a
              href="https://goldenfunnelstudio.com/website-offer"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass-soft"
            >
              Designed By Golden Funnel Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
