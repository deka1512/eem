import { church } from '~/data/church'

export interface ContentSection {
  title: string
  paragraphs: string[]
  points?: string[]
  reference?: string
}

export interface StaticPage {
  title: string
  heroImage: string
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
    heroImage: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2200&q=85',
    title: 'L’Église',
    eyebrow: 'Qui sommes-nous ?',
    heroTitle: 'Une communauté rassemblée autour de l’Évangile.',
    intro: 'L’Église Évangélique Les Moissonneurs est une communauté chrétienne engagée à annoncer l’Évangile de Jésus-Christ et à contribuer au salut des âmes.',
    description: 'Découvrez l’identité et la mission de l’Église Évangélique Les Moissonneurs à Kinshasa.',
    sections: [
      {
        title: 'Notre histoire',
        paragraphs: [
          'L’histoire de l’Église Évangélique Les Moissonneurs se comprend d’abord à travers la mission qui porte son nom : annoncer l’Évangile de Jésus-Christ et contribuer au salut des âmes.',
          'À Limete, à Kinshasa, cette identité s’exprime par le rassemblement autour de la Parole, la prière, la communion fraternelle et le service. La communauté souhaite accueillir chaque personne avec respect et l’encourager à découvrir ou approfondir sa foi.',
          'Cette page présente les repères essentiels de notre identité. Les dates fondatrices, les grandes étapes et les témoignages historiques seront ajoutés à partir des archives et des informations officiellement validées par l’Église.'
        ],
        reference: 'Matthieu 9:37-38'
      },
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
      },
    ],
    actionLabel: 'Nous contacter',
    actionTo: '/contact'
  },
  'vie-de-leglise': {
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=85',
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
      },
      {
        title: 'Chacun peut contribuer',
        paragraphs: [
          'La vie communautaire ne repose pas sur une seule personne. Chacun peut encourager, accueillir, prier, partager ses compétences et prendre part au bien commun selon ses possibilités.',
          'Le service chrétien commence souvent par des gestes simples, accomplis avec amour et fidélité.'
        ],
        reference: '1 Pierre 4:10'
      }
    ],
    actionLabel: 'Consulter les actualités',
    actionTo: '/actualites'
  },
  enseignements: {
    heroImage: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2200&q=85',
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
      },
      {
        title: 'Comprendre pour mieux mettre en pratique',
        paragraphs: [
          'Lire un passage biblique dans son contexte aide à mieux saisir son message. Il est utile de tenir compte du texte, de son destinataire et de l’ensemble de l’enseignement des Écritures.',
          'La croissance spirituelle se poursuit lorsque ce qui est entendu nourrit la réflexion et inspire les choix du quotidien.'
        ],
        reference: 'Jacques 1:22'
      }
    ],
    actionLabel: 'Contacter l’Église',
    actionTo: '/contact'
  },
  actualites: {
    heroImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2200&q=85',
    title: 'Actualités',
    eyebrow: 'La vie de notre communauté',
    heroTitle: 'Les nouvelles et les temps forts de l’Église.',
    intro: 'Découvrez des articles autour de la foi chrétienne, de la prière, de la mission et de la vie communautaire. Les annonces pratiques seront publiées après confirmation par l’Église.',
    description: 'Articles d’édification, ressources bibliques et annonces confirmées de l’Église Évangélique Les Moissonneurs.',
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
      },
      {
        title: 'Des nouvelles partagées avec discernement',
        paragraphs: [
          'Les informations diffusées sur ce site ont vocation à être utiles, compréhensibles et vérifiables. Les publications qui concernent des personnes sont partagées dans le respect de leur dignité et de leur accord.',
          'Pour les informations urgentes ou les précisions pratiques, privilégiez les coordonnées officielles de l’Église.'
        ]
      }
    ],
    actionLabel: 'Suivre l’EEM sur Facebook',
    actionTo: church.facebookUrl
  },
  contact: {
    heroImage: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2200&q=85',
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
      },
      {
        title: 'Préparer votre message',
        paragraphs: [
          'Pour faciliter votre demande, indiquez clairement l’objet de votre prise de contact et le moyen par lequel vous souhaitez recevoir une réponse.',
          'Si votre demande concerne une visite, un échange pastoral ou une information pratique, précisez-le simplement dès le premier message.'
        ],
        points: ['Votre nom, si vous souhaitez le communiquer', 'Le sujet général de votre demande', 'Votre moyen de contact préféré']
      },
      {
        title: 'Nous trouver à Limete',
        paragraphs: [
          'Adresse : 162, avenue des Fresias, 11ème Rue, commune de Limete Résidentiel, Kinshasa. Pour préparer votre déplacement, vous pouvez nous contacter afin de confirmer les indications utiles.'
        ]
      }
    ]
  },
  priere: {
    heroImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2200&q=85',
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
      },
      {
        title: 'Vous pouvez partager votre demande à votre rythme',
        paragraphs: [
          'Il n’est pas nécessaire de raconter toute votre situation dans un premier message. Quelques mots suffisent pour indiquer que vous souhaitez être accompagné dans la prière.',
          'Vous pouvez également préciser si vous souhaitez être recontacté ou si vous préférez simplement transmettre un sujet de prière.'
        ],
        points: ['Partagez uniquement ce que vous souhaitez confier', 'Évitez les détails personnels dans les espaces publics', 'Indiquez si un retour de l’Église est souhaité']
      },
      {
        title: 'Un encouragement dans l’épreuve',
        paragraphs: [
          'La prière est une démarche de confiance et d’espérance. La communauté chrétienne est appelée à porter les fardeaux les uns des autres avec compassion et discrétion.'
        ],
        reference: 'Galates 6:2'
      }
    ],
    actionLabel: 'Écrire à l’Église',
    actionTo: '/contact'
  },
  'rendez-vous': {
    heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=85',
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
      },
      {
        title: 'Pour faciliter l’organisation',
        paragraphs: [
          'Précisez le motif général de votre demande, vos disponibilités et le moyen de contact à privilégier. L’équipe pourra ainsi vous répondre et convenir avec vous des modalités possibles.',
          'Un rendez-vous n’est confirmé qu’après échange direct avec l’Église.'
        ],
        points: ['Indiquer le sujet général de la rencontre', 'Proposer quelques disponibilités', 'Laisser un numéro ou une adresse de réponse']
      },
      {
        title: 'Un échange dans le respect et l’écoute',
        paragraphs: [
          'Chaque échange mérite attention et respect. Vous pouvez présenter votre demande avec simplicité, sans transmettre d’informations sensibles avant d’avoir établi le contact.'
        ]
      }
    ],
    actionLabel: 'Contacter l’Église',
    actionTo: '/contact'
  }
}
