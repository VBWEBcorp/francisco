import type { Metadata } from 'next'

import { ApproachContent } from './approach-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'
import { approachContent } from '@/lib/site-content'

const description =
  "L'approche thérapeutique de Francisco Pautrot, psychopraticien au Mans : thérapie cognitive et comportementale (TCC), thérapie humaniste et thérapie systémique. Une méthode intégrative, à l'écoute de vos besoins."

export const metadata: Metadata = {
  title: 'Mon approche thérapeutique · TCC, humaniste & systémique',
  description,
  alternates: { canonical: '/mon-approche' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Mon approche thérapeutique', description, '/mon-approche'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Mon Approche', path: '/mon-approche' },
    ]),
    ...approachContent.approaches.map((a) =>
      serviceJsonLd(a.title, a.description, '/mon-approche')
    ),
  ],
}

export default function ApproachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApproachContent />
    </>
  )
}
