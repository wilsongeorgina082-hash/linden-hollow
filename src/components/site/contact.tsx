'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const CONTACT_AGENT_IMAGE =
  'https://templates.envytheme.com/holsworthy/default/assets/img/contact-agent.jpg'

const MAP_EMBED_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-72.8640%2C43.0800%2C-72.8240%2C43.1040&layer=mapnik&marker=43.0920%2C-72.8440'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 text-brass">
            <span className="h-px w-12 bg-brass/60" />
            <span className="text-xs font-medium uppercase tracking-luxe">
              Get in Touch
            </span>
            <span className="h-px w-12 bg-brass/60" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Schedule your private viewing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bark/70">
            We show Linden Hollow by appointment only. Most visits run about
            ninety minutes and we are happy to walk the grounds as well as the
            house. Use the form below or call Sarah directly.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-brass/15 bg-white p-7 shadow-sm lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 size={56} className="text-brass" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-forest">
                    Thank you, your message is on its way
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-bark/70">
                    Sarah personally reads every inquiry and typically replies
                    within one business day. If your request is time sensitive,
                    please call the office at (802) 555 0147.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-forest/30 px-6 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-ivory"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide-luxe text-bark/70"
                      >
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        className="w-full rounded-xl border border-brass/25 bg-ivory/50 px-4 py-3 text-sm text-bark placeholder:text-bark/40 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30"
                        placeholder="James"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide-luxe text-bark/70"
                      >
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        className="w-full rounded-xl border border-brass/25 bg-ivory/50 px-4 py-3 text-sm text-bark placeholder:text-bark/40 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30"
                        placeholder="Caldwell"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide-luxe text-bark/70"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full rounded-xl border border-brass/25 bg-ivory/50 px-4 py-3 text-sm text-bark placeholder:text-bark/40 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide-luxe text-bark/70"
                      >
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full rounded-xl border border-brass/25 bg-ivory/50 px-4 py-3 text-sm text-bark placeholder:text-bark/40 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30"
                        placeholder="(555) 555 0147"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide-luxe text-bark/70"
                    >
                      What are you most interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full rounded-xl border border-brass/25 bg-ivory/50 px-4 py-3 text-sm text-bark focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30"
                      defaultValue="private-tour"
                    >
                      <option value="private-tour">Booking a private tour</option>
                      <option value="walkthrough">Requesting the video walkthrough</option>
                      <option value="spec-sheet">Full specification sheet</option>
                      <option value="services">Property management services</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide-luxe text-bark/70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-brass/25 bg-ivory/50 px-4 py-3 text-sm text-bark placeholder:text-bark/40 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30"
                      placeholder="Tell us a bit about what you are looking for and when you would like to visit."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-forest-deep sm:w-auto"
                  >
                    Send message
                    <Send size={15} />
                  </button>
                  <p className="text-xs text-bark/55">
                    Your information is shared only with Sarah and her assistant.
                    We do not sell or rent contact details, ever.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Agent + details side */}
          <aside className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl bg-forest text-ivory shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={CONTACT_AGENT_IMAGE}
                  alt="Sarah Whitman reviewing property plans at her desk"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="font-serif text-xl font-semibold">Sarah Whitman</p>
                  <p className="text-xs uppercase tracking-wide-luxe text-brass-soft">
                    Lead Property Advisor
                  </p>
                </div>
              </div>

              <div className="space-y-5 p-7 lg:p-8">
                <a
                  href="tel:+18025550147"
                  className="flex items-start gap-4 transition-colors hover:text-brass-soft"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ivory/10">
                    <Phone size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide-luxe text-brass-soft">
                      Office
                    </span>
                    <span className="text-base font-medium">(802) 555 0147</span>
                  </span>
                </a>

                <a
                  href="mailto:sarah@whitmanco.com"
                  className="flex items-start gap-4 transition-colors hover:text-brass-soft"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ivory/10">
                    <Mail size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide-luxe text-brass-soft">
                      Email
                    </span>
                    <span className="text-base font-medium">sarah@whitmanco.com</span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ivory/10">
                    <MapPin size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide-luxe text-brass-soft">
                      Office
                    </span>
                    <span className="text-base font-medium">
                      14 Elm Street, Ashford Hollow, VT 05201
                    </span>
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ivory/10">
                    <Clock size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide-luxe text-brass-soft">
                      Office Hours
                    </span>
                    <span className="text-base font-medium">
                      Tuesday to Saturday, 9am to 6pm
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-3xl border border-brass/15 shadow-sm">
              <iframe
                title="Map showing Linden Hollow location in Ashford Hollow, Vermont"
                src={MAP_EMBED_SRC}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
