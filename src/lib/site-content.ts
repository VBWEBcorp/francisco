/**
 * site-content.ts — Contenu du site de Francisco Pautrot, psychopraticien au Mans.
 *
 * Toute la copie + tous les visuels sont centralisés ici.
 * Le CMS (via /api/content/[pageId]) peut surcharger n'importe quelle valeur
 * en runtime ; ce qui est ici sert de fallback / d'état initial.
 *
 * Pour les icônes : passe une chaîne ("Heart", "Brain", "ShieldCheck"...) —
 * elle est résolue par `getIcon()` côté composant. Liste : https://lucide.dev/icons/
 */

// ============================================================================
//                          IMAGES — pool de visuels
// ============================================================================
// Visuels apaisants (contemplation, sérénité, nature, connexion humaine).
// À remplacer par les vraies photos du cabinet / de Francisco lors de la mise
// en ligne. Format auto+fit conservé pour la performance.

const img = {
  contemplation:
    'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=1920&q=80', // personne face aux montagnes
  bridge:
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1920&q=80', // passerelle en forêt
  pathLight:
    'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?auto=format&fit=crop&w=1920&q=80', // marche vers la lumière
  bowl:
    'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=1200&q=80', // bol tibétain, sérénité
  mindfulness:
    'https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&w=1200&q=80', // carte "mindfulness"
  meditation:
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80', // méditation au coucher du soleil
  hands:
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80', // mains qui se tendent (connexion)
  leaves:
    'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1920&q=80', // feuillage vert apaisant
  openArms:
    'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80', // bras ouverts, lever de soleil
  brain:
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80', // cerveau (approche cognitive)
  handsTree:
    'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1200&q=80', // mains réunies (soutien)
  yoga:
    'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80', // bien-être / yoga
  // Photos réelles de séances de thérapie (patient + thérapeute)
  therapieChoisir: '/therapie-choisir.webp',
  therapieSeance: '/therapie-seance.webp',
  therapieEchange: '/therapie-echange.jpg',
  therapieDuo: '/therapie-duo.jpg',
  therapieCorporelle: '/therapie-corporelle.avif',
  therapieGestalt: '/therapie-gestalt.jpg',
}

export const images = {
  // Hero homepage — carousel
  heroCarousel: [img.therapieDuo, img.contemplation, img.bridge, img.openArms],

  // Section "Qui suis-je" sur la home
  story: img.therapieEchange,

  // Page Qui suis-je — portrait de Francisco
  aboutHero: '/francisco-portrait.jpg',

  // Page Services — image de fond du hero
  servicesHero: img.leaves,

  // Page Mon Approche — image de fond du hero
  approachHero: img.bridge,

  // Page Contact — image de fond du hero
  contactHero: img.meditation,

  // Page Qui suis-je — galerie
  aboutGallery: [img.therapieDuo, img.therapieSeance, img.therapieCorporelle, img.therapieGestalt],

  // Page Services — images des prestations
  services: [
    img.therapieEchange, // Consultation individuelle
    img.therapieDuo, // Soutien psychologique
    img.therapieGestalt, // Thérapie comportementale
    img.therapieChoisir, // Accompagnement personnel
    img.meditation, // Téléconsultation
    img.therapieSeance, // Suivi thérapeutique
  ],

  // Section CTA — colonnes animées
  ctaScrollColumns: {
    col1: [img.leaves, img.openArms, img.handsTree, img.yoga],
    col2: [img.meditation, img.bowl, img.bridge, img.contemplation],
  },

  // GalleryCarousel sur la home
  homeGallery: [
    img.therapieEchange,
    img.therapieDuo,
    img.bowl,
    img.therapieCorporelle,
    img.meditation,
    img.therapieSeance,
  ],
}

// ============================================================================
//                          HOME — Hero + sections
// ============================================================================

export const heroContent = {
  eyebrow: 'Psychopraticien au Mans',
  roles: ['Psychopraticien & coach mental', 'Thérapeute', 'Psychothérapie'],
  title: 'Retrouvez votre équilibre intérieur',
  description:
    "Un accompagnement thérapeutique personnalisé pour vous aider à surmonter vos difficultés et retrouver votre équilibre de vie, au cabinet au Mans ou en téléconsultation.",
  button1: 'Prendre rendez-vous',
  button2: 'Découvrir mes services',
  badges: ['Écoute bienveillante', 'Confidentialité absolue', 'Approche personnalisée'],
  images: images.heroCarousel,
}

export const storyContent = {
  eyebrow: 'Qui suis-je ?',
  title: 'Un psychopraticien à votre écoute',
  paragraph1:
    "Psychopraticien professionnel, je vous accompagne dans votre parcours thérapeutique avec bienveillance et professionnalisme. Mon approche se base sur l'écoute active, le respect de votre rythme et la création d'un espace sécurisé où vous pouvez vous exprimer librement.",
  paragraph2:
    "Chaque parcours est unique : un accompagnement personnalisé adapté à vos besoins, une expérience professionnelle solide et une écoute bienveillante pour explorer vos émotions en toute confiance.",
  image: images.story,
}

// Aperçu des services sur la home (4 cards)
export const servicesPreviewContent = {
  eyebrow: 'Mes services',
  title: 'Mes services thérapeutiques',
  description:
    'Je vous accompagne dans votre démarche thérapeutique avec bienveillance et professionnalisme.',
  items: [
    {
      iconName: 'HandHeart',
      title: 'Consultation individuelle',
      desc: 'Un accompagnement thérapeutique personnalisé pour vous aider à surmonter vos difficultés et retrouver votre équilibre.',
    },
    {
      iconName: 'HeartHandshake',
      title: 'Soutien psychologique',
      desc: "Un espace d'écoute bienveillant où vous pouvez exprimer vos émotions et préoccupations en toute sécurité.",
    },
    {
      iconName: 'Brain',
      title: 'Thérapie comportementale',
      desc: 'Des approches thérapeutiques pour mieux comprendre vos comportements et développer de nouveaux schémas.',
    },
    {
      iconName: 'Sparkles',
      title: 'Accompagnement personnel',
      desc: 'Un soutien pour développer votre potentiel, renforcer votre estime de soi et atteindre vos objectifs de vie.',
    },
  ],
}

// Bandeau "Mon expertise en chiffres" + zones d'intervention (home)
export const statsContent = {
  eyebrow: 'En chiffres',
  title: 'Mon expertise en chiffres',
  description: 'Une pratique professionnelle au service de votre bien-être.',
  stats: [
    { value: '5+', label: "Années d'expérience" },
    { value: '300+', label: 'Patients accompagnés' },
    { value: 'Le Mans', label: 'Cabinet & téléconsultation' },
    { value: '95%', label: 'Satisfaction patient' },
    { value: '6j/7', label: 'Disponibilité' },
  ],
  areasTitle: "Zones d'intervention",
  areas: [
    'Le Mans',
    'Allonnes',
    'Coulaines',
    'Arnage',
    "Yvré-l'Évêque",
    'Rouillon',
    'Mulsanne',
    'Champagné',
    'Téléconsultation',
    'Déplacement possible',
  ],
}

export const testimonialsContent = {
  eyebrow: 'Témoignages',
  title: 'Ce que disent mes patients',
  description: 'Ce que mes patients disent de leur parcours thérapeutique.',
  items: [
    {
      name: 'Marie L.',
      company: 'Patiente',
      text: "Francisco m'a accompagnée avec beaucoup de professionnalisme et d'empathie. Grâce à lui, j'ai pu surmonter mes difficultés et retrouver confiance en moi.",
      stars: 5,
    },
    {
      name: 'Thomas R.',
      company: 'Patient',
      text: "L'approche de Francisco est à la fois professionnelle et humaine. Il a créé un climat de confiance qui m'a permis d'évoluer positivement.",
      stars: 5,
    },
  ],
}

export const galleryContent = {
  eyebrow: 'Bien-être',
  title: "Un chemin vers l'apaisement",
  images: images.homeGallery,
}

export const ctaContent = {
  eyebrow: 'Prenons rendez-vous',
  title: 'Prêt à prendre soin de vous ?',
  description:
    "Contactez-moi pour planifier votre accompagnement thérapeutique. Un premier échange en toute confidentialité, au cabinet au Mans ou en téléconsultation.",
  button: 'Prendre rendez-vous',
  scrollImages: images.ctaScrollColumns,
}

export const faqContent = {
  eyebrow: 'FAQ',
  title: 'Questions fréquentes',
  description:
    'Les réponses aux questions que vous vous posez avant de débuter un accompagnement thérapeutique.',
  items: [
    {
      question: "Qu'est-ce qu'un psychopraticien ?",
      answer:
        "Un psychopraticien est un professionnel de la relation d'aide formé à la psychothérapie. Il accompagne les personnes traversant des difficultés psychologiques ou émotionnelles grâce à un travail d'écoute et à des approches thérapeutiques adaptées, dans le respect du secret professionnel.",
    },
    {
      question: 'Comment se déroule la première consultation ?',
      answer:
        "Tout commence par un premier échange sur vos besoins et vos attentes. Nous planifions ensuite une première consultation, puis débutent les séances d'accompagnement, avec un suivi régulier pour évaluer et ajuster votre parcours.",
    },
    {
      question: 'Proposez-vous des téléconsultations ?',
      answer:
        "Oui. En plus des consultations au cabinet au Mans, je propose des séances à distance par téléconsultation, pour plus de flexibilité ou en cas de contrainte géographique ou de mobilité réduite.",
    },
    {
      question: 'Nos échanges sont-ils confidentiels ?',
      answer:
        "Absolument. Chaque séance se déroule dans un cadre thérapeutique sécurisé, respectueux du secret professionnel. La confidentialité est l'un de mes engagements fondamentaux.",
    },
    {
      question: 'Quelles approches thérapeutiques utilisez-vous ?',
      answer:
        "Mon approche est intégrative : je m'appuie principalement sur la thérapie cognitive et comportementale, la thérapie humaniste et la thérapie systémique, que j'adapte à votre personnalité et à vos objectifs.",
    },
    {
      question: 'Dans quelles villes intervenez-vous ?',
      answer:
        "Mon cabinet est situé au Mans (Sarthe). J'accompagne également des patients d'Allonnes, Coulaines, Arnage, Yvré-l'Évêque, Rouillon, Mulsanne et Champagné, ainsi qu'en téléconsultation partout en France.",
    },
  ],
}

// ============================================================================
//                          QUI SUIS-JE — page À propos
// ============================================================================

export const aboutContent = {
  hero: {
    eyebrow: 'Qui suis-je ?',
    title: 'Mon parcours et ma passion',
    description:
      "Bienvenue dans mon univers dédié à l'accompagnement thérapeutique et au bien-être psychologique. Depuis plus de 5 ans, je mets ma passion et mon expertise au service de votre épanouissement personnel, au Mans et en téléconsultation.",
    image: images.aboutHero,
  },
  // Paragraphes complémentaires affichés sous le hero
  intro: [
    "Chaque séance est pour moi l'occasion de créer un espace unique, adapté à vos besoins et à vos objectifs. Mon approche personnalisée permet de vous offrir un accompagnement thérapeutique respectueux de votre rythme et de vos spécificités.",
    "Je crois profondément en la capacité de chacun à évoluer et à surmonter ses difficultés. C'est pourquoi je m'engage à vous accompagner dans votre démarche thérapeutique avec bienveillance, professionnalisme et respect.",
  ],
  stats: [
    { value: '5+', label: "Années d'expérience" },
    { value: '300+', label: 'Patients accompagnés' },
    { value: '95%', label: 'Satisfaction patient' },
    { value: '6j/7', label: 'Disponibilité' },
  ],
  // Mon expertise (4 cartes)
  expertise: [
    {
      iconName: 'GraduationCap',
      title: 'Formation spécialisée',
      description:
        'Diplômé en psychopratique, avec une formation continue en thérapies cognitives et comportementales.',
    },
    {
      iconName: 'Award',
      title: 'Expertise confirmée',
      description:
        "Plus de 5 ans d'expérience dans l'accompagnement thérapeutique individuel.",
    },
    {
      iconName: 'Layers',
      title: 'Approche intégrative',
      description:
        'Une méthode personnalisée combinant plusieurs approches thérapeutiques reconnues.',
    },
    {
      iconName: 'Clock',
      title: 'Disponibilité',
      description:
        'Des créneaux flexibles incluant les consultations en cabinet et les téléconsultations.',
    },
  ],
  // Mes valeurs (timeline)
  values: [
    {
      iconName: 'Heart',
      title: 'Bienveillance',
      description: 'Un accompagnement respectueux de votre rythme et de vos besoins.',
    },
    {
      iconName: 'Lock',
      title: 'Confidentialité',
      description: 'Un cadre sécurisé respectant le secret professionnel.',
    },
    {
      iconName: 'UserCheck',
      title: 'Personnalisation',
      description: 'Une approche adaptée à votre personnalité et vos objectifs.',
    },
  ],
  // Garanties (bandeau de réassurance)
  credentials: [
    {
      iconName: 'GraduationCap',
      title: 'Psychopraticien qualifié',
      description: 'Formation professionnelle en psychopratique au Mans.',
    },
    {
      iconName: 'Lock',
      title: 'Confidentialité absolue',
      description: 'Respect strict du secret professionnel.',
    },
    {
      iconName: 'Ear',
      title: 'Écoute bienveillante',
      description: 'Accompagnement personnalisé et empathique.',
    },
    {
      iconName: 'Clock',
      title: 'Horaires flexibles',
      description: 'Consultations en cabinet et téléconsultation.',
    },
  ],
  gallery: images.aboutGallery,
}

// ============================================================================
//                          SERVICES — page Services
// ============================================================================

export const servicesContent = {
  hero: {
    eyebrow: 'Mes services',
    title: 'Mes services thérapeutiques',
    description:
      'Un accompagnement psychologique personnalisé pour votre bien-être, au cabinet au Mans comme en téléconsultation.',
  },
  kpis: [
    { value: '6', label: 'accompagnements' },
    { value: '5 ans', label: "d'expérience" },
    { value: '100%', label: 'sur mesure' },
  ],
  list: [
    {
      iconName: 'HandHeart',
      title: 'Consultation individuelle',
      description:
        "Un accompagnement thérapeutique personnalisé pour vous aider à surmonter vos difficultés et retrouver votre équilibre. Cette approche individuelle permet d'explorer en profondeur vos préoccupations dans un cadre sécurisant et bienveillant.",
      points: ['Cadre sécurisant et bienveillant', 'Exploration en profondeur', 'Rythme respecté'],
      image: images.services[0],
    },
    {
      iconName: 'HeartHandshake',
      title: 'Soutien psychologique',
      description:
        "Un espace d'écoute bienveillant où vous pouvez exprimer vos émotions et préoccupations en toute sécurité. Je vous accompagne dans la gestion du stress, de l'anxiété et des difficultés émotionnelles du quotidien.",
      points: ['Gestion du stress', "Gestion de l'anxiété", 'Écoute sans jugement'],
      image: images.services[1],
    },
    {
      iconName: 'Brain',
      title: 'Thérapie comportementale',
      description:
        'Des approches thérapeutiques pour mieux comprendre vos comportements et développer de nouveaux schémas. Cette méthode vous aide à identifier et modifier les pensées et comportements qui vous limitent dans votre épanouissement.',
      points: ['Comprendre ses comportements', 'Nouveaux schémas', 'Pensées limitantes'],
      image: images.services[2],
    },
    {
      iconName: 'Sparkles',
      title: 'Accompagnement personnel',
      description:
        'Un soutien pour développer votre potentiel, renforcer votre estime de soi et atteindre vos objectifs de vie. Ensemble, nous travaillons sur votre développement personnel et votre bien-être global.',
      points: ['Développement du potentiel', 'Estime de soi', 'Objectifs de vie'],
      image: images.services[3],
    },
    {
      iconName: 'Video',
      title: 'Téléconsultation',
      description:
        'Des séances thérapeutiques à distance pour vous offrir flexibilité et accessibilité. La téléconsultation permet un suivi régulier même en cas de contraintes géographiques ou de mobilité réduite.',
      points: ['Séances à distance', 'Flexibilité', 'Suivi régulier'],
      image: images.services[4],
    },
    {
      iconName: 'CalendarCheck',
      title: 'Suivi thérapeutique',
      description:
        'Un accompagnement sur le long terme pour consolider vos progrès et maintenir votre équilibre. Ce suivi régulier vous permet d\'ancrer durablement les changements positifs dans votre vie.',
      points: ['Accompagnement long terme', 'Consolidation des progrès', 'Équilibre durable'],
      image: images.services[5],
    },
  ],
  // Comment se déroule l'accompagnement
  process: {
    eyebrow: 'Déroulement',
    title: "Comment se déroule l'accompagnement ?",
    description: 'Un processus thérapeutique structuré pour votre bien-être.',
    steps: [
      { title: 'Premier contact', desc: 'Échange sur vos besoins et attentes.' },
      { title: 'Prise de RDV', desc: 'Planification de votre première consultation.' },
      { title: 'Séance', desc: 'Accompagnement thérapeutique personnalisé.' },
      { title: 'Suivi', desc: 'Évaluation et ajustement du parcours.' },
    ],
  },
  // Mes engagements
  engagements: {
    eyebrow: 'Mes engagements',
    title: 'Un accompagnement thérapeutique de qualité',
    items: [
      {
        iconName: 'Lock',
        title: 'Confidentialité',
        desc: 'Un cadre thérapeutique sécurisé respectant le secret professionnel.',
      },
      {
        iconName: 'GraduationCap',
        title: 'Expertise',
        desc: "5 années d'expérience en psychopratique et formation continue.",
      },
      {
        iconName: 'UserCheck',
        title: 'Approche personnalisée',
        desc: 'Une méthode adaptée à votre personnalité et vos besoins.',
      },
      {
        iconName: 'Clock',
        title: 'Flexibilité',
        desc: 'Des horaires adaptés et la possibilité de téléconsultation.',
      },
    ],
  },
}

// ============================================================================
//                          MON APPROCHE — page Approche
// ============================================================================

export const approachContent = {
  hero: {
    eyebrow: 'Mon approche',
    title: 'Mon approche thérapeutique',
    description:
      'Des méthodes éprouvées adaptées à vos besoins pour un accompagnement personnalisé.',
  },
  intro: {
    eyebrow: 'Approches',
    title: 'Mes approches thérapeutiques',
    paragraph:
      "Je m'appuie sur différentes approches thérapeutiques reconnues pour vous offrir un accompagnement personnalisé et adapté à vos besoins spécifiques. Mon approche intégrative me permet de puiser dans plusieurs méthodes pour créer un parcours thérapeutique unique.",
  },
  approaches: [
    {
      iconName: 'Brain',
      title: 'Thérapie cognitive et comportementale',
      description:
        "Une approche scientifique qui vous aide à identifier et modifier les pensées et comportements négatifs. Cette méthode structurée permet de développer des stratégies concrètes pour faire face aux difficultés du quotidien et améliorer votre bien-être.",
      tags: ["Gestion de l'anxiété", "Amélioration de l'estime de soi", 'Techniques concrètes'],
      image: images.services[2],
    },
    {
      iconName: 'HandHeart',
      title: 'Thérapie humaniste',
      description:
        "Une approche centrée sur la personne qui valorise votre expérience unique et votre capacité naturelle de croissance. Dans un climat d'écoute bienveillante, nous explorons ensemble vos ressources intérieures pour favoriser votre épanouissement personnel.",
      tags: ['Développement personnel', 'Confiance en soi', 'Authenticité'],
      image: images.services[3],
    },
    {
      iconName: 'Users',
      title: 'Thérapie systémique',
      description:
        "Une approche qui considère l'individu dans son environnement relationnel et social. Nous explorons les interactions et les dynamiques qui influencent votre bien-être, pour vous aider à développer de nouveaux modes de relation plus épanouissants.",
      tags: ['Relations harmonieuses', 'Communication', 'Équilibre familial'],
      image: images.services[5],
    },
  ],
  method: {
    eyebrow: 'Méthode',
    title: 'Ma méthode de travail',
    description: 'Une approche bienveillante et professionnelle pour votre bien-être.',
    items: [
      {
        iconName: 'Ear',
        title: 'Écoute active',
        description:
          "Une présence attentive et bienveillante pour vous accompagner dans l'expression de vos émotions.",
      },
      {
        iconName: 'Brain',
        title: 'Techniques cognitives',
        description: 'Des outils concrets pour identifier et transformer les pensées limitantes.',
      },
      {
        iconName: 'Layers',
        title: 'Approche intégrative',
        description:
          'Une méthode personnalisée qui s\'adapte à vos besoins spécifiques et votre rythme.',
      },
    ],
  },
  cta: {
    eyebrow: 'Prenons rendez-vous',
    title: 'Intéressé par mon approche thérapeutique ?',
    description: 'Échangeons ensemble sur vos besoins et vos objectifs personnels.',
    button: 'Prendre rendez-vous',
  },
}

// ============================================================================
//                          CONTACT — page Contact
// ============================================================================

export const contactContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'Réservez votre consultation',
    description:
      'Prenez rendez-vous pour votre consultation thérapeutique, au cabinet au Mans ou en téléconsultation. Je vous réponds rapidement.',
  },
  // Les coordonnées (phone, email, address) viennent de siteConfig dans seo.ts
}
