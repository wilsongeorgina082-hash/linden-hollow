'use client'

import { ArrowRight, MapPin } from 'lucide-react'

const HERO_IMAGE =
  'https://templates.envytheme.com/holsworthy/default/assets/img/gallery-img1.jpg'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Linden Hollow main exterior at golden hour"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/70 to-forest-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-forest-deep/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-24 pb-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-brass-soft">
            <span className="h-px w-12 bg-brass-soft/70" />
            <span className="text-xs font-medium uppercase tracking-luxe">
              Now Available
            </span>
          </div>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Linden Hollow
          </h1>

          <p className="mt-5 flex items-center gap-2 text-lg text-cream/90">
            <MapPin size={18} className="text-brass-soft" />
            47 Willow Creek Lane, Ashford Hollow, Vermont
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            A five bedroom country residence set on one and a quarter private
            acres. Twenty years of careful stewardship have shaped a home that
            feels settled, generous and quietly distinctive.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brass-soft hover:shadow-xl"
            >
              Schedule a Private Tour
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:border-brass-soft hover:text-brass-soft"
            >
              View the Gallery
            </a>
          </div>

          {/* Price + key stats */}
          <div className="mt-12 flex flex-wrap items-end gap-x-10 gap-y-6 border-t border-ivory/15 pt-7">
            <div>
              <p className="text-xs uppercase tracking-luxe text-brass-soft">
                Offered at
              </p>
              <p className="mt-1 font-serif text-3xl font-semibold text-ivory sm:text-4xl">
                $4,850,000
              </p>
            </div>
            <div className="hidden h-12 w-px bg-ivory/15 sm:block" />
            <div className="flex gap-8">
              <div>
                <p className="font-serif text-2xl text-ivory">5</p>
                <p className="text-xs uppercase tracking-wide-luxe text-cream/70">
                  Bedrooms
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-ivory">6</p>
                <p className="text-xs uppercase tracking-wide-luxe text-cream/70">
                  Baths
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-ivory">4,200</p>
                <p className="text-xs uppercase tracking-wide-luxe text-cream/70">
                  Sq Ft
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-ivory">1.2</p>
                <p className="text-xs uppercase tracking-wide-luxe text-cream/70">
                  Acres
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/70 sm:flex">
        <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-brass-soft to-transparent" />
      </div>
    </section>
  )
}
