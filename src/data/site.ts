// @unocss-include
export type Locale = 'fr' | 'en';
export type LocalePathMap = Record<Locale, string>;

export type SiteBusinessData = {
  name: string;
  siteUrl: string;
  phone: string;
  email: string;
  bookingUrl: string;
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
};

export type SiteHeaderData = {
  tagline: string;
  links: {
    home: string;
    massages: string;
    about: string;
    reserve: string;
    contact: string;
  };
};

export type SiteFooterData = {
  tagline: string;
  links: {
    massages: string;
    about: string;
    reserve: string;
    contact: string;
    legal: string;
    privacy: string;
  };
  disclaimer: string;
};

export type SiteChromeData = {
  header: SiteHeaderData;
  footer: SiteFooterData;
};

export type HeroData = {
  subtitle: string;
  title: string;
  description: string;
  imageAlt: string;
  womenOnlyLabel: string;
  benefitHighlight: string;
  primaryCta: string;
  secondaryCta: string;
  whatsappCta: string;
};

export type PromoData = {
  title: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

export type NeedsSectionData = {
  title: string;
  intro: string;
  items: string[];
};

export type MassagePriceData = {
  duration: string;
  price: string;
  recommended?: boolean;
};

export type MassageData = {
  title: string;
  description: string;
  icon: string;
  prices: MassagePriceData[];
};

export type MassagesSectionData = {
  title: string;
  intro: string;
  recommendedLabel: string;
  items: MassageData[];
};

export type AboutData = {
  title: string;
  body: string;
  imageAlt: string;
};

export type SessionStepsData = {
  title: string;
  intro: string;
  reassuranceNote?: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
};

export type TestimonialsData = {
  title: string;
  intro: string;
  items: Array<{
    text: string;
    author: string;
  }>;
};

export type FeltBenefitsData = {
  title: string;
  intro: string;
  items: string[];
};

export type ContactBlockData = {
  title: string;
  subtitle: string;
  whatsappTitle: string;
  phoneTitle: string;
  emailTitle: string;
  locationTitle: string;
  whatsappDescription: string;
  phoneDescription: string;
  emailDescription: string;
  whatsappLabel: string;
  locationText?: string;
};

export type HomePageData = {
  meta: {
    title: string;
    description: string;
  };
  hero: HeroData;
  promo?: PromoData;
  needsSection: NeedsSectionData;
  massagesSection: MassagesSectionData;
  about: AboutData;
  sessionSteps: SessionStepsData;
  feltBenefits: FeltBenefitsData;
  testimonials: TestimonialsData;
  booking: {
    bookingPath: string;
    title: string;
    description: string;
    note: string;
    ctaText: string;
  };
  contact: ContactBlockData;
  whatsapp: {
    generalHref: string;
  };
};

export type ReservePageData = {
  meta: {
    title: string;
    description: string;
  };
  redirect: {
    title: string;
    kicker: string;
    heading: string;
    description: string;
    ctaText: string;
    delayMs: number;
  };
};

export type ReserveOnlinePageData = {
  meta: {
    title: string;
    description: string;
  };
  reserveLink: string;
  hero: {
    kicker: string;
    title: string;
    description: string;
    reassuranceItems: Array<{
      icon: string;
      label: string;
    }>;
    testimonialQuote: string;
    testimonialAuthor: string;
  };
  scheduler: {
    title: string;
    description: string;
    detail: string;
    paymentNote: string;
    disclaimer: string;
  };
  contact: ContactBlockData & {
    whatsappHref: string;
  };
};

export type LocalizedSiteData = {
  locale: string;
  lang: string;
  chrome: SiteChromeData;
  pages: {
    home: HomePageData;
    reserve: ReservePageData;
    reserveOnline: ReserveOnlinePageData;
  };
};

export type GlobalPagesData = {
  mentionsLegalesPath: string;
  politiqueConfidentialitePath: string;
};

export type SiteData = {
  business: SiteBusinessData;
  localized: Partial<Record<Locale, LocalizedSiteData>>;
  pages: GlobalPagesData;
};

export const defaultLocale: Locale = 'fr';

const businessPhone = '07 66 61 20 17';
const whatsappPhone = businessPhone.replace(/\D/g, '').replace(/^0/, '33');
const getWhatsappHref = (message: string) =>
  `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

const siteBase = {
  business: {
    name: 'Les Mains de Sérénité',
    siteUrl: 'https://lesmainsdeserenite.fr',
    phone: businessPhone,
    email: 'bonjour@lesmainsdeserenite.fr',
    bookingUrl: 'https://cal.eu/lesmainsdeserenite',
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
      hostAddress:
        '88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis',
      hostWebsite: 'https://github.com',
      dataRetention:
        '3 ans maximum après le dernier contact émanant de la personne',
      lastUpdated: '16 mars 2026',
    },
  },
  localized: {
    fr: {
      locale: 'fr-FR',
      lang: 'fr',
      chrome: {
        header: {
          tagline: 'Massage bien-être',
          links: {
            home: 'Accueil',
            massages: 'Massages',
            about: 'À propos',
            reserve: 'Réserver',
            contact: 'Contact',
          },
        },
        footer: {
          tagline: 'Massage bien-être',
          links: {
            massages: 'Massages',
            about: 'À propos',
            reserve: 'Réserver',
            contact: 'Contact',
            legal: 'Mentions légales',
            privacy: 'Politique de confidentialité',
          },
          disclaimer: 'Massage bien-être sans visée thérapeutique ou médicale.',
        },
      },
      pages: {
        home: {
          meta: {
            title:
              'Les Mains de Sérénité | Massage bien-être à Annecy pour femmes',
            description:
              'Massage bien-être à Annecy pour femmes, sur rendez-vous, dans un cadre calme et confortable. Drainage lymphatique, massage anti-douleur, remodelant et visage.',
          },
          hero: {
            subtitle: 'Massage bien-être à Annecy',
            title: 'Les Mains de Sérénité',
            description:
              'À Annecy, dans un cadre bienveillant, apaisant et sécurisé.',
            imageAlt: 'Ambiance bien-être et massage',
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
            intro:
              'Des besoins fréquents pour lesquels ces massages sont particulièrement adaptés.',
            items: [
              'Jambes lourdes',
              'Ventre gonflé',
              'Rétention d’eau',
              'Fatigue / sensation de lourdeur',
            ],
          },
          massagesSection: {
            title: 'Massages proposés',
            intro:
              'Des massages pensés pour soulager les tensions et offrir un véritable moment de bien-être.',
            recommendedLabel: 'Durée conseillée',
            items: [
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
          },
          about: {
            title: 'À propos',
            body: `
Je suis Zahara, praticienne en massage bien-être à Annecy, avec une formation d’auxiliaire de puériculture, ce qui m’a permis de développer une approche attentive, douce et à l’écoute du corps.

Formée au drainage lymphatique selon la méthode Renata França, je propose des massages réservés aux femmes, pensés pour offrir un véritable moment de relâchement et de bien-être.

Je vous propose des massages bien-être dans un cadre de confiance, de confort et de sérénité, où chaque séance invite à ralentir, à relâcher les tensions et à se reconnecter à ses sensations.

Chaque séance est entièrement personnalisée, en fonction de vos besoins du moment, qu’il s’agisse de soulager des tensions, de relâcher le stress ou simplement de vous accorder un moment pour vous.

Mon objectif est simple : vous offrir une parenthèse de bien-être dans un environnement calme, rassurant et bienveillant, pensé pour que vous puissiez pleinement relâcher et profiter de l’instant.
            `,
            imageAlt: 'Ambiance bien-être et massage',
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
            intro: 'Des bienfaits souvent ressentis dès la fin de la séance.',
            items: [
              'Sensation de légèreté',
              'Jambes moins lourdes',
              'Ventre moins gonflé',
              'Détente profonde',
              'Un vrai moment pour soi',
            ],
          },
          booking: {
            bookingPath: '/reserver',
            title: 'Réserver votre massage',
            description:
              'Réservez facilement votre massage en ligne et choisissez le créneau qui vous convient.',
            note: 'Échange facile par téléphone ou WhatsApp avant réservation',
            ctaText: 'Réserver en ligne',
          },
          contact: {
            title: 'Contact',
            subtitle:
              'Une question, une demande particulière, ou envie de réserver directement par téléphone ou sur WhatsApp ?',
            whatsappTitle: 'WhatsApp',
            phoneTitle: 'Téléphone',
            emailTitle: 'Email',
            locationTitle: 'Lieu',
            whatsappDescription:
              'Réponse rapide pour toute question avant réservation.',
            phoneDescription:
              'Pour échanger rapidement avant votre réservation.',
            emailDescription:
              'Idéal si vous préférez poser votre question par écrit.',
            whatsappLabel: 'Écrire sur WhatsApp',
            locationText:
              'Massages bien-être à Annecy, sur rendez-vous, dans un cadre calme et confortable.',
          },
          whatsapp: {
            generalHref: getWhatsappHref(
              'Bonjour, je souhaite des informations pour un massage'
            ),
          },
        },
        reserve: {
          meta: {
            title: 'Redirection...',
            description: 'Redirection vers la reservation en ligne.',
          },
          redirect: {
            title: 'Redirection...',
            kicker: 'Reservation',
            heading: 'Redirection en cours...',
            description:
              'Vous allez etre redirige(e) vers la reservation en ligne.',
            ctaText: 'Continuer maintenant',
            delayMs: 600,
          },
        },
        reserveOnline: {
          meta: {
            title: 'Réserver un massage à Annecy | Les Mains de Sérénité',
            description:
              'Réservez votre massage bien-être à Annecy. Service réservé aux femmes, réservation simple en ligne, paiement sur place.',
          },
          reserveLink: '/reserver-en-ligne',
          hero: {
            kicker: 'Massage bien-être à Annecy',
            title: 'Réserver votre massage bien-être',
            description:
              'Choisissez votre massage et votre créneau en toute simplicité. Les séances sont proposées sur rendez-vous, dans un cadre calme, bienveillant et apaisant.',
            reassuranceItems: [
              {
                icon: 'i-lucide-flower',
                label: 'Réservé aux femmes',
              },
              {
                icon: 'i-lucide-home',
                label: 'Cadre calme et privé',
              },
              {
                icon: 'i-lucide-briefcase-medical',
                label: 'Table et matériel inclus',
              },
              {
                icon: 'i-lucide-wallet',
                label: 'Paiement sur place',
              },
            ],
            testimonialQuote:
              'Un vrai moment de détente, je recommande vivement.',
            testimonialAuthor: 'Marie, Annecy',
          },
          scheduler: {
            title: 'Choisissez votre créneau',
            description:
              'Choisissez votre massage puis votre créneau en quelques secondes.',
            detail:
              'Chaque séance est adaptée à vos besoins du moment, pour vous offrir un véritable moment de détente.',
            paymentNote: 'Aucun paiement en ligne. Règlement sur place.',
            disclaimer:
              'Service réservé aux femmes · Massage bien-être sans visée médicale',
          },
          contact: {
            title: 'Une question avant de réserver ?',
            subtitle:
              'Je vous réponds rapidement pour vous aider à choisir le massage le plus adapté.',
            whatsappTitle: 'WhatsApp',
            phoneTitle: 'Téléphone',
            emailTitle: 'Email',
            locationTitle: 'Lieu',
            whatsappDescription:
              'Réponse rapide pour toute question avant réservation.',
            phoneDescription:
              'Pour échanger rapidement avant votre réservation.',
            emailDescription:
              'Idéal si vous préférez poser votre question par écrit.',
            whatsappLabel: 'Écrire sur WhatsApp',
            whatsappHref: getWhatsappHref(
              "Bonjour, j'ai une question avant de réserver un massage."
            ),
          },
        },
      },
    },
  },
  pages: {
    mentionsLegalesPath: '/mentions-legales',
    politiqueConfidentialitePath: '/politique-de-confidentialite',
  },
} satisfies Omit<SiteData, 'localized'> & {
  localized: {
    fr: LocalizedSiteData;
  };
};

const frLocalized = siteBase.localized.fr;

const enLocalized = {
  locale: 'en-US',
  lang: 'en',
  chrome: {
    header: {
      tagline: 'Wellness massage',
      links: {
        home: 'Home',
        massages: 'Massages',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
      },
    },
    footer: {
      tagline: 'Wellness massage',
      links: {
        massages: 'Massages',
        about: 'About',
        reserve: 'Book',
        contact: 'Contact',
        legal: 'Legal notice (FR)',
        privacy: 'Privacy policy (FR)',
      },
      disclaimer: 'Wellness massage with no therapeutic or medical purpose.',
    },
  },
  pages: {
    home: {
      meta: {
        title: 'Women’s Wellness Massage in Annecy | Les Mains de Sérénité',
        description:
          'Women-only wellness massage in Annecy, by appointment, in a calm and comfortable setting. Lymphatic drainage, tension relief massage, body sculpting massage, and lifting facial massage.',
      },
      hero: {
        subtitle: 'Wellness massage for women in Annecy',
        title: 'Les Mains de Sérénité',
        description:
          'In Annecy, enjoy a calm, caring, and reassuring space dedicated to your well-being.',
        imageAlt: 'Wellness massage atmosphere',
        womenOnlyLabel: 'For women only',
        benefitHighlight:
          'Especially appreciated for heavy legs and feeling bloated',
        primaryCta: 'Book a massage',
        secondaryCta: 'Call',
        whatsappCta: 'WhatsApp',
      },
      promo: {
        title: 'Intro offer',
        headline: 'First discovery session: 45 min for €50',
        description:
          'A gentle first session to discover the benefits of massage in a calm and reassuring setting.',
        ctaText: 'Book a massage',
        ctaLink: '/en/book',
      },
      needsSection: {
        title: 'Common needs',
        intro: 'Common needs these massages are often chosen for.',
        items: [
          'Heavy legs',
          'Feeling bloated',
          'Water retention',
          'Fatigue and overall heaviness',
        ],
      },
      massagesSection: {
        title: 'Available massages',
        intro:
          'Tailored massages designed to ease tension and offer a true moment of well-being.',
        recommendedLabel: 'Recommended',
        items: [
          {
            title: 'Lymphatic drainage',
            description:
              'Dynamic lymphatic drainage using the Renata França method. Commonly chosen for heavy legs, feeling bloated, and water retention, while creating a pleasant feeling of lightness.',
            icon: 'i-lucide-droplets',
            prices: [
              {duration: '45 min', price: '70 €'},
              {duration: '1 h', price: '90 €', recommended: true},
              {duration: '1 h 30', price: '125 €'},
            ],
          },
          {
            title: 'Tension relief massage',
            description:
              'A targeted massage designed to ease muscular tension and everyday discomfort. Well-suited for the back, shoulders, and neck, and for supporting deep relaxation.',
            icon: 'i-lucide-activity',
            prices: [
              {duration: '45 min', price: '60 €'},
              {duration: '1 h', price: '80 €', recommended: true},
              {duration: '1 h 30', price: '115 €'},
            ],
          },
          {
            title: 'Body sculpting massage',
            description:
              'A toning massage that supports skin firmness and helps improve the appearance of the silhouette.',
            icon: 'i-lucide-scan',
            prices: [
              {duration: '45 min', price: '70 €'},
              {duration: '1 h', price: '90 €', recommended: true},
              {duration: '1 h 30', price: '125 €'},
            ],
          },
          {
            title: 'Lifting facial massage',
            description:
              'A relaxing facial treatment that stimulates circulation and tones the skin, leaving the face feeling refreshed and naturally toned.',
            icon: 'i-lucide-sparkles',
            prices: [
              {duration: '30 min', price: '50 €'},
              {duration: '45 min', price: '65 €', recommended: true},
              {duration: '1 h', price: '85 €'},
            ],
          },
        ],
      },
      about: {
        title: 'About',
        body: `
I am Zahara, a wellness massage practitioner in Annecy. My background as a childcare assistant helped me develop an attentive, gentle, and body-aware approach.

Trained in lymphatic drainage with the Renata França method, I offer women-only massages designed to provide a genuine moment of release and well-being.

I welcome you for wellness massages in a calm and trusted environment where each session invites you to slow down, release tension, and reconnect with your body.

Every session is fully personalized to your needs at that moment, whether you want to ease tension, let go of stress, or simply take time for yourself.

My goal is simple: to offer you a peaceful wellness break in a calm, reassuring, and caring setting where you can fully relax and enjoy the moment.
            `,
        imageAlt: 'Wellness practitioner portrait',
      },
      sessionSteps: {
        title: 'How does a session work?',
        intro: 'A simple and peaceful wellness experience.',
        reassuranceNote: 'You do not need to bring any equipment.',
        steps: [
          {
            title: 'Booking',
            description:
              'Choose the time slot that suits you online or by phone.',
          },
          {
            title: 'Appointment location',
            description:
              'Sessions take place by appointment in Annecy, in a calm and comfortable setting, with all equipment provided.',
          },
          {
            title: 'Your relaxation time',
            description:
              'Enjoy a personalized session in a calm and reassuring environment.',
          },
        ],
      },
      testimonials: {
        title: 'Client reviews',
        intro: 'Clients often describe it best.',
        items: [
          {
            text: 'A truly relaxing experience. I felt comfortable from beginning to end in a very soothing setting.',
            author: 'Marie, Annecy',
          },
          {
            text: 'Very gentle, professional, and attentive. The space is comfortable and you quickly feel at ease.',
            author: 'Sophie, Annecy',
          },
          {
            text: 'A very pleasant experience in a simple and reassuring environment. I highly recommend it.',
            author: 'Camille, Annecy',
          },
        ],
      },
      feltBenefits: {
        title: 'Benefits often felt',
        intro:
          'These are some of the benefits clients often describe after a session.',
        items: [
          'A feeling of lightness',
          'Less heaviness in the legs',
          'Feeling less bloated',
          'Deep relaxation',
          'A true moment for yourself',
        ],
      },
      booking: {
        bookingPath: '/en/book',
        title: 'Book your massage',
        description:
          'Book your massage online in just a few clicks and choose the time slot that suits you best.',
        note: 'Easy to reach by phone or WhatsApp before booking',
        ctaText: 'Book online',
      },
      contact: {
        title: 'Contact',
        subtitle:
          'Have a question, a specific request, or prefer to book directly by phone or WhatsApp?',
        whatsappTitle: 'WhatsApp',
        phoneTitle: 'Phone',
        emailTitle: 'Email',
        locationTitle: 'Location',
        whatsappDescription:
          'Quick reply for any question before your booking.',
        phoneDescription: 'For a quick chat before booking.',
        emailDescription: 'Best if you prefer to ask your question in writing.',
        whatsappLabel: 'Message on WhatsApp',
        locationText:
          'Wellness massage in Annecy, by appointment, in a calm and comfortable setting.',
      },
      whatsapp: {
        generalHref: getWhatsappHref(
          'Hello, I would like more information about a massage.'
        ),
      },
    },
    reserve: {
      meta: {
        title: 'Booking Redirect | Les Mains de Sérénité',
        description:
          'Redirecting you to the online booking page for Les Mains de Sérénité.',
      },
      redirect: {
        title: 'Redirecting...',
        kicker: 'Booking',
        heading: 'Redirecting...',
        description: 'You are being redirected to online booking.',
        ctaText: 'Continue now',
      },
    },
    reserveOnline: {
      meta: {
        title: 'Book Online | Les Mains de Sérénité Annecy',
        description:
          'Book your women-only wellness massage in Annecy. Easy online scheduling and payment on site.',
      },
      reserveLink: '/en/book-online',
      hero: {
        kicker: 'Wellness massage for women in Annecy',
        title: 'Book your wellness massage',
        description:
          'Choose your massage and your preferred time slot with ease. Sessions are available by appointment in a calm, caring, and soothing setting.',
        reassuranceItems: [
          {
            icon: 'i-lucide-flower',
            label: 'Women-only service',
          },
          {
            icon: 'i-lucide-home',
            label: 'Calm and private setting',
          },
          {
            icon: 'i-lucide-briefcase-medical',
            label: 'Massage table and equipment provided',
          },
          {
            icon: 'i-lucide-wallet',
            label: 'Pay on site',
          },
        ],
        testimonialQuote: 'A truly relaxing moment, I highly recommend it.',
        testimonialAuthor: 'Marie, Annecy',
      },
      scheduler: {
        title: 'Choose your time slot',
        description:
          'Pick your massage and your appointment time in just a few seconds.',
        detail:
          'Each session is tailored to your needs at the moment, so you can enjoy a true moment of relaxation.',
        paymentNote: 'No online payment. Please pay on site.',
        disclaimer:
          'Women-only service · Wellness massage with no medical purpose',
      },
      contact: {
        title: 'A question before booking?',
        subtitle:
          'I reply quickly to help you choose the massage that best fits your needs.',
        whatsappTitle: 'WhatsApp',
        phoneTitle: 'Phone',
        emailTitle: 'Email',
        locationTitle: 'Location',
        whatsappDescription:
          'Quick reply for any question before your booking.',
        phoneDescription: 'For a quick chat before booking.',
        emailDescription: 'Best if you prefer to ask your question in writing.',
        whatsappLabel: 'Message on WhatsApp',
        whatsappHref: getWhatsappHref(
          'Hello, I have a question before booking a massage.'
        ),
      },
    },
  },
} satisfies LocalizedSiteData;

export const site = {
  ...siteBase,
  localized: {
    fr: frLocalized,
    en: enLocalized,
  },
} satisfies SiteData;

export const getLocalizedSite = (
  locale: Locale = defaultLocale
): LocalizedSiteData => {
  const localizedSite = site.localized[locale] as LocalizedSiteData | undefined;

  if (!localizedSite) {
    throw new Error(`Missing localized site data for locale: ${locale}`);
  }

  return localizedSite;
};
