import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { PropertyDetails } from '@/components/site/property-details'
import { Gallery } from '@/components/site/gallery'
import { Agent } from '@/components/site/agent'
import { Testimonials } from '@/components/site/testimonials'
import { Services } from '@/components/site/services'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <PropertyDetails />
        <Gallery />
        <Agent />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
