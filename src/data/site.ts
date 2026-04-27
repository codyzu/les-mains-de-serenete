// @unocss-include
export type SiteData = {
  brand: string;
  subtitle: string;
  siteUrl: string;
  phone: string;
  email: string;
  bookingUrl: string;
  whatsappUrl: string;
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
    womenOnlyLabel: string;
    benefitHighlight: string;
    primaryCta: string;
    secondaryCta: string;
    whatsappCta: string;
  };
  promo?: {
    title: string;
    headline: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
  needsSection: {
    title: string;
    items: string[];
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
    reassuranceNote?: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    intro: string;
    items: Array<{
      text: string;
      author: string;
    }>;
  };
  feltBenefits: {
    title: string;
    items: string[];
  };
};

export const site = {
  brand: 'Les Mains de Sérénité',
  subtitle: 'Massage bien-être à Annecy',
  siteUrl: 'https://lesmainsdeserenite.fr',
  phone: '06 18 75 81 28',
  email: 'bonjour@lesmainsdeserenite.fr',
  bookingUrl: 'https://cal.eu/lesmainsdeserenite',
  whatsappUrl:
    'https://wa.me/33618758128?text=Bonjour%2C%20je%20souhaite%20des%20informations%20pour%20un%20massage',
  locationText:
    'Massages bien-être à Annecy, sur rendez-vous, dans un cadre calme et confortable.',
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
    description: 'À Annecy, dans un cadre bienveillant, apaisant et sécurisé.',
    womenOnlyLabel: 'Réservé aux femmes',
    benefitHighlight: 'Idéal pour jambes lourdes et ventre gonflé',
    primaryCta: 'Réserver un massage',
    secondaryCta: 'Appeler',
    whatsappCta: 'WhatsApp',
  },
  promo: {
    title: 'Offre découverte',
    headline: 'Première séance découverte : 45 min à 50€',
    description:
      'Un premier moment pour découvrir les bienfaits du massage, dans un cadre doux et rassurant.',
    ctaText: 'Réserver un massage',
    ctaLink: '/reserver',
  },
  needsSection: {
    title: 'Pour quels besoins ?',
    items: [
      'Jambes lourdes',
      'Ventre gonflé',
      'Rétention d’eau',
      'Fatigue / sensation de lourdeur',
    ],
  },
  massages: [
    {
      title: 'Drainage lymphatique',
      description:
        'Drainage lymphatique dynamique selon la méthode Renata França. Idéal pour soulager les jambes lourdes, le ventre gonflé et la rétention d’eau, il procure une agréable sensation de légèreté.',
      icon: 'i-lucide-droplets',
      prices: [
        {duration: '45 min', price: '70 €'},
        {duration: '1 h', price: '90 €', recommended: true},
        {duration: '1 h 30', price: '125 €'},
      ],
    },
    {
      title: 'Massage anti-douleur',
      description:
        'Massage ciblé pour soulager les tensions musculaires et les inconforts du quotidien. Idéal pour le dos, les épaules et la nuque, il aide à retrouver confort et détente.',
      icon: 'i-lucide-activity',
      prices: [
        {duration: '45 min', price: '60 €'},
        {duration: '1 h', price: '80 €', recommended: true},
        {duration: '1 h 30', price: '115 €'},
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
Je suis Zahara, praticienne en massage bien-être à Annecy, avec une formation d’auxiliaire de puériculture, ce qui m’a permis de développer une approche attentive, douce et à l’écoute du corps.

Formée au drainage lymphatique selon la méthode Renata França, je propose des massages réservés aux femmes, pensés pour offrir un véritable moment de relâchement et de bien-être.

Je vous propose des massages bien-être dans un cadre de confiance, de confort et de sérénité, où chaque séance invite à ralentir, à relâcher les tensions et à se reconnecter à ses sensations.

Chaque séance est entièrement personnalisée, en fonction de vos besoins du moment, qu’il s’agisse de soulager des tensions, de relâcher le stress ou simplement de vous accorder un moment pour vous.

Mon objectif est simple : vous offrir une parenthèse de bien-être dans un environnement calme, rassurant et bienveillant, pensé pour que vous puissiez pleinement relâcher et profiter de l’instant.
    `,
  },
  sessionSteps: {
    title: 'Comment se déroule une séance ?',
    intro: 'Un moment de bien-être, en toute simplicité.',
    reassuranceNote: 'Aucun matériel n’est à prévoir de votre côté.',
    steps: [
      {
        title: 'Réservation',
        description:
          'Choisissez le créneau qui vous convient en ligne ou par téléphone.',
      },
      {
        title: 'Lieu du rendez-vous',
        description:
          'La séance a lieu sur rendez-vous à Annecy, dans un cadre calme, confortable et propice à la détente, avec tout le matériel nécessaire.',
      },
      {
        title: 'Votre moment de détente',
        description:
          'Vous profitez d’une séance personnalisée dans un cadre calme, rassurant et propice à la détente.',
      },
    ],
  },
  testimonials: {
    title: 'Avis clientes',
    intro: 'Celles qui ont testé en parlent le mieux.',
    items: [
      {
        text: 'Un vrai moment de détente. Je me suis sentie à l’aise du début à la fin, dans un cadre très apaisant.',
        author: 'Marie, Annecy',
      },
      {
        text: 'Très douce, professionnelle et à l’écoute. Le cadre est confortable et on se sent rapidement en confiance.',
        author: 'Sophie, Annecy',
      },
      {
        text: 'Une expérience très agréable, dans un environnement simple et rassurant. Je recommande vivement.',
        author: 'Camille, Annecy',
      },
    ],
  },
  feltBenefits: {
    title: 'Les bienfaits ressentis',
    items: [
      'Sensation de légèreté',
      'Jambes moins lourdes',
      'Ventre moins gonflé',
      'Détente profonde',
      'Un vrai moment pour soi',
    ],
  },
} satisfies SiteData;
