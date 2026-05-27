import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'
import { servicesContent } from '@/lib/site-content'

const description =
  "Consultation individuelle, soutien psychologique, thérapie comportementale, accompagnement personnel, téléconsultation et suivi thérapeutique au Mans (Sarthe). Un accompagnement personnalisé pour votre bien-être."

export const metadata: Metadata = {
  title: 'Services thérapeutiques · Psychopraticien au Mans',
  description,
  alternates: { canonical: '/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Services thérapeutiques', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    ...servicesContent.list.map((s) =>
      serviceJsonLd(s.title, s.description, '/services')
    ),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
