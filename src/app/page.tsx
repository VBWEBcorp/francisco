import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { FaqSection } from '@/components/sections/faq-section'
import { GalleryCarousel } from '@/components/sections/gallery-carousel'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesPreview } from '@/components/sections/services-preview'
import { StatsBand } from '@/components/sections/stats-band'
import { StorySection } from '@/components/sections/story-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ValuesMarquee } from '@/components/sections/values-marquee'
import {
  faqJsonLd,
  localBusinessJsonLd,
  organizationJsonLd,
  personJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'
import { faqContent } from '@/lib/site-content'

const description =
  "Francisco Pautrot, psychopraticien au Mans (Sarthe). Accompagnement thérapeutique personnalisé : thérapie cognitive et comportementale, soutien psychologique, gestion du stress et de l'anxiété. Consultations au cabinet et en téléconsultation."

export const metadata: Metadata = {
  title: 'Psychopraticien au Mans (Sarthe) — Accompagnement thérapeutique',
  description,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    localBusinessJsonLd(),
    personJsonLd(),
    webPageJsonLd('Psychopraticien au Mans', description, '/'),
    faqJsonLd(faqContent.items),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesPreview />
      <StorySection />
      <StatsBand />
      <FaqSection />
      <TestimonialsSection />
      <GalleryCarousel />
      <CtaSection />
      <ValuesMarquee />
    </>
  )
}
