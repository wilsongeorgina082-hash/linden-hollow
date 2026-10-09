# Linden Hollow

A single property luxury real estate website for a fictional 5 bed, 6 bath country estate in Ashford Hollow, Vermont. Built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Brand

- **Property:** Linden Hollow, 47 Willow Creek Lane, Ashford Hollow, VT
- **Listed at:** $4,850,000
- **Listing agent:** Sarah Whitman, Whitman and Co. Estate Partners
- **Palette:** Deep forest green, warm ivory, antique brass
- **Typography:** Playfair Display (serif headings) + Inter (sans body)

## Sections

1. Sticky navbar with anchor navigation and mobile drawer
2. Hero with property name, address, price, and key stats
3. About the Residence with property history
4. Property at a Glance with 8 tile stats grid and additional details spec sheet
5. Photo Gallery with 7 image bento grid and working lightbox
6. The Agent with bio, credentials, and contact buttons
7. Client Feedback with three testimonials and trust stats
8. Our Services with six service cards
9. Contact with inquiry form and embedded map
10. Footer with quick links, services, property spec, and designer credit

## Tech Stack

- Next.js 16 (App Router)
- TypeScript 5
- Tailwind CSS 4 with custom brand tokens
- Lucide icons
- Fully responsive (mobile first)
- Sticky footer pattern

## Getting Started

```bash
bun install
bun run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```
src/
  app/
    globals.css       # Brand color tokens and base styles
    layout.tsx        # Inter + Playfair Display fonts, SEO metadata
    page.tsx          # Composes all sections
  components/
    site/
      navbar.tsx
      hero.tsx
      about.tsx
      property-details.tsx
      gallery.tsx
      agent.tsx
      testimonials.tsx
      services.tsx
      contact.tsx
      footer.tsx
public/
  agent/
    sarah-whitman.png # Generated agent portrait
```

## Notes

- Property, gallery, and video background images are loaded from the original Holsworthy template CDN
- Agent portrait was generated with AI image generation
- Contact form shows a success state on submit but is not wired to a backend
- Map uses OpenStreetMap embed

## Credits

Designed By [Golden Funnel Studio](https://goldenfunnelstudio.com/website-offer)
