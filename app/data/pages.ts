export interface ContentSection {
  title: string
  paragraphs: string[]
  points?: string[]
  reference?: string
}

export interface StaticPage {
  title: string
  eyebrow: string
  heroTitle: string
  intro: string
  description: string
  sections: ContentSection[]
  actionLabel?: string
  actionTo?: string
}

/**
 * Textes institutionnels de base.
 * Les formulations décrivent la mission publique de l'EEM sans inventer
 * de responsables, d'horaires, de programmes ou de positions doctrinales.
 */
export const staticPages: Record<string, StaticPage> = {
  eglise: {
    title: 'L’Église',
    eyebrow: 'Qui sommes-nous ?',
    heroTitle: 'Une communauté rassemblée autour de l’Évangile.',
    intro: 'L’Église Évangélique Les Moissonneurs est une communauté chrétienne engagée à annoncer l’Évangile de Jésus-Christ et à contribuer au salut des âmes.',
    description: 'Découvrez l’identité et la mission de l’Église Évangélique Les Moissonneurs à Kinshasa.',
    sections: [
      {
        title: 'Notre mission',
        paragraphs: [
          'Annoncer l’Évangile de Jésus-Christ et faire connaître le message du salut : telle est la mission au cœur de l’identité des Moissonneurs.',
          'Nous souhaitons que chaque personne puisse entendre la Bonne Nouvelle, découvrir l’amour de Dieu et cheminer dans la foi.'
        ],
        reference: 'Matthieu 28:19-20'
      },
      {
        title: 'Une foi qui se vit au quotidien',
        paragraphs: [
          'La foi chrétienne ne se limite pas à une déclaration. Elle invite à rechercher Dieu, à mettre sa Parole en pratique et à manifester l’amour du prochain dans la vie de tous les jours.',
          'La prière, l’écoute des Écritures, la communion fraternelle et le service constituent des repères essentiels de la vie chrétienne.'
        ],
        reference: 'Jacques 1:22 ; Jean 13:34-35'
      },
      {
        title: 'Pourquoi Les Moissonneurs ?',
        paragraphs: [
          'Le nom Les Moissonneurs évoque l’image biblique de la moisson et l’appel à prendre part à l’œuvre de Dieu. Il rappelle l’importance de partager l’Évangile avec conviction, humilité et amour.',
          'Cette image inspire une communauté tournée vers le témoignage chrétien et l’annonce de Jésus-Christ.'
        ],
        reference: 'Matthieu 9:37-38'
      },
      {
        title: 'Une communauté ouverte',
        paragraphs: [
          'Que vous soyez déjà engagé dans la foi chrétienne, en recherche spirituelle ou simplement désireux de découvrir l’Église, vous pouvez prendre contact avec nous.',
          'Nous vous invitons à venir découvrir la communauté et à échanger avec l’Église.'
        ]
      }
    ],
    actionLabel: 'Nous contacter',
    actionTo: '/contact'
  },
  'vie-de-leglise': {
    title: 'Vie de l’Église',
    eyebrow: 'Foi et communion',
    heroTitle: 'Une foi qui se partage et se construit ensemble.',
    intro: 'La vie de l’Église s’enracine dans la relation avec Dieu et se nourrit de la communion fraternelle, de la prière et du service.',
    description: 'Découvrez les repères de la vie communautaire et les annonces officielles de l’Église.',
    sections: [
      {
        title: 'Se retrouver autour de la foi',
        paragraphs: [
          'Se réunir permet de louer Dieu, d’écouter sa Parole, de prier et de s’encourager mutuellement. La communauté chrétienne est appelée à grandir dans la foi et à porter attention les uns aux autres.',
          'Les informations pratiques relatives aux rencontres de l’EEM seront publiées ici dès leur confirmation officielle.'
        ],
        reference: 'Hébreux 10:24-25'
      },
      {
        title: 'Grandir dans la communion',
        paragraphs: [
          'La communion fraternelle se manifeste par l’accueil, l’écoute, l’encouragement et l’attention portée aux besoins de chacun.',
          'Elle invite chaque croyant à contribuer, selon ses dons et ses possibilités, à la vie de la communauté.'
        ],
        reference: 'Actes 2:42'
      },
      {
        title: 'Participer à la vie de l’Église',
        paragraphs: [
          'Les annonces, événements et temps forts confirmés par l’Église seront présentés dans cette rubrique.',
          'Pour obtenir une information à jour ou préparer votre visite, contactez directement l’équipe de l’Église.'
        ]
      }
    ],
    actionLabel: 'Consulter les actualités',
    actionTo: '/actualites'
  },
  enseignements: {
    title: 'Enseignements',
    eyebrow: 'La Parole au centre',
    heroTitle: 'Écouter, comprendre et mettre la Parole en pratique.',
    intro: 'Les enseignements chrétiens ont pour vocation d’aider chacun à mieux connaître les Écritures, à approfondir sa foi en Jésus-Christ et à vivre selon l’Évangile.',
    description: 'Retrouvez les prédications, messages bibliques et ressources publiés par l’Église.',
    sections: [
      {
        title: 'Une foi nourrie par les Écritures',
        paragraphs: [
          'La Bible occupe une place centrale dans la découverte et la croissance de la foi chrétienne. Lire, écouter et méditer les Écritures aide à mieux comprendre le message de l’Évangile.',
          'Un enseignement ne se limite pas à l’écoute : il invite aussi à la réflexion, à la mise en pratique et à une vie transformée.'
        ],
        reference: '2 Timothée 3:16-17'
      },
      {
        title: 'Des ressources pour progresser',
        paragraphs: [
          'Cette rubrique accueillera les prédications et enseignements effectivement publiés par l’EEM, avec leurs références bibliques et, lorsque disponibles, leurs supports audio ou vidéo.',
          'Chaque publication sera accompagnée de son titre, de sa date et des informations nécessaires pour la retrouver.'
        ]
      },
      {
        title: 'Prendre le temps de méditer',
        paragraphs: [
          'Nous encourageons chacun à examiner les enseignements à la lumière des Écritures, à poursuivre sa lecture personnelle et à échanger avec maturité.'
        ],
        reference: 'Actes 17:11'
      }
    ],
    actionLabel: 'Voir les actualités',
    actionTo: '/actualites'
  },
  actualites: {
    title: 'Actualités',
    eyebrow: 'La vie de notre communauté',
    heroTitle: 'Les nouvelles et les temps forts de l’Église.',
    intro: 'Retrouvez ici les annonces, informations et retours en images communiqués par l’Église Évangélique Les Moissonneurs.',
    description: 'Les annonces et nouvelles officielles de l’Église Évangélique Les Moissonneurs.',
    sections: [
      {
        title: 'Une information claire et vérifiée',
        paragraphs: [
          'Cette rubrique est destinée à partager les nouvelles utiles à la communauté : annonces, événements confirmés, activités et retours sur les temps forts de l’Église.',
          'Les dates, lieux et modalités pratiques seront publiés après validation par les responsables habilités.'
        ]
      },
      {
        title: 'Suivre les nouvelles de l’EEM',
        paragraphs: [
          'En attendant les prochaines publications sur ce site, vous pouvez retrouver les communications de l’Église sur sa page Facebook officielle.'
        ]
      }
    ],
    actionLabel: 'Suivre l’EEM sur Facebook',
    actionTo: 'https://www.facebook.com/people/%C3%89glise-%C3%89vang%C3%A9lique-Les-MoissonneursEEM/61593163313292/'
  },
  contact: {
    title: 'Contact',
    eyebrow: 'Nous sommes à votre écoute',
    heroTitle: 'Prenons contact.',
    intro: 'Vous souhaitez visiter l’Église, obtenir un renseignement ou échanger avec notre communauté ? Retrouvez ici les coordonnées officielles de l’EEM.',
    description: 'Adresse, téléphone, WhatsApp et e-mail de l’Église Évangélique Les Moissonneurs à Kinshasa.',
    sections: [
      {
        title: 'Nous rendre visite',
        paragraphs: [
          'L’Église Évangélique Les Moissonneurs est située au 162, avenue des Fresias, 11ème Rue, commune de Limete Résidentiel, à Kinshasa.'
        ]
      },
      {
        title: 'Nous écrire ou nous appeler',
        paragraphs: [
          'Vous pouvez joindre l’Église par téléphone, WhatsApp ou e-mail. Pour une demande nécessitant un échange personnel, indiquez simplement le meilleur moyen de vous recontacter.'
        ]
      }
    ]
  },
  priere: {
    title: 'Demande de prière',
    eyebrow: 'Nous voulons vous écouter',
    heroTitle: 'Vous pouvez partager votre sujet de prière.',
    intro: 'Que vous traversiez une épreuve, une période d’incertitude ou que vous souhaitiez simplement confier un sujet à la prière, vous pouvez prendre contact avec l’Église.',
    description: 'Contacter l’Église Évangélique Les Moissonneurs pour partager une demande de prière.',
    sections: [
      {
        title: 'Une démarche simple et confidentielle',
        paragraphs: [
          'Vous pouvez transmettre votre demande par téléphone, WhatsApp ou e-mail. Vous restez libre de partager uniquement les informations que vous souhaitez communiquer.',
          'Votre demande est personnelle : ne transmettez pas sur un espace public des informations sensibles que vous souhaitez garder privées.'
        ]
      },
      {
        title: 'Nous contacter',
        paragraphs: [
          'Choisissez le moyen de contact qui vous convient. Si vous souhaitez rester discret, vous pouvez commencer votre message sans détailler votre situation.'
        ]
      }
    ],
    actionLabel: 'Écrire à l’Église',
    actionTo: '/contact'
  },
  'rendez-vous': {
    title: 'Demander un rendez-vous',
    eyebrow: 'Échange et accompagnement',
    heroTitle: 'Besoin d’un temps d’échange ?',
    intro: 'Vous souhaitez parler à un responsable de l’Église ou demander un accompagnement ? Prenez contact afin de convenir d’un moment adapté.',
    description: 'Demander un rendez-vous auprès de l’Église Évangélique Les Moissonneurs.',
    sections: [
      {
        title: 'Comment faire une demande ?',
        paragraphs: [
          'Contactez l’Église par téléphone, WhatsApp ou e-mail. Précisez brièvement le motif de votre demande et le moyen de vous joindre.',
          'Les disponibilités et les modalités du rendez-vous seront confirmées directement avec vous.'
        ]
      },
      {
        title: 'Respect de votre vie privée',
        paragraphs: [
          'Communiquez uniquement les informations nécessaires à la prise de contact. Les sujets personnels ne doivent pas être publiés dans les espaces publics du site.'
        ]
      }
    ],
    actionLabel: 'Contacter l’Église',
    actionTo: '/contact'
  }
}
