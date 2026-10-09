import { Check } from 'lucide-react'

const ABOUT_IMAGE =
  'https://templates.envytheme.com/holsworthy/default/assets/img/about-img1.jpg'

const CIRCLE_IMAGE =
  'https://templates.envytheme.com/holsworthy/default/assets/img/circle-img.jpg'

const HIGHLIGHTS = [
  'Original hand hewn beams retained through the 2022 restoration',
  'Geothermal heating and cooling installed across all three wings',
  'South facing terrace with mature maple and birch screening',
  'Spring fed pond fed by a creek that runs the eastern boundary',
]

export function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image cluster */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={ABOUT_IMAGE}
                alt="Front elevation of Linden Hollow showing the main entrance and porch"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating circle image */}
            <div className="absolute -bottom-10 -right-4 hidden h-44 w-44 overflow-hidden rounded-full border-4 border-ivory shadow-2xl md:block lg:h-52 lg:w-52">
              <img
                src={CIRCLE_IMAGE}
                alt="Detail of garden path leading to the back terrace"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Established badge */}
            <div className="absolute -left-4 -top-6 hidden rounded-2xl bg-forest px-6 py-4 text-ivory shadow-xl md:block">
              <p className="font-serif text-3xl font-semibold leading-none">1998</p>
              <p className="mt-1 text-[10px] uppercase tracking-luxe text-brass-soft">
                Established
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:pl-6">
            <div className="flex items-center gap-3 text-brass">
              <span className="h-px w-12 bg-brass/60" />
              <span className="text-xs font-medium uppercase tracking-luxe">
                About the Residence
              </span>
            </div>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Built for long evenings and slow mornings
            </h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-bark/80">
              <p>
                Linden Hollow was finished in 1998 by a local builder named
                Edwin Marsh, who had spent the previous decade restoring
                farmhouses across Windham County. He wanted his own family home
                to feel like one of those old farmhouses, only with the
                insulation, plumbing and light that the originals never quite
                managed. The result is a residence that reads as old New England
                from the road but lives like a modern home once you step inside.
              </p>
              <p>
                The property changed hands twice before the current owners
                took it on in 2018. Over four years they rewired the house,
                replaced every window with historically accurate divided light
                units, and added a geothermal system that heats and cools the
                three wings without a single visible outdoor unit. They also
                added the pondside terrace, the kitchen garden and the detached
                two story studio that now serves as a guest suite.
              </p>
              <p>
                What stayed throughout is the thing that made the house worth
                keeping in the first place. The hand hewn beams in the great
                room. The wide board pine floors on the second story. The way
                morning light comes through the east facing windows and lands
                on the breakfast room table for almost ten months of the year.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-cream/60 p-3.5"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brass text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-snug text-bark/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
