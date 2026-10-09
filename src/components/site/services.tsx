import {
  Building2,
  ShieldCheck,
  FileText,
  TrendingUp,
  Landmark,
  RefreshCw,
  ArrowUpRight,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Building2,
    title: 'Property Management',
    description:
      'Year round stewardship for owners who are not full time residents. We handle grounds, security, vendor coordination and the small daily things that keep a country house ready for the next visit.',
  },
  {
    icon: ShieldCheck,
    title: 'Capital Care',
    description:
      'Long term maintenance planning and capital reserve studies so a property ages on a schedule rather than in reaction to emergencies. Includes seasonal inspections and a written five year plan.',
  },
  {
    icon: FileText,
    title: 'Financial Reporting',
    description:
      'Quarterly statements that actually make sense. We track operating costs, capital improvements, tax exposure and rental income where applicable in one consolidated report per property.',
  },
  {
    icon: TrendingUp,
    title: 'Business Development',
    description:
      'For owners with income producing potential. We assess short term rental feasibility, identify corporate lease opportunities and structure the operational side so the property pays for itself.',
  },
  {
    icon: Landmark,
    title: 'Finance Real Estate',
    description:
      'Working relationships with three regional lenders and two private banks. We help position your purchase or refinance with people who actually close country property loans rather than decline them.',
  },
  {
    icon: RefreshCw,
    title: 'Recover Asset Value',
    description:
      'For inherited or long held properties that need a full reset. Estate sale coordination, deferred maintenance assessment and a clear path back to market ready condition within a defined budget.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-brass">
              <span className="h-px w-12 bg-brass/60" />
              <span className="text-xs font-medium uppercase tracking-luxe">
                Our Services
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              What Whitman and Co. does for owners
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-bark/75">
              We are a small firm and we do a small number of things well.
              Every service below is one we have delivered to clients in the
              region for at least a decade. If we are not the right fit for
              what you need, we will tell you who is.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-brass/15 bg-ivory p-7 transition-all hover:-translate-y-1 hover:border-brass/40 hover:shadow-xl lg:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-brass-soft transition-colors group-hover:bg-brass group-hover:text-white">
                  <service.icon size={24} strokeWidth={1.5} />
                </span>
                <span className="font-serif text-2xl font-semibold text-brass/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-xl font-semibold text-forest">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-bark/75">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brass transition-colors hover:text-forest"
              >
                Talk to us about this
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
