// @unocss-include
export type SiteData = {
  brand: string;
  subtitle: string;
  siteUrl: string;
  phone: string;
  email: string;
  bookingUrl: string;
  locationText: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  seo: {
    schemaType: 'MassageTherapist';
    areaServed: string;
  };
  legal: {
    name: string;
    legalStatus: string;
    siren: string;
    siret: string;
    vatNumber: string;
    hostName: string;
    hostAddress: string;
    hostWebsite: string;
    dataRetention: string;
    lastUpdated: string;
  };
  hero: {
    title: string;
    description: string;
    location: string;
    primaryCta: string;
    secondaryCta: string;
  };
  massages: Array<{
    title: string;
    description: string;
    icon: string;
    prices: Array<{
      duration: string;
      price: string;
      recommended?: boolean;
    }>;
  }>;
  about: {
    title: string;
    body: string;
  };
  sessionSteps: {
    title: string;
    intro: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
};

export const site = {
  brand: 'Les Mains de Sérénité',
  subtitle: 'Massage à domicile à Annecy',
  siteUrl: 'https://lesmainsdeserenite.fr',
  phone: '06 18 75 81 28',
  email: 'bonjour@lesmainsdeserenite.fr',
  bookingUrl: 'https://cal.eu/lesmainsdeserenite',
  locationText:
    'Massage à domicile à Annecy et alentours. Je me déplace directement chez vous sur rendez-vous.',
  address: {
    streetAddress: '27 avenue de la plaine',
    addressLocality: 'Annecy',
    postalCode: '74000',
    addressCountry: 'FR',
  },
  seo: {
    schemaType: 'MassageTherapist',
    areaServed: 'Annecy',
  },
  legal: {
    name: 'Zahara ZUSCHLAG',
    legalStatus: 'Entrepreneur individuel en micro-entreprise',
    siren: 'SIREN à compléter',
    siret: 'SIRET à compléter',
    vatNumber:
      'TVA non applicable, art. 293 B du CGI (à adapter si la situation change)',
    hostName: 'GitHub, Inc.',
    hostAddress: '88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis',
    hostWebsite: 'https://github.com',
    dataRetention:
      '3 ans maximum après le dernier contact émanant de la personne',
    lastUpdated: '16 mars 2026',
  },
  hero: {
    title: 'Les Mains de Sérénité',
    description:
      'Massage à domicile à Annecy, exclusivement réservé aux femmes. Profitez d’un moment de détente profonde directement chez vous, dans un cadre bienveillant et sécurisé.',
    location: 'Annecy et alentours · À domicile · Réservé aux femmes',
    primaryCta: 'Réserver un massage',
    secondaryCta: 'Appeler',
  },
  massages: [
    {
      title: 'Massage anti-douleur',
      description:
        'Massage ciblé pour soulager les tensions musculaires et les douleurs du quotidien. Idéal pour le dos, les épaules et la nuque, il aide à retrouver confort et détente.',
      icon: 'i-lucide-activity',
      prices: [
        {duration: '45 min', price: '60 €'},
        {duration: '1 h', price: '80 €', recommended: true},
        {duration: '1 h 30', price: '115 €'},
      ],
    },
    {
      title: 'Drainage lymphatique',
      description:
        'Massage doux et rythmé qui stimule la circulation lymphatique. Il aide à réduire la rétention d’eau et procure une sensation de légèreté.',
      icon: 'i-lucide-droplets',
      prices: [
        {duration: '45 min', price: '70 €'},
        {duration: '1 h', price: '90 €', recommended: true},
        {duration: '1 h 30', price: '125 €'},
      ],
    },
    {
      title: 'Massage remodelant',
      description:
        'Massage tonifiant qui aide à raffermir la peau et redessiner certaines zones du corps. Il stimule la circulation et améliore l’aspect de la silhouette.',
      icon: 'i-lucide-scan',
      prices: [
        {duration: '45 min', price: '70 €'},
        {duration: '1 h', price: '90 €', recommended: true},
        {duration: '1 h 30', price: '125 €'},
      ],
    },
    {
      title: 'Massage visage liftant',
      description:
        'Soin du visage relaxant qui stimule la circulation et tonifie la peau. Il aide à illuminer le teint et procure un effet liftant naturel.',
      icon: 'i-lucide-sparkles',
      prices: [
        {duration: '30 min', price: '50 €'},
        {duration: '45 min', price: '65 €', recommended: true},
        {duration: '1 h', price: '85 €'},
      ],
    },
  ],
  about: {
    title: 'À propos',
    body: `
Je suis praticienne en massage bien-être, avec une formation d’auxiliaire de puériculture, ce qui m’a permis de développer une approche attentive, douce et à l’écoute du corps.

Je vous propose des massages à domicile à Annecy et ses alentours, exclusivement réservés aux femmes, afin de garantir un cadre de confiance, de confort et de sérénité.

Chaque séance est entièrement personnalisée, en fonction de vos besoins du moment, qu’il s’agisse de soulager des tensions, de relâcher le stress ou simplement de vous accorder un moment pour vous.

Mon objectif est simple : vous offrir une parenthèse de bien-être, directement chez vous, dans un environnement calme, rassurant et bienveillant.
    `,
  },
  sessionSteps: {
    title: 'Comment se déroule une séance ?',
    intro: 'Un moment de bien-être chez vous, en toute simplicité.',
    steps: [
      {
        title: 'Réservation',
        description:
          'Choisissez le créneau qui vous convient en ligne ou par téléphone.',
      },
      {
        title: 'Déplacement à domicile',
        description:
          'Je me déplace chez vous à Annecy et alentours avec table de massage et matériel professionnel.',
      },
      {
        title: 'Votre moment de détente',
        description:
          'Vous profitez d’une séance personnalisée, directement chez vous, dans un cadre calme et rassurant.',
      },
    ],
  },
} satisfies SiteData;
