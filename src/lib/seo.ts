export const siteConfig = {
  name: 'Francisco Pautrot',
  // Domaine de production (à remplacer par le domaine définitif lors de la mise en ligne).
  url: 'https://www.franciscopautrot.fr',
  locale: 'fr_FR',
  description:
    "Francisco Pautrot, psychopraticien au Mans (Sarthe). Accompagnement thérapeutique personnalisé : thérapie cognitive et comportementale, soutien psychologique, gestion du stress et de l'anxiété. Consultations au cabinet et en téléconsultation.",
  // Image de partage social (réseaux sociaux, aperçus de liens).
  ogImage:
    'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=1200&q=80',
  twitterHandle: '',
  themeColor: '#6d28d9',
  phone: '+33 6 19 60 18 31',
  email: 'franciscopautrot6@gmail.com',
  address: {
    street: 'Cabinet sur rendez-vous',
    city: 'Le Mans',
    postalCode: '72000',
    region: 'Sarthe',
    country: 'FR',
  },
  // Coordonnées géographiques du Mans — utilisées pour le référencement local (schema.org).
  geo: {
    latitude: 48.0061,
    longitude: 0.1996,
  },
  // Communes desservies autour du Mans — renforce le référencement local.
  areaServed: [
    'Le Mans',
    'Allonnes',
    'Coulaines',
    'Arnage',
    "Yvré-l'Évêque",
    'Rouillon',
    'Mulsanne',
    'Champagné',
  ],
  // Mots-clés principaux ciblés en référencement naturel.
  keywords: [
    'psychopraticien Le Mans',
    'psychothérapie Le Mans',
    'thérapie cognitive et comportementale Le Mans',
    'soutien psychologique Sarthe',
    'gestion du stress et de l\'anxiété',
    'accompagnement thérapeutique',
    'téléconsultation psychologique',
    'Francisco Pautrot',
  ],
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} - ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/mon-approche',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
