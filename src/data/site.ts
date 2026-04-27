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

const siteBase = {
  business: {
    name: 'Les Mains de Sérénité',
    siteUrl: 'https://lesmainsdeserenite.fr',
    phone: '06 18 75 81 28',
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
            generalHref:
              'https://wa.me/33618758128?text=Bonjour%2C%20je%20souhaite%20des%20informations%20pour%20un%20massage',
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
            whatsappDescription:
              'Réponse rapide pour toute question avant réservation.',
            phoneDescription:
              'Pour échanger rapidement avant votre réservation.',
            emailDescription:
              'Idéal si vous préférez poser votre question par écrit.',
            whatsappLabel: 'Écrire sur WhatsApp',
            whatsappHref:
              'https://wa.me/33618758128?text=Bonjour%2C%20j%27ai%20une%20question%20avant%20de%20r%C3%A9server%20un%20massage.',
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
  ...frLocalized,
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
        legal: 'Legal notice',
        privacy: 'Privacy policy',
      },
      disclaimer: 'Wellness massage with no therapeutic or medical purpose.',
    },
  },
  pages: {
    ...frLocalized.pages,
    home: {
      ...frLocalized.pages.home,
      meta: {
        title: 'Les Mains de Sérénité | Wellness massage in Annecy for women',
        description:
          'Wellness massage in Annecy for women, by appointment, in a calm and comfortable setting. Lymphatic drainage, pain-relief massage, body sculpting and facial massage.',
      },
      promo: frLocalized.pages.home.promo
        ? {
            ...frLocalized.pages.home.promo,
            ctaText: 'Book a massage',
            ctaLink: '/en/book',
          }
        : undefined,
      booking: {
        ...frLocalized.pages.home.booking,
        bookingPath: '/en/book',
        title: 'Book your massage',
        description:
          'Book your massage online and choose the time slot that suits you.',
        note: 'Easy contact by phone or WhatsApp before booking',
        ctaText: 'Book online',
      },
      contact: {
        ...frLocalized.pages.home.contact,
        title: 'Contact',
        subtitle:
          'A question, a specific request, or would you like to book directly by phone or WhatsApp?',
        whatsappDescription: 'Quick reply for any question before booking.',
        phoneDescription: 'To quickly discuss your booking.',
        emailDescription:
          'Ideal if you prefer to ask your question in writing.',
        whatsappLabel: 'Message on WhatsApp',
      },
    },
    reserve: {
      ...frLocalized.pages.reserve,
      meta: {
        title: 'Redirecting...',
        description: 'Redirect to online booking.',
      },
      redirect: {
        ...frLocalized.pages.reserve.redirect,
        title: 'Redirecting...',
        kicker: 'Booking',
        heading: 'Redirecting...',
        description: 'You are being redirected to online booking.',
        ctaText: 'Continue now',
      },
    },
    reserveOnline: {
      ...frLocalized.pages.reserveOnline,
      meta: {
        title: 'Book a massage in Annecy | Les Mains de Sérénité',
        description:
          'Book your wellness massage in Annecy. Women-only service, easy online booking, payment on site.',
      },
      reserveLink: '/en/book-online',
      contact: {
        ...frLocalized.pages.reserveOnline.contact,
        title: 'A question before booking?',
        subtitle:
          'I reply quickly to help you choose the massage that suits you best.',
        whatsappDescription: 'Quick reply for any question before booking.',
        phoneDescription: 'To quickly discuss your booking.',
        emailDescription:
          'Ideal if you prefer to ask your question in writing.',
        whatsappLabel: 'Message on WhatsApp',
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
