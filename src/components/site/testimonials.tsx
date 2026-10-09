import { Quote, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    image:
      'https://templates.envytheme.com/holsworthy/default/assets/img/client1.jpg',
    name: 'John and Maria Thompson',
    role: 'Bought through Sarah in 2021, Woodstock',
    rating: 5,
    quote:
      'We had looked at almost thirty houses across two states before Sarah took us through a place she thought we had overlooked. She was right. We have been there four years now and the house has fit our family better every single season. She never pushed us toward a quick close and she always told us the truth, even when it slowed things down.',
  },
  {
    image:
      'https://templates.envytheme.com/holsworthy/default/assets/img/client2.jpg',
    name: 'Elmina Emily Carter',
    role: 'Sold through Sarah in 2023, Brattleboro',
    rating: 5,
    quote:
      'Sarah understood that the house my late husband built was not just a property to me. She spent real time on the listing, photographed it herself over two different mornings and only brought us buyers she had actually met in person. We closed with the family she thought was the right fit and she was right about that too.',
  },
  {
    image:
      'https://templates.envytheme.com/holsworthy/default/assets/img/client3.jpg',
    name: 'Steven and Rebecca Smith',
    role: 'Bought through Sarah in 2022, Manchester',
    rating: 5,
    quote:
      'From the first viewing to the closing dinner, Sarah treated our purchase like it was the only one she had on her plate. She caught two issues during inspection that our own inspector had missed and negotiated the seller into covering both. We have already recommended her to three friends and will keep doing it.',
  },
]

export function Testimonials() {
  return (
    <section id="feedback" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 text-brass">
            <span className="h-px w-12 bg-brass/60" />
            <span className="text-xs font-medium uppercase tracking-luxe">
              Client Feedback
            </span>
            <span className="h-px w-12 bg-brass/60" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            What past clients remember
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bark/70">
            We are a small practice and we work with a small number of families
            each year. These are a few of the people who have stayed in touch
            after closing.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-3xl border border-brass/15 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl lg:p-8"
            >
              <div className="flex items-center justify-between">
                <Quote size={32} className="text-brass/40" fill="currentColor" />
                <div className="flex items-center gap-1 text-brass">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-bark/80">
                {t.quote}
              </blockquote>

              <div className="mt-7 flex items-center gap-4 border-t border-brass/10 pt-5">
                <img
                  src={t.image}
                  alt={`Portrait of ${t.name}`}
                  className="h-12 w-12 flex-none rounded-full object-cover ring-2 ring-brass/30"
                  loading="lazy"
                />
                <div>
                  <p className="font-serif text-base font-semibold text-forest">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-bark/60">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust band */}
        <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-forest p-8 text-center text-ivory sm:grid-cols-4 lg:p-10">
          {[
            { value: '$280M+', label: 'Property sold since 2014' },
            { value: '137', label: 'Five star client reviews' },
            { value: '42', label: 'Days average days on market' },
            { value: '15 yrs', label: 'Sarah working in Vermont' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl font-semibold text-brass-soft sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide-luxe text-cream/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
