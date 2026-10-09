import {
  BedDouble,
  Bath,
  Car,
  Building2,
  Maximize,
  Trees,
  CalendarDays,
  Hammer,
} from 'lucide-react'

const STATS = [
  {
    icon: BedDouble,
    value: '5',
    label: 'Bedrooms',
    note: 'Three ensuite, two with shared jack and jill bath',
  },
  {
    icon: Bath,
    value: '6',
    label: 'Bathrooms',
    note: 'Four full baths, two powder rooms',
  },
  {
    icon: Car,
    value: '4',
    label: 'Car Garage',
    note: 'Heated detached garage with studio above',
  },
  {
    icon: Building2,
    value: '2',
    label: 'Stories',
    note: 'Plus a finished walkout lower level',
  },
  {
    icon: Maximize,
    value: '4,200',
    label: 'Square Feet',
    note: 'Approximate finished living area',
  },
  {
    icon: Trees,
    value: '1.2',
    label: 'Acres',
    note: 'Landscaped grounds with pond and orchard',
  },
  {
    icon: CalendarDays,
    value: '1998',
    label: 'Year Built',
    note: 'Original construction by Edwin Marsh',
  },
  {
    icon: Hammer,
    value: '2022',
    label: 'Full Renovation',
    note: 'Systems, windows, kitchen and baths',
  },
]

const ADDITIONAL = [
  { label: 'Heating', value: 'Geothermal radiant floors, three zones' },
  { label: 'Cooling', value: 'Geothermal forced air, second floor only' },
  { label: 'Kitchen', value: 'Custom inset cabinetry, Lacanche range, pantry' },
  { label: 'Great Room', value: 'Fieldstone fireplace, 14 foot ceilings' },
  { label: 'Primary Suite', value: 'Two walk in closets, steam shower, private deck' },
  { label: 'Lower Level', value: 'Finished walkout, media room, wine cellar, gym' },
  { label: 'Outbuildings', value: 'Detached garage with studio, garden shed, greenhouse' },
  { label: 'Exterior', value: 'Cedar shingle siding, standing seam metal roof' },
  { label: 'Driveway', value: 'Gravel circular drive, room for ten vehicles' },
  { label: 'Utilities', value: 'Municipal water, private septic, whole house generator' },
  { label: 'Taxes', value: 'Approx. $18,400 annually (2024 assessment)' },
  { label: 'Association', value: 'None, private road maintained by agreement' },
]

export function PropertyDetails() {
  return (
    <section id="details" className="relative bg-forest py-24 text-ivory lg:py-32">
      {/* Soft texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 text-brass-soft">
            <span className="h-px w-12 bg-brass-soft/60" />
            <span className="text-xs font-medium uppercase tracking-luxe">
              Property at a Glance
            </span>
            <span className="h-px w-12 bg-brass-soft/60" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Everything you might want to know
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75">
            A complete picture of the residence, the grounds and the systems
            that keep it running. Anything not covered here is something we are
            happy to walk you through in person.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-5 transition-colors hover:border-brass/40 hover:bg-ivory/[0.07] lg:p-6"
            >
              <stat.icon className="text-brass-soft" size={26} strokeWidth={1.5} />
              <p className="mt-4 font-serif text-3xl font-semibold text-ivory">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide-luxe text-cream/80">
                {stat.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-cream/60">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Additional details */}
        <div className="mt-16">
          <div className="flex flex-col items-start gap-3 border-b border-ivory/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-serif text-2xl font-semibold text-ivory sm:text-3xl">
              Additional Details
            </h3>
            <p className="text-sm text-cream/60">
              Full specification sheet available on request
            </p>
          </div>

          <dl className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {ADDITIONAL.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-b border-ivory/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-sm font-medium uppercase tracking-wide-luxe text-brass-soft">
                  {row.label}
                </dt>
                <dd className="text-sm leading-snug text-cream/85 sm:text-right">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
