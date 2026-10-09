import { Phone, Mail, Star, BadgeCheck } from 'lucide-react'

const AGENT_IMAGE =
  'https://templates.envytheme.com/holsworthy/default/assets/img/agent.jpg'

const VIDEO_BG =
  'https://templates.envytheme.com/holsworthy/default/assets/img/video-bg.jpg'

const CREDENTIALS = [
  'Fifteen years representing distinctive homes across Vermont and upstate New York',
  'Past chair of the Windham County Historic Properties Trust',
  'Featured in Vermont Life and Vermont Magazine for country property sales',
  'Holds the Certified Historic House Specialist designation',
]

export function Agent() {
  return (
    <section id="agent" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image side */}
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={AGENT_IMAGE}
                alt="Portrait of Sarah Whitman, lead property advisor at Whitman and Co."
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
            </div>

            {/* Floating rating card */}
            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-brass/20 bg-ivory p-5 shadow-xl sm:-right-6 lg:p-6">
              <div className="flex items-center gap-1 text-brass">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-2 font-serif text-2xl font-semibold text-forest">
                4.9 / 5.0
              </p>
              <p className="text-xs uppercase tracking-wide-luxe text-bark/60">
                From 137 client reviews
              </p>
            </div>
          </div>

          {/* Copy side */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-brass">
              <span className="h-px w-12 bg-brass/60" />
              <span className="text-xs font-medium uppercase tracking-luxe">
                The Agent
              </span>
            </div>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Sarah Whitman
            </h2>
            <p className="mt-3 text-base font-medium text-bark/70">
              Lead Property Advisor, Whitman and Co. Estate Partners
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-bark/80">
              <p>
                Sarah has spent the last fifteen years working with country
                properties in southern Vermont and the Hudson Valley. She grew
                up on a working dairy farm thirty miles north of Ashford Hollow,
                which is a longer way of saying she knows the difference between
                a property that photographs well and a property that actually
                lives well.
              </p>
              <p>
                She joined Whitman and Co. in 2014 and now leads the country
                estates practice. Her buyers tend to be families relocating
                from Boston, New York and Washington who want a real home rather
                than a showpiece. Her sellers tend to be long term owners who
                care where the house goes next.
              </p>
              <p>
                Sarah lives in Ashford Hollow with her husband and two children.
                She is the past chair of the Windham County Historic Properties
                Trust and serves on the board of the local land conservancy.
              </p>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-xl bg-ivory/70 p-3.5"
                >
                  <BadgeCheck size={18} className="mt-0.5 flex-none text-brass" />
                  <span className="text-sm leading-snug text-bark/85">{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+18025550147"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-forest-deep"
              >
                <Phone size={16} />
                (802) 555 0147
              </a>
              <a
                href="mailto:sarah@whitmanco.com"
                className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-ivory"
              >
                <Mail size={16} />
                sarah@whitmanco.com
              </a>
            </div>
          </div>
        </div>

        {/* Property walkthrough band */}
        <div className="relative mt-20 overflow-hidden rounded-3xl">
          <img
            src={VIDEO_BG}
            alt="Wide view of the grounds and surrounding woods"
            className="h-72 w-full object-cover lg:h-96"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-forest-deep/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-ivory">
            <p className="text-xs uppercase tracking-luxe text-brass-soft">
              A Walkthrough with Sarah
            </p>
            <h3 className="mt-3 max-w-xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              See the property the way you would on a private tour
            </h3>
            <p className="mt-4 max-w-md text-sm text-cream/80">
              Eight minute walkthrough covering the great room, kitchen,
              primary suite and the pondside terrace.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brass-soft"
            >
              Request the Walkthrough
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
