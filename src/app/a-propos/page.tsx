import type { Metadata } from 'next'

import { AboutContent } from './about-content'
import { breadcrumbJsonLd, personJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  "Francisco Pautrot, psychopraticien au Mans depuis plus de 5 ans. Découvrez mon parcours, mon approche intégrative et mes valeurs : bienveillance, confidentialité et accompagnement personnalisé."

export const metadata: Metadata = {
  title: 'Qui suis-je ? · Francisco Pautrot, psychopraticien au Mans',
  description,
  alternates: { canonical: '/a-propos' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Qui suis-je ?', description, '/a-propos'),
    personJsonLd(),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Qui suis-je ?', path: '/a-propos' },
    ]),
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  )
}
