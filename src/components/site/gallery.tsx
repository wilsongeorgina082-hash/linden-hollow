'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type GalleryItem = {
  src: string
  alt: string
  caption: string
  span: string
}

const GALLERY: GalleryItem[] = [
  {
    src: 'https://templates.envytheme.com/holsworthy/default/assets/img/gallery-img1.jpg',
    alt: 'Front elevation of the residence with the circular drive',
    caption: 'Front Elevation',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://templates.envytheme.com/holsworthy/default/assets/img/gallery-img2.jpg',
    alt: 'Great room with fieldstone fireplace and exposed beams',
    caption: 'The Great Room',
    span: '',
  },
  {
    src: 'https://templates.envytheme.com/holsworthy/default/assets/img/gallery-img3.jpg',
    alt: 'Kitchen with custom inset cabinetry and Lacanche range',
    caption: 'Kitchen',
    span: '',
  },
  {
    src: 'https://templates.envytheme.com/holsworthy/default/assets/img/gallery-img4.jpg',
    alt: 'Primary bedroom with vaulted ceiling and garden view',
    caption: 'Primary Suite',
    span: '',
  },
  {
    src: 'https://templates.envytheme.com/holsworthy/default/assets/img/gallery-img5.jpg',
    alt: 'Pondside terrace looking toward the meadow and orchard',
    caption: 'Terrace and Pond',
    span: '',
  },
  {
    src: 'https://templates.envytheme.com/holsworthy/default/assets/img/gallery-img6.jpg',
    alt: 'Library with built in shelves and reading nook',
    caption: 'Library',
    span: '',
  },
  {
    src: 'https://templates.envytheme.com/holsworthy/default/assets/img/gallery-img7.jpg',
    alt: 'Detached garage with studio above and connecting walkway',
    caption: 'Garage and Studio',
    span: 'sm:col-span-2',
  },
]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const prev = () => setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length))
  const next = () => setActive((i) => (i === null ? i : (i + 1) % GALLERY.length))

  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-brass/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 text-brass">
              <span className="h-px w-12 bg-brass/60" />
              <span className="text-xs font-medium uppercase tracking-luxe">
                Photo Gallery
              </span>
            </div>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Inside Linden Hollow
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bark/70">
            A walkthrough in pictures. Tap any image to view it larger. We
            recommend a private tour to see how the rooms actually feel in
            person.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl bg-cream text-left ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent opacity-90 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-luxe text-brass-soft">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-1 font-serif text-lg font-semibold text-ivory">
                  {item.caption}
                </p>
              </div>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/20 text-ivory opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ChevronRight size={16} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-deep/95 p-4 backdrop-blur"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-brass hover:text-white"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-brass hover:text-white sm:left-8"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-brass hover:text-white sm:right-8"
          >
            <ChevronRight size={20} />
          </button>
          <figure
            className="max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY[active].src}
              alt={GALLERY[active].alt}
              className="mx-auto max-h-[78vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-serif text-lg text-ivory">
                {GALLERY[active].caption}
              </p>
              <p className="mt-1 text-xs uppercase tracking-luxe text-brass-soft">
                {active + 1} of {GALLERY.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
